import { useState, useEffect } from 'react';

export default function WomenClothes() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4c7ee56424msh9a906c14ce22bc4p1b8f4cjsnf67d3e25d752',
          'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
      };
  
      fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN', options)
        .then(response => response.json())
        .then(data => {
          const productDetails = data.results.map(item => ({
            name: item.name,
            // price: item.price.map(price => price.value),
            images: item.images.map(img => img.url)
          }));
           setProducts(productDetails);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div className='grid grid-cols-4'>
        {/* Render products here */}
        {products.map((product, productIndex) => (
          <div key={productIndex} >
            
            <h3>{product.name}</h3>
            {/* <div> 
            {product.price.map((price, priceIndex) => (
              <p key={priceIndex}>Price: ${price} </p>
            ))}
            </div> */}
            <div className='w-100 h-full'> 
            {product.images.map((image, imageIndex) => (
              <img key={imageIndex} src={image} alt={`Product ${productIndex} Image ${imageIndex}`} />
           
            ))}
          </div> 
          </div>
        ))}
      </div>
    );
  }