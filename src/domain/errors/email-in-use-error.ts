export class EmailInUserError extends Error {
  constructor () {
    super('Email já está em uso.')
    this.name = 'EmailInUserError'
  }
}
