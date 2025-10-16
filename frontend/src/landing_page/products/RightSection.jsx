import React from "react";

const RightSection = ({ imageURL, productName, productDesc, learnMore }) => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center gy-5 px-3 px-md-4">
        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start order-2 order-md-1">
          <h3 className="fw-semibold">{productName}</h3>
          <p className="text-muted mt-3">{productDesc}</p>

          {/* Conditional Learn More Link */}
          {learnMore && (
            <div className="my-4">
              <a
                href="#"
                className="text-decoration-none text-primary fw-medium"
              >
                {learnMore}
              </a>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center order-1 order-md-2">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default RightSection;
