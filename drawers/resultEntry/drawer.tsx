import React, {useState} from "react";

// import { NavigatorCon}
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StudentContext } from "../../context/studContext";

//icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import CommentPart from "./comment";
import FirstTestScore from "./testOne";
import SecondTestScore from "./testTwo";
import ExamScore from "./exam";
import NoteScore from "./noteScore";
import PsychomotorEntry from "./enterPsychomotor";
import AffectiveEntry from "./enterAffective";
import SettingsScreen from "../../screens/appSetting";
import CustomDrawerContent from "../custDrawer";


const {Navigator, Screen} = createDrawerNavigator();

const ResultEditDrawer = ({route}: any) => {
    console.log('params id', route.key) 
    const [studValue, setStudValue] = useState({
        name: route.params.name,
        id:route.params.id,
        schId: route.params.schId,
        schHeadId: route.params.schHeadId,
        teacherId: route.params.teacherId
    })
    

    return (
        <StudentContext.Provider value={studValue}>
            <Navigator drawerContent={(props)=>(<CustomDrawerContent {...props}/>)}>
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="text" size={24} color={color} />)
                }} name="resEdit" component={CommentPart} />
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="menu" size={24} color={color} />)
                }} name="test1" component={FirstTestScore} />
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="mail" size={24} color={color} />)
                }} name="test2" component={SecondTestScore} />
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="book" size={24} color={color} />)
                }} name="notes" component={NoteScore} />
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="history" size={24} color={color} />)
                }} name="exam" component={ExamScore} />
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="details" size={24} color={color} />)
                }} name="psychoEntry" component={PsychomotorEntry} />
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="bee" size={24} color={color} />)
                }} name="affectEntry" component={AffectiveEntry} />
                <Screen options={{
                    drawerIcon: ({color})=>(<MaterialCommunityIcons name="application-settings" size={24} color={color} />)
                }} name='settings' component={SettingsScreen} />
            </Navigator>
        </StudentContext.Provider>
    )
}
{/* <Button 
                title='Preview'
                onPress={navigation.navigate('resultPreview')}
            /> */}
export default ResultEditDrawer;