import Appsignal from '@appsignal/javascript'
import { plugin as pluginBreadcrumbsNetwork } from "@appsignal/plugin-breadcrumbs-network"
import { plugin as pluginBreadcrumbsConsole } from "@appsignal/plugin-breadcrumbs-console"

const appsignal = new Appsignal({ key: 'YOUR-FRONTEND-API-KEY' })
appsignal.use(pluginBreadcrumbsNetwork)
appsignal.use(pluginBreadcrumbsConsole)

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
