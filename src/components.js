import foobar from './foobar'

[
  foobar
]
.map(component => {
  Vue.component(component.name, component)
})
