import Header from './components/Header'
import Categories from './components/Categories';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Categories />
      </div>
    </div>
  );
}

export default App;
