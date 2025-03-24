import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3" sticky="top">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="d-flex align-items-center">
            <FontAwesomeIcon icon={faChartLine} className="text-primary me-2" />
            <span className="fw-bold text-primary">Fracdigi</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link className="mx-2">首頁</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link className="mx-2">關於我們</Nav.Link>
            </Link>
            <Link href="/services" passHref legacyBehavior>
              <Nav.Link className="mx-2">服務方案</Nav.Link>
            </Link>
            <Link href="/privacy" passHref legacyBehavior>
              <Nav.Link className="mx-2">隱私政策</Nav.Link>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link className="mx-2">
                <span className="btn btn-primary btn-sm px-3 py-1">
                  <FontAwesomeIcon icon={faHeadset} className="me-1" /> 聯繫我們
                </span>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
