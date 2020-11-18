// import fetch from  "node-fetch"
import axios from 'axios'

const tokenUrl = "https://api.awhere.com/oauth/token"
const baseApiUrl = process.env.BASE_API_URL
const forecastsUrl = (lat, lon) => `${baseApiUrl}/weather/locations/${lat},${lon}/forecasts`
const dailyWeatherUrl = (lat, lon, date="") => {
  let result = `${baseApiUrl}/weather/locations/${lat},${lon}/forecasts`
  if (date){
    result = `${result}/${date}`
  }
  return result;

}

  


export const getForecasts = async (lat, lon) => {
  const access_token = await getAccessToken();
  const url = forecastsUrl(lat, lon);
  const req = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    }
  })
  const res = await req.data
  console.log(res)
  return res.forecasts
}


export const getDailyWeather = async (lat, lon) => {
  let date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  const access_token = await getAccessToken();
  const url = dailyWeatherUrl(lat, lon, formattedDate);
  const req = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    }
  })
  const res = await req.data
  console.log(res)
  return res.forecast[0]
}






const getAccessToken = async () => {
  const api_key = process.env.AWHERE_KEY;
  const api_secret = process.env.AWHERE_SECRET;
  const encodedKey = Buffer.from(`${api_key}:${api_secret}`).toString("base64");
  const req = await axios.post(tokenUrl, "grant_type=client_credentials", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedKey}`,
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    }
  })
  console.log(req)
  const res  = await req.data
  console.log(res);
  return res.access_token
}