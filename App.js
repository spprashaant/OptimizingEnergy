import { StatusBar } from 'expo-status-bar';
import React,{useState, useCallback} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Audio} from 'expo-av'
import Stages from './components/stages'
import Category from './components/Category'
import ChoiceButton from './components/ChoiceButton'



const Audiofiles={
  day1: require('./assets/stage-1.m4a'),
  day2: require('./assets/stage-2.m4a'),
  day3: require('./assets/stage-3.m4a'),
  day4: require('./assets/stage-4.m4a'),
  day5: require('./assets/stage-5.m4a'),
  day6: require('./assets/stage-6.m4a'),
  day7: require('./assets/stage-7.m4a'),
  day8: require('./assets/stage-8.m4a'),
  day9: require('./assets/stage-9.m4a'),
  day10: require('./assets/stage-10.m4a'),
  day11: require('./assets/stage-11.m4a'),
  day12: require('./assets/stage-12.m4a'),
}
export default function App() {
  const [choices, setChoices ]= useState([])
  const [audioFiles,setAudioFiles] = useState([])
  const [choiceItem, setChoiceItem] = useState([{name:"1", id: 1, disabled: false}, {name:"2", id: 2, disabled: false},{name:"3", id: 3, disabled: false},{name:"4", id: 4, disabled: false},
  {name:"5", id: 5, disabled: false},{name:"6", id: 6, disabled: false},
  {name:"7", id: 7, disabled: false},{name:"8", id: 8, disabled: false},{name:"9", id: 9, disabled: false},
  {name:"10", id: 10, disabled: false},{name:"11", id: 11, disabled: false},{name:"12", id: 12, disabled: false} ])
  const [days, setDays] = useState(['day1','day2','day3','day4','day5','day6','day7','day8','day9','day10','day11','day12'])

  const playAudio =async note=>{
    const soundObject = new Audio.Sound();

    console.warn("Music length: ", note.length)

    note.map( async (item, index) => {


      try {

        let source = Audiofiles[note[index]]
  
        await soundObject.loadAsync(source)
        await soundObject.playAsync()
        .then( async playStatus =>{
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playStatus.playableDurationMillis);
        })
        .catch(err =>{
          console.log(err)
        })
        
      } catch (error) {
        console.log(error)
      }
    })

  }
  const handleClick =(item)=>{

    console.warn("Check: ", days[item.id -1 ]  )
    let newChoice = item;
    if(choices.length <= 11){
   if(!choices.includes(item)){
    setChoices([...choices,newChoice])
    setAudioFiles([...audioFiles,days[item.id -1] ])
   }
     
    // disableItem(item)

    }
   
  }
  const disableItem =(item)=>{
    choiceItem.map((items, index) =>{
      // items.id === item.id ? dis true
    })
  }
  return (
    <View style={styles.container}>
    
      <StatusBar style="auto" />

      <View style={{flexDirection:"row", flexWrap:"wrap"}}>
      {
        choiceItem.map((item, index)=>{
          return( 
            
             <ChoiceButton title={"Stages"} name={item.name} 
             disabledValue={item.disabled}
           
              key={index} onPress={ handleClick.bind(this, item)}/>
              
             )
        })
      }
    </View>
      <Category title={"Day 1"} choices={choices.slice(0, 4)} handlePlayClicked={() => playAudio(audioFiles)}/>
      <Category title={"Day 2"} choices={choices.slice(4, 8)}/>
      <Category title={"Day 3"} choices={choices.slice(8, 12)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:15
  },
});
