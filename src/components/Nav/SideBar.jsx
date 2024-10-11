import { CoolText } from '../Custom-Text'

const SideBar = ({activeNav}) => {
  //WIP: set up fade away closing transition
  return (
    <div className=' sidebar my-[80px]'>
      <div className="px-[40px]" key={activeNav.name} >
        <CoolText className='text-3xl font-bold max-w-[150px]' data={[activeNav.name]} />
      </div>
    </div>
  )
}

export default SideBar
