$(document).ready(function(){
		$(".dropDown").each(function(){
				$(this).after($("<button class='url'></button>"));
			});

		$("a.MCDropDownHotSpot").each(function(){ // Go through each dropdown
				var url = window.location.href.split('?')[0] // Creating a variable "url" whose value is the url without any highlight text
				var dropdown = $(this)
				var text = $(dropdown).text().replace(/\s+/g, '') //copy the dropdown text and remove spaces
				$(dropdown).attr("name", (text))
				var url = url + "#" + text
					$(".url").click(function(){
						$(dropdown).parent().append(url)
					});
			});
	});