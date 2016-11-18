So far this is just one of my favorite setups, now with vue 2.0

Some of the features are:

### crazy simple wiring
index is what gets bundled. it imports components.js which registers all components. components are just objects that follow vue convention and import html templates as string. that's it.

### super unopinionated and flexible
vue framework is super sparse. it has minimal convention imposed in component and template files, and actual Vue API calls are limited to index.js and components.js.

### super flat source tree. i.e. no folders inside of source. that means...

 - everything has equal access to everything else. i.e. no require('../../../../file.js')
 - no refactor impact from moving files cause files don't get moved
 - it's not pretty to scroll through (machines don't care about pretty) so use Ctrl-P to fuzzy find files

### really explicit filenames
e.g. super.cool.radio.button.html; you know it's a radio button and that it's the super cool one. this makes the super flat source tree work

### can add vue-router and vuex without increasing complexity

### npm scripts to keep it simple to start

## install

- npm i
- npm run watch

#### todo

- dockerize. keep this simple too
- tests!
