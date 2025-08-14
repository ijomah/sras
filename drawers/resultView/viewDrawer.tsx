import React from "react";

// import { NavigatorCon}
import { createDrawerNavigator } from "@react-navigation/drawer";

import AffectPage from "./Affective";
import CognitPage from "./Cognitive";
import PsychoPage from "./Psychomotor";
import ViewComment from "./viewComment";
import ViewGrandTotals from "./veiwCalculatedData";
import ClassBroadSheetPage from './classBroadsheet';
import SettingsScreen from './../../screens/appSetting';
import DownloadRes from "./downloadRes";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomDrawerContent from "../custDrawer";

const {Navigator, Screen} = createDrawerNavigator();

const ResultViewDrawer = () => {
    // const obj = {name:'cognit', comp: CognitPage}
    return (
        <Navigator drawerContent={(props)=>(<CustomDrawerContent {...props}/>)}>
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="head-cog" size={24} color={color} />)
            }} name="cognit" component={CognitPage} />
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="human-male-height" size={24} color={color} />)
            }} name="affect" component={AffectPage} />
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="vector-ellipse" size={24} color={color} />)
            }} name="psycho" component={PsychoPage} />
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="comment-multiple" size={24} color={color} />)
            }} name="viewComment" component={ViewComment} />
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="arrange-send-to-back" size={24} color={color} />)
            }} name="grandTotal" component={ViewGrandTotals} />
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="book-open-page-variant" size={24} color={color} />)
            }} name='classBroadSheet' component={ClassBroadSheetPage} />
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="cloud-download" size={24} color={color} />)
            }} name='Download' component={DownloadRes} />
            <Screen options={{
                drawerIcon: ({color})=>(<MaterialCommunityIcons name="application-settings" size={24} color={color} />)
            }} name='Settings' component={SettingsScreen} />
        </Navigator>
    )
}

export default ResultViewDrawer;