import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const getQueryString = () => window.location.search

export const getLanguageCookie = () => cookies.get('g2g-lang')

export const setLanguageCookie = (locale) => cookies.set('g2g-lang', locale)

export const getBrowserLang = () => {
     const browserLang = (
        (navigator.langauges && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage)

    // Split locales with a region code
    const browserLangWithoutRegionCode = browserLang.toLowerCase().split(/[_-]+/)[0]

    return browserLangWithoutRegionCode
}
