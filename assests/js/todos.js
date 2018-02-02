//Check Of Specific Todos by Clicking
$("ul").on("click","li",function(){        // IMPORTANT CHANGE-use of on
	$(this).toggleClass("completed");
});
//click on X to delete Todos
$("ul").on("click","span",function(event){   //(eventbubbling) when we click on span-li,ul,container,body,html all gets clicked hence their eventlisteners also gets fired
	$(this).parent().fadeOut("500",function(){
	$(this).remove();          // to remove li rather than span
});       
event.stopPropagation();       // to stop eventbubbling
});

//Create new Todos

$("input[type='text'").keypress(function(event){
if(event.which == 13)  {       // to check for enter key
//grabbing new todo text from input
var todoText = $(this).val();
$(this).val("");
// create a new li and add to ul
$("ul").append("<li> <span><i class='fa fa-trash'></i></span> "+todoText+" </li>");
}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});