import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import '../index.css';
import { useEffect, useState } from 'react';
import { FaCloud } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import '../index.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DateContext } from '../context/dateContext';

const cloudy = ["03d", "04d", "03n", "04n"];
const sunny = ["01d", "02d", "01n", "02n"];
const rainny = ["09d", "10d", "09n", "10n"];

export default function Main() {
    const [weather, setWeather] = useState();
    const [icon, setIcon] = useState();
    const {setCurrentDate, setCurrentHour, currentDate, currentHour} = useContext(DateContext);
    dayjs.locale('ja');
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.tz.setDefault('Asia/Tokyo')

    useEffect(() => {
      setCurrentDate(dayjs().format('D MMMM YYYY'));
      setCurrentHour(dayjs().tz().format('HH:mm'));
    }, []);


    // const currentDate = dayjs().format('D MMMM YYYY');
    // const currentHour = dayjs().tz().format('HH:mm');

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
    <section className="mt-1 grid grid-cols-2 grid-rows-2 justify-center h-full">
      <div className="bg-[#EF3E36] flex flex-col items-center justify-center rounded-md">
        <p><span className='font-medium'> Date :</span>  {currentDate}</p>
        <p> <span className='font-medium'> Time :</span> {currentHour}</p>
      </div>
      <div className="bg-[#17BEBB] flex flex-col items-center justify-center rounded-md">
        <p className='font-medium'>{weather}</p>
        {cloudy.includes(icon) && <FaCloud size={50} color='gray'/>}
        {sunny.includes(icon) && <FaSun size={50} />}
        {rainny.includes(icon) && <FaCloudRain size={50} />}
      </div>
      <div className="bg-[#EDB88B] flex flex-col items-center justify-center rounded-md">
        <Link to='/card'>
        <p>Today's activities</p>
        </Link>
      </div>
        <div className="bg-[#FAD8D6] flex flex-col items-center justify-center rounded-md">
          <Link to='/planning'>
            <p>Trip Planning</p>
          </Link>
        </div>
    </section>
  )
}
