import SEO from '../components/SEO';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faUsers, 
  faLightbulb, 
  faHandshake, 
  faRocket, 
  faUserCheck, 
  faBrain, 
  faChartPie, 
  faUserFriends,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const values = [
    { title: '數據驅動', desc: '運用精準數據分析，制定最有效的診所行銷策略。', icon: faChartLine },
    { title: '專業服務', desc: '提供專業診所行銷服務，幫助客戶獲得最大化營收。', icon: faHandshake },
    { title: '高效執行', desc: '快速反應市場變化，確保行銷方案的高效執行與調整。', icon: faRocket },
    { title: '客戶至上', desc: '以客戶成功為目標，提供超出預期的服務體驗。', icon: faUserCheck },
    { title: '創新思維', desc: '不斷探索創新的行銷方法，為診所帶來競爭優勢。', icon: faBrain },
    { title: '結果導向', desc: '專注於可量化的行銷成果，確保診所投資獲得最佳回報。', icon: faChartPie }
  ];

  const stats = [
    { name: '870,230', title: '單月觸及人數', icon: faUsers },
    { name: '263', title: '互動名單', icon: faUserFriends },
    { name: '13', title: '實際成交', icon: faHandshake },
    { name: '300+萬', title: '營業額', icon: faMoneyBillWave }
  ];

  return (
    <Layout>
      <SEO 
        title="關於我們" 
        description="了解Fracdigi團隊如何為診所提供專業行銷顧問服務，為您的診所量身打造高效行銷解決方案。" 
      />

      <main>
        <div className="bg-light py-5">
          <Container>
            <h1 className="text-center mb-5">專業團隊，為診所量身打造高效行銷解決方案</h1>
            <Row className="mb-5">
              <Col md={6} className="mb-4 mb-md-0">
                <div className="bg-white w-100 shadow-sm rounded-3 p-4" style={{ height: '400px' }}>
                  <div className="h-100 d-flex flex-column justify-content-center align-items-center text-center p-4 border border-2 border-primary border-opacity-10 rounded-3">
                    <div className="icon-circle mb-4 d-flex justify-content-center align-items-center">
                      <FontAwesomeIcon icon={faUsers} className="text-primary fa-3x" />
                    </div>
                    <h3 className="mb-3">專業團隊</h3>
                    <p className="mb-0">來自企業級資源規劃、數據分析、店鋪經營的專家，為您的診所提供最佳的行銷支持</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <h2 className="mb-3">公司介紹</h2>
                <p className="mb-4">Fracdigi 是一間神秘且充滿創意的顧問公司，英文Fracdigi使用的Frac意指分形，顧問團隊提供客戶的價值是Problem solving，宗旨是協助客戶真正解決營運上的問題，並非局限於固定的解決方案。品數位目前主要服務的客戶是牙醫診所、醫療服務院所、美業客戶，旨在協助牙醫診所業主導入數位化的營運解決方案，並透過精準行銷、銷售、員工培訓等流程設計，協助客戶真正獲利，創造共贏，我們的商業模式，是透過顧問服務成為企業主的營運夥伴。</p>

                <h5 className="mb-2">團隊核心成員</h5>
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <FontAwesomeIcon icon={faChartLine} className="text-primary me-2" />
                    <span>林大為 David Lin：企業資源規劃顧問，數據工程師</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faLightbulb} className="text-primary me-2" />
                    <span>周書儀 Sue：經營策略規劃專家，擁有國際連鎖品牌管理經驗</span>
                  </div>
                </div>

                <h5 className="mb-2">我們的使命</h5>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <FontAwesomeIcon icon={faChartLine} className="text-primary me-3" />
                    <span>幫助診所降低行銷成本</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <FontAwesomeIcon icon={faUserFriends} className="text-primary me-3" />
                    <span>提高精準名單轉換率</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-primary me-3" />
                    <span>實現最大化營收</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faLightbulb} className="text-primary me-3" />
                    <span>精準廣告投放、程式撰寫、流程設計、策略制定</span>
                  </li>
                </ul>
              </Col>
            </Row>

            <div className="mb-5">
              <h2 className="text-center mb-4">我們的價值觀</h2>
              <Row>
                {values.map((value, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <Card className="h-100 border-0 shadow-sm">
                      <Card.Body className="d-flex flex-column">
                        <div className="text-primary mb-3">
                          <div className="icon-circle d-inline-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={value.icon} className="text-primary" />
                          </div>
                        </div>
                        <h5 className="mb-3">{value.title}</h5>
                        <p className="mb-0">{value.desc}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>

            <div>
              <h2 className="text-center mb-4">成功案例數據</h2>
              <Row>
                {stats.map((stat, index) => (
                  <Col lg={3} md={6} key={index} className="mb-4">
                    <Card className="text-center border-0 shadow-sm h-100">
                      <div className="pt-4">
                        <div className="mx-auto icon-circle-lg d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon icon={stat.icon} className="text-primary fa-3x" />
                        </div>
                      </div>
                      <Card.Body>
                        <h5 className="mb-1">{stat.name}</h5>
                        <p className="text-muted">{stat.title}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
