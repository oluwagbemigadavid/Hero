import clsx from 'clsx';
import { useNav } from '../../providers';
import { CoolText } from '../Custom-Text';
import { useEffect, useState } from 'react';

const About = () => {
  const { activeMenu, navSwitch } = useNav();
  const currentView = activeMenu.value === 'about';
  const cardData = [
    { title: 'US', content: 'Lorem ipsum dolor sit amet sicing elit. Cupiditate, ab illo! Iusto eius temporibus nobis quos sint voluptas, quibusdam, fuga magnam voluptatibus repellat porro laudantium obcaecati, sit fugit minus illum.', id: 1 },
    { title: 'Our Products', content: 'Lorem ipsum dolor sit amet sicing elit. Cupiditate, ab illo! Iusto eius temporibus nobis quos sint voluptas, quibusdam, fuga magnam voluptatibus repellat porro laudantium obcaecati, sit fugit minus illum.', id: 2 },
    { title: 'Our Company', content: 'Lorem ipsum dolor sit amet sicing elit. Cupiditate, ab illo! Iusto eius temporibus nobis quos sint voluptas, quibusdam, fuga magnam voluptatibus repellat porro laudantium obcaecati, sit fugit minus illum.', id: 3 },
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
                      stroke-dasharray="500"  
                      stroke-dashoffset="500"
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
