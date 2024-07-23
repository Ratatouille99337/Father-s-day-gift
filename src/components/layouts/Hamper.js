import React from "react";
import HamperCard from "../elements/HamperCard.js";
import upcoming from "../../assets/img/upcoming.png";
import intro from "../../assets/img/intro.png";
import whisky from "../../assets/img/whisky.png";
import d from "../../assets/img/4-d.png";
import e from "../../assets/img/4-c.png";
import f from "../../assets/img/4-e.png";
import g from "../../assets/img/5-c.png";
import conclustion from "../../assets/img/7-e.png";
import hamp from "../../assets/img/blog2.png";

import "../../assets/scss/Hamper.scss";

//to display the data... I used multiple arrays.
const hamperData = [
  [
    {
      hamperTitle: "WHEN IS FATHER’S DAY 2024 IN AUSTRALIA?",
      hamperContent:
        "In Australia, Father's Day in 2024 will be celebrated on 1 September, which falls on the first Sunday of September. This special day is dedicated to honouring fathers and father figures for their invaluable contributions to their families and society. It is a time for children and families to express their love, appreciation, and gratitude for the men who have played a significant role in their lives. Traditionally, families may celebrate with various activities, such as giving gifts, organizing family gatherings, or spending quality time together. The first Sunday of September has been a longstanding date for Father's Day in Australia, differing from other countries that celebrate it in June. This unique timing allows Australians to enjoy the festivities as spring approaches, making it a memorable and cherished occasion.",
      hamperImage: upcoming,
    },
  ],
  [
    {
      hamperTitle: "INTRODUCTION",
      hamperContent:
        "Father's Day is just around the corner, and finding the perfect gift for the man who has everything can be a daunting task. But worry not, because The Hamper Boutique Co has got you covered with an array of exquisite Father's Day gift hampers that are sure to make your dad feel extra special. Our carefully curated hampers, ranging from $59 to luxurious options up to $499, are designed to cater to every dad's unique tastes and preferences.",
      hamperImage: intro,
    },
    {
      content:
        "Imagine the look of delight on your father's face as he unwraps a beautifully presented hamper, brimming with premium products sourced exclusively from Australian businesses. Whether your dad is a whiskey connoisseur, a tea enthusiast, or someone who enjoys a mix of sweet and savoury treats, our selection has something for everyone. Each hamper is thoughtfully assembled, ensuring that every item inside is of the highest quality, making it a gift that speaks volumes of your love and appreciation.",
    },
    {
      content:
        "What sets our hampers apart is the level of personalisation we offer. You can customise your gift to perfectly match your dad's interests, adding a personal touch that makes the present even more special. From branded gift boxes to personalised notes, every detail is designed to create a memorable gifting experience.",
    },
    {
      content:
        "At The Hamper Boutique Co, we understand the importance of convenience. That's why we offer free delivery across Australia, ensuring your gift arrives on time and in perfect condition. Our fast order processing and various shipping options mean you can count on us even for last-minute gifting needs.",
    },
    {
      content:
        "This Father's Day, skip the usual socks and ties and opt for a gift that will truly delight your dad. Explore our top 10 Father's Day gift hampers, each meticulously crafted to celebrate and honour the special bond between you and your father. Join us in making this Father's Day unforgettable with a hamper that expresses your heartfelt appreciation in the most delightful way.",
    },
  ],
  [
    {
      hamperTitle:
        "A VARIETY OF CHOICES FOR EVERY DAD: FROM WHISKEY LOVERS TO TEA ENTHUSIASTS",
      hamperContent:
        "Finding the perfect Father's Day gift can be challenging, but at 'The Hamper Boutique Co,' we make it easy with our diverse range of hampers tailored to suit every dad's unique tastes and interests. Whether your father is a whiskey aficionado, a tea lover, a gourmet snack enthusiast, or someone who enjoys a fine glass of wine, we have something special just for him. Each hamper is thoughtfully curated to ensure a memorable and delightful experience, filled with premium products sourced from the best Australian businesses. This Father's Day, show your dad how much you appreciate him with a gift that reflects his passions and brings joy to his day.",
      hamperImage: whisky,
    },
    {
      title: "HAMPERS FOR WHISKEY CONNOISSEURS",
      content:
        "For the dad who appreciates the finer things in life, our whiskey hampers are a perfect choice. Each hamper includes a premium selection of Australian whiskies paired with gourmet snacks that complement the rich flavours. Whether it's a single malt or a blended whiskey, your dad will enjoy every sip, especially when accompanied by artisanal nuts, chocolates, and other delectable treats.",
    },
    {
      title: "TEA LOVER'S DELIGHT",
      content:
        "If your father enjoys a relaxing cup of tea, our tea lover’s hampers are sure to impress. These hampers feature a variety of high-quality teas from across Australia, along with beautiful teapots, cups, and sweet accompaniments like biscuits and honey. Each tea is selected to provide a soothing and enjoyable experience, perfect for those peaceful moments of relaxation.",
    },
    {
      title: "GOURMET SNACK EXTRAVAGANZA",
      content:
        "For dads who love a mix of flavours, our gourmet snack hampers offer an exciting variety. These hampers include a delicious assortment of sweet and savoury treats, from premium chocolates to artisanal crackers and dips. Each item is carefully chosen to provide a delightful tasting experience, ensuring there’s something for every mood and occasion.",
    },
    {
      title: "WINE ENTHUSIAST’S PARADISE",
      content:
        "Our wine hampers are a great choice for dads who enjoy a good glass of wine. Each hamper includes a selection of fine Australian wines, from robust reds to crisp whites. Accompanied by gourmet snacks that pair perfectly with the wines, these hampers offer a sophisticated and enjoyable gift that any wine enthusiast will appreciate.",
    },
    {
      title: "BEER LOVER’S BUNDLE",
      content:
        "For the dad who loves to unwind with a cold beer, our beer lover’s hampers are the perfect gift. These hampers feature a selection of craft beers from some of Australia’s best breweries, along with savoury snacks that complement the brews. Each beer is chosen for its unique flavour and quality, making this hamper a refreshing and enjoyable gift.",
    },
  ],
  [
    {
      hamperTitle:
        "PERSONALISE YOUR GIFT: CUSTOMISABLE HAMPERS TO SHOW YOUR THOUGHTFULNESS",
      hamperContent:
        "There's something truly special about a personalised gift. It shows the recipient that you've put thought and effort into selecting something uniquely suited to their tastes and preferences. At 'The Hamper Boutique Co,' we offer a range of customisable hampers that allow you to tailor your Father's Day gift to perfectly match your dad's interests. With options to choose the contents, add personalised messages, and select special packaging, our customisable hampers ensure that your gift is as unique as your dad. This Father's Day, go beyond the ordinary and create a one-of-a-kind hamper that your father will cherish.",
      hamperImage: d,
    },
    {
      title: "CUSTOMISING CONTENTS",
      content:
        "One of the most exciting aspects of our customisable hampers is the ability to handpick the items included. Whether your dad loves gourmet snacks, fine wines, or luxurious self-care products, you can select each item to create a hamper that perfectly suits his tastes. This personalised touch ensures that every component of the gift is something he'll truly enjoy.",
    },
    {
      title: "ADDING PERSONAL MESSAGES",
      content:
        "A heartfelt message can make a world of difference. Our customisable hampers include the option to add a personalised note, allowing you to express your appreciation and love in your own words. This simple yet meaningful addition transforms your gift into a memorable keepsake that your dad will treasure.",
    },
    {
      title: "SPECIAL PACKAGING OPTIONS",
      content:
        "Presentation matters, and our customisable hampers offer a variety of packaging options to enhance the gifting experience. Choose from elegant gift boxes, branded ribbons, and other special touches that reflect your dad's personality and style. These details make the unwrapping experience as special as the contents themselves.",
    },
    {
      title: "CORPORATE CUSTOMISATION",
      content:
        "For businesses looking to celebrate Father's Day with their employees or clients, our hampers can be customised with corporate branding. Incorporate your company logo, colours, and messages to create a professional and memorable gift that aligns with your brand identity. This option is perfect for showing appreciation in a corporate setting.",
    },
    {
      title: "EASY CUSTOMISATION PROCESS",
      content:
        "Creating a personalised hamper is simple and enjoyable with our user-friendly customisation process. Select your items, choose your packaging, add your personal message, and leave the rest to us. Our team will carefully assemble the hamper to your specifications, ensuring that every detail is perfect. This Father's Day, make your gift truly special with a customisable hamper from The Hamper Boutique Co.",
    },
  ],
  [
    {
      hamperTitle:
        "PREMIUM PRODUCTS AND LOCAL DELICACIES: ONLY THE BEST FOR YOUR FATHER",
      hamperContent:
        "Quality is at the heart of everything we do at The Hamper Boutique Co. We are committed to providing only the finest products in our hampers, all sourced from reputable Australian businesses. This Father's Day, treat your dad to a selection of premium items and local delicacies that showcase the best of what Australia has to offer. From gourmet foods to luxurious self-care products, our hampers are filled with items that reflect excellence and craftsmanship. Celebrate your dad with a gift that embodies quality and supports local artisans.",
      hamperImage: e,
    },
    {
      title: "GOURMET FOOD SELECTION",
      content:
        "Our hampers feature an exquisite selection of gourmet foods, including artisanal cheeses, gourmet crackers, and premium chocolates. Each item is carefully chosen for its quality and flavour, ensuring that your dad enjoys a culinary experience like no other. These gourmet delights are perfect for indulging in a special moment or sharing with loved ones.",
    },
    {
      title: "FINE BEVERAGES",
      content:
        "For the dad who appreciates a good drink, our hampers include a range of fine beverages. From robust red wines and crisp white wines to craft beers and premium spirits, each drink is selected for its exceptional quality. Pair these beverages with gourmet snacks for a truly sophisticated gift that your father will savour.",
    },
    {
      title: "LUXURIOUS SELF-CARE PRODUCTS",
      content:
        "Our commitment to quality extends beyond food and drink. Our hampers also include luxurious self-care products such as high-quality hand creams, soothing bath salts, and elegant grooming items. These products provide a touch of luxury and relaxation, allowing your dad to unwind and pamper himself.",
    },
    {
      title: "SUPPORTING LOCAL BUSINESSES",
      content:
        "We take pride in sourcing all our products from local Australian businesses. By choosing our hampers, you are not only giving a high-quality gift but also supporting local artisans and entrepreneurs. This commitment to local sourcing ensures that your gift is filled with unique, high-quality items that reflect the best of Australian craftsmanship.",
    },
    {
      title: "BEAUTIFUL PRESENTATION",
      content:
        "Every hamper from The Hamper Boutique Co. is beautifully packaged to enhance the gifting experience. We use elegant gift boxes, eco-friendly materials, and stylish ribbons to ensure that your gift looks as good as it tastes. The attention to detail in our presentation adds an extra layer of thoughtfulness, making your gift truly special.",
    },
  ],
  [
    {
      hamperTitle: "CONVENIENT AND HASSLE-FREE: FREE DELIVERY ACROSS AUSTRALIA",
      hamperContent:
        "At The Hamper Boutique Co, we understand that convenience is crucial when it comes to gifting. That’s why we offer free delivery across Australia, ensuring that your Father's Day gift arrives on time and in perfect condition. Our commitment to hassle-free service means you can focus on celebrating the special day without any worries. With fast order processing and a variety of shipping options, we make it easy to give a thoughtful and timely gift. Let us handle the logistics while you enjoy the joy of giving.",
      hamperImage: f,
    },
    {
      title: "FAST ORDER PROCESSING",
      content:
        "We know that life can get busy, and sometimes you need a last-minute gift. Our efficient order processing system ensures that your hamper is prepared and shipped within 24 hours of placement. This quick turnaround time means you can count on us, even for those last-minute gifting needs.",
    },
    {
      title: "FREE STANDARD DELIVERY",
      content:
        "Our free standard delivery service covers all of Australia, making it easy and affordable to send a gift to any location. Whether your dad lives in a bustling city or a quiet rural area, our reliable delivery service ensures that his hamper arrives safely and on time.",
    },
    {
      title: "EXPRESS SHIPPING OPTIONS",
      content:
        "For those urgent occasions when you need your gift to arrive even sooner, we offer express shipping options. This service guarantees faster delivery, perfect for when you’re running short on time or want to ensure your gift arrives by a specific date. Choose express shipping for peace of mind and timely arrival.",
    },
    {
      title: "EASY ONLINE ORDERING",
      content:
        "Our user-friendly website makes it simple to browse our extensive range of hampers, select your favourite, and place your order. Detailed product descriptions and high-quality images help you make an informed choice, ensuring that you pick the perfect hamper for your dad. The seamless online experience makes gifting effortless.",
    },
    {
      title: "EXCEPTIONAL CUSTOMER SERVICE",
      content:
        "We pride ourselves on providing exceptional customer service. Our friendly and knowledgeable team is available via email, phone, or live chat to assist with any questions or special requests. Whether you need help selecting a hamper or want to personalise your gift, we’re here to ensure a seamless and enjoyable experience. This Father's Day, enjoy the convenience of hassle-free gifting with The Hamper Boutique Co.",
    },
  ],
  [
    {
      hamperTitle:
        "HOW TO SELECT THE PERFECT HAMPER: TIPS FOR MATCHING YOUR DAD’S INTERESTS",
      hamperContent:
        "Selecting the perfect Father's Day gift can be a challenge, but with a little thought and consideration, you can choose a hamper that perfectly matches your dad's interests and tastes. At The Hamper Boutique Co, we offer a wide range of hampers designed to cater to various preferences, making it easier than ever to find the ideal gift. Here are some tips to help you select the perfect hamper for your father.",
      hamperImage: g,
    },
    {
      title: "KNOW HIS PREFERENCES",
      content:
        "Start by considering your dad's likes and dislikes. Does he enjoy fine wines, craft beers, or perhaps a good whiskey? Is he a fan of gourmet snacks, chocolates, or savoury treats? Knowing his preferences will help you narrow down the options and choose a hamper filled with items he'll truly appreciate.",
    },
    {
      title: "CONSIDER HIS HOBBIES AND INTERESTS",
      content:
        "Think about your dad's hobbies and interests. If he's a tea enthusiast, a hamper with a selection of premium teas and accompanying treats would be perfect. For the dad who loves to cook, consider a hamper with gourmet ingredients, kitchen gadgets, or BBQ accessories. Tailoring the gift to his interests shows thoughtfulness and effort.",
    },
    {
      title: "LOOK FOR QUALITY",
      content:
        "Ensure that the hamper you choose contains high-quality products. At The Hamper Boutique Co, we pride ourselves on sourcing only the finest items from local Australian businesses. This commitment to quality ensures that your dad receives a gift that not only looks impressive but also provides a memorable experience.",
    },
    {
      title: "PERSONALISE THE GIFT",
      content:
        "Adding a personal touch can make a big difference. Opt for hampers that offer customisation options, such as personalised notes, branded gift boxes, or specific product selections. A personalised message or a special addition that reflects your dad's personality will make the gift even more meaningful.",
    },
    {
      title: "THINK ABOUT PRESENTATION",
      content:
        "The presentation of the hamper is just as important as its contents. Choose a hamper that is beautifully packaged, with elegant gift boxes and ribbons. A well-presented hamper enhances the unwrapping experience and makes the gift feel extra special. At The Hamper Boutique Co, we ensure that every hamper is presented beautifully to make a lasting impression.",
    },
  ],
  [
    {
      hamperTitle: "CONCLUSION",
      hamperContent:
        "Father's Day is a special occasion to celebrate and honour the man who has been a guiding force, a source of wisdom, and a steadfast supporter. At The Hamper Boutique Co, we understand the importance of finding the perfect gift to show your appreciation for all that your dad has done. Our extensive range of gift hampers offers something for every type of dad, ensuring that you can find a gift that truly resonates with his unique tastes and interests.",
      hamperImage: conclustion,
      hamperId: "1-a",
    },
    {
      title: "DIVERSE RANGE OF OPTIONS",
      content:
        "From whiskey connoisseurs and tea enthusiasts to gourmet snack lovers and wine aficionados, our hampers are thoughtfully curated to provide a memorable and delightful experience. Each hamper is filled with premium products sourced from top Australian businesses, reflecting our commitment to quality and local craftsmanship. Whether you choose a pre-designed hamper or opt to customise your own, you can be confident that your gift will be received with joy and appreciation.",
    },
    {
      title: "PERSONALISED AND CONVENIENT SERVICE",
      content:
        "Personalisation is at the heart of what we do. Our customisable hampers allow you to tailor your gift to perfectly match your dad's preferences, adding a personal touch that makes it even more special. The ability to select the contents, add personalised messages, and choose special packaging options ensures that your gift is as unique as your dad. Convenience and reliability are also key aspects of our service. With free delivery across Australia and fast order processing, you can rest assured that your gift will arrive on time and in perfect condition. Our user-friendly website and exceptional customer service make the entire gifting process seamless and enjoyable, allowing you to focus on celebrating the special day.",
    },
    {
      content:
        "As you celebrate Father's Day, let The Hamper Boutique Co be your partner in creating lasting memories. Our gift hampers are designed to bring joy and happiness, reflecting the love and gratitude you feel for your dad. With a wide variety of choices, premium quality products, and the ability to personalise your gift, you can make this Father's Day truly unforgettable.",
    },
    {
      content:
        "This year, skip the usual gifts and surprise your dad with a hamper that shows just how much you care. Explore our top 10 Father's Day gift hampers, each meticulously crafted to celebrate the special bond between you and your father. Join us in making this Father's Day a day to remember with a gift that expresses your heartfelt appreciation in the most delightful way. Trust The Hamper Boutique Co to deliver a gift that will leave a lasting impression and make your dad's day extra special.",
    },
    {
      title: "THINK ABOUT PRESENTATION",
      content:
        "The presentation of the hamper is just as important as its contents. Choose a hamper that is beautifully packaged, with elegant gift boxes and ribbons. A well-presented hamper enhances the unwrapping experience and makes the gift feel extra special. At The Hamper Boutique Co, we ensure that every hamper is presented beautifully to make a lasting impression.",
    },
  ],
  [
    {
      hamperTitle: "ABOUT THE HAMPER BOUTIQUE CO",
      hamperContent:
        "'The Hamper Boutique Co' specialises in providing customisable gift hampers for both corporate events and personal celebrations. Our diverse range of hampers, priced between $59 and $499, ensures that there is something for every budget and occasion. Each hamper is carefully curated with a selection of premium products, including champagne, white and red wine, whisky, gin, tea, sweet and savoury items, chocolates, and self-care products.",
      hamperImage: hamp,
    },
    {
      title: "CORPORATE GIFTING EXPERTS",
      content:
        "One of the key highlights of our service is our focus on corporate clients. We offer tailor-made hampers that can be customised to any budget, occasion, or recipient, making them perfect for corporate gatherings, client appreciation, and employee rewards. Our extensive customisation options, such as branded gift boxes, ribbons, and personalised notes, ensure that each hamper aligns with corporate identities, event themes, or personal messages, enhancing recipient satisfaction and creating a memorable gifting experience.",
    },
    {
      title: "EXTENSIVE PRODUCT RANGE",
      content:
        "Our product range includes an impressive variety of items, from homeware and gourmet snacks to luxurious self-care products. However, we do not sell fresh produce like flowers, fruit, or cheese, ensuring that all our products have a longer shelf life and are suitable for various gifting occasions. We are committed to convenience, offering free delivery across Australia, fast order processing within 24 hours of placement, and various shipping options to accommodate urgent needs.",
    },
    {
      title: "COMMITMENT TO QUALITY AND SUSTAINABILITY",
      content:
        "Our operations are based in Melbourne, ensuring swift delivery and reliable service across Australia. As a 100% Australian-owned company, we are dedicated to supporting local businesses and communities. We source all our products from Australian businesses, contributing to the growth and success of our local economy. Our commitment to quality means we select only the finest products, ensuring each hamper is filled with premium items. In addition to providing high-quality gift hampers, we are also committed to sustainability.",
    },
    {
      content:
        "This year, skip the usual gifts and surprise your dad with a hamper that shows just how much you care. Explore our top 10 Father's Day gift hampers, each meticulously crafted to celebrate the special bond between you and your father. Join us in making this Father's Day a day to remember with a gift that expresses your heartfelt appreciation in the most delightful way. Trust The Hamper Boutique Co to deliver a gift that will leave a lasting impression and make your dad's day extra special.",
    },
    {
      content:
        "Whether you are selecting a gift for a personal celebration or a corporate event, The Hamper Boutique Co ensures a delightful and hassle-free experience from start to finish. With over 300 items across our range of hampers, you are sure to find the perfect gift for any occasion. Our numerous 5-star product and service reviews speak for themselves, showcasing our dedication to exceptional quality and customer satisfaction.",
    },
  ],
];

const Hamper = () => {
  return (
    <div className="container">
      <div className="hampergroup">
        {hamperData.map((dataSet, index) => (
          <div className="hamper" key={index} id={index + 1}>
            <div className="hamper-title">
              <div className="hamperDescription">
                <h1>{dataSet[0].hamperTitle}</h1>
                <h4>{dataSet[0].hamperContent}</h4>
              </div>
              <div className="hamperLogo">
                <img src={dataSet[0].hamperImage} alt="Google Logo" />
              </div>
            </div>
            <div className="hamper-content">
              {dataSet.slice(1).map((item, key) => (
                <HamperCard key={key} hampercardItem={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hamper;
