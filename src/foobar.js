import template from './foobar.html'

export default {
  name: 'foobar',
  template: template,
  data: () => {
    return {
      bar: 'baz'
    }
  }
}
