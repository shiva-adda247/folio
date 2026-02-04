# Contributing to People Portfolio

We welcome everyone to add themselves to the portfolio list! This project is entirely driven by community contributions.

## How to Add Yourself

1.  **Fork the repository** to your own GitHub account.

2.  **Create a new Markdown file** in the `people/` directory. The filename should be `your-name.md` (e.g., `john-doe.md`). Use hyphens for spaces and keep it lowercase.

3.  **Add the required frontmatter**. Copy and paste the template below into your file and fill in your details:

    ```markdown
    ---
    name: "Your Name"
    role: "Your Role (e.g. Frontend Developer)"
    portfolio: "https://yourportfolio.com"
    avatar: "https://yourportfolio.com/avatar.jpg"
    location: "City, Country"
    hardware:
      laptop: "MacBook Pro M1"
      phone: "iPhone 15"
      monitor: "Dell UltraSharp"
    software:
      os: "macOS"
      editor: "VS Code"
      frameworks:
        - "React"
        - "Next.js"
    ---
    ```

    **Rules:**
    - `name`, `role`, `portfolio`, and `avatar` are **REQUIRED**.
    - `portfolio` must be a valid URL.
    - `avatar` must be a valid image URL (hosting it on your own site or GitHub is fine).
    - `hardware` and `software` sections are optional but encouraged!

4.  **Submit a Pull Request (PR)**.
    - Title your PR: `Add [Your Name]`
    - Ensure your file follows the schema.
    - Our CI system will automatically validate your entry.

## Updating Your Entry

To update your information, simply edit your existing file locally and submit a new PR with the changes.

## Local Development

If you want to run the site locally to preview your card:

1.  `npm install`
2.  `npm run dev`
3.  Go to `http://localhost:3000`

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
