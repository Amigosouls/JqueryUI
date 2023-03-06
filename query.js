$(function() {
    $( "#nav" ).menu({
       icons: { submenu: "ui-icon-circle-triangle-e"},
       position: { my: "right top", at: "right-200 top+5" }
    });
  
 });  

 var menu = "#menu";
var position = {my: "left top", at: "left bottom"};

$(menu).menu({
    position: position,
    blur: function() {
        $(this).menu("option", "position", position);
    },});