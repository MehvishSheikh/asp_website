//import logo from './logo.svg';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeadComponent from './components/HeadComponent';
import HomeBackComponents from './components/HomeBackComponents';
import HomeMidComponent from './components/HomeMidComponent';

function App() {
  return (
    <>
      <HeadComponent />
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <HomeBackComponents />
      {/* End Hero */}
      <HomeMidComponent />
      {/* End #main */}
      {/* ======= Footer ======= */}
      <FooterComponent />
      {/* End Footer */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
}

export default App;
