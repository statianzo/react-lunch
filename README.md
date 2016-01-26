# ReactJS: Lunch Edition

A presentation of React during lunch

---

# Follow along

```
git clone https://github.com/statianzo/react-lunch

npm install

npm start

open http://localhost:8080
```

---

# React

- A UI Library
- JSX - a DSL for React components
- Virtual DOM Renderer

---

# JSX

- DSL for creating markup components within JavaScript
- HTML in my JS? Yuck!
- *Optional*, but highly recommended
- Compiled using the Babel transpiler

--

## HTML Primitives

```
var url = 'http://example.com';
return <a href={url}>Click here</a>
```

--

```
return React.createElement(
  'a',
  { href: 'http://example.com' },
  'Click here'
);
```

## Components

A component is a custom element composed of primitives or
other components. Think Angular directives.

```
import ProfilePicture from './ProfilePicture';

return <ProfilePicture userId={123}>
  <img src='/fallback.jpg' />
</ProfilePicture>
```

--

```
return React.createElement(
  ProfilePicture,
  { userId: 123 },
  React.createElement('img',
    { src: '/fallback.jpg' }
  )
);
```

---

# Virtual DOM

- Consistent pure JS representation of DOM
- Diff based updating
- Render everything, React will figure it out
- Attaches to actual DOM with ReactDOM.render(ReactElement, DOMElement);


## First render

```
ReactDOM.render(<div className='container'>
  <div className='profile'>
    <h1 className='username'>linus</h1>
  </div>
</div>
, document.getElementById('app'));
```


## Second render
```
ReactDOM.render(<div className='container'>
  <div className='profile'>
    <h1 className='username'>theo</h1>
  </div>
</div>
, document.getElementById('app'));
```

Only the h1 will be modified.

---

# Hello World

## index.html

This is the page's starting HTML. Not much to see.

## src/index.js

This renders a component onto the existing `#app` element.

## src/components/Hello.js

This is a simple component. Just a function that returns a primitive.
Changes here will reflect the output on the page.

---

# Taking arguments

Arguments passed into components are known as props.

They are available within the component on `this.props['propertyName']`.

Props are immutable, and should not be changed.

To make our Hello component friendlier, let's pass it a name.

Within `render` read from `this.props.name` interpolate into the greeting.

```
render() {
  return <h1>Hello from React, {this.props.name}!</h1>;
}
```

In `src/index.js` pass a `name` attribute to Hello.

```
render(<Hello name='Jason'/>, document.getElementById('app'));
```

See `src/components/HelloArgs.js`

Components do not inherit props from parent components.
---

# State

Data local to the component used for rendering is known as state and
accessible as `this.state`;

Change `src/index.js` to render a `<Counter />`

Open `src/components/Counter.js`

Initialize state in constructor.

Make changes to state using `this.setState()`, not by modifying
`this.state` directly.

`componentDidMount` is a method invoked when a component is attached to DOM.
`componentWillUnmount` is called before a component is detached from DOM.
Other lifecycle methods are listed within the [React Docs](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods).
---

# Conditionals and looping

Conditional content and looping are done using regular javascript constructs.

Change `src/index.js` to render a `<Satellite />`

Open `src/components/Satellite.js`

## Conditional content

Within `render()` the `status` variable is set conditionally with a ternary.

## Looping

`directionButtons` is the result of mapping over an array.

When rendering components in a loop, they require a `key` attribute to help
react identify existing elements. For Angular developers, think `track by` from
`ng-repeat`.

## Rendering

In JSX, expressions within `{}` will be rendered.

---

# Events

Set up events using `on*` attributes to primitive components.

Change `src/index.js` to render a `<Satellite />`

Open `src/components/Satellite.js`




