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
    
    // new button
    $("#new").click(function(){
        //reload page
        location.reload();
    })
    
    //pause button$
    $("#pause").click(function(){
        clearInterval(action);
        reading = false;
        $("#pause").hide();
        $("#resume").show();
    });
    
    //resume button
    
    $("#resume").click(function(){
        //start reading
        action = setInterval(read, frequency);
            
        //go back to reading mode
        reading = true;
                             
        $("#resume").hide();
        $("#pause").show();
    });
    
    
    //changing font size
    
    $("#fontsizeslider").on("slidestop",function(event, ui){
        console.log("sliker working")
        //refresh slike
        $("#fontsizeslider").slider("refresh");
        var sliderValue = parseInt($("#fontsizeslider").val());
          
        $("#result").css("font-size", sliderValue);
        
        $("#fontsize").text(sliderValue);
        
        
    });
    
    
    // speed slider
     $("#speedslider").on("slidestop",function(event, ui){
        console.log("sliker working")
        //refresh slike
        $("#speedslider").slider("refresh");
        var sliderValue = parseInt($("#speedslider").val());
          
                
        $("#speed").text(sliderValue);
        
        //stop reading
        clearInterval(action);
        
        //change frequency 
        frequency = 60000/sliderValue;
        
        //resume if we reading mode
        if(reading){
            action = setInterval(read, frequency);
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









