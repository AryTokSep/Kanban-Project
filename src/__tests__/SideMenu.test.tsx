import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import '@testing-library/jest-dom'

describe('SideMenu', () => {
  test('Home menu is shown', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <SideMenu />
        </BrowserRouter>
      )
    })
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  test('Task List Menu is shown', () => {
    expect(screen.getByText('Task List')).toBeInTheDocument()
  })
  
  test('Task Progress menu is shown', () => {
    expect(screen.getByText('Task Progress')).toBeInTheDocument()
  })
})

