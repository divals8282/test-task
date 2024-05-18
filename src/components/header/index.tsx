import { useWindowScroll } from '@uidotdev/usehooks';
import Logo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.icon.svg'
import { Container } from './styles';
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';
import { ComponentT } from './types';

export const Header: ComponentT = ({ onSearch }) => {
    const [{ y }] = useWindowScroll();
    const [scrollY, setScrollY] = useState(false);
    const [activateSearch, setActivateSearch] = useState(false);
    useEffect(() => {
        if (y && y > 200) {
            setScrollY(true)
        } else {
            setScrollY(false);
        }
    }, [y])

    return (
        <Container scroll={scrollY}>
            <div className='logo'>
                <div className='desktop-space'></div>
                <div className='mobile-menu-button'><GiHamburgerMenu /></div>
                <img src={Logo} alt="" />
                {activateSearch ? <input onChange={(e) => onSearch(e.target.value)} className='search-bar' /> : <img onClick={() => setActivateSearch(true)} className='search' src={SearchIcon} alt="" />}
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