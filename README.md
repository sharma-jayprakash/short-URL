Short URL Project
This is a URL Shortener project built with Node.js, Express, and MongoDB. It allows users to convert long URLs into short, shareable links.

Note: This project is not deployed yet. It is in development and should not be hosted publicly. Please set it up locally to test and contribute.

Features
Shorten long URLs into shorter versions
Database: MongoDB stores the URLs and their shortened versions
Nanoid: Generates unique and secure short URLs
EJS: Dynamically renders the front-end views
Validator: Ensures URLs are valid before shortening
Technologies Used
Backend: Node.js, Express
Database: MongoDB
Template Engine: EJS
URL Shortening: Nanoid
URL Validation: Validator
Getting Started Locally
Prerequisites
Before you begin, make sure you have the following installed:

Node.js – JavaScript runtime for the backend
MongoDB – Database (can be used locally or via MongoDB Atlas)
Steps to Set Up Locally
Clone the repository:

In your terminal, run the following command:

bash
Copy code
git clone https://github.com/sharma-jayprakash/short-URL.git
cd short-URL
Install dependencies:

First, install all the required Node.js dependencies:

bash
Copy code
npm install
Set up the database:

If you're using MongoDB Atlas, create a cluster and copy the connection string.
If you're using local MongoDB, ensure it is running on your machine.
Create a .env file (optional but recommended):

Create a .env file in the root of the project and add your MongoDB connection string like this:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
Start the project:

To start the backend server, run the following:
bash
Copy code
npm start
The backend server will run on http://localhost:3000.
Access the app:

Open your browser and navigate to http://localhost:3000 to start using the URL shortener!

How to Contribute
We welcome contributions! If you'd like to help improve the project, follow these steps to contribute:

Steps for Contributing
Fork the repository:

Go to the GitHub page and click the "Fork" button.

Clone your fork:

bash
Copy code
git clone https://github.com/your-username/short-URL.git
Create a new branch:

bash
Copy code
git checkout -b feature-name
Make changes:

Modify the code and add your features or fixes.

Commit your changes:

bash
Copy code
git commit -m "Description of the changes"
Push your changes:

bash
Copy code
git push origin feature-name
Create a Pull Request:

Go to your fork on GitHub and create a Pull Request to merge your changes into the main repository.

Issues
If you find any bugs or have ideas for improvements, please create an issue on GitHub. We’d love to hear your feedback!

License
This project is licensed under the MIT License. See the LICENSE file for details.

Notes:
Deployment Status: This project is not deployed at the moment and is for local development only. Please do not host it publicly yet.
Frontend and Backend: The project uses EJS for rendering the frontend, which is connected to a backend built with Express. Feel free to contribute to the frontend if you want to improve its design!
