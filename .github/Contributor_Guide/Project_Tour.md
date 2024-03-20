# Project Tour

Folder structure
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

In server folder you need to create a file .env (dotenv file)which should contain the following keys:
PORT = 5000
MONGODB_URI =
JWT_LOGIN_TOKEN = 
```
