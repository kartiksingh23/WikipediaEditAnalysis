$(document).ready(function(){
							
							$(".navbar-brand").mouseover(function()
													{
														$(".navbar-brand").css({"text-shadow": "0px 0px 10px #B2B2FF"});
													})
							$(".navbar-brand").mouseleave(function()
													{
														$(".navbar-brand").css({"text-shadow": "0 0 0 "});
													})

							
							$(".title").html("WikiEditAnalysis");

							$("#down").mouseover(function()
													{
														$("#down").css({"box-shadow": "0px 0px 10px #B2B2FF" , "border-radius":"150px"});
													})


													
							$("#down").mouseleave(function()
													{
														$("#down").css({"box-shadow": "0 0 0 "});
													})

});