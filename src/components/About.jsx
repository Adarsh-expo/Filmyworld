import React from 'react'


function About() {
 
  return (
    <div className='w-screen h-screen flex  justify-center  items-center flex-col'>

        <div className='text-zinc-200 text-2xl font-semibold'>ABOUT</div>
        <div className='w-[80vw] rounded-md  h-[70vh] mt-[10vh] p-2N overflow-y-auto text-[#95A3B9] bg-[rgba(40,53,73,0.3)]'>
          
       <h1 className='block  text-center text-lg mb-2'>Welcome to MovieMagic, your ultimate destination for exploring and discovering movies and TV shows!</h1> 

MovieMagic is a cutting-edge web application built with React and powered by Redux Toolkit, ensuring a seamless and dynamic user experience. Our platform is deeply integrated with a comprehensive movie database API, providing you with an extensive collection of the latest movies and TV shows at your fingertips.

<h1 className='mb-2 text-xl mb-2'>Features:</h1>
Extensive Movie and TV Show Database:

Dive into a vast library of movies and TV shows with detailed information, including synopses, cast and crew, genres, and more.
Personalized Recommendations:

Receive tailored recommendations based on your viewing history and preferences. Our advanced recommendation engine suggests movies and TV shows that you'll love, helping you find your next binge-watch.
User-Friendly Interface:

Enjoy a clean, intuitive interface designed to make browsing and discovering new content a breeze. Our responsive design ensures a smooth experience across all devices.
Detailed Search and Filtering:

Easily search for specific titles or explore content by genre, release year, rating, and more. Our powerful filtering options help you find exactly what you're looking for.
Watchlists and Favorites:

Create and manage your own watchlists and mark your favorite movies and TV shows. Keep track of what you want to watch next and never miss out on new releases.
Real-Time Data and Updates:

Stay up-to-date with real-time data from our integrated movie API. Get the latest information on new releases, trending titles, and top-rated content.
<h1  className='mb-2 text-xl'>Technology Stack:</h1>
<h1 className='text-lg'>React: </h1>Our application is built using React, offering a fast, efficient, and interactive user experience.

<h1  className='text-lg mb-2'>Redux Toolkit:</h1>
 We leverage Redux Toolkit for state management, ensuring a scalable and maintainable codebase.

<h1 className='text-lg mb-2' >Movie Database API:</h1>
 Integration with a reliable movie database API provides us with a wealth of information on movies and TV shows.

<h1 className='text-lg  mb-2'>Tailwind CSS:</h1>
 Tailwind CSS is used for styling, allowing us to create a visually appealing and responsive design.
How It Works:
Home Page: Start your journey on our home page, featuring the latest and trending movies and TV shows.
Details Page: Click on any title to view detailed information, including cast, crew, synopsis, genres, and user ratings.
Recommendations: Explore personalized recommendations based on your viewing history.
Search and Filter: Use our advanced search and filtering options to find content that matches your preferences.
Watchlist: Add movies and TV shows to your watchlist and keep track of what you want to watch next. 
          
            </div>
            
            
            </div>
  )
}

export default About