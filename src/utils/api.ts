import axios from 'axios';

export const API_KEY = 'c6f071ad56c64a0f895200728232712';

interface forecastEndpointParams {
  city: string;
  days: string;
}

export const forecastEndpoint = (
  params: forecastEndpointParams,
) => `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params.city}&days=${params.days}&aqi=no&alerts=no
`;

interface locationsParams {
  location: string;
}

export const locationsEndpoint = (
  params: locationsParams,
) => `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&&q=${params.location}

`;

export const apiCall = async (endpoint: string) => {
  const options = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {};
  }
};

export const fetchWeatherForecast = (params: any) => {
  return apiCall(forecastEndpoint(params));
};
export const fetchLocations = (city: string) => {
  return apiCall(locationsEndpoint({location: city}));
};
