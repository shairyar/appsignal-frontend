import Appsignal from '@appsignal/javascript'

const ignore = [/ResizeObserver/gm, /Loading chunk/gm, /msoCommentHide/gm]

const appsignal = new Appsignal({
  key: 'YOUR-FRONTEND-API-KEY',
  ignoreErrors: ignore,
})

export const example = () => `Hello World.`

window.onerror = function (msg, url, lineNo, columnNo, error) {
  const span = appsignal.createSpan()

  span.setTags({ tag: 'param' }).setError(error)
  appsignal.send(span)
  return false
}
throw new Error('This exception will be ignored ResizeObserver')
