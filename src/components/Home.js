import { useContext } from 'react';

import NavContext from '../context/navContext';
import AnimationText from './AnimationText';
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);

  console.log({ leftImg, leftImgSrc });
  return (
    <section id='home' className={`${nav === 'home' ? 'active' : ''}`}>
      {/* Text Rotator Starts */}
      <div className='main-text-container'>
        {leftImg && (
          <img
            className='leftimagepicture'
            src={`${leftImgSrc ? leftImgSrc : 'img/leftimage-dark.jpg'}`}
            alt='avatar'
          />
        )}
        <div className='main-text' id='selector'>
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
            Experienced full stack and blockchain developer with a passion for innovation and problem-solving. Skilled
            in developing robust and scalable web applications using cutting-edge technologies such as React, Node.js,
            and Solidity. Proven track record of delivering high-quality projects on time and within budget. Specializes
            in decentralized applications, smart contracts, and e-commerce platforms. If you`re looking for a reliable
            and skilled developer to bring your ideas to life, look no further
          </p>
          <div className='call-to-actions-home'>
            <div className='text-left'>
              <a href='#about' onClick={() => changeNav('about')} className='btn link-portfolio-one'>
                <span>
                  <i className='fa fa-user' />
                  more about me
                </span>
              </a>
              <a href='#work' onClick={() => changeNav('work')} className='btn btn-secondary link-portfolio-two'>
                <span>
                  <i className='fa fa-suitcase' />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
