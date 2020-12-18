import keyGenerator from "../../support/pages/keyGenerator";
import lang from "../../fixtures/languages.json";
import devices from "../../support/devices";

const cyView = require("cy-view");

const urls = ["/"];
const generatorPageTests = cyView(devices);

generatorPageTests(urls, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Assert language list available", () => {
    it("should get list of all languages available", () => {
      cy.get(keyGenerator.languageButton)
        .click()
        .should("have.attr", lang)
        .should("be.visible");
    });

    it("should change language to spanish", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Spanish").click();
      cy.contains(lang.Spanish);
    });

    it("should change language to hindi", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Hindi").click();
      cy.contains(lang.Hindi);
    });

    it("should change language to japanese", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Japanese").click();
      cy.contains(lang.Japanese);
    });

    it("should change language to korean", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Korean").click();
      cy.contains(lang.Korean);
    });

    it("should change language to portuguese", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Portuguese").click();
      cy.contains(lang.Portuguese);
    });

    it("should change language to chinese", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Chinese").click();
      cy.contains(lang.Chinese);
    });

    it("should change language to vietnamese", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Vietnamese").click();
      cy.contains(lang.Vietnamese);
    });

    it("should change language to turkish", () => {
      cy.get(keyGenerator.languageButton).click();
      cy.contains("Turkish").click();
      cy.contains(lang.Turkish);
    });

    it("should assert default language = english", () => {
      cy.contains(lang.English);
    });
  });
});
