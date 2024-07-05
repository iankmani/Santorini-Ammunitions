import React from "react";
import "./About.css";
import AboutPic from "../../assets/pics/about-us.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-us-title">
        <h1>About Us</h1>
      </div>
      <div className="compartment">
        <div className="about-us-image">
          <img
            src={AboutPic}
            alt="about us image"
            className="about-us-image-img"
          />
        </div>
        <div className="about-us-text">
          <h3>ESTABLISHED LEGACY</h3>
          <p>
            KB proudly holds the distinction of being a licensed firearms dealer
            with the capacity to store firearms and assorted ammunition. We are
            the largest single firearms dealer in Kenya, exemplifying our
            commitment to meeting the diverse needs of our clientele
          </p>
        </div>
      </div>

      <div className="compartment">
        <div className="about-us-image">
          <img
            src={AboutPic}
            alt="about us image"
            className="about-us-image-img"
          />
        </div>
        <div className="about-us-text">
          <h3>PEOPLE</h3>
          <p>
            Christine, our General Manager, boasts 16 years of dedicated service
            with KB. Her experience is invaluable in providing leadership and
            guidance. Vincent, our Gunsmith, offers 14 years of hands-on
            experience and is a product of training by former British armourer.
            His expertise ensures the reliable operation of firearms in our
            care. Jason, our Training Range Leader, is a seasoned firearms
            instructor with over two decades of experience. His expertise spans
            handguns, shotguns, and rifles. In addition, he's well-versed in
            safety protocols and has conducted security risk assessments. With
            certifications in advanced first aid and a background in security
            operations, Jason is a versatile professional committed to safety
            and excellence.
          </p>
        </div>
      </div>
      <div className="compartment">
        <div className="about-us-image">
          <img
            src={AboutPic}
            alt="about us image"
            className="about-us-image-img"
          />
        </div>
        <div className="about-us-text">
          <h3>LICENSED OPERATIONS</h3>
          <p>
            Our history is deeply woven into the fabric of Eastern Africa. KB,
            incorporated in 1929, is the oldest gun shop in the region. Our
            establishment was founded with a primary mission: to provide
            essential services, including the sale of firearms, accessories, and
            ammunition. This legacy continues to define our dedication to
            serving both seasoned marksmen and first-time buyers. Additionally,
            we offer crucial maintenance and repair services right at our
            company premises in Watermark Business Park, Karen.
          </p>
        </div>
      </div>
      <div className="compartment">
        <div className="about-us-image">
          <img
            src={AboutPic}
            alt="about us image"
            className="about-us-image-img"
          />
        </div>
        <div className="about-us-text">
          <h3>SALES & MARKETING AGENCY</h3>
          <p>
            KB proudly serves as the stockist for renowned brands, including
            Beretta, Benelli, Hatsan, Sako, Ceska, Browning, FN, Ruger, and H&K.
            Additionally, we are actively involved in the procurement and supply
            of firearms and maintenance, including third-line repairs for a wide
            range of firearm types. For the past two decades, we've held the
            esteemed position of an authorized Ministry of Defense contractor
            and have actively contributed to various highly successful programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
