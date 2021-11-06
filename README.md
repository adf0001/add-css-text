# add-css-text
add css text

# Install
```
npm install add-css-text
```

# Usage & Api
```javascript

var addCssText = require("add-css-text");

//addCssText(cssText, styleId)
//if the element by `styleId` already exists, its cssText will be fully replaced.

addCssText('#divResult3{height:200px}');
assert( document.getElementById('divResult3').offsetHeight===200 );

//addCssText()/styleId
addCssText('#divResult3 span.si{background:yellow;}','myStyle1');
document.getElementById('divResult3').innerHTML='<span class=si>aaa</span> <span class=si>bbb</span>';

document.getElementById('divResult2').innerHTML= 
	"<span class='ht-cmd' onclick=\"document.getElementById('myStyle1').textContent='#divResult3 span.si{background:red;}'\">red</span> "+
	"<span class='ht-cmd'  onclick=\"addCssText('#divResult3 span.si{background:blue;}','myStyle1')\">blue</span>";

```
