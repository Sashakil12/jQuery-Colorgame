var colors;
var pickedColor;


function colorizeCubes() {
    $("#pc").text(pickedColor);
    $(".cube").each(function (e) {
        if (colors[e]) {
            $(this).css("backgroundColor", colors[e]);
        } else {
            $(this).hide();
        }
    })
}
function resettxt(){
    $("#msg").text('Click "New Game" to Generate colors and start playing');
    $("#att").text("");
}
$(".cube").on("click", function () {
    var col = $(this).css("backgroundColor");
    console.log(col);
    if (pickedColor == col) {
        $("#msg").text("You Win! Click 'New Game' to Play Again");
        $("#att").text("Win!");
        $(".cube").css("backgroundColor", pickedColor)
    } else {
        $("#att").text("Try Again");
    }
})
$("#new").on("click", function () {
    resettxt();
    colors = colorgen(6);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    console.log("picked " + pickedColor)
    colorizeCubes();
})
$("#easy").on("click", function () {
    resettxt();
    colors = [];
    colors = colorgen(3);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorizeCubes();
})
$("#hard").on("click", function () {
    resettxt();
    $(".cube").show();
    colors = [];
    colors = colorgen(6);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorizeCubes();
})

function colorgen(mode) {
    var arr = [];
    for (var i = 0; i < mode; i++) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return arr;
}