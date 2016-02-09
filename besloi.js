//// Review assignment on Coursera by -=BesLoi=-

var besloi = (function(){
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
        //// Using bililiteRange and sendKeys for simulating keypress
	    loadScript("https://rawgit.com/cool5785/BesLoi-Coursera-Automation/master/bililiteRange.js", function() {
  		    loadScript("https://rawgit.com/cool5785/BesLoi-Coursera-Automation/master/jquery.sendkeys.js", function() {
  			    besloi_feedback();
		    });
	    });
    }


    function main(maxtry, delay) {

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
    
    loadScript("https://rawgit.com/cool5785/BesLoi-Coursera-Automation/master/bililiteRange.js", function() {
  		loadScript("https://rawgit.com/cool5785/BesLoi-Coursera-Automation/master/jquery.sendkeys.js", function() {    
            console.log("NOTE: This is my educational project for trying automation using JavaScript. DONT USE IT FOR ANY ILLEGAL PURPOSE!");
            console.log("Cannon loaded Captain, Ready to fire feedback on Coursera!");
            console.log("Type besloi.start() to fire!");
        });
	});

    return {
        start: function(maxtry, delay) {
                    main(maxtry, delay);
                }
    };
})();