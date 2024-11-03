


function updateTimer() {
    // Get the current time and date
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    
    // Determine AM/PM and convert to 12-hour format
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert 24-hour to 12-hour format (0 becomes 12)
    hours = String(hours);  // Add leading zero if needed
    
    // Format the time as HH:MM:SS AM/PM
    const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    
    // Get the current day, month, and year
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    
    // Get the month as text
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];  // getMonth() is zero-indexed
    
    // Get the day of the week in words
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    
    // Format the date as Month DD, YYYY (Day) and append time in HH:MM:SS AM/PM
    const dateString = `${month} ${day}, ${year} ${dayOfWeek}`;
    
    // Display the date and time
    document.getElementById('timer').textContent = `${timeString} ${dateString}`;
    // document.getElementById('date').textContent = dateString;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the time right away
updateTimer();

function randomizeBentoSizes() {
    const items = document.querySelectorAll('.bento-item');
  
    items.forEach(item => {
      // Randomly set a flex-basis for different sizes
      const size = Math.floor(Math.random() * 100) + 100; // Random size from 100px to 200px
      item.style.flex = `1 1 ${size}px`; // Set flex-grow, flex-shrink, and base size
    });
  }
  


//   const apiUrl = 'https://images-api.nasa.gov/search?q=space&media_type=image';

//   async function fetchRandomSpaceImage() {
//       try {
//           // Fetch images from NASA's API
//           const response = await fetch(apiUrl);
//           const data = await response.json();
  
//           // Check if any items are returned
//           if (!data.collection.items || data.collection.items.length === 0) {
//               console.log("No space images found.");
//               return;
//           }
  
//           // Select a random image from the list
//           const images = data.collection.items;
//           const randomIndex = Math.floor(Math.random() * images.length);
//           const image = images[randomIndex];
  
//           // Get the image URL and metadata
//           const imageUrl = image.links[0].href;
//           const title = image.data[0].title;
//           const description = image.data[0].description;
  
//           // Update HTML elements with the random image data
//           document.getElementById('space').src = imageUrl;
//           document.getElementById('image-title').textContent = title;
//           document.getElementById('image-description').textContent = description;
  
//       } catch (error) {
//           console.error('Error fetching space images:', error);
//       }
//   }
  
//   // Call the function when the document is loaded
//   document.addEventListener('DOMContentLoaded', fetchRandomSpaceImage);
  
// const apiUrl = 'https://api.jikan.moe/v4/random/anime'; // For random anime information

// async function fetchRandomAnimeImage() {
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         // Get the anime details
//         const imageUrl = data.data.images.jpg.large_image_url;
//         const title = data.data.title || "Random Anime";

//         // Update HTML elements with the random anime data
//         document.getElementById('space').src = imageUrl;
//         document.getElementById('anime-title').textContent = title;

//     } catch (error) {
//         console.error('Error fetching anime images:', error);
//     }
// }

// // Call the function when the document is loaded
// document.addEventListener('DOMContentLoaded', fetchRandomAnimeImage);

