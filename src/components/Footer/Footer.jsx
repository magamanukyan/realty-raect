import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f__wrapper">
      <div className="paddings innerWidth flexCenter f__container">
        {/* left side */}
        <div className="flexColStart f__left">
          <img src="./logo2.svg" alt="logo" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
            {/* center icons */}
            <div className="flexStart f__center">
               <a href="/"><AiFillFacebook/> </a> 
               <a href="/"><AiFillInstagram/> </a> 
               <a href="/"><BsTelegram/> </a> 
            </div>
        {/* right side */}
        <div className="flexColStart f__right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            {" "}
            <a href="https://goo.gl/maps/GXkCcjRNz2agSTtm6" target={"_blank"}>
              Armenia, Yerevan, 4 Spendiaryan str.
            </a>
          </span>
          <div className="flexCenter ">
            <ul className="flexCenter f__menu ">
              <li>
                <a href="/">Property</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Product</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
