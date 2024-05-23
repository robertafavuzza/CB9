/* eslint-disable react/prop-types */
// props sta per properties

const NavigationLink = ({ href, text }) => {
  return (
    <li className="navigation--link">
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavigationLink;
