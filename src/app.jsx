import React, { Component } from "react";
import Productjumbo from "../components/Productjumbo";
import ProductText from "../components/ProductText";
import Stickynav from "../components/Stickynav";

import LazyLoad from "vanilla-lazyload";
import ProductLinks from "../components/ProductLinks";
import ProductCallout from "../components/ProductCallout";
import ProductQuote from "../components/ProductQuote";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    return (
      <div id="top" className="arc-dg-page">
        <Stickynav
          title={"Desination Gateway"}
          links={[
            { title: "Overview", url: "#overview" },
            { title: "How It Works", url: "#howitworks" },
          ]}
        />
        <Productjumbo
          backgroundImage={
            "https://www2.arccorp.com/globalassets/products--participation/arc-pay/arc-pay-jumbo-3.png"
          }
          title={
            <>
              Insights to Grow
              <br /> Desinations
            </>
          }
          subtitle={
            <>
              <span>
                You are selling more than a location; you are creating an
                experience.
              </span>{" "}
              Appeal to more visitors by incorporating travel data insights into
              your destination management and marketing strategies.
            </>
          }
          ctaLink={"https://www2.arccorp.com"}
        />
        <ProductText
          id="overview"
          className="bg-color-white"
          title={
            <>
              Generate demand <br />
              for your destination.{" "}
            </>
          }
          subtitle={
            "Global air travel data and interest in travel are sourced by ARC and ForwardKeys from multiple sources, including airline ticketing, flight search and schedules data. The data are analyzed and presented to users in intuitive graphs and tables. Destination Gateway’s four modules are updated automatically so you always have the latest information. Most graphs and tables are updated weekly, and some display data by month."
          }
          eyebrow={"Overview"}
        />
        <ProductText
          id="overview"
          className="bg-color-black lightgray"
          title={
            <span className="type-color-white">
              International and Cross-
              <br />
              Functional Collaboration
            </span>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              A Collaboration between <span>ARC and ForwardKeys</span>{" "}
              Destination Gateway is built for managers, marketers and
              researchers in destination marketing organizations and conventions
              and visitors bureaus.
            </>
          }
          eyebrow={"Overview"}
        />

        <div className="bg-color-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/destination-gateway/dg-graph-1.png"
                  alt=""
                />

                <div className="arc-image-subtitle">
                  ARC is the only company in the US authorized to settle
                  transactions between airlines and travel agencies and is
                  widely recognized as the most reliable and trusted source of
                  air travel data.
                </div>

                <div className="arc-image-disclaimer">
                  Our data comes from travel agencies and direct from more than
                  100 major airlines. Travel agency information is only
                  available in Destination Gateway. All future travel ticketed
                  through agencies (actual ticketed data) are available.
                  Frequent updates mean you’re always working with the most
                  current data available.
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductText
          id="howitworks"
          className="bg-color-black lightgray"
          title={
            <span className="type-color-white">
              Air travel data and interest, <br />
              taken from multiple sources.
            </span>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              Global air travel data and interest in travel are sourced by ARC
              and ForwardKeys from multiple sources, including airline
              ticketing, flight search and schedules data. The data are analyzed
              and presented to users in intuitive graphs and tables. Destination
              Gateway’s four modules are updated automatically so you always
              have the latest information. Most graphs and tables are updated
              weekly, and some display data by month.
            </>
          }
          eyebrow={"How It Works"}
        />

        <ProductText
          id="overview"
          className="bg-color-fog lightgray"
          title={
            <>
              The most comprehensive <br />
              data and travel analysis
            </>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              Choose the module that best meets your needs. Subscriptions can
              include one or all of them. When accessed together, they provide
              the most comprehensive data and travel analysis available.
            </>
          }
          eyebrow={"Overview"}
        />

        <ProductQuote />

        <ProductCallout />

        <ProductLinks />
      </div>
    );
  }
}

export default App;
