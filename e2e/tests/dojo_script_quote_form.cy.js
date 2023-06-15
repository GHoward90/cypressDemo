import quoteData from '../../fixtures/quoteData.json'

describe('quote form tests', () => {
  const quoteFormFirstName = '#Form_FirstName'
  const quoteFormLastName = '#Form_LastName'
  const quoteFormBusinessName = '#Form_BusinessName'
  const quoteFormBuinessPostcode = '#Form_BusinessPostcode'
  const quoteFormEmailAddress = '#Form_EmailAddress'
  const quoteTelephoneNumber = '#Form_PhoneNumber'
  const quoteNoExistingPayProvider = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div.dj-form__row.dj-payments-row > div:nth-child(2) > div > label:nth-child(5)'
  const quoteEmailToolTip = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(7) > div > label.dj-tooltip > span'
  const emailToolTipText = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(7) > div > label.dj-tooltip > span.dj-tooltip__bubble'
  const phoneToolTip = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(8) > label > span'
  const phoneToolTipText = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(8) > label > span.dj-tooltip__bubble'

  const firstNameError = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(4) > div:nth-child(1) > span'
  const lastNameError = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(4) > div:nth-child(2) > span'
  const postCodeError = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(6) > span'
  const phoneNumberError = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(7) > span'
  const emailAddressError = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(7) > span'
  const businessError = 'body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div:nth-child(5) > span'

  const bookingToggle = '[for="QueuesAndBookings"]'
  const interestedInBothTickBox = '#CustomerRequiresBoth'

  Cypress.Commands.add("enterText", (selector, value = String) => {
    return cy.get(selector).type(value)
  })

  Cypress.Commands.add("hoverOverElementAndVerify", function (selector, verifyElement, assert = String) {
    cy.get(selector).eq(0).trigger('mouseover')
    cy.get(verifyElement).should(assert)
    cy.hoverOffElement(selector)

  })

  Cypress.Commands.add("hoverOffElement", function (selector) {
    cy.get(selector).eq(0).trigger('mouseout')
  })

  Cypress.Commands.add('verifyInputHasCorrectValue', function (selector, inputValue = String) {
    expect(cy.get(selector).value, inputValue)
  })

  beforeEach(() => {
    cy.viewport(1440, 1024)
    cy.visit('/quote/')
    cy.get('.dj-cookie-widget__bar-buttons > [data-cookie-action="acceptAll"]').click() 
  })

  it('can fill out form with valid data', () => {
    cy.enterText(quoteFormFirstName, quoteData.validData.firstName)
    cy.verifyInputHasCorrectValue(quoteFormFirstName, quoteData.validData.firstName)

    cy.enterText(quoteFormLastName, quoteData.validData.lastName)
    cy.verifyInputHasCorrectValue(quoteFormLastName, quoteData.validData.lastName)

    cy.enterText(quoteFormBusinessName, quoteData.validData.businessName)
    cy.verifyInputHasCorrectValue(quoteFormBusinessName, quoteData.validData.businessName)

    cy.enterText(quoteFormBuinessPostcode, quoteData.validData.businessPostcode)
    cy.verifyInputHasCorrectValue(quoteFormEmailAddress, quoteData.validData.businessPostcode)

    cy.enterText(quoteFormEmailAddress, quoteData.validData.emailAddress
    )
    cy.verifyInputHasCorrectValue(quoteFormEmailAddress, quoteData.validData.emailAddress)

    cy.enterText(quoteTelephoneNumber, quoteData.validData.telephoneNumber)
    cy.verifyInputHasCorrectValue(quoteTelephoneNumber, quoteData.validData.telephoneNumber)
    cy.get(quoteNoExistingPayProvider).click()
  })

  it('validation thrown when invalida data is used', () => {
    cy.enterText(quoteFormFirstName, quoteData.invalidData.firstName)
    cy.enterText(quoteFormLastName, quoteData.invalidData.lastName)
    cy.enterText(quoteFormBusinessName, quoteData.invalidData.businessName)
    cy.enterText(quoteFormBuinessPostcode, quoteData.invalidData.businessPostcode)
    cy.enterText(quoteFormEmailAddress, quoteData.invalidData.emailAddress)
    cy.enterText(quoteTelephoneNumber, quoteData.invalidData.telephoneNumber)
    cy.get(quoteNoExistingPayProvider).click()


    cy.get(firstNameError).should('be.visible')
    cy.get(lastNameError).should('be.visible')
    cy.get(businessError).should('be.visible')
    cy.get(postCodeError).should('be.visible')
    cy.get(emailAddressError).should('be.visible')
    cy.get(phoneNumberError).should('be.visible')
  })

  it('can hover over and tooltips are displayed', () => {
    cy.hoverOverElementAndVerify(quoteEmailToolTip, emailToolTipText, 'be.visible')
    cy.hoverOverElementAndVerify(phoneToolTip, phoneToolTipText, 'be.visible')
  })

  it('can fill out booking form with valid data', () => {
    cy.get(bookingToggle).click()
    cy.enterText(quoteFormFirstName, quoteData.validData.firstName)
    cy.verifyInputHasCorrectValue(quoteFormFirstName, quoteData.validData.firstName)

    cy.enterText(quoteFormLastName, quoteData.validData.lastName)
    cy.verifyInputHasCorrectValue(quoteFormLastName, quoteData.validData.lastName)

    cy.enterText(quoteFormBusinessName, quoteData.validData.businessName)
    cy.verifyInputHasCorrectValue(quoteFormBusinessName, quoteData.validData.businessName)

    cy.enterText(quoteFormBuinessPostcode, quoteData.validData.businessPostcode)
    cy.verifyInputHasCorrectValue(quoteFormEmailAddress, quoteData.validData.businessPostcode)

    cy.enterText(quoteFormEmailAddress, quoteData.validData.emailAddress
    )
    cy.verifyInputHasCorrectValue(quoteFormEmailAddress, quoteData.validData.emailAddress)

    cy.enterText(quoteTelephoneNumber, quoteData.validData.telephoneNumber)
    cy.verifyInputHasCorrectValue(quoteTelephoneNumber, quoteData.validData.telephoneNumber)
  })

  it('can tick interested in both', () => {
    cy.get(interestedInBothTickBox).click()
    cy.get(interestedInBothTickBox).should('be.checked')
    cy.get(quoteNoExistingPayProvider).should('be.visible')
  })

})