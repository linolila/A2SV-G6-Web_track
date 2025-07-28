# Contact Form Project
# Task 5

This project is a simple React + TypeScript + Vite application that includes a responsive Contact Form component.

## Features

- **Contact Form**: Users can submit their name, email, and a message.
- **Validation**: All fields are required. The email field must be a valid email address. Error messages are shown for invalid or empty fields.
- **State Management**: The form uses a custom `useForm` hook to manage form state, validation, and error handling.
- **Responsive UI**: The form is styled for a clean and responsive user experience.

## How to Use

1. Fill in your name, email, and message.
2. Click "Send" to submit the form.
3. If any field is invalid, an error message will be displayed.
4. On successful submission, a confirmation alert will appear and the form will reset.

## Project Structure

- `src/components/ContactForm.tsx`: The main contact form component.
- `src/components/useForm.ts`: Custom React hook for form state and validation.
- `src/contact.ts`: TypeScript interface for the contact form fields.

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser at `http://localhost:5173` (or the port shown in your terminal)

4. You can now interact with the contact form.
5. To build the project for production, run: `npm run build`
