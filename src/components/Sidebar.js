import Home from '../assets/home_icon.svg'
import Explore from '../assets/explore.png'
import Shorts from '../assets/short.png'
import Subscription from '../assets/subscribe.png'
import Library from "../assets/library.png";
import History from "../assets/history.png";
import Video  from "../assets/play-button.png";
import Watch from "../assets/time.png";
import Liked from "../assets/like.png";
import pl from '../assets/pl.jpg'
import Graham from '../assets/Graham.jpg'
import chelsea from '../assets/chelsea.jpg'
import sabinus from '../assets/sabinus.jpg'
import woli from "../assets/woli-logo.jpg";



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
          <div className="link"><img src={Library} alt="Library Icon" /> <span>Library</span></div>
        <div className="link"><img src={History} alt="History Icon" /> <span>History</span></div>
        <div className="link"><img src={Video} alt="Your Video Icon" /> <span>Your videos</span></div>
        <div className="link"><img src={Watch} alt="Watch Later Icon" /><span>Watch later</span></div>
          <div className="link"><img src={Liked} alt="Liked Videos Icon" /> <span>Liked videos</span></div>

      </div>

      <div className="subscription-section">
        <p>SUBSCRIPTIONS</p>
        <div className="link"><img src={pl} alt="Premier League Logo" /> <span>Premier League</span></div>
        <div className="link"><img src={Graham} alt="Graham Norton Logo" /> <span>The Graham Nort..</span></div>
        <div className="link"><img src={chelsea} alt="Chelsea FC Logo" /> <span>Chelsea FC</span></div>
        <div className="link"><img src={sabinus} alt="Sabinus Logo" /> <span>Sabinus Comedy</span></div>
        <div className="link"><img src={woli} alt="Woli Agba" /><span>AyoAjewole Woliagba</span></div>
      </div>
      
    </aside>
  );
}

export default Sidebar