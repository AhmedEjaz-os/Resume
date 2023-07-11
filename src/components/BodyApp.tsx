import React, { useEffect, useRef, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/css/component/body.css';
import { NavLink } from 'react-router-dom';

var i = -1; 
var prevIvalue = -1;
var concetenatedString = '';

function BodyApp() {
  const [ scrollIsOk, setscrollIsOk ] = useState(false);
  const [ scrollIsOkAtExp, setscrollIsOkAtExp ] = useState(false);
  const [ scrollIsOkAtContact, setscrollIsOkAtContact ] = useState(false);
  const [ sentence, setSentence ] = useState('');
  const scrollRef = useRef(null);

  const experience = [
    {
      imgUrl: './images/Experience-card-image.png',
      heading: 'ParsLabs'
    },
  ]

  const contactCardInfo = [
    {
      fontIconName: <EmailIcon className="cards-contact-icon" />,
      heading: 'Email',
      subheading: 'ahm.ejaz791@gmail.com',
      anchorLink: 'ahm.ejaz791@gmail.com'
    },
    {
      fontIconName: <PhoneIcon className="cards-contact-icon" />,
      heading: 'Phone',
      subheading: '+923369196005',
      anchorLink: '+923369196005'
    },
    {
      fontIconName: <WhatsAppIcon className="cards-contact-icon" />,
      heading: 'Whatsapp',
      subheading: '+923369196005',
      anchorLink: '923369196005'
    },
    {
      fontIconName: <LinkedInIcon className="cards-contact-icon" />,
      heading: 'LinkedIn',
      subheading: 'https://www.linkedin.com/in/ahmed-ejaz-4a016a19a',
      anchorLink: 'https://www.linkedin.com/in/ahmed-ejaz-4a016a19a'
    },
    {
      fontIconName: <GitHubIcon className="cards-contact-icon" />,
      heading: 'GitHub',
      subheading: 'https://github.com/AhmedEjaz-os',
      anchorLink: 'https://github.com/AhmedEjaz-os'
    },
  ]


  function handleScroll() {
    if (window.pageYOffset >= 400){
      setscrollIsOk(true);
    }
    if (window.pageYOffset >= 1000){
      setscrollIsOkAtExp(true) 
    }
    if (window.pageYOffset >= 1500){
      setscrollIsOkAtContact(true)
    }
    
  };

  const paragraphText = "Hi. I am a Web Developer. I graduated from the University of South Asia, Lahore. I am a fast learner, highly flexible, and can work under pressure, A motivated Computer Engineer eager to start my career in Web development. With a solid understanding of programming languages such as HTML, CSS, SASS, and REACTJS. With a strong work ethic, positive attitude, and willingness to learn, I am excited to contribute to a team and grow professionally. I am highly skilled in these technologies:";
  const speed = 250;
  
  // if(i === -1) {
  //   writeCompleteText();
  // }
  if (scrollIsOk){
    writeCompleteText()
  }
  function writeCompleteText(){
    if( i < paragraphText.length) {
      if(prevIvalue !== i){
        concetenatedString = concetenatedString + paragraphText[i]
        setSentence(concetenatedString);
        prevIvalue = i;
        setTimeout(writeCompleteText, speed);
      }
      else{
        i = i + 1;
        setTimeout(writeCompleteText, speed);
      }
    }
    else{
      return
    }
  }

  


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <div className='position-relative'>
      {/* Section -------------> 1 */}
      <div className='SectionOneIntroduction d-flex align-items-center' id="intro">
        <div className='IntoPart w-50 ps-3'>
          <h4 className='text-white'>Hi! My Name is</h4>
          <h2 className='text-uppercase'> Muhammad Ahmed Ejaz.</h2>
          <h1 className='p-0 text-white text-uppercase'>I make awesome websites</h1>
          <a href="#contact"><button className='getInTouchBtn'>GET IN TOUCH</button></a>
        </div>
        <div className='SkillsPart d-none d-lg-block w-50'>
          <div className='htmlDiv'>
            <img src={"./images/htmlLogo.png"} alt="" className='htmlLogoImage logoImage' />
            <span className='oval ovalHtml'></span>
          </div>
          <div className='cssDiv'>
            <img src={"./images/cssLogo.png"} alt="" className='cssLogoImage logoImage' />
            <span className='oval ovalCss'></span>
          </div>
          <div className='materialDiv'>
            <img src={"./images/materialLogo.png"} alt="" className='materialLogoImage logoImage' />
            <span className='oval ovalMaterial'></span>
          </div>
          <div className='reactDiv'>
            <img src={"./images/reactLogo.png"} alt="" className='reactLogoImage logoImage' />
            <span className='oval ovalReact'></span>
          </div>
        </div>
      </div>
      {/* Section -------------> 2 */}
      <div className='SectionTwoAbout' ref={scrollRef} id="about">
        <h1 className={scrollIsOk ? 'SectionTwoHeading moveInView' : 'SectionTwoHeading'}>About</h1>
        <h5 className='SectionTwoDescription w-75'>
        {
          scrollIsOk ? 
          <div className={sentence.length >= 487 ? 'SectionTwoDescription-text text-complete' : 'SectionTwoDescription-text'}>
            {sentence}
          </div>
           :
          <div>
          </div>
        }

        <br />
        <br />
        <span className={scrollIsOk ? 'SectionTwoDescription-bullets SectionTwoDescription-bullets-1' : 'SectionTwoDescription-bullets'}>◉ HTML5,</span>
        <br />
        <span className={scrollIsOk ? 'SectionTwoDescription-bullets SectionTwoDescription-bullets-2' : 'SectionTwoDescription-bullets'}>◉ CSS3,</span>
        <br />
        <span className={scrollIsOk ? 'SectionTwoDescription-bullets SectionTwoDescription-bullets-3' : 'SectionTwoDescription-bullets'}>◉ Sass,</span>
        <br />
        <span className={scrollIsOk ? 'SectionTwoDescription-bullets SectionTwoDescription-bullets-4' : 'SectionTwoDescription-bullets'}>◉ Bootstrap / Tailwind CSS / Material UI,</span>
        <br />
        <br className='d-block d-sm-none'/>
        <span className={scrollIsOk ? 'SectionTwoDescription-bullets SectionTwoDescription-bullets-5' : 'SectionTwoDescription-bullets'}>◉ Javascript,</span>
        <br />
        <span className={scrollIsOk ? 'SectionTwoDescription-bullets SectionTwoDescription-bullets-6' : 'SectionTwoDescription-bullets'}>◉ ReactJs</span>
        <span className='cursor'></span>
        </h5>
      </div>

      {/* Section -------------> 3 */}
      <div className="SectionThreeExperience" id="projects">
        <h1 className={scrollIsOkAtExp ? 'SectionTwoHeading moveInView' : 'SectionTwoHeading'}>Experience</h1>
        <div className='d-flex flex-row flex-wrap col-12'>
        {
          experience.map(({imgUrl, heading}, index) => (
          <div className={scrollIsOkAtExp ? "cards-experence col-lg-4 col-md-6 col-sm-8 col-10 moveTheCard" : "cards-experence col-md-4 col-1"} key={index}>
            <img src={imgUrl} alt="" className='cards-experence-img' />
            <h4 className='cards-experence-heading text-white pt-1 pb-1 d-flex justify-content-center align-items-center mb-0'>{heading}</h4>
          </div>
          ))
        }
        </div>
        
      </div>

      {/* Section -------------> 4 */}
      <div className="SectionFourContact" id="contact">
        <h1 className={scrollIsOkAtContact ? 'SectionTwoHeading moveInView' : 'SectionTwoHeading'}>Contact</h1>
        <div className='d-flex flex-row flex-wrap col-12'>
        {
          contactCardInfo.map(({fontIconName, heading, subheading, anchorLink}, index) => (
            <NavLink 
              className={scrollIsOkAtContact ? "links cards-contact col-lg-4 col-md-6 col-sm-8 col-10 moveTheCard" : "links cards-contact col-md-4 col-1"}
              to={'#'}
              onClick={(e) => {
                if(index === 0) {
                  window.open(
                    `mailto:${anchorLink}`
                  );
                }
                if(index === 1){
                  window.open(
                    `tel:${anchorLink}`
                  );
                }
                if(index === 2){
                  window.open(
                    `https://wa.me/${anchorLink}`, 
                    '_blank'
                  );
                }
                if(index !== 1  && index !== 0 && index !== 2){
                  window.open(
                    `${anchorLink}`, 
                    '_blank'
                  );
                }
                e.preventDefault();
            }}
 
            >
              <div className='d-flex flex-column align-items-center'>
              {fontIconName}
              <h5 className='cards-contact-heading text-white text-center'>{heading}</h5>
              <p className='cards-contact-subheading text-white text-center'>{subheading}</p>
            </div>
            </NavLink>
          ))
        }
        </div>
        
      </div>

    </div>
  )
}

export default BodyApp