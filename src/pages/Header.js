import { Outlet, Link} from 'react-router-dom';


const Header = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link>
            <h2>RICK AND MORTY API</h2>
            <section>
                <Outlet/>
            </section>   
        </div>        
    )
}

export default Header;