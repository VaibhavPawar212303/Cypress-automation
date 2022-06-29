import { SeleniumGroundPageObject } from "../support/PageModels/seleniumGroundPage";
describe("lambda test test senario", () => {
  //visit the site
  it("visit the lamada test demo site", () => {
    //using the base Url and navigate to the page
    cy.visit("/selenium-playground/input-form-demo");
    cy.wait(3000);
  });
  it("verify the page", () => {
    //check the logo on the page
    SeleniumGroundPageObject.CheckLogo().find("img").should("have.attr", "src");
  });
  //click on the progress and slidebar
  it("click on the progress and slidebar", () => {
    SeleniumGroundPageObject.ClickProSli().click();
  });
  //click on the drag and drop section
  it("click on the drag and drop section", () => {
    SeleniumGroundPageObject.ClickDragDrop().click();
  });
  //verify the slider should have the default have 15
  it("verify the slider should have the default have 15", () => {
    SeleniumGroundPageObject.CheckDefaultval().should("have.value", 15);
  });

  it("Updates the value to 95", () => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    cy.xpath("//div[@class='sp__range sp__range-success']//input").then(
      ($range) => {
        // get the DOM node
        const range = $range[0];
        // set the value manually
        nativeInputValueSetter.call(range, 95);
        // now dispatch the event
        range.dispatchEvent(new Event("change", { value: 95, bubbles: true }));
      }
    );
  });
  //verify the slider to 95
  it("check the value of slider", () => {
    cy.get("#rangeSuccess").should("have.value", 95);
  });
});
