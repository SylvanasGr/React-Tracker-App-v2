import PropTypes from 'prop-types'
import Button from "./Button";
import {useLocation} from 'react-router-dom'

const Header = ({title,onAdd,showAddTask}) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title} </h1>
            {location.pathname === '/' && <Button color={showAddTask ? "Orange" : "Green"} text={showAddTask ? "Close" : "Add"}  onClick={onAdd}  />}
        </header>
    )   
}

//this give default value for proptypes
Header.defaultProps = {
    title: 'Task Tracker App'
}
//you can also define values like typescript to make your code more secure and structured
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header