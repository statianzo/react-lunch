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

--
- DSL for creating markup components within JavaScript
--
- HTML in my JS? Yuck!
--
- *Optional*, but highly recommended
--
- Compiled using the Babel transpiler


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

# A simple example

Open up `src/index.js`



