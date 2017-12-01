$(document).ready(function(){
  //variables
    var myArray;
    var inputLength;
    var reading = false;
    var counter;
    var action;
    var frequency = 200;
    
    $("#new").hide();
    $("#resume").hide();
    $("#pause").hide();
    $("#controls").hide();
    $("#result").hide();
    $("#error").hide();
    
    
    $("#start").click(function(){
        //\+ willmatch spacess
       myArray = $("#userInput").val().split(/\s+/);    //number of words
        inputLength = myArray.length;
        console.log(myArray)
        if(inputLength>1){
            reading = true;
            
            $("#start").hide();
            $("#error").hide();
            $("#userInput").hide();
            $("#new").show();
            $("#pause").show();
            $("#controls").show();
            
            $("#progressslider").attr("max", inputLength - 1)
            
            counter = 0;
            
            $("#result").show();
            $("#result").text(myArray[counter]);
            
            //start reading
            
            action = setInterval(read, frequency)
            
            
        }else{
            $("#error").show();
        }
        
        
        
    });
    
    
    function read(){
        if(counter == inputLength - 1){
           //clearInterval(action);
            reading = false;
            $("#pause").hide();
        }else{
            counter ++;
            
            $("#result").text(myArray[counter]);
            
            $("#progressslider").val(counter).slider('refresh');   
        
        //change text of percentage
            $("#percentage").text(Math.floor(counter/(inputLength-1)*100));
        }
    };
});









