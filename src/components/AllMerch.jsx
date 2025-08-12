import React, { useState } from 'react';
import { siteData } from '../data/siteData';

const AllMerch = () => {
  const categories = ['All', 'Shirts', 'Hoodies', 'Tank tops', 'Vinyls', 'Hats/Beanies', 'Flags'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // State to manage the active image for each merch item
  const [activeImageIndex, setActiveImageIndex] = useState({});
  
  const handleNextImage = (merchIndex) => {
    setActiveImageIndex(prev => {
      const currentImageIndex = prev[merchIndex] || 0;
      const totalImages = siteData.merch[merchIndex].image.length;
      return {
        ...prev,
        [merchIndex]: (currentImageIndex + 1) % totalImages,
      };
    });
  };

  const handlePrevImage = (merchIndex) => {
    setActiveImageIndex(prev => {
      const currentImageIndex = prev[merchIndex] || 0;
      const totalImages = siteData.merch[merchIndex].image.length;
      return {
        ...prev,
        [merchIndex]: (currentImageIndex - 1 + totalImages) % totalImages,
      };
    });
  };

  const filteredMerch = selectedCategory === 'All'
    ? siteData.merch
    : siteData.merch.filter(item => item.category === selectedCategory);

  return (
    <section className="all-merch-section">
      <h2 className="section-title">All Merch</h2>
      <div className="merch-page-container">
        <aside className="merch-sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="merch-grid-full">
          {filteredMerch.length > 0 ? (
            filteredMerch.map((item, index) => {
              const currentImageIndex = activeImageIndex[index] || 0;
              const totalImages = item.image.length;

              return (
                <div key={index} className="merch-item-full">
                  <div className="merch-image-container">
                    <img 
                      src={item.image[currentImageIndex]} 
                      alt={item.name} 
                      className="merch-item-image" 
                    />
                    {totalImages > 1 && (
                      <>
                        <button 
                          className="merch-nav-button left" 
                          onClick={() => handlePrevImage(index)}
                        >
                          &#10094;
                        </button>
                        <button 
                          className="merch-nav-button right" 
                          onClick={() => handleNextImage(index)}
                        >
                          &#10095;
                        </button>
                      </>
                    )}
                  </div>
                  <h4 className="merch-item-name">{item.name}</h4>
                  <p className="merch-item-price">{item.price}</p>
                  <p className="merch-placeholder">Sizes: S, M, L, XL</p>
                  <p className="merch-placeholder">Quantity: 0</p>
                  <button className="merch-add-to-cart-full">
                    Add to Cart
                  </button>
                </div>
              );
            })
          ) : (
            <p className="no-items-message">No items found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllMerch;