import React from 'react'
import faker from 'faker'
import {
  RenderResult,
  render,
  cleanup
} from '@testing-library/react'
import { AuthenticationSpy, Helper, ValidationStub } from '@/presentation/test'
import Signup from './signup'

type SutTypes = {
  sut: RenderResult
  authenticationSpy: AuthenticationSpy
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const authenticationSpy = new AuthenticationSpy()

  const sut = render(
    <Signup
      validation={validationStub}
    />
  )
  return {
    sut,
    authenticationSpy
  }
}

describe('Signup component', () => {
  afterEach(cleanup)
  test('should start with initial state ', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', validationError)
    Helper.testStatusForField(sut, 'password', 'Campo Obrigatório')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo Obrigatório')
  })

  test('should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.populateField(sut, 'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })

  test('should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.populateField(sut, 'email')
    Helper.testStatusForField(sut, 'email', validationError)
  })
})
