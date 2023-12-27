import React from "react";

// import { NavigatorCon}
import { createDrawerNavigator } from "@react-navigation/drawer";

import AffectPage from "./Affective";
import CognitPage from "./Cognitive";
import PsychoPage from "./Psychomotor";
import ViewComment from "./viewComment";
import ViewGrandTotals from "./veiwCalculatedData";


const {Navigator, Screen} = createDrawerNavigator();

const ResultViewDrawer = () => {
    return (
        <Navigator>
            <Screen name="cognit" component={CognitPage} />
            <Screen name="affect" component={AffectPage} />
            <Screen name="psycho" component={PsychoPage} />
            <Screen name="viewComment" component={ViewComment} />
            <Screen name="grandTotal" component={ViewGrandTotals} />
        </Navigator>
    )
}

export default ResultViewDrawer;