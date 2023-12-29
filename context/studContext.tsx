import React, {createContext} from "react";

export const StudentContext = createContext(
    {
        name: '', 
        id: '1', 
        teacherId: '',
        schId: '',
        schHeadId: ''
    }
);