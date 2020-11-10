export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errodo aconteceu. Tente novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
