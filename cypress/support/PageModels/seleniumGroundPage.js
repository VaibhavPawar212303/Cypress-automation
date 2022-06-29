/// <reference types="cypress" />
//xpath for the page of selenium ground page
const Logo = "//div[@class='tools_logo']";
const ProSli = "//div//p[text()='Progress Bar & Sliders']";
const DragandDrop = "(//li[@class='pt-10'])//a[text()='Drag & Drop Sliders']";
const Defaultval = "#rangeSuccess";
class SeleniumGroundPage {
  //check the logo
  CheckLogo() {
    return cy.xpath(Logo);
  }
  //click on the progress and slidebar
  ClickProSli() {
    return cy.xpath(ProSli);
  }
  //click on the drag and drop
  ClickDragDrop() {
    return cy.xpath(DragandDrop);
  }
  CheckDefaultval() {
    return cy.get(Defaultval);
  }
}

export const SeleniumGroundPageObject = new SeleniumGroundPage();
