import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        
        <View style={styles.box3}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4dab8c',
        //justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box1:{
        //flex: 2,
        width:100,
        height:100,
        borderWidth: 5,
        borderColor:'white',
        backgroundColor:'#8f244d',
    //    top: 100
     //   alignSelf: 'flex-end'
        
    },
    box2:{
        //flex: 2,
        height:100,
        width:100,
        borderWidth: 5,
        borderColor:'white',
        backgroundColor:'#c9306b',
       top: 50
    },
    box3:{
        //flex: 4,
       // alignSelf: 'flex-start',
        width:100,
        height:100,
        borderWidth: 5,
        borderColor:'white',
        backgroundColor:'#e86f9e',
    }
});