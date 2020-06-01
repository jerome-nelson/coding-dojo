import React, { useState, useEffect } from "react";


export const FileContext = React.createContext({
    data: {},
    hasError: false
});
export const DataProvider = ({ children }: { children?: React.ReactNode }) => {

    const [hasError, setErrors] = useState(false);
    const [json, setJSON] = useState({});

    useEffect(() => {
        fetch("./data.json")
            .then((raw: Response) => raw.json())
            .then(sections => setJSON(sections))
            .catch(() => setErrors(true))
    });

    return (
        <FileContext.Provider
            value={{
                data: json,
                hasError
            }}
        >
            {children ? children : ''}
        </FileContext.Provider>
    );
}