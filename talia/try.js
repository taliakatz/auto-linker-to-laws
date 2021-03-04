

// var t1 = "Test1"
// var t2 = "Test2"
// var re = new RegExp('^' + t1 + '.*' + t2 + '$')
// console.log(re.test("Test1  this works   Test2"));



// var t1 = "חוק";
// var t2 = "עונשין";
// var re = new RegExp("u05d4" + t1 + ".*" + t2, "ug");
// console.log(re.test("החוק העונשין"));

 // u05d4  זה ה


// var mixedCharacters = "חוק העונשיןה";
// // Using the canonical "long" name of the script
// debugger;
// console.log(mixedCharacters.match(/\p{Script=Hebrew}/gu)); // a


//There are five Hebrew letters with special final forms.
// let finalforms = "\u05da\u05dd\u05df\u05e3\u05e5";

// let lemarbeh = "\u05dc\u05dd\u05e8\u05d1\u05d4" ;
// let re = new RegExp(w*[ + finalforms + w+, "gu");
// let m = re.test(lemarbeh);
// if(m)
//     console.log("Anomaly found:", m.group(0));


    // The standard Hebrew unicode block\
    let re = new RegExp('[\u05d5]?', "gu");
console.log(re.test("החק הענשין"));

// With precomposed characters
// /[\u0590-\u05FF\uFB2A-\uFB4E]/.test("ררר string with Hebrew in it");

// help function
function escapeRegExp(stringToGoIntoTheRegex) {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

// var string1 = escapeRegExp("חוק"); // this is the only change from above
// var string2 = escapeRegExp("עונשין"); // this is the only change from above

// var talia = `[\u05d4\u05d1\u05dc\u05de]*${string1}[ ,_-\u05d4\u05d1\u05dc\u05de]*${string2}`;
// talia = talia.concat(`hahahahha`);
// console.log(talia.charAt(0));
// var regex = new RegExp('[\u05d4\u05d1\u05dc\u05de]*' + string1 + '[ ,_-\u05d4\u05d1\u05dc\u05de]*' + string2, "gu");
// var re = new RegExp(talia, "gu");
// var input = "אני טליה וזה מחוק העונשין תכירו.";
// var output = input.replace(re, "!!");
// console.log(output); // Hello this is !! some !! stuff.
// console.log("regex : " + re); // Hello this is !! some !! stuff.

// let tmpWord = "הספנו, רק".split(',');
// console.log(tmpWord[0]);




// let sp = ["חוק", "רשות", "הספנות", "והנמלים,", "התשסד-2004"];
// let newKey = `[\u05d4\u05d1\u05dc\u05de]*${sp[0]}`;
// for (let i = 1; i < sp.length; i++) {
//     let word = sp[i]; 
//     if (sp[i-1].charAt(sp[i-1].length-1) == ',' || (word !== `` && (word.charAt(0) == '(' || word.charAt(0) == ')' ))) {
//         break;
//     }
//     if (word.charAt(word.length-1) == ',') {
//         console.log("Im here at line 69 and word is ", word);
//         word = word.substring(0, word.length-1);
//         console.log("this is word after substring: ", word);
//     }
//     // [ ,_-\u05d4\u05d1\u05dc\u05de] = ה ב ל מ 
//     // newKey = newKey.concat(`[ ,_-\u05d4\u05d1\u05dc\u05de]*${word}`);
//     newKey = `${newKey}[ ,_-\u05d4\u05d1\u05dc\u05de]*${word}`;
// }





// var to = "היום חוק רשות הספנות והנמלים הוא כזה ש";
// var regexKey = new RegExp(newKey, "gu");
// console.log("newKey: ", newKey);

// console.log("regexKey: ", regexKey);
// var regex = new RegExp('[\u05d4\u05d1\u05dc\u05de]*'+sp[0]+'[ ,_-\u05d4\u05d1\u05dc\u05de]*'+sp[1]+'[ ,_-\u05d4\u05d1\u05dc\u05de]*'+sp[2]+'[ ,_-\u05d4\u05d1\u05dc\u05de]*'+sp[3], "gu");
// console.log("regex: ", regex);
// console.log("sp[3]: ", sp[3]);


// var replace = to.replace(regexKey, "!!");
// console.log(replace);





// var createRegexForWord = function (word) {
//     word = word.replace(",", "");
// };

// let word = "והואו";
// let yodInd = word.indexOf("\u05d9");
// word = word.replace(/[(){}[\],]+/g, "");
// if(word.indexOf("\u05d5") > 1) {
//     let splited = word.split("\u05d5");
//     console.log(splited);

// }
// let splited = word.split("\u05d5");
//     console.log(splited);
// console.log(yodInd);
    // u05d4  זה ה




// word = "לפויעל";
// let len = word.length;
// let j = 0;
// while (j < len) {
//     let ch = word.charAt(j);
//     let before = word.substring(0, j);
//     let after = word.substring(j+1, word.length);
//     switch (ch) {   
//         //case of ו
//         case '\u05d5':   
//             if (j !== 0 && j !== len-1) {
//                 word = `${before}[\u05d5]?${after}`;
//                 len = word.length;
//                 j+=4;
//             }
//             else j++;
//             break;
//         //case of י
//         case '\u05d9':
//             if (after.charAt(0) == '\u05d9') {
//                 after = after.substring(1, after.length);
//             }
//             word = `${before}[\u05d9]*${after}`;
//             len = word.length;
//             j+=4;
//             break;
//         default:
//             j++;
//             break;
//     }  
// }

// console.log(word);


var showPopupUri = function () {
    document.getElementById("span").classList.toggle("show");
};

var hidePopupUri = function () {
    document.getElementById("span").classList.toggle("hide");
};

var para = document.createElement("span");
var text = document.createTextNode("מושב כפר יחזקאל");
para.appendChild(text);






// var popupnode = document.createElement("span");
// popupnode.className = "popup-uri";
// popupnode.id = `popup-uri-${globalCounter}`;
// popupnode.onmouseenter = "showPopupUri(this)";
// popupnode.onmouseleave = "hidePopupUri(this)";
// node.appendChild(popupnode);
    