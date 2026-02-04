import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

const hardwareSchema = z.object({
  laptop: z.string().optional(),
  phone: z.string().optional(),
  monitor: z.string().optional(),
});

const softwareSchema = z.object({
  os: z.string().optional(),
  editor: z.string().optional(),
  frameworks: z.array(z.string()).optional(),
});

export const personSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  portfolio: z.string().url("Portfolio must be a valid URL"),
  avatar: z.string().url("Avatar must be a valid URL"),
  location: z.string().optional(),
  hardware: hardwareSchema.optional(),
  software: softwareSchema.optional(),
});

export type Person = z.infer<typeof personSchema>;

const peopleDirectory = path.join(process.cwd(), 'people');

export async function getPeople(): Promise<Person[]> {
  if (!fs.existsSync(peopleDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(peopleDirectory);
  
  const people = filenames
    .filter((filename) => filename.endsWith('.md') && filename !== 'README.md')
    .map((filename) => {
      const filePath = path.join(peopleDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      const result = personSchema.safeParse(data);
      if (!result.success) {
        console.error(`Validation error in ${filename}:`, result.error.format());
        return null; // Skip invalid entries
      }
      return result.data;
    })
    .filter((person): person is Person => person !== null);

  // Sort by name for consistency
  return people.sort((a, b) => a.name.localeCompare(b.name));
}
