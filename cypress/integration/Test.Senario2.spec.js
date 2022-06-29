/// < reference types="cypress" />
//import the class

import { FormFillObject } from "../support/PageModels/FillForm";

describe("visit the site and use light house plugin", function () {
  it("visit the site and use light house plugin", () => {
    //wait till the page load
    cy.wait(3000);
    //visit the site
    cy.visit("selenium-playground/input-form-demo");
    //inject the axe
    cy.injectAxe();
    //use the view port
    //cy.viewport(414, 846);
    cy.viewport("samsung-note9");
    cy.wait(4000);
    //some thresholds for the lighthouse
    const customThresholds = {
      performance: 50,
      accessibility: 50,
      seo: 70,
      "first-contentful-paint": 2000,
      "largest-contentful-paint": 3000,
      "cumulative-layout-shift": 0.1,
      "total-blocking-time": 500,
    };
    //use of the lighthouse plugin
    cy.lighthouse(customThresholds);

    //check the accessibility of the form
    cy.checkA11y();
  });
});

describe("fill the form", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  //fill  the form
  it("fill the input box", function () {
    //input in the name field
    FormFillObject.Entername().type(this.data.Name);
    //input the email
    FormFillObject.InputEmail().type(this.data.Email);
    //input the pass
    FormFillObject.InputPass().type(this.data.password);
    //input company
    FormFillObject.Company().type(this.data.companyName);
    //input website
    FormFillObject.website().type(this.data.companywebsite);
    //select the country
    FormFillObject.country();
    //select the city
    FormFillObject.city();
    // //address 1
    FormFillObject.InputAdd1();
    //address 2
    FormFillObject.InputAdd2();
    //state
    FormFillObject.InputState().type(this.data.state);
    //state
    FormFillObject.InputZip().type(this.data.Zip);
    //submit the form
    FormFillObject.SumbitForm();
  });

  it("verifying the message", () => {
    FormFillObject.verifymsg().should(
      "be.visible",
      "Thanks for contacting us, we will get back to you shortly."
    );
  });
});
