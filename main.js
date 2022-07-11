function preload() {
	world_start = loadSound("world_start.wav");
	die_sound = loadSound('mariodie.wav');
	kick_sound = loadSound('kick.wav');
	gameover_sound = loadSound('gameover.wav');
	jump_sound = loadSound('jump.wav');
	coin_sound = loadSound('coin.wav');
	setSprites();
	MarioAnimation();
}

noseX = 0;
noseY = 0;

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(805,400);
	video.parent('game_console');

	posenet = ml5.poseNet(video, modelloaded);
	posenet.on('pose',gotresults);
}

function draw() {
	game()
}

function modelloaded(){
	console.log('Model Loaded!');
}

function gotresults(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}


