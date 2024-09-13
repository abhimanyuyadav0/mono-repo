import { Box } from '@mui/material';
import './product.css';
import React, { useRef, useState } from 'react';

const ProductItem = () => {
  const prodImgRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);
  const [bgColor, setBgColor] = useState(selectedProduct.themeColor[0].color);

  const changeTheme = (imageSrc, backgroundColor) => {
    if (prodImgRef.current) {
      prodImgRef.current.src = imageSrc;
    }
    setBgColor(backgroundColor);
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    changeTheme(product.themeColor[0].imgUrl, product.themeColor[0].color);
  };

  return (
    <Box>
      <div className="darksoul-layout" style={{ backgroundColor: bgColor }}>
        <div className="top-layout">
          <div className="rect">
            <div className="sq1" style={{ backgroundColor: bgColor }}>
              <img
                src="https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/logo.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <div className="sq2" style={{ backgroundColor: bgColor }}>
              <div className="circle"></div>
            </div>
          </div>

          <div className="navbar">
            <div className="logo"></div>
            <ul>
              <li>MEN</li>
              <li>WOMEN</li>
              <li>KIDS</li>
              <li>OFFER</li>
            </ul>
            <div className="search">
              <div className="search-bar">
                <input type="text" name="search" id="search" placeholder="Search DarkSoul" />
                <div className="img">
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/pastel-glyph/64/737373/search--v2.png"
                    alt="search"
                  />
                </div>
              </div>
              <div className="icon">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/glyph-neue/64/737373/shopping-cart.png"
                  alt="checkout"
                />
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="prod-content">
              <h1>{selectedProduct.name}</h1>
              <p>The New Fashion</p>
              <button className="darksoul-hover-fill-button2" type="button">
                <div className="color-fill-2"></div>
                <p>
                  Add to Collection{" "}
                  <img
                    width="16"
                    height="16"
                    src="https://img.icons8.com/ios/50/hearts--v1.png"
                    alt="hearts"
                  />
                </p>
              </button>
            </div>
            <div className="prod-img">
              <img
                ref={prodImgRef}
                src={selectedProduct.themeColor[0].imgUrl}
                alt="product"
              />
            </div>
            <div className="prod-cost">
              <button className="darksoul-hover-fill-button2" type="button">
                <div className="color-fill-2"></div>
                <p>
                  Add to Cart{" "}
                  <img
                    width="16"
                    height="16"
                    src="https://img.icons8.com/pulsar-line/48/add.png"
                    alt="add"
                  />
                </p>
              </button>
              <p className="cost">50$</p>
            </div>
          </div>
        </div>

        <div className="bottom-layout">
          <img
            src="https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/anime-boy.png"
            alt="anime-boy"
          />
          <div className="carousel">
            {selectedProduct.themeColor.map((theme, index) => (
              <div
                key={index}
                className="card"
                style={{ backgroundImage: `url(${theme.imgUrl})` }}
                onClick={() => changeTheme(theme.imgUrl, theme.color)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ProductItem;
            