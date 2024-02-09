type LocationData = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

type ConditionData = {
  text: string;
  icon: string;
  code: number;
};

type CurrentData = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ConditionData;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

type HourlyData = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ConditionData;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm?: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
};

type DayData = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: ConditionData;
  uv: number;
};

type ForecastData = {
  forecastday: {
    date: string;
    date_epoch: number;
    day: DayData;
    astro: {
      sunrise: string;
      sunset: string;
      moonrise: string;
      moonset: string;
      moon_phase: string;
      moon_illumination: number;
      is_moon_up: number;
      is_sun_up: number;
    };
    hour: HourlyData[];
  }[];
};

export type WeatherData = {
  location: LocationData;
  current: CurrentData;
  forecast: ForecastData;
};

type AdditionalInfo = {
  Connection: string;
  Vary: string;
  'CDN-PullZone': string;
  'CDN-Uid': string;
  'CDN-RequestCountryCode': string;
  Age: string;
  'x-weatherapi-qpm-left': string;
  'CDN-ProxyVer': string;
  'CDN-RequestPullSuccess': string;
  'CDN-RequestPullCode': string;
  'CDN-CachedAt': string;
  'CDN-EdgeStorageId': string;
  'CDN-Status': string;
  'CDN-RequestId': string;
  'CDN-Cache': string;
  'Accept-Ranges': string;
  'Content-Length': string;
  'Cache-Control': string;
  'Content-Type': string;
  Date: string;
  Server: string;
  Via: string;
};

export type LocationInfoData = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export type WeatherApiResponse = {
  additionalInfo: AdditionalInfo;
  responseBody: LocationInfoData[];
};
