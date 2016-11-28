export { editor } from './editor'
import placekitten from './placekitten'


[
  placekitten
]
.map(component => {
  Vue.component(component.name, component)
})
