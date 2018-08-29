//Обертка для числовых полей

$(".wrapChessBoard").css({
    "width": "1000px",
    "height": "1000px",
    "margin": "0 auto",
});

//верхняя строка букв

var tc = "<div class='squareTop'>HGFEDCBA</div>";
$(".wrapChessBoard").append(tc);
$(".squareTop").css({
    "width": "1000px",
    "height": "100px",
    "fontSize": "60px",
    "textAlign": "center",
    "letterSpacing": "60px",
    "marginLeft": "-30px",
    "transform": "rotate(180deg)",
});

//левая сторона чисел

var sl = "<div class='squareLeft'>8<br>7<br>6<br>5<br>4<br>3<br>2<br>1</div>";
$(".wrapChessBoard").append(sl);
$(".squareLeft").css({
    "width": "100px",
    "height": "800px",
    "float": "left",
    "fontSize": "60px",
    "textAlign": "center",
    "lineHeight": "100px",
});

//шатмахтная доска

var cb = "<div class='chessBoard'></div>";
$(".wrapChessBoard").append(cb);
$(".chessBoard").css({
    "width": "800px",
    "height": "800px",
    "float": "left",
});

//правая сторона чисел

var sr = "<div class='squareRight'>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8</div>";
$(".wrapChessBoard").append(sr);
$(".squareRight").css({
    "width": "100px",
    "height": "800px",
    "float": "left",
    "fontSize": "60px",
    "textAlign": "center",
    "lineHeight": "100px",
    "transform": "rotate(180deg)",
});

//нижняя строка букв

var tb = "<div class='squareBottom'>ABCDEFGH</div>";
$(".wrapChessBoard").append(tb);
$(".squareBottom").css({
    "width": "1000px",
    "height": "100px",
    "fontSize": "60px",
    "textAlign": "center",
    "letterSpacing": "60px",
    "marginLeft": "30px",
});

//генерация шахмтной доски

for (var j = 1; j <= 8; j++) {
    if (j % 2 == 0) {
        for (var i = 1; i <= 8; i++) {
            if (i % 2 == 0) {
                addWhiteCell();
                
            } else {
                addBrownCell();
            }
        };
    } else {
        for (var i = 1; i <= 8; i++) {
            if (i % 2 == 0) {
                addBrownCell();               
            } else {
                addWhiteCell();
            }
        };
    }
}

function addBrownCell() {
    var x = "<div class='cellBrown cell'></div>";
    $(".chessBoard").append(x);
    $(".cellBrown").css({
        "float": "left",
        "width": "100px",
        "height": "100px",
        "backgroundColor": "#4A1E08",
    });
}

function addWhiteCell() {
    var x = "<div class='cellWhite cell'></div>";
    $(".chessBoard").append(x);
    $(".cellWhite").css({
        "float": "left",
        "width": "100px",
        "height": "100px",
        "backgroundColor": "#E8CEB2",
    });
}

//присвоение уникального ID каждой клетке доски

$('.cell').attr('id', function (index) {
    return (index + 1);
});

//размещение фигур

$('.cell').css({
    "fontSize": "70px",
    "textAlign": "center"
});

$('#1').html('&#9814');
$('#2').html('&#9816');
$('#3').html('&#9815');
$('#4').html('&#9813');
$('#5').html('&#9812');
$('#6').html('&#9815');
$('#7').html('&#9816');
$('#8').html('&#9814');
$('#9').html('&#9817');
$('#10').html('&#9817');
$('#11').html('&#9817');
$('#12').html('&#9817');
$('#13').html('&#9817');
$('#14').html('&#9817');
$('#15').html('&#9817');
$('#16').html('&#9817');

$('#49').html('&#9823');
$('#50').html('&#9823');
$('#51').html('&#9823');
$('#52').html('&#9823');
$('#53').html('&#9823');
$('#54').html('&#9823');
$('#55').html('&#9823');
$('#56').html('&#9823');
$('#57').html('&#9820');
$('#58').html('&#9822');
$('#59').html('&#9821');
$('#60').html('&#9819');
$('#61').html('&#9818');
$('#62').html('&#9821');
$('#63').html('&#9822');
$('#64').html('&#9820');