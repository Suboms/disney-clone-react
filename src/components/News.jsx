import React from "react";

const News = () => {
  const newsImage = [
    "https://lumiere-a.akamaihd.net/v1/images/img_accomodelunche_1200_677_4b203ed4.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/shopping_eventnews_img_abccooking202403_1200_677_8fae6dfb.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/1200x677_mh-bunnies_ce78b8c0.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/news_202403_1_1200_677_1_1ad476dd.jpeg",
  ];

  return (
    <>
      <section className="section-three" id="section-three">
        <div className="news-title">
          <h1>News</h1>
        </div>
        <div className="news-content">
          {newsImage.map((image, index) => {
            return (
              <div key={index} className="news-card">
                <img src={image} alt="news" />
                <div className="news-card-content">
                  <h3>News Title</h3>
                  <p>News Description</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default News;