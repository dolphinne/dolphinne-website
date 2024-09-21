import React, { useEffect, useState } from "react";
import Header from "../components/shared/Header";
import { Link } from "react-router-dom";
import { portfolioItems } from "../components/utils/portfolioItems";

const categories = [
  { label: "All", value: "" },
  { label: "Web", value: "Web App" },
  { label: "Mobile", value: "Mobile App" },
  { label: "Desktop", value: "Desktop App" },
  { label: "AI Integration", value: "Artificial Intelligence" },
  {
    label: "AR/ML",
    value: "Augmented Reality",
    value2: "Machine Learning",
  },
  { label: "UI/UX", value: "UI/UX Development" },
  {
    label: "Marketplace",
    value: "Marketplace",
    value2: "Ecommerce",
  },
];

const Portfolio = () => {
  const [selectedCat, setSelectedCat] = useState({ value: "", value2: "" });
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (selectedCat.value) {
      const filterFunc = (item) => {
        if (selectedCat.value2) {
          return (
            item.categories.includes(selectedCat.value) ||
            item.categories.includes(selectedCat.value2)
          );
        }
        return item.categories.includes(selectedCat.value);
      };
      const filteredItems = portfolioItems.filter(filterFunc);
      setFiltered(filteredItems);
    } else {
      setFiltered(portfolioItems);
    }
  }, [selectedCat]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header pageRoute="portfolio" pageTitle="Portfolio" key="" />
      {/* Streamfog, weslides, bookify, pace hso, dynamic pos, sam2, NoCost, Rum
      factory, Motofiniti */}
      <div
        className="container-fluid py-lg-5 py-3 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-lg-5 py-3">
          <div className="portfolio_wrappper">
            <div className="categories_filter">
              <h5 className="fw-bold text-primary text-uppercase">
                Explore our work
              </h5>
              <h1 className="mb-4">We Transform Ideas into Reality</h1>
              <div className="mb-3 portfolio-filter-tags">
                {categories.map((category) => (
                  <button
                    type="button"
                    className={`btn btn-secondary ${
                      selectedCat.value === category.value ? "active" : ""
                    }`}
                    style={{
                      borderRadius: 10,
                      padding: "5px 20px",
                      marginRight: 10,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                    onClick={() => {
                      setSelectedCat({
                        value: category.value,
                        value2: category.value2,
                      });
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="row">
              {filtered.map((item) => (
                <div className="col-xl-4 col-lg-6 portfolio-item filter-app">
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="d-block"
                    onClick={handleScrollTop}
                  >
                    <div className="portfolio-single">
                      <div className="portfolio-single-tile">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="Portfolio Image"
                        />
                        <h4>{item.title}</h4>
                      </div>
                      <div className="portfolio-caption">
                        <div className="portfolio-caption-content">
                          <div className="tags">
                            {item.categories.map((category) => (
                              <span className="pill">{category}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
