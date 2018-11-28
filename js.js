$(document).ready(function(){

    $('input').focus(function(){
      $(this).parent().find(".label-txt").addClass('label-active');
    });
  
    $("input").focusout(function(){
      if ($(this).val() == '') {
        $(this).parent().find(".label-txt").removeClass('label-active');
      };
    });
  
  });
  function myFunction() {

    var str =document.getElementById("demo1").value;
    var arr ="";
    var y=arr;
    for(i=str.length-1;i>=0;i--)
    {
    	arr+=str.charAt(i);
    }
    
    document.getElementById("demo2").value=arr;
    if(str==arr)
    {
    	document.getElementById("check1").innerHTML="palindrome";
    }
    else
    {
    	document.getElementById("check1").innerHTML="not palindrome";
    }
}