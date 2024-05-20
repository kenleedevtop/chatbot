# Health and Wellness Chatbot

This project presents a prototype of a Health and Wellness Chatbot, utilizing the OpenAI GPT-3.5 API to deliver wellness tips to users. It features a React.js frontend designed with TailwindCSS, and backend logic implemented with NestJS. The prototype includes basic error handling and response logging functionalities.

## Overview

The Health and Wellness Chatbot allows users to input questions related to health and wellness through a web interface. The backend processes these questions using the OpenAI API and returns relevant wellness tips.

## Features

- **Frontend Interface**: A simple web page with an input field for user questions and an area to display the chatbot's response.
- **Backend Logic**: A NestJS server that handles user input, queries the OpenAI API, formats the response, and handles errors.
- **API Integration**: Secure handling of the OpenAI API key, with basic error handling and response logging.

## Requirements

- Node.js > 20.0.0
- yarn
- OpenAI API key

## Setting Up the Development Environment

1. **Clone the Repository**

  ```bash
  git clone https://github.com/yourusername/wellness-chatbot.git
  cd wellness-chatbot
  ```

2. **Install Dependencies**

  ```bash
  cd frontend
  yarn install

  cd ../backend
  yarn install
  ```

3. **Configure Environment Variables**

  Create a **.env** file in the root of the backend and add your OpenAI API key:
  ```bash
  OPENAI_API_KEY=your-openai-api-key
  ```

  Create a **.env** file in the root of the frontend and add your API Server URL key:
  ```bash
  REACT_APP_API_URL=your-server-api-url
  ```

## Running the Application

1. **Start the Backend Server**

  ```bash
  cd backend
  yarn build
  yarn start:prod
  ```

2. **Start the Frontend Server**

  ```bash
  cd frontend
  yarn start
  ```

## Obtaining and Configuring the API Key

1. **Sign Up for OpenAI**

  If you do not already have an OpenAI account, sign up at OpenAI's website.

2. **Generate an API Key**
   
  After signing up, navigate to the API section and generate an API key.

3. **Configure the API Key**
   
  Add the API key to your .env file as shown above.

## Logging

  The logging includes:
  - Logging user queries and corresponding responses for future analysis and improvement of the chatbot.
   ```
  backend/dist/chatbot.log
  ```
  - Logging errors to a file or monitoring system for further investigation (`error.log`).
   ```
  backend/dist/error.log
  ```

## Conclusion

This Health and Wellness Chatbot prototype exemplifies the integration of a React.js frontend with a NestJS backend and the OpenAI API to deliver wellness tips. It serves as a foundational framework for developing more advanced and feature-rich applications.