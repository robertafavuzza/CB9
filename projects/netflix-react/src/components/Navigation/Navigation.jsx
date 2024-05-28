import { useState } from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'

const Navigation = ({ items }) => {
  const [activeItem, setActiveItem] = useState(-1)

  return (
    <ul className="navigation">
      {items.map((item) => (
        <NavigationItem
          key={item.id}
          text={item.text}
          link={item.href}
          isActive={item.id === activeItem}
          handleClick={() => setActiveItem(item.id)}
        />
      ))}
    </ul>
  )
}

export default Navigation
