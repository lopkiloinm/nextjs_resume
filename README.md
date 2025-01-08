# nextjs_resume

An intuitive and sleek Next.js application to generate and manage your professional resume using OpenAI's powerful language models.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **AI-Powered Resume Generation**: Utilize OpenAI's GPT-4o model to generate comprehensive resume data based on user input.
- **TypeScript Support**: Ensures type safety and enhances developer experience.
- **Clean and Responsive UI**: Built with modern UI components for a seamless user experience.
- **Local Storage Integration**: Saves generated resume data locally for easy access and management.
- **Structured JSON Schema**: Ensures consistency and reliability of resume data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher
- **OpenAI API Key**: To generate resume data using OpenAI's API

## Installation

Follow these steps to set up the `nextjs_resume` project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/nextjs_resume.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd nextjs_resume
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

   This will install all the necessary packages listed in the `package.json` file.

## Environment Variables

To securely use the OpenAI API, you need to set up environment variables.

1. **Create a `.env.local` File**

   In the root directory of your project, create a file named `.env.local`.

2. **Add Your OpenAI API Key**

   ```env
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   ```

   - Replace `your_openai_api_key_here` with your actual OpenAI API key.
   - **Note**: Keep this key confidential and do not expose it publicly.

3. **Obtaining an OpenAI API Key**

   If you don't have an OpenAI API key, follow these steps:

   - **Sign Up / Log In**: Visit [OpenAI](https://beta.openai.com/signup/) and sign up or log in to your account.
   - **Navigate to API Keys**: Once logged in, go to the API section to generate a new API key.
   - **Copy the Key**: Copy the generated API key and paste it into your `.env.local` file as shown above.

## Running the Application

After completing the installation and setting up environment variables, you can start the development server.

```bash
npm run dev
```

- The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Access the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

2. **Enter Resume Details**

   - Use the provided textarea to input your resume details.
   - Click on the **"Generate Resume"** button to initiate the resume generation process.

3. **View Generated Resume**

   - After successful generation, you'll be redirected to the `/resume` page.
   - The generated resume data will be displayed and stored in your browser's local storage.

4. **Handle Errors**

   - If there's an issue during the resume generation process, an error message will be displayed below the input form.

## Project Structure

Here's an overview of the project structure:

```
nextjs_resume/
├── .next/                     # Build output
├── app/
│   ├── fonts/                 # Font files
│   ├── resume/
│   │   └── page.tsx           # Resume page component
│   ├── favicon.ico            # App icon
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Layout component
│   └── page.tsx               # Home page component
├── components/
│   ├── ui/                    # UI components
│   └── Resume.tsx             # Resume component
├── lib/
│   └── utils.ts               # Utility functions
├── node_modules/              # Installed packages
├── types/
│   └── resume.ts              # Type definitions
├── utils/
│   └── generateResumeData.ts  # Resume data generation script
├── .env.local                 # Environment variables
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore rules
├── components.json            # Component configurations
├── next-env.d.ts              # Next.js type declarations
├── next.config.mjs            # Next.js configuration
├── package-lock.json          # Dependency tree
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```

## Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [OpenAI API](https://beta.openai.com/) - AI language model for generating resume data
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Contributing

Contributions are welcome! Follow these steps to contribute to the project:

1. **Fork the Repository**

   Click the **Fork** button at the top right of this page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/nextjs_resume.git
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

4. **Make Your Changes**

   Add your improvements or fixes.

5. **Commit Your Changes**

   ```bash
   git commit -m "Add some feature"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/YourFeature
   ```

7. **Create a Pull Request**

   Navigate to the original repository and click **Compare & pull request**.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [OpenAI](https://openai.com/) for providing the powerful API.
- [Next.js](https://nextjs.org/) community for excellent framework support.
- [Tailwind CSS](https://tailwindcss.com/) for making styling effortless.
