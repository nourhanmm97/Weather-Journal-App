/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const newZipcode = document.getElementById('zip');
    const feel = document.getElementById('feeling');
    const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=51d0d5055e039f1d38e0867840976e92';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performData);


/* Function called by event listener */
function performData(a){
    const newZipcode = document.getElementById('zip').value;
    getZipcode(baseURL,newZipcode,apiKey)};
     const getZipcode = async (baseURL, newZipcode, key) =>{
        const response = await fetch(baseURL+newZipcode+key)
        try{
            const data = await response.json();
            console.log(data);
            return data;
        } catch(error){
            console.log("error",error);
        }
     }

    
// Async POST
/* Function to POST data */
const postData = async ( url = '', data = {})=>{
     console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
try{
    const newData = await response.json();
    return newData;
} catch(error){
    console.log("error",error);
}
};

/* Function to GET Project Data */
const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allentry = await request.json()
    console.log(allentry)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allentry.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allentry.feel;
    document.getElementById("date").innerHTML =allentry.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   }


  
