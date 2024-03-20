# OpenSpringFest OSF



# NextJs Auth

NextJs Auth is a project showcased at Open Spring Fest, aimed at exploring and demonstrating advanced functionalities of Next.js, particularly in the context of authentication.

## Overview

NextJs Auth is a web application built using Next.js 14, Tailwind CSS, TypeScript, Node.js with Express, and MongoDB. It serves as an educational platform to delve into the intricacies of Next.js while showcasing best practices in authentication implementation.

## Features

- **Next.js 14**: Utilized as the foundational framework for building the frontend of the application.
- **Tailwind CSS**: Used for efficient and responsive styling of the user interface.
- **TypeScript**: Ensures type safety throughout the codebase, enhancing development workflows and reducing errors.
- **Node.js with Express**: Powers the server-side operations, providing an API for handling authentication and other backend functionalities.
- **MongoDB**: Handles data storage for user authentication and ensures scalability and flexibility.

## Installation

To run NextJs Auth locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/OPCODE-Open-Spring-Fest/nextJs-auth
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs-auth
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   MONGODB_URI=<your-mongodb-uri>
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Access the application in your web browser at `http://localhost:3000`.

## Contributing

Contributions to NextJs Auth are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Create a new pull request.




## Folder structure

``` bash
|   .gitignore
|   CODE_OF_CONDUCT.md
|   commitlint.config.js
|   package-lock.json
|   package.json
|   README.md
|
+---.github
|   +---Contributor_Guide
|   |       commiting.md
|   |       Contributing.md
|   |       Project_Tour.md
|   |
|   +---ISSUE_TEMPLATE
|   |       bug_report.yaml
|   |       feature_request.yaml
|   |
|   +---PULL_REQUEST_TEMPLATE
|   |       pr.md
|   |
|   \---workflows
|           commitlint.yaml
|           prmerged.yaml
|
+---.husky
|   |   commit-msg
|   |   pre-commit
|   |
|   \---_
|           .gitignore
|           applypatch-msg
|           commit-msg
|           h
|           husky.sh
|           post-applypatch
|           post-checkout
|           post-commit
|           post-merge
|           post-rewrite
|           pre-applypatch
|           pre-auto-gc
|           pre-commit
|           pre-push
|           pre-rebase
|           prepare-commit-msg
|
+---client
|   |   next-env.d.ts
|   |   next.config.js
|   |   package-lock.json
|   |   package.json
|   |   postcss.config.js
|   |   tailwind.config.ts
|   |   tsconfig.json
|   |
|   +---public
|   |       next.svg
|   |       vercel.svg
|   |
|   \---src
|       +---app
|       |   |   favicon.ico
|       |   |   globals.css
|       |   |   layout.tsx
|       |   |   page.tsx
|       |   |
|       |   +---login
|       |   |       page.tsx
|       |   |
|       |   \---signup
|       |           page.tsx
|       |
|       +---components
|       |       Login.tsx
|       |       SignUp.tsx
|       |
|       \---utils
|               auth.js
|               constant.js
|
\---server
    |   .env
    |   package-lock.json
    |   package.json
    |   server.js
    |
    +---controller
    |       auth.js
    |       login.js
    |       signUp.js
    |
    +---models
    |       User.js
    |
    \---routes
            authRouts.js
```

## `Setup this keys in .env`

In server folder you need to create a file .env (dotenv file)which should contain the following keys: 

`PORT = 5000`

`MONGODB_URI =`

`JWT_LOGIN_TOKEN =` 



