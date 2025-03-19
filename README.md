# Trikonantara

This is the Trikonantara project repository. 

## Note on Image Files

Some large image files have been excluded from this repository to keep the repository size manageable. When running the project locally, you may need to add your own image files to the `public/lovable-uploads` directory.

## Development

To run the project locally:

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Project info

**URL**: https://lovable.dev/projects/b9a88545-82ce-4e2f-838c-4435669fb5c7
**GitHub Pages**: https://hazenbox.github.io/Tk/

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b9a88545-82ce-4e2f-838c-4435669fb5c7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## How can I deploy this project?

This project is configured to be deployed to GitHub Pages using the gh-pages package.

To deploy manually:
1. Build the project: `npm run build`
2. Deploy to GitHub Pages: `npm run deploy`

The site will be available at: https://hazenbox.github.io/Tk/

### Setting up GitHub Pages

To properly set up GitHub Pages for this repository:

1. Go to the GitHub repository settings
2. Navigate to the "Pages" section
3. Under "Build and deployment", select "Deploy from a branch"
4. For "Branch", select "gh-pages" and "/(root)"
5. Click "Save"

After deployment, the site will be available at https://hazenbox.github.io/Tk/

You can also visit [Lovable](https://lovable.dev/projects/b9a88545-82ce-4e2f-838c-4435669fb5c7) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
