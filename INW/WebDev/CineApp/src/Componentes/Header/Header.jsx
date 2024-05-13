import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex">
            <span>Olá, viajante</span>
            <h1>Bem vindo ao CineApp</h1>
            <Navbar/>
        </header>
     );
}

export default Header;