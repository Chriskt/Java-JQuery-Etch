$(document).ready(function() {

    $('.button').on('click', function() {
        $('.unit').removeClass('hover');
        var value = prompt('How many Squares per size do you want?');
        createBoxes(value);
    });

    $('.rainbow').on('click', function() {
        $('.unit').removeClass('hover');
        var value = prompt('How many Squares per size do you want?');
        createColor(value);
    });

    createBoxes(16);
  });


function createBoxes(squares) {

    $('.block').empty();
    var startNum = squares * squares;
    for(var y = 0; y < startNum; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('.block');
        };
        var squareWidth = 600/squares;
        var squareWidth = squareWidth - 4;

            $('.unit').width(squareWidth).height(squareWidth);


        $('.unit').hover(function() {
        $(this).addClass('hover');
    });
    };

function createColor(squares) {

    $('.block').empty();
    var startNum = squares * squares;
    for(var y = 0; y < startNum; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('.block');
        };
        var squareWidth = 600/squares;
        var squareWidth = squareWidth - 4;

        $('.unit').width(squareWidth).height(squareWidth);

        $('.unit').hover(function() {
            $(this).css('backgound-color', function() {
                var multiplecolor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                $(this).css("background",multiplecolor);
            });
    });
    };





/*$(".unit").hover(function() {
    	$(this).addClass('hover');
    } , function () {
    	$(this).removeClass('hover');
	 });
*/