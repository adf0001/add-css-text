
// add-css-text @ npm, add css text.

/*
add_css_text(cssText [, styleId [, replace]])

if the 'styleId' is empty, or the element by 'styleId' is not exists,
	return the new style element;

if the element by 'styleId' already exists,
	when the 'replace' is true, its cssText will be fully replaced and return true;
	otherwise it's untouched and return false;

if fail, return an Error object
*/
module.exports = function (cssText, styleId, replace) {
	var style;
	if (styleId && (style = document.getElementById(styleId))) {
		//already exists
		if (style.tagName.toUpperCase() != "STYLE")
			return Error("element by styleId is not STYLE tag, " + styleId);	//fail

		if (!replace) return false;

		style.textContent = cssText;
		return true;
	}

	//create
	style = document.createElement("style");
	style.type = "text/css";
	if (styleId) style.id = styleId;

	try {
		style.appendChild(document.createTextNode(cssText));
	}
	catch (ex) {
		style.styleSheet.cssText = cssText;
	}

	return document.getElementsByTagName("head")[0].appendChild(style);		//ok
};
