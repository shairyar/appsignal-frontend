import Appsignal from '@appsignal/javascript'

const appsignal = new Appsignal({ key: 'YOUR-FRONTEND-API-KEY' })

export const example = () => `Hello World.`

window.onerror = function (msg, url, lineNo, columnNo, error) {
  const param = JSON.parse(error.message).foo
  const span = appsignal.createSpan()

  span.setTags({ tag: param }).setError(error)
  appsignal.send(span)
  return false
}
throw new Error(
  JSON.stringify({ message: 'Some new exception message', foo: 'bar' })
)
