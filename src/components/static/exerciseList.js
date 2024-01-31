import React from 'react';
import treadmill from '../assets/Treadmill.png';
import stretching from '../assets/Stretching.png';
import yoga from '../assets/Yoga.png';
import running from '../assets/Running.png';
import lifting from '../assets/Lifting.png';
import pushup from '../assets/PushUp.png';

import { Link } from 'react-router-dom';
const ExampleExercises = [
    {
        "exercises": [
            {
                "title": "treadmill",
                "est_calories": 200,
                "duration": "15 minutes",
                "img": treadmill,
                "link":'/treadmill'
            },
            {
                "title": "stretching",
                "est_calories": 50,
                "duration": "10 minutes",
                "img": stretching,
                "link":'/stretching'
            },
            {
                "title": "yoga",
                "est_calories": 150,
                "duration": "30 minutes",
                "img": yoga,
                "link":'/yoga'
            },
            {
                "title": "pushUp",
                "est_calories": 100,
                "duration": "15 minutes",
                "img": pushup,
                "link":'/pushup'
            },
            {
                "title": "Running",
                "est_calories": 250,
                "duration": "20 minutes",
                "img": running,
                "link":'/running'
            },
            {
                "title": "Lifting",
                "est_calories": 180,
                "duration": "25 minutes",
                "img": lifting,
                "link":'/lifting'
            }
        ]
    }
];

const Exercises = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <section id='Popular-exercises' className="Popular-exercises">
          
            <h3>Popular Exercises</h3>
            <div className="Popular-Exercises__wrapper">
                {ExampleExercises[0].exercises.map((exercise, index) => (
                  
                    <Link 
                    to={exercise.link} 
                    key={index}
                    className="Popular-Exercises__wrapper_item"
                    onClick={scrollToTop}
                    >
                        <img src={exercise.img} alt={exercise.title} />
                        <p className='Popular-Exercises__wrapper__title'>{exercise.title}</p>
                        <p className='Popular-Exercises__wrapper__callories'>{exercise.est_calories} est calories</p>
                    </Link>
                ))}
            </div>
            <span className='see-more__btn'><p>SEE MORE EXERCISES</p></span>
        </section>
    );
};

export default Exercises;