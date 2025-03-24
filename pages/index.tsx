import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faUserFriends, 
  faLaptopCode, 
  faArrowRight, 
  faUsers, 
  faChartPie, 
  faBullhorn,
  faMoneyBillWave,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="診所智慧營運行銷方案" 
        description="專為診所設計的一站式數位行銷方案，從品牌曝光到名單轉換，助您業績倍增！" 
      />

      <main>
        {/* Hero Section */}
        <div className="hero-section py-5">
          <Container className="py-5 hero-content">
            <Row className="align-items-center min-vh-75">
              <Col lg={8} className="mx-auto text-center py-5">
                <h1 className="display-4 fw-bold mb-4">讓診所行銷更智慧，精準獲客創造高收益！</h1>
                <p className="lead mb-5">專為診所設計的一站式數位行銷方案，從品牌曝光到名單轉換，助您業績倍增！</p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 align-items-center">
                  <Link href="/contact" passHref legacyBehavior>
                    <Button variant="light" size="lg" className="px-4 py-2 fw-bold mb-3 mb-sm-0 w-100 w-sm-auto">立即諮詢 <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></Button>
                  </Link>
                  <Link href="/services" passHref legacyBehavior>
                    <Button variant="outline-light" size="lg" className="px-4 py-2 w-100 w-sm-auto">了解更多</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Services Section */}
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="section-title text-center mb-2">診所行銷解決方案</h2>
            <p className="lead">從曝光到成交，全面提升業績</p>
          </div>
          <Row className="g-4">
            <Col md={12} lg={4} key={0} className="mb-4 mb-lg-0">
              <Card className="h-100 border-0 service-card shadow-sm">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="text-primary mb-4">
                    <div className="bg-primary bg-opacity-10 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '70px', height: '70px' }}>
                      <FontAwesomeIcon icon={faBullhorn} className="text-primary fa-2x" />
                    </div>
                  </div>
                  <Card.Title className="h4 mb-3">素材設計與廣告投放</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    <ul className="ps-3">
                      <li className="mb-2">精準行銷素材設計（社群貼文、廣告圖文、短影音）</li>
                      <li className="mb-2">Facebook/Instagram 廣告投放</li>
                      <li className="mb-2">Google Ads 關鍵字廣告</li>
                      <li>Meta 訊息型廣告，提升轉換率</li>
                    </ul>
                  </Card.Text>
                  <Link href="/services" passHref legacyBehavior>
                    <Button variant="outline-primary" className="mt-auto align-self-start">了解更多 <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={12} lg={4} key={1} className="mb-4 mb-lg-0">
              <Card className="h-100 border-0 service-card shadow-sm">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="text-primary mb-4">
                    <div className="bg-primary bg-opacity-10 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '70px', height: '70px' }}>
                      <FontAwesomeIcon icon={faUserFriends} className="text-primary fa-2x" />
                    </div>
                  </div>
                  <Card.Title className="h4 mb-3">個案名單管理與再行銷</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    <ul className="ps-3">
                      <li className="mb-2">透過數據分析，篩選高潛力患者</li>
                      <li className="mb-2">LINE 官方帳號整合，提升預約率</li>
                      <li className="mb-2">既有名單二次開發</li>
                      <li>專業轉換流程，提高成交率</li>
                    </ul>
                  </Card.Text>
                  <Link href="/services" passHref legacyBehavior>
                    <Button variant="outline-primary" className="mt-auto align-self-start">了解更多 <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={12} lg={4} key={2}>
              <Card className="h-100 border-0 service-card shadow-sm">
                <Card.Body className="d-flex flex-column p-4">
                  <div className="text-primary mb-4">
                    <div className="bg-primary bg-opacity-10 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '70px', height: '70px' }}>
                      <FontAwesomeIcon icon={faLaptopCode} className="text-primary fa-2x" />
                    </div>
                  </div>
                  <Card.Title className="h4 mb-3">社群行銷與品牌經營</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    <ul className="ps-3">
                      <li className="mb-2">診所專屬網站、Landing Page 設計</li>
                      <li className="mb-2">社群貼文、SEO 文章撰寫</li>
                      <li className="mb-2">口碑行銷（Dcard、PTT、媒體）</li>
                      <li>品牌形象塑造與聲譽管理</li>
                    </ul>
                  </Card.Text>
                  <Link href="/services" passHref legacyBehavior>
                    <Button variant="outline-primary" className="mt-auto align-self-start">了解更多 <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Data Section */}
        <div className="data-section py-5 my-5">
          <Container className="py-5 data-content">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-4">成功案例數據</h2>
              <p className="lead">我們的行銷方案幫助診所實現了顯著業績增長</p>
            </div>
            <Row className="g-4">
              <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                <div className="data-card text-center">
                  <FontAwesomeIcon icon={faUsers} className="fa-2x mb-3" />
                  <h2 className="counter-number">870,230</h2>
                  <p>單月觸及人數</p>
                </div>
              </Col>
              <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                <div className="data-card text-center">
                  <FontAwesomeIcon icon={faUserFriends} className="fa-2x mb-3" />
                  <h2 className="counter-number">263</h2>
                  <p>互動名單數</p>
                </div>
              </Col>
              <Col sm={6} lg={3} className="mb-4 mb-sm-0">
                <div className="data-card text-center">
                  <FontAwesomeIcon icon={faChartLine} className="fa-2x mb-3" />
                  <h2 className="counter-number">13</h2>
                  <p>實際成交數</p>
                </div>
              </Col>
              <Col sm={6} lg={3}>
                <div className="data-card text-center">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="fa-2x mb-3" />
                  <h2 className="counter-number">300萬+</h2>
                  <p>營業額</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* About Section */}
        <div className="about-section py-5">
          <Container className="py-5 about-content">
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <h2 className="section-title mb-4">專業團隊</h2>
                <p className="lead mb-4">為診所量身打造高效行銷解決方案</p>
                <p className="mb-4">來自企業級資源規劃、數據分析、店鋪經營的專家，為您的診所提供最佳的行銷支持。</p>
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon icon={faChartLine} className="text-primary me-3" />
                  <p className="mb-0">林大為 David Lin：企業資源規劃顧問，數據工程師</p>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon icon={faUserFriends} className="text-primary me-3" />
                  <p className="mb-0">周書儀 Sue：經營策略規劃專家，擁有國際連鎖品牌管理經驗</p>
                </div>
                <Link href="/about" passHref legacyBehavior>
                  <Button variant="primary" className="mt-2">了解更多 <FontAwesomeIcon icon={faArrowRight} className="ms-1" /></Button>
                </Link>
              </Col>
              <Col lg={6}>
                <div className="bg-white rounded-3 shadow-lg p-4 h-100">
                  <div className="p-4 border border-2 border-primary border-opacity-10 rounded-3 h-100">
                    <div className="text-center mb-4">
                      <FontAwesomeIcon icon={faChartPie} className="text-primary fa-4x mb-3" />
                      <h4 className="fw-bold">我們的使命</h4>
                    </div>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center mb-3">
                        <FontAwesomeIcon icon={faChartLine} className="text-primary me-3" />
                        <span>幫助診所降低行銷成本</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <FontAwesomeIcon icon={faUserFriends} className="text-primary me-3" />
                        <span>提高精準名單轉換率</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="text-primary me-3" />
                        <span>實現最大化營收</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Call to Action */}
        <div className="contact-section py-5">
          <Container className="py-5 contact-content">
            <Row className="justify-content-center">
              <Col md={10} lg={8} className="text-center">
                <h2 className="fw-bold mb-4">想要提升診所業績？</h2>
                <p className="lead mb-5">專業診所行銷團隊，助您實現業績倍增目標</p>
                <div className="d-flex justify-content-center">
                  <Link href="/contact" passHref legacyBehavior>
                    <Button variant="primary" size="lg" className="px-5 py-3 shadow-lg fw-bold">
                      立即免費諮詢 <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-5 pt-3">
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
                    <span className="me-0 me-sm-3 mb-2 mb-sm-0 fw-bold">或直接聯繫我們：</span>
                    <span><FontAwesomeIcon icon={faPhone} className="me-2" />0922-885-566</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
