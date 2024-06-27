import { useContext, useEffect, useState } from 'react';
import SearchableDropdown from '../SearchableDropDown/SeachableDropdown';
import './View.css'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../Hooks/useWindowDimensions';




function View({keys , title , users , btn , search=1}){
    const [index , setIndex] = useState(5)
    let keysSlized = keys.slice(0 , index)

    const { height, width } = useWindowDimensions();
    const [value , setValue]=useState('Spechailty')
    

    return <div className='widthAdjust p-4 viewBody d-flex flex-column align-items-center'>
        <div className='d-flex w-100 justify-content-between'>

            <h2 className='mb-5 text-white'>{title}</h2>
            
            {search && (<SearchableDropdown
                options={[{name:'eye',id:'1'},{name:'orthoped' , id:'2'} ]}
                label="name"
                id="id"
                selectedVal={value}
                handleChange={(val) => setValue(val)}
            />)}

        </div>

        {width <= 600 && index==5 ? setIndex(4) : null}
        {width > 600 && index==4 ? setIndex(5) : null}
       
    
        <div className='containerRows'>
            {console.log(keysSlized)}
            {users.map((user)=>{
                return(
                <div className=' row justify-content-center viewRow mb-3'>

                            <div className="col-12 col-md-10 d-flex">
                            {keysSlized.map((key) => (
                                <div key={key} className='col fontSizeView'>
                                    <p  className='w-100  ' >{key}</p>
                                    <p  className='w-100 ' >{user[key]}</p>
                                </div>
                               
     
                            ))}
                            </div>
                            
                            <Link className='col-12 col-md-2' to={btn.link}><button className=' ViewButton' onClick={()=>btn.func(user)}>{btn.title}</button></Link>
                </div>  
                )
                        
            })}        
        </div>
        
    </div>
}

export default View;