import axios from 'axios';

export const API_KEY = 'c6f071ad56c64a0f895200728232712';

interface forecastEndpointParams {
  city: string;
  days: string;
}

export const forecastEndpoint = (
  params: forecastEndpointParams,
) => `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${params.city}&days=${params.days}&aqi=no&alerts=no
`;

interface locationsParams {
  location: string;
}

export const locationsEndpoint = (
  params: locationsParams,
) => `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&&q=${params.location}

`;

export const apiCall = async (endpoint: string) => {
  const options = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const responce = await axios.request(options);
    return responce.data;
  } catch (error) {
    console.log('ERROR', error);
    return null;
  }
};

export const fetchWeatherForecast = (params: any) => {
  return apiCall(forecastEndpoint(params));
};
export const fetchLocations = (params: any) => {
  return apiCall(locationsEndpoint(params));
};
