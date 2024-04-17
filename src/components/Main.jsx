import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import '../index.css';
import { useEffect, useState } from 'react';
import { FaCloud } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import '../index.css';

const cloudy = ["03d", "04d", "03n", "04n"];
const sunny = ["01d", "02d", "01n", "02n"];
const rainny = ["09d", "10d", "01n", "02n"];

export default function Main() {
    const [weather, setWeather] = useState();
    const [icon, setIcon] = useState();
    dayjs.locale('ja');
    const currentDate = dayjs().format('D MMMM YYYY');
    const currentHour = dayjs().format('HH:mm');

    const fetchWeather = async () => {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=ef171a0f7a5385aa841ac64f68cfd9e8');
        const data = await response.json();
        setWeather(data.weather[0].description);
        setIcon(data.weather[0].icon);
    }

    useEffect(() => {
        fetchWeather();
    }, []);

  return (
    <div className='main'>
    <section className="mt-2 grid grid-cols-2 grid-rows-2 gap-1">
      <div className="bg-[#EF3E36] flex flex-col items-center justify-center rounded-md h-48">
        <p><span className='font-medium'> Date :</span>  {currentDate}</p>
        <p> <span className='font-medium'> Time :</span> {currentHour}</p>
      </div>
      <div className="bg-[#17BEBB] flex flex-col items-center justify-center rounded-md h-48">
        <p className='font-medium'>{weather}</p>
        {cloudy.includes(icon) && <FaCloud size={50} color='gray'/>}
        {sunny.includes(icon) && <FaSun size={50} />}
        {rainny.includes(icon) && <FaCloudRain size={50} />}
      </div>
      <div className="bg-[#EDB88B] flex flex-col items-center justify-center rounded-md h-48">
        <p>Today's activities</p>
      </div>
      <div className="bg-[#FAD8D6] flex flex-col items-center justify-center rounded-md h-48">
        <p>Trip Planning</p>
      </div>
    </section>
    </div>
  )
}
