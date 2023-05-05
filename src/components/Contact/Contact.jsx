import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import "./Contact.css";

const Contact = () => {
  return (
    <section className="c__wrapper">
      <div className="paddings innerWidth flexCenter c__container">
        {/* left side */}
        <div className="flexColStart c__left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

            <div className="flexColStart contactModes">
                {/* first row */}
                <div className="flexStart row">

                    {/* first mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size = {25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'> <a href="tel:+37494585858">+37494585858</a></span>  
                            </div>
                        </div>
                          
                            <button className='flexCenter button'>Call Now</button>
                       
                    </div>
                            {/* second mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size = {25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'> <a href="tel:+37494585858">+37494585858</a></span>  
                            </div>
                        </div>
                          
                            <button className='flexCenter button'>Chat Now</button>
                       
                    </div>
                </div>

                {/* second row */}
                <div className="flexStart row">

                    {/* third mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size = {25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'> Video Call</span>
                                <span className='secondaryText'> <a href="tel:+37494585858">+37494585858</a></span>  
                            </div>
                        </div>
                          
                            <button className='flexCenter button'>Video Call Now</button>
                       
                    </div>
                            {/* fourth mode */}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size = {25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'> <a href="tel:+37494585858">+37494585858</a></span>  
                            </div>
                        </div>
                          
                            <button className='flexCenter button'>Message Now</button>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="c__right">
          <div className="image__container">
            <img src="./contact.jpg" alt="contacts" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
