import {Link} from 'react-router-dom'

export function Menu() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">inicio</Link>
                </li>
                <li>
                <Link to="/sobre">sobre</Link>
                </li>
                <li>
                <Link to="/contato">contato</Link>
                </li>
            </ul>
        </nav>
    )
}