import React, { useState,useEffect } from 'react';
import pricing1 from './assets/pricing1.jpg'
import pricing2 from './assets/pricing2.jpg'
import pricing3 from './assets/pricing3.jpg'
import coupon from './assets/ciupon.svg'
import arrow from './assets/arrow.svg'

const Pricing =( { isActive, handleModalToggle } )=>{
    const pricingClass = isActive ? 'pricing  activated' : 'pricing ';

    useEffect(() => {
      const body = document.body;
      if (isActive) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    }, [isActive]);
  const handleModalClose = () => {
    handleModalToggle(); 
  };

  
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  
    return(
        <section className={pricingClass}>

        <span className="close-modal" onClick={handleModalClose}>✖</span>
            <div className="pricing_wrapper">

                <div  className={`pricing_wrapper__item ${activeItem === 0 ? 'pricing-active' : ''}`}
          onClick={() => handleItemClick(0)}> 
                <img src={pricing1}></img>
                <p className='pricing_title'>Basic Plan</p>
                <div className='pricing_description'> <ul>
    <li>Unlimited access to the gym during operating hours.</li>
    <li>Participation in group fitness classes with experienced instructors.</li>
    <li>Access to changing rooms and showers.</li>
  </ul></div>
                </div>
                <div  className={`pricing_wrapper__item ${activeItem === 1 ? 'pricing-active' : ''}`}
          onClick={() => handleItemClick(1)}> 
                <img src={pricing2}></img>
                <p className='pricing_title'>Advanced Plan</p>
                <div className='pricing_description'> <ul>
    <li>All features of the Basic Plan.</li>
    <li>Personal consultation with a trainer to create an individual workout program.</li>
    <li>Access to the cardio zone with modern cardio equipment.</li>
    <li>10% discount on group fitness classes.</li>
  </ul>

</div>             </div>
                <div  className={`pricing_wrapper__item ${activeItem === 2 ? 'pricing-active' : ''}`}
          onClick={() => handleItemClick(2)}> 
                <img src={pricing3}></img>
                <p className='pricing_title'>Premium Plan</p>
                <div className='pricing_description'> <ul>
    <li>All features of the Advanced Plan.</li>
    <li>Access to the VIP zone with additional modern equipment.</li>
    <li>24/7 access to the fitness center.</li>
    <li>Free individual training sessions with a personal trainer twice a month.</li>
    <li>Complimentary drinks and protein shakes.</li>
  </ul></div>
                </div>

            </div>

            <div className='pricing_order'>

                <span className='order button button-green'> <p>Order</p> <img src={arrow}></img></span>
                <span className='button promocode'> <img src={coupon}></img> <p>Activate promocode</p></span>

              
            </div>



        </section>
    )
}


export default Pricing