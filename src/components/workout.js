import workoutIMG from './assets/workoutIMG.png'

const Workout = ()=>{
    return(
        <section className="wrapper-banner">

            <div className='workout__text_section'>
            <p className="workout__title_banner"> ABOUT WORKOUT </p>
            <p className="workout__description_banner">"Transform your workouts with our innovative Workout website! Embrace a strong and healthy lifestyle through personalized training, expert advice, and detailed progress tracking. Join a community of fitness enthusiasts, share your achievements, and draw inspiration from others. Elevate your fitness journey with us—where everyone takes their fitness to new heights!"</p>
           

        <div className='achivments'>
            <div className='achivment'>
            <span className='icon'>⚡️</span>
                <div className='achivment_text'>
                    <b>Rapid Result</b>           
                </div>
            
            </div>

            <div className='achivment'>
            <span className='icon'> 🚀</span>
                <div className='achivment_text'>
                    <b>Efficiency Boost</b>           
                </div>
            
            </div>



            <div className='achivment'>
            <span className='icon'>🏆</span>
                <div className='achivment_text'>
                    <b>Fast-Track to Success</b>           
                </div>
            
            </div>

            </div>
 <span className='button button-green'> <p> Get Started </p></span>
            
            </div>

            <img src={workoutIMG} />
        </section>
    )
}


export default Workout