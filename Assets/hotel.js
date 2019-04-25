$(function() {
  $("#search").click(function() {
  
    
    var hotelList = $("#hotel-result");
    var url = ('https://maps.googleapis.com/maps/api/place/textsearch/json?radius=50&type=lodging');
    var key = ("AIzaSyBk5LOdLeNJzq29ecTtX9QgtA82tMSqx3w");
   
    // Get the JSON file
    $.getJSON(url, key,  function(data) {

      // Put artist info into a variable
      var hotels = data.hotels.map(function(item) {
        return item.hotelname + " (" + item.address + ")";
      });
      
      // Remove all child nodes (including text nodes) 
      hotelList.empty();

      // Format artists with HTML tags 
      if (hotels.length) {
        var content = "<li>" + hotels.join("</li><li>") + "</li>";
        var list = $("<ul>").html(content);
        hotelList.append(list);
      }
    });
  });
});
