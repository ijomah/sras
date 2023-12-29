import React, {useState} from "react";

// import { NavigatorCon}
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StudentContext } from "../../context/studContext";


import CommentPart from "./comment";
import FirstTestScore from "./testOne";
import SecondTestScore from "./testTwo";
import ExamScore from "./exam";
import NoteScore from "./noteScore";
import PsychomotorEntry from "./enterPsychomotor";
import AffectiveEntry from "./enterAffective";


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
            <Navigator>
                <Screen name="resEdit" component={CommentPart} />
                <Screen name="test1" component={FirstTestScore} />
                <Screen name="test2" component={SecondTestScore} />
                <Screen name="notes" component={NoteScore} />
                <Screen name="exam" component={ExamScore} />
                <Screen name="psychoEntry" component={PsychomotorEntry} />
                <Screen name="affectEntry" component={AffectiveEntry} />
            </Navigator>
        </StudentContext.Provider>
    )
}
{/* <Button 
                title='Preview'
                onPress={navigation.navigate('resultPreview')}
            /> */}
export default ResultEditDrawer;