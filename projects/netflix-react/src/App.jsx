import './App.css'
import Navigation from './components/Navigation/Navigation'

const items = [
  {
    id: 0,
    text: 'Home',
    href: '/#',
  },
  {
    id: 1,
    text: 'TV Shows',
    href: '/#',
  },
  {
    id: 2,
    text: 'Movies',
    href: '/#',
  },
  {
    id: 3,
    text: 'New & Popular',
    href: '/#',
  },
]

function App() {
  return (
    <>
      <Navigation items={items} />
    </>
  )
}

export default App
