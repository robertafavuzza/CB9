/* eslint-disable react/prop-types */

const NavigationItem = ({
  text,
  link,
  handleClick,
  isActive = false,
  className = 'navigation-item',
}) => {
  return (
    <li onClick={handleClick} className={className}>
      <a href={link}>{isActive ? <strong>{text}</strong> : text}</a>
    </li>
  )
}

export default NavigationItem
