import React, { createContext, useState } from 'react';

export const OpenScreenContext = createContext();

export const OpenScreenContextProvider = props => {

    const [isListOpen, setIsListOpen] = useState(false);
    const [isAddScreenOpen, setIsAddScreenOpen] = useState(false);


    const contextValue = {isListOpen, setIsListOpen, isAddScreenOpen, setIsAddScreenOpen}

    return(
        <OpenScreenContext.Provider value={contextValue}>
            {props.children}
        </OpenScreenContext.Provider>
    )
}
