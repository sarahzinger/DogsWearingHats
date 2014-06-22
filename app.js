

var showPic = function(pic){

  //clone our dogPic template code
  var dogPic = $("#dogTemplate").clone();

  //displays dog pic
  dogPic.attr('src', pic.images.standard_resolution.url);

  dogPic.attr('id', pic.images.standard_resolution.url);
  console.log(pic.images.standard_resolution.url);
  obj_to_explore=dogPic;

  return dogPic;
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
	
	$.each(data.data, function(i, item) {
		console.log('in each');
		var pic = showPic(item);
		console.log('got pic');
      	$('.results').append(pic);
	});
	


});
});