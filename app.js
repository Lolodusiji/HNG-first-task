document.getElementById("redirectButton").addEventListener("click", function() {
    window.location.href = "https://github.com/Lolodusiji/HNG-first-task "; 
  });
  

const clockElement = document.querySelector('.Time');

const updateClock = () => {
  const now = new Date();

  const formattedTime = now.getTime();

  const timeHtml = `
    <span>UTC</span>:
    <span data-testid="currentUTCTime">${formattedTime}</span> 
  `

  
  clockElement.innerHTML = timeHtml;
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


