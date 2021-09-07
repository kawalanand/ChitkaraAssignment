document.addEventListener('load',Check())
// var city = "delhi";


document.querySelector('.check').addEventListener('click', event=>{
	Check();
});
document.addEventListener("keydown", (event)=>
{
	if(event.keyCode === 13)
	{
		Check();
	}
});
function Check(){
	var city="delhi";
	var background = {
	"Rain":"https://images.unsplash.com/photo-1556485689-33e55ab56127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
	"Drizzle":"https://images.unsplash.com/photo-1556485689-33e55ab56127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
	"Mist":"https://images.unsplash.com/photo-1596917271790-a399eb805dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
	"Clear":"https://images.unsplash.com/photo-1521378585384-e6a621860c47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
	"Fog":"https://images.unsplash.com/photo-1596917271790-a399eb805dce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
	"Haze":"https://images.unsplash.com/photo-1422745621071-c0fc788eebfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80",
	"Clouds":"https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80",
	"Snow":"https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
	"Thunderstorm":"https://images.unsplash.com/photo-1595867005771-4d3e811d0886?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
};
	if(document.getElementById('city').value!=="")
	{
		city = document.getElementById('city').value;
		document.getElementById('city').value = "";
	}
	console.log(city)
	axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b40608206b995d0d18a93e9a2423a7ac`)
  	.then((response)=>{
	  	var data = response.data;
	  	console.log(data);
	  	city = data.name;
	  	let country = data.sys.country;
	  	let temp = data.main.temp;
	  	let min = data.main.temp_min;
	  	let max = data.main.temp_max;
	  	let main = data.weather[0].main;
	  	document.querySelector('.temp').innerHTML = `${temp}<sup class="super">oc</sup>`;
	  	document.querySelector('.main').innerHTML = main;
	    document.querySelector('.minmax').innerHTML = `${min}<sup>o</sup> (min), ${max}<sup>o</sup> (max)`;
	  	document.body.style.backgroundImage = `url(${background[main]})`;
	  	return axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${country}`)    //Country codes API

  	})
  	.then((response)=>{
  		console.log(response.data);
  		document.querySelector('.city').innerHTML = `${city},${response.data[0].name}`;
  	})
  	.catch((error)=>{
  		console.log(error);
		// document.getElementById('city').placeholder = "Enter valid city name!"
	})
		
};

















