import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductLinks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box-icon" style={{paddingTop: "30px"}}>
        <div className="container arc-pay-resources">
          <div className="box-icon-container">
            <div className="row align-items-center text-center">
              <div className="col-lg-4">
                <div
                  className="box-icon-item pl-0 pr-0"
                >
                  <img
                    className="lazy"
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/person-chart-icon.png"
                    alt="Travel Agency Payment Best Practices"
                    style={{padding: "10px 0"}}
                  />
                  <div className="box-icon-header">
                    Travel Agency Payment Best Practices
                  </div>
                  <div
                    className="box-icon-copy pl-0 pr-0"
                    
                  >
                    A concise guide with advice, best practices and practical
                    examples for travel payment professionals.
                  </div>
                  <a
                    href="https://www2.arccorp.com/support-training/travel-agency-payment-best-practices/"
                    className="link-download"
                  >
                    Download <i className="fas fa-chevron-down"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-icon-item">
                  <img
                    className="lazy"
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/money-report-icon.png"
                    alt="Chargebacks Best Practices"
                  />
                  <div className="box-icon-header">
                    Chargebacks <br />
                    Best Practices
                  </div>
                  <div className="box-icon-copy">
                    A set of best practices to help travel agencies reduce and
                    mitigate chargebacks.
                  </div>
                  <a
                    target="_blank"
                    href="https://www2.arccorp.com/globalassets/support--training/agency-support/chargeback-best-practices.pdf"
                    className="link-download"
                  >
                    Download <i className="fas fa-chevron-down"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-icon-item p-0">
                  <img
                    className="lazy"
                    data-src="https://www2.arccorp.com/globalassets/products--participation/arc-pay/security-icon.png"
                    alt="Fraud Prevention Practices"
                  />
                  <div className="box-icon-header">Fraud Prevention Practices</div>
                  <div className="box-icon-copy">
                    ARC provides advice, education and tools to help recognize
                    and reduce fraud and mitigate risk.
                  </div>
                  <a
                    href="https://www2.arccorp.com/support-training/fraud-prevention"
                    className="link-download"
                  >
                    Learn More <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductLinks;
