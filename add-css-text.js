
// add-css-text @ npm, add css text.

/*
add_css_text(cssText [, styleId [, noReplaced]])

if the element 'styleId' already exists,
	its cssText will be fully replaced when 'noReplaced' is not true.
*/
module.exports = function (cssText, styleId, noReplaced) {
	var style;
	if (styleId && (style = document.getElementById(styleId))) {
		if (style.tagName.toUpperCase() != "STYLE") return;	//fail

		if (noReplaced) return false;	//untouched

		style.textContent = cssText;
	}
	else {
		style = document.createElement("style");
		style.type = "text/css";
		if (styleId) style.id = styleId;

		try {
			style.appendChild(document.createTextNode(cssText));
		}
		catch (ex) {
			style.styleSheet.cssText = cssText;
		}
		document.getElementsByTagName("head")[0].appendChild(style);
	}
	return true;	//ok
};
