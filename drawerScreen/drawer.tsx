import React from "react";

// import { NavigatorCon}
import { createDrawerNavigator } from "@react-navigation/drawer";

import CommentPart from "../resultSheet/comment";
import FirstTestScore from "./testOne";
import SecondTestScore from "./testTwo";
import ExamScore from "./exam";
import NoteScore from "./noteScore";


const {Navigator, Screen} = createDrawerNavigator();

const ResultEditDrawer = () => {
    return (
        <Navigator>
            <Screen name="resEdit" component={CommentPart} />
            <Screen name="test1" component={FirstTestScore} />
            <Screen name="test2" component={SecondTestScore} />
            <Screen name="notes" component={NoteScore} />
            <Screen name="exam" component={ExamScore} />
        </Navigator>
    )
}

export default ResultEditDrawer;