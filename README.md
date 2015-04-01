# react-dd
For those who don't use JSX and relied on React.DOM.\_\_\_ just being function calls

# How to Use It
```js
var dd = require("react-dd");

var Hello = dd.createClass({
  render: function(){
    return dd.h1(null, "Hello " + this.props.name);
  }
});

React.render(Hello({name: "World"}), document.body);
```

# What's wrong with JSX?
_JSX:_ a syntax that feels like HTML, but is actually XML syntax with JavaScript escape sequences. And by the way, you have to compile it to JavaScript before it can be shared with others or executed.

It's hard enough to deal with JavaScript syntax. Why in the world would would we want to mix it in with yet another syntax?

We've all become accustomed to HTML b/c it's what's been handed down and morphed into what it is. But when you think about it, it's a horrible syntax. Let's stop using it!

# Other alternatives to JSX

* [react-no-jsx](https://www.npmjs.com/package/react-no-jsx)
* [JSnoX](https://www.npmjs.com/package/jsnox)


# License

The MIT License (MIT)

Copyright (c) 2015 Small Helm LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
