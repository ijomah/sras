import React from "react";
import { SafeAreaView } from "react-native";

import AffectPage from "../resultCommons/CommonPages";
import CognitPage from "../resultSheet/Cognitive";
import PsychoPage from "../resultSheet/Psychomotor";


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