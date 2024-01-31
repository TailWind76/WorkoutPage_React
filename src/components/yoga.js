import yogaBanner from './assets/yogaBanner.png'
import { useState,useEffect } from 'react';


const Yoga = () => {
    const [time, setTime] = useState(0);
    const [calories, setCalories] = useState(0);
  
    const timeTarget = 10 * 60; 
    const caloriesTarget = 370;
  
    useEffect(() => {
      const timeIntervalId = setInterval(() => {
        if (time < timeTarget) {
          setTime((prevTime) => prevTime + 1);
        } else {
          clearInterval(timeIntervalId);
        }
      }, 0.5); 
  
      const caloriesIntervalId = setInterval(() => {
        if (calories < caloriesTarget) {
          setCalories((prevCalories) => prevCalories + 1);
        } else {
          clearInterval(caloriesIntervalId);
        }
      }, 1); 
  
      return () => {
        clearInterval(timeIntervalId);
        clearInterval(caloriesIntervalId);
      };
    }, [time, calories, timeTarget, caloriesTarget]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
  
  
    return (
      <section className="Exercise_banner">
        <div className="Exercise_banner__left-side">
          <div className="Exercise_banner__short_descr">
            <span>
              <p>NEW</p>
            </span>
            <p>High-Intensity workout to burn calories</p>
          </div>
          <p className="Exercise_banner__title">Yoga Exercise</p>
  
          <p className="Exercise_banner__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
  
          <div className="Exercise_banner__buttons">
            <span className="button button-green">
              <p>Get Started</p>
            </span>
  
            <span className="button">
              <p>Preview</p>
            </span>
          </div>
        </div>
  
        <div className="Exercise_banner__right-side">
          <img src={yogaBanner} alt="Treadmill Banner" />
  
          <div className="Exercise_banner__right-side_stats">
            <div className="Exercise_banner__timer stat">
              <p className="time-colored">{formatTime(time)}</p>
              <p>Time</p>
            </div>
            <div className="Exercise_banner__calories stat">
              <p className="calories-colored">{calories}</p>
              <p>est calories</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Yoga;