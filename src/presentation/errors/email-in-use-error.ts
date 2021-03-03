export class EmailInUseError extends Error {
  constructor () {
    super('The received emails is already in use')
    this.name = 'EmailInUseError'
  }
}
