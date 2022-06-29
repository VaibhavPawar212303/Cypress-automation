const entername = "#name";
const enteremail = "#inputEmail4";
const password = "#inputPassword4";
const company = "#company";
const website = "#websitename";
const country = "//select[@name='country']";
const city = "#inputCity";
const InputAdd1 = "#inputAddress1";
const InputAdd2 = "#inputAddress2";
const state = "#inputState";
const Zip = "#inputZip";
const Submit = "//button[@type='submit']";
const msg = "//p[@class='success-msg hidden']";
class FormFill {
  Entername() {
    return cy.get(entername);
  }
  InputEmail() {
    return cy.get(enteremail);
  }
  InputPass() {
    return cy.get(password);
  }
  Company() {
    return cy.get(company);
  }
  website() {
    return cy.get(website);
  }
  country() {
    cy.xpath(country).select("India");
  }
  city() {
    cy.get(city).type("pune");
  }
  InputAdd1() {
    cy.get(InputAdd1).type("Deccan,pune");
  }
  InputAdd2() {
    return cy.get(InputAdd2).type("katraj,pune");
  }
  InputState() {
    return cy.get(state);
  }
  InputZip() {
    return cy.get(Zip);
  }
  SumbitForm() {
    cy.xpath(Submit).click();
  }
  verifymsg() {
    return cy.xpath(msg);
  }
}

export const FormFillObject = new FormFill();
