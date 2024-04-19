import { createContext, useState } from "react";

export const DateContext = createContext(null);

export default function DateProvider({ children }) {
    const [currentDate, setCurrentDate] = useState('');
    const [currentHour, setCurrentHour] = useState('');

    return (
        <DateContext.Provider value={{ currentDate, setCurrentDate, currentHour, setCurrentHour }}>
        {children}
        </DateContext.Provider>
    );
}