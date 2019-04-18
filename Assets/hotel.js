$(document).ready(function(){
  $("hsearch").keyup(function(){
    $("result").html();
    var searchField = $("hsearch").val();
    var expression = new RegExp(searchField, "i");
      $.getJSON('https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=100&key=AIzaSyCulZQEPBA_aT5iBYTL20xK1MnDR_vH_EA', function(data){
        $.each(data, function(key, value){
          if(value.name.search(expression) != -1 || value.location.search(expression) != -1)
          {
            $('#result').append('<li class="list-group-item ><img src="" '+value.image+' height="40" width="40" class="img-thumbnail" />'+value.name+'| <span class= "text-muted'>'+value.location+'</span></li>');
          }
        });
      })
  });
}); 