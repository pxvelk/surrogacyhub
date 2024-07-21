import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CustomButton from "../components/Button";
import Testimonials from "../components/Testimonials";
import women from "../images/women.png";
import Dialogue from "../components/Modal";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [chosenSurrogate, setChosenSurrogate] = useState("");
  const [story, setStory] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const onSubmit = () => {
    console.log(name, email, chosenSurrogate, story, rating);
  };

  return (
    <div>
      {/* -----Main content----- */}
      <div className="position-relative">
        <img
          src={women}
          alt="Smilling pregnant women"
          className="img-fluid"
          style={{ width: "100%" }}
        />
        <div className="bg-trans-black">
          <Container style={{ marginTop: 210 }}>
            <strong
              className="text-white fw-bold"
              style={{ fontSize: "3.5rem" }}
            >
              {t("homeTitlePart1")}{" "}
              <span className="pink">{t("homeTitlePart2")}</span>{" "}
              {t("homeTitlePart3")}
            </strong>
            <p className="fs-2 text-white mt-4">{t("homeIntro")}</p>
            <CustomButton btnLink="/surrogate-profile" classes="mt-3">
              {t("homeBtn")}
            </CustomButton>
          </Container>
        </div>
      </div>

      {/* ----Testimonials---- */}
      <Container>
        <h1 className="fs-1 mt-5 text-center fw-bolder pink">
          {t("testimonials")}
        </h1>
        <Testimonials />

        <div className="text-center">
          <Button
            variant="light"
            className={`px-4 py-2 bg-pink-1 fw-bold text-white fs-5 mt-5`}
            onClick={() => setModalShow(true)}
            aria-label="surrogate button"
          >
            {t("surrogateBtn")}
          </Button>
        </div>
      </Container>

      {/* ---------Surrogacy Modal--------- */}
      <Dialogue
        title="Share your surrogacy story"
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={() => {
          setModalShow(false);
          onSubmit();
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your name"
              className="py-3"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Your email"
              className="py-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your chosen surrogate"
              className="py-3"
              onChange={(e) => setChosenSurrogate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Surrogacy Story"
              onChange={(e) => setStory(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4 text-center">
            <Form.Label>Rate Us</Form.Label>
            <div>
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      style={{ display: "none" }}
                    />
                    <FaStar
                      className="star"
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      size={30}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
          </Form.Group>
        </Form>
      </Dialogue>
    </div>
  );
};

export default Home;
