import clsx from 'clsx';
import { useNav } from '../../providers';
import { CoolText } from '../Custom-Text';
import { useEffect, useState } from 'react';

const About = () => {
  const { activeMenu, navSwitch } = useNav();
  const currentView = activeMenu.value === 'about';
  const cardData = [
    { title: 'US', content: 'NEXA was founded with a singular vision: to empower users with safe and seamless access to digital financial tools. Our team of dedicated professionals combines expertise in finance, technology, and design to deliver cutting-edge solutions that bridge the gap between traditional and digital finance.', id: 1 },
    { title: 'Our Products', content: 'At NEXA, our product suite is designed to simplify the complexities of digital currency transactions. From mobile wallets to enterprise-grade digital currency solutions, each product is crafted with precision to meet the needs of both consumers and businesses, ensuring security, stability, and ease of use.', id: 2 },
    { title: 'Our Company', content: 'NEXA operates with a commitment to transparency, security, and innovation. Our corporate culture emphasizes integrity, collaboration, and a relentless pursuit of excellence. We believe that through the responsible development of CBDC, we can create a more inclusive and resilient financial future for everyone.', id: 3 },
  ];

  const [cardAnimations, setCardAnimations] = useState([false, false, false]);

  useEffect(() => {
    cardData.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCardAnimations(prev => {
          const newAnimations = [...prev];
          newAnimations[index] = true;
          return newAnimations;
        });
      }, 750 + index * 750); // Adjust timing based on index

      // Cleanup function to clear timeout on unmount
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="w-full about h-full">
      <div className="pl-[10%] flex flex-col h-full">
        <CoolText className='text-3xl font-bold mt-12' currentView={currentView} data={['The Basics of', 'Central Bank Digital', 'Currency']} />
        <div className="flex items-start mr-[40px] justify-start gap-[3.33%] mt-auto h-[500px]">

          {cardAnimations.map((isAnimated, index) => (
            isAnimated && (
              <div key={index} className="w-[30%] h-[100%] overflow-hidden relative">
                <div className={clsx("absolute top-0 left-0 w-full h-full transform transition duration-700 scale-100 opacity-100", {'scale-90 !opacity-0': navSwitch})}> 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    width="100%" 
                    height="100%"
                  >
                    <path 
                      d="M 0 0 L 65 0 L 100 20 L 100 100" 
                      stroke="white" 
                      strokeWidth="1" 
                      strokeLinejoin="round" 
                      fill="none" 
                      strokeDasharray="500"  
                      strokeDashoffset="500" 
                    >
                      <animate 
                        attributeName="stroke-dashoffset"
                        from="500" 
                        to="0" 
                        dur="2s" 
                        begin={`${0.4 }s`} // Set delay based on index
                        fill="freeze" 
                      />
                    </path>
                  </svg>
                </div>

                <div className="flex py-[40px] h-full gap-[120px] flex-col relative z-10 card">
                  <CoolText size='lg' className='text-3xl font-normal ml-[40px]' currentView={currentView} data={[cardData[index].title]} />
                  <div className={clsx("text w-full pr-[40px] flex gap-4 card transition duration-[750ms] translate-x-0", {'translate-x-[-105%]': navSwitch})}>
                    <span>{String(index + 1).padStart(2, '0')}.</span>
                    <p>{cardData[index].content}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default About;
