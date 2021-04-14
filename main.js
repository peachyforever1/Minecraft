canvas = new fabric.Canvas("myCanvas")
var player_X = 0
var player_Y = 0
var block_img_width = 30
var block_img_height = 30
var player_object = ""
var block_img_object = ""

function player_update() {

    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_Y,
            left: player_X


        });
        canvas.add(player_object)
    });

}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width)
        block_img_object.scaleToHeight(block_img_height)
        block_img_object.set({
            top: player_Y,
            left: player_X
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e) {
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == "80") {
        block_img_width = block_img_width + 10
        block_img_height = block_img_height + 10
        document.getElementById("current_width").innerHTML = block_img_width
        document.getElementById("current_height").innerHTML = block_img_height
    }
    if (e.shiftKey == true && keypressed == "77") {
        block_img_width = block_img_width - 10
        block_img_height = block_img_height - 10
        document.getElementById("current_width").innerHTML = block_img_width
        document.getElementById("current_height").innerHTML = block_img_height
    }
    if (keypressed == "37") {
        left()
    }
    if (keypressed == "38") {
        up()
    }
    if (keypressed == "39") {
        right()

    }
    if (keypressed == "40") {
        down()
    }
    if (keypressed == "67") {
        new_img("cloud.jpg")
    }
    if (keypressed == "68") {
        new_img("dark_green.png")
    }
    if (keypressed == "71") {
        new_img("ground.png")
    }
    if (keypressed == "76") {
        new_img("light_green.png")
    }
    if (keypressed == "82") {
        new_img("roof.jpg")
    }
    if (keypressed == "84") {
        new_img("trunk.jpg")
    }
    if (keypressed == "85") {
        new_img("unique.png")
    }
    if (keypressed == "87") {
        new_img("wall.jpg")
    }
    if (keypressed == "89") {
        new_img("yellow_wall.png")
    }
}

function up() {
    if (player_Y >= 0) {
        player_Y = player_Y - block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_Y <= 500) {
        player_Y = player_Y + block_img_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_X > 0) {
        player_X = player_X - block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_X <= 850) {
        player_X = player_X + block_img_width;
        canvas.remove(player_object);
        player_update();
    }
}