


A brief description of what this project does and who it's for


## Documentation 

Short URL Project.

 1. This is a URL Shortener project built with Node.js, Express, and MongoDB. It allows users to convert long URLs into short, shareable links.


2. Note: This project is not deployed yet. It is in development and should not be hosted publicly. Please set it up locally to test and contribute.

3. Technologies Used


3.1 Backend: Node.js, Express

3.2 Database: MongoDB (local or via MongoDB Atlas)

3.3 Template Engine: EJS (for rendering dynamic front-end views)

3.4 URL Shortening: Nanoid (for generating unique short URLs)

3.5 URL Validation: Validator (for checking the validity of URLs)
## Features

 What it Does

1. Shortens long URLs: It takes a long URL and turns it into a shorter version.
2. Database (MongoDB): It saves the long URLs and their shortened versions.
3. Nanoid: Creates unique short links that are hard to guess.
4. EJS: Dynamically displays the webpage with short URLs.
5. Validator: Checks if the URL you entered is valid before shortening it.

## Run Locally


Clone the Repository

    git clone https://github.com/sharma-jayprakash/.short-URL.git



Install Dependencies

  1. Navigate to the project folder and run:


    npm install


2. Set Up MongoDB


Option 1: Using Local MongoDB: Ensure MongoDB is running locally with:

    mongod

Option 2: Using MongoDB Atlas: Set up a MongoDB Atlas cluster and update the .env file with your connection string.

3. Run the Application

3.1 Start the server with:


    npm start
    your app will be live at http://localhost:3000.

4. Use the Application


4.1 Open your browser, navigate to 
    
    http://localhost:3000,
 and start shortening your URLs!




## Contributing

Contributions are always welcome!


Report Issues: If you find bugs or issues, please open an issue.

Submit Pull Requests: If you have improvements or new features, feel free to submit a pull request.

