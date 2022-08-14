import Header from "./components/Header";
import Categories from "./components/Categories";
import Sidebar from "./components/Sidebar";
import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  let mappedVideo = data.map((video) => {
    return <VideoCard key={video.id} video={{ ...video }} />;
  });

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Categories />
        <div className="video-container">{mappedVideo}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
