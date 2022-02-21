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
add_css_text(cssText [, styleId [, noReplaced]])

if the element 'styleId' already exists,
	its cssText will be fully replaced when 'noReplaced' is not true.
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
