import CountUp from 'react-countup';
import {HiLocationMarker} from 'react-icons/hi'
import { motion } from 'framer-motion';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero__wrapper">
      <div className="paddings innerWidth flexCenter hero__container ">
        {/* left side */}
        <div className=" flexColStart hero__left">
          <div className="hero__title">
            <div className="orange__circle"/>
            <motion.h1
              initial={{y:"2rem", opacity:0}}
              animate = {{y:0, opacity:1}}
              transition = {{
                duration:2,
                type:"spring"
              }}
              >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className=" flexColStart hero__des">
            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color = "var(--blue)" size = {25}/>
            <input type="text"/>
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start = {700} end = {1000}/>
                    <span>+</span>
                </span>
                <span className='secondaryText'>Premium Products</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                    <CountUp start = {1900} end = {2000}/>
                    <span>+</span>
                </span>
                <span className='secondaryText'>Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
                <span>
                    <CountUp end = {15}/>
                     <span>+</span>
                </span>
               
                <span className='secondaryText'>Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className=" flexCenter hero__right">
          <motion.div
            initial = {{x:"7rem", opacity:0}}
            animate = {{x:0, opacity:1}}
            transition = {{
              duration:2,
              type:"spring"
            }}
           className="image__container">
            <img src="./hero-image.png" alt="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
