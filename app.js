

var showPic = function(pic){

  //clone our result template code
  var result = $(".dog").clone();

  //displays text of tweet
  var dogPic = result.find('.dog');
  dogPic.attr('src', pic.images.standard_resolution);

  return result;
 };

 var obj_to_explore;

// Initialize with your OAuth.io app public key
OAuth.initialize('z1jbL8uDBlOVkjU4Czw1Up51u5c');
OAuth.popup('instagram', function(error, result){
  // See the result below

  	if(error){
  		alert("Something funky happened!"+error);
  	}
	result.get("https://api.instagram.com/v1/tags/dogsinhats/media/recent").done(function(data){
	obj_to_explore = data;
	$.each(data.data, function(i, item) {
		var pic = showPic(item);
      	$('.dog').append(pic);
	});
	


});
});