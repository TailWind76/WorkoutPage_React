import spot from '../assets/spot.svg'
import samantha from '../assets/Samantha.png'
import karen from '../assets/Karen.png'
import jonathan from '../assets/Jonathan.png'

const Recomendation = () =>{
    return(
        <section id='trainers' className="Recomendation">

<div className='Recomendation-left'>
<h4>
  <p>Workout</p>
  <p>Program</p>
  <p>Made</p>
  <p>For You</p>
  <img src={spot}></img>
</h4>

<div className='Recomendation-left__gallery'>
        <div className='Recomendation-left__gallery_item'>
            <img src={samantha}></img>

            <p className='Recomendation-left__gallery_title'>Samantha William</p>
            <p className='Recomendation-left__gallery_job'>Trainer</p>
            

            
        </div>

        <div className='Recomendation-left__gallery_item'>
            <img src={karen}></img>

            <p className='Recomendation-left__gallery_title'>Karen Summer</p>
            <p className='Recomendation-left__gallery_job'>Trainer</p>
            

            
        </div>
        


</div>





</div>

<div className='Recomendation-right'>
        
        <div className='Recomendation-right__text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

        <span className='button button-green'> <p> Get Started </p></span>
        </div>
        <div className='Recomendation-right__gallery'>
            <img src={jonathan}></img>
            <p className='Recomendation-right__gallery_title'>Jonathan Wise </p>
            <p className='Recomendation-right__gallery_job'>Trainer</p>

        </div>

</div>

            
        </section>

    )
}


export default Recomendation


