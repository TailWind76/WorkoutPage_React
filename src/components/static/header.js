import { Link } from "react-router-dom";
import { useState } from "react";
import Pricing from "../pricing";

const Header = () => {
  const [isPricingActive, setIsPricingActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleModalToggle = () => {
    setIsPricingActive(!isPricingActive);
  };

  return (
    <section className="header-section">
      <div className={`Mobile-menu ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={isOpen ? "Mobile-content menu-open" : "Mobile-content"}>
        <Link to='/WorkoutPage_React/' onClick={() => setIsPricingActive(false)}><p>HOME</p></Link>

      
        {isPricingActive ? (
          <div><p>EXERCISES</p></div>
        ) : (
          <a href="#Popular-exercises"><p>EXERCISES</p></a>
        )}

        <p>TRAINERS</p>
        <p onClick={handleModalToggle}>PRICING</p>
      </div>

      <Link to='/WorkoutPage_React/'><h1>WORKOUT</h1></Link>

      <nav>
        <a href="#Popular-exercises"><p>EXERCISES</p></a>
        <a href="#trainers"> <p>TRAINERS</p> </a>
        <p onClick={handleModalToggle}>PRICING</p>
      </nav>

      <Pricing isActive={isPricingActive} handleModalToggle={handleModalToggle} />
    </section>
  );
};

export default Header;