import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomButton = ({ children, btnLink, classes }) => {
  return (
    <Link to={btnLink}>
      <Button variant="light" className={ `text-white px-4 py-2 bg-pink-1 fw-bold fs-5 ${classes}`}>
        {children}
      </Button>
    </Link>
  );
};

export default CustomButton;
