import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import ChoiceButton from './ChoiceButton';
import choiceButton from './ChoiceButton'

const Stages =({title,stagesElement, hanldeChoiceClick, name})=>{
    return(
        <View style={styles.parent}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.buttonsContainer}>
            <ChoiceButton name={name} onPress={hanldeChoiceClick}/>
    
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    parent:{
       flexDirection:"column"
    },
    buttonsContainer:{ 
        flexDirection:"row",
        flexWrap:"wrap"

    },
    choiceButton:{
        margin:5,
        borderRadius:25,
        backgroundColor:"black"
    },
    choiceItem:{
        color:"white",
        padding:17,
        textAlign:"center"
    },
    title:{
    fontSize:14,
    fontWeight:"bold",
    paddingLeft:5,
    paddingTop:10
}
})
export default Stages;