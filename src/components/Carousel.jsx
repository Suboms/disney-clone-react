import React from "react";

const SectionOne = () => {
  const sectionOneItems = [
    "https://lumiere-a.akamaihd.net/v1/images/home_2048-878_pc_698b83c6.png",
    "https://lumiere-a.akamaihd.net/v1/images/20240314_hero_olaf_presents_2048_215_878_a32dadd5.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/20240314_hero_anayuki_2048_215_878_657bd06d.jpeg",
  ];

  return (
    <>
      <section className="section-one" id="section-one">
        <div className="section-one-carousel">
          {sectionOneItems.map((element, index) => {
            return (
              <div key={index} className="section-one-carousel-item">
                <img src={element} alt="" width="300px" height="300px" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default SectionOne;
