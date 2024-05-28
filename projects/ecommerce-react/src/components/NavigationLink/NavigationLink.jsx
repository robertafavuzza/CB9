/* eslint-disable react/prop-types */
// props sta per properties

const NavigationLink = ({ handleClick, href, text }) => {
  return (
    <li onClick={handleClick} className="navigation--link">
      <a href={href}>{text}</a>
    </li>
  )
}

export default NavigationLink
