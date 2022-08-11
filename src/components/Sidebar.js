import Home from '../assets/home_icon.svg'
import Explore from '../assets/explore.png'
import Shorts from '../assets/shorts.png'
import Subscription from '../assets/subscribe.png'


function Sidebar() {
  return (
    <aside>
      <div className="primary-section">
        <div className="link"><img src={Home} alt="Home Icon" /> <span>Home</span></div>
        <div className="link"><img src={Explore} alt="Explore Icon" /> <span>Explore</span></div>
        <div className="link"><img src={Shorts} alt="Shorts Icon" /> <span>Shorts</span></div>
        <div className="link"><img src={Subscription} alt="Subscriptions Icon" /><span>Subscriptions</span></div>
        
      </div>

      <div className="secondary-section">
          <div className="link"><img src={Home} alt="Home Icon" /> <span>Home</span></div>
        <div className="link"><img src={Explore} alt="Explore Icon" /> <span>Explore</span></div>
        <div className="link"><img src={Shorts} alt="Shorts Icon" /> <span>Shorts</span></div>
        <div className="link"><img src={Subscription} alt="Subscriptions Icon" /><span>Subscriptions</span></div>
      </div>

      <div className="subscription-section">
          <div className="link"><img src={Home} alt="Home Icon" /> <span>Home</span></div>
        <div className="link"><img src={Explore} alt="Explore Icon" /> <span>Explore</span></div>
        <div className="link"><img src={Shorts} alt="Shorts Icon" /> <span>Shorts</span></div>
        <div className="link"><img src={Subscription} alt="Subscriptions Icon" /><span>Subscriptions</span></div>
      </div>
      
    </aside>
  );
}

export default Sidebar