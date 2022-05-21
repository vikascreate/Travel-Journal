import path from './Images/Path.png'
export default function Card(props){
    console.log(props)
    return(
        <div>
        <card className="card">
            <img src={props.content} className="card-img"></img>
            <div className="card-right">
                <div className='card-tophalf'>
                    <img src={path} className='card-tophalf-path'></img>
                    <h1 className='card-tophalf-country'>{props.location}</h1>
                    <a className='card-tophalf-country-link' href={props.map}>View on Google Maps</a>
                </div>
                <h1 className='card-tophalf-location'>{props.name}</h1>
                <h4 className='card-tophalf-date'>{props.date}</h4>
                <p className='card-content'>{props.desc}
                </p>
            </div>
        </card>
        <hr className='hr'></hr>
        </div>
    )
}