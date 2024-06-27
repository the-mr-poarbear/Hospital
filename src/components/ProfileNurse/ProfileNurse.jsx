import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import '../ProfileMaterial/Profile.css'
import pp from '../../assets/media/pp.jpg'
import { useContext, useState } from 'react';
import check from '../../assets/media/Check.png'
import history from '../../assets/media/historyicon.png'
import bag from '../../assets/media/bag.png'
import { UserContext } from '../../RoutesHos';
import ShowInfo from '../ProfileMaterial/ShowInfo/ShowInfo';
import SidePanelProfile from '../ProfileMaterial/SidePanelProfile/SidePanelProfile';
import OptionButton from '../ProfileMaterial/OptionButton/OptionButton';

function ProfileNurse(){
    const {user , setUser} = useContext(UserContext)
    
    return<div>
           
            <NavigationBar/>
            
            <div className="container profile fs-3 text-white" >

            <button onClick={()=>{setUser({firstname:'Dana',lastname:'Dianouf','Speciaity':'Nurse',Age:34,Degree:'Proffesor',MDID:3302934,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'})}}>temp</button>
            

           <SidePanelProfile keys={['Speciaity','Age','Degree','MDID']} user={user}/>
            
            <div className="row d-flex justify-content-center">
    
                <div className="col-md-4 info p-0 d-md-block d-none"style={{borderRadius: '10px 10px 0px 0px'}}>
                    <div style={{position:'relative'}}>
                        <img src={pp} className='profilePhoto'></img>
                        <h2 className='' style={{padding:"0 2.5vw" , position:'relative' , bottom:"50px"}}>{user.firstname} {user.lastname}</h2>
                    </div>
                    
                </div>
                <div className="col-md-7 d-flex  justify-content-between">
                    <OptionButton title='To Do' icon={check} link='/ToDoNurse'/>
                    <OptionButton title='History' icon={history} link='/historyNurse'/>
                    <OptionButton title='Take a Leave' icon={bag} link='/takeLeave'/>

                </div>
            </div>
            
            <div className="row d-flex justify-content-center">

                <ShowInfo keys={['Speciaity','Age','Degree','MDID']} user={user}/>

                <div className="col-md-7 ">
                    <div className='bioNurse p-4 '>
                        <p>bio</p>
                        <p className='text-wrap text-break w-100'>{user.bio}</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div> 
}

export default ProfileNurse;