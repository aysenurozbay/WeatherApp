import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colorOpacity, colors} from '../assets/colors';
import WindIcon from '../assets/icons/WindIcon';
import {weatherImages} from '../assets/images/images';
import SunriseIcon from '../assets/icons/SunriseIcon';
import HumidityIcon from '../assets/icons/HumidityIcon';
import {WeatherData} from '../utils/Types';

interface IWeatherComponentProps {
  weather: WeatherData;
}

const WeatherComponent = ({weather}: IWeatherComponentProps) => {
  const {location, current, forecast} = weather;

  return weather ? (
    <View style={styles.container}>
      <Text style={styles.title}>
        {location?.name} , {location?.country}
      </Text>
      <View style={styles.iconContainer}>
        <Image
          source={weatherImages[current?.condition?.text]}
          resizeMode="contain"
          style={styles.iconImage}
        />
      </View>
      <Text style={styles.degree}>{current?.temp_c}°</Text>
      <Text style={styles.explanationText}>{current?.condition?.text}</Text>
      <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
          <WindIcon fill={colors.white} size={30} />
          <Text style={styles.detailText}>{current?.wind_kph}km </Text>
        </View>
        <View style={styles.detailItem}>
          <HumidityIcon fill={colors.white} size={30} />
          <Text style={styles.detailText}>{current?.humidity}km </Text>
        </View>
        <View style={styles.detailItem}>
          <SunriseIcon fill={colors.white} size={30} />
          <Text style={styles.detailText}>
            {weather?.forecast?.forecastday[0]?.astro?.sunrise}
          </Text>
        </View>
      </View>

      <FlatList
        data={forecast?.forecastday}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.dailyContainer}
        renderItem={({item}) => {
          return (
            <View style={styles.dailyItem} key={item.date}>
              <Image
                source={weatherImages[item.day.condition.text]}
                resizeMode="contain"
                style={styles.dayIcon}
              />
              <Text style={styles.dayText}>{item.date}</Text>
              <Text style={styles.dayDegreeText}>{item.day.avgtemp_c}°</Text>
            </View>
          );
        }}
        keyExtractor={item => item.date}
      />
    </View>
  ) : (
    <Text style={{backgroundColor: 'red'}}> Set a Location</Text>
  );
};

export default WeatherComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '600',
  },
  iconContainer: {
    paddingVertical: 20,
  },
  degree: {
    fontSize: 60,
    color: colors.white,
    fontWeight: '700',
  },
  explanationText: {
    fontSize: 20,
    color: colorOpacity.bgWhite(0.5),
    fontWeight: '500',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingVertical: 30,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: colorOpacity.bgWhite(0.8),
    fontWeight: '500',
    paddingHorizontal: 3,
  },
  dailyContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  dailyItem: {
    backgroundColor: colorOpacity.bgWhite(0.25),
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 7,
  },
  dayText: {
    color: colorOpacity.bgWhite(0.7),
    paddingVertical: 2,
  },
  dayDegreeText: {
    color: colorOpacity.bgWhite(0.7),
    paddingVertical: 2,
    fontSize: 18,
  },
  iconImage: {
    width: 180,
    height: 180,
  },
  dayIcon: {
    width: 50,
    height: 50,
  },
});
