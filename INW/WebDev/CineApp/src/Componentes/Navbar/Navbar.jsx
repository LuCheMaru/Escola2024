import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <nav>
            <ul className="flex">
                <li><Link Link to ="/">Home</Link></li>
                <li><Link Link to ="filmes">Filmes</Link></li>
                <li><Link Link to ="sobre">Sobre</Link></li>
                <li><Link Link to ="contato">Contato</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;