import Menu from "../assets/menu.svg";
import Youtube from "../assets/youtube_player_video_icon.svg";
import Search from "../assets/search_icon.svg";
import Notification from "../assets/notification_icon.svg";
import Create from "../assets/add-video.png";
import Profile from "../assets/lekan.jpg";
import Voice from '../assets/2205213_mic_microphone_record_speak_icon.svg'
import Device from '../assets/broadcast.png'

function Header() {
  return (
    <header>
      <div className="left">
        <img className="menu" src={Menu} alt="Menu Icon" />
        <img src={Youtube} alt="Logo Youtube" />
        <h1>YouTube</h1>
      </div>

      <div className="mid">
        <input type="search" placeholder="Search" />

        <div className="search">
          <img src={Search} alt="Search Icon" />
        </div>

        <div className="voice">
          <img src={Voice} alt="Voice Search" />
        </div>
      </div>

      <div className="right">
        <img className="create" src={Create} alt="Create Video Icon" />
        <img className="broadcast" src={Device} alt="Connect to a DeviceIcon" />
        <div className="notif">
          <img src={Notification} alt="Notification Icon" />
          <p>1</p>
        </div>
        <img className="search" src={Search} alt="Search Icon" />
        <img className="profile" src={Profile} alt="Account Icon" />
      </div>
    </header>
  );
}

export default Header;
