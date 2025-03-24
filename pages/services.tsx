import SEO from '../components/SEO';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Layout from '../components/Layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullhorn, 
  faUserMd, 
  faHeadset, 
  faImages, 
  faChartBar, 
  faUsers, 
  faVideo,
  faFileAlt,
  faSearchDollar,
  faComments,
  faUserTie,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  const services = [
    {
      title: '數位行銷顧問',
      price: '40,000',
      period: '/月',
      description: '基礎診所行銷方案，提供素材設計、廣告投放與成效分析',
      icon: faBullhorn,
      features: [
        { text: '每月 4 組 圖文素材', icon: faImages },
        { text: '每月 1 次 成效報告與優化建議', icon: faChartBar },
        { text: '受眾研究 + 廣告投放 A/B 測試', icon: faUsers },
        { text: '多平台廣告設定與監控', icon: faSearchDollar },
      ],
      notes: '適合初次接觸數位行銷或預算有限的診所，廣告操作費為投放預算的20%（建議預算50,000以上）',
      recommended: false,
    },
    {
      title: '醫師個人品牌行銷',
      price: '80,000',
      period: '/月',
      description: '全方位醫師個人品牌打造，建立專業權威形象',
      icon: faUserMd,
      features: [
        { text: '每月 4 支短影音', icon: faVideo },
        { text: '每月 2 組圖文素材', icon: faImages },
        { text: '每週 2 篇 生活雜文（建立個人品牌）', icon: faFileAlt },
        { text: 'SEO 優化 + 互動留言管理', icon: faComments },
      ],
      notes: '透過打造醫師個人品牌，建立專業權威形象，增強病患信任度，廣告操作費20%（合約內廣告費10,000元內免投放費）',
      recommended: true,
    },
    {
      title: '加購方案: 線上客服',
      price: '20,000',
      period: '/月',
      description: '線上客服回覆服務，提升潛在客戶轉換率',
      icon: faHeadset,
      features: [
        { text: '基本100筆名單回覆服務', icon: faHeadset },
        { text: '超出每50筆加收5,000元', icon: faCheckCircle },
        { text: '預約安排與簡單諮詢', icon: faUsers },
        { text: '完整數據分析與報表', icon: faChartBar },
      ],
      notes: '主要負責基礎問題回覆與預約安排，適合與上方方案搭配使用，提升整體轉換率',
      recommended: false,
    },
    {
      title: '加購方案: 線上諮詢師',
      price: '40,000',
      period: '/月',
      description: '專業諮詢服務，大幅提高成交率',
      icon: faUserTie,
      features: [
        { text: '包含100名客戶深度諮詢', icon: faUserTie },
        { text: '超出每20筆加收10,000元', icon: faCheckCircle },
        { text: '專業醫療知識背景團隊', icon: faUsers },
        { text: '轉換流程優化與分析', icon: faChartBar },
      ],
      notes: '具備專業知識背景，能進行深度諮詢，提供專業建議，適合高單價療程或手術諮詢',
      recommended: false,
    },
  ];

  return (
    <Layout>
      <SEO 
        title="服務方案" 
        description="探索Fracdigi提供的診所行銷解決方案，從素材設計、廣告投放到名單管理與品牌經營，助您業績倍增。" 
      />

      <main>
        <div className="bg-light py-5">
          <Container>
            <h1 className="text-center mb-5">診所行銷解決方案，從曝光到成交，全面提升業績！</h1>
            <p className="text-center lead mb-5">整合素材設計、廣告投放、名單管理、社群經營等多種行銷手段</p>
            
            <Row className="g-4">
              {services.map((service, index) => (
                <Col lg={6} key={index} className="mb-4">
                  <Card className={`h-100 border-0 shadow-sm service-plan-card ${service.recommended ? 'recommended' : ''}`}>
                    {service.recommended && (
                      <div className="position-absolute top-0 end-0 p-2">
                        <Badge bg="primary" className="py-2 px-3 recommended-badge">推薦方案</Badge>
                      </div>
                    )}
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-4">
                        <div className="icon-circle-sm d-flex justify-content-center align-items-center me-3">
                          <FontAwesomeIcon icon={service.icon} className="text-primary fa-lg" />
                        </div>
                        <div>
                          <h3 className="mb-0">{service.title}</h3>
                        </div>
                      </div>
                      
                      <div className="price-section mb-4">
                        <div className="d-flex align-items-end">
                          <span className="h2 fw-bold mb-0">{service.price}</span>
                          <span className="text-muted ms-1">{service.period}</span>
                        </div>
                        <p className="mb-0 text-muted">{service.description}</p>
                      </div>
                      
                      <div className="features-section mb-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="d-flex align-items-center mb-3">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary me-2" />
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-muted small mb-4">{service.notes}</p>
                      
                      <Link href="/contact" passHref legacyBehavior>
                        <Button variant={service.recommended ? "primary" : "outline-primary"} className="w-100">
                          立即諮詢 <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            
            <div className="text-center mt-5 pt-4">
              <p className="mb-4">需要客製化方案？我們可以根據您的需求提供專屬服務</p>
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="primary" size="lg">預約專業顧問諮詢</Button>
              </Link>
            </div>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
