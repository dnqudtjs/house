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

import Content from './Content';
import SkipButton from '../buttons/SkipButton';

const page = ['MARRY', 'AGE', 'ASSET'];

const Poll = ({navigation}) => {
  const [index, setIndex] = useState(0);

  const onPress = () => {
    if (index == page.length - 1) {
      navigation.navigate('Result');
    }
  };

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
        source={require('../images/house.png')}
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
            style={index < page.length - 1 ? styles.btnDisabled : styles.btn}
            onPress={onPress}
            disabled={index < page.length - 1 ? true : false}>
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

    borderRadius: 10,
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
  footer: {
    height: '15%',
    justifyContent: 'center',
  },
  btn: {
    height: 50,
    backgroundColor: '#4F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: {
    height: 50,
    backgroundColor: '#A19F9F',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default Poll;
