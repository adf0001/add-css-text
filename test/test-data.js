
//global variable, for html page, refer tpsvr @ npm.
add_css_text = require("../add-css-text.js");

module.exports = {

	"add_css_text()": function (done) {
		add_css_text('#divResult3{height:200px}');
		return document.getElementById('divResult3').offsetHeight === 200;
	},
	"styleId": function (done) {
		add_css_text('#divResult3 span.si{background:yellow;}', 'myStyle1');
		document.getElementById('divResult3').innerHTML = '<span class=si>aaa</span> <span class=si>bbb</span>';

		return "<span class='ht-cmd' onclick=\"document.getElementById('myStyle1').textContent='#divResult3 span.si{background:red;}'\">red</span> " +
			"<span class='ht-cmd'  onclick=\"add_css_text('#divResult3 span.si{background:blue;}','myStyle1')\">blue</span>";
	},
	"noReplaced": function (done) {
		add_css_text('#divResult3 span.si{background:yellow;}', 'myStyle1');
		add_css_text('#divResult3 span.si{background:green;}', 'myStyle1', true);
		document.getElementById('divResult3').innerHTML = '<span class=si>aaa</span> <span class=si>bbb</span>';
		return true;
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('add_css_text', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
