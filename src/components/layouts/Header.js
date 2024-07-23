import React, { useState, useRef, useEffect } from "react";
import "../../assets/scss/Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState(window.innerHeight - 100);
  const [isSigninOpen, setSigninIsOpen] = useState(false);
  const [isSearchinOpen, setSearchinIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setSigninIsOpen(!isSigninOpen);
  };

  const toggleSearchDropdown = () => {
    setSearchinIsOpen(!isSearchinOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarHeight(window.innerHeight - 100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="shopping-header">
      <div className="shopping-title">
        <div className="container">
          <div className="title-contactme">
            <div class="announcement-bar__text">
              <p>
                Gift Hampers from $59 | FREE Delivery Australia Wide |{" "}
                <a
                  href="mailto:hello@thehamperboutique.com.au"
                  title="hello@thehamperboutique.com.au"
                >
                  hello@thehamperboutique.com.au
                </a>{" "}
                |{" "}
                <a href="tel:+61370464648" title="+61 3 7046 4648">
                  +61 3 7046 4648
                </a>
              </p>
            </div>
          </div>
          <div className="title-location">
            <ul>
              <li>
                <a href="../pages/gift-hampers-australia">Australia</a>
              </li>

              <li>
                <a href="/pages/gift-hampers-sydney"> Sydney</a>
              </li>

              <li>
                <a href="/pages/gift-hampers-melbourne"> Melbourne</a>
              </li>

              <li>
                <a href="/pages/gift-hampers-brisbane"> Brisbane</a>
              </li>

              <li>
                <a href="/pages/gift-hampers-perth"> Perth</a>
              </li>

              <li>
                <a href="/pages/gift-hampers-adelaide"> Adelaide</a>
              </li>

              <li>
                <a href="/pages/gift-hampers-hobart"> Hobart</a>
              </li>

              <li>
                <a href="/pages/gift-hampers-canberra" className="not-closet">
                  {" "}
                  Canberra
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shopping-subtitle">
        <div className="container">
          <div className="blog-title">
            <img
              srcset="//www.thehamperboutique.com.au/cdn/shop/files/Sleeve_Side_Design_340_mm_x_90_mm_340_x_90_mm.png?v=1714177264&amp;width=350 1x, //www.thehamperboutique.com.au/cdn/shop/files/Sleeve_Side_Design_340_mm_x_90_mm_340_x_90_mm.png?v=1714177264&amp;width=700 2x"
              src="//www.thehamperboutique.com.au/cdn/shop/files/Sleeve_Side_Design_340_mm_x_90_mm_340_x_90_mm.png?v=1714177264&amp;width=350"
              class="header__heading-logo"
              width="350"
              height="auto"
              alt="The Hamper Boutique Co"
              loading="lazy"
            />
          </div>
          <div className="blog-search-form" ref={dropdownRef}>
            <form class="search-form" onClick={toggleSearchDropdown}>
              <input
                type="text"
                class="search-input"
                placeholder="What are you looking for..."
              />
              <button class="search-button" aria-label="Search">
                <svg
                  class="icon icon-search"
                  viewBox="0 0 20 21"
                  fill="none"
                  width="20px"
                  height="20px"
                >
                  <path
                    d="M15.0252 14.3475L18.5943 17.9158L17.4152 19.095L13.8469 15.5258C12.5191 16.5902 10.8677 17.1691 9.16602 17.1667C5.02602 17.1667 1.66602 13.8067 1.66602 9.66666C1.66602 5.52666 5.02602 2.16666 9.16602 2.16666C13.306 2.16666 16.666 5.52666 16.666 9.66666C16.6684 11.3683 16.0895 13.0198 15.0252 14.3475ZM13.3535 13.7292C14.4111 12.6416 15.0017 11.1837 14.9993 9.66666C14.9993 6.44332 12.3885 3.83332 9.16602 3.83332C5.94268 3.83332 3.33268 6.44332 3.33268 9.66666C3.33268 12.8892 5.94268 15.5 9.16602 15.5C10.683 15.5024 12.1409 14.9118 13.2285 13.8542L13.3535 13.7292Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </form>
            {isSearchinOpen && (
              <div className="search-dropdown-content">
                <div className="upperSearchIcon">
                  <button className="searchfilter">Gift Hampers For Mum</button>
                  <button className="searchfilter">
                    Christmas Gift Hampers
                  </button>
                  <div className="detailSearch">
                    <div className="searchImg">
                      <img src="https://www.thehamperboutique.com.au/cdn/shop/files/the-perfect-pamper-hamper-964101.jpg?v=1713695927&width=150" />
                    </div>
                    <div className="textSearch">
                      <div className="bigSearchText">
                        THE PERFECT PAMPER HAMPER
                      </div>
                      <div className="smallSearchText">$139.00</div>
                    </div>
                  </div>
                  <div className="shopAll">SHOP ALL</div>
                </div>
                <div className="lowerSearchcon">
                  <button className="viewAll">VIEW ALL GIFT HAMPERS</button>
                </div>
              </div>
            )}
          </div>

          <div className="blog-icon-form">
            <div className="blog-user-icon">
              <svg
                onClick={toggleDropdown}
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-account"
                fill="none"
                viewBox="0 0 20 21"
                width="20px"
                height="20px"
              >
                <path
                  d="M10 14.6667C13.0517 14.6667 15.7209 15.9792 17.1725 17.9375L15.6375 18.6633C14.4559 17.2633 12.3725 16.3333 10 16.3333C7.62754 16.3333 5.5442 17.2633 4.36254 18.6633L2.82837 17.9367C4.28004 15.9783 6.94837 14.6667 10 14.6667ZM10 2.16666C11.1051 2.16666 12.1649 2.60564 12.9463 3.38705C13.7277 4.16845 14.1667 5.22825 14.1667 6.33332V8.83332C14.1666 9.90704 13.7521 10.9393 13.0095 11.7148C12.2669 12.4903 11.2536 12.9492 10.1809 12.9958L10 13C8.89497 13 7.83516 12.561 7.05376 11.7796C6.27236 10.9982 5.83337 9.93839 5.83337 8.83332V6.33332C5.83343 5.2596 6.24799 4.22736 6.99059 3.45184C7.73318 2.67633 8.74649 2.21742 9.8192 2.17082L10 2.16666ZM10 3.83332C9.36236 3.83329 8.74877 4.07693 8.28482 4.51439C7.82086 4.95186 7.54161 5.55008 7.5042 6.18666L7.50004 6.33332V8.83332C7.49941 9.48408 7.75255 10.1094 8.20568 10.5765C8.6588 11.0436 9.2762 11.3156 9.92667 11.3347C10.5771 11.3538 11.2094 11.1185 11.6892 10.6788C12.1689 10.2391 12.4583 9.62966 12.4959 8.97999L12.5 8.83332V6.33332C12.5 5.67028 12.2366 5.0344 11.7678 4.56556C11.299 4.09672 10.6631 3.83332 10 3.83332Z"
                  fill="currentColor"
                ></path>
              </svg>
              {isSigninOpen && (
                <div className="dropdown-content">
                  <a href="/sign-in" className="signin">
                    LOG IN
                  </a>
                  <a href="/sign-up" className="signup">
                    Create Acount
                  </a>
                </div>
              )}
            </div>

            <div className="blog-lorry-icon toggle-button" onClick={openNav}>
              <svg
                class="icon icon-cart"
                aria-hidden="true"
                focusable="false"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 21"
                fill="none"
                width="20px"
                height="20px"
              >
                <path
                  d="M3.33341 13.8333V3.83332H1.66675V2.16666H4.16675C4.38776 2.16666 4.59972 2.25445 4.756 2.41073C4.91228 2.56701 5.00008 2.77898 5.00008 2.99999V13H15.3651L17.0317 6.33332H6.66675V4.66666H18.1001C18.2268 4.66666 18.3518 4.69554 18.4656 4.7511C18.5794 4.80667 18.6791 4.88745 18.757 4.98731C18.835 5.08717 18.8891 5.20349 18.9153 5.32741C18.9416 5.45134 18.9392 5.57962 18.9084 5.70249L16.8251 14.0358C16.7799 14.216 16.6759 14.376 16.5294 14.4903C16.383 14.6046 16.2025 14.6667 16.0167 14.6667H4.16675C3.94573 14.6667 3.73377 14.5789 3.57749 14.4226C3.42121 14.2663 3.33341 14.0543 3.33341 13.8333ZM5.00008 19.6667C4.55805 19.6667 4.13413 19.4911 3.82157 19.1785C3.50901 18.8659 3.33341 18.442 3.33341 18C3.33341 17.558 3.50901 17.134 3.82157 16.8215C4.13413 16.5089 4.55805 16.3333 5.00008 16.3333C5.44211 16.3333 5.86603 16.5089 6.17859 16.8215C6.49115 17.134 6.66675 17.558 6.66675 18C6.66675 18.442 6.49115 18.8659 6.17859 19.1785C5.86603 19.4911 5.44211 19.6667 5.00008 19.6667ZM15.0001 19.6667C14.5581 19.6667 14.1341 19.4911 13.8216 19.1785C13.509 18.8659 13.3334 18.442 13.3334 18C13.3334 17.558 13.509 17.134 13.8216 16.8215C14.1341 16.5089 14.5581 16.3333 15.0001 16.3333C15.4421 16.3333 15.866 16.5089 16.1786 16.8215C16.4912 17.134 16.6667 17.558 16.6667 18C16.6667 18.442 16.4912 18.8659 16.1786 19.1785C15.866 19.4911 15.4421 19.6667 15.0001 19.6667Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <nav class="shopping-navigation">
        <div className="container">
          <ul class="nav-list">
            <li>
              <a href="#">HOME</a>
            </li>
            <li class="dropdown">
              <a href="#">GIFT HAMPERS</a>

              <div class="dropdown-content-fullwidth ">
                <button className="view-all-hampers">
                  View all gift
                  <br />
                  hampers
                </button>
                <div class="dropdown-column">
                  <div class="dropdown-title">Shop By Price</div>
                  <ul>
                    <li>
                      <a href="#">Under $100</a>
                    </li>
                    <li>
                      <a href="#">$100-$199</a>
                    </li>
                    <li>
                      <a href="#">$200-$299</a>
                    </li>
                    <li>
                      <a href="#">$300-$399</a>
                    </li>
                    <li>
                      <a href="#">$400 & Above</a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown-column">
                  <div class="dropdown-title">Shop By Products</div>
                  <ul>
                    <li>
                      <a href="#">Champagne</a>
                    </li>
                    <li>
                      <a href="#">Gin</a>
                    </li>
                    <li>
                      <a href="#">Tea</a>
                    </li>
                    <li>
                      <a href="#">Whisky</a>
                    </li>
                    <li>
                      <a href="#">Red Wine</a>
                    </li>
                    <li>
                      <a href="#">White Wine</a>
                    </li>
                    <li>
                      <a href="#">Chocolate</a>
                    </li>
                    <li>
                      <a href="#">Sweet</a>
                    </li>
                    <li>
                      <a href="#">Savoury</a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown-column">
                  <div class="dropdown-title">Shop By Occasion</div>
                  <ul>
                    <li>
                      <a href="#">Anniversary</a>
                    </li>
                    <li>
                      <a href="#">Birthday</a>
                    </li>
                    <li>
                      <a href="#">Christmas</a>
                    </li>
                    <li>
                      <a href="#">House Warming</a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown-column">
                  <div class="dropdown-title">Shop By Recipient</div>
                  <ul>
                    <li>
                      <a href="#">For Mum</a>
                    </li>
                    <li>
                      <a href="#">For Dad</a>
                    </li>
                    <li>
                      <a href="#">For Her</a>
                    </li>
                    <li>
                      <a href="#">For Him</a>
                    </li>
                    <li>
                      <a href="#">For Grandparents</a>
                    </li>
                    <li>
                      <a href="#">For Colleagues</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#">DOING OUR BIT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li class="dropdown">
              <a href="#">ABOUT US</a>
              <div class="dropdown-content">
                <div class="dropdown-column">
                  <ul>
                    <li>
                      <a href="#">Who we are</a>
                    </li>
                    <li>
                      <a href="#">Join the team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div
          id="myNav"
          style={{ height: sidebarHeight }}
          className={`overlay ${isOpen ? "open" : ""}`}
        >
          {" "}
          <div className="sidebarTitle">
            <p className="cartTitle">CART</p>
            <p className="cartSubTitle">0 items</p>
          </div>
          <a href="#" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content">
            <svg
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              class="icon icon-account-order-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_969_7768)">
                <path
                  d="M8.5 32V8H4.5V4H10.5C11.0304 4 11.5391 4.21071 11.9142 4.58579C12.2893 4.96086 12.5 5.46957 12.5 6V30H37.376L41.376 14H16.5V10H43.94C44.244 10 44.544 10.0693 44.8172 10.2027C45.0904 10.336 45.3296 10.5299 45.5167 10.7696C45.7037 11.0092 45.8336 11.2884 45.8966 11.5858C45.9595 11.8832 45.9539 12.1911 45.88 12.486L40.88 32.486C40.7717 32.9185 40.5219 33.3024 40.1704 33.5767C39.8189 33.851 39.3859 34 38.94 34H10.5C9.96957 34 9.46086 33.7893 9.08579 33.4142C8.71071 33.0391 8.5 32.5304 8.5 32V32ZM12.5 46C11.4391 46 10.4217 45.5786 9.67157 44.8284C8.92143 44.0783 8.5 43.0609 8.5 42C8.5 40.9391 8.92143 39.9217 9.67157 39.1716C10.4217 38.4214 11.4391 38 12.5 38C13.5609 38 14.5783 38.4214 15.3284 39.1716C16.0786 39.9217 16.5 40.9391 16.5 42C16.5 43.0609 16.0786 44.0783 15.3284 44.8284C14.5783 45.5786 13.5609 46 12.5 46ZM36.5 46C35.4391 46 34.4217 45.5786 33.6716 44.8284C32.9214 44.0783 32.5 43.0609 32.5 42C32.5 40.9391 32.9214 39.9217 33.6716 39.1716C34.4217 38.4214 35.4391 38 36.5 38C37.5609 38 38.5783 38.4214 39.3284 39.1716C40.0786 39.9217 40.5 40.9391 40.5 42C40.5 43.0609 40.0786 44.0783 39.3284 44.8284C38.5783 45.5786 37.5609 46 36.5 46Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_969_7768">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div class="cart__empty-wrapper">
              <p class="cart__empty-text h4">Your Cart is Empty</p>
            </div>
            <button class="button">
              <span>SHOP NOW </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
