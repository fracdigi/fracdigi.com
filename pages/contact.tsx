import SEO from '../components/SEO';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faComment,
  faUser,
  faBuilding,
  faFileAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <Layout>
      <SEO 
        title="聯繫我們" 
        description="想要提升診所業績？立即與Fracdigi團隊聯繫，獲取專業診所行銷解決方案。免費諮詢，助您實現業績倍增。" 
      />

      <main>
        <div className="contact-section py-5">
          <Container className="py-5 contact-content">
            <Row className="justify-content-center mb-5">
              <Col md={10} lg={8} className="text-center">
                <h1 className="fw-bold mb-4">想要提升診所業績？</h1>
                <p className="lead mb-0">立即與我們聯繫，獲取專業診所行銷方案</p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={10}>
                <Row className="g-4">
                  <Col md={5}>
                    <div className="px-4 py-5">
                      <h4 className="section-title mb-5">聯繫方式</h4>
                      
                      <div className="mb-4 d-flex align-items-center">
                        <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                          <FontAwesomeIcon icon={faPhone} className="text-white" />
                        </div>
                        <div>
                          <p className="fw-bold mb-0">電話</p>
                          <p className="mb-0">0922-885-566</p>
                        </div>
                      </div>
                      
                      <div className="mb-4 d-flex align-items-center">
                        <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                          <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                        </div>
                        <div>
                          <p className="fw-bold mb-0">電子郵件</p>
                          <p className="mb-0">david@fracdigi.com</p>
                        </div>
                      </div>
                      
                      <div className="mb-4 d-flex align-items-center">
                        <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '40px', height: '40px' }}>
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                        </div>
                        <div>
                          <p className="fw-bold mb-0">公司地址</p>
                          <p className="mb-0">台北市大安區敦化南路一段233巷20號</p>
                        </div>
                      </div>
                      
                      <div className="mt-5">
                        <Button variant="success" size="lg" className="w-100">
                          <FontAwesomeIcon icon={faComment} className="me-2" /> 加入 LINE 官方帳號
                        </Button>
                      </div>
                    </div>
                  </Col>
                  
                  <Col md={7}>
                    <Card className="border-0 shadow-lg h-100">
                      <Card.Body className="p-4 p-lg-5">
                        <h4 className="mb-4 fw-bold"><FontAwesomeIcon icon={faPaperPlane} className="me-2 text-primary" /> 立即諮詢</h4>
                        <Form>
                          <Row>
                            <Col sm={6} className="mb-3">
                              <Form.Group>
                                <Form.Label><FontAwesomeIcon icon={faUser} className="me-1 text-primary" /> 姓名</Form.Label>
                                <Form.Control type="text" placeholder="請輸入您的姓名" className="py-2" />
                              </Form.Group>
                            </Col>
                            <Col sm={6} className="mb-3">
                              <Form.Group>
                                <Form.Label><FontAwesomeIcon icon={faPhone} className="me-1 text-primary" /> 電話</Form.Label>
                                <Form.Control type="tel" placeholder="請輸入您的電話" className="py-2" />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faEnvelope} className="me-1 text-primary" /> 電子郵件</Form.Label>
                            <Form.Control type="email" placeholder="請輸入您的電子郵件" className="py-2" />
                          </Form.Group>

                          <Form.Group className="mb-3">
                            <Form.Label><FontAwesomeIcon icon={faBuilding} className="me-1 text-primary" /> 診所名稱</Form.Label>
                            <Form.Control type="text" placeholder="請輸入您的診所名稱" className="py-2" />
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label><FontAwesomeIcon icon={faFileAlt} className="me-1 text-primary" /> 需求描述</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="請簡單描述您的需求" className="py-2" />
                          </Form.Group>

                          <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
                            送出諮詢 <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                          </Button>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
