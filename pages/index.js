import dynamic from 'next/dynamic';
import About from '../src/components/About';
import Blog from '../src/components/Blog';
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';
import Layouts from '../src/layouts/Layouts';

import CONSTANT from '../constants';
const Work = dynamic(() => import('../src/components/Work'), {
  ssr: false,
});
const Index = () => {
  return (
    <Layouts bodyCls={'dark fullscreendark'}>
      {/* Back To Home Ends [ONLY MOBILE] */}
      {/* Home Section Starts */}
      <Home leftImg={true} leftImgSrc={CONSTANT.leftImgSrc} />
      {/* Home Section Ends */}
      {/* About Section Starts */}
      <About />
      {/* About Section Ends */}
      {/* Portfolio Section Starts */}
      <Work />
      {/* Portfolio Section Ends */}
      {/* Contact Section Starts */}
      <Contact />
      {/* Contact Section Ends */}
      {/* Blog Section Starts */}
      <Blog />
    </Layouts>
  );
};
export default Index;
