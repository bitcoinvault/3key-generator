/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import keyGenerator from '../../support/pages/keyGenerator';
import lang from '../../fixtures/languages.json';
import devices from '../../support/devices';

devices.forEach((device) => {
  describe('Generator languages test', () => {
    describe(`Testing on device: ${device.model}`, () => {
      beforeEach(() => {
        cy.viewport(device.width, device.height);
        cy.visit('/');
      });

      describe('Assert language list available', () => {
        it('should get list of all languages available', () => {
          cy.get(keyGenerator.footer.languageButton).click().should('have.attr', lang).should('be.visible');
        });

        it('should change language to Spanish', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Spanish').click();
          cy.contains(lang.Spanish);
        });

        it('should change language to Hindi', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Hindi').click();
          cy.contains(lang.Hindi);
        });

        it('should change language to Japanese', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Japanese').click();
          cy.contains(lang.Japanese);
        });

        it('should change language to Korean', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Korean').click();
          cy.contains(lang.Korean);
        });

        it('should change language to Portuguese', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Portuguese').click();
          cy.contains(lang.Portuguese);
        });

        it('should change language to Chinese', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Chinese').click();
          cy.contains(lang.Chinese);
        });

        it('should change language to Vietnamese', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Vietnamese').click();
          cy.contains(lang.Vietnamese);
        });

        it('should change language to Turkish', () => {
          cy.get(keyGenerator.footer.languageButton).click();
          cy.contains('Turkish').click();
          cy.contains(lang.Turkish);
        });

        it('should assert default language = English', () => {
          cy.contains(lang.English);
        });
      });
    });
  });
});
