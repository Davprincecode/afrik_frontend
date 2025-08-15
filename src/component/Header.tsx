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
import ComingSoon from './ComingSoon';


function Header() {
const [navOpen, setNavOpen] = useState(false);
const [signin, setSignin] = useState<boolean>(false);
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

  const [popAction, setPopAction] = useState<boolean>(false);
// onClick={() => setPopAction(!popAction)}
  return (
    <div>
      <ComingSoon popAction={popAction} setPopAction={setPopAction} />
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
                      <li><NavLink to="/our-services">services</NavLink></li>
                      <li onClick={() => setPopAction(!popAction)}><NavLink to="#">shop</NavLink></li>
                      <li onClick={() => setPopAction(!popAction)}><NavLink to="#">consultation</NavLink> </li>
                      <li onClick={() => setPopAction(!popAction)}><NavLink to="#">blog</NavLink> </li>
                      <li><NavLink to="/contact-us">contact us</NavLink> </li>
                  </ul>
              </div>

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
                                      <div className="flex-center gap-5 userIcon">
                                          <FaRegCircleUser />
                                          <IoIosArrowDown className='userArrow' />
                                      </div>
                              </div>
                          ) : (
                              <div className="signin" onClick={() => setPopAction(!popAction)}>
                                  <NavLink to='#' className='flex-center gap-5'>
                                      <p>sign in</p>
                                      <IoIosArrowDown className='signinIcon'/>
                                  </NavLink>
                              </div>
                          )
                        }

                      


                      
          <div className="bar" onClick={navFunction}>
                  <FaBars />
              </div>

                  </div>

          </div>
        {/* <!-- ===============Nav end================ --> */}
    </div>
  )
}

export default Header
