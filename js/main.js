const screenWidth = 1280;
const screenHeight = 900;
var game = new Phaser.Game(screenWidth, screenHeight, Phaser.CANVAS, 'viewport', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('arm_left', 'img/arm_left.png');
    game.load.image('arm_left_button', 'img/arm_left_button.png');
    game.load.image('arm_right_button', 'img/arm_right_button.png');
    game.load.image('background', 'img/background.png');
    game.load.image('background_icon_full', 'img/background-icon_full.png');
    game.load.image('background_icon_empty', 'img/background_icon-empty.png');
    game.load.image('body', 'img/body.png');
    game.load.image('body_button', 'img/body_button.png');
    game.load.image('close_button', 'img/close_button.png');
    game.load.image('ear_left', 'img/ear_left.png');
    game.load.image('ear_left_button', 'img/ear_left_button.png');
    game.load.image('ear_right', 'img/ear_right.png');
    game.load.image('ear_right_button', 'img/ear_right_button.png');
    game.load.image('final', 'img/final.png');
    game.load.image('head', 'img/head.png');
    game.load.image('head_button', 'img/head_button.png');
    game.load.image('leg_left', 'img/leg_left.png');
    game.load.image('leg_left_button', 'img/leg_left_button.png');
    game.load.image('leg_right', 'img/leg_right.png');
    game.load.image('leg_right_button', 'img/leg_right_button.png');
    game.load.image('music_button', 'img/music_button.png');
    game.load.image('next_piece_button', 'img/next_piece_button.png');
    game.load.image('prev_piece_button', 'img/prev_piece_button.png');
    game.load.image('replay_button', 'img/replay_button.png');
    game.load.image('urs_form', 'img/urs-form.png');
}

var text;

function create() {
    game.stage.backgroundColor = '#508c47';

    // arm_left = game.add.sprite(100, 200, 'arm_left');
    // arm_left.inputEnabled = true;
    //
    arm_left_button = game.add.sprite(200, 675, 'arm_left_button');
    arm_left_button.inputEnabled = true;
    //
    // arm_right_button = game.add.sprite(100, 200, 'arm_right_button');
    // arm_right_button.inputEnabled = true;
    //
    //
    // background_icon_full = game.add.sprite(100, 200, 'background_icon_full');
    // background_icon_full.inputEnabled = true;
    //
    // background_icon_empty = game.add.sprite(100, 200, 'background_icon_empty');
    // background_icon_empty.inputEnabled = true;
    //
    body = game.add.sprite(100, 200, 'body');
    body.inputEnabled = true;
    //
    // body_button = game.add.sprite(100, 200, 'body_button');
    // body_button.inputEnabled = true;
    //
    // close_button = game.add.sprite(100, 200, 'close_button');
    // close_button.inputEnabled = true;
    //
    // ear_left = game.add.sprite(100, 200, 'ear_left');
    // ear_left.inputEnabled = true;
    //
    // ear_left_button = game.add.sprite(100, 200, 'ear_left_button');
    // ear_left_button.inputEnabled = true;
    //
    // ear_right = game.add.sprite(100, 200, 'ear_right');
    // ear_right.inputEnabled = true;
    //
    // ear_right_button = game.add.sprite(100, 200, 'ear_right_button');
    // ear_right_button.inputEnabled = true;
    //
    // final = game.add.sprite(100, 200, 'final');
    // final.inputEnabled = true;
    //
    // head = game.add.sprite(100, 200, 'head');
    // head.inputEnabled = true;
    //
    // head_button = game.add.sprite(100, 200, 'head_button');
    // head_button.inputEnabled = true;
    //
    // leg_left = game.add.sprite(100, 200, 'leg_left');
    // leg_left.inputEnabled = true;
    //
    // leg_left_button = game.add.sprite(100, 200, 'leg_left_button');
    // leg_left_button.inputEnabled = true;
    //
    // leg_right = game.add.sprite(100, 200, 'leg_right');
    // leg_right.inputEnabled = true;
    //
    // leg_right_button = game.add.sprite(100, 200, 'leg_right_button');
    // leg_right_button.inputEnabled = true;
    //
    music_button = game.add.sprite(10, 10, 'music_button');
    music_button.inputEnabled = true;
    music_button.scale.setTo(0.3, 0.3);

    next_piece_button = game.add.sprite(1050, 700, 'next_piece_button');
    next_piece_button.inputEnabled = true;
    next_piece_button.width = 200;
    next_piece_button.height = 200;

    prev_piece_button = game.add.sprite(25, 700, 'prev_piece_button');
    prev_piece_button.inputEnabled = true;
    prev_piece_button.width = 200;
    prev_piece_button.height = 200;

    replay_button = game.add.sprite(1150, 10, 'replay_button');
    replay_button.inputEnabled = true;
    replay_button.scale.setTo(0.25, 0.25);

    urs_form = game.add.sprite(screenWidth/2, 100, 'urs_form');
    urs_form.x = screenWidth/2 - urs_form.width / 2;
    debugger;
    urs_form.inputEnabled = true;
    urs_form.scale.setTo(0.9, 0.9);


    // cap1 = game.add.sprite(100, 200, 'cap');
    // sprite1.inputEnabled = true;
    // sprite1.input.enableDrag();
    //
    // sprite2 = game.add.sprite(400, 400, 'corp');
    // sprite2.inputEnabled = true;
    // sprite2.input.enableDrag();

}

function update() {

    // if (checkOverlap(sprite1, sprite2))
    // {
    //     text.text = 'Drag the sprites. Overlapping: true';
    // }
    // else
    // {
    //     text.text = 'Drag the sprites. Overlapping: false';
    // }

}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}
