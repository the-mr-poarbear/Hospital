import Popup from 'reactjs-popup';
import ShowInfo from '../ProfileMaterial/ShowInfo/ShowInfo.jsx';
import PopUpView from '../View/PopUpView.jsx';
import View from '../View/View.jsx';
import './ViewDoctors.css'
import React, { useState } from 'react';


const visits = [
    {firstname:'mmd',lastname:'mmdi','age':32,room:10,Age:34,at:'3:32'},
    {firstname:'mrbd',lastname:'mmdi','age':32,room:10,Age:34,at:'3:32'},
    {firstname:'brd',lastname:'mmdi','age':32,room:10,Age:34,at:'3:32'},
    {firstname:'msdv',lastname:'mmdi','age':32,room:10,Age:34,at:'3:32'},
    {firstname:'mdfb',lastname:'mmdi','age':32,room:10,Age:34,at:'3:32'},
    
]

export const popupPass = React.createContext();



function ViewVisitsDoc(){
   
    const [visit , setVisit] = useState({})

    function ShowVisit(visit){
           <VisitPageDoc /> 
    }
    

    return <div className='d-flex justify-content-center'>
        <View keys={['age','room','Age','at']} users={users} title='View Doctors' btn={{func:ShowVisit,title:'open'}} />
        <popupPass.Provider value={{ modal, setModal }}>
                <PopUpView user={user}/>
         </popupPass.Provider>
    </div>
}
export default ViewVisitsDoc;