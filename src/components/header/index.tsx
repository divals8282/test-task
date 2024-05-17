import Logo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.icon.svg'
import { Container } from './styles';
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
export const Header = () => {
    
    return (
        <Container>
            
            <div className='logo'>
                <div className='desktop-space'></div>
                <div className='mobile-menu-button'><GiHamburgerMenu /></div>
                <img src={Logo} alt="" />
                <img className='search' src={SearchIcon} alt="" />
            </div>
            <ul className='navigation'>
                <li>Demos <FaChevronDown /></li>
                <li>Post <FaChevronDown /></li>
                <li>Features <FaChevronDown /></li>
                <li>Categories <FaChevronDown /></li>
                <li>Shop <FaChevronDown /></li>
                <li>Buy Now <FaChevronDown /></li>
            </ul>
        </Container>
    )
}