import { Fragment, useContext, useState } from 'react';
import NavContext from '../context/navContext';
import BlogPopup from './BlogPopup';
const data = [
  {
    title: 'When AI and Blockchain Merge, Expect the Mundane at First',
    img: 'img/blog/blog-post-1.jpg',
    tag: 'Branding',
    date: { date: '23', month: 'May', year: '2023' },
    des: [
      'Everybody wants to know how blockchain and generative-AI technologies will come together, so allow me to speculate.     ',
      'From family dinners to weekend afternoons, I`ve spent a lot of time in the last six months playing around with generative-AI tools and thinking about how they will change “everything.”',
      ' I’m more and more certain that they will have an impact, but it won’t be as enormous or as fast as some might think, particularly in the enterprise.     ',
      'Let me start with all the reasons why generative AI is going to take a while to really achieve scale in enterprise business processes and have a measurable impact on productivity.',
      ' First and foremost, enterprises achieve scale by implementing process controls and then automating systems.',
      'From inventory management to hiring, the key to scaling enterprise systems is the ability to move people’s work efforts from individual transactions or activities to management of end-to-end processes.',
      '<span> Paul Brody is EY`s global blockchain leader and a CoinDesk columnist.',
      'Take something simple like stocking a grocery store with food. Enterprise systems and retail point-of-sale (POS) systems have been carefully integrated over the years to automatically reorder out-of-stock items and, much more importantly, forecast and plan systematically to avoid ever being out of stock.',
      'Generative-AI systems, by contrast, are not good at rigorously and consistently executing the same task over and over again with high precision. Ask a generative-AI system similar but not identical questions and you may get wildly different answers.',
      'This kind of variance breaks business processes built on input consistency.',
      'Generative-AI systems are terrific at coming up with new ideas, and doing so at enormous speed, but business transformation is largely about change management – both people and systems.',
      'Enterprise ecosystems tend to transform at about the same rate as the slowest components in the ecosystem, not the fastest ones. ',
      'A great example of this comes from the early era of web commerce. It was quickly possible to build web-based store fronts and accept credit-card payments. However, shipping and packaging was built and optimized for a world of pallet-sized deliveries to shops.',
      ' To the extent that companies even had digital catalogs, they didn’t have pictures of products. No supervisor of a grocery store needs to know what a can of soup looks like. They already know. ',
      'They’re in the store every day. As a result, e-commerce took off much more slowly than analysts expected, held back not by the web, but by warehouses and logistics systems.      Like e-commerce, generative-AI systems will infiltrate enterprise systems alongside blockchain technology and they will eventually work very well together, but the progress will be driven by careful design and integration, not rapid, wholesale adoption. While consumers are often capable of adopting new technologies broadly in about a decade, it typically takes enterprise about 25 years and we should probably expect the same with generative AI and its integration with blockchain technology.',
      '<span>A look on the bright side',
      'Having gotten the bad news out of the way, let me focus on the areas where we will see the most dramatic impact of how these two technologies will work together.',
      ' I’ve identified four that might come sooner rather than later.',
      '<span>Software development',
      'Enterprise business processes are run on software, and generative AI systems are exceptionally good at software development. It is one of the few areas where we have strong, documented evidence that generative AI systems significantly improve productivity. Since integrating blockchains into enterprise processes is very much a matter of both process and software integration, the likely impact will be significant and felt soonest.     ',
      '<span> Analytics',
      'Blockchains do an amazing job of improving data quality. When you think about products, services, and systems that move between enterprises, one of the biggest casualties of inter-company work is data quality. In a world of silos, data is re-entered in each enterprise ecosystem. On a blockchain, tokens and hashes represent assets and data and can maintain their integrity as they move through an ecosystem. With better-quality data, expect generative-AI systems to do even better analysis.      It will also work the other way around: generative-AI systems are terrific at matching and interpreting patterns. They will become foundational to the business of blockchain analytics in a very short order, helping identify trends and classifying individual transactions.     ',
      '<span> Generative AI-training data',
      'One of the biggest emerging problems for AI systems is how to find trustworthy source data. We’re in the early stages of an exa-flood of AI-generated content. Much of it will be banal, generic and mediocre. How will we know what is an authoritative, expert view on a topic or a machine-generated pattern based on other machine-generated patterns? By verifying authenticity and origin of source data using blockchain hashes.      The ANSA news agency in Italy already notarizes nearly 1 million articles a year using EY’s OpsChain system. This was intended to combat fake news, but in the future, tools like this may be critical for authenticating the sources of AI-training data.    ',
      '<span>  User interfaces',
      'In the same way that generative-AI systems are great at writing code, they are also good at interpreting error messages, problems and suggesting solutions. Blockchain usage is still too complex and conversational interfaces that are able to accept error messages, search for, and format suggestions and work as a “co-pilot” in a process are likely to be enormously helpful to users.In the early days as new technologies evolve and interact, the results tend to be both boring and predictable, much as I have described above. We saw this with GPS and Web commerce and mobile phones. At first, we had an e-commerce experience that was little more than a paper catalog on a screen. Eventually, we ended up with push-ads coming to us in a ride-sharing vehicle proposing to have food delivered to us at our destination.      And so it will be here, as blockchain and AI start to evolve and converge together. We’re in the boring phase, but just wait until things get weird and wildly unpredictable. Because they will.',
    ],
  },
  {
    title: 'Tips For The Often Distracted Developer',
    img: 'img/blog/blog-post-2.jpg',
    tag: 'Life',
    date: { date: '12', month: 'Apr', year: '2023' },
    des: [
      'Office environments can easily turn into an attention battlefield. Emails, slack notifications, calendar alerts, meetings and casual hallway chats are just a few of the interruptions knowledge workers experience on a daily basis. Followed by frequent context switching and multitasking, these interruptions have negative implications on our brain’s performance. ',
      '<span>When distractions are everywhere focus becomes scarce',
      'As described in the highly recommended read — Deep Work by Cal Newport, deep work is the ability to focus without distraction on a cognitively demanding task. It’s an important skill that you can start to sharpen once you identify and eliminate the origins of your distractions.      If you read my previous post on communicating tech debt you could tell I’m keen about improving productivity. I’m constantly looking for ways to make my team’s work as smooth as possible. So as such, I’ve gathered a few tips throughout my career as a software developer and later on as a team lead. Tips that might help you get more deep & meaningful work done.I’ve organized those tips based on their origin under 3 groups:',
      '• Schedule & time management.',
      '• Communication tools & rules',
      '• Work culture & environment',
      '<span>Schedule & time management',
      '• Time management is an art that involves planing & discipline. When done right it can also become a statement: “I don’t require micro-management, I’m fully capable of managing my own time according to the given priorities”. The next few tips aim to help you achieve this state.',
      '• Deep work intervals — split the day to intervals of deep and shallow work and set a timer which reminds you to swap between them. I found that a 75 minutes to 15 minutes ratio, respectively, works great for me.',
      '• Schedule your deep work periods as calendar events. make sure you reserve at least 4 hours of deep work a day. Write a polite event description such as: “I’m in a deep work state. Please do not interrupt me unless it’s urgent.”',
      '• Meeting-free morning — late morning (10am until noon) is usually when our brain and energy levels are at their peak. Clear your morning from meetings and dedicate those peaks to get meaningful work done.',
      '• Plan your day ahead to eliminate friction and allocate focus periods. Consider adopting a “workday shutdown” ritual when you take the last 15 minutes of your workday to plan the following day.',
      '<span>Communications tools and rules',
      '<span>From PUSH to PULL — Change how you consume communication!',
      'Your email, slack, calendar and phone constantly push notifications and alerts that beg for your immediate attention. You’re often tempted to leave all you’re doing and check them out thinking you might be missing something important or urgent. If you can identify with this behaviour then the next few tips can help you regain control of your time taken by the tools.',
      '• Disable all desktop notifications — the goal is to keep all the communication tools contained in the browser.',
      '• Prefer web clients/websites over native clients/apps versions of your communication tools. This way you can organize all those tabs inside one browser window and easily ignore or minimize it while in focus.',
      '• Use Slack “do not disturb” mode before diving deep into a complex task.',
      '• Silence your phone and disable any notification lights or screen flashes.',
      '• Need a mental break from your task? Now would be a good time to quickly overview your minimized browser window. However, do not respond to interactions unless it’s important enough, or you’ll risk losing the context of the task you’re working on.',
      '<span>Work culture & environment',
      'Colleagues and managers can behave in a focus insensitive manner with either loud shared space conversations or badly timed questions. Your work setting can also be saturated with distractions that can easily be avoided. The next few tips can help you communicate the importance of focus to your surrounding and optimize your environment.',
      '• Headphones — wearing noticeable headphones is the universal sign of being in the zone. Active noise canceling headphones will give you the freedom to just mute the world.',
      '• The Gateway Keeper — if you’re a team manager, make sure employees outside your team contact you and not your teammates directly. This way you can delegate the communication at the right time and according to the right priority.',
      '• Static background — sitting facing towards a view with lots of moving people or objects can irritate your brain while in focus. Avoid sitting in front of hallways, meeting rooms or kitchens.',
      '• Get comfortable — check that your seat is adjusted for long sitting periods, your table is at the right height, get pads for your mouse and keyboard, even consider leaving a pair of comfortable shoes or flip flops in your office.',
      '• About to dive deep into a task? Make sure that you’re well fed and won’t need the toilet soon. keep a full cup or bottle at reach.',
      'Focus is crucial for solving complex issues, inventing creative solutions and delivering valuable work. However, it gets harder to maintain focus as technology, together with culture, keep filling our environment with distractions and stimulations.Deep work is beneficial for your personal development, as well as work satisfaction and so it’s something any developer, or other knowledge worker should pursue.',
    ],
  },
  {
    title: 'How to Become a Successful Freelancer (1)',
    img: 'img/blog/blog-post-3.jpg',
    tag: 'Media',
    date: { date: '15', month: 'Mar', year: '2021' },
    des: [
      'So you’re reading this because you want to become a freelancer. You’ve thought about what you want to freelance in, you’ve got a couple of useful email addresses and you’ve even bought yourself some sweatpants that will look great with your slippers.',
      'So you’re ready to dump that job and get cracking on your first assignment, right?.',
      'Wrong.      One of the biggest misconceptions about freelancing is that you sit at home and work comes to you. When the reality is you have to fight for it, and fight hard.',
      'As our friend Leif Kendall aptly put it:      “First: you must strive. Nothing good is ever easy.”  I hate to break it to you, but working freelance means working. And I mean really working. Unlike your 9-5 cubicle, there is nothing cushy about freelancing, nothing stable about it until YOU have made it that way.',
      'But there are some simple secrets to becoming a successful freelancer which I am going to share with you in this blog post. Here they are in brief—feel free to select one to jump straight to it, or read on for the full story.',
      '1 . Contact everyone you know.',
      '2 . Work on your personal brand.',
      '2 . Write a plan of action.',
      '4 . Do your research and pay attention to competition.',
      '5 . Get yourself a mentor—and your first client.',
      'Using these steps—and a bit of determination—I’ve seen people get out of their desk jobs and start working comfortably for themselves in 30 days.    If they can do it, so can you. As Leif told it:            “Your first few days, weeks and months are probably going to be challenging, and likely to take everything you’ve got.”         So what did I do when I first went freelance?  Let’s be clear here, because what I did—what made me successful—was done BEFORE I went freelance, not after. Granted, my path to the flexible profession was abnormal. Having decided in college that “normal jobs” weren’t my thing, I used time in between studying and a karaoke bar job to set myself up.',
      'But when you read how I made the transition, you’ll realise that if you have any experience in your field at all, you’ve got it easier than I did. Just always remember that becoming a successful freelancer doesn’t begin the day you quit your job, but the day you decide it’s the lifestyle for you.',
      'In between deciding to become a freelancer and becoming a freelancer, you need to prepare to be a freelancer.  So how did I do that?',
      '<span>1. I contacted everyone I have ever known',
      'Literally. Everyone.',

      'The very first thing I did when deciding to make the switch was to get in touch with every single person I have ever known and told them my decision.      I told them the field I was going to be working in and as it became clear, even the date I was planning to leave my awful day job (in 30 days time).I also told them that I would be more than happy to take on projects straight away. If I was still studying, and working a job, why did I say I could take on projects? Wasn’t I a bit busy already, studying/working 14+ hours a day and organizing myself to go freelance or to take on projects in my free time’?The reason I told my friends and friends of friends, colleagues and ex-colleagues that I was willing to take on projects straight away was for three reasons:',
      '• Experience',
      '• Contacts',
      '• References',
      'And the earlier you send this email the better. Do it 30 days before you want to go freelance, or do it six months before. But the point is, don’t leave people hanging.  Not only do you want to make your announcement actionable, but clients take time to develop. Don’t put yourself in a position to do the work “in a month”, when the discussion you need to start may take that much time anyway!  The more experience, contacts and references you have when you go freelance, the easier making that final break from your job will be.',
      'And when people asked me to do a job for them that they couldn’t pay me for I would again consider:',
      '• Experience',
      '• Contacts',
      '• References',
      'If I was going to get just one of these things out of the arrangement then there was no way I was turning down that work, money or no money. If in doubt, remember the wise words of freelance expert Jon Norris,',
      '<span>“Building a network and finding work are two sides of the same coin.”',
      'Here I just want to include a note for those of you who have already started freelancing, as for you guys too I cannot emphasize the importance of this step enough. It’s never too late to start reaching out to people and expanding your network.',
      'If you have work to show for your efforts already, your outreach will go much further, a reason why this step should be repeated annually even once you are a successful freelancer! Keep yourself fresh in people’s minds and be their go-to person when they need a professional in your field.',
      'So after I’d contacted my entire network, what did I do next?',
      '<span>2. I got to work on my personal brand',
      'So what does my personal brand have to do with anything? I’m an experienced [insert profession here], not a social networker – why can’t I just make an ad and put it online/buy a spot in the newspaper/stick it to a tree/leave under windshield-wipers in the parking lot?,',
    ],
  },
  {
    title: 'How to become a successful freelancer (2)',
    img: 'img/blog/blog-post-4.jpg',
    tag: 'Technology',
    date: { date: '11', month: 'Feb', year: '2021' },
    des: [
      'The reason is that as a freelancer, YOU ARE YOUR BRAND.',
      'So help me god [or deity of choice], this is a truth among truths, irrespective of whether you’re a web developer, a user experience designer, a writer or a marketer.',
      'What do I mean when I say you are your brand?',
      'I mean that when you are selling your services, you are actually selling yourself. So how you come across online or off is reflective of your success, your ability, and your professionalism. Your personality counts. Big time. If people don’t like you, they won’t buy what you’re selling.',
      'So, how did I build my personal brand?',
      '1 .I got myself on LinkedIn and I fully filled out my profile. Every single detail of my experience. Every relevant job I ever had. Every morsel about me that could be interesting.',
      '2 .I then did the same thing on Facebook. I joined relevant groups for my field and started asking questions, lots of questions, as well as answering any I could. ',
      '3. I did the same on Twitter.',
      '4. And on Meetup.',
      '5. And when it was made available I did the same with Quora, which has become the fact-filled platform for experts.',
      '6. I then went to every industry-relevant event I could find, afford and get to, and hustled like a maniac…',
      'If you’re someone who still believes social media is the devil, you’re in trouble, because it’s never a single tactic that will get you anywhere, it’s a combination of many intelligently coordinated pieces.',
      'Asking and answering questions is the easiest way to get people involved and invested in what you do, and while you could meet 15 people during a night out, you could meet 100 online. And perhaps yes, the contact is “shallower” but you can be a hell of lot more targeted.',
      'So I recommend starting online, understanding who’s important for you, pre-empting offline events by connecting with people via Twitter, and leveraging LinkedIn connections into meetings for coffee.',
      'If you combine a strong digital brand with meeting people in person, you’ll make yourself:',
      'Easy to find',
      'Easy to remember',
      'Good to know',
      'You want to be understood as an expert and an influencer in your field, and in a world where most industry communication is digital, you better be all over it!',
      'Just remember not to get discouraged if you don’t get 1000 Twitter followers instantly, because what’s important here is that quality wins over quantity every time. Stay focused, stay targeted and talk to every new connection like they’re your best friend.',
      'And vice versa, if you’re awkward and depend entirely on social media to drive your network, you’re doing it wrong. You have to get out, you have to meet people and confirm that you’re real and worth investing in. As Jon Norris explained:',
      '“Although it can be awkward attending networking events, it’s a great way to build contacts. Get out there, hand out business cards and make friends.”',
    ],
  },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id='blog' className={`${nav === 'blog' ? 'active' : ''}`}>
        <div className='container page-title text-center'>
          <h2 className='text-center'>
            latest <span>posts</span>
          </h2>
          <span className='title-head-subtitle'>
            tips, insights, and best practices about web design and developpment
          </span>
        </div>
        <div className='container'>
          <div className='row'>
            {data.map((data, i) => (
              <div className='col-12 col-sm-6' key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className='blog-figure'>
                    <a href='#' onClick={() => onClick(i)}>
                      <img className='img-fluid' src={data.img} alt='' />
                    </a>
                    <div className='post-date'>
                      {' '}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href='#' onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className='blog-excerpt'>
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a href='#' onClick={() => onClick(i)} className='btn readmore'>
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
