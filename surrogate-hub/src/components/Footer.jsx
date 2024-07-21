import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-pink mt-5 py-4">
      <Container className="text-center text-white">
        <p className="fs-5">
          &copy; {new Date().getFullYear()} SurrogacyHub. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-4 text-gray">
          <p>Contact us at: 514-971-6875 or softensdid@gmail.com</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
