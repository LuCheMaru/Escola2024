import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-primary-A text-white p-4">
            <span>Olá, </span>
            <h1>Bem vindo ao CineApp</h1>
            <Navbar/>
        </header>
     );
}

export default Header;