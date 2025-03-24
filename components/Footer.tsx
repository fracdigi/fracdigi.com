import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faChartLine, 
  faHome, 
  faInfoCircle, 
  faList, 
  faHeadset,
  faCopyright
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="mb-4">
              <h4 className="fw-bold mb-0">Fracdigi</h4>
              <p className="small">診所智慧營運行銷方案</p>
            </div>
            <p className="mb-0 small">專為診所設計的一站式數位行銷方案，<br />從品牌曝光到名單轉換，助您業績倍增</p>
          </Col>
          
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-3 fw-bold">聯繫我們</h5>
            <p className="mb-2 small">電話：0922-885-566</p>
            <p className="mb-2 small">信箱：david@fracdigi.com</p>
            <p className="mb-0 small">地址：台北市大安區敦化南路一段233巷20號</p>
          </Col>
          
          <Col md={3}>
            <h5 className="mb-3 fw-bold">快速連結</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link href="/" className="text-white text-decoration-none">首頁</Link></li>
              <li className="mb-2"><Link href="/about" className="text-white text-decoration-none">關於我們</Link></li>
              <li className="mb-2"><Link href="/services" className="text-white text-decoration-none">服務方案</Link></li>
              <li className="mb-2"><Link href="/privacy" className="text-white text-decoration-none">隱私政策</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none">立即諮詢</Link></li>
            </ul>
          </Col>
        </Row>
        
        <div className="border-top border-white border-opacity-25 mt-4 pt-4 text-center">
          <p className="small mb-0">&copy; {new Date().getFullYear()} Fracdigi 診所智慧營運行銷. 保留所有權利。</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
