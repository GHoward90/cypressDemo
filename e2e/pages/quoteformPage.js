class QuoteFormPage {

  getformFirstName() {
    return cy.get('#Form_FirstName')
  }
  getformLastName() {
    return cy.get('#Form_LastName')
  }

  getformBuinessName() {
    return cy.get('#Form_BusinessName')
  }

  getformPostcode() {
    return cy.get('#Form_BusinessPostcode')
  }

  getformEmailAddress() {
    return cy.get('#Form_EmailAddress')
  }

  getformPhoneNumber() {
    return cy.get('#Form_PhoneNumber')
  }

  getnoPaymentProvider() {
    return cy.get('body > div:nth-child(3) > form > div > div > div.dj-form-field-section > div.dj-form__row.dj-payments-row > div:nth-child(2) > div > label:nth-child(5)')
  }
}

export default QuoteFormPage
