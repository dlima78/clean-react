import * as FormHelper from '../support/form-helper'
import faker from 'faker'

describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup')
  })
  it('should load with correct initial state', () => {
    FormHelper.testInputStatus('name', 'Campo obrigatório')
    FormHelper.testInputStatus('email', 'Campo obrigatório')
    FormHelper.testInputStatus('password', 'Campo obrigatório')
    FormHelper.testInputStatus('passwordConfirmation', 'Campo obrigatório')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('should present error state if form is invalid', () => {
    cy.getByTestId('name').type(faker.random.alphaNumeric(1))
    FormHelper.testInputStatus('name', 'Campo inválido')
    cy.getByTestId('email').type(faker.random.word())
    FormHelper.testInputStatus('email', 'Campo inválido')
    cy.getByTestId('password').type(faker.random.alphaNumeric(4))
    FormHelper.testInputStatus('password', 'Campo inválido')
    cy.getByTestId('passwordConfirmation').type(faker.random.alphaNumeric(2))
    FormHelper.testInputStatus('passwordConfirmation', 'Campo inválido')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
