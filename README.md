<!-- # Movie Search App

A simple movie search app built with React.js that uses the OMDb API to fetch and display movie data based on the user's search query. The app allows users to search for movies, view movie details, and get suggestions as they type.

## Features

- Search for movies by title.
- View a list of movies with their titles and release years.
- Click on a movie to view detailed information such as genre, plot, and IMDb rating.
- Movie suggestions appear as you type, powered by the OMDb API.

## Technologies Used

- React.js
- OMDb API
- Axios (for making HTTP requests)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- You need to have **Node.js** and **npm** installed on your machine. You can download and install Node.js from [https://nodejs.org](https://nodejs.org/).

- Get an API key from [OMDb API](http://www.omdbapi.com/apikey.aspx).

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movie-search-app.git

2. Navigate into the project folder:
    
    cd movie-search-app

3. Install the required dependencies:
    
    npm install

4. Open the src/App.js file and replace the value of API_KEY with your OMDb API key:

    const API_KEY = "YOUR_API_KEY";  // Replace with your OMDb API key

5. Start the application:

    npm start

6. Open your browser and go to http://localhost:3000 to see the app running.


### How to Test the API Locally

# Testing the API Using Postman:
  
  Postman is a powerful tool to test APIs. Here's how you can use Postman to test the OMDb API:

   1.  Open Postman and create a New Request.

   2.  Set the Request Type to GET.

   3.  Enter the following URL in the request bar:

     http://www.omdbapi.com/?s=avengers&apikey=YOUR_API_KEY
     
   4. Replace YOUR_API_KEY with your OMDb API key.

   5. Click on Send to make the API request.

   6. The response will be displayed in Postman, showing the movie search results for "Avengers".  

# Testing with cURL (Command Line Tool)

  You can also test the API with cURL (a command-line tool). Open your terminal and run the following command:

    1.   curl "http://www.omdbapi.com/?s=avengers&apikey=YOUR_API_KEY"

    2.   Replace YOUR_API_KEY with your actual OMDb API key.
    
    3.   This will show you a JSON response with the movie search results.   -->