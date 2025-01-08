import React from 'react';

const ProductCard = () => {
 
    const products = [
        {
          id: 1,
          name: "Milk",
          priceRange: "Rs 40.00",
          Quantity:"1L",
          image: "https://images.assetsdelivery.com/compings_v2/alterphoto/alterphoto1705/alterphoto170500099.jpg",
          buttonText: "Add to cart",
          sale: false,
          rating: null,
        },
        {
          id: 2,
          name: "Egg",
          price: "Rs 70.00",
          Quantity:"10nos",
          image: "https://t3.ftcdn.net/jpg/05/33/18/08/360_F_533180872_9yvcEmE7rJ9TKQeuGZlghtcmN1tn291q.jpg",
          buttonText: "Add to cart",
          sale: true,
          rating: null,
        },
        {
          id: 3,
          name: "Meat",
          price: "Rs 375.00",
          Quantity:"1Kg",
          // oldPrice: "$50.00",
          image: "https://i0.wp.com/fresheddy.com/wp-content/uploads/2021/08/104946109-raw-beef-meat-fresh-sliced-beef-sirloin.jpg?fit=450%2C300&ssl=1",
          buttonText: "Add to cart",
          sale: true,
          rating: null,
        },
        {
          id: 4,
          name: "Fish",
          price: "Rs 200.00",
          Quantity:"1Kg",
          image: "https://t3.ftcdn.net/jpg/08/99/06/44/360_F_899064472_QLtEfwguym1OBB85Guwlhf1hsYrEY49o.jpg",
          buttonText: "Add to cart",
          sale: false,
          rating: null,
        },
        {
          id: 5,
          name: "Tomato",
          Quantity:"1Kg",
          priceRange: "Rs 60.00",
          image: "https://img.freepik.com/premium-photo/tomato-basket_219717-5366.jpg",
          buttonText: "View options",
          sale: false,
          rating: null,
        },
        {
            id: 6,
            name: "Mango",
            priceRange: "Rs 200.00",
            Quantity:"1Kg",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq73Hoa2hIpYjmQbgniE8NRdf94PcDxYlGQg&s",
            buttonText: "View options",
            sale: false,
            rating: null,
          },
      ];
    
      // const renderStars = (rating) => {  *(*******************RATING/////////)
      //   return (
      //     <div className="d-flex justify-content-center small text-warning mb-2">
      //       {[...Array(rating)].map((_, index) => (
      //         <div key={index} className="bi-star-fill"></div>
      //       ))}
      //     </div>
      //   );
      // };
  return (
    <div className="container px-8 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col mb-5">
            <div className="card h-100">
              {/* Sale Badge */}
              {product.sale && (
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                 
              )}
              {/* Product Image */}
              <img
                className="card-img-top"
                src={product.image}
                alt={product.name}
              />
              {/* Product Details */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product Name */}
                  <h5 className="fw-bolder">{product.name}</h5>
                  {/* Quantity */}
                  <h5 >{product.Quantity}</h5>
                  {/* Product Rating */}
                  {product.rating && renderStars(product.rating)}
                  {/* Product Price */}
                  {product.oldPrice ? (
                    <>
                      <span className="text-muted text-decoration-line-through">
                        {product.oldPrice}
                      </span>{" "}
                      {product.price}
                    </>
                  ) : (
                    product.priceRange || product.price
                  )}
                </div>
              </div>
              {/* Product Actions */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button className="btn btn-outline-dark mt-auto">
                    {product.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
