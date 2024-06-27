import './OptionButton.css'
import { Link } from 'react-router-dom'

function OptionButton({title , link , icon , ratio="1/1" , iconSize="60%" , order="order-1" }){
    return <button style={{aspectRatio: ratio}} className='options d-flex  flex-column justify-content-center text-black align-items-center p-2'>
            <Link className='text-black' to={link}>
            <img style={{width: iconSize}} className='optionsicon' src={icon}></img>
            <h2>{title}</h2></Link>
        </button>

}

export default OptionButton;