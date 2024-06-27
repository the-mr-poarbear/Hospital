import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import '../ProfileMaterial/Profile.css'
import pp from '../../assets/media/pp.jpg'
import { useContext, useState } from 'react';
import visit from '../../assets/media/visiticon2.png'
import history from '../../assets/media/historyicon.png'
import bag from '../../assets/media/bag.png'
import { UserContext } from '../../RoutesHos';
import ShowInfo from '../ProfileMaterial/ShowInfo/ShowInfo';
import SidePanelProfile from '../ProfileMaterial/SidePanelProfile/SidePanelProfile';
import OptionButton from '../ProfileMaterial/OptionButton/OptionButton';

function ProfileDoc(){
    const {user , setUser} = useContext(UserContext)
    
    return<div>
           
            <NavigationBar/>
            
            <div className="container profile fs-3 text-white" >

            <button onClick={()=>{setUser({firstname:'Dana',lastname:'Dianouf','Speciaity':'orthoped',Rating:9.5,Age:34,Degree:'Proffesor',MDID:3302934,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'})}}>temp</button>
            

           <SidePanelProfile keys={['Speciaity','Rating','Age','Degree','MDID']} user={user}/>
            
            <div className="row d-flex justify-content-center">
    
                <div className="col-md-4 info p-0 d-md-block d-none"style={{borderRadius: '10px 10px 0px 0px'}}>
                    <div style={{position:'relative'}}>
                        <img src={pp} className='profilePhoto'></img>
                        <h2 className='' style={{padding:"0 2.5vw" , position:'relative' , bottom:"50px"}}>{user.firstname} {user.lastname}</h2>
                    </div>
                    
                </div>
                <div className="col-md-7 d-flex  justify-content-between">
                    <OptionButton title='Visit' icon={visit} link='/visitsDoc'/>
                    <OptionButton title='History' icon={history} link='/historyDoc'/>
                    <OptionButton title='Take a Leave' icon={bag} link='/takeLeave'/>

                </div>
            </div>
            
            <div className="row d-flex justify-content-center">

                <ShowInfo keys={['Speciaity','Rating','Age','Degree','MDID']} user={user}/>

                <div className="col-md-7">
                    <div className='bioDoc p-4 '>
                        <p>bio</p>
                        <p className='text-wrap text-break w-100'>{user.bio}</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div> 
}

export default ProfileDoc;