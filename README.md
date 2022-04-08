# add-css-text
add css text

# Install
```
npm install add-css-text
```

# Usage & Api
```javascript

var add_css_text = require("add-css-text");

/*
add_css_text(cssText [, styleId [, replace]])

if the 'styleId' is empty, or the element by 'styleId' is not exists,
	return the new style element;

if the element by 'styleId' already exists,
	when the 'replace' is true, its cssText will be fully replaced and return true;
	otherwise it's untouched and return false;

if fail, return an Error object
*/
add_css_text('#divResult3{height:200px}');
assert( document.getElementById('divResult3').offsetHeight===200 );

//add_css_text()/styleId
add_css_text('#divResult3 span.si{background:yellow;}','myStyle1');
document.getElementById('divResult3').innerHTML='<span class=si>aaa</span> <span class=si>bbb</span>';

document.getElementById('divResult2').innerHTML= 
	"<span class='ht-cmd' onclick=\"document.getElementById('myStyle1').textContent='#divResult3 span.si{background:red;}'\">red</span> "+
	"<span class='ht-cmd'  onclick=\"add_css_text('#divResult3 span.si{background:blue;}','myStyle1')\">blue</span>";

```
