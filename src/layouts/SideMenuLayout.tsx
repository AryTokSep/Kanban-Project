import { Outlet } from 'react-router-dom'
import SideMenu from '../components/SideMenu'

const SideMenuLayout = () => {
  return (
    <div>
      <SideMenu />
      <Outlet />
    </div>
  )
}

export default SideMenuLayout