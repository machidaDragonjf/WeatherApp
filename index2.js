let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
let display = document.querySelector(".displayGraphic");
let reset = document.querySelector(".reset");
const kelvin = 273;

const sf = document.querySelector(".sf");
const ny = document.querySelector(".ny");
const rome = document.querySelector(".rome");
const paris = document.querySelector(".paris");
const munich = document.querySelector(".munich");
const madrid = document.querySelector(".madrid");
const tokyo = document.querySelector(".tokyo");
const shanghi = document.querySelector(".shanghi");
const johannesburg = document.querySelector(".johannesburg");
const mexico = document.querySelector(".mexico");

temperature.textContent = 0 + "°C";
summary.textContent = "Summary";
loc.textContent = "Location";

//const choice = prompt("What city do you want");
//console.log(choice);

sf.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.779379&lon=-122.418433&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});

ny.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.6529&lon=-73.7567&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
rome.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.8938353&lon=12.4818752&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
paris.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=48.8566419&lon=2.3518481&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
munich.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=48.1379879&lon=11.575182&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
madrid.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.4195923&lon=-3.6927757&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});

tokyo.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.689506&lon=139.6917&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
shanghi.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=31.2203102&lon=121.4623931&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
johannesburg.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=-26.1899476&lon=28.0316162&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});

mexico.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // API ID
      const api = "6d055e39ee237af35ca066f35474e9df";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=19.4319447&lon=-99.1338611&APPID=6d055e39ee237af35ca066f35474e9df`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.main);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          let value = Math.floor(data.main.temp - kelvin) + "°C";
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
        });
    });
  }
});
reset.addEventListener("click", function () {
  temperature.textContent = 0 + "°C";
  summary.textContent = "Summary";
  loc.textContent = "Location";
});
