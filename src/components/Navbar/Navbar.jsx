import './Navbar.css'
import logo from '../../assets/image.png'
// import { useContext } from 'react'
// import { CoinContext } from '../../context/CoinContext'
// import { Link } from 'react-router-dom'

const Navbar = () => {

  // const {setCurrency} = useContext(CoinContext);

  // const currencyHandler = (event) => {
  //   switch (event.target.value) {
  //     case "usd" : {
  //       setCurrency({name : 'usd', symbol : '$'});
  //       break;
  //     }
  //     case "eur" : {
  //       setCurrency({name : 'eur', symbol : '€'});
  //       break;
  //     }
  //     case "lkr" : {
  //       setCurrency({name : 'lkr', symbol : 'Rs.'});
  //       break;
  //     }
  //     default : {
  //       setCurrency({name : 'usd', symbol : '$'});
  //       break;
  //     }
  //   }
  // }


  return (
    <div className='navbar'>
      <div to={'/'}>
        <img src={logo} alt="" style={{width : 80}} className='logo'/>
      </div>
      <ul>
        <div to={'/'}><li>Home</li></div>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        {/* <select onChange={currencyHandler}> */}
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="lkr">LKR</option>
        </select>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar



