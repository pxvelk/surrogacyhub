import { Button, Col, Container, Form, Row } from "react-bootstrap";
import women from "../images/women2.png";
import { useState } from "react";

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    desiredSurrogate: "",
    date: "",
    time: "",
    address: "",
    country: "",
    city: "",
    postal: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateStep1 = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.desiredSurrogate)
      newErrors.desiredSurrogate = "Desired Surrogate is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    let newErrors = {};
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postal) newErrors.postal = "Postal is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 2 && validateStep2()) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 3 && validateStep3()) {
      console.log(formData)
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
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
              style={{ marginTop: 300, fontSize: "5rem" }}
            >
              Start Application
            </h1>
          </Container>
        </div>
      </div>

      {/* ----------Steps----------- */}
      <Container className="mt-5">
        <h1 className="pink fs-2 fw-bold text-center">
          Step 1: Complete the Surrogacy Form
        </h1>
        <p className="fs-4 fw-medium text-center">
          Fill out your personal details and specify your preferences and
          requirements for a surrogate. Provide relevant information about your
          family, medical history, and surrogacy goals.
        </p>

        <h1 className="pink fs-2 fw-bold mt-4 text-center">
          Step 2: Match with a Surrogate and Conduct Initial Meetings
        </h1>
        <p className="fs-4 fw-medium text-center">
          The surrogacy agency will help you find a suitable surrogate. Schedule
          and attend initial meetings with potential surrogates to ensure a good
          match and mutual understanding.
        </p>

        <h1 className="pink fs-2 fw-bold mt-4 text-center">
          Step 3: Legal Agreements and Embryo Transfer
        </h1>
        <p className="fs-4 fw-medium text-center">
          Finalize legal agreements and proceed with the medical process,
          including the embryo transfer.
        </p>

        {/* ----------Steps Form----------- */}
        <h1 className="pink mt-5 fw-bold">Start Now</h1>
        <div className="step-indicator">
          <div className={`step ${currentStep === 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            Fill in personal details
          </div>
          <div className={`step ${currentStep === 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            Schedule a meeting with your surrogate
          </div>
          <div className={`step ${currentStep === 3 ? "active" : ""}`}>
            <span className="step-number">3</span>
            Schedule Embryo Transfer
          </div>
        </div>

        <Form className="mt-4">
          {/* ----------Steps 1----------- */}
          {currentStep === 1 && (
            <>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="Name"
                      className={`py-3 ${errors.name && "error-border"}`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.name && errors.name}
                    </p>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="email"
                      value={formData.email}
                      placeholder="Email"
                      className={`py-3 ${errors.email && "error-border"}`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.email && errors.email}
                    </p>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      placeholder="Phone Number"
                      className={`py-3 ${errors.phoneNumber && "error-border"}`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.phoneNumber && errors.phoneNumber}
                    </p>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="desiredSurrogate"
                      value={formData.desiredSurrogate}
                      placeholder="Desired Surrogate"
                      className={`py-3 ${
                        errors.desiredSurrogate && "error-border"
                      }`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.desiredSurrogate && errors.desiredSurrogate}
                    </p>
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}

          {currentStep === 2 && (
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <p>Select Date</p>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`px-3 py-3 ${errors.date && "error-border"}`}
                    style={{ width: "100%" }}
                  />
                  <p className="text-small text-danger mt-1">
                    {errors.date && errors.date}
                  </p>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <p>Select Time</p>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`px-3 py-3 ${errors.time && "error-border"}`}
                    style={{ width: "100%" }}
                  />
                  <p className="text-small text-danger mt-1">
                    {errors.time && errors.time}
                  </p>
                </Form.Group>
              </Col>
            </Row>
          )}

          {currentStep === 3 && (
            <>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address}
                      placeholder="Home Address"
                      className={`py-3 ${errors.address && "error-border"}`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.address && errors.address}
                    </p>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="country"
                      value={formData.country}
                      placeholder="Country"
                      className={`py-3 ${errors.country && "error-border"}`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.country && errors.country}
                    </p>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      placeholder="City"
                      className={`py-3 ${errors.city && "error-border"}`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.city && errors.city}
                    </p>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="postal"
                      value={formData.postal}
                      placeholder="Postal"
                      className={`py-3 ${errors.postal && "error-border"}`}
                      onChange={handleChange}
                    />
                    <p className="text-small text-danger mt-1">
                      {errors.postal && errors.postal}
                    </p>
                  </Form.Group>
                </Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="comment"
                    as="textarea"
                    rows={5}
                    value={formData.comment}
                    placeholder="comment"
                    className={`py-3`}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
            </>
          )}

          <div className="d-flex align-items-center justify-content-end gap-2 mt-4">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="light"
                onClick={handlePrevious}
                className={`text-white px-4 py-2 bg-pink-1 fw-bold fs-5`}
              >
                Previous
              </Button>
            )}
            {currentStep < 3 && (
              <Button
                type="button"
                variant="light"
                onClick={handleNext}
                className={`text-white px-4 py-2 bg-pink-1 fw-bold fs-5`}
              >
                Next
              </Button>
            )}
            {currentStep === 3 && (
              <Button
                type="button"
                variant="light"
                onClick={handleNext}
                className={`text-white px-4 py-2 bg-pink-1 fw-bold fs-5`}
              >
                Submit
              </Button>
            )}
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Application;
