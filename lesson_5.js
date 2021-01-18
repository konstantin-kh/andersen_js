class CityWeather {
  constructor(cityId) {
    this.cityId = cityId;
  }
  getWeather() {
    return new Promise((resolve, reject) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&appid=c024242d13e08e0a7816a86e1d95c7c4&units=metric`)
        .then(response => {
          if (!response.ok) {
            return reject(new Error(response.statusText));
          }
          return response;
        })
        .then(response => resolve(response.json()))
    });
  }
}

class CurrentCityWeather extends CityWeather {
  constructor(cityId) {
    super(cityId);
    this.data = {};
  }
  getWeatherData() {
    return Promise.resolve(this.data);
  }
}

class RandomCityWeather extends CityWeather {
  constructor(cityId) {
    super(cityId);
    this.cityId = this.getRandomCity(cityId);
    this.data = {};
  }
  getWeatherData() {
    return Promise.resolve(this.data);
  }
  getRandomCity(array) {
    return array[Math.floor(Math.random() * array.length)].id;
  }
}

const citiesList = [
  {
    "id": 2998698,
  },
  {
    "id": 2998709,
  },
  {
    "id": 2998714,
  },
  {
    "id": 2998763,
  },
  {
    "id": 2998794,
  },
]

const weatherKharkiv = new CurrentCityWeather('706483');
weatherKharkiv.getWeather()
  .then(response => {
    this.data = {
      city: response.name,
      country: response.sys.country,
      temp: response.main.temp,
      description: response.weather[0].description,
    };
    return this.data;
  })
  .catch(error => error);

const weatherRandomCity = new RandomCityWeather(citiesList);
weatherRandomCity.getWeather()
  .then(response => {
    this.data = {
      city: response.name,
      country: response.sys.country,
      temp: response.main.temp,
      description: response.weather[0].description,
    };
    return this.data;
  })
  .catch(error => error);