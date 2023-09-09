document.getElementById("redirectButton").addEventListener("click", function() {
    window.location.href = "https://github.com/Lolodusiji/HNG-first-task "; // Replace with the URL you want to redirect to
  });
  
//   // Create a new Date object for the current date and time in the UTC timezone
// const currentUTCDateTime = new Date();

// // Format the UTC date and time as a string (e.g., "2023-09-08T12:34:56.789Z")
// const formattedUTCDateTime = currentUTCDateTime.toISOString();

// console.log(formattedUTCDateTime);

const clockElement = document.querySelector('.Time');

const updateClock = () => {
  const now = new Date();
  
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  console.log(hours, minutes, seconds);
  
  const formattedTime = `
    <span>UTC</span>:
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `;
  
  clockElement.innerHTML = formattedTime ;
};

setInterval(updateClock, 1000);

const dayElement = document.querySelector('.day');

const updateDay = () => {
  const now = new Date();

  const options = { weekday: 'long' };
  const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(now);

  dayElement.textContent = dayOfWeek;
};

// Call the function to initially set the day
updateDay();

// Update the day every second (optional)
setInterval(updateDay, 1000);


 
//   dayElement.innerHTML = formattedDay;
// };
