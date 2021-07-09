import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

const SkipButton = (props) => {
    return (
        <TouchableOpacity style={props.disabled ? styles.nextButtonDisable : styles.nextButton} 
        onPress={props.onPress} 
        disabled={props.disabled}>
            <Text style={styles.nextButtonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    nextButton: {
        backgroundColor: '#8155FF',
        height: 30,
        width: 50,
        justifyContent: 'center',
        borderRadius: 10,
      },
      nextButtonDisable: {
        backgroundColor: '#B7A0FB',
        height: 30,
        width: 50,
        justifyContent: 'center',
        borderRadius: 10,
      },
      
  nextButtonText : {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SkipButton;