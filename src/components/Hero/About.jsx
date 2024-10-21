
import clsx from 'clsx';
import { useNav } from '../../providers';
import { CoolText } from '../Custom-Text';
import { useEffect, useState } from 'react';

const About = () => {
  const { activeMenu, navSwitch } = useNav()
  const currentView = activeMenu.value === 'about'
  const test = [
    'The Basics of',
    'Central Bank Digital',
    'Currency',
  ]
  const [cardAnimation, setCardAnimation] = useState(false);
  const [card1Animation, setCard1Animation] = useState(false);
  const [card2Animation, setCard2Animation] = useState(false);
  
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCardAnimation(true);
    }, 750);
  
    const timer2 = setTimeout(() => {
      setCard1Animation(true);
    }, 1500);
  
    const timer3 = setTimeout(() => {
      setCard2Animation(true);
    }, 2000);
    console.log(card1Animation, card2Animation, cardAnimation)
  
    // Cleanup function to clear timeouts on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  
  
  
  return (
    <div className="w-full about h-full">
      <div className="pl-[10%] flex flex-col h-full">
        <CoolText className='text-3xl font-bold mt-12' currentView={currentView} data={test} />
         <div className="flex items-start mr-[40px] justify-between mt-auto h-[500px]">

          {cardAnimation && <div className="w-[30%] h-[100%] overflow-hidden relative">
            <div className={clsx("absolute top-0  left-0 w-full h-full transform transition duration-700 scale-100 opacity-100", {'scale-90 !opacity-0': navSwitch})}> 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                width="100%" 
                height="100%"
              >
                <path 
                  d="M 0 0 L 55 0  L 100 20 L 100 100" 
                  stroke="white" 
                  stroke-width="1" 
                  stroke-linejoin="round" 
                  fill="none" 
                  strokeDashArray="500"  
                  strokeDashoffset="500"
                >
                  <animate 
                    attributeName="strokeDasharray"
                    from="500" 
                    to="0" 
                    dur="2s" 
                    begin="0.4s"
                    fill="freeze" 
                  />
                </path>
              </svg>
            </div>

            <div className="flex py-[40px]  h-full gap-[120px] flex-col  relative z-10 card">
              <CoolText size='lg' className='text-3xl font-semibold ml-[40px]' currentView={currentView} data={['US']} />
              <div className={clsx("text w-full pr-[40px] flex gap-4 card transition duration-[750ms] translate-x-0", {'translate-x-[-105%]': navSwitch})}>
                <span className="">01.</span>
                <p>Lorem ipsum dolor sit amet sicing elit. Cupiditate, ab illo! Iusto eius temporibus nobis quos sint voluptas, quibusdam, fuga magnam voluptatibus repellat porro laudantium obcaecati, sit fugit minus illum.</p>
              </div>
            </div>
          </div>}
          
          {card1Animation && <div className="w-[30%] h-[100%] overflow-hidden relative">
            <div className={clsx("absolute top-0  left-0 w-full h-full transform transition duration-700 scale-100 opacity-100", {'scale-90 !opacity-0': navSwitch})}> 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                width="100%" 
                height="100%"
              >
                <path 
                  d="M 0 0 L 55 0  L 100 20 L 100 100" 
                  stroke="white" 
                  stroke-width="1" 
                  stroke-linejoin="round" 
                  fill="none" 
                  strokeDashArray="500"  
                  strokeDasharray="500"
                >
                  <animate 
                    attributeName="strokeDasharray"
                    from="500" 
                    to="0" 
                    dur="2s" 
                    begin="0.4s"
                    fill="freeze" 
                  />
                </path>
              </svg>
            </div>

            <div className="flex py-[40px]  h-full gap-[120px] flex-col  relative z-10 card">
              <CoolText size='lg' className='text-3xl font-semibold ml-[40px]' currentView={currentView} data={['Our Products']} />
              <div className={clsx("text w-full pr-[40px] flex gap-4 card transition duration-[750ms] translate-x-0", {'translate-x-[-105%]': navSwitch})}>
                <span className="">02.</span>
                <p>Lorem ipsum dolor sit amet sicing elit. Cupiditate, ab illo! Iusto eius temporibus nobis quos sint voluptas, quibusdam, fuga magnam voluptatibus repellat porro laudantium obcaecati, sit fugit minus illum.</p>
              </div>
            </div>
          </div>}

          {card2Animation && <div className="w-[30%] h-[100%] overflow-hidden relative">
            <div className={clsx("absolute top-0  left-0 w-full h-full transform transition duration-700 scale-100 opacity-100", {'scale-90 !opacity-0': navSwitch})}> 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                width="100%" 
                height="100%"
              >
                <path 
                  d="M 0 0 L 55 0  L 100 20 L 100 100" 
                  stroke="white" 
                  stroke-width="1" 
                  stroke-linejoin="round" 
                  fill="none" 
                  strokeDashArray="500"  
                  strokeDasharray="500"
                >
                  <animate 
                    attributeName="strokeDasharray"
                    from="500" 
                    to="0" 
                    dur="2s" 
                    begin="0.4s"
                    fill="freeze" 
                  />
                </path>
              </svg>
            </div>

            <div className="flex py-[40px]  h-full gap-[120px] flex-col  relative z-10 card">
              <CoolText size='lg' className='text-3xl font-semibold ml-[40px]' currentView={currentView} data={['Our Company']} />
              <div className={clsx("text w-full pr-[40px] flex gap-4 card transition duration-[750ms] translate-x-0", {'translate-x-[-105%]': navSwitch})}>
                <span className="">03.</span>
                <p>Lorem ipsum dolor sit amet sicing elit. Cupiditate, ab illo! Iusto eius temporibus nobis quos sint voluptas, quibusdam, fuga magnam voluptatibus repellat porro laudantium obcaecati, sit fugit minus illum.</p>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default About;
