import { useWindowScroll } from '@uidotdev/usehooks';
import Logo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search.icon.svg'
import { Container } from './styles';
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';
export const Header = () => {
    const [{ y }] = useWindowScroll();
    const [scrollY, setScrollY] = useState(false);
    useEffect(() => {
        if (y && y > 200) {
            setScrollY(true)
        } else {
            setScrollY(false);
        }
    }, [y])

    return (
        <Container scrollY={scrollY}>
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