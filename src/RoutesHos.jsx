import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import LoginPage from './components/LoginPage/LoginPage.jsx';
import ProfileDoc from './components/ProfileDoc/ProfieDoc.jsx';
import ProfileNurse from './components/ProfileNurse/ProfileNurse.jsx';
import ProfileRecep from './components/ProfileRecep/ProfileRecep.jsx';
import ProfileAdmin from './components/ProfileAdmin/ProfileAdmin.jsx';
import ViewDoctors from './components/ViewDoctors/ViewDoctors.jsx';
import ViewNurses from './components/ViewNurses/ViewNurse.jsx';
import ViewRecep from './components/ViewReceptionists/ViewRecep.jsx';


export const UserContext = React.createContext();
export const popupPass = React.createContext();

function RoutesHos() {
  const[modal , setModal] = useState(false)
  const [user , setUser] = useState({})

  return (
    <UserContext.Provider value={{user , setUser}}>
    <popupPass.Provider value={{ modal, setModal }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/LoginDoc" element={<LoginPage job="doctor" LoginTitle="Doctors Login"/>} />
          <Route path="/LoginNurse" element={<LoginPage job="nurse" LoginTitle="Nurses Login"/>} />
          <Route path="/LoginRecep" element={<LoginPage job="receptionist" LoginTitle="Receptionists Login"/>} />
          <Route path="/LoginAdmin" element={<LoginPage job="admin" LoginTitle="Admins Login"/>} />
          <Route path="/ProfileDoc" element={<ProfileDoc/>} />
          <Route path="/ProfileNurse" element={<ProfileNurse/>} />
          <Route path="/ProfileRecep" element={<ProfileRecep/>} />
          <Route path="/ProfileAdmin" element={<ProfileAdmin/>} />
          <Route path="/viewDocs" element={<ViewDoctors/>} />
          <Route path="/viewNurses" element={<ViewNurses/>} />
          <Route path="/viewRecep" element={<ViewRecep/>} />
         

        </Routes>
        
      </Router>
    </popupPass.Provider>
    </UserContext.Provider>
  );
}

export default RoutesHos;
