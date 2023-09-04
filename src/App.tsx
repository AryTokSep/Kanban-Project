import { RecoilRoot } from 'recoil'
import SideMenu from './components/SideMenu'
import TaskSummary from './features/tasks/components/TaskSummary'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    
    path: '/',
    element: <div style={{ display: 'flex' }}>
      <SideMenu />
      <TaskSummary/>
    </div>,
    children: [
      {
        path: '/',
        element: ( <div style={{ display: 'flex' }}>
          <h1>Home</h1>
        </div>
        ),
      },
      {
        path: 'task-list',
        element: (
          <div style={{ display: 'flex' }}>
            <h1>Task List</h1>
          </div>
        ),
      },
      {
        path: 'task-progress',
        element: (
          <div style={{ display: 'flex' }}>
            <h1>Task Progress</h1>
          </div>
        ),
      },
    ],
  },
])

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
