import Appsignal from '@appsignal/javascript'

const appsignal = new Appsignal({ key: 'FRONT-END-API-KEY' })

export const example = () => `Hello World.`

class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
  const span = appsignal.createSpan()

  span.setAction('Unique Error Name').setTags({ tag: 'param' }).setError(error)
  appsignal.send(span)
  return false
}

throw new ValidationError('Some new exception message')
