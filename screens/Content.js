import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const Content = (props) => {

    const renderQuestion = () => {
        if (props.div === 'MARRY') {
            return '결혼 하셨나요?'
        } else {
            return '나이는 몇 살인가요?';
        }
    }
    const renderContent = () => {
        if (props.div === 'MARRY') {
            return (<RadioGroup
                radioButtons={[
                  {id: '1', label:'미혼', value:'1', selected: true},
                  {id: '2', label:'기혼', value:'2'},
                ]}
                layout={'row'}
                />);
        } else if (props.div === 'AGE') {
            return (
                <TextInput />
            );
        }
    }
    return (
        <View style={styles.contentMain}>
        <View style={styles.questionArea}>
          <Text>{renderQuestion()}</Text>
        </View>
        <View style={styles.answerArea}>
          {renderContent()}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    contentMain : {
        flex : 1,
        // backgroundColor : 'green',
        padding: 20
    },
    answerArea : {
        paddingTop: 10,
    },
});

export default Content;