
//import { HolaScreen } from './src/screens/HolaScreen';
import { SafeAreaView} from "react-native";
//import { BoxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
//import { CounterScreen } from "./src/screens/CounterScreen";
//import { DimentionsScreen } from "./src/screens/DimentionsScreen";
//import { PositionScreen } from "./src/screens/PositionScreen";
import { FlexScreen } from "./src/screens/FlexScreen";

export const App = () => {
  return (
   <SafeAreaView  style={{flex:1}}>

   {/*
    <HolaScreen/>  
    <CounterScreen/>
    <BoxObjectModelScreen/>
    <DimentionsScreen/>
    <PositionScreen/>
    */}
    <FlexScreen/>

   </SafeAreaView>)
};



