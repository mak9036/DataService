import { Link } from "react-router-dom"
import style from "./nav.module.css";

function Nav() {

    return(
        <>
            <nav>
                <menu className={style.nav}>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/about">Om os</Link></li>
                    <li><Link to="/news">Nyheder</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/random-facts">Tilfældige fakta</Link></li>
                    <li><Link to="/photos">Billeder</Link></li>
                    <li><Link to="/todo">At gøre</Link></li>                   
                </menu>
            </nav>
        </>
    )

}


export default Nav