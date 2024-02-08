import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SunIcon from '../assets/icons/SunIcon';
import {colorOpacity, colors} from '../assets/colors';
import WindIcon from '../assets/icons/WindIcon';
import ThunderyIcon from '../assets/icons/ThunderyIcon';

const WeatherComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>London, United State</Text>
      <View style={styles.iconContainer}>
        <SunIcon fill={colors.yellow} size={200} />
      </View>
      <Text style={styles.degree}>20°</Text>
      <Text style={styles.explanationText}>Mostly sunny</Text>
      <View style={styles.detailContainer}>
        <View style={styles.detailItem}>
          <WindIcon fill={colors.white} size={30} />
          <Text style={styles.detailText}>22km </Text>
        </View>
        <View style={styles.detailItem}>
          <WindIcon fill={colors.white} size={30} />
          <Text style={styles.detailText}>22km </Text>
        </View>
        <View style={styles.detailItem}>
          <WindIcon fill={colors.white} size={30} />
          <Text style={styles.detailText}>22km </Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.dailyContainer}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.dailyItem}>
          <ThunderyIcon fill={colors.white} size={40} />
          <Text style={styles.dayText}>Monday</Text>
          <Text style={styles.dayDegreeText}>13°</Text>
        </View>
        <View style={styles.dailyItem}>
          <ThunderyIcon fill={colors.white} size={40} />
          <Text style={styles.dayText}>Monday</Text>
          <Text style={styles.dayDegreeText}>13°</Text>
        </View>
        <View style={styles.dailyItem}>
          <ThunderyIcon fill={colors.white} size={40} />
          <Text style={styles.dayText}>Monday</Text>
          <Text style={styles.dayDegreeText}>13°</Text>
        </View>
        <View style={styles.dailyItem}>
          <ThunderyIcon fill={colors.white} size={40} />
          <Text style={styles.dayText}>Monday</Text>
          <Text style={styles.dayDegreeText}>13°</Text>
        </View>
        <View style={styles.dailyItem}>
          <ThunderyIcon fill={colors.white} size={40} />
          <Text style={styles.dayText}>Monday</Text>
          <Text style={styles.dayDegreeText}>13°</Text>
        </View>
      </ScrollView>
    </View>
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
});
