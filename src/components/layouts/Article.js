import React, { Component } from "react";
import Card from "../elements/Card";
import "../../assets/scss/Card.scss";

const cardData = [
  {
    img: `<img src="//www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_1385530316_1.jpg?v=1721305930&amp;width=940" alt="Father's Day Gift Hampers That Will Make Dad Feel Extra Special" srcset="//www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_1385530316_1.jpg?v=1721305930&amp;width=165 165w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_1385530316_1.jpg?v=1721305930&amp;width=360 360w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_1385530316_1.jpg?v=1721305930&amp;width=535 535w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_1385530316_1.jpg?v=1721305930&amp;width=720 720w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_1385530316_1.jpg?v=1721305930&amp;width=800 800w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_1385530316_1.jpg?v=1721305930&amp;width=940 940w" width="940" height="666" loading="lazy" sizes="
    (min-width: 1100px) 940px, (min-width: 750px) calc((100vw - 40px) / 2), calc((100vw - 20px))
  ">`,
    description:
      "FATHER'S DAY GIFT HAMPERS THAT WILL MAKE DAD FEEL EXTRA SPECIAL",
  },
  {
    img: `<img src="//www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_246334501_ec933dff-718c-42cb-a516-a21f66575c43.jpg?v=1715690066&amp;width=940" alt="Fast Gifting and Free Gift Hamper Delivery in Canberra" srcset="//www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_246334501_ec933dff-718c-42cb-a516-a21f66575c43.jpg?v=1715690066&amp;width=165 165w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_246334501_ec933dff-718c-42cb-a516-a21f66575c43.jpg?v=1715690066&amp;width=360 360w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_246334501_ec933dff-718c-42cb-a516-a21f66575c43.jpg?v=1715690066&amp;width=535 535w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_246334501_ec933dff-718c-42cb-a516-a21f66575c43.jpg?v=1715690066&amp;width=720 720w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_246334501_ec933dff-718c-42cb-a516-a21f66575c43.jpg?v=1715690066&amp;width=800 800w, //www.thehamperboutique.com.au/cdn/shop/articles/shutterstock_246334501_ec933dff-718c-42cb-a516-a21f66575c43.jpg?v=1715690066&amp;width=940 940w" width="940" height="535" loading="lazy" sizes="
					(min-width: 1100px) 940px, (min-width: 750px) calc((100vw - 40px) / 2), calc((100vw - 20px))
				" >`,
    description: "FAST GIFTING AND FREE GIFT HAMPER DELIVERY IN CANBERRA",
  },
  {
    img: `<img src="//www.thehamperboutique.com.au/cdn/shop/articles/unique-gift-hamper-ideas-to-surprise-mom-this-mothers-day-275026.jpg?v=1713695299&amp;width=940" alt="UNIQUE GIFT HAMPER IDEAS TO SURPRISE MOM THIS MOTHER'S DAY - The Hamper Boutique Co" srcset="//www.thehamperboutique.com.au/cdn/shop/articles/unique-gift-hamper-ideas-to-surprise-mom-this-mothers-day-275026.jpg?v=1713695299&amp;width=165 165w, //www.thehamperboutique.com.au/cdn/shop/articles/unique-gift-hamper-ideas-to-surprise-mom-this-mothers-day-275026.jpg?v=1713695299&amp;width=360 360w, //www.thehamperboutique.com.au/cdn/shop/articles/unique-gift-hamper-ideas-to-surprise-mom-this-mothers-day-275026.jpg?v=1713695299&amp;width=535 535w, //www.thehamperboutique.com.au/cdn/shop/articles/unique-gift-hamper-ideas-to-surprise-mom-this-mothers-day-275026.jpg?v=1713695299&amp;width=720 720w, //www.thehamperboutique.com.au/cdn/shop/articles/unique-gift-hamper-ideas-to-surprise-mom-this-mothers-day-275026.jpg?v=1713695299&amp;width=800 800w, //www.thehamperboutique.com.au/cdn/shop/articles/unique-gift-hamper-ideas-to-surprise-mom-this-mothers-day-275026.jpg?v=1713695299&amp;width=940 940w" width="940" height="627" loading="lazy" sizes="
					(min-width: 1100px) 940px, (min-width: 750px) calc((100vw - 40px) / 2), calc((100vw - 20px))
				">`,
    description: "UNIQUE GIFT HAMNPER IDEAS TO SURPRISE MOM THIS MOTHER'S DAY",
  },
  {
    img: `<img src="//www.thehamperboutique.com.au/cdn/shop/articles/top-christmas-gifts-melbourne-unique-and-delightful-options-for-the-festive-season-953874.png?v=1713695306&amp;width=940" alt="Top Christmas Gifts Melbourne - Unique and Delightful Options for the Festive Season - The Hamper Boutique Co" srcset="//www.thehamperboutique.com.au/cdn/shop/articles/top-christmas-gifts-melbourne-unique-and-delightful-options-for-the-festive-season-953874.png?v=1713695306&amp;width=165 165w, //www.thehamperboutique.com.au/cdn/shop/articles/top-christmas-gifts-melbourne-unique-and-delightful-options-for-the-festive-season-953874.png?v=1713695306&amp;width=360 360w, //www.thehamperboutique.com.au/cdn/shop/articles/top-christmas-gifts-melbourne-unique-and-delightful-options-for-the-festive-season-953874.png?v=1713695306&amp;width=535 535w, //www.thehamperboutique.com.au/cdn/shop/articles/top-christmas-gifts-melbourne-unique-and-delightful-options-for-the-festive-season-953874.png?v=1713695306&amp;width=720 720w, //www.thehamperboutique.com.au/cdn/shop/articles/top-christmas-gifts-melbourne-unique-and-delightful-options-for-the-festive-season-953874.png?v=1713695306&amp;width=800 800w, //www.thehamperboutique.com.au/cdn/shop/articles/top-christmas-gifts-melbourne-unique-and-delightful-options-for-the-festive-season-953874.png?v=1713695306&amp;width=940 940w" width="940" height="403" loading="lazy" sizes="
					(min-width: 1100px) 940px, (min-width: 750px) calc((100vw - 40px) / 2), calc((100vw - 20px))
				">`,
    description:
      "TOP CHRISTMAS GIFTS MELBOURNE - UNIQUE AND DELIGHTFUL OPTIONS FOR THE FESTIVE SEASON",
  },
  {
    img: `<img src="//www.thehamperboutique.com.au/cdn/shop/articles/ultimate-guide-to-the-best-christmas-gift-hampers-of-2023-162654.webp?v=1713695307&amp;width=940" alt="Ultimate Guide to the Best Christmas Gift Hampers of 2023 - The Hamper Boutique Co" srcset="//www.thehamperboutique.com.au/cdn/shop/articles/ultimate-guide-to-the-best-christmas-gift-hampers-of-2023-162654.webp?v=1713695307&amp;width=165 165w, //www.thehamperboutique.com.au/cdn/shop/articles/ultimate-guide-to-the-best-christmas-gift-hampers-of-2023-162654.webp?v=1713695307&amp;width=360 360w, //www.thehamperboutique.com.au/cdn/shop/articles/ultimate-guide-to-the-best-christmas-gift-hampers-of-2023-162654.webp?v=1713695307&amp;width=535 535w, //www.thehamperboutique.com.au/cdn/shop/articles/ultimate-guide-to-the-best-christmas-gift-hampers-of-2023-162654.webp?v=1713695307&amp;width=720 720w, //www.thehamperboutique.com.au/cdn/shop/articles/ultimate-guide-to-the-best-christmas-gift-hampers-of-2023-162654.webp?v=1713695307&amp;width=800 800w, //www.thehamperboutique.com.au/cdn/shop/articles/ultimate-guide-to-the-best-christmas-gift-hampers-of-2023-162654.webp?v=1713695307&amp;width=940 940w" width="940" height="537" loading="lazy" sizes="
					(min-width: 1100px) 940px, (min-width: 750px) calc((100vw - 40px) / 2), calc((100vw - 20px))
				">`,
    description: "ULTIMATE GUIDE TO THE BEST CHRISTMAS GIFT HAMPERS OF 2023",
  },
  {
    img: `<img src="//www.thehamperboutique.com.au/cdn/shop/articles/top-corporate-gifts-impress-clients-amp-reward-employees-with-thoughtful-choices-891962.webp?v=1713695309&amp;width=940" alt="Top Corporate Gifts: Impress Clients &amp;amp; Reward Employees with Thoughtful Choices - The Hamper Boutique Co" srcset="//www.thehamperboutique.com.au/cdn/shop/articles/top-corporate-gifts-impress-clients-amp-reward-employees-with-thoughtful-choices-891962.webp?v=1713695309&amp;width=165 165w, //www.thehamperboutique.com.au/cdn/shop/articles/top-corporate-gifts-impress-clients-amp-reward-employees-with-thoughtful-choices-891962.webp?v=1713695309&amp;width=360 360w, //www.thehamperboutique.com.au/cdn/shop/articles/top-corporate-gifts-impress-clients-amp-reward-employees-with-thoughtful-choices-891962.webp?v=1713695309&amp;width=535 535w, //www.thehamperboutique.com.au/cdn/shop/articles/top-corporate-gifts-impress-clients-amp-reward-employees-with-thoughtful-choices-891962.webp?v=1713695309&amp;width=720 720w, //www.thehamperboutique.com.au/cdn/shop/articles/top-corporate-gifts-impress-clients-amp-reward-employees-with-thoughtful-choices-891962.webp?v=1713695309&amp;width=800 800w, //www.thehamperboutique.com.au/cdn/shop/articles/top-corporate-gifts-impress-clients-amp-reward-employees-with-thoughtful-choices-891962.webp?v=1713695309&amp;width=940 940w" width="940" height="537" loading="lazy" sizes="
					(min-width: 1100px) 940px, (min-width: 750px) calc((100vw - 40px) / 2), calc((100vw - 20px))
				">`,
    description:
      "TOP CORPORATE GIFTS: IMPRESS CLIENTS REWARD EMPLOYEES WITH THOUGHTFUL CHOICES",
  },
];

const Article = () => {
  return (
    <div className="container">
      <div className="blogs">
        {cardData.map((item, key) => {
          return <Card key={key} cardItem={item} />;
        })}
      </div>
    </div>
  );
};

export default Article;
