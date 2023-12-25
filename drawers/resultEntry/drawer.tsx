import React from "react";

// import { NavigatorCon}
import { createDrawerNavigator } from "@react-navigation/drawer";

import CommentPart from "./comment";
import FirstTestScore from "./testOne";
import SecondTestScore from "./testTwo";
import ExamScore from "./exam";
import NoteScore from "./noteScore";
import PsychomotorEntry from "./enterPsychomotor";
import AffectiveEntry from "./enterAffective";


const {Navigator, Screen} = createDrawerNavigator();

const ResultEditDrawer = () => {
    return (
        <Navigator>
            <Screen name="resEdit" component={CommentPart} />
            <Screen name="test1" component={FirstTestScore} />
            <Screen name="test2" component={SecondTestScore} />
            <Screen name="notes" component={NoteScore} />
            <Screen name="exam" component={ExamScore} />
            <Screen name="psychoEntry" component={PsychomotorEntry} />
            <Screen name="affectEntry" component={AffectiveEntry} />
        </Navigator>
    )
}

export default ResultEditDrawer;