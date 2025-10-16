import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
}) => {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center gy-5 px-3 px-md-4">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h3 className="fw-semibold">{productName}</h3>
          <p className="text-muted mt-3">{productDesc}</p>

          {/* Conditional Demo & Learn Links */}
          {(tryDemo || learnMore) && (
            <div className="d-flex justify-content-center justify-content-md-start gap-4 my-4 flex-wrap">
              {tryDemo && (
                <a
                  href="#"
                  className="text-decoration-none text-primary fw-medium"
                >
                  {tryDemo}
                </a>
              )}
              {learnMore && (
                <a
                  href="#"
                  className="text-decoration-none text-primary fw-medium"
                >
                  {learnMore}
                </a>
              )}
            </div>
          )}

          {/* App Store Links */}
          <div className="d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
            <a href="#">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
            <a href="#">
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
