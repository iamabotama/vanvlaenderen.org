## Development Workflow

To ensure a smooth and reliable development process, we follow a structured workflow:

### 1. Feature Development

All new features, content updates, or bug fixes should be developed in a **separate Git branch** (e.g., `feature/new-research-page`, `bugfix/fix-spelling`). This isolates changes and prevents interference with the live site or other ongoing work.

### 2. Testing and Review

Before merging any changes to the `main` branch, the agent will provide a **temporary, publicly accessible URL** for you to review and test the updates. This allows for thorough verification of new content, functionality, and layout in a live-like environment without impacting the production site. The agent will notify you when a test URL is available.

### 3. Automated Deployment (Publishing)

Once the changes have been reviewed and approved, the agent will merge the feature branch into the `main` branch. This action automatically triggers a **GitHub Actions workflow** (`.github/workflows/deploy.yml`) that performs the following steps:

*   **Build**: The project is built for production, optimizing all assets and code.
*   **Deploy**: The built files are automatically deployed to the `gh-pages` branch.

The `gh-pages` branch is configured to serve the live website at [https://vanvlaenderen.org](https://vanvlaenderen.org). Therefore, **pushing to the `main` branch is now the single action required to publish changes to the live website.**

### 4. Rollbacks and Version Control

This workflow leverages Git for robust version control. Every change is tracked, allowing for easy rollbacks if necessary. If an issue is discovered on the live site, the last commit on the `main` branch can be reverted, and the GitHub Actions workflow will automatically redeploy the previous stable version.

This structured approach ensures that the `main` branch always represents the stable, deployable state of the website, and the `gh-pages` branch reflects the current live version, automatically updated through the CI/CD pipeline.
