import React, { createContext, useState } from 'react';

export const OpenListContext = createContext();

export const OpenListContextProvider = props => {

    const [isListOpen, setIsListOpen] = useState(false);


    const contextValue = {isListOpen, setIsListOpen}

    return(
        <OpenListContext.Provider value={contextValue}>
            {props.children}
        </OpenListContext.Provider>
    )
}
