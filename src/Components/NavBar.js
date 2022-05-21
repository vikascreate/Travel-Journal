import world from './Images/Fill 213.png'
export default function NavBar(){
    return (
        <nav className='navbar'>
            <img src={world} className='navbar-world'></img>
            <h3 className='navbar-title'>my travel journal.</h3>
        </nav>
    )
}