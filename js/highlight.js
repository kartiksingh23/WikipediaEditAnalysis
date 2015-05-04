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
														$("#down").css({"box-shadow": "0px 0px 10px black" , "border-radius":"150px"});
													})


													
							$("#down").mouseleave(function()
													{
														$("#down").css({"box-shadow": "0 0 0 "});
													})

							$("#downsecond").mouseover(function()
													{
														$("#downsecond").css({"box-shadow": "0px 0px 10px black" , "border-radius":"150px"});
													})


													
							$("#downsecond").mouseleave(function()
													{
														$("#downsecond").css({"box-shadow": "0 0 0 "});
													})
							$("#downthird").mouseover(function()
													{
														$("#downthird").css({"box-shadow": "0px 0px 10px black" , "border-radius":"150px"});
													})


													
							$("#downthird").mouseleave(function()
													{
														$("#downthird").css({"box-shadow": "0 0 0 "});
													})
});