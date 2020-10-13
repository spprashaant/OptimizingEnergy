import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


const ChoiceButton =({name, onPress,disabledValue,  stylename})=>{
    return(
    <TouchableOpacity style={styles.choiceButton} disabled={disabledValue} onPress={onPress}>
    <Text style={styles.choiceItem}> {name}</Text>
</TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    choiceButton:{
        margin:3,
        borderRadius:20,
        padding:10,
        width: 80,
        backgroundColor:"black"
    },
    choiceButtonInvalid:{
        margin:5,
        borderRadius:20,
        padding:10,
        backgroundColor:"gray"
    },
    choiceItem:{
        color:"white",
        textAlign:"center"
    },
})
export default ChoiceButton;