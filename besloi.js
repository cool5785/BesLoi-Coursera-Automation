//// Review assignment on Coursera by -=BesLoi=-

function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {  //IE
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "head" )[0].appendChild( script );
}


function besloi_feedback() {

var arrMsg = ["Good Work!", "Excellent assignment", "Very Good", "Nice Skills", "Excellent!!", "Amazing!"], sRandMsg = "";

// Get random msg to post as feedback
sRandMsg = arrMsg[Math.floor(Math.random() * arrMsg.length)];

$(".options-prompt").each(function(){
     $(this).next().find(".option-input").eq(0).prop("checked",true).click();
});

//$(".c-peer-review-submit-textarea-field").text("Very Good !").val("Very Good!").change();
$(".c-peer-review-submit-textarea-field").sendkeys(sRandMsg);

	setTimeout(function(){
		$("[data-rc='FormSubmit'] .primary").click();
	}, 1000);

}

function besloi_process() {
	loadScript("https://rawgit.com/dwachss/bililiteRange/master/bililiteRange.js", function() {
  		loadScript("https://rawgit.com/dwachss/bililiteRange/master/jquery.sendkeys.js", function() {
  			besloi_feedback();
		});
	});
}


function besloi(maxtry, delay) {

    var tc= 0, maxtry = maxtry || 2;
    var delay = isNaN(parseInt(delay)) ? 5000 : parseInt(delay);

    var repeatCounter = setInterval(function() {
        tc++;
	    var bNoSubmissionAvailable = ($("[data-rc='GiveFeedbackNoList'] .body-2-text").text() === "No Submissions Available");
    
        if(tc > maxtry || bNoSubmissionAvailable ) {
		    clearInterval(repeatCounter);
		    console.log("-=BesLoi=->> Done! Total Reviewed Assignments = " + (--tc));
	    } else {
		    besloi_process();
	    }
    }, delay);    
}