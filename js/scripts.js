$(document).ready(function(){
  var index=0;
  
$('.next').on({
    'click': function() {
          var src=["images/1.jpg","images/2.jpg","images/3.jpg"];
         
          $('img').fadeOut(200);
          if(index<2 )
          {
          		 index++;
              $('img').fadeIn(200).attr('src', src[index]);
              if(index==0)
              {
              $('.text-success').text("Bear");
              $('.fact').load("ServerFiles/bear.txt");
              $('.fact2').load("ServerFiles/bear2.txt");
              }
              if(index==1)
              {
              $('.fact').load("ServerFiles/lion.txt");
              $('.fact2').load("ServerFiles/lion1.txt");
              $('.text-success').text("Lion-The King");
          		}
              if(index==2)
              {
              $('.fact').load("ServerFiles/wolf.txt");
              $('.fact2').load("ServerFiles/wolf1.txt");
              $('.text-success').text("Wolf-The Loner");
              }
           
            
          }
          else
          {
          		$('img').fadeIn(200).attr('src', src[0]);
              
          		 $('.text-success').text("Bear-The Magestic");
                $('.fact').load("ServerFiles/bear.txt");
              $('.fact2').load("ServerFiles/bear2.txt");
              index=0;
              //flag=0;
          }
          
         
    }
});

$('.previous').on({
    'click': function() {
          var src=["images/1.jpg","images/2.jpg","images/3.jpg"];
          $('img').fadeOut(200)
          
          
          if(index>0)
          {
          		 index--;                
          
              $('img').fadeIn(200).attr('src', src[index]);
              if(index==1)
              {
              $('.fact').load("ServerFiles/lion.txt");
              $('.fact2').load("ServerFiles/lion1.txt");
              $('.text-success').text("Lion-The King");
              }
              if(index==0)
              {
              $('.fact').load("ServerFiles/bear.txt");
              $('.fact2').load("ServerFiles/bear2.txt");
              $('.text-success').text("Bear-The Magestic");
              }
           }
          else
          {
          		index=2;	
          		$('img').fadeIn(200).attr('src', src[index]);
              $('.text-success').text("Wolf-The Loner");
              $('.fact').load("ServerFiles/wolf.txt");
              $('.fact2').load("ServerFiles/wolf1.txt");
              
          }
          
         
    }
});





});