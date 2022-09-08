import '../styles/Tarjeta.scss'

const Tarjeta = ({ tar }) => {
    let fillColor = '';

    if(tar.status=='Alive'){
        fillColor = 'green';
    } else if(tar.status=='Dead'){
        fillColor = 'red';
    } else if(tar.status=='unknown'){
        fillColor = 'grey';
    }

    return (
        <div key={tar.id} className='tarjeta'>
            <img src={tar.image}></img>
            <div>
                <h2>{tar.name}</h2>
                <div className="status">
                    <svg clasName='circulo' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${fillColor}`} class="bi bi-circle-fill" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" />
                    </svg>
                    <span>{tar.status}</span>
                </div>                
            </div>
        </div>
    )
}

export default Tarjeta;