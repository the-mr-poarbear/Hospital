import './CardYCU.css'   

function CardYCU({icon , title}){
    return <div className="d-flex flex-column align-items-center justify-content-between col-3 bodyYCU">
        <img src={icon}></img>
        <h2 className='text-center'>{title}</h2>
    </div>
}

export default CardYCU