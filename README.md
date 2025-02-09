# Cleark Authentication

A Next.js 13+ authentication project with Tailwind CSS and theme support. This project provides a modern, secure authentication system using Clerk Authentication with a beautiful UI powered by Tailwind CSS.

## Features

- 🔐 Secure authentication with Clerk
- 🎨 Modern UI with Tailwind CSS
- 🌙 Theme support
- ⚡ Built with Next.js 13+
- 📱 Responsive design
- 🔄 Real-time session management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.8 or higher)
- npm or yarn
- Git
- A Clerk account (sign up at https://clerk.dev)

## Step-by-Step Setup Guide

### 1. Initial Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/cleark-authentication.git
```

2. Navigate to the project directory:
```bash
cd cleark-authentication
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

### 2. Environment Configuration

## Environment Setup

1. Create a `.env.local` file in the root directory:
```bash
touch .env.local
```
2. Add your Clerk environment variables:
```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# Clerk Authentication Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/header/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/header/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/          # Next.js 13+ app directory
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   └── middleware.ts # Clerk authentication middleware
├── public/           # Static files
└── ...config files
```

## Features Usage

### Authentication

- Sign Up: Visit `header/sign-up` to create a new account
- Sign In: Visit `header/sign-in` to log into your account


### Theme Support

The project includes a built-in theme system powered by Tailwind CSS. You can customize the theme in `tailwind.config.ts`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
