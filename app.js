//Shows Picture of Dog
var showPic = function(pic){

  //clone our dogPic template code
  var dogPic = $("#dogTemplate").clone();

  //displays dog pic
  dogPic.attr('src', pic.images.standard_resolution.url);
  //attributes unique id to prevent loop
  dogPic.attr('id', pic.images.standard_resolution.url);

  return dogPic;
 };
var success;
$(document).ready( function() {
// Initialize with your OAuth.io app public key
  OAuth.initialize('z1jbL8uDBlOVkjU4Czw1Up51u5c');
 
  OAuth.callback('instagram', function(error, result){
  // See the result below
  success=result;
  if(error){
      alert("Something funky happened!"+error);
    }
    result.get("https://api.instagram.com/v1/tags/dogswearinghats/media/recent").done(function(data){
      $.each(data.data, function(i, item) {
        var pic = showPic(item);
        $('.results').append(pic);
      });
    });
  });
  if (window.location.toString().indexOf("#") == -1){
    OAuth.redirect('instagram', "http://smuenzinger.github.io/DogsWearingHats/");
  }

  $("#agree").click(function(){
    $("#agree").hide(1000);
    $("#instructions").hide(1000);
    $(".results").show("slow");
  });
});