import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import women from "../images/women1.png";
import girl from "../images/girl.jpg";
import girl1 from "../images/girl1.jpg";
import girl2 from "../images/girl2.jpg";
import girl3 from "../images/girl3.jpg";
import girl4 from "../images/girl4.jpg";
import girl5 from "../images/girl5.jpg";
import girl6 from "../images/girl6.jpg";
import girl7 from "../images/girl7.jpg";
import girl8 from "../images/girl8.jpg";
import girl9 from "../images/girl9.jpg";
import girl10 from "../images/girl10.jpg";
import girl11 from "../images/girl11.jpg";

const mockData = [
  {
    id: 1,
    pic: girl,
    name: "Emily",
    surrogateType: "Gestional",
    age: 25,
    experience: "First-Time Surrogate",
    compensation: "25,000",
    location: "Ottawa, ON",
  },
  {
    id: 2,
    pic: girl1,
    name: "Sophia",
    surrogateType: "Gestional",
    age: 20,
    experience: "Experienced Surrogate",
    compensation: "50,000",
    location: "Toronto, ON",
  },
  {
    id: 3,
    pic: girl11,
    name: "Isabella",
    surrogateType: "IVF",
    age: 27,
    experience: "Experienced Surrogate",
    compensation: "41,000",
    location: "Montreal, QC",
  },
  {
    id: 4,
    pic: girl3,
    name: "Evelyn",
    surrogateType: "IVF",
    age: 27,
    experience: "First-Time Surrogate",
    compensation: "45,000",
    location: "Montreal, QC",
  },
  {
    id: 5,
    pic: girl4,
    name: "Camila",
    surrogateType: "Gestional",
    age: 23,
    experience: "First-Time Surrogate",
    compensation: "20,000",
    location: "Toronto, ON",
  },
  {
    id: 6,
    pic: girl5,
    name: "Scarlett",
    surrogateType: "Gestional",
    age: 23,
    experience: "Experienced Surrogate",
    compensation: "20,000",
    location: "Toronto, ON",
  },
  {
    id: 7,
    pic: girl6,
    name: "Gianna",
    surrogateType: "IVF",
    age: 25,
    experience: "Experienced Surrogate",
    compensation: "31,000",
    location: "Ottawa, ON",
  },
  {
    id: 8,
    pic: girl7,
    name: "Chloe",
    surrogateType: "IVF",
    age: 22,
    experience: "Experienced Surrogate",
    compensation: "42,000",
    location: "Ottawa, ON",
  },
  {
    id: 9,
    pic: girl8,
    name: "Layla",
    surrogateType: "Gestional",
    age: 18,
    experience: "Experienced Surrogate",
    compensation: "62,000",
    location: "Montreal, QC",
  },
  {
    id: 10,
    pic: girl9,
    name: "Eliana",
    surrogateType: "Gestional",
    age: 28,
    experience: "First-Time Surrogate",
    compensation: "52,000",
    location: "Montreal, QC",
  },
  {
    id: 11,
    pic: girl10,
    name: "Madison",
    surrogateType: "IVF",
    age: 25,
    experience: "First-Time Surrogate",
    compensation: "42,000",
    location: "Ottawa, ON",
  },
  {
    id: 12,
    pic: girl2,
    name: "Grace",
    surrogateType: "IVF",
    age: 19,
    experience: "Experienced Surrogate",
    compensation: "32,000",
    location: "Ottawa, ON",
  },
];

const SurrogateProfile = () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [compensation, setCompensation] = useState("");
  const [location, setLocation] = useState("");

  const filterData = () => {
    let filtered = mockData;

    if (type) {
      filtered = filtered.filter((item) => item.surrogateType === type);
    }
    if (age) {
      const ageRange = age.split("-");
      const minAge = parseInt(ageRange[0]);
      const maxAge = parseInt(ageRange[1]);
      filtered = filtered.filter(
        (item) => item.age >= minAge && item.age <= maxAge
      );
    }
    if (experience) {
      filtered = filtered.filter((item) => item.experience === experience);
    }
    if (compensation) {
      const compRange = compensation.split(" - ");
      if (compRange.length > 1) {
        const minComp = parseInt(
          compRange[0].replace("$", "").replace(",", "")
        );
        const maxComp = parseInt(
          compRange[1].replace("$", "").replace(",", "")
        );
        filtered = filtered.filter(
          (item) =>
            parseInt(item.compensation.replace(",", "")) >= minComp &&
            parseInt(item.compensation.replace(",", "")) <= maxComp
        );
      } else {
        filtered = filtered.filter(
          (item) => parseInt(item.compensation.replace(",", "")) > 51000
        );
      }
    }
    if (location) {
      filtered = filtered.filter((item) => item.location === location);
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData();
  }, [type, location, experience, age, compensation]);

  const handleFilterChange = (e, filterSetter) => {
    filterSetter(e.target.value);
  };

  return (
    <div>
      {/* -----Main content----- */}
      <div className="position-relative">
        <img
          src={women}
          alt="women"
          className="img-fluid"
          style={{ width: "100%" }}
        />
        <div className="bg-trans-black">
          <Container className="text-center">
            <h1
              className="text-white fw-bold"
              style={{ marginTop: 210, fontSize: "5rem" }}
            >
              Choose your Surrogate
            </h1>
          </Container>
        </div>
      </div>

      {/* -------Filters-------- */}
      <Container className="mt-5">
        <div className="d-flex align-items-center justify-content-center gap-3 p-3 bg-pink rounded">
          <Form.Select
            onChange={(e) => handleFilterChange(e, setType)}
            className="bg-pink-2"
          >
            <option value="">Surrogate Type</option>
            <option value="IVF">IVF</option>
            <option value="Gestional">Gestional</option>
          </Form.Select>

          <Form.Select
            onChange={(e) => handleFilterChange(e, setAge)}
            className="bg-pink-2"
          >
            <option value="">Age</option>
            <option value="18-20">18-20</option>
            <option value="20-23">20-23</option>
            <option value="23-25">23-25</option>
            <option value="25-27">25-27</option>
          </Form.Select>

          <Form.Select
            onChange={(e) => handleFilterChange(e, setExperience)}
            className="bg-pink-2"
          >
            <option value="">Experience</option>
            <option value="First-Time Surrogate">First-Time Surrogate</option>
            <option value="Experienced Surrogate">Experienced Surrogate</option>
          </Form.Select>

          <Form.Select
            onChange={(e) => handleFilterChange(e, setCompensation)}
            className="bg-pink-2"
          >
            <option value="">Compensation Expectancy</option>
            <option value="$20,000 - $30,000">$20,000 - $30,000</option>
            <option value="$31,000 - $40,000">$31,000 - $40,000</option>
            <option value="$41,000 - $50,000">$41,000 - $50,000</option>
            <option value="$51,000+">$51,000+</option>
          </Form.Select>

          <Form.Select
            onChange={(e) => handleFilterChange(e, setLocation)}
            className="bg-pink-2"
          >
            <option value="">Location</option>
            <option value="Montreal, QC">Montreal, QC</option>
            <option value="Ottawa, ON">Ottawa,ON</option>
            <option value="Toronto, ON">Toronto,ON</option>
          </Form.Select>
        </div>

        {/* -------------POSTS------------- */}
        <Row className="mt-5">
          {filteredData.map((item) => (
            <Col md={3} key={item.id}>
              <div className="p-3 bg-pink-1 rounded mt-4 text-white">
                <img
                  src={item.pic}
                  alt="girl"
                  className="img-fluid"
                  style={{ height: "180px", width: "100%" }}
                />
                <h1 className="fs-4 mt-3 text-center">{item.name}</h1>
                <p className="mt-1 text-center">
                  {item.surrogateType} donor, {item.age}
                </p>
                <p className="mt-1">
                  {item.experience}, ${item.compensation}, {item.location}
                </p>
              </div>
            </Col>
          ))}
        </Row>
        {filteredData.length < 1 && <h4>No data found</h4>}
      </Container>
    </div>
  );
};

export default SurrogateProfile;
