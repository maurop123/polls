import editor from './editor'

[
  editor
]
.map(component => {
  Vue.component(component.name, component)
})
