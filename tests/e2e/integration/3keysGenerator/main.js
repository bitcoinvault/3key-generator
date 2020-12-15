import keyGenerator from '../../support/pages/keyGenerator';
import devices from '../../support/devices';

const cyView = require('cy-view');

const urls = [Cypress.env('bitcoinvault'), Cypress.env('cloudbestenv')];
const generatorPageTests = cyView(devices);

generatorPageTests(urls, () => {
  describe('Generator server status check', () => {
    it('should assert status = OK', () => {
      cy.request('urls').should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  describe('Generator page test - main', () => {
    it(`should display phrases and buttons`, () => {
      cy.get(keyGenerator.header)
        .should('be.visible')
        .get(keyGenerator.logo)
        .should('be.visible')
        .get(keyGenerator.title)
        .should('be.visible')
        .get(keyGenerator.phrase)
        .should('be.visible')
        .get(keyGenerator.qrPublicKey)
        .should('be.visible')
        .get(keyGenerator.qrPrivateKey)
        .should('be.visible')
        .get(keyGenerator.multiline)
        .invoke('val')
        .should('have.length', 130)
        .get(keyGenerator.getNewKeyButton)
        .should('be.visible')
        .get(keyGenerator.exportPdfButton)
        .should('be.visible');
    });
  });

  describe('Generating new keys', () => {
    it('should generate new multiline phrase', () => {
      cy.get(keyGenerator.multiline)
        .invoke('val')
        .then(($multiline) => {
          const val = $multiline;
          cy.get(keyGenerator.getNewKeyButton).click();
          cy.get(keyGenerator.multiline)
            .invoke('val')
            .should(($multiline2) => {
              expect($multiline2).not.to.eq(val);
            });
        });
    });

    it('should generate new private phrases', () => {
      cy.get(keyGenerator.phrase)
        .invoke('text')
        .then(($phrase) => {
          const val = $phrase;
          cy.get(keyGenerator.getNewKeyButton).click();
          cy.get(keyGenerator.phrase)
            .invoke('text')
            .should(($phrase2) => {
              expect($phrase2).not.to.eq(val);
            });
        });
    });

    it('should generate new private QR code', () => {
      cy.get(keyGenerator.qrPrivateKey)
        .invoke('attr', 'src')
        .then(($src) => {
          const val = $src;
          cy.get(keyGenerator.getNewKeyButton).click();
          cy.get(keyGenerator.qrPrivateKey).should(($src2) => {
            expect($src2).not.to.eq(val);
          });
        });
    });

    it('should generate new public QR code', () => {
      cy.get(keyGenerator.qrPublicKey)
        .invoke('attr', 'src')
        .then(($src) => {
          const val = $src;
          cy.get(keyGenerator.getNewKeyButton).click();
          cy.get(keyGenerator.qrPublicKey)
            .invoke('attr', 'src')
            .should(($src2) => {
              expect($src2).not.to.eq(val);
            });
        });
    });
  });
});
