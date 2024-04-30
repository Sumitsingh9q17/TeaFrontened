import React from 'react';

function ProductCard({ product }) {
    const { name, description, price, image } = product;

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">${price.toFixed(2)}</p>
                {/* Add button or link for more details or purchase */}
            </div>
        </div>
    );
}

export default ProductCard;
