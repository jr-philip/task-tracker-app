import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>  
      <Button color='green' text='Hello'/>
          <Button color='red' text='Hello' />
          <Button color='brown' text='Hello' />
    </header>
  )
}

Header.defaultProps ={
    title:'Task Tracker'
}

Header.prototype ={
    title :PropTypes.string.isRequired,
}

/*stylying techniques in js.example.<h1 style={headingStyle}>{title}</h1>  
const headingStyle = {
    color:"green",
    backgroundColor:"black"
}*/

export default Header
