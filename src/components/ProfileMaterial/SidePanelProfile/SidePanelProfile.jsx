import { Offcanvas } from "react-bootstrap";
import ShowInfo from "../ShowInfo/ShowInfo";
import { useContext, useState } from "react";
import pp from '../../../assets/media/pp.jpg'
import { UserContext } from "../../../RoutesHos";
import './SidePanelProfile.css'

function SidePanelProfile({keys , user}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return <div>
         <div onClick={handleShow} className='d-flex collappsedProf text-black d-block d-md-none'>
        <img src={pp} className='collappsedPP'></img>
        <h2 className='d-flex align-self-center'></h2>
        </div>
    
        
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
        
            {keys.map((key) => (
                <p key={key}>{key} : </p>
            ))}
        
        </Offcanvas.Body>
    </Offcanvas>

    </div>

       
}

export default SidePanelProfile;