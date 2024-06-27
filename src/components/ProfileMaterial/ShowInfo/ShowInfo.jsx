import { useContext } from 'react';
import { UserContext } from '../../../RoutesHos';
import './ShowInfo.css'

function ShowInfo({ keys, user }) {
  

    return (
        <div className="col-md-4 info pt-4 infoRows d-md-block d-none">
            {keys.map((key) => (
                <p key={key}>{key} : {user[key]}</p>
            ))}
            <button className='w-100 py-0 mb-4'>Edit</button>
        </div>
    );
}
export default ShowInfo;