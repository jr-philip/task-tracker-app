import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>  
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
