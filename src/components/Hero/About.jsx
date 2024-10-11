
import { useNav } from '../../providers';
import { CoolText } from '../Custom-Text';

const About = () => {
  const { activeMenu } = useNav()
  const test = [
    'The face of Innovation',
    'Changing the ',
    'The face of Innovation',
    'Changing the ',
    'The face of Innovation',
    'Changing the ',
  ]
  
  return (
    <div className="w-full hero">
      <div className="">
        
      <CoolText className='text-3xl font-bold' currentView={activeMenu.value === 'about'} data={test} />
      </div>
    </div>
  )
}

export default About;
