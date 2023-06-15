import quoteData from '../../fixtures/quoteData.json'
import QuoteFormPage from '../pages/quoteformPage'

describe('quote pom form tests', () => {
    const quoteFormPage = new QuoteFormPage();
    

    beforeEach(() => {
        cy.viewport(1440, 1024)
        cy.visit(`/quote/`)
        cy.get('.dj-cookie-widget__bar-buttons > [data-cookie-action="acceptAll"]').click()
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
    })

    it('can fill out form details', () => {
        //    quoteFormPage.getformFirstName().type(quoteData.validData.firstName)
        quoteFormPage.getformLastName().type(quoteData.validData.lastName)
        quoteFormPage.getformBuinessName().type(quoteData.validData.businessName)
        quoteFormPage.getformPostcode().type(quoteData.validData.businessPostcode)
        quoteFormPage.getformEmailAddress().type(quoteData.validData.emailAddress)
        quoteFormPage.getformPhoneNumber().type(quoteData.validData.telephoneNumber)
        quoteFormPage.getnoPaymentProvider().click()
    })
})