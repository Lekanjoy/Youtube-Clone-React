

function VideoCard(props) {

  return (
    <div className="card">
      <div className="image">
        <img
          src={`./thumbnails/${props.video.thumbnail}`}
          alt={props.video.title}
        />
        <p className="duration">{props.video.duration}</p>
      </div>
      <div className="logo-title">
        <div>
          <img
            src={`./thumbnails/${props.video.acccountLogo}`}
            alt="Account Logo"
          />
        </div>
        <div className="details">
          <h3>{props.video.title}</h3>
          <div className="mob">
            <h4>
              {props.video.accountName} { props.video.verified && <span className="sub">✔</span>}<span className="bullet">&#8226;</span>
            </h4>
            <span className="views">{props.video.views}</span>
            <span className="postedAt"> &#8226; {props.video.postedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
