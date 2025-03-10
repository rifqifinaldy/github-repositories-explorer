## Github Repositories Explorer FE

A simple Repositories explorer application to find bootstrapped with Next.js 15 application with a range of technologies and tools to enhance development and testing. deployed at [[github-repositoriess-explorer.app/](https://github-repositories-explorer-git-main-rifqifinaldys-projects.vercel.app)]

Installation
To get started with this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/rifqifinaldy/github-repositories-explorer.git
```

2. Install dependencies:

```bash
npm install
```

3. Rename the environment file:

```bash
mv .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

- Next.js 15: This application is built using Next.js, a React framework that enables server-side rendering and static site generation.
- API Routes: The APIs in this application are created using Next.js API routes, which handle requests and responses directly in the frontend.
- Chakra UI: For styling and UI components, we are using Chakra UI, a simple, modular, and accessible component library for React.
- State Management:

1. Custom Hooks: Used for simple and global state management across the application.
2. Redux Toolkit: Integrated for more complex state management scenarios, providing a robust and scalable state container.

## Project Structure

- /app: Contains the Next.js pages & route (App Router)
- /libs/components: Reusable React components that are used globally (unit test also included inside this folder).
- /libs/config: Configured constant data and integration setup.
- /libs/data-type: Configured interface and data type that can be used globally.
- /libs/redux: Redux toolkit slices and store configuration.

## Contact

If you have any questions or feedback, feel free to reach out at [finaldyrifqi@gmail.com].
