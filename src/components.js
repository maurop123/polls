// export { editor } from './editor'
import editor from './editor'


[
  editor
]
.map(component => {
  Vue.component(component.name, component)
})
