import React from "react";

const Event = () => {
  const eventDetail = [
    {
      productName: "Pixar Best",
      productDesc: "The Ultimate best album of Pixar music! CD release/digital distribution on March 20th",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/pixar_best_1200_3eb5e766.jpeg?region=0,1,1200,675&width=768"
    },

    {
      productName: "Held nationwide from May to June!",
      productDesc: "Disney on Classic ~ Gift of Dreams and Magic 2024 Orchestral performance of many popular works​",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/doc24d_kv_1200x677_28f14638.jpeg?region=0,1,1200,675&width=768"
    },

    {
      productName: "Focus on Minnie in March",
      productDesc: "Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse! ​​",
      productImage: "https://lumiere-a.akamaihd.net/v1/images/minnieday_1024-768_624af220.jpeg?region=0,0,1024,768&width=768"
    },

    {
      productName: "disney palpalooza",
      productDesc: "Tokyo Disneyland “Disney Palpalooza” 2nd “Donald’s Quacky Duck City” held​​​",
      productImage: "https://www.tokyodisneyresort.jp/treasure/donaldsquackyduckcity/assets/img/atf_mv.jpg"
    }
  ];
  return (
    <>
      <section className="section-two" id="section-two">
        <div className="event-title">
          <h1>Event</h1>
        </div>
        <div className="event-content">
          {eventDetail.map((detail, index) => {
            return (
              <div key={index} className="event-card">
                <img src={detail.productImage} alt="event" />
                <div className="event-card-content">
                  <h3>{detail.productName}</h3>
                  <p>{detail.productDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Event;
