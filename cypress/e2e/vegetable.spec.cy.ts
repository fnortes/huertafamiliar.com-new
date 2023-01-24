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
})
