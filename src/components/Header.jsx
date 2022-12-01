import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title }) => {
  return (
    <header className= 'header'>
        <h1>{title}</h1>
        <Button color='green' text='Hello' />
    </header>

  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

{/*Creating a variable for styling*/}
// const headingStyle = {
//   color:'red', 
//   backgroundColor:'blue',
// }

export default Header