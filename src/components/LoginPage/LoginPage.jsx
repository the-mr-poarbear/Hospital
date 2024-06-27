import Login from '../Login/Login';
import './LoginPage.css'
import wave from '../../assets/media/waveHome.svg';

function LoginPage({LoginTitle , job}){

    return <div className='ContainerLog'>
        <div className='w-100 d-flex justify-content-center LoginPage'>
        <Login LoginTitle={LoginTitle} job={job}></Login>
        
    </div>
    </div>
    
}

export default LoginPage;