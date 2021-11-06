// global, for html page
addCssText = require("../add-css-text.js");

module.exports = {

	"addCssText()": function(done){
		addCssText('#divResult3{height:200px}');
		return document.getElementById('divResult3').offsetHeight===200;
	},
	"addCssText()/styleId": function(done){
		addCssText('#divResult3 span.si{background:yellow;}','myStyle1');
		document.getElementById('divResult3').innerHTML='<span class=si>aaa</span> <span class=si>bbb</span>';
		
		return "<span class='ht-cmd' onclick=\"document.getElementById('myStyle1').textContent='#divResult3 span.si{background:red;}'\">red</span> "+
			"<span class='ht-cmd'  onclick=\"addCssText('#divResult3 span.si{background:blue;}','myStyle1')\">blue</span>";
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
