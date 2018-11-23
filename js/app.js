$(document).ready(function() {

    $.getJSON('data.json', function(json) {
      console.log(json.length);
    });


});