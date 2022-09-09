import React, { Component } from "react";
import Productjumbo from "../components/Productjumbo";
import ProductText from "../components/ProductText";
import Stickynav from "../components/Stickynav";

import LazyLoad from "vanilla-lazyload";
import ProductLinks from "../components/ProductLinks";
import ProductCallout from "../components/ProductCallout";
import ProductQuote from "../components/ProductQuote";
import ProductIcons from "../components/ProductIcons";

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
            { title: "Partnership", url: "#partnership" },
            { title: "How It Works", url: "#howitworks" },
            { title: "Modules", url: "#modules" },
          ]}
        />
        <Productjumbo
          backgroundImage={
            "https://www2.arccorp.com/globalassets/destination-gateway/dg-jumbo.png"
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
              Generate Demand <br />
              for Your Destination
            </>
          }
          subtitle={
            "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth. "
          }
          eyebrow={"Overview"}
        />
        <ProductText
          id="partnership"
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
              <span>ARC and ForwardKeys</span> have partnered to offer a
              customized data intelligence tool for destination marketing
              organizations, tourism boards, and convention and visitors'
              bureaus to help you understand travel to your destinations and
              competing destinations.
            </>
          }
          eyebrow={"Partnership"}
        />

        <div className="bg-color-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <img
                  className="img-fluid"
                  src="https://www2.arccorp.com/globalassets/destination-gateway/dg-graph-1.png?1"
                  alt=""
                />

                <div className="arc-image-subtitle">
                  <div>
                    ARC is recognized as the most reliable and trusted source of
                    air travel data.
                  </div>
                  <a href="#" className="ctaBtn">
                    Let's Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductText
          id="howitworks"
          className="bg-color-black lightgray"
          title={
            <span className="type-color-white">Comprehensive Travel Data</span>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              Destination Gateway receives global air travel data and interest
              in travel from multiple sources. The data are processed and
              presented to users in intuitive graphs and tables in four distinct
              modules. The modules are updated automatically, so customers
              always have the latest information to review, and can easily be
              filtered for comprehensive analysis and reporting.
            </>
          }
          eyebrow={"How It Works"}
        />

        <ProductIcons />

        <ProductText
          id="modules"
          className="bg-color-black lightgray"
          title={
            <span className="type-color-white">
              Tailored Travel Analysis 
            </span>
          }
          subtitleColor={"lightgray"}
          subtitle={
            <>
              The four modules, Performance, Connectivity, Agencies, and Recovery, provide some of the most comprehensive data and travel analyses. 
            </>
          }
          eyebrow={"Modules"}
        />

        <ProductQuote />

        <ProductCallout />
      </div>
    );
  }
}

export default App;
