import { Box } from '@mui/material';
import './product.css';
import React, { useRef, useState } from 'react';
import ProductItem from './productItem';

const productData = [
  {
    name: 'Puma Shoes',
    themeColor: [
      {
        imgUrl: "https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/black.png",
        color: "rgb(153, 255, 0)"
      },
      {
        imgUrl: "https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/purple.png",
        color: "#a193d9"
      },
      {
        imgUrl: "https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/white.png",
        color: "rgb(243, 243, 243)"
      }
    ]
  },
  {
    name: 'Nike Sneakers',
    themeColor: [
      {
        imgUrl: "https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/red.png",
        color: "#ff4d4d"
      },
      {
        imgUrl: "https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/blue.png",
        color: "#4d4dff"
      },
      {
        imgUrl: "https://darksoul-git.github.io/Interactive%20Carousel%20Design%20for%20Shoes/gray.png",
        color: "#b3b3b3"
      }
    ]
  }
];

const Products = () => {
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
      <div className="product-selector">
        {productData.map((product, index) => (
          <button
            key={index}
            onClick={() => handleProductChange(product)}
          >
            {product.name}
          </button>
        ))}
        <ProductItem data={productData[selected]}/>
      </div>
    </Box>
  );
};

export default Products;