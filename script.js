


function updateTimer() {
  // Get the current time and date
  const now = new Date();
  
  // Get hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure two digits
  const seconds = String(now.getSeconds()).padStart(2, '0'); // Ensure two digits
  
  // Determine AM/PM and convert to 12-hour format
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;  // Convert 24-hour to 12-hour format (0 becomes 12)
  hours = String(hours).padStart(2, '0'); // Ensure two digits for hours
  
  // Format the time as HH:MM:SS AM/PM
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  
  // Get the current day, month, and year
  const day = String(now.getDate()).padStart(2, '0'); // Ensure two digits
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
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the time right away
updateTimer();



//light theme
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// // Check for saved theme in local storage
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
}

// Event listener for toggle button
toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  // Save the theme in local storage
  if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
    toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>'; 
    toggleButton.style.color = 'black';
   
  } else {
    localStorage.setItem('theme', 'dark');
    toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    toggleButton.style.color = 'white';  
  }
});
