const { DOMParser } = require('xmldom');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var DomParser = require('dom-parser');

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "http://knesset.gov.il/Odata/ParliamentInfo.svc/KNS_LawBinding?$filter=%20LawID%20eq%20(5)&$select=IsraelLawID", false ); // false for synchronous request
xmlHttp.send( null );
console.log(xmlHttp.responseText);

var ans = xmlHttp.responseText;

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(ans, "text/xml");

// xmlDoc.getElementByTagName("IsraelLawID").innerHTML;

var num = xmlDoc.getElementsByTagNameNS("http://schemas.microsoft.com/ado/2007/08/dataservices", "IsraelLawID")[0].firstChild.nodeValue;
let str = "https://main.knesset.gov.il/Activity/Legislation/Laws/Pages/LawPrimary.aspx?t=lawlaws&st=lawlaws&lawitemid=" + num;
console.log(str);

