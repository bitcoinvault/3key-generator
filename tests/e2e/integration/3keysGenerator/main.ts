/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import keyGenerator from '../../support/pages/keyGenerator';
import devices from '../../support/devices';

devices.forEach((device) => {
  describe('Generator main test', () => {
    describe(`Testing on device: ${device.model}`, () => {
      beforeEach(() => {
        cy.viewport(device.width, device.height);
        cy.visit('/');
      });

      describe('Generator server status check', () => {
        it('should assert status = OK', () => {
          cy.request('/').should((response) => {
            expect(response.status).to.eq(200);
          });
        });
      });

      describe('Generator page test - main', () => {
        it(`should display phrases and buttons`, () => {
          cy.get(keyGenerator.header.title)
            .should('be.visible')
            .get(keyGenerator.header.logo)
            .should('be.visible')
            .get(keyGenerator.content.title)
            .should('be.visible')
            .get(keyGenerator.content.publicKey)
            .invoke('val')
            .should('have.length', 130)
            .get(keyGenerator.content.publicKeyQrCode)
            .should('be.visible')
            .get(keyGenerator.content.privateKeyPhrase)
            .should('be.visible')
            .get(keyGenerator.content.privateKeyQrCode)
            .should('be.visible')
            .get(keyGenerator.content.exportPdfButton)
            .should('be.visible')
            .get(keyGenerator.content.generateNewKeyButton)
            .should('be.visible');
        });
      });

      describe('Generating new keys', () => {
        it('should generate new public key', () => {
          cy.get(keyGenerator.content.publicKey)
            .invoke('val')
            .then(($publicKey) => {
              const val = $publicKey;
              cy.get(keyGenerator.content.generateNewKeyButton).click();
              cy.get(keyGenerator.content.publicKey)
                .invoke('val')
                .should(($newPublicKey) => {
                  expect($newPublicKey).not.to.eq(val);
                });
            });
        });

        it('should generate new private phrases', () => {
          cy.get(keyGenerator.content.privateKeyPhrase)
            .invoke('text')
            .then(($phrase) => {
              const val = $phrase;
              cy.get(keyGenerator.content.generateNewKeyButton).click();
              cy.get(keyGenerator.content.privateKeyPhrase)
                .invoke('text')
                .should(($newPhrase) => {
                  expect($newPhrase).not.to.eq(val);
                });
            });
        });

        it('should generate new private QR code', () => {
          cy.get(keyGenerator.content.privateKeyQrCode)
            .invoke('attr', 'src')
            .then(($src) => {
              const val = $src;
              cy.get(keyGenerator.content.generateNewKeyButton).click();
              cy.get(keyGenerator.content.privateKeyQrCode).should(($src2) => {
                expect($src2).not.to.eq(val);
              });
            });
        });

        it('should generate new public QR code', () => {
          cy.get(keyGenerator.content.publicKeyQrCode)
            .invoke('attr', 'src')
            .then(($src) => {
              const val = $src;
              cy.get(keyGenerator.content.generateNewKeyButton).click();
              cy.get(keyGenerator.content.publicKeyQrCode)
                .invoke('attr', 'src')
                .should(($src2) => {
                  expect($src2).not.to.eq(val);
                });
            });
        });
      });
    });
  });
});
