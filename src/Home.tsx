import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SearchIcon from './assets/icons/SearchIcon';
import {colorOpacity, colors} from './assets/colors';
import PinIcon from './assets/icons/PinIcon';
import WeatherComponent from './components/WeatherComponent';

const SearchItem = (res: any) => {
  const {item} = res;
  return (
    <View style={styles.resItemContainer}>
      <PinIcon fill={colors.lightGray} size={22} />
      <Text style={styles.resItem} numberOfLines={1}>
        {item.country}
      </Text>
    </View>
  );
};

const screen = Dimensions.get('window');
const Home = () => {
  const handleToggleButton = () => {};

  const sonuclar = [];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode="cover"
        style={styles.image}
        blurRadius={60}
      />
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.searchIcon}
            activeOpacity={0.5}
            onPress={handleToggleButton}>
            <SearchIcon fill={colors.black} size={25} />
          </TouchableOpacity>

          <View style={styles.textInput}>
            <TextInput
              style={styles.input}
              placeholder="Insert your text!"
              placeholderTextColor={colors.lightGray}
            />
          </View>
        </View>
        <View style={styles.resultContainer}>
          {sonuclar.length > 0 &&
            sonuclar.map((item, index) => (
              <React.Fragment key={index}>
                <SearchItem item={item} />
                {index !== sonuclar.length - 1 && <View style={styles.line} />}
              </React.Fragment>
            ))}
        </View>
      </View>

      <WeatherComponent />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: screen.height,
    width: screen.width,
    position: 'absolute',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 10,
    zIndex: 10,
  },
  iconContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorOpacity.bgWhite(0.25),
    margin: 10,
    borderRadius: 45,
    width: '100%',
  },
  textInput: {},
  searchIcon: {
    padding: 5,
    width: 45,
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
  },
  input: {
    padding: 10,
  },
  resultContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 20,
    top: 80,
    width: '100%',
  },
  resItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  resItem: {
    fontSize: 15,
    fontWeight: '400',
  },
  line: {
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },
});
