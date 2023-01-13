export const getData = async(lang, currentCountry) => {
    const key = process.env.OW_KEY
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ currentCountry }&lang=${ lang }&appid=52a3c031efef6fae74e6c3e435ce04b7&units=metric`
    const res = await fetch(url)
    return res.json()
}