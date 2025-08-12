import React from 'react';
import { siteData } from '../data/siteData';

const MerchPreview = () => {
  const previewItems = siteData.merch.slice(0, 4); // Display only the first 4 items

  return (
    <section id="merch" className="merch-section">
      <h2 className="section-title">Merchandise</h2>
      <div className="merch-grid">
        {previewItems.map((item, index) => (
          <div 
            key={index} 
            className="merch-item"
          >
            <img 
              src={item.image[0]} 
              alt={item.name} 
              className="merch-item-image" 
            />
            <h3 className="merch-item-name">{item.name}</h3>
            <p className="merch-item-price">{item.price}</p>
            <button className="merch-add-to-cart">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchPreview;