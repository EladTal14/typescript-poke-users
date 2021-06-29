import Logo from '../../logo.svg'
import './header.scss'
import {useHistory} from "react-router-dom";

export const Header = () => {
    const history = useHistory()
    const handleHistory = (route: string) => {
        history.push(route)
    }
    return (
        <header>
            {/*<div className="logo">*/}
                {/*<img src={Logo} alt="logo" />*/}
            {/*</div>*/}
            <ul>
                <li onClick={() => handleHistory('/')}>Home</li>
                <li onClick={() => handleHistory('/material')}>material</li>
                <li onClick={() => handleHistory('/play')}>play</li>
                <li onClick={() => handleHistory('/computer')}>computer</li>
            </ul>
        </header>
    );
};

