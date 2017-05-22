$(function(){

	$("#arrow_down").click(function(){
		$("#b_o_txt").html("What should P.T. do?")
		$("#b_o_txt").addClass("showTxt")
		$("#b_options").removeClass("showOptions")
		});

	$("#fight").click(function(){
		$(".bd_1").html("")
		$("#b_options").addClass("showOptions")
		$(".tackle").removeClass("showTackle")
		$(".tackle").addClass("animTackle")
		$(".foe").removeClass("foe2")
		$(".foe").addClass("animFoe")
        timeout = setTimeout(function() {
            $(".bd_1").html("PSY from 2012 disappeared!\
            				<a href='evol_3.html'>\
            				<img class='arrow_down' src='../images/arrow_down.gif'>\
            				</a>")
        	$("#b_o_txt").removeClass("showTxt")
        	;}, 2650);
	    });

	$(".startEvol").click(function(){
		$(".evol_x-1").removeClass("bg_evol_x-1")
		$(".evol_x-1").addClass("bg_evol_x-evol")
		$(".bd_1").removeClass("startEvol")
		timeout = setTimeout(function() {
            $(".bd_1").html("Pen-pineapple-apple-pen!\
            				<a href='end-1.html'>\
            				<img class='arrow_down' src='../images/arrow_down.gif'>\
	        				</a>")
        	;}, 9300);
		});

	})