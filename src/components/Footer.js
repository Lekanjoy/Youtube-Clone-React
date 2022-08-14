import Home from '../assets/home_icon.svg'
import Short from '../assets/short.png'
import Subscription from '../assets/subscribe.png'
import Library from '../assets/library.png'

function Footer() {

  return (
    <footer>
      <div className="footer-item"><img src={Home} alt="" /><p>Home</p></div>
      <div className="footer-item"><img src={Short} alt="" /><p>Shorts</p></div>
      <div className='footer-create'>+</div>
      <div className="footer-item"><img src={Subscription} alt="" /><p>Subscriptions</p></div>
      <div className="footer-item"><img src={Library} alt="" /><p>Library</p></div>
    </footer>
  );
}

export default Footer