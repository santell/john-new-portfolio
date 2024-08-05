import { useContext } from 'react';
import NavContext from '../context/navContext';
import { Image } from 'react-bootstrap';
import CONSTANT from '../../constants';
import SkillItem from './SkillItem';
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id='about' className={`${nav === 'about' ? 'active' : ''}`}>
      {/* Main Heading Starts */}
      <div className='container page-title text-center'>
        <h2 className='text-center'>
          about <span>me</span>
        </h2>
        <span className='title-head-subtitle'>
          I am passionate about coding innovative web and AI applications, and I love what I do
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className='container infos'>
        <div className='row personal-info'>
          {/* Personal Infos Starts */}
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='image-container'>
              <Image className='img-fluid d-block' src='img/dark-about.jpg' alt='' />
            </div>
          </div>
          <div className='row col-xl-6 col-lg-6 col-md-12'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
              <ul className='list-1'>
                <li>
                  <h6>
                    <span className='font-weight-600'>First Name</span>
                    John
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Last Name</span>
                    Pope
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Birthdate</span>8 Oct 1994
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Nationality</span>
                    United State
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Experience</span>8 years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Address</span>
                    New Kensington, PA
                  </h6>
                </li>
              </ul>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6'>
              <ul className='list-2'>
                <li>
                  <h6>
                    <span className='font-weight-600'>Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Languages</span>
                     English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Phone</span>+1 631 392 6899
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Email</span>
                    <span>Justintouchstone29@gmail.com</span>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Github</span>
                    <a href='https://github.com/santell'target='_blank' rel="noreferrer">santell</a>
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className='font-weight-600'>Telegram</span>
                    <a href='https://t.me/JohnPope1008'target='_blank' rel="noreferrer" >JohnPope1008</a>
                  </h6>
                </li>
              </ul>
            </div>
            <div className='col-12 resume-btn-container'>
              <a href='john.pdf' download className='btn btn-resume'>
                <span>
                  <i className='fa fa-download' />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className='container col-12 mx-auto text-center'>
        <hr className='about-section' />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className='resume-container'>
        <div className='container'>
          <div className='row'>
            {/* Experience Starts */}
            <div className='col-xl-12 col-lg-12 col-md-12'>
              <h2 className='font-weight-600 uppercase title-section'>experience</h2>
              <div className='resume-items'>
                {/* Item Starts */}
                <div className='item'>
                  <span className='bullet' />
                  <div className='card'>
                    <div className='card-header'>
                      <span className='year'>
                        <i className='fa fa-calendar' />
                        <i className='fa fa-caret-right' />
                        JAN 2022 – MAR 2023
                      </span>
                      <span className='d-block font-weight-400 uppercase'>
                        SENIOR FULL STACK DEVELOPER
                        <span className='separator' />
                        <span className='font-weight-700'>UNSCHOOLER | REMOTE</span>
                      </span>
                    </div>
                    <div className='card-body'>
                      <p>
                        • Structured the store and added thunk middlewares for APIs using Reduxjs toolkit for a better
                        performance and code optimization.
                      </p>
                      <p>
                        • Built the forecast dashboard for an AI platform with Angular, angular-data-grid, integrated
                        3rd party services including GA and Mixpanel
                      </p>
                      <p>• Served as the lead engineer and conducted code review and mentored other developers</p>
                      <p>
                        •Contributed to building e-commerce website by improving efficiency by 20% with GraphQL and
                        Apollo.
                      </p>
                      <p>
                        • Built and maintained software services and UI components with Angular, TypeScript, Microsoft
                        Azure, RxJS and Django.
                      </p>
                      <p>• Participated in building an NFT marketplace with React, TypeScript, MUI and ethers.js.</p>
                      <p>
                        • Implemented new features including OAuth of an educational platform (React / Express /
                        PostgreSQL / Firebase)
                      </p>
                      <p>
                        • Improved the performance of the market place by 30% leveraging optimization techniques and
                        deployed it into AWS.
                      </p>
                      <p>• Created a mobile application to manage orders for patients using React Native.</p>
                      <p>
                        • Designed and implemented the auditing system of the company using Vue, TypeScript and Django.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className='item'>
                  <span className='bullet' />
                  <div className='card'>
                    <div className='card-header'>
                      <span className='year'>
                        <i className='fa fa-calendar' />
                        <i className='fa fa-caret-right' />
                        MAR 2019 - DEC 2021
                      </span>
                      <span className='d-block font-weight-400 uppercase'>
                        BACKEND DEVELOPER
                        <span className='separator' />
                        <span className='font-weight-700'>SCOPIC|US,REMOTE</span>
                      </span>
                    </div>
                    <div className='card-body'>
                      <p>
                        • Developed a real time communication platform within the company (React / Express / MongoDB /
                        EasyRTC / Bootstrap).
                      </p>
                      <p>• Implemented the task board for a company using Laravel Livewire.</p>
                      <p>• Created an automated documentation system using Vue and Element Plus.</p>
                      <p>
                        • Planned website development, converting mock-ups into usable web presence with HTML,
                        JavaScript, Angular, React and Vue.js.
                      </p>
                      <p>
                        • Collaborated with the external engineering and design team to integrate the APIs and build the
                        UI.
                      </p>
                      <p>
                        • Wrote unit and e2e tests for APIs, components and UI flow in several applications (Enzyme /
                        Cypress / Jest).
                      </p>
                      <p>
                        • Designed and implemented API endpoints for the admin panel of the online learning site (Node /
                        Express / REST).
                      </p>
                      <p>
                        • Participated in the team project for building customer-facing web applications and MVPs using
                        React, PostgreSQL and Node.js.
                      </p>
                      <p>
                        • Found bugs in the beta version and improved original mechanism to enhance search functionality
                        (Laravel / Elastic Search).
                      </p>
                      <p>
                        • Translated designs into pixel perfect responsive UI by collaborating with the designer using
                        React, TypeScript, Tailwind and MUI.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className='item'>
                  <span className='bullet' />
                  <div className='card'>
                    <div className='card-header'>
                      <span className='year'>
                        <i className='fa fa-calendar' />
                        <i className='fa fa-caret-right' />
                        MAR 2017 – FEB 2019
                      </span>
                      <span className='d-block font-weight-400 uppercase'>
                        FRONT END WEB DEVELOPER
                        <span className='separator' />
                        <span className='font-weight-700'>CLEVEROAD | TALLINN, ESTONIA</span>
                      </span>
                    </div>
                    <div className='card-body'>
                      <p>• Upgraded the legacy code and UI of the ERP system using React, Bootstrap and SASS.</p>
                      <p>• Built the video browsing platform using Next.js and video streaming technology.</p>
                      <p>• Involved in several team projects and got used to the agile methodology.</p>
                      <p>• Built the admin system of the financial agency using MERN stack.</p>
                      <p>
                        • Performed website development for clients in diverse fields such as health care, education,
                        fintech and so on.
                      </p>
                      <p>
                        • Kept up-to-date with the latest technologies through learning, research and self-development.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className='col-xl-12 col-lg-12 col-md-12 skills-container'>
              <h2 className='font-weight-600 uppercase title-section  ' style={{ marginTop: '30px !important' }}>
                Education
              </h2>
              <div className='resume-items'>
                {/* Item Starts */}
                <div className='item'>
                  <span className='bullet' />
                  <div className='card'>
                    <div className='card-header'>
                      <span className='year'>
                        <i className='fa fa-calendar' />
                        <i className='fa fa-caret-right' />
                        2012 - 2017
                      </span>
                      <span className='d-block font-weight-400 uppercase'>
                        BS IN COMPUTER SCIENCE
                        <span className='separator' />
                        <span className='font-weight-700'>Pennsylvania College of Technology</span>
                        <br />
                        <span style={{ fontSize: '12px' }}> Williamsport, Pennsylvania, US</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className='row'>
            {/* Skill Bar Starts */}
            <div className='col-12'>
              <h2 className='font-weight-600 uppercase title-section skills-title'>skills</h2>
            </div>
            {CONSTANT.skills.map((item, index) => (
              <SkillItem name={item.name} percent={item.percent} key={index} />
            ))}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
