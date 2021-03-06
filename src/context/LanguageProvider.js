import React,{useState,useEffect, useContext} from 'react';
import { useSelector } from 'react-redux';
import getActiveLanguage from "../assets/languages";
import { GAME_TYPES } from '../constants/names';
import { getLanguage } from '../helpers/general';

const LanguageContext = React.createContext({});

const LanguageProvider = ({children}) => {
    const [languageData, setLanguageData]=useState(getActiveLanguage());
    const gameType = useSelector(state => state.configs.gameType)

    const t = (text) => {
        return languageData[text] || text
    }

    useEffect(() => {
        if(gameType) {
            const isNumbersType = gameType === GAME_TYPES.NUMBERS
            const language = getLanguage()
            console.log('language', language)
            setLanguageData(getActiveLanguage(language, isNumbersType))
        }
    }, [gameType])

return(
    <LanguageContext.Provider value={{t}}>
        {children}
    </LanguageContext.Provider>
)
}

export const useTranslation = () => {
    return useContext(LanguageContext)
}

export default LanguageProvider;
