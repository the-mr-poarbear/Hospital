import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import '../ProfileMaterial/Profile.css'
import pp from '../../assets/media/pp.jpg'
import { useContext, useState } from 'react';
import Doctor from '../../assets/media/Doctor2.png'
import Files from '../../assets/media/folder.png'
import nurse from '../../assets/media/nurse.png'
import Recep from '../../assets/media/receptionist.png'
import visits from '../../assets/media/visiticon2.png'
import requests from '../../assets/media/requests2.png'
import hospital from '../../assets/media/hospitalicon.png'
import { UserContext } from '../../RoutesHos';
import SidePanelProfile from '../ProfileMaterial/SidePanelProfile/SidePanelProfile';
import OptionButton from '../ProfileMaterial/OptionButton/OptionButton';

function ProfileAdmin(){
    const {user , setUser} = useContext(UserContext)
    
    return<div>
           
            <NavigationBar/>
            
            <div className="container profile fs-3 text-white" >

            <button onClick={()=>{setUser({firstname:'Dana',lastname:'Dianouf','Speciaity':'Admin',Age:34,Degree:'Proffesor',bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'})}}>temp</button>
            

           <SidePanelProfile keys={['Speciaity']}/>
            
            <div className="row d-flex justify-content-center">
    
                <div className="col-md-4 info p-0 d-md-block d-none mb-5"style={{borderRadius: '10px'}}>
                    <div style={{position:'relative'}}>
                        <img src={pp} className='profilePhoto'></img>
                        <h2 className='' style={{padding:"0 2.5vw" , position:'relative' , bottom:"50px"}}>{user.firstname} {user.lastname}</h2>
                    </div>
                    
                </div>
                <div className="col-md-7 d-flex  justify-content-between">
                    <OptionButton title='View Doctors' icon={Doctor} link='/viewDocs'/>
                    <OptionButton title='View Files' icon={Files} link='/files'/>
                    <OptionButton title='View Nurses' icon={nurse} link='/viewNurses'/>

                </div>
            </div>
            
            <div className="row d-flex justify-content-around"> 
                <div className='order-2 order-md-1 d-flex col-4'>
                <OptionButton className="" ratio='2/1' iconSize='40%' title='Take a Leave' icon={hospital} link='/takeLeave'/>
                </div>                
                

                <div className="col-md-7 order-1 order-md-2">
                    <div className=' d-flex justify-content-between '>
                        <OptionButton className="col-4" title='View Receptionists' icon={Recep} link='/viewRecep'/>
                        <OptionButton className="col-4" title='View Visits' icon={visits} link='/viewVisitsAdmin'/>
                        <OptionButton className="col-4" title='Requests' icon={requests}  link='/takeLeave'/>
                    </div>
                    
                </div>
            </div>
        </div>

        <Footer/>
    </div> 
}

export default ProfileAdmin;