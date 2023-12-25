import React from "react";

// import { NavigatorCon}
import { createDrawerNavigator } from "@react-navigation/drawer";

import AffectPage from "./Affective";
import CognitPage from "./Cognitive";
import PsychoPage from "./Psychomotor";


const {Navigator, Screen} = createDrawerNavigator();

const ResultViewDrawer = () => {
    return (
        <Navigator>
            <Screen name="cognit" component={CognitPage} />
            <Screen name="affect" component={AffectPage} />
            <Screen name="psycho" component={PsychoPage} />
            {/* <Screen name="notes" component={NoteScore} />
            <Screen name="exam" component={ExamScore} /> */}
        </Navigator>
    )
}

export default ResultViewDrawer;