let colorChoice;

function selectColor() {
  const x = document.getElementsByName('color');
  
  for(i = 0; i < x.length; i++) {
   if(x[i].checked){
     let colorChoice = x[i].value;
     console.log(colorChoice);
   };
  };
  
};





function makeGrid(b) {
    for(var rows = 0; rows < b; rows++) {
        for(var columns = 0; columns < b; columns++) {
          $("#output").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/b);
    $(".grid").height(960/b);
  
    $('.grid').mouseenter(function() {
      $(this).css("background-color", "black");
    });
    $('#red').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "#D21404")
      });
    });
    $('#orange').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "#FCAE1E")
      });
    });
    $('#yellow').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "#FFDA03")
      });
    });
    $('#blue').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "blue")
      });
    });  
    $('#green').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "#028A0F")
      });
    });
    $('#purple').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "#A32CC4")
      });
    });
    $('#black').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "black")
      });
    });
    $('#white').click(function() {
      $('.grid').mouseenter(function() {
        $(this).css("background-color", "white")
      });
    });
};

function run() {
  var f = prompt("a number between 0 and 100");
  selectColor();
  makeGrid(f);
 
};

function clearGrid(){
    $(".grid").remove();
};
