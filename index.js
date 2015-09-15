var React = require("react");

var tags = [
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"big",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"circle",
	"cite",
	"clipPath",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"defs",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"ellipse",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"g",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"injection",
	"input",
	"ins",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"line",
	"linearGradient",
	"link",
	"main",
	"map",
	"mark",
	"mask",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"path",
	"pattern",
	"picture",
	"polygon",
	"polyline",
	"pre",
	"progress",
	"q",
	"radialGradient",
	"rect",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"small",
	"source",
	"span",
	"stop",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"svg",
	"table",
	"tbody",
	"td",
	"text",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"tspan",
	"u",
	"ul",
	"var",
	"video",
	"wbr"
];

var DOM = {};
tags.forEach(function(tag){
	DOM[tag] = React.createFactory(tag);
});

module.exports = DOM;
module.exports.createClass = function(o){
	return React.createFactory(React.createClass(o));
};
