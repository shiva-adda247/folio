import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { personSchema } from '../src/lib/loadPeople';

async function validate() {
    const peopleDirectory = path.join(process.cwd(), 'people');

    if (!fs.existsSync(peopleDirectory)) {
        console.error("❌ 'people' directory missing!");
        process.exit(1);
    }

    const filenames = fs.readdirSync(peopleDirectory);
    const mdFiles = filenames.filter(f => f.endsWith('.md') && f !== 'README.md');

    console.log(`🔍 Validating ${mdFiles.length} entries...`);


    const seenPortfolios = new Set<string>();
    let hasErrors = false;

    for (const filename of mdFiles) {
        const filePath = path.join(peopleDirectory, filename);
        const content = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(content);

        // 1. Schema Validation
        const result = personSchema.safeParse(data);
        if (!result.success) {
            console.error(`❌ [${filename}] Schema Validation Failed:`);
            console.error(JSON.stringify(result.error.format(), null, 2));
            hasErrors = true;
            continue;
        }

        const person = result.data;



        // 3. Duplicate Portfolio Check
        // Normalize URL for comparison (remove trailing slash)
        const normalizedUrl = person.portfolio.replace(/\/$/, "");
        if (seenPortfolios.has(normalizedUrl)) {
            console.error(`❌ [${filename}] Duplicate portfolio URL found: "${person.portfolio}"`);
            hasErrors = true;
        }
        seenPortfolios.add(normalizedUrl);
    }

    if (hasErrors) {
        console.error("\n💥 Validation failed. Please fix the errors above.");
        process.exit(1);
    } else {
        console.log("\n✅ All entries validated successfully!");
    }
}

validate().catch(err => {
    console.error(err);
    process.exit(1);
});
