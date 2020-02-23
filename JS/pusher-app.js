//original version here:
//var doc = document.getElementByID('doc');
//doc.contentEditable = true;
//doc.focus();

// IIFE keeps our variables private
// and gets executed immediately!

(function() {
    var doc = document.getElementById('doc');
    doc.contentEditable = true;
    doc.focus();
})()