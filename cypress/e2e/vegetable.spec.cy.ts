import mockDefault from '../../vegetable/mocks/default.json'
import mockEmpty from '../../vegetable/mocks/empty.json'
import { INFO } from '../../app/constants'

describe('Cultivos', () => {
  it('Debería mostrar todos los cultivos', () => {
    cy.visit('/default')

    cy.get('[data-test-id="vegetable"]').should('have.length', mockDefault.length)
  })

  it('Muestra un mensaje cuando no hay cultivos', () => {
    cy.visit('/empty')

    cy.get('[data-test-id="vegetable"]').should('have.length', mockEmpty.length)
    cy.contains(INFO.noVegetables)
  })

  it('Muestra el drawer con el detalle del cultivo y lo oculta', () => {
    cy.visit('/default')

    cy.get('[role="dialog"]').should('not.exist')
    cy.get('[data-test-id="vegetable"] button').first().click()
    cy.get('[role="dialog"]').should('be.visible')

    cy.get('[aria-label="Close"]').click()
    cy.get('[role="dialog"]').should('not.exist')
  })
})
