import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="product-quote product-quote-bg fluid lazy"
        id="customers"
        data-bg="https://www2.arccorp.com/globalassets/destination-gateway/dg-quote.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-quote-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex">
                      <div className="product-quote-mark">&ldquo;</div>
                      <div>
                        <div className="product-quote-copy" style={{maxWidth: "575px"}}>
                          I am often confronted with questions such as, ‘How’s
                          the season picking up?’, ‘How are we ranked vs. other
                          competitors?’,or ‘What’s our air service capacity like
                          for the summer?’. I can now confidently showcase our
                          direction and performance based on real-time data
                          monitored and shared via ARC and ForwardKeys.” &rdquo;
                        </div>
                        <div className="product-quote-name">
                          <strong>Miles Mercera</strong>
                          <br />
                          CEO
                          <br />
                          Tourism Corporation Bonaire
                        </div>
                        {/* <a
                          href="https://www2.arccorp.com/products-participation/customer-success-stories"
                          className="ctaBtn ctaBtn--secondaryOnImage"
                        >
                          More Customer Stories
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductQuote;
