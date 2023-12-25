import React from "react";
import { SafeAreaView } from "react-native";

import AffectPage from "../resultCommons/CommonPages";
import CognitPage from "../drawers/resultView/Cognitive";
import PsychoPage from "../drawers/resultView/Psychomotor";


const ResultViewer = () => {

    return (
        <SafeAreaView>
            <AffectPage />
            {/* <CognitPage /> */}
            {/* <PsychoPage /> */}

        </SafeAreaView>
    )
}

export default ResultViewer;