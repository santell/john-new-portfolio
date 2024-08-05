import emailjs from 'emailjs-com';
import { useContext, useState } from 'react';
import NavContext from '../context/navContext';
const Contact = () => {
  const { nav } = useContext(NavContext);

  const [mailData, setMailData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) => setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          'service_15gkrol', // service id
          'template_q9auskj', // template id
          mailData,
          'FGTVSNv5aTlQf8RJ-' // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: '', email: '', message: '' });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id='contact' className={`${nav === 'contact' ? 'active' : ''}`}>
      <div className='contact-container'>
        {/* Main Heading Starts */}
        <div className='container page-title text-center'>
          <h2 className='text-center'>
            get <span>in touch</span>
          </h2>
          <span className='title-head-subtitle'>
            I’m always open to discussing product design work or partnerships.
          </span>
        </div>
        {/* Main Heading Ends */}
        <div className='container'>
          <div className='row contact'>
            {/* Contact Infos Starts */}
            <div className='col-12 col-md-4 col-xl-4 leftside'>
              <ul className='custom-list'>
                <li>
                  <h6 className='font-weight-600'>
                    {' '}
                    <span className='contact-title'>Phone</span>
                    <i className='fa fa-whatsapp' />
                    <span className='contact-content'>+1 631 392 6899</span>
                  </h6>
                </li>
                <li>
                  <h6 className='font-weight-600'>
                    {' '}
                    <span className='contact-title'>email</span>
                    <i className='fa fa-envelope-o fs-14' />
                    <a href='mailto:stevenandrychuk481@gmail.com' target='_blank' rel='noreferrer'>
                      <span className='contact-content'>Justintouchstone29@gmail.com</span>
                    </a>
                  </h6>
                </li>
                <li>
                  <h6 className='font-weight-600'>
                    <span className='contact-title'>Telgram</span>
                    <i className='fa fa-telegram' />
                    <a href='https://t.me/kkdragondev1008'>
                      <span className='contact-content'>Dragon Dev</span>
                    </a>
                  </h6>
                </li>

              </ul>
              {/* Social Media Profiles Starts */}
              <div className='social'>
                <h6 className='font-weight-600 uppercase'>Social Profiles</h6>
                <ul className='list-inline social social-intro text-center p-none'>
                  <li className='facebook'>
                    <a title='Telegram' href='https://t.me/kkdragondev1008'>
                      <i className='fa fa-telegram' />
                    </a>
                  </li>
                  <li className='github'>
                    <a title='Github' href='https://github.com/santell'>
                      <i className='fa fa-github' />
                    </a>
                  </li>
                  <li className='youtube'>
                    <a title='Linkedin' href='#'>
                      <i className='fa fa-linkedin' />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className='col-12 col-md-8 col-xl-8 rightside'>
              <p>
                If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I
                will reply you shortly.
              </p>
              <form className='contactform' onSubmit={(e) => onSubmit(e)}>
                <div className='row'>
                  {/* Name Field Starts */}
                  <div className='form-group col-xl-6'>
                    {' '}
                    <i className='fa fa-user prefix' />
                    <input
                      id='name'
                      name='name'
                      onChange={(e) => onChange(e)}
                      value={name}
                      type='text'
                      className='form-control'
                      placeholder='YOUR NAME'
                      required=''
                    />
                  </div>
                  {/* Name Field Ends */}
                  {/* Email Field Starts */}
                  <div className='form-group col-xl-6'>
                    {' '}
                    <i className='fa fa-envelope prefix' />
                    <input
                      id='email'
                      type='email'
                      name='email'
                      onChange={(e) => onChange(e)}
                      value={email}
                      className='form-control'
                      placeholder='YOUR EMAIL'
                      required=''
                    />
                  </div>
                  {/* Email Field Ends */}
                  {/* Comment Textarea Starts */}
                  <div className='form-group col-xl-12'>
                    {' '}
                    <i className='fa fa-comments prefix' />
                    <textarea
                      id='comment'
                      name='message'
                      onChange={(e) => onChange(e)}
                      value={message}
                      className='form-control'
                      placeholder='YOUR MESSAGE'
                      required=''
                    />{' '}
                  </div>
                </div>

                {/* Submit Form Button Starts */}
                <div className='submit-form'>
                  <button className='btn button-animated' type='submit' name='send'>
                    <span>
                      <i className='fa fa-send' /> Send Message
                    </span>
                  </button>
                </div>

                {/* Submit Form Button Ends */}
                <div className='form-message'>
                  <div
                    className={error ? 'empty_notice' : 'returnmessage'}
                    style={{ display: error == null ? 'none' : 'block' }}
                  >
                    <span>
                      {error
                        ? 'Please Fill Required Fields'
                        : 'Your message has been received, We will contact you soon.'}
                    </span>
                  </div>{' '}
                  <span className='output_message text-center font-weight-600 uppercase' />
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
