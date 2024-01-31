import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './components/css/main.css'
import Treadmil from './components/treadmill';
import Stretching from './components/stretching';
import Yoga from './components/yoga';
import Running from './components/running';
import Lifting from './components/lifting';

import Header from './components/static/header';
import Exercises from './components/static/exerciseList';
import Recomendation from './components/static/recomendation';
import FintesPlan from './components/static/fitnesPlan';
import PushUp from './components/pushups';
import Pricing from './components/pricing';

import Workout from './components/workout';

const App = () => (

  <Router>


  <Pricing />
  <Header />



  <Routes>
  <Route path='WorkoutPage_React/' element={<Workout/>} />
  <Route path='WorkoutPage_React/treadmill' element={<Treadmil/>} />
  <Route path='WorkoutPage_React/stretching' element={<Stretching/>} />
  <Route path='WorkoutPage_React/yoga' element={<Yoga/>} />
  <Route path='WorkoutPage_React/pushup' element={<PushUp/>} />
  <Route path='WorkoutPage_React/running' element={<Running/>} />
  <Route path='WorkoutPage_React/lifting' element={<Lifting/>} />

  </Routes>


  <Exercises/>

  <Recomendation/>

  <FintesPlan/>

  </Router>
)

export default App;
