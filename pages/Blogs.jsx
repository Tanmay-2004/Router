const Blogs = () => {
    return (
      <div className="products">
        <h1>Our Products</h1>
        <div className="product-list">
          <div className="product">
            <img src="/images/product1.jpg" alt="Product 1" />
            <h2>Product 1</h2>
            <p>$19.99</p>
          </div>
          <div className="product">
            <img src="/images/product2.jpg" alt="Product 2" />
            <h2>Product 2</h2>
            <p>$29.99</p>
          </div>
          <div className="product">
            <img src="/images/product3.jpg" alt="Product 3" />
            <h2>Product 3</h2>
            <p>$39.99</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Blogs;