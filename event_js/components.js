var times=0;
var bigTile_w;
var bigTile_h;
var num_tiles=14;
var picture=false;
var colours = ["#FF5722","#795548","#FFC107","#4CAF50","#2196F3","#F44336","#673AB7"];
var eventNames=["Bizpark","Chemistry","Civil","Computer Science","Electronics","Electrical","General","Mechanical","Envision","Photography","Physics","Quizzing","Robotics","Young Engineer"];
var names=['BIZ','CHEM','CIVIL','CSE','ECE','EEE','GEN','MECH','ENV','PHOTO','PHY','QUIZ','ROBO','YOUNG'];
function create_grid(type){
  if(type==1){
    var bigTile="<div class='bigTile' style='width:"+bigTile_w+"px;height:"+bigTile_h+"px'>";
    var colour=Math.floor(Math.random()*7);
    var eventChooser=Math.floor(Math.random()*num_tiles);
    var smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile1' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 35%' height='30%' width='30%' src='cliparts/"+names[eventChooser]+".png'></div>";
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile;
    bigTile+="</div>";

  }
  else if(type==2){
    var bigTile="<div class='bigTile' style='width:"+bigTile_w+"px;height:"+bigTile_h+"px'>";
    var backChoice=Math.floor(Math.random()*3);
    var smallTile="";
    var interval=(2+Math.ceil(Math.random()*40))*1000;
    var eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 0){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile;
    interval=(2+Math.ceil(Math.random()*40))*1000;
    eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 1){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    interval=(2+Math.ceil(Math.random()*40))*1000;
    eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 2){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile2' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile2' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 10%' height='60%' width='30%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 

    bigTile+="</div>";

  }
  else if(type==3){
    var bigTile="<div class='bigTile' style='width:"+bigTile_w+"px;height:"+bigTile_h+"px'>";
    var backChoice=Math.floor(Math.random()*3);
    var smallTile="";
    var interval=(2+Math.ceil(Math.random()*40))*1000;
    var eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 0){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile2' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile2' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 10%' height='60%' width='30%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    interval=(2+Math.ceil(Math.random()*40))*1000;
    eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 1){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    interval=(2+Math.ceil(Math.random()*40))*1000;
    eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 2){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 

    bigTile+="</div>";

  }
  else if(type==4){
    var bigTile="<div class='bigTile' style='width:"+bigTile_w+"px;height:"+bigTile_h+"px'>";
    var backChoice=Math.floor(Math.random()*4);
    var smallTile="";
    var interval=(2+Math.ceil(Math.random()*40))*1000;
    var eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 0){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    interval=(2+Math.ceil(Math.random()*40))*1000;
    eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 1){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    interval=(2+Math.ceil(Math.random()*40))*1000;
    eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 2){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    interval=(2+Math.ceil(Math.random()*40))*1000;
    var eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice == 3){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile3' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    bigTile+="</div>";

  }else if(type==5){
    var bigTile="<div class='bigTile' style='width:"+bigTile_w+"px;height:"+bigTile_h/2+"px'>";
    var backChoice=Math.floor(Math.random()*2);
    var smallTile="";
    var interval=(2+Math.ceil(Math.random()*40))*1000;
    var eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice==0){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile4' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile4' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    var colour=Math.floor(Math.random()*7);
    eventChooser=Math.floor(Math.random()*num_tiles);
    if(picture && backChoice==1){
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile4' onclick='loadEvents(\""+names[eventChooser]+"\")' animDelay="+interval+"  style='background-image:url(events/"+names[eventChooser]+".jpg)'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div></div>";
    }else{
      var colour=Math.floor(Math.random()*7);
      smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile4' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 20%' height='60%' width='60%' src='cliparts/"+names[eventChooser]+".png'></div>";
    }
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    bigTile+="</div>";
  }else{
    var bigTile="<div class='bigTile' style='width:"+bigTile_w+"px;height:"+bigTile_h/2+"px'>";
    var colour=Math.floor(Math.random()*7);
    var eventChooser=Math.floor(Math.random()*num_tiles);
    smallTile="<div id='tile"+num_tiles+"' class='smallTile smallTile1' onclick='loadEvents(\""+names[eventChooser]+"\")' style='background-color:"+colours[colour]+"'><div class='smallTileContents' id='tile"+eventChooser+"contents'><div class='eventName'>"+eventNames[eventChooser]+"</div></div><img class='clipart' style=' margin-top: 10%' height='60%' width='30%' src='cliparts/"+names[eventChooser]+".png'></div>";
    eventNames.splice(eventChooser,1);
    names.splice(eventChooser,1);
    num_tiles--;
    bigTile+=smallTile; 
    bigTile+="</div>";
  }
  return bigTile;
}
function fillTiles(tile_onclicks){
  //CHECK IF MOBILE MODE
  var mobile_mode=1;
  bigTile_h=screen.width;
  bigTile_w=screen.width;
  if(navigator.userAgent.search("Mobile")==-1){
    mobile_mode=0;
    bigTile_w=screen.width*0.24;
    bigTile_h=screen.width*0.24;
  }
  var grid_styles=[1,2,3,4,4];
  var big_used = false;
  for(var i=0;i<3;i++){
    var choice=0;
    while(grid_styles[choice]==0){
      choice=Math.floor(Math.random()*5);
    }
    if(i==2){
      picture = true;
    }else{
      picture = false;
    }
    $("#row1").html($("#row1").html()+create_grid(grid_styles[choice],tile_onclicks));
    grid_styles[choice]=0;
    if((choice==1)||(choice==2)){
      big_used=true;
      grid_styles[1]=0;
      grid_styles[2]=0;
    }
  }
  if(big_used){
    grid_styles=[5,5,5];
  }else{
    grid_styles=[5,5,6];
  }
  for(var i=0;i<3;i++){
    var choice=0;
    while(grid_styles[choice]==0){
      choice=Math.floor(Math.random()*3);
    }
    if(i==0){
      picture = true;
    }else{
      picture = false;
    }
    $("#row2").html($("#row2").html()+create_grid(grid_styles[choice],tile_onclicks));
    grid_styles[choice]=0;
  }
}
var step=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var mode=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function changebg(i){
  var percent=step[i]*50;
  if(mode[i]==0){
    step[i]++;
  }
  else{
    step[i]--;
  }
  if(step[i]==3){
    step[i]=1;
    mode[i]=1;
  }
  if(step[i]==-1){
    step[i]=1;
    mode[i]=0;
  }
  percent=percent+'%';
    $("#tile"+i).animate({
      backgroundPositionY:percent}
      ,500,'linear');
    setTimeout(function(){changebg(i);},$("#tile"+i).attr("animDelay"));
}
function setMotions(){
  var i=0;
  for(i=1;i<16;i++){
    changebg(i);
  }
}
function animateEntry(){
  for(var i=1;i<15;i++){
    var animChoice = Math.floor(Math.random()*2);
    if($("#tile"+i).attr("class") == "smallTile smallTile1"){
      if(animChoice == 0){
        $("#tile"+i).css({height:"98%"});
        $("#tile"+i).animate({width:"98%"},300,"linear");
      }else{
        $("#tile"+i).css({width:"98%"});
        $("#tile"+i).animate({height:"98%"},300,"linear");
      }
    }else if($("#tile"+i).attr("class") == "smallTile smallTile2"){
      if(animChoice == 0){
        $("#tile"+i).css({height:"48%"});
        $("#tile"+i).animate({width:"98%"},300,"linear");
      }else{
        $("#tile"+i).css({width:"98%"});
        $("#tile"+i).animate({height:"48%"},300,"linear");
      }
    }else if($("#tile"+i).attr("class") == "smallTile smallTile3"){
      if(animChoice == 0){
        $("#tile"+i).css({height:"48%"});
        $("#tile"+i).animate({width:"48%"},300,"linear");
      }else{
        $("#tile"+i).css({width:"48%"});
        $("#tile"+i).animate({height:"48%"},300,"linear");
      }
    }else if($("#tile"+i).attr("class") == "smallTile smallTile4"){
      if(animChoice == 0){
        $("#tile"+i).css({height:"98%"});
        $("#tile"+i).animate({width:"48%"},300,"linear");
      }else{
        $("#tile"+i).css({width:"48%"});
        $("#tile"+i).animate({height:"98%"},300,"linear");
      }
    }
  }
}



//Animate Page Back And Forth
function loadEvents(category,slideAutomaton){
  initLoading();
  var tathvaID=$("#TathvaId").val();
  if(tathvaID!=""){
    $.ajax({
      type: "POST",
      url: "php/getEvents.php",
      data: "tathvaId="+tathvaID+"&category="+category,
      success: function( result ){
      console.log(result);
        var allEvents;
        try{
          allEvents = $.parseJSON(result);
          if(allEvents.length > 0){
            formatResult(allEvents,category,slideAutomaton);
          }else{
            stopLoading();
          }
        }catch(exception){
          stopLoading();
        }
      }
    });
  }else{
    $.ajax({
      type: "POST",
      url: "php/getEvents_logged_out.php",
      data: "category="+category,
      success: function( result ){
      console.log(result);
        var allEvents;
        try{
          allEvents = $.parseJSON(result);
          if(allEvents.length > 0){
            formatResult(allEvents,category,slideAutomaton);
          }else{
            stopLoading();
          }
        }catch(exception){
          stopLoading();
        }
      }
    });
  }
}

function goBack(){
  var animateChoice = Math.ceil(Math.random()*66);
  PageTransitions.nextPage(animateChoice);
}




//Animate Event Content
function showText(){
  $(".event_name").css({'-ms-transform': 'scaleY(1)',
                      '-moz-transform': 'scaleY(1)',
                      '-webkit-transform': 'scaleY(1)',
                      'transform': 'scaleY(1)'});
  $(".prizes_worth").css({'-ms-transform': 'scaleY(1)',
                      '-moz-transform': 'scaleY(1)',
                      '-webkit-transform': 'scaleY(1)',
                      'transform': 'scaleY(1)'});
  $(".tabs").css({'-ms-transform': 'scaleY(1)',
                      '-moz-transform': 'scaleY(1)',
                      '-webkit-transform': 'scaleY(1)',
                      'transform': 'scaleY(1)'});
  $(".tab_pages").css({'-ms-transform': 'scaleY(1)',
                      '-moz-transform': 'scaleY(1)',
                      '-webkit-transform': 'scaleY(1)',
                      'transform': 'scaleY(1)'});
  $(".button_container").css({'-ms-transform': 'scaleY(1)',
                      '-moz-transform': 'scaleY(1)',
                      '-webkit-transform': 'scaleY(1)',
                      'transform': 'scaleY(1)'});
  $(".arrows").css({'-ms-transform': 'scaleY(1)',
                      '-moz-transform': 'scaleY(1)',
                      '-webkit-transform': 'scaleY(1)',
                      'transform': 'scaleY(1)'});
}
function hideText(index,direction){
  $(".event_name").css({'-ms-transform': 'scaleY(0)',
                      '-moz-transform': 'scaleY(0)',
                      '-webkit-transform': 'scaleY(0)',
                      'transform': 'scaleY(0)'});
  $(".prizes_worth").css({'-ms-transform': 'scaleY(0)',
                      '-moz-transform': 'scaleY(0)',
                      '-webkit-transform': 'scaleY(0)',
                      'transform': 'scaleY(0)'});
  $(".tabs").css({'-ms-transform': 'scaleY(0)',
                      '-moz-transform': 'scaleY(0)',
                      '-webkit-transform': 'scaleY(0)',
                      'transform': 'scaleY(0)'});
  $(".tab_pages").css({'-ms-transform': 'scaleY(0)',
                      '-moz-transform': 'scaleY(0)',
                      '-webkit-transform': 'scaleY(0)',
                      'transform': 'scaleY(0)'});
  $(".button_container").css({'-ms-transform': 'scaleY(0)',
                      '-moz-transform': 'scaleY(0)',
                      '-webkit-transform': 'scaleY(0)',
                      'transform': 'scaleY(0)'});
  $(".arrows").css({'-ms-transform': 'scaleY(0)',
                      '-moz-transform': 'scaleY(0)',
                      '-webkit-transform': 'scaleY(0)',
                      'transform': 'scaleY(0)'});
}
function slideCard(index,nextIndex){
  if(index%2==1){
    $("#card-"+(index)).css({opacity:0});
    $("#card-"+index).toggleClass("moveToLeft");
  }else{
  	$("#card-"+(index)).css({opacity:0});
    $("#card-"+index).toggleClass("moveToRight");
  }
  if(nextIndex%2==1){
    $("#card-"+nextIndex).css({opacity:1});
    $("#card-"+nextIndex).toggleClass("moveToLeft");
  }else{
  	$("#card-"+nextIndex).css({opacity:1});
    $("#card-"+nextIndex).toggleClass("moveToRight");
  }
}

function changeTab(index,tab){
  if(tab!=1){
    $("#"+index+"_tab_page1").fadeOut(200);
  }
  if(tab!=2){
    $("#"+index+"_tab_page2").fadeOut(200);
  }
  if(tab!=3){
    $("#"+index+"_tab_page3").fadeOut(200);
  }
  $("#"+index+"_tab_page"+tab).fadeIn(200);
}



//Populate Event List
function addEvent(event,index,category,lastIndex){

  var newSection="<div class=\"section\" id=\"section-"+index+"\" style=\"background-image: url('event_pics/"+category+""+index+".jpg')\"></div>";
  var newCard="";
  if(index%2 == 1){
    newCard+="<div class=\"left-cards";
    if(index != 1){
      newCard+=" moveToLeft\"";
    }else{
      newCard+="\"";
    }
    newCard+=" id=\"card-"+index+"\">";
  }else{
    newCard+="<div class=\"right-cards";
    if(index != 1){
      newCard+=" moveToRight\"";
    }else{
      newCard+="\"";
    }
    newCard+=" id=\"card-"+index+"\">";
  }
  newCard+="<div class=\"card_background\"></div><div class=\"card_content\">";
  newCard+="<div class=\"event_name\"";
  if(index == 1){
    newCard+=" id=\"event_name_1\"";
  }
  newCard+=">"+event.eventName+"</div>";
  newCard+="<div class=\"prizes_worth\">Prizes Worth &#8377 "+event.prizesWorth+"</div>";
  newCard+="<div class=\"tabs\"";
  if(index == 1){
    newCard+=" id=\"tabs_1\"";
  }
  newCard+=">";
  newCard+="<span class=\"tab tab1\" onclick=\"changeTab("+index+",1)\">Description</span><span class=\"tab tab1\" onclick=\"changeTab("+index+",2)\">Rules</span><span class=\"tab\" onclick=\"changeTab("+index+",3)\">Contacts</span></div>";
  newCard+="<div class=\"tab_pages\""; 
  if(index == 1){
    newCard+=" id=\"tab_pages_1\"";
  }
  newCard+=">";
  
  var description=event.eventDescription;
  description+="<br><br>";
  description+="<div class=\"headingTabPage\">Schedule</div>";
  description+="<span class=\"heading2TabPage\">Venue: </span>"+event.place+"<br>";
  var date= new Date(Number(event.eventStartTime));
  var startTime = $.format.date(date.getTime(),"HH:mm a On ddd, D Of MMMM");
  description+="<span class=\"heading2TabPage\">Starting Time: </span>"+startTime+"<br>";
  date= new Date(Number(event.eventStartTime) + 300000);
  startTime = $.format.date(date.getTime(),"HH:mm a On ddd, D Of MMMM");
  description+="<span class=\"heading2TabPage\">Registration Closes: </span>"+startTime+"<br>";
  description+="<br>";
  
  newCard+="<div class=\"tab_page tab_page_1\" id=\""+index+"_tab_page1\">"+description+"</div>";
  newCard+="<div class=\"tab_page\" id=\""+index+"_tab_page2\">"+event.Data2+"</div>";
  newCard+="<div class=\"tab_page\" id=\""+index+"_tab_page3\">For further enquiries, Please Contact:<br><br>"+event.eventContacts+"</div></div>";
  newCard+="<center>";
  newCard+="<div class=\"button_container\"";
  if(index == 1){
    newCard+=" id=\"button_container_1\"";
  }
  newCard+=">";
  var tathvaID=$("#TathvaId").val();
  if(tathvaID != ""){
    if(event.eventStatus == 1){
    	newCard+="<div class=\"submit_register";
    	if(index%2==1){
        newCard+=" hvr-sweep-to-left\" onclick=\"alert('Event Registration Closed');\">";
      }else{
        newCard+=" hvr-sweep-to-right\" onclick=\"alert('Event Registration Closed');\">";
      }
      newCard+="Registration Closed</div>";
    }
    else if(event.eventId == 'EID039'){
      newCard+="<div class=\"submit_register";
      if(index%2==1){
        newCard+=" hvr-sweep-to-left\" onclick=\"upload_photo()\">";
      }else{
        newCard+=" hvr-sweep-to-right\" onclick=\"upload_photo()\">";
      }
      newCard+="Upload Photo</div>";
    }else if(event.eventId == 'EID056'){
      newCard+="<div class=\"submit_register";
      if(index%2==1){
        newCard+=" hvr-sweep-to-left\" onclick=\"window.location.href='http://tathva.org/interface'\">";
      }else{
        newCard+=" hvr-sweep-to-right\" onclick=\"window.location.href='http://tathva.org/interface'\">";
      }
      newCard+="Upload Abstract</div>";
    }else if(event.eventCategory == 'ENV'){
      newCard+="<div class=\"submit_register";
      if(index%2==1){
        newCard+=" hvr-sweep-to-left\" onclick=\"upload_document('"+event.eventId+"',"+index+")\">";
      }else{
        newCard+=" hvr-sweep-to-right\" onclick=\"upload_document('"+event.eventId+"',"+index+")\">";
      }
      newCard+="Upload Abstract</div>";
    }else if(event.Registered == 0){
      newCard+="<div class=\"submit_register";
      if(index%2==1){
        newCard+=" hvr-sweep-to-left\" onclick=\"register('"+event.eventId+"',"+event.eventMinNumberOfParticipants+","+event.eventMaxNumberOfParticipants+",'"+category+"',"+index+")\">";
      }else{
        newCard+=" hvr-sweep-to-right\" onclick=\"register('"+event.eventId+"',"+event.eventMinNumberOfParticipants+","+event.eventMaxNumberOfParticipants+",'"+category+"',"+index+")\">";
      }
      newCard+="Register</div>";
    }else{
      newCard+="<div class=\"submit_unregister";
      if(index%2==1){
        newCard+=" hvr-sweep-to-left\" onclick=\"unregister('"+event.eventId+"','"+category+"',"+index+")\">";
      }else{
        newCard+=" hvr-sweep-to-right\" onclick=\"unregister('"+event.eventId+"','"+category+"',"+index+")\">";
      }
      newCard+="Unregister</div>";
    }
  }else{
    newCard+="<div class=\"submit_register";
    if(index%2==1){
      newCard+=" hvr-sweep-to-left\" onclick=\"login(event)\">";
    }else{
      newCard+=" hvr-sweep-to-right\" onclick=\"login(event)\">";
    }
    if(event.eventId=='EID039'){
      newCard+="Upload Photo</div>";
    }else if(event.eventCategory=='ENV'){
      newCard+="Upload Abstract</div>";
    }else{
      newCard+="Register</div>";
    }
  }
  if(event.eventId=='EID010'){
  	newCard+="<br><div style='margin-top: 1%' class='submit_register hvr-sweep-to-left' onclick='window.location.href=\"http://www.codechef.com/KOKO2016\"' >Click Here To Code</div>";
  }
  if(index != lastIndex){
    newCard+="</div></center><svg class='arrows skrollable skrollable-between' data-0p='display:block;' data-10p='display:none;' style='display: block;'><path class='a1' d='M0 0 L30 32 L60 0'></path><path class='a2' d='M0 20 L30 52 L60 20'></path><path class='a3' d='M0 40 L30 72 L60 40'></path></svg></div></div>";
  }else{
    newCard+="</div></center></div></div>";
  }

  $("#fullpage").html($("#fullpage").html() + newSection);
  $("#cardsContainer").html($("#cardsContainer").html() + newCard);
}

function formatData2(event,index,category){
  event.Data2="<div class=\"rules_container\"><a href=\""+event.eventRules+"\" class=\"intense\"><div class=\"rules_button hvr-sweep-to-left\">Rules And Regulations</div></a></div><br>";
  if(event.problemStatement!=""){
    event.Data2+="<div class=\"headingTabPage\">Problem Statement</div>";
    event.Data2+=event.problemStatement;
    event.Data2+="<br><br>";
  }
  event.Data2+="<div class=\"headingTabPage\">Prizes</div>";
  event.Data2+="<span class=\"heading2TabPage\">First Prize: </span>&#8377 "+event.firstPrize+"<br>";
  event.Data2+="<span class=\"heading2TabPage\">Second Prize: </span>&#8377 "+event.secondPrize+"<br>";
  event.Data2+="<span class=\"heading2TabPage\">Third Prize: </span>&#8377 "+event.thirdPrize+"<br>";
  
}

function formatResult(allEvents,category,slideAutomaton){
  $("#fullpage").html("");
  $("#cardsContainer").html("");
  for(var i=0; i<allEvents.length ; i++){
    var currentEvent=allEvents[i];
    formatData2(currentEvent,i+1,category);
    addEvent(currentEvent,i+1,category,allEvents.length);
  }
  initializeSecondPage(category,slideAutomaton);
}

var firstTime = true;

function initializeSecondPage(category,slideAutomaton){
  if(!firstTime){
    $.fn.fullpage.destroy('all');
  }
  $('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction){
          hideText(index,direction);
          setTimeout(function(){
                  slideCard(index,nextIndex);
                },250);
          setTimeout(showText,1750);
        }
    });
  $.fn.fullpage.setScrollingSpeed(2000);
  $("body").on('mousewheel DOMMouseScroll', function(e) {
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
    if($(e.target).hasClass('tab_page')){
    }
    else{
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    }
  });
  var elements = document.querySelectorAll( '.intense' );
  Intense( elements );
  stopLoading();
  var animateChoice = Math.ceil(Math.random()*66);
  PageTransitions.nextPage(animateChoice);
  $.fn.fullpage.moveTo(slideAutomaton);
  history.pushState(null, null, 'index.php?event='+category+"&slideNumber=1");
  $(window).on('popstate', function(event) { 
    goBack();
  });
  /*$('body').on('keydown', function(event) {
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 27 ){
      history.back();
      $('body').off('keydown');
    }   
  });*/
  firstTime = false;
}


window.onload = function(){
    stopLoading();
}

//Document.Ready
$(document).ready(function(){
  initLoading();
  var request=document.getElementById('body');
  if(request){
    request.call(document.getElementById('body'));
  }
  else if(typeof window.ActiveXObject!=='undefined'){
    var wscript=new ActiveXObject("WScript.Shell");
    if(wscript!==null){
      wscript.SendKeys("{F11}");
    }
  }
  var leftmargin = screen.width*0.045;
  var topmargin = screen.height*0.085;
  $('#total_container').css({"margin-left": leftmargin+"px","margin-top":topmargin+"px"});
  fillTiles();
  animateEntry();
  setMotions();
  $('.smallTile').bind('touchstart touchend', function(e) {
         e.preventDefault();
         $(this).toggleClass('hover_effect');
  }); 

  $(".pt-page").click (function(){
      $("#login_popup").css({visibility:'hidden',opacity:'0'});
  });

  $(".pt-page").hover (function(){
      $("#user_menu").css({display:'none',opacity:'0'});
  });

  $(".burger").hover(function(){
      $("#user_menu").css({display:'block',opacity:'1'});
  });
});



function register(eventId,minParticipants,maxParticipants,category,index){
  if(maxParticipants==1){
    window.location.href="../Register/register_one.php?eventId="+eventId+"&lastPage=Event&category="+category+"&slide="+index;
  }else{
    $("#register_iframe").attr({'src':"../Register/register.php?eventId="+eventId+"&minParticipant="+minParticipants+"&maxParticipant="+maxParticipants+"&lastPage=Event&category="+category+"&slide="+index});
    $("#popup").css({'visibility':'visible','opacity':1});
  }
}

function upload_document(eventId,index){
  if(eventId=='EID041'){
    $("#register_iframe").attr({'src':"../Register/register_srishti.php"});
  }else{
    $("#register_iframe").attr({'src':"../Register/register_blue.php?eventId="+eventId+"&slide="+index});
  }
  $("#popup").css({'visibility':'visible','opacity':1});
}

function upload_photo(){
  $("#register_iframe").attr({'src':"../Register/register_pers.php"});
  $("#popup").css({'visibility':'visible','opacity':1});
}

function hide_popup(){
  $("#popup").css({'visibility':'hidden','opacity':0});
}

function unregister(eventId,category,index){
  var tathvaID=$("#TathvaId").val();
  window.location.href="../Register/unregister.php?eventId="+eventId+"&lastPage=Event&category="+category+"&slide="+index;
}

function closeRegister(lastPage,category,slide){
	$("#popup").css({'visibility':'hidden','opacity':0});
	window.location.href="../"+lastPage+"/index.php?event="+category+"&slideNumber="+slide;
}

function closeRegisterSimply(){
  $("#popup").css({'visibility':'hidden','opacity':0});
}

function closePhotoSimply(){
  $("#popup").css({'visibility':'hidden','opacity':0});
  window.location.replace('../Event/index.php?event=PHOTO&slideNumber=1');
}

function closeBlueSimply(){
  $("#popup").css({'visibility':'hidden','opacity':0});
  window.location.replace('../Event/index.php?event=ENV&slideNumber=1');
}

function closeIframe(){
  $("#login_popup").css({display:'none',opacity:'0'});
  location.reload();
}

function loginClick(){
  $("#login_popup").css({visibility:'visible',opacity:'1'});
}

function login(event){
  alert("Login Before Registration");
  event.stopPropagation();
  loginClick();
}

function logout(){
  $("#user_menu").css({display:'none',opacity:'0'});
  initLoading();
  $.ajax({
      type: "POST",
      url: "../Register/logout.php",
      success: function( result ){
        if(result=='success'){
          location.reload();
          stopLoading();
        }else{
          alert('No Internet Connection');
        }
      }
    });
}




