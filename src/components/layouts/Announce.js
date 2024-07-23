import React, { Component } from "react";
import AnnounceCard from "../elements/AnnounceCard";
import "../../assets/scss/Announce.scss";
const aboutUsData = [
  {
    title: "The Hamper Boutique Co.",
    description:
      "The Hamper Boutique Co was born out of a love for gifting and the joy of spending time with your family and friends. We wanted to create a unique gift experience that would offer something special for everyone, whatever their budget. From luxurious gift hampers filled with the finest treats to those perfect for every day, we have something for everyone. Our mission is to put joy back into gifting and bring happiness to people’s lives. Whether it’s a birthday, anniversary, Christmas or just because, we will make sure your loved ones feel spoilt.",
    img: "https://www.thehamperboutique.com.au/cdn/shop/files/logo_transparent-1.webp",
  },
  {
    title: "Australian Owned Certified",
    description:
      "We are proud to be certified as an Australian-owned company. Our commitment to offering quality products and services is unparalleled, with our team of dedicated professionals putting the needs of our customers first. We strive to provide exemplary customer service and satisfaction always. Our mission is to foster lasting business relationships with our customers based on mutual respect and trust.",
    img: "https://www.thehamperboutique.com.au/cdn/shop/files/aoc.png",
  },
  {
    title: "Acknowledgement to the Country",
    description:
      "In the spirit of reconciliation, The Hamper Boutique Co acknowledges the Traditional Custodians of the country throughout Australia and their connections to land, sea, and community. We pay our respects to their Elders past, present and emerging and extend that respect to all Aboriginal and Torres Strait Islander peoples today.",
    img: "https://www.thehamperboutique.com.au/cdn/shop/files/Aboriginal_Torres-1.png",
  },
];
const Announce = () => {
  return (
    <div className="announceBackground">
      <div className="container">
        <div className="announce">
          {aboutUsData.map((item, key) => {
            return <AnnounceCard key={key} cardItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Announce;
