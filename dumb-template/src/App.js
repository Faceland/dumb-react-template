import './App.scss';
import HeaderBar from "./components/HeaderBar/HeaderBar";
import MainBanner from "./components/MainBanner/MainBanner";
import Footer from "./components/Footer/Footer";
import { Row, Col } from 'react-flexbox-grid';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <MainBanner/>
        <Row>
            <Col xs={12} sm={3} md={2} lg={1} />
            <Col xs={6} sm={6} md={8} lg={10} />
            <Col xs={6} sm={3} md={2} lg={1} />
        </Row>
        <Footer/>
    </div>
  );
}

export default App;
