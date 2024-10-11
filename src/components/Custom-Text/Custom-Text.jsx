import clsx from 'clsx'
import { useNav } from '../../providers'

const CustomText = ({ className, data, reverse = true, currentView, size = 'lg' }) => {
  const { navSwitch } = useNav()
  
  return (
    <div className={clsx('custom-text overflow-hidden', className)}>
      {data && data.map((item, idx) => (
        <div className={clsx("container w-fit overflow-hidden", 'custom-text-'+ size)} key={idx}>    
          <h1 className={clsx({'reverse' : navSwitch && reverse && currentView })} style={{ animationDelay: idx * 0.150 + 's'}}>{item}</h1>
        </div>
      ))}
    </div>
  )
}

export default CustomText
