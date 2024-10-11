import Header from './Header'
import SideBar from './SideBar'
import { menuList } from '../../utils'
import { useNav } from '../../providers'

const Nav = () => {
  const { activeMenu } = useNav()
  
  return (
    <div className="nav absolute top-0 left-0 w-full z-[999]">
        <Header menu={menuList} />
        <SideBar activeNav={activeMenu} />
    </div>
  )
}

export default Nav
