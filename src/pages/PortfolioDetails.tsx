import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { portfolioItems } from "../components/utils/portfolioItems";
import Header from "../components/shared/Header";

const PortfolioDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const filteredItems = portfolioItems.find((item) => item.id === id);
    if (filteredItems) {
      setItem(filteredItems);
    }
  }, []);

  console.log(item, "T");

  return (
    <>
      <Header pageTitle={item?.title} pageRoute={`portfolio/${id}`} />
      <div
        className="container-fluid py-lg-5 py-3 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-lg-5 py-3">
          {item && (
            <>
              <h5 className="fw-bold text-primary text-uppercase mb-3">
                Description
              </h5>
              <p>{item.description}</p>
              <div className="tags">
                {item.categories.map((category) => (
                  <span className="pill">{category}</span>
                ))}
              </div>
              <div className="portfolio-details-img">
                <img
                  className=""
                  src={"../" + item.detailPageImgs[0].url}
                  alt=""
                />
                <caption>{item.detailPageImgs[0].caption}</caption>
              </div>
              <h5 className="fw-bold text-primary text-uppercase mb-3">
                Technologies
              </h5>
              <div className="techstacks">
                {item.techStacks.map((tech) => {
                  return (
                    <div className="technology">
                      <div>
                        <img src={"../" + tech.iconUrl} alt="" />
                        <h6>{tech.technology}</h6>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h5 className="fw-bold text-primary text-uppercase mb-3 mt-5">
                Challenges
              </h5>
              <p dangerouslySetInnerHTML={{ __html: item.challenges }} />
              <h5 className="fw-bold text-primary text-uppercase mb-3 mt-5">
                Solutions
              </h5>
              <p dangerouslySetInnerHTML={{ __html: item.solution }} />
              <h5 className="fw-bold text-primary text-uppercase mb-3 mt-5">
                Results
              </h5>
              <div className="portfolio-details-img">
                <img
                  className=""
                  src={"../" + item.detailPageImgs[1].url}
                  alt=""
                />
                <caption>{item.detailPageImgs[1].caption}</caption>
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.results }} />
              <h5 className="fw-bold text-primary text-uppercase mb-3 mt-5">
                Duration
              </h5>
              <div className="duration">
                <strong>{item.duration}</strong>
              </div>
              {item.directLink && (
                <a
                  target="_blank"
                  className="btn btn-primary directLinkBtn mt-5"
                  href={item.directLink}
                >
                  GO TO SITE LINK
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
