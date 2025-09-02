# School Listing Application

This is a Next.js application for listing schools. It uses Prisma for database management and allows users to add and search for schools.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for building user interfaces.
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
- [Zod](https://zod.dev/) - TypeScript-first schema validation with static type inference.
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or higher)
- pnpm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/your_project_name.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Setup .env file
   ```
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```
4. Push the database schema
   ```
   npx prisma db push
   ```
5. Seed the database
    ```
    npx prisma db seed
    ```

### Running the application

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm dev`: Runs the application in development mode.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Lints the code.

## Folder Structure

```
.
├── prisma
│   ├── schema.prisma
│   └── seed.ts
├── public
│   └── schoolImages
└── src
    ├── app
    │   ├── addSchool
    │   └── showSchools
    ├── components
    ├── lib
    ├── schema
    └── types
```

## Dependencies

<details>
  <summary>Click to expand</summary>

  - @hookform/resolvers: ^5.2.1
  - @prisma/client: ^6.15.0
  - @radix-ui/react-label: ^2.1.7
  - @radix-ui/react-slot: ^1.2.3
  - class-variance-authority: ^0.7.1
  - clsx: ^2.1.1
  - lucide-react: ^0.542.0
  - motion: ^12.23.12
  - next: 15.5.2
  - next-themes: ^0.4.6
  - prisma: ^6.15.0
  - react: 19.1.0
  - react-dom: 19.1.0
  - react-hook-form: ^7.62.0
  - sonner: ^2.0.7
  - tailwind-merge: ^3.3.1
  - zod: ^4.1.5
</details>

## Dev Dependencies

<details>
  <summary>Click to expand</summary>

  - @eslint/eslintrc: ^3
  - @tailwindcss/postcss: ^4
  - @types/node: ^20
  - @types/react: ^19
  - @types/react-dom: ^19
  - eslint: ^9
  - eslint-config-next: 15.5.2
  - tailwindcss: ^4
  - tsx: ^4.20.5
  - tw-animate-css: ^1.3.7
  - typescript: ^5
</details>