import PopUpView from '../View/PopUpView.jsx';
import View from '../View/View.jsx';
import './ViewNurse.css'
import React, { useContext, useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import Footer from '../Footer/Footer.jsx';
import { popupPass } from '../../RoutesHos.jsx';


const users = [
    {firstname:'Dana',lastname:'Dianouf','Speciaity':'nurse',Age:34,Degree:'Proffesor',MDID:3302934,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'},
    {firstname:'Dana',lastname:'Dianouf','Speciaity':'nurse',Age:34,Degree:'Proffesor',MDID:3302934,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'},
    {firstname:'Dana',lastname:'Dianouf','Speciaity':'nurse',Age:34,Degree:'Proffesor',MDID:3302934,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'},
    {firstname:'Dana',lastname:'Dianouf','Speciaity':'nurse',Age:34,Degree:'Proffesor',MDID:3302934,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'},
    {firstname:'Dana',lastname:'Dianouf','Speciaity':'nurse',Age:34,Degree:'Proffesor',MDID:3302934,bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. Cras ut semper quam, sit.'},

]




function ViewNurses(){
    const{modal , setModal} = useContext(popupPass)
    const [user , setUser] = useState({})
    function showPopUpInfo(user){
           setModal(!modal) 
           setUser(user)
    }
    

    return <div>
        <NavigationBar/>

        <div className='d-flex justify-content-center' style={{marginTop:'150px', marginBottom:'70px'}}>
            <View keys={['firstname','lastname','Speciaity','Degree'] } users={users} title='View Nurses' btn={{func:showPopUpInfo,title:'profile'}} search={false} />
            <PopUpView user={user}/>
     
        </div>
        <Footer/>
    </div>
}
export default ViewNurses;