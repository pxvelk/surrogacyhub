import { Link, useLocation } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import logo from "../images/logo.svg";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="py-4 bg-pink">
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="logo" width="80" />
          <h1 className="fs-4 text-white fw-bold">Surrogacy Hub</h1>
        </Link>
        <div className="d-flex justify-content-between align-items-center text-white">
          <Link to="/">
            <strong
              className={`fs-5 me-4 mt-1 nav-head ${
                location.pathname === "/" && "active-link"
              }`}
            >
              Home
            </strong>
          </Link>
          <Link to="/surrogate-profile">
            <strong
              className={`fs-5 me-4 mt-1 nav-head ${
                location.pathname === "/surrogate-profile" && "active-link"
              }`}
            >
              Surrogate Profiles
            </strong>
          </Link>
          <Link to="/expert-advice">
            <strong
              className={`fs-5 me-4 mt-1 nav-head ${
                location.pathname === "/expert-advice" && "active-link"
              }`}
            >
              Expert Advice
            </strong>
          </Link>
          <Link to="/application">
            <strong
              className={`fs-5 me-4 mt-1 nav-head ${
                location.pathname === "/application" && "active-link"
              }`}
            >
              Application
            </strong>
          </Link>
          <Form.Select
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-pink-2"
            style={{width:"135px"}}
          >
            <option value="">Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </Form.Select>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
