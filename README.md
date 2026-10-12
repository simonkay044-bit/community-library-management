# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# Community Library Management System

## Project Overview

The **Community Library Management System** is a web application developed using React and Vite to help manage a community library. It provides an interface for managing books, users, and library transactions.

The system is designed to make common library management tasks easier and to demonstrate the use of React components, hooks, routing, and local storage.

## Features

- **Dashboard:** View an overview of library information.
- **Book Management:** View and manage book records, including titles, authors, genres, ISBNs, and quantities.
- **User Management:** Manage library users and access the login interface.
- **Transaction Management:** Record and manage book transactions, including borrowing and returning books.
- **Login System:** Access the library management interface using the administrator demo account.
- **Local Storage:** Store application data in the browser so that data can persist after refreshing the page.

## Administrator Login

Use the following demo credentials to access the system:

- **Username:** `khaahloe`
- **Password:** `1234567`

These credentials are provided for demonstration and academic assessment purposes.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- HTML5
- CSS3
- Browser Local Storage
- npm

## Installation and Setup

Follow these steps to run the application on your computer.

### 1. Install Node.js

Download and install Node.js from the official website:

https://nodejs.org/

### 2. Download the project

Clone the GitHub repository or download the project as a ZIP file.

### 3. Open the project folder

Open a terminal in the project directory, where `package.json` is located.

### 4. Install dependencies

Run the following command:

```bash
npm install
```

### 5. Start the development server

Run:

```bash
npm run dev
```

### 6. Open the application

Vite will display a local URL in the terminal, usually:

http://localhost:5173/

Open that URL in your browser to use the application.

## Running the Production Build

To check whether the application can be built for production, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## Data Storage

The application uses the browser's local storage to retain supported books, users, and transaction data between page refreshes.

Local storage is specific to the browser and device being used. Data is not automatically shared between different users or computers.

## Academic Purpose

This project was developed as part of a web development assignment to demonstrate practical skills in React development, component reuse, state management, routing, form handling, and browser-based data persistence.

## Author

**Simon Kay044**

## Repository

Source code: https://github.com/simonkay044-bit/library-management-system-web-development-