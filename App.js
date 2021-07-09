/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Content from './screens/Content';
import SkipButton from './buttons/SkipButton';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const page = ['MARRY', 'AGE', 'ASSET'];

const App = () => {
  const [index, setIndex] = useState(0);

  const onPress = () => {};

  const onNext = () => {
    if (index == page.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  const onPrev = () => {
    if (index == 0) {
      return;
    }
    setIndex(index - 1);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/house.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.header}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 20, marginTop: 20, color: 'black'}}>실거주 1주택은 진리</Text> */}
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.headerText}>
              몇 가지 질문으로 적정 대출 금액을 계산해봅니다.
            </Text>
          </View>
          <Content div={page[index]} />
          <View style={styles.contentFooter}>
            <SkipButton
              style={styles.prevButton}
              onPress={onPrev}
              text={'이전'}
              disabled={index == 0 ? true : false}
            />
            <SkipButton
              style={styles.nextButton}
              onPress={onNext}
              text={'다음'}
              disabled={index == page.length - 1 ? true : false}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
            disabled={true}>
            <Text style={styles.text}>적정 금액 확인</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',

    // padding: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: '15%',
    // backgroundColor: '#FFB800',
    // opacity: 0.8,
  },
  content: {
    flex: 1,

    /* box shadow */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    // borderStyle: 'solid',
    // borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
  footer: {
    height: '15%',
    justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  btn: {
    height: 50,
    backgroundColor: '#4F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  contentHeader: {
    height: '20%',
    // backgroundColor : 'yellow',
    justifyContent: 'center',
  },
  headerText: {
    backgroundColor: '#8155FF',
    color: 'white',
    fontWeight: 'bold',
    height: 50,
    marginHorizontal: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 0,

    elevation: 10,
  },
  contentFooter: {
    height: '15%',
    flexDirection: 'row',
    // backgroundColor : 'blue',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default App;
