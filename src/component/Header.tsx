import { useEffect, useState } from 'react'
import logo from "../assets/images/logo.png";
import scrollLogo from "../assets/images/logo-scroll.png";
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { BsCart2 } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';


function Header() {
const [navOpen, setNavOpen] = useState(false);
const [signin, setSignin] = useState<boolean>(true);
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When scroll is greater than 50px, add the scrolled class
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
const navFunction = () =>{
    setNavOpen(!navOpen)
}
  return (
    <div>
              {/* <!-- ========nav section============== --> */}
            <div className={navOpen ? "sideNavOverall sideNavOverallChange":"sideNavOverall"}  onClick={navFunction}>
            </div>

          <div className={`navcontainer ${isScrolled ? 'scrolled' : ''}`} >
              <NavLink to="/">
              <div className="logocontainer logo">
                  <img src={logo} alt="" />
              </div>
              <div className="logocontainer scrollLogo">
                  <img src={scrollLogo} alt="" />
              </div>
              </NavLink>
              <div className="itemscontainer flex-center">
                  <ul className={navOpen ? "openNavBar" : "closeNavBar"}>
                      <li> <NavLink to="/"> Home </NavLink> </li>
                      <li><NavLink to="/about-us">about us</NavLink></li>
                      <li><NavLink to="#">shop</NavLink></li>
                      <li><NavLink to="#">portofolio</NavLink> </li>
                      <li><NavLink to="#">consultation</NavLink> </li>
                      <li><NavLink to="#">blog</NavLink> </li>
                      <li><NavLink to="/contact-us">contact us</NavLink> </li>
                  </ul>

                  <div className="userControl flex-center">
                        
                        {
                          signin ? (
                              <div className="userDetails flex-center gap-20">
                                      <div className="cart">
                                        <FiShoppingCart />
                                        <div className="cartCount">
                                          20
                                        </div>
                                      </div>
                                      <div className="userIcon">
                                          <FaRegCircleUser />
                                      </div>
                              </div>
                          ) : (
                              <div className="signin">
                                  <NavLink to='#' className='flex-center gap-5'>
                                      <p>sign in</p>
                                      <IoIosArrowDown />
                                  </NavLink>
                              </div>
                          )
                        }

                      


                      
          <div className="bar" onClick={navFunction}>
                  <FaBars />
              </div>

                  </div>
              </div>

              

          </div>
        {/* <!-- ===============Nav end================ --> */}
    </div>
  )
}

export default Header
