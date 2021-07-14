
import enKeno from './jsons/enKeno.json'
import enNumbers from './jsons/enNumbers.json'

const languages = {
    en: {
        keno: enKeno,
        numbers: enNumbers,
    },
}

const getActiveLanguage = (lang, isNumbers) => {
    const type = isNumbers ? 'numbers' : 'keno'
    const language = languages[lang] || languages['en']
    return language[type]
}

export default getActiveLanguage;
