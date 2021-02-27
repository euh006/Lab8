describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Second Test', () => {
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(75);
    })
  });

  it('Third Test', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input')
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(33);
    })
  });

  it('Fourth Test', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input')
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume',0.33)
    })
  });

  // Tests for real

  it('Testing for image and sound source change', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src',"./assets/media/audio/party-horn.mp3")
    })
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src',"./assets/media/images/party-horn.svg")
    })

    cy.get('#radio-car-horn').click();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src',"./assets/media/audio/car-horn.mp3")
    })
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src',"./assets/media/images/car.svg")
    })

    cy.get('#radio-air-horn').click();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src',"./assets/media/audio/air-horn.mp3")
    })
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src',"./assets/media/images/air-horn.svg")
    })
  }); // works

  it('Test if volume image changes when increasing volumnes for text', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-0.svg`);
    })

    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-1.svg`);
    })

    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-2.svg`);
    })

    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-3.svg`);
    })
  }); // works
  
  it('Test if volume image changes when increasing volume for slider ', () => {
    cy.get('#volume-slider').invoke('val',0).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-0.svg`);
    })

    cy.get('#volume-slider').invoke('val',1).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-1.svg`);
    })

    cy.get('#volume-slider').invoke('val',34).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-2.svg`);
    })

    cy.get('#volume-slider').invoke('val',67).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', `./assets/media/icons/volume-level-3.svg`);
    })
  }); // works

  it('Test if the honk button is disabled when the textbox input is a empty or a non-number', () => {
    cy.get('#volume-number').invoke('val',30).trigger('input')
    cy.get('#honk-btn').then($el => {
      expect($el).to.not.have.attr('disabled');
    })

    cy.get('#volume-number').clear().trigger('input')
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    })

    cy.get('#volume-number').invoke('val','tea').trigger('input')
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    })

    cy.get('#volume-number').invoke('val',80).trigger('input')
    cy.get('#honk-btn').then($el => {
      expect($el).to.not.have.attr('disabled');
    })

  }); // works

  it('Test if an error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').invoke('val',200).trigger('input')
    cy.get('input:invalid').should('have.length', 1)
  }); // works https://glebbahmutov.com/blog/form-validation-in-cypress/

});