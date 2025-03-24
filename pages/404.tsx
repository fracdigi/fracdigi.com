import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Custom404() {
  return (
    <Layout>
      <SEO 
        title="找不到頁面" 
        description="很抱歉，您所尋找的頁面不存在。請返回首頁或聯絡我們以獲取協助。" 
      />
      
      <Container className="py-5 my-5 text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-primary fa-5x mb-4" />
            <h1 className="fw-bold mb-4">404 - 找不到頁面</h1>
            <p className="lead mb-5">很抱歉，您所尋找的頁面不存在或已被移除。</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 align-items-center">
              <Link href="/" passHref legacyBehavior>
                <Button variant="primary" className="px-4 py-2 mb-3 mb-sm-0 w-100 w-sm-auto">
                  <FontAwesomeIcon icon={faHome} className="me-2" /> 返回首頁
                </Button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="outline-primary" className="px-4 py-2 w-100 w-sm-auto">
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> 聯絡我們
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}