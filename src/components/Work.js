import { Fragment, useContext, useState } from 'react';
import NavContext from '../context/navContext';
import { ImgSideBar, SliderSideBar, VideoSideBar, YoutubeSideBar } from './WorkSideBar';

const workData = [
  {
    img: 'img/projects/0-1.png',
    name: 'BNBPOT',
    format: 'slider',
    project: 'BLOCKCHAIN GAMBLING',
    duration: '2 YEAR 10 MONTHS',
    technologies: ['Solidity', 'React', 'Express', 'MUI', 'MONGODB', 'web3.js'],
    budget: '35 USD/hr ',
    url: 'https://bnbpot.io/',
    count: 4,
  },
  {
    img: 'img/projects/1-1.png',
    name: 'Seedify',
    format: 'slider',
    project: 'BLOCKCHAIN',
    duration: '5 MONTHS',
    technologies: ['Solidity', 'React', 'Express', 'web3.js'],
    budget: '35 USD/hr ',
    url: 'https://launchpad.seedify.fund/',
    count: 5,
  },
  {
    img: 'img/projects/2-1.png',
    name: 'nftfan.host',
    format: 'slider',
    project: 'NFT minting',
    duration: '3 MONTHS',
    technologies: ['React', 'ReactNative', 'Express', 'Solidity', 'wagmi', 'mui', 'mongoDB'],
    budget: '25 USD/Hr',
    url: 'https://nftfan.host/',
    count: 3,
  },
  {
    img: 'img/projects/3-1.png',
    name: 'AppleGutter',
    format: 'img',
    project: 'SASS Platform',
    duration: '4 MONTHS',
    technologies: ['Laravel', 'Vue.js', 'Node.js', 'Bootstrap', 'SCSS'],
    budget: '25 USD/Hr',
    url: 'https://applegutters.com',
    count: 5,
  },
  {
    img: 'img/projects/4-1.png',
    name: 'LETSTANGO',
    format: 'slider',
    project: 'E-Commerce PlatForm',
    url: 'https://www.letstango.com/',
    duration: '5 MONTHS',
    technologies: ['React.js', 'Next.js', 'Shopify', 'Amazon Web Service', 'Node.js', 'MS SQL', 'Mongo'],
    budget: '40 USD/Hr',
    count: 4,
  },
  {
    img: 'img/projects/5-1.png',
    name: 'Osiris Wallet',
    format: 'img',
    project: 'WALLET',
    duration: '3 MONTHS',
    technologies: ['MONGODB', 'EXPRESS', 'REACTNATIVE'],
    budget: '2550 USD',
    url: 'https://play.google.com/store/apps/details?id=com.osiris',
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id='work' className={`${nav === 'work' ? 'active' : ''}`}>
        <div className={`portfolio-container ${active ? 'slide-out overflow-hidden' : ''}`}>
          {/* Main Heading Starts */}
          <div className='container page-title text-center'>
            <h2 className='text-center'>
              my <span>portfolio</span>
            </h2>
            <span className='title-head-subtitle'>a few recent coding projects. Want to see more? Email me.</span>
          </div>
          {/* Main Heading Ends */}
          <div className='portfolio-section'>
            <div className='container cd-container'>
              <div>
                {/* Portfolio Items Starts */}
                <ul className='row' id='portfolio-items'>
                  {workData.map((work, i) => (
                    <li className='col-12 col-md-6 col-lg-4' key={i}>
                      <a href='#' data-type='project-1' onClick={() => setActive(i + 1)}>
                        <img src={work.img} alt='Project' className='img-fluid' />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className='portfolio-overlay' onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div key={i} className={`project-info-container project-1 ${active === i + 1 ? 'slide-in' : ''}`}>
            {/* Main Content Starts */}
            <div className='project-info-main-content'>
              {work.format == 'img' ? (
                <ImgSideBar img={work.img} />
              ) : work.format == 'youtube' ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == 'slider' ? (
                <SliderSideBar id={i} count={work.count} />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className='projects-info row'>
              <div className='col-12 col-sm-8 p-none'>
                <h3 className='font-weight-600 uppercase'>{work.name}</h3>
                <ul className='project-details'>
                  <li>
                    <i className='fa fa-file-text-o' />
                    <span className='font-weight-400 project-label'> Project </span>:{' '}
                    <span className='font-weight-600 uppercase'>{work.project}</span>
                  </li>
                  <li>
                    <i className='fa fa-file-text-o' />
                    <span className='font-weight-400 project-label'> URL </span>:{' '}
                    <a href={work.url} target='_blank' rel='noreferrer'>
                      <span className='font-weight-600 uppercase'>{work.url}</span>
                    </a>
                  </li>
                  <li>
                    <i className='fa fa-hourglass-o' />
                    <span className='font-weight-400 project-label'> Duration </span>:{' '}
                    <span className='font-weight-600 uppercase'>{work.duration}</span>
                  </li>
                  <li>
                    <i className='fa fa-code' /> <span className='font-weight-400 project-label'> Technologies</span> :{' '}
                    <span className='font-weight-600 uppercase'>
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>&nbsp;{technologie}&nbsp;,</Fragment>
                      ))}
                    </span>
                  </li>
                  <li>
                    <i className='fa fa-money' /> <span className='font-weight-400 project-label'> Budget</span> :{' '}
                    <span className='font-weight-600 uppercase'>{work.budget}</span>
                  </li>
                </ul>
                <a href={work.url} target='_blank' rel={`noreferrer`} className='btn'>
                  <span>
                    <i className='fa fa-external-link' />
                    GoTo Site
                  </span>
                </a>
              </div>
              <div className='col-4 p-none text-right'>
                <a href='#' className='btn btn-secondary close-project' onClick={() => setActive(null)}>
                  <span>
                    <i className='fa fa-close' />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span className={`back-mobile ${active ? 'is-visible' : ''}`} onClick={() => setActive(null)}>
          <i className='fa fa-arrow-left' />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
