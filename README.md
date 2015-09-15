# react-dd
For those who don't use JSX and relied on React.DOM.\_\_\_ just being function calls

## How to Use It
```js
var dd = require("react-dd");

var Hello = dd.createClass({
  render: function(){
    return dd.h1(null, "Hello " + this.props.name);
  }
});

React.render(Hello({name: "World"}), document.body);
```

## What's wrong with JSX?
_JSX:_ a syntax that feels like HTML, but is actually XML syntax with JavaScript escape sequences. And by the way, you have to compile it to JavaScript before it can be shared with others or executed.

It's hard enough to deal with JavaScript syntax. Why in the world would would we want to mix it in with yet another syntax?

We've all become accustomed to HTML b/c it's what's been handed down and morphed into what it is. But when you think about it, it's a horrible syntax. Let's stop using it!

## Other alternatives to JSX

* [react-no-jsx](https://www.npmjs.com/package/react-no-jsx)
* [JSnoX](https://www.npmjs.com/package/jsnox)

## FYI

This project follows [semantic versioning](http://semver.org/) for releases.

## License
MIT
