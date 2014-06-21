// Initialize with your OAuth.io app public key
OAuth.initialize('z1jbL8uDBlOVkjU4Czw1Up51u5c');
OAuth.popup('Instagram', function(error, success){
  // See the result below


  console.log(success);
});

var showPic = function(pic){

  //clone our result template code
  var result = $(".dog").clone();

  //displays text of tweet
  var dogPic = result.find('.dog');
  dogPic.attr('src', data.images.standard_resolution);

  return result;
 };

//recieves tweets from Twitter API
var getDogs= function(){
   var result= $.ajax({
    url: "https://api.instagram.com/v1/tags/dogsinhats/media/recent?max_id=01%2F01%2F2010",
    dataType: "jsonp",
    type: "Get"
   });
   $.each(result.items, function(i, item) {
      var pic = showPic(item);
      $('.dog').append(pic);
    });
 };



 getDogs();
