import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialList = [
    {
      id: 1,
      name: "Christine",
      review: t("review1"),
    },
    {
      id: 2,
      name: "Alexa",
      review: t("review2"),
    },
    {
      id: 3,
      name: "Smith",
      review: t("review3"),
    },
  ];

  return (
    <div className="d-flex gap-3 mt-5">
      {testimonialList.map((item) => (
        <div
          lg={4}
          key={item.id}
          className="p-3 box-shadow rounded bg-pink-1 text-white"
        >
          <div
            className="d-flex justify-content-end gap-1"
            style={{ color: "yellow" }}
          >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="mt-3">
            <strong>"{item.review}"</strong>
          </div>
          <div className="d-flex justify-content-end gap-3 mt-1">
            <strong className="fs-6">-{item.name}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
