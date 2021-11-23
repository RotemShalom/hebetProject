(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap = function() {
	this.initialize(img.Bitmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,837,321);


(lib._10copy = function() {
	this.initialize(img._10copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,820,839);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.bucket = function() {
	this.initialize(img.bucket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bullet = function() {
	this.initialize(img.bullet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.chotter = function() {
	this.initialize(img.chotter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.dokran = function() {
	this.initialize(img.dokran);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.flanelit = function() {
	this.initialize(img.flanelit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.mivreshet = function() {
	this.initialize(img.mivreshet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.nikui_new = function() {
	this.initialize(img.nikui_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.oil = function() {
	this.initialize(img.oil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text1copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bullet();
	this.instance.setTransform(16,-20,0.09,0.09);

	this.instance_1 = new lib.bullet();
	this.instance_1.setTransform(16,-69,0.09,0.09);

	this.instance_2 = new lib.bullet();
	this.instance_2.setTransform(16,-117,0.09,0.09);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape.setTransform(40.8,13.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgXQAOAFAOACQAPACAMAAQAZAAAOgNQAPgNAAgYIAAheIhLAAQgGAKgDAOQgDANAAAOIAAAOIAKACIAPABIAAAZQgUAAgLgDQgMgCgLgHIgBgXQAAgQAFgQQAEgPAHgLIgXAAIAAgXICZAAIAABvQAAAagKATQgKASgTAJQgTAIgXAAQgPABgQgDg");
	this.shape_1.setTransform(21.575,16.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBdIABgXQALACANAAQANAAAGgHQAGgIABgQIAAhxIglAAIAAgXIBCAAIAACKQABAagNAOQgOANgWAAQgQAAgQgDg");
	this.shape_2.setTransform(4.6,16.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_3.setTransform(-6.225,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgPADgIQACgIAEgIIAYAAIgDAPIgBAXIAABCg");
	this.shape_4.setTransform(-28.225,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBdIABgXQAKACANAAQANAAAGgHQAHgIgBgQIAAhxIgkAAIAAgXIBDAAIAACKQAAAagOAOQgNANgXAAQgOAAgQgDg");
	this.shape_5.setTransform(-44.85,16.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_6.setTransform(-55.675,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFCAIAAiIQAAgPADgJQACgIADgJIAZAAIgDAQIgBAXIAACKgAgJAmQAPgBAMgGQAMgHAHgMQAGgMAAgPIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgKARgTAKQgSAJgZABg");
	this.shape_7.setTransform(-70.05,19.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_8.setTransform(-85.8,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_9.setTransform(-95.825,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_10.setTransform(-113.975,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAQAAQAWAAARgHQATgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_11.setTransform(-131.2,16.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_12.setTransform(-160.9,13.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgXQAOAFAOACQAPACAMAAQAZAAAOgNQAPgNAAgYIAAheIhLAAQgGAKgDAOQgDANAAAOIAAAOIAKACIAPABIAAAZQgUAAgLgDQgMgCgLgHIgBgXQAAgQAFgQQAEgPAHgLIgXAAIAAgXICZAAIAABvQAAAagKATQgKASgTAJQgTAIgXAAQgPABgQgDg");
	this.shape_13.setTransform(-180.125,16.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAIQAPAHAIAMQAHAOAAATIAACBg");
	this.shape_14.setTransform(-199,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_15.setTransform(-211.85,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhFCAIAAiIQAAgPADgJQACgIADgJIAZAAIgDAQIgBAXIAACKgAgJAmQAPgBAMgGQAMgHAHgMQAGgMABgPIAAhZIh0AAIAAgXICRAAIAABvQABAXgLASQgKARgSAKQgUAJgYABg");
	this.shape_16.setTransform(-226.3,19.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA0BfIhUh0QgRALAAAZIAABQIgdAAIAAhFQAAgZAIgOQAJgQARgIIgpg5IAhAAIA7BRIAthRIAiAAIg9BqIA8BTg");
	this.shape_17.setTransform(-254.85,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAHgJIgkAAIAAgYIBXAAQAmAAATASQASASAAAlIAAB0IgdAAIgBh2QAAgYgLgLQgKgMgXAAIgaAAQgGAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_18.setTransform(-277.35,16.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgPADgIQACgIAEgIIAYAAIgDAPIgBAXIAABCg");
	this.shape_19.setTransform(-304.375,16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoBdIABgXQALACANAAQANAAAGgHQAGgIAAgQIAAhxIgkAAIAAgXIBCAAIAACKQAAAagMAOQgNANgXAAQgPAAgRgDg");
	this.shape_20.setTransform(-321,16.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAQAAQAWAAARgHQATgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_21.setTransform(-339.1,16.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhFCAIAAiIQAAgPADgJQABgIAEgJIAZAAIgDAQIgBAXIAACKgAgJAmQAPgBAMgGQAMgHAHgMQAGgMAAgPIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgKARgTAKQgSAJgZABg");
	this.shape_22.setTransform(-362.45,19.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_23.setTransform(-386.4,16.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_24.setTransform(-399,13.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgXQAOAFAOACQAPACAMAAQAZAAAOgNQAPgNAAgYIAAheIhLAAQgGAKgDAOQgDANAAAOIAAAOIAKACIAPABIAAAZQgUAAgLgDQgMgCgLgHIgBgXQAAgQAFgQQAEgPAHgLIgXAAIAAgXICZAAIAABvQAAAagKATQgKASgTAJQgTAIgXAAQgPABgQgDg");
	this.shape_25.setTransform(-418.225,16.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAIQAOAHAHAMQAIAOAAATIAACBg");
	this.shape_26.setTransform(-437.1,16.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhFCAIAAiIQAAgPADgJQABgIAEgJIAZAAIgDAQIgBAXIAACKgAgJAmQAPgBAMgGQAMgHAHgMQAGgMAAgPIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgKARgTAKQgSAJgZABg");
	this.shape_27.setTransform(-454.7,19.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA0BfIhUh0QgRALAAAZIAABQIgdAAIAAhFQAAgZAIgOQAIgQASgIIgpg5IAhAAIA7BRIAthRIAiAAIg9BqIA8BTg");
	this.shape_28.setTransform(-483.25,16.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_29.setTransform(-499.8,16.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQAEgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_30.setTransform(-515.45,16.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_31.setTransform(-530.1,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_32.setTransform(-538.775,24.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_33.setTransform(43.375,-36.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPADgOQAFgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_34.setTransform(27.8,-32.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_35.setTransform(10.1,-32.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhEBfIAAgYIBmAAIhxilIAiAAIAxBNIAqhNIAiAAIg6BmIAyBIIAAAPg");
	this.shape_36.setTransform(-7.8,-32.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAXABQgNgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLASgSAJQgUAJgXAAQghAAgjgOg");
	this.shape_37.setTransform(-27.25,-31.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAHQAOAIAHAMQAIAOAAATIAACBg");
	this.shape_38.setTransform(-52.9,-32.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOADgJQACgIADgIIAZAAIgDAPIgBAXIAACKgAgJAmQAPgBAMgGQAMgGAHgNQAGgLAAgQIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgKARgTAKQgSAJgZABg");
	this.shape_39.setTransform(-70.5,-28.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_40.setTransform(-97.5,-32.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQADgPAHgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgdAAIgBh2QAAgYgKgLQgLgMgXAAIgaAAQgFAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_41.setTransform(-117.75,-32.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgYgLgMQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_42.setTransform(-136.725,-32.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_43.setTransform(-152.45,-32.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_44.setTransform(-167.275,-32.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_45.setTransform(-183.425,-36.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_46.setTransform(-205.425,-32.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_47.setTransform(-220.925,-36.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgYgLgMQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_48.setTransform(-234.875,-32.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_49.setTransform(-250.925,-36.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIggAAIAAClg");
	this.shape_50.setTransform(-263.7,-32.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_51.setTransform(-281.925,-32.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_52.setTransform(-305.3,-32.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_53.setTransform(-318.05,-32.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_54.setTransform(-337.475,-32.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOADgJQACgIADgIIAZAAIgDAPIgBAXIAACKgAgJAmQAPgBAMgGQAMgGAHgNQAGgLAAgQIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgKARgTAKQgSAJgZABg");
	this.shape_55.setTransform(-358.05,-28.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_56.setTransform(-373.8,-32.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_57.setTransform(-388.475,-32.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag2BcQgYgGgXgLIAAirIAdAAIAACbQAQAHARADQARAEAPAAQAWAAATgHQASgGAKgOQALgOAAgTIAAhtIAdAAIAABvQAAAbgOATQgPASgZAJQgYAJgeAAQgXAAgZgFgAgaAoQAFgGAEgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgHAIg");
	this.shape_58.setTransform(-420.25,-31.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_59.setTransform(-443.025,-32.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_60.setTransform(-458.2,-32.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ag3BfIAAgbIAKAAQAXAAAPgOQANgNAEgWIAAhaIgqAAIAAgYIBIAAIAABhQAAAPADAOIANA/IgcAAIgMg1IgBAAQgCAOgIANQgIANgOAHQgOAIgQAAIgIgBg");
	this.shape_61.setTransform(-469.275,-32.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAPBfIAAilIhaAAIAAgYICXAAIAAAYIgfAAIAAClg");
	this.shape_62.setTransform(-483.8,-32.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAANAHQAPAIAIAMQAHAOAAATIAACBg");
	this.shape_63.setTransform(-501.2,-32.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_64.setTransform(-525.15,-34.975);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhDBYIAGgWQAZAGAUAAQAZAAAPgNQAOgNAAgYIAAhdIhiAAIAAgYIB/AAIAABuQAAApgUAUQgWAUgmAAQgYAAgegIg");
	this.shape_65.setTransform(-543.4,-31.975);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAhCAIAAjoIheAAIAAgXIB7AAIAAD/g");
	this.shape_66.setTransform(-560.55,-28.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_67.setTransform(-572.275,-24.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_68.setTransform(43.375,-84.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPADgOQAFgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_69.setTransform(27.8,-80.525);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_70.setTransform(10.1,-80.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AhEBfIAAgYIBmAAIhxilIAiAAIAxBNIAqhNIAiAAIg6BmIAyBIIAAAPg");
	this.shape_71.setTransform(-7.8,-80.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhLBTIAHgWQAcALAXABQgNgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLASgSAJQgUAJgXAAQghAAgjgOg");
	this.shape_72.setTransform(-27.25,-80.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgWQAOAEAOACQAPACAMAAQAZAAAOgNQAPgNAAgZIAAhcIhLAAQgGAIgDAOQgDAOAAANIAAAPIAKACIAPAAIAAAaQgUAAgLgCQgMgDgLgGIgBgYQAAgQAFgQQAEgPAHgKIgXAAIAAgYICZAAIAABvQAAAbgKASQgKASgTAJQgTAJgXgBQgPAAgQgCg");
	this.shape_73.setTransform(-54.725,-80.45);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhLBTIAHgWQAcALAWABQgMgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgLASgUAJQgSAJgZAAQggAAgjgOg");
	this.shape_74.setTransform(-75.25,-80.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_75.setTransform(-94.325,-80.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_76.setTransform(-121.55,-80.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag1BcQgagGgWgLIAAirIAdAAIAACbQAQAHAQADQASAEAQAAQAVAAASgHQATgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgZAJQgYAJgdAAQgYAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_77.setTransform(-143.45,-80.375);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_78.setTransform(-165.1,-80.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_79.setTransform(-179.4,-80.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhLBTIAHgWQAcALAXABQgNgNgEgSIgfiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLASgSAJQgUAJgXAAQghAAgjgOg");
	this.shape_80.setTransform(-194.1,-80.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgWAeQAIgMAEgLQAEgJAAgNIAAgZIAdAAIAAAYQAAAPgIAPQgHAQgNALg");
	this.shape_81.setTransform(-206.475,-70.55);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_82.setTransform(-225.8,-83.475);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_83.setTransform(-244.975,-80.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AhLBTIAHgWQAcALAWABQgLgNgFgSIgfiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgKASgUAJQgSAJgZAAQggAAgjgOg");
	this.shape_84.setTransform(-265.8,-80.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgmBYQgSgJgJgRQgKgSAAgXIAAh0IAeAAIAAB3QAAAOAGAMQAGALAKAHQAKAFANAAQAOAAAKgFQAKgHAGgLQAGgMAAgOIAAg/QAAgPgHgJQgHgIgMgBQgLAAgMAHIgEgVQAHgEAKgDQAJgEAJAAQAPABALAGQAKAHAGAMQAGAMAAARIAAA/QAAAXgJASQgKARgRAJQgRAKgXAAQgVAAgRgKg");
	this.shape_85.setTransform(-284.275,-80.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_86.setTransform(-313.575,-80.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgIQADgJAEgIIAYAAIgDAPIgBAXIAACKgAgIAmQAPAAAMgHQAMgHAGgLQAHgMAAgQIAAhYIh0AAIAAgYICSAAIAABvQAAAXgKASQgLARgSAKQgTAJgYAAg");
	this.shape_87.setTransform(-334.15,-77.25);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAANAHQAPAHAIANQAHAOAAATIAACBg");
	this.shape_88.setTransform(-353.25,-80.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_89.setTransform(-366.425,-84.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_90.setTransform(-381.025,-80.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAPAAQAWAAATgHQASgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgOATQgPASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgHAIg");
	this.shape_91.setTransform(-412.8,-80.375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_92.setTransform(-434.3,-83.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_93.setTransform(-452.95,-80.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_94.setTransform(-481.875,-80.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAGgJIgkAAIAAgYIBYAAQAmAAATASQASASAAAlIAAB0IgeAAIAAh2QAAgYgLgLQgKgMgYAAIgaAAQgFAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_95.setTransform(-503,-80.525);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_96.setTransform(-520.7,-80.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhEBfIAAgYIBmAAIhxilIAiAAIAyBNIAphNIAiAAIg6BmIAyBIIAAAPg");
	this.shape_97.setTransform(-538.6,-80.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AhLBTIAHgWQAcALAXABQgNgNgEgSIgfiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLASgSAJQgTAJgZAAQggAAgjgOg");
	this.shape_98.setTransform(-558.05,-80.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_99.setTransform(-580.675,-84.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAHQAPAHAIANQAHAOAAATIAACBg");
	this.shape_100.setTransform(-593.65,-80.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_101.setTransform(-606.825,-84.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_102.setTransform(-627.7,-80.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AA0BfIhUhzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAIgQASgIIgpg5IAhAAIA7BRIAthRIAiAAIg9BqIA8BTg");
	this.shape_103.setTransform(-646.6,-80.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOADgIQABgJAFgIIAYAAIgDAPIgBAXIAACKgAgJAmQAQAAALgHQANgHAGgLQAHgMgBgQIAAhYIh0AAIAAgYICTAAIAABvQAAAXgLASQgKARgTAKQgSAJgZAAg");
	this.shape_104.setTransform(-667.9,-77.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIggAAIAAClg");
	this.shape_105.setTransform(-686.8,-80.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgZgLgLQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_106.setTransform(-705.175,-80.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_107.setTransform(-719.875,-72.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1copy2, new cjs.Rectangle(-750.8,-117,896.4,178), null);


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBnIAAiEQAAgQgIgHQgIgIgQAAIhUAAIAAgpIBYAAQAagBASAKQATAIAJARQAKARAAAXIAACCgAhVBnIAAhGQAAgeANgOIAqAAQgDAOAAAXIAABNg");
	this.shape.setTransform(293.275,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBnIhLhuQgGAHAAALIAABcIgzAAIAAhEQgBgcAJgRQAJgRATgKIgthAIA8AAIAxBHIAihHIA8AAIg+B1IA8BXg");
	this.shape_1.setTransform(270.85,79.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUCKIAAiOQAAgeAMgOIArAAQgDAPAAAXIAACUgAgLAbQAUgCAMgMQAMgMAAgXIAAhJIh2AAIAAgqICrAAIAABzQAAAbgLATQgMAUgWALQgWALgeABg");
	this.shape_2.setTransform(247.375,83.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBnIAAijIhWAAIAAgpICvAAIAAApIgkAAIAACjg");
	this.shape_3.setTransform(226,79.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBnIAAiDQAAgfgcgBIgjAAIAACjIg1AAIAAjMIBYAAQAoAAAUATQAVAUABAmIAAB/g");
	this.shape_4.setTransform(205.35,79.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHBpIAAgqIAkAAIgBhQQAAgVgIgLQgJgMgPABQgNgBgIAMQgIALgCAWIgNB5Ig1AAIAOhzQABgNAGgNQAFgMAHgIIACgBIAAgBIgPADIgQAGIgMgnQAUgHAbgFQAagEAWAAQAvAAAYAXQAZAYAAAvIAABzg");
	this.shape_5.setTransform(173.4,79.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgBnIgBiDQAAgfgbgBIgjAAIAACjIg2AAIAAjMIBZAAQAoAAAVATQAUAUABAmIAAB/g");
	this.shape_6.setTransform(151.2,79.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBnIAAijIgSAAIAAgpIBHAAIAADMg");
	this.shape_7.setTransform(133.475,79.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDCKIAAiAQAAgGgBgEIgFgJIhWiAIA7AAIApBFIAfhFIA8AAIg8B0QAGAIADAJQACAJAAAKIAAB7g");
	this.shape_8.setTransform(118.425,83.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoCDIBCiiIhtAAIAAhjIA2AAIAAA5IBxAAIAAAjIhECpg");
	this.shape_9.setTransform(90.025,76.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhXBnIAAgqIBiAAIAAhaQAAgQgIgHQgIgIgQAAIg3AAIAAgpIA7AAQAZgBASAKQATAIAKARQAJARAAAXIAABWIAYADIAAApg");
	this.shape_10.setTransform(71.225,79.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoBfQgUgMgLgWQgNgWAAgcIAAgMQAAgOAGgRQAGgQAIgJIADgCIAAgBIgbAGIgKgnQAVgGAbgEQAbgDAXAAQAwAAAZAZQAaAZAAAwIAAATQAAAcgLAWQgLAWgWAMQgVAMgbAAQgZAAgWgMgAgUgwQgKAPAAAdIAAAPQAAAPAFANQAEALAJAHQAJAGAKAAQAMAAAIgGQAJgHAEgLQAGgNAAgPIAAgSQAAgbgKgOQgLgOgSAAQgRAAgKAOg");
	this.shape_11.setTransform(49.8,79.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJA7IAAhLIghAAIAAgpIBVAAIAAB0g");
	this.shape_12.setTransform(32,75.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoBfQgUgMgLgWQgNgWAAgcIAAgMQAAgOAGgRQAGgQAIgJIADgCIAAgBIgbAGIgKgnQAVgGAbgEQAbgDAXAAQAwAAAaAZQAZAZAAAwIAAATQAAAcgLAWQgLAWgWAMQgVAMgbAAQgZAAgWgMgAgUgwQgKAPAAAdIAAAPQAAAPAFANQAEALAJAHQAJAGAKAAQAMAAAIgGQAJgHAEgLQAGgNAAgPIAAgSQAAgbgKgOQgLgOgSAAQgRAAgKAOg");
	this.shape_13.setTransform(15.15,79.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOB7QgHgFgDgFQgEgHAAgIQAAgHAEgGQADgHAHgDQAGgEAIAAQAIAAAHAEQAHADADAHQAEAGAAAHQAAAIgEAHQgDAFgHAFQgHADgIAAQgIAAgGgDgAgUAtIgHiqIA2AAIgGCqg");
	this.shape_14.setTransform(-0.325,77.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgBmIgBiCQAAgggbAAIgjAAIAACiIg2AAIAAjLIBYAAQApAAAUATQAVAUAAAmIAAB+g");
	this.shape_15.setTransform(293.35,28.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoCDIBCiiIhtAAIAAhjIA2AAIAAA5IBxAAIAAAjIhECpg");
	this.shape_16.setTransform(272.425,25.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAoBmIhLhtQgGAHAAALIAABbIgzAAIAAhDQAAgcAIgRQAJgRATgJIgthBIA8AAIAwBHIAjhHIA8AAIg+B1IA8BWg");
	this.shape_17.setTransform(242.8,28.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJA7IAAhLIghAAIAAgpIBVAAIAAB0g");
	this.shape_18.setTransform(223.85,24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoBfQgUgMgMgWQgLgVgBgdIAAgMQAAgOAGgQQAGgRAIgJIADgCIAAgBIgbAGIgKgnQAVgGAbgDQAbgEAXAAQAwAAAaAZQAZAZAAAwIAAATQAAAdgMAVQgLAWgUAMQgWAMgbAAQgZAAgWgMgAgUgwQgKAPAAAdIAAAPQAAAPAFANQAEALAJAHQAJAGAKAAQALAAAJgGQAJgHAFgLQAEgNABgPIAAgSQAAgbgLgOQgJgPgTAAQgSAAgJAPg");
	this.shape_19.setTransform(207,28.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRBmIAAiiIgSAAIAAgpIBHAAIAADLg");
	this.shape_20.setTransform(189.725,28.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AATBmIAAiGQAAgNgHgIQgIgGgOgBIg+AAIAAgpIBCAAQAYAAASAJQASAIAJAQQAJARAAAWIAACDg");
	this.shape_21.setTransform(175.3,28.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoCDIBCiiIhtAAIAAhjIA2AAIAAA5IBxAAIAAAjIhECpg");
	this.shape_22.setTransform(149.175,25.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdBnIgVgEIAAgoQAMACANAAQAMAAAGgHQAFgGAAgOIAAhfIgkAAIAAgqIBZAAIAACOQAAAUgHAPQgIAPgOAHQgOAIgTAAIgSgBg");
	this.shape_23.setTransform(131.825,28.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhUCKIAAiOQAAgeAMgOIArAAQgDAPAAAXIAACUgAgLAaQAUgBAMgMQAMgMAAgXIAAhJIh2AAIAAgqICrAAIAABzQAAAbgLATQgMAVgWAKQgWALgeABg");
	this.shape_24.setTransform(114.275,31.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRBmIAAiiIgSAAIAAgpIBHAAIAADLg");
	this.shape_25.setTransform(96.475,28.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhkBmIAAgqIALAAQAaAAAAgZIAAgyQAAgLACgNQADgNAGgJIggAAIAAgqIBnAAQApAAAUATQAVAUAAAnIAAB+Ig2AAIAAiDQAAgQgHgHQgGgIgPAAIgZAAIgEAUIgBAWIAAA5QAAAVgIAPQgIAPgOAHQgNAIgUAAQgMAAgOgCg");
	this.shape_26.setTransform(79.25,28.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAoBmIhLhtQgGAHAAALIAABbIgzAAIAAhDQAAgcAIgRQAJgRATgJIgthBIA8AAIAwBHIAjhHIA8AAIg+B1IA8BWg");
	this.shape_27.setTransform(48.85,28.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhkBmIAAgqIALAAQAZAAAAgZIAAgyQAAgLADgNQAEgNAFgJIggAAIAAgqIBnAAQAoAAAVATQAVAUAAAnIAAB+Ig2AAIAAiDQAAgQgHgHQgGgIgPAAIgZAAIgEAUIgBAWIAAA5QAAAVgIAPQgHAPgOAHQgOAIgUAAQgMAAgOgCg");
	this.shape_28.setTransform(24.45,28.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-7.4,0,313.59999999999997,106.8), null);


(lib.textend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtCSIBKi1Ih5AAIAAhuIA7AAIAABAIB+AAIAAAmIhLC9g");
	this.shape.setTransform(187.425,26.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTByIAAi1IgUAAIAAguIBPAAIAADjg");
	this.shape_1.setTransform(169.75,29.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTByIAAi1IgUAAIAAguIBPAAIAADjg");
	this.shape_2.setTransform(157.2,29.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBByIAAi1IhgAAIAAguIDDAAIAAAuIgoAAIAAC1g");
	this.shape_3.setTransform(140.625,29.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAtByIhUh5QgHAHAAANIAABlIg5AAIAAhLQAAggAJgSQAKgTAWgLIgzhIIBDAAIA2BPIAnhPIBDAAIhFCDIBCBgg");
	this.shape_4.setTransform(116.875,29.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIBuQgigHgfgPIAAjNIA6AAIAACtQARAHASAEQATAEAQAAQAoAAAZgRQAYgSAAgkIAAh1IA6AAIAAB8QAAAkgTAZQgUAZghAMQghANgnAAQggAAgigIgAglAmQAEgHACgNQACgOAAgPIAAhqIA5AAIAABeQAAATgEAQQgFARgIAJg");
	this.shape_5.setTransform(76.825,29.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBxQgXgEgUgHIALgrQASAFATADQATACANAAQAbAAAOgMQAOgMAAgYIAAhaIhDAAQgIAVAAAWIAAALQAIACAMAAIAAAnQgLACgMAAQgQAAgOgDQgOgEgLgHIAAgUQAAgTAEgQQADgRAIgLIgYAAIAAgvIDJAAIAACAQAAAkgOAXQgPAYgYALQgZALgfAAQgUAAgWgEg");
	this.shape_6.setTransform(46.675,29.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBzIgXgEIAAgtQANACAPAAQANAAAHgIQAGgHAAgPIAAhrIgoAAIAAguIBjAAIAACeQAAAXgJAQQgIARgQAIQgPAJgVAAQgLAAgKgBg");
	this.shape_7.setTransform(25.275,29.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBBIAAhTIgkAAIAAguIBfAAIAACBg");
	this.shape_8.setTransform(10.8,24.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhhByIAAjjIDDAAIAADjgAgkBEIBJAAIAAiHIhJAAg");
	this.shape_9.setTransform(-7.8,29.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAjByIAAiSQABgSgJgIQgJgJgSAAIheAAIAAguIBiAAQAcAAAVAKQAVAKALASQAKATAAAbIAACPgAheByIAAhOQAAghANgPIAwAAQgEAQAAAaIAABUg");
	this.shape_10.setTransform(-42.4,29.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhdCaIAAieQAAghANgQIAwAAQgEAPAAAbIAAClgAgMAdQAXgBANgNQANgOAAgZIAAhSIiEAAIAAgvIC/AAIAACAQAAAegNAWQgNAXgYAMQgZAMghABg");
	this.shape_11.setTransform(-67.375,33.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBzIgXgEIAAgtQANACAPAAQANAAAHgIQAGgHAAgPIAAhrIgoAAIAAguIBjAAIAACeQAAAXgJAQQgIARgQAIQgPAJgVAAQgLAAgKgBg");
	this.shape_12.setTransform(-88.875,29.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjByIAAiSQAAgSgIgIQgJgJgSAAIheAAIAAguIBiAAQAdAAAUAKQAVAKALASQALATAAAbIAACPgAheByIAAhOQAAghANgPIAvAAQgDAQAAAaIAABUg");
	this.shape_13.setTransform(-107.75,29.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBBIAAhTIgkAAIAAguIBfAAIAACBg");
	this.shape_14.setTransform(-137.35,24.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhhByIAAguIBtAAIAAhkQAAgSgJgIQgIgJgSAAIg+AAIAAguIBCAAQAcAAAUAKQAVAKALASQALATAAAbIAABfIAaAEIAAAsg");
	this.shape_15.setTransform(-153.475,29.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhIBuQgigHgfgPIAAjNIA6AAIAACtQARAHASAEQATAEAQAAQAoAAAZgRQAYgSAAgkIAAh1IA6AAIAAB8QAAAkgTAZQgUAZghAMQghANgnAAQggAAgigIgAglAmQAEgHACgNQACgOAAgPIAAhqIA5AAIAABeQAAATgEAQQgFARgIAJg");
	this.shape_16.setTransform(-181.225,29.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAtByIhUh5QgHAHAAANIAABlIg5AAIAAhLQAAggAJgSQAKgTAWgLIgzhIIBDAAIA2BPIAnhPIBDAAIhFCDIBCBgg");
	this.shape_17.setTransform(220.475,-27.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAkByIgBiSQAAgjgeAAIgnAAIAAC1Ig8AAIAAjjIBiAAQAtAAAXAWQAXAWAAAqIAACNg");
	this.shape_18.setTransform(194.975,-27.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAVByIAAiWQAAgPgIgIQgJgIgPAAIhFAAIAAguIBJAAQAbAAAUAKQAUAJAKASQALASAAAZIAACTg");
	this.shape_19.setTransform(171.7,-27.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAjByIAAiSQABgSgJgIQgJgJgSAAIheAAIAAguIBiAAQAcAAAVAKQAVAKALASQALATAAAbIAACPgAheByIAAhOQAAghANgPIAwAAQgEAQAAAaIAABUg");
	this.shape_20.setTransform(141.2,-27.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghBzIgXgEIAAgtQANACAPAAQANAAAHgIQAGgHAAgPIAAhrIgoAAIAAguIBjAAIAACeQAAAXgJAQQgIARgQAIQgPAJgVAAQgLAAgKgBg");
	this.shape_21.setTransform(120.175,-27.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLBBIAAhTIgkAAIAAguIBfAAIAACBg");
	this.shape_22.setTransform(105.7,-32.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhdCaIAAieQAAghANgQIAwAAQgEAPAAAbIAAClgAgMAdQAXgBANgNQANgOAAgZIAAhSIiEAAIAAgvIC/AAIAACAQAAAegNAWQgNAXgYAMQgZAMghABg");
	this.shape_23.setTransform(87.225,-23.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgTByIAAi1IgUAAIAAguIBPAAIAADjg");
	this.shape_24.setTransform(67.4,-27.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLBBIAAhTIgkAAIAAguIBfAAIAACBg");
	this.shape_25.setTransform(54.3,-32.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLBBIAAhTIgkAAIAAguIBfAAIAACBg");
	this.shape_26.setTransform(31.2,-32.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhIBuQgigHgfgPIAAjNIA6AAIAACtQARAHASAEQATAEAQAAQAoAAAZgRQAYgSAAgkIAAh1IA6AAIAAB8QAAAkgTAZQgUAZghAMQghANgnAAQggAAgigIgAglAmQAEgHACgNQACgOAAgPIAAhqIA5AAIAABeQAAATgEAQQgFARgIAJg");
	this.shape_27.setTransform(8.525,-27.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgtCSIBKi1Ih5AAIAAhuIA7AAIAABAIB+AAIAAAmIhLC9g");
	this.shape_28.setTransform(-28.725,-31.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAkByIAAiSQAAgSgJgIQgJgJgSAAIheAAIAAguIBiAAQAcAAAWAKQAUAKALASQALATAAAbIAACPgAhfByIAAhOQAAghAOgPIAvAAQgDAQAAAaIAABUg");
	this.shape_29.setTransform(-51.35,-27.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhkBlIAMgsQAbAKAZAEQgGgHgFgIQgFgJgDgIIgjibIA8AAIAgCgQAEAPAEAIQAPgGAIgMQAIgOAAgSIAAiFIA8AAIAACCQAAAhgOAXQgOAYgZALQgZAMghAAQgtAAgtgQg");
	this.shape_30.setTransform(-76.8,-27.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhhByIAAguIBtAAIAAhkQAAgSgJgIQgIgJgSAAIg+AAIAAguIBCAAQAcAAAUAKQAVAKALASQALATAAAbIAABfIAaAEIAAAsg");
	this.shape_31.setTransform(-98.425,-27.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLBBIAAhTIgkAAIAAguIBfAAIAACBg");
	this.shape_32.setTransform(-116.9,-32.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAVByIAAiWQAAgPgIgIQgJgIgPAAIhFAAIAAguIBKAAQAaAAAUAKQAUAJAKASQALASAAAZIAACTg");
	this.shape_33.setTransform(-133.3,-27.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAkByIgBiSQAAgjgeAAIgnAAIAAC1Ig8AAIAAjjIBiAAQAtAAAXAWQAXAWAAAqIAACNg");
	this.shape_34.setTransform(-163.825,-27.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTByIAAi1IgUAAIAAguIBPAAIAADjg");
	this.shape_35.setTransform(-183.55,-27.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgzBqQgWgNgNgWQgMgWAAgeIAAiFIA7AAIAACMQABAOAEAKQAFALAKAFQAIAGALAAQAMAAAJgGQAJgFAFgLQAFgKgBgOIAAhAQABgegaAAQgIAAgMADIgGgnQAKgGAMgDQANgEAMAAQAUAAAPAJQAOAJAHAQQAJARAAAXIAAA+QAAAegNAWQgMAWgWANQgXAMgeAAQgdAAgWgMg");
	this.shape_36.setTransform(-200.85,-27.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAVByIAAiWQAAgPgIgIQgJgIgPAAIhFAAIAAguIBKAAQAaAAAUAKQAUAJAKASQALASAAAZIAACTg");
	this.shape_37.setTransform(-224.55,-27.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textend, new cjs.Rectangle(-235.3,-59.2,470.70000000000005,118.5), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBnIAAiDQAAgfgcgBIgjAAIAACjIg1AAIAAjMIBYAAQAoAAAUATQAVAUABAmIAAB/g");
	this.shape.setTransform(542.4,69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoCDIBCiiIhtAAIAAhjIA2AAIAAA5IBxAAIAAAjIhECpg");
	this.shape_1.setTransform(521.475,66.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUCKIAAiOQAAgeAMgOIArAAQgDAPAAAXIAACUgAgLAbQAUgCAMgMQAMgMAAgXIAAhJIh2AAIAAgqICrAAIAAByQAAAcgLATQgMAUgWALQgWALgeABg");
	this.shape_2.setTransform(500.575,72.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA7IAAhLIghAAIAAgpIBVAAIAAB0g");
	this.shape_3.setTransform(482.25,64.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBnIAAiEQAAgQgIgHQgIgIgQAAIhUAAIAAgpIBYAAQAagBASAKQATAIAJARQAKARAAAXIAACCgAhVBnIAAhGQAAgeANgOIAqAAQgDAOAAAXIAABNg");
	this.shape_4.setTransform(457.525,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBnIgVgEIAAgoQAMACANAAQAMAAAGgHQAFgGAAgOIAAhfIgkAAIAAgqIBZAAIAACOQAAAUgHAPQgIAPgOAHQgOAIgTAAIgSgBg");
	this.shape_5.setTransform(438.675,69.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABjQgfgHgbgNIAAi4IAzAAIAACbQAPAGARAEQARAEAOAAQAkAAAWgQQAWgQAAggIAAhpIA0AAIAABvQgBAggRAXQgRAWgdALQgeAMgjAAQgeAAgdgHgAghAiQADgGACgMQACgMAAgOIAAhfIAzAAIAABUQAAASgEAOQgEAPgHAIg");
	this.shape_6.setTransform(417.4,69.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUCKIAAiOQAAgeAMgOIArAAQgDAPAAAXIAACUgAgLAbQAUgCAMgMQAMgMAAgXIAAhJIh2AAIAAgqICrAAIAAByQAAAcgLATQgMAUgWALQgWALgeABg");
	this.shape_7.setTransform(390.825,72.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJA7IAAhLIghAAIAAgpIBVAAIAAB0g");
	this.shape_8.setTransform(363.8,64.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBlQgVgDgRgGIAKgnQAQAEARADQAQACANAAQAXAAANgLQAMgLAAgVIAAhRIg8AAQgHATAAAUIAAAKQAIACAKgBIAAAjQgKACgKAAQgOAAgNgDQgNgDgKgGIAAgSQAAgRAEgPQADgPAHgKIgWAAIAAgqIC1AAIAABzQAAAggNAVQgNAVgWAKQgWAKgcAAQgSAAgUgEg");
	this.shape_9.setTransform(346.725,69.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEBnIAAgxIARACQAmgBANghIAAhTIgtAAIAAgpIBgAAIAABmQAAARAEAQIANBFIgxAAIgMg0IgBAAQgDAPgHAMQgJAMgNAIQgNAHgPAAIgOgBg");
	this.shape_10.setTransform(326.9,69.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhZBaIALgnQAYAKAWACQgGgFgEgHQgFgJgCgHIgfiLIA2AAIAdCPQACAOAEAHQANgFAHgLQAHgMABgRIAAh3IA2AAIAAB0QAAAegNAVQgMAVgXAKQgXALgcAAQgpAAgogPg");
	this.shape_11.setTransform(308,69.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBnIAAijIgSAAIAAgpIBHAAIAADMg");
	this.shape_12.setTransform(291.525,69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGBpIAAgqIAkAAIAAhQQAAgVgIgLQgJgMgOABQgOgBgIAMQgIALgDAWIgLB5Ig1AAIAMhzQACgNAFgNQAGgMAHgIIADgBIAAgBIgRADIgQAGIgLgnQAUgHAagFQAbgEAXAAQAuAAAZAXQAYAYAAAvIAABzg");
	this.shape_13.setTransform(266.05,68.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhMBgIAIgnQAaAGASAAQAYgBAMgKQAMgLAAgWIAAhQIhcAAIAAgqICRAAIAABxQAAAwgZAYQgZAWgsAAQgaAAghgIg");
	this.shape_14.setTransform(244.125,69.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATCKIAAjpIhZAAIAAgqICNAAIAAETg");
	this.shape_15.setTransform(225.375,72.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOB6QgHgEgDgFQgEgHAAgIQAAgHAEgGQADgHAHgDQAGgEAIAAQAIAAAHAEQAHADADAHQAEAGAAAHQAAAIgEAHQgDAFgHAEQgHAEgIAAQgIAAgGgEgAgUAtIgHiqIA2AAIgGCqg");
	this.shape_16.setTransform(212.475,66.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgBmIAAiCQgBgggbAAIgjAAIAACiIg1AAIAAjMIBYAAQAoABAUATQAVAUABAmIAAB+g");
	this.shape_17.setTransform(740.95,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoCDIBCiiIhtAAIAAhjIA2AAIAAA5IBxAAIAAAjIhECpg");
	this.shape_18.setTransform(720.025,12.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAoBmIhLhtQgGAHAAALIAABbIg0AAIAAhDQAAgdAJgQQAJgRATgJIgthCIA8AAIAwBIIAjhIIA8AAIg+B2IA8BWg");
	this.shape_19.setTransform(690.4,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJA6IAAhKIghAAIAAgqIBVAAIAAB0g");
	this.shape_20.setTransform(671.45,11.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoBfQgUgMgLgWQgNgWAAgcIAAgMQAAgOAGgQQAGgRAIgJIADgCIAAgBIgbAGIgKgnQAVgGAbgDQAbgEAXAAQAwAAAaAZQAZAZAAAwIAAATQAAAcgLAWQgLAWgWAMQgVAMgbAAQgZAAgWgMgAgUgvQgKAOAAAdIAAAPQAAAQAFAMQAEALAJAHQAJAGAKAAQAMAAAIgGQAJgHAEgLQAGgMAAgQIAAgSQgBgbgJgOQgLgPgSAAQgRABgKAPg");
	this.shape_21.setTransform(654.6,15.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRBmIAAiiIgSAAIAAgqIBHAAIAADMg");
	this.shape_22.setTransform(637.325,15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AATBmIAAiGQAAgOgHgGQgJgIgNAAIg9AAIAAgqIBBAAQAYABASAIQASAJAKAQQAIAQABAXIAACDg");
	this.shape_23.setTransform(622.9,15.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoCDIBCiiIhtAAIAAhjIA2AAIAAA5IBxAAIAAAjIhECpg");
	this.shape_24.setTransform(596.775,12.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdBnIgVgEIAAgoQAMACANAAQAMAAAGgHQAFgGAAgOIAAhfIgkAAIAAgqIBZAAIAACOQAAAUgHAPQgIAPgOAHQgOAIgTAAIgSgBg");
	this.shape_25.setTransform(579.425,15.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhUCKIAAiOQAAgdAMgOIArAAQgDANAAAYIAACUgAgLAaQAUgBAMgMQAMgNAAgVIAAhKIh2AAIAAgqICrAAIAABzQAAAbgLAUQgMATgWALQgWALgeABg");
	this.shape_26.setTransform(561.875,19.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRBmIAAiiIgSAAIAAgqIBHAAIAADMg");
	this.shape_27.setTransform(544.075,15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhkBmIAAgqIALAAQAZAAAAgaIAAgwQAAgLAEgOQADgNAFgJIggAAIAAgqIBnAAQAoAAAVATQAVAUAAAnIAAB+Ig1AAIgBiDQAAgQgHgIQgGgHgOAAIgaAAIgEAVIgCAVIAAA6QAAAUgHAPQgIAPgNAHQgOAIgUAAQgMAAgOgCg");
	this.shape_28.setTransform(526.85,15.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAoBmIhLhtQgGAHAAALIAABbIg0AAIAAhDQAAgdAJgQQAJgRATgJIgthCIA8AAIAwBIIAjhIIA8AAIg+B2IA8BWg");
	this.shape_29.setTransform(496.45,15.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhkBmIAAgqIAMAAQAYAAAAgaIAAgwQAAgLAEgOQADgNAFgJIggAAIAAgqIBnAAQAoAAAVATQAVAUAAAnIAAB+Ig1AAIgBiDQAAgQgHgIQgGgHgOAAIgaAAIgEAVIgCAVIAAA6QAAAUgHAPQgIAPgNAHQgPAIgTAAQgMAAgOgCg");
	this.shape_30.setTransform(472.05,15.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAgBmIAAiDQAAgPgIgIQgIgHgQgBIhUAAIAAgqIBYAAQAaABASAIQATAJAJARQAKARAAAYIAACAgAhVBmIAAhGQAAgeANgNIAqAAQgDAOAAAYIAABLg");
	this.shape_31.setTransform(442.225,15.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAoBmIhLhtQgGAHAAALIAABbIgzAAIAAhDQgBgdAJgQQAJgRATgJIgthCIA8AAIAxBIIAihIIA8AAIg+B2IA8BWg");
	this.shape_32.setTransform(419.8,15.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhUCKIAAiOQAAgdAMgOIArAAQgDANAAAYIAACUgAgLAaQAUgBAMgMQAMgNAAgVIAAhKIh2AAIAAgqICrAAIAABzQAAAbgLAUQgMATgWALQgWALgeABg");
	this.shape_33.setTransform(396.325,19.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgBBmIAAiiIhWAAIAAgqICvAAIAAAqIgkAAIAACig");
	this.shape_34.setTransform(374.95,15.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAgBmIAAiCQAAgggcAAIgjAAIAACiIg1AAIAAjMIBYAAQAoABAUATQAVAUABAmIAAB+g");
	this.shape_35.setTransform(354.3,15.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhXBmIAAgpIBiAAIAAhaQAAgPgIgIQgIgHgQgBIg3AAIAAgqIA7AAQAZABASAIQATAJAKARQAJARAAAYIAABVIAYAEIAAAng");
	this.shape_36.setTransform(324.925,15.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAGBpIAAgqIAkAAIAAhQQAAgVgIgLQgJgMgOAAQgOAAgIAMQgIALgDAWIgLB5Ig1AAIAMhyQADgOAEgNQAGgMAHgHIADgCIAAgBIgQAEIgRAFIgLgnQAUgHAbgEQAagFAXAAQAuAAAYAXQAZAZAAAuIAABzg");
	this.shape_37.setTransform(303.3,15.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhDBnIAAgxIAQACQAlAAANgjIAAhSIgsAAIAAgqIBgAAIAABoQABAQADARIAOBDIgyAAIgMg0IgBAAQgDAQgHAMQgJAMgNAIQgNAGgQAAIgMAAg");
	this.shape_38.setTransform(283.4,15.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhaBaIAMgnQAYAJAWAEQgGgGgEgIQgFgHgCgJIggiKIA2AAIAeCPQADANADAIQANgGAIgLQAGgLAAgRIAAh3IA2AAIAAB1QAAAdgMAVQgNAVgWAKQgWALgeAAQgpAAgogPg");
	this.shape_39.setTransform(264.5,15.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJA6IAAhKIghAAIAAgqIBVAAIAAB0g");
	this.shape_40.setTransform(238.8,11.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhBBjQgegHgbgNIAAi4IAzAAIAACbQAPAGARAEQARAEAOAAQAkAAAWgQQAWgQAAggIAAhpIAzAAIAABvQAAAggRAXQgRAWgdALQgeAMgjAAQgeAAgegHgAghAiQADgGACgMQACgMAAgOIAAhfIAzAAIAABUQAAASgEAOQgEAPgHAIg");
	this.shape_41.setTransform(218.5,15.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgKA6IAAhKIggAAIAAgqIBVAAIAAB0g");
	this.shape_42.setTransform(196.45,11.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AATBmIAAiGQAAgOgIgGQgHgIgOAAIg9AAIAAgqIBBAAQAYABASAIQASAJAJAQQAKAQAAAXIAACDg");
	this.shape_43.setTransform(181.75,15.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhBBjQgfgHgbgNIAAi4IA0AAIAACbQAPAGARAEQAQAEAPAAQAkAAAWgQQAWgQAAggIAAhpIAzAAIAABvQAAAggQAXQgSAWgeALQgdAMgkAAQgcAAgfgHgAghAiQADgGADgMQABgMAAgOIAAhfIAzAAIAABUQAAASgEAOQgEAPgHAIg");
	this.shape_44.setTransform(150.05,15.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgoCDIBCiiIhtAAIAAhjIA2AAIAAA5IBxAAIAAAjIhECpg");
	this.shape_45.setTransform(125.325,12.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAHBpIAAgqIAkAAIgBhQQAAgVgIgLQgJgMgPAAQgNAAgIAMQgIALgDAWIgMB5Ig1AAIAOhyQACgOAEgNQAGgMAHgHIACgCIAAgBIgQAEIgQAFIgLgnQAUgHAagEQAbgFAXAAQAuAAAZAXQAYAZAAAuIAABzg");
	this.shape_46.setTransform(95.25,15.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhkBmIAAgqIALAAQAaAAAAgaIAAgwQAAgLACgOQADgNAGgJIggAAIAAgqIBnAAQApAAAUATQAVAUAAAnIAAB+Ig2AAIAAiDQAAgQgHgIQgHgHgOAAIgZAAIgEAVIgBAVIAAA6QAAAUgIAPQgHAPgPAHQgNAIgUAAQgMAAgOgCg");
	this.shape_47.setTransform(71.5,15.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhMBgIAIgmQAaAFASAAQAYAAAMgLQAMgLAAgVIAAhRIhcAAIAAgqICRAAIAABxQAAAxgZAXQgZAWgsAAQgaAAghgIg");
	this.shape_48.setTransform(50.725,15.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhkBmIAAgqIAMAAQAZAAAAgaIAAgwQAAgLACgOQADgNAGgJIggAAIAAgqIBnAAQApAAAUATQAVAUAAAnIAAB+Ig2AAIAAiDQAAgQgHgIQgHgHgNAAIgaAAIgEAVIgCAVIAAA6QABAUgIAPQgHAPgPAHQgOAIgTAAQgMAAgOgCg");
	this.shape_49.setTransform(29.55,15.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOAYQgHgEgDgGQgEgHAAgHQAAgHAEgGQADgGAHgDQAGgFAIAAQAIAAAIAFQAGADAEAGQADAGAAAHQAAAHgDAHQgEAGgGAEQgIADgIAAQgIAAgGgDg");
	this.shape_50.setTransform(14,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(7,-12.8,746.9,162.20000000000002), null);


(lib.Symbol5copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwCvQgOgBgSgEIABg5QAUADAXAAQAWAAALgMQAKgMAAgaIAAi4IhAAAIAAg6ICKAAIAAD4QAAAygaAcQgaAbgvAAQgQAAgOgCg");
	this.shape.setTransform(503.275,47.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBiIAAiJIg7AAIAAg6ICFAAIAADDg");
	this.shape_1.setTransform(482.225,39.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiIDrIAAj3QAAgcAGgQQAFgQAHgOIA9AAQgHAYAAAsIAAD9gAgSA4QAngBAXgYQAXgYAAgpIAAiOIjPAAIAAg6IEZAAIAADGQAAAtgTAiQgUAhgkASQgkASgwABg");
	this.shape_2.setTransform(454.825,53.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTCuIAAkhIgjAAIAAg6IBtAAIAAFbg");
	this.shape_3.setTransform(425.175,47.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBiIAAiJIg7AAIAAg6ICFAAIAADDg");
	this.shape_4.setTransform(405.875,39.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(395.5,0,122.89999999999998,92.1), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FFED").s().p("AitCvIAAhKIAUABQAqAAgBgsIAAhTQAAgSAGgXQAEgWAKgQIg2AAIAAhKICzAAQBGAAAjAiQAjAiABBCIAADZIhgAAIAAjiQAAgzgsAAIgtAAIgFAkQgDASAAARIAABiQAAAkgNAZQgNAagYANQgYAOgiAAQgUAAgagEg");
	this.shape.setTransform(275.15,47.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51FFED").s().p("AhQCuQgjgGgfgLIARhFQAdAHAdAFQAdAFAVAAQApgBAVgSQAUgSAAglIAAiIIhkAAQgGARgDAQQgCAPAAAQIAAARQANADARgBIAAA+QgTADgSABQgYgBgWgFQgWgGgSgKIAAgeQAAgdAGgZQAGgaALgRIgkAAIAAhKIE5AAIAADFQAAA4gXAjQgWAlgmARQgnARgwAAQgfAAgkgGg");
	this.shape_1.setTransform(237.05,47.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51FFED").s().p("AicCaIAThFQArAQAkAFQgKgJgIgNQgIgNgDgOIg1jtIBfAAIAyD3QAFAUAGAOQAWgKAMgTQALgTAAgcIAAjNIBgAAIAADJQAAAzgVAkQgWAkgnASQgnASgzABQhIAAhFgbg");
	this.shape_2.setTransform(197.1,47.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51FFED").s().p("AggCwIAAkVIgeAAIAAhKIB9AAIAAFfg");
	this.shape_3.setTransform(168.675,47.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51FFED").s().p("AhHDhIBxkVIi5AAIAAisIBeAAIAABiIDCAAIAAA9Ih0Eig");
	this.shape_4.setTransform(143.75,42.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51FFED").s().p("AhUAlIAAhJICpAAIAABJg");
	this.shape_5.setTransform(99.775,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(70.3,0,228.09999999999997,92.1), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._10copy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,820,839), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3731").s().p("EhwuBGZMAAAiMyMDhdAAAMAAACMyg");
	this.shape.setTransform(-0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-722,-449.5,1443,901.1), null);


(lib.glock1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.nikui_new();
	this.instance.setTransform(-962,-526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glock1, new cjs.Rectangle(-962,-526,1920,1080), null);


(lib.backcopy8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnTMHIgFgjIANgqIAWgtIAPgZIgFggIArgtIARgkIAIgoIAKgiIAPgpIATgcIAagdIATgFIAfgFIAdgQIAXgVIAbgNIAagZIATgkIAfgfIARgfIAVgmIAWgbIAdgRIAegZIgPgbIgMgeIgZgeIgmggIgtgyIhBgjIgvgbIgbgmIgXgyIgZgfIgJgdIghgXIgWgiIgLgYIgPgnIgbgSIgQgWIAFgQIgYgbIgPgZIgogWIgogFIgmgWIgPgfIgFgjIAIgUIAMg0IAvghIAuAQIAgAdIAbAkIAYAHIAvAMIAdAjIAhBBIA3A6IA6AtIAqAyIAUA4IAeAtIAFA8IAKA5IAwBBIAdAmIAWA3IAoA2IAmgxIAlg/IAMgyIAkgqIAMgjIACgzIAOgmIAOgjIAfgiIAdgOIAPgdIAhgoIAegfIAig+IAYgrIAAgyIgKgpIAMgmIAbgMIAmACIARAbIAcAVIAYARIATAWIgFAUIgTANIgHAjIgWAlIgmA0IghAwIgOAeIgrAyIgKAWIgbAYIgeA5IgoAoIgKAyIgfAyIgiAbIgeAcIgbAnIgVAlIgMAyIACAmIAmARIAKAaIAWAMIANAmIAZAgIAeAcIARAkIAwAtIAtA3IAYAtIAhAVIAhAyIAlAqIA8BYIAVA+IgTAaIgngIIgvgmIgrgoIgmg0IgWgmIgXgbIgUgXIAKgbIgggtIgegtIgtgZIgIgrIgegqIglgmIgFgnIgtgkIgwgXIgcAOIgOAOIgZApIgpA0IgKAiIgXAkIgRAJIgVAmIgWADIgRAlIgQAmIgnAqIgLAhIgZAjIgqAgIgtAVIgPAnIgPAmIgXAeIgPAtIgeAWgAAjLdIATgZIAQAUIAAARIgQACgAjHDIIARgcIAWAQIADAWIgRAHgAAKn2IAUgdIAMAhIgRAWg");
	this.shape.setTransform(531.525,-33.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.instance = new lib.bucket();
	this.instance.setTransform(389,-129,0.23,0.23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_1.setTransform(661.025,150.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBUIAAgVQAJACAMAAQANAAAEgHQAHgHAAgOIAAhmIgiAAIAAgWIA9AAIAAB+QAAAYgMAMQgMANgUAAQgOAAgOgEg");
	this.shape_2.setTransform(645.95,150.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBTQgWgFgUgKIAAibIAaAAIAACNQAOAGAQADQAPADAOAAQAUAAAQgGQASgGAJgMQAJgNAAgSIAAhiIAaAAIAABlQABAYgNARQgNARgXAIQgWAIgbAAQgVAAgXgFgAgYAlQAGgGACgKQADgKAAgMIAAhWIAaAAIAABRQAAAOgEALQgDALgHAIg");
	this.shape_3.setTransform(629.5,150.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+B1IAAh9QAAgNABgIIAGgPIAWAAQgCAGAAAIIgBAUIAAB/gAgHAiQANAAALgGQAKgGAHgLQAFgLAAgOIAAhQIhpAAIAAgWICFAAIAABmQAAAUgKAQQgIAQgSAJQgRAIgVABg");
	this.shape_4.setTransform(608.25,153.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_5.setTransform(583.675,150.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBVIAAgVIAKABQANgBAGgGQAFgHAAgOIAAg1QAAgOAEgNQAEgOAGgHIghAAIAAgWIBQAAQAiAAARARQARAPAAAiIAABpIgbAAIAAhrQAAgWgKgKQgKgKgVAAIgXAAQgFAHgDANQgDAMAAANIAAA6QAAAYgLAMQgMAMgVAAIgRgCg");
	this.shape_6.setTransform(565.275,150.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEBMIAHgUQAZAKAVABQgMgMgDgRIgdh9IAbAAIAcB+IAEAQIAEALQASgEAKgNQAKgNAAgTIAAhoIAbAAIAABmQAAAXgKARQgJARgSAIQgRAIgVAAQgeAAgggMg");
	this.shape_7.setTransform(547.4,150.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfBWIAAh3QgBgOgHgIQgJgIgOAAIg5AAIAAgWIA5AAQATAAANAGQAMAHAHAMQAHAMAAARIAAB1g");
	this.shape_8.setTransform(531.6,150.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_9.setTransform(519.925,150.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_10.setTransform(508.275,150.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhRBVIAAgVIAKABQANgBAGgGQAFgHAAgOIAAg1QAAgOAEgNQAEgOAGgHIghAAIAAgWIBQAAQAiAAARARQARAPAAAiIAABpIgbAAIAAhrQAAgWgKgKQgKgKgVAAIgXAAQgFAHgDANQgDAMAAANIAAA6QAAAYgLAMQgMAMgVAAIgRgCg");
	this.shape_11.setTransform(489.875,150.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_12.setTransform(465.225,150.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkBUIABgVQAJACANAAQALAAAGgHQAFgHAAgOIAAhmIghAAIAAgWIA8AAIAAB+QAAAYgLAMQgMANgVAAQgNAAgPgEg");
	this.shape_13.setTransform(450.15,150.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA6AAIAABfg");
	this.shape_14.setTransform(440.3,146.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag/B1IAAh9QAAgNACgIIAGgPIAWAAQgBAGgBAIIgBAUIAAB/gAgIAiQAOAAALgGQAKgGAHgLQAFgLABgOIAAhQIhqAAIAAgWICFAAIAABmQAAAUgJAQQgKAQgQAJQgSAIgWABg");
	this.shape_15.setTransform(427.2,153.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_16.setTransform(412.925,150.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_17.setTransform(403.8,146.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAoBWIAAhrQAAgWgKgKQgKgKgUAAIgmAAIAACVIgbAAIAAirIBAAAQAiAAARAQQARAQAAAiIAABpg");
	this.shape_18.setTransform(644.65,106.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_19.setTransform(627.725,103.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAvBWIhMhpQgPAKAAAXIAABIIgbAAIAAg+QAAgXAIgNQAHgOAQgIIglgzIAeAAIA0BKIAqhKIAfAAIg4BgIA3BLg");
	this.shape_20.setTransform(603.3,106.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_21.setTransform(587.95,102.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggBQQgRgKgJgSQgJgSAAgXIAAgRQAAgMADgLQADgLAGgJQAFgJAIgEIABgBIAAgBQgHABgXAGIgGgUQARgFAWgDQAVgDASAAQAYgBARAKQARAJAJATQAKARAAAZIAAAUQAAAXgKASQgIASgRAKQgRAKgVgBQgVABgQgKgAgSg6QgKAGgGANQgFANgBATIAAASQAAARAGAMQAGANAKAHQAKAGANABQAOgBAKgGQALgHAFgNQAGgMAAgRIAAgUQAAgRgGgNQgFgNgLgGQgLgIgPAAQgMAAgJAIg");
	this.shape_22.setTransform(574.4,106.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_23.setTransform(560.125,106.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAeBWIAAh3QABgOgJgIQgIgIgOAAIg5AAIAAgWIA6AAQARAAANAGQANAHAHAMQAHAMAAARIAAB1g");
	this.shape_24.setTransform(548.3,106.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhEBMIAGgUQAaAKAVABQgLgMgEgRIgch9IAbAAIAcB+IADAQIAFAKQARgDAKgNQAKgNAAgTIAAhoIAbAAIAABmQAAAXgKARQgJARgSAIQgRAIgVAAQgeAAgggMg");
	this.shape_25.setTransform(524.6,106.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_26.setTransform(509.175,103.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjBQQgPgJgJgPQgJgQAAgUIAAhqIAbAAIAABrQAAAOAGALQAFAJAJAGQAKAGALAAQAMAAAKgGQAJgGAGgJQAFgLAAgOIAAg4QAAgOgGgIQgHgIgLAAQgKAAgKAGIgFgSQAHgFAJgDQAJgDAIABQANAAAKAFQAKAHAFAKQAFAMAAAPIAAA6QAAAUgJAQQgIAPgQAJQgPAJgVgBQgTABgQgJg");
	this.shape_27.setTransform(484.975,106.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_28.setTransform(467.625,106.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_29.setTransform(454.35,102.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_30.setTransform(442.975,103.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhRBVIAAgVIAKABQANgBAGgGQAFgHAAgOIAAg1QAAgOAEgNQAEgOAGgHIghAAIAAgWIBQAAQAiAAARARQARAPAAAiIAABpIgbAAIAAhrQAAgWgKgKQgKgKgVAAIgXAAQgFAHgDANQgDAMAAANIAAA6QAAAYgLAMQgMAMgVAAIgRgCg");
	this.shape_31.setTransform(424.775,106.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backcopy8, new cjs.Rectangle(389,-170.4,294.4,344), null);


(lib.backcopy6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.dokran();
	this.instance.setTransform(319,-154,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBTQgWgFgVgKIAAibIAbAAIAACNQAOAGAQADQAPADAOAAQAUAAAQgGQASgGAJgMQAJgNAAgSIAAhiIAbAAIAABlQgBAYgNARQgNARgWAIQgWAIgbAAQgVAAgXgFgAgXAlQAFgGADgKQACgKAAgMIAAhWIAaAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape.setTransform(594.1,106.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_1.setTransform(576.9,102.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCASIgNBwIgbAAIANhtQACgLAFgLQAGgLAHgGIADgBIgBgBIgQADIgSAGIgGgUQARgHAVgDQAVgEAQAAQAjAAATATQASASAAAkIAABmg");
	this.shape_2.setTransform(563.475,106.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_3.setTransform(549.125,106.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCB1IAAjTIgVAAIAAgWIAvAAIAADpg");
	this.shape_4.setTransform(540.275,109.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_5.setTransform(520.325,106.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9BWIAAgWIBcAAIhniVIAfAAIAtBFIAmhFIAfAAIg1BcIAuBBIAAAOg");
	this.shape_6.setTransform(503.275,106.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_7.setTransform(487.525,103.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_8.setTransform(471.925,106.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backcopy6, new cjs.Rectangle(319,-154,422.4,283.5), null);


(lib.backcopy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.oil();
	this.instance.setTransform(357,-140,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape.setTransform(723.625,150.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_1.setTransform(711.975,150.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgJgKQgKgKgUAAIgmAAIgBCVIgbAAIAAirIBCAAQAhAAAQAQQASAQgBAiIAABpg");
	this.shape_2.setTransform(695.1,150.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_3.setTransform(678.175,147.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/B1IAAh9QAAgNADgIIAFgPIAXAAQgCAGgBAIIgBAUIAAB/gAgHAiQANAAALgGQALgGAFgLQAHgLAAgOIAAhQIhqAAIAAgWICFAAIAABmQAAAUgJAQQgKAQgQAJQgSAIgVABg");
	this.shape_4.setTransform(661.05,153.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_5.setTransform(646.45,146.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhEBWIAAirICJAAIAACrgAgpBAIBTAAIAAh/IhTAAg");
	this.shape_6.setTransform(633.175,150.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_7.setTransform(607.325,150.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkBUIABgVQAKACALAAQAMAAAFgHQAHgHgBgOIAAhmIghAAIAAgWIA8AAIAAB+QAAAYgLAMQgMANgVAAQgNAAgPgEg");
	this.shape_8.setTransform(592.25,150.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBMIAGgUQAaAKAVABQgLgMgEgRIgch9IAbAAIAcB+IADAQIAFALQARgEAKgNQAKgNAAgTIAAhoIAbAAIAABmQAAAXgKARQgJARgSAIQgRAIgVAAQgeAAgggMg");
	this.shape_9.setTransform(578.15,150.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_10.setTransform(565.05,146.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhEBWIAAirICJAAIAACrgAgpBAIBTAAIAAh/IhTAAg");
	this.shape_11.setTransform(551.775,150.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_12.setTransform(526.975,150.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEBMIAGgUQAaAKAUABQgLgMgDgRIgdh9IAbAAIAdB+IADAQIAFALQARgEAKgNQAKgNAAgTIAAhoIAbAAIAABmQAAAXgJARQgKARgRAIQgSAIgWAAQgdAAgggMg");
	this.shape_13.setTransform(509.45,150.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_14.setTransform(494.025,147.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_15.setTransform(480.95,146.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQABgWgKgKQgKgKgUAAIgmAAIAACVIgbAAIAAirIBBAAQAhAAARAQQAQAQAAAiIAABpg");
	this.shape_16.setTransform(460.85,150.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_17.setTransform(446.25,146.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BPIAEgTQAXAFASAAQAYABANgMQAMgMAAgXIAAhTIhZAAIAAgXIB0AAIAABlQAAAkgTATQgTATgjAAQgWAAgagJg");
	this.shape_18.setTransform(433.7,150.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_19.setTransform(421.375,150.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeB1IAAjTIhVAAIAAgWIBvAAIAADpg");
	this.shape_20.setTransform(409.275,153.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBWIAAgZIAJABQAVgBANgMQAMgMAEgTIAAhSIgmAAIAAgWIBBAAIAABYQAAAOADANIALA5IgZAAIgKgxIgBAAQgCANgIAMQgHALgMAHQgNAHgOAAIgIgBg");
	this.shape_21.setTransform(389,150.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_22.setTransform(375.825,150.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_23.setTransform(362.875,150.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_24.setTransform(350.175,150.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgwBTQgXgFgVgKIAAibIAbAAIAACNQAOAGAPADQAQADAOAAQAUAAARgGQARgGAJgMQAKgNAAgSIAAhiIAaAAIAABlQgBAYgNARQgMARgXAIQgWAIgaAAQgWAAgWgFgAgXAlQAFgGADgKQACgKAAgMIAAhWIAaAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape_25.setTransform(678.15,106.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_26.setTransform(660.95,102.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCASIgNBwIgbAAIANhtQACgLAFgLQAGgLAHgGIADgBIgBgBIgQADIgSAGIgGgUQARgHAVgDQAVgEAQAAQAjAAATATQASASAAAkIAABmg");
	this.shape_27.setTransform(647.525,106.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_28.setTransform(633.175,106.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgCB1IAAjTIgVAAIAAgWIAvAAIAADpg");
	this.shape_29.setTransform(624.325,109.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag/B1IAAh9QAAgNADgIIAFgPIAXAAQgCAGgBAIIgBAUIAAB/gAgHAiQANAAALgGQALgGAFgLQAHgLAAgOIAAhQIhqAAIAAgWICFAAIAABmQAAAUgJAQQgKAQgRAJQgRAIgVABg");
	this.shape_30.setTransform(603.9,109.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_31.setTransform(586.975,103.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_32.setTransform(563.925,106.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCASIgNBwIgbAAIANhtQACgLAFgLQAGgLAHgGIADgBIgBgBIgQADIgSAGIgGgUQARgHAVgDQAVgEAQAAQAjAAATATQASASAAAkIAABmg");
	this.shape_33.setTransform(546.275,106.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggBQQgRgKgIgSQgKgSAAgXIAAgRQAAgMADgLQADgLAGgJQAGgJAGgEIADgBIAAgBQgIABgYAGIgFgUQARgFAWgDQAWgDAQAAQAZgBARAKQARAJAKATQAJARAAAZIAAAUQAAAXgJASQgJASgRAKQgQAKgWgBQgUABgRgKgAgTg6QgKAGgFANQgGANAAATIAAASQAAARAGAMQAFANALAHQAKAGANABQANgBALgGQAKgHAGgNQAGgMAAgRIAAgUQAAgRgGgNQgGgNgLgGQgKgIgPAAQgMAAgKAIg");
	this.shape_34.setTransform(527.1,106.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_35.setTransform(512.5,102.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_36.setTransform(501.125,103.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_37.setTransform(488.375,106.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhRBVIAAgVIAKABQANgBAGgGQAFgHAAgOIAAg1QAAgOAEgNQAEgOAGgHIghAAIAAgWIBQAAQAiAAARARQARAPAAAiIAABpIgbAAIAAhrQAAgWgKgKQgKgKgVAAIgXAAQgFAHgDANQgDAMAAANIAAA6QAAAYgLAMQgMAMgVAAIgRgCg");
	this.shape_38.setTransform(474.125,106.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_39.setTransform(449.475,106.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgkBUIABgVQAJACANAAQALAAAGgHQAFgHAAgOIAAhmIghAAIAAgWIA8AAIAAB+QAAAYgLAMQgMANgVAAQgNAAgPgEg");
	this.shape_40.setTransform(434.4,106.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgwBTQgXgFgVgKIAAibIAbAAIAACNQAOAGAPADQAQADAOAAQAUAAARgGQARgGAJgMQAKgNAAgSIAAhiIAaAAIAABlQAAAYgOARQgNARgWAIQgWAIgaAAQgWAAgWgFgAgXAlQAFgGADgKQADgKAAgMIAAhWIAZAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape_41.setTransform(417.95,106.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag/B1IAAh9QAAgNACgIIAGgPIAXAAQgDAGAAAIIgBAUIAAB/gAgIAiQAOAAALgGQAKgGAGgLQAGgLABgOIAAhQIhqAAIAAgWICFAAIAABmQAAAUgJAQQgKAQgQAJQgSAIgWABg");
	this.shape_42.setTransform(396.7,109.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backcopy4, new cjs.Rectangle(339.3,-140,391.40000000000003,313.6), null);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.mivreshet();
	this.instance.setTransform(265,-120,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.instance_1 = new lib.chotter();
	this.instance_1.setTransform(286,-155,0.31,0.31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_4
	this.instance_2 = new lib.flanelit();
	this.instance_2.setTransform(428,-83,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_3
	this.instance_3 = new lib.oil();
	this.instance_3.setTransform(467,-140,0.27,0.27);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape.setTransform(669.025,150.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCASIgNBwIgbAAIANhtQACgLAFgLQAGgLAHgGIADgBIgBgBIgQADIgSAGIgGgUQARgHAVgDQAVgEAQAAQAjAAATATQASASAAAkIAABmg");
	this.shape_1.setTransform(651.375,150.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBWIAAgWIBdAAIAAhVQAAgWgKgKQgKgKgWAAIgpAAIAAgWIArAAQAhAAARAQQARARAAAgIAABTIAVACIAAAVg");
	this.shape_2.setTransform(634.175,150.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfBWIAAh3QgBgOgHgIQgJgIgOAAIg5AAIAAgWIA5AAQATAAANAGQAMAHAHAMQAHAMAAARIAAB1g");
	this.shape_3.setTransform(618.2,150.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBTQgWgFgVgKIAAibIAbAAIAACNQAOAGAQADQAPADAOAAQAUAAAQgGQARgGAKgMQAJgNAAgSIAAhiIAaAAIAABlQABAYgNARQgNARgXAIQgWAIgbAAQgVAAgXgFgAgYAlQAGgGADgKQACgKAAgMIAAhWIAaAAIAABRQAAAOgEALQgDALgHAIg");
	this.shape_4.setTransform(599.6,150.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRBVIAAgVIAKABQANgBAGgGQAFgHAAgOIAAg1QAAgOAEgNQAEgOAGgHIghAAIAAgWIBQAAQAiAAARARQARAPAAAiIAABpIgbAAIAAhrQAAgWgKgKQgKgKgVAAIgXAAQgFAHgDANQgDAMAAANIAAA6QAAAYgLAMQgMAMgVAAIgRgCg");
	this.shape_5.setTransform(577.275,150.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3B0IBYjnIAXAAIhYDng");
	this.shape_6.setTransform(562.425,149.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBVQgPgCgOgFIAFgUIAaAGIAYABQAXAAANgMQANgMAAgWIAAhUIhEAAQgFAIgCANQgDAMAAAMIAAANQADACAFAAIAPABIAAAWQgTAAgKgCQgKgCgLgFIAAgWQAAgOADgPQAEgOAGgJIgUAAIAAgWICLAAIAABlQAAAYgJARQgKAQgRAJQgRAIgVAAQgNAAgPgDg");
	this.shape_7.setTransform(546.875,150.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_8.setTransform(530.125,147.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkBUIABgVQAKACAMAAQALAAAGgHQAFgHAAgOIAAhmIggAAIAAgWIA7AAIAAB+QAAAYgLAMQgMANgVAAQgNAAgPgEg");
	this.shape_9.setTransform(516.05,150.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_10.setTransform(503.875,147.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgeAAIAAgWIA5AAIAABfg");
	this.shape_11.setTransform(490.8,146.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhRBVIAAgVIAKABQANgBAGgGQAFgHAAgOIAAg1QAAgOAEgNQAEgOAGgHIghAAIAAgWIBQAAQAiAAARARQARAPAAAiIAABpIgbAAIAAhrQAAgWgKgKQgKgKgVAAIgXAAQgFAHgDANQgDAMAAANIAAA6QAAAYgLAMQgMAMgVAAIgRgCg");
	this.shape_12.setTransform(476.625,150.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDBWIAAiVIgUAAIAAgWIAvAAIAACrg");
	this.shape_13.setTransform(455.875,150.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBTQgXgFgUgKIAAibIAaAAIAACNQAOAGAQADQAPADAOAAQAUAAAQgGQASgGAJgMQAKgNgBgSIAAhiIAaAAIAABlQAAAYgMARQgNARgXAIQgWAIgbAAQgVAAgWgFgAgYAlQAGgGACgKQADgKABgMIAAhWIAZAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape_14.setTransform(440.15,150.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCASIgNBwIgbAAIANhtQACgLAFgLQAGgLAHgGIADgBIgBgBIgQADIgSAGIgGgUQARgHAVgDQAVgEAQAAQAjAAATATQASASAAAkIAABmg");
	this.shape_15.setTransform(418.575,150.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCB1IAAjTIgVAAIAAgWIAvAAIAADpg");
	this.shape_16.setTransform(404.175,153.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAwIAAhJIgfAAIAAgWIA7AAIAABfg");
	this.shape_17.setTransform(612.8,102.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgwBTQgXgFgVgKIAAibIAbAAIAACNQAOAGAPADQAQADAOAAQAUAAARgGQARgGAJgMQAKgNAAgSIAAhiIAaAAIAABlQgBAYgNARQgMARgXAIQgWAIgaAAQgWAAgWgFgAgXAlQAFgGADgKQACgKAAgMIAAhWIAaAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape_18.setTransform(597.15,106.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaBwIA+iVIhlAAIAAhLIAcAAIAAA1IBnAAIAAARIhACag");
	this.shape_19.setTransform(570.175,103.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAnBWIAAhrQAAgWgKgKQgKgKgWAAIg+AAIAAgWIBAAAQAhAAARAQQARARAAAgIAABqgAhBBWIAAg7QAAgNACgIIAGgOIAWAAIgDAOIAAAUIAAA8g");
	this.shape_20.setTransform(553.525,106.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgwBTQgXgFgUgKIAAibIAaAAIAACNQAOAGAQADQAPADAOAAQAUAAAQgGQASgGAJgMQAJgNAAgSIAAhiIAaAAIAABlQAAAYgMARQgNARgXAIQgWAIgbAAQgVAAgWgFgAgYAlQAGgGACgKQADgKABgMIAAhWIAZAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape_21.setTransform(532.85,106.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhRBVIAAgVIAKABQANgBAGgGQAFgHAAgOIAAg1QAAgOAEgNQAEgOAGgHIghAAIAAgWIBQAAQAiAAARARQARAPAAAiIAABpIgbAAIAAhrQAAgWgKgKQgKgKgVAAIgXAAQgFAHgDANQgDAMAAANIAAA6QAAAYgLAMQgMAMgVAAIgRgCg");
	this.shape_22.setTransform(510.525,106.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADBYIAAgWIAsAAIAAhTQAAgXgKgMQgLgMgTAAQgOAAgJALQgKALgCASIgNBwIgbAAIANhtQACgLAFgLQAGgLAHgGIADgBIgBgBIgQADIgSAGIgGgUQARgHAVgDQAVgEAQAAQAjAAATATQASASAAAkIAABmg");
	this.shape_23.setTransform(492.525,106.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgxBTQgWgFgVgKIAAibIAbAAIAACNQAOAGAQADQAPADAOAAQAUAAAQgGQASgGAJgMQAJgNAAgSIAAhiIAbAAIAABlQgBAYgNARQgNARgWAIQgWAIgbAAQgVAAgXgFgAgXAlQAFgGADgKQACgKAAgMIAAhWIAaAAIAABRQAAAOgEALQgEALgGAIg");
	this.shape_24.setTransform(471.25,106.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(265,-155,547.6,328.6), null);


(lib.Symbol6copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg8OAJVIAAypMB4dAAAIAASpg");
	mask.setTransform(809.3,453.6);

	// Layer_3
	this.instance = new lib.Symbol13();
	this.instance.setTransform(770.15,581.55,1,1,0,0,0,332.1,54.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:458.15},13).wait(1));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhpDUQg4gbghgxQgWgfgLglQgKgnADgtQACgjAJgZQAKgiAYggQAkgvA4gaQA5gZA7AFQA7AFA0AiQA0AiAcA1QAbA1gBA9QgBA+geA0QgdA0g1AgQg2Agg7ACIgKAAQg2AAgzgZg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AhTGSQgxgTgmgmQgugvgOg/QgIghACghQACgrAQgnQAQgnAdgfIAOgOQgbgUgTgcQgWgfgKglQgLgmADguQADgjAIgaQALgiAXgfQAkgwA5gZQA5gaA6AFQA8AFA0AiQA0AiAbA1QAcA1gBA+QgCA+gdA0QgRAegZAYQAeAWAWAhQAgAvAHA3QAIA9gZA9QgZA8gyAmQgxAlhBAKQgRACgSAAQgsAAgqgQg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Ah0KXQgugVgjgoQgigpgOgxQgJglgCg4QgCg4AEgmQAFgzASgnIAEgIIgJgpQgIgzgBgkQgBgvAKgmQAGgXAMgWQgIggACggQACgrAQgnQAQgnAdgfIAOgOQgbgVgTgcQgWgfgKglQgLgmADguQADgjAIgaQALgiAXgfQAkgwA5gZQA5gaA6AFQA8AFA0AiQA0AiAbA1QAcA1gBA+QgCA+gdA0QgRAegZAYQAeAXAWAhQAgAvAHA3QAIA9gZA8QgGAOgHANQAEAQADARQAMBEgHA7QgGAygUAoQAFAYACAcQADAegCAyQgDA/gIAfQgNAxgiApQghApgvAWQguAWg0AAIgDAAQgzAAgugVg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AgcNoQg4gHgtgeQg5gmgZg7QgOgggGgvIgHhSIgGhdQgBg0AKgnQADgOAGgMQgMgWgHgYQgJglgCg4QgCg4AEgmQAFgzASgnIAEgIIgJgoQgIgzgBgkQgBgvAKgmQAGgYAMgWQgIggACggQACgrAQgnQAQgnAdgfIAOgOQgbgVgTgcQgWgfgKglQgLgmADguQADgjAIgaQALgiAXgfQAkgwA5gZQA5gaA6AFQA8AFA0AiQA0AiAbA1QAcA1gBA+QgCA+gdA0QgRAegZAYQAeAXAWAhQAgAvAHA3QAIA9gZA9QgGAOgHANQAEAQADARQAMBEgHA6QgGAygUAoQAFAYACAcQADAegCAyQgDA/gIAfIgJAcQAUAmAKAyQAMA5AABWQAABXgRAyQgRAzgoAoQgoAngzASQglAMgmAAQgPAAgPgCg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AhiQ0QhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtADQgVgKgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAFgPAGgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgQQgZgcgQgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBAgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAdQAnAoASA0QAQAwACBYQACA9gEAnQgFAngKAgIACATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgYAPgZAIQAYADATAHQBGAWAuA+QAuA+ACBJQACBJgsBAQgrBAhFAZQgjANguAFQgeADg2AAQhPAAgqgGg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AoHQ0QhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtADQgVgKgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAFgPAGgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgQQgZgcgQgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBBgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAdQAnAoASA0QAQAwACBYQACA9gEAnQgFAngKAgIACATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgYAPgZAIQAQACAOAEQAggJAngDQAigCBMACQDeAGDagNQBpgFAyAEQBWAIA5AmQAzAjAcA8QAbA7gHA+QgHA+gnA1QgnA0g5AZQgoASg3AGQgiAEhBABIoCAGQhLAAgmgEQgcgDgXgGQgcAHgiAEQgeADg2AAQhQAAgqgGg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AyiQ0QhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtADQgVgKgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAFgPAGgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgQQgZgcgQgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBBgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAdQAnAoASA0QAQAwACBYQACA9gEAnQgFAngKAgIACATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgYAPgZAIQAQACAOAEQAggJAngDQAigCBMACQDfAGDagNIAugCIANgGQAwgXBCgEQAqgDBOAFIFyAWQDqAOBuADQDAAHCZgGQBYgDAjACQBGAEAwAXQA8AcAlA5QAmA5ACBBQADBCgjA7QgiA7g6AfQgzAahIAFQgjADhggDQhSgCi+ACQivAChhgFQg7gDjEgRQiegOhgAAIgjAAIgJAEQgoASg3AGQgiAEhBABIoDAGQhLAAgmgEQgcgDgXgGQgcAHgiAEQgeADg2AAQhQAAgqgGg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EAhrARUI00gkQj/gHhvgBQjNgDihAEQhZACgsgFQghgDgcgIQhSgBiOABQiwAChhgFQg6gCjFgSQiegOhhABIgiAAIgJAEQgpASg2AGQgiAEhBAAIoEAGQhLABgmgFQgbgDgYgGQgcAIghADQgfADg1AAQhRAAgqgFQhDgJgwgZQhAgigjhDQgkhEAIhHQAJhIAyg5QAzg5BGgQQAjgIAyABIAsACQgUgKgUgOQg6gqgYg/QgNgkgEgwQgDgbAAg7IACkIQABiFgFhOIgDhJQgBgqAJgeQAEgQAHgOIgBgPIgDhBIgFg4QgDghACgWQAEg3AegwQAMgUAPgQQgagbgQgjQgag5AGg/QAGhEAtg5QAtg4BAgWQBBgWBGASQBGASAuAyQAuAyAMBHQAMBHgbA/QgQAkgaAdQAnAoARA0QAQAxACBXQACA+gEAmQgEAngLAhIACASQADAdAAA1IADHNQAABGgEAlQgGA7gVAqQgdA+g+AlQgYAOgZAIQAQADAPAEQAggJAngDQAigDBLACQDgAGDZgMIAvgCIAMgHQAwgWBDgFQAqgDBOAFIFyAWQDrAOBuAEQDAAHCYgHQBYgDAjACQAZACAWAEIZvAqQEKAHCFgEQBggCAqAEQBMAIA0AeQAzAfAfA2QAfA2AAA8QABA8geA2QgfA3gyAgQg1AhhPAKQgjAEg4AAIgzgBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AXGRUI01gkQj9gHhwgBQjMgDiiAEQhZACgsgFQghgDgcgIQhSgBiPABQivAChhgFQg7gCjEgSQiegOhhABIgjAAIgJAEQgoASg3AGQgiAEhBAAIoDAGQhLABgmgFQgcgDgXgGQgcAIgiADQgeADg2AAQhQAAgqgFQhEgJgwgZQg/gigkhDQgjhEAIhHQAIhIAzg5QAyg5BGgQQAjgIAyABIAtACQgVgKgTgOQg6gqgYg/QgOgkgEgwQgCgbAAg7IACkIQABiFgFhOIgEhJQAAgqAIgeQAFgQAGgOIgBgPIgDhBIgFg4QgDghACgWQAEg3AegwQAMgUAPgQQgZgbgQgjQgag5AFg/QAHhEAsg5QAtg4BBgWQBBgWBFASQBGASAuAyQAvAyAMBHQAMBHgbA/QgQAkgbAdQAnAoASA0QAQAxACBXQACA+gEAmQgFAngKAhIACASQADAdAAA1IACHNQABBGgEAlQgHA7gUAqQgeA+g9AlQgYAOgZAIQAQADAOAEQAggJAngDQAigDBMACQDfAGDagMIAugCIANgHQAwgWBCgFQAqgDBOAFIFzAWQDqAOBuAEQDAAHCZgHQBYgDAjACQAZACAXAEIZuAqQEKAHCEgEQBhgCApAEQAuAFAmANIAEgEQA0gvBDgNQAzgKBFAJQAoAFBPAPQBiARCyAFQEOAHD1gEQBQgBAnAEQBCAHAuAYQA1AbAjA0QAjAzAFA8QAEA8gaA4QgbA4gxAiQg0AkhQALQgxAGhggBQk5gCidgEQkPgHjEgeQg/gKglgMIgRgFQgQAPgUANQg1AhhOAKQgjAEg4AAIgzgBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAp9ARUQgxgHgngSQgcAJghAEQgxAHhhgCQk5gBicgEQkQgHjDgfQg/gKgmgLIgQgGQgRAQgTAMQg1AihPAJQgxAGhdgCI0zgkQj/gHhvgCQjNgDihAEQhZACgtgEQghgEgcgIQhSgBiOACQiwAChhgFQg6gDjFgRQiegOhhAAIgiAAIgJAEQgpASg2AGQgiAEhBABIoEAGQhLAAgmgEQgbgDgYgGQgcAHghAEQgfADg1AAQhRAAgqgGQhDgIgwgaQhAgigjhDQgkhDAIhIQAJhHAyg5QAzg6BGgQQAjgIAyABIAsADQgUgKgUgOQg6gqgYhAQgNgjgEgwQgDgbAAg8IACkHQABiGgFhNIgDhKQgBgpAJgfQAEgPAHgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgQQgagcgQgiQgag5AGhAQAGhEAtg4QAtg5BAgWQBBgWBGASQBGASAuAzQAuAyAMBHQAMBHgbA/QgQAkgaAdQAnAoARA0QAQAwACBYQACA9gEAnQgEAngLAgIACATQADAcAAA2IADHNQAABFgEAmQgGA6gVArQgdA9g+AlQgYAPgZAIQAQACAPAEQAggJAngDQAigCBLACQDgAGDZgNIAvgCIAMgGQAwgXBDgEQAqgDBOAFIFyAWQDrAOBuADQDAAHCYgGQBZgDAjACQAZABAWAEIZuAqQEKAHCFgDQBggCAqAEQAuAEAlANIAEgEQA1gvBDgNQAygKBFAJQAoAGBQAPQBiAQCyAFQENAHD1gDQBQgBAnAEQA5AGArATQAWgIAagEQAggGBBgFQDAgNBfgFQCfgJCAABQA9AAAkAEQA1AHAoASQA+AeAlA+QAmA+gEBFQgDBFgrA7QgrA6hAAYQgpAPg3AEQgYABhLgBQiYgDiTAOIhvALQhCAHgtACIgoABQgoAAghgEg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ac0RUQgxgHgngSQgdAJghAEQgxAHhggCQk5gBidgEQkPgHjEgfQg/gKglgLIgRgGQgQAQgUAMQg1AihOAJQgyAGhcgCI00gkQj+gHhwgCQjMgDiiAEQhZACgsgEQghgEgcgIQhSgBiPACQivAChhgFQg7gDjEgRQiegOhhAAIgjAAIgJAEQgoASg3AGQgiAEhBABIoDAGQhLAAgmgEQgcgDgXgGQgcAHgiAEQgeADg2AAQhQAAgqgGQhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtADQgVgKgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAFgPAGgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgQQgZgcgQgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBBgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAdQAnAoASA0QAQAwACBYQACA9gEAnQgFAngKAgIACATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgYAPgZAIQAQACAOAEQAggJAngDQAigCBMACQDfAGDagNIAugCIANgGQAwgXBCgEQAqgDBOAFIFzAWQDqAOBuADQDAAHCZgGQBYgDAjACQAZABAXAEIZvAqQEJAHCEgDQBhgCApAEQAuAEAmANIAEgEQA0gvBDgNQAzgKBFAJQAoAGBPAPQBiAQCyAFQEOAHD1gDQBQgBAnAEQA5AGArATQAWgIAagEQAfgGBBgFQDAgNBfgFQCggJCAABQAsAAAfACQAWgFAagCQAcgDA5AAIFtAAIAOgMQAugiBGgKQAtgGBTACIMhAUQBFACAgADQA4AFArANQAzAQAnAdQAsAgAVAsQASAlAAArQABAqgRAnQgQAmgfAeQgfAdgoAPQgsASg9ABQgiAAhKgHQi2gRjYgFQiYgEjSACIgBACQgoA8g+AaQgnARg0AFQghAEg+AAImCAAQguAAgfgBQggAIgoADQgZABhKgBQiZgDiTAOIhuALQhCAHgtACIgoABQgpAAgggEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:401.8934,y:359.8444}).wait(1).to({graphics:mask_1_graphics_1,x:400.3136,y:377.9525}).wait(1).to({graphics:mask_1_graphics_2,x:403.0386,y:404.4846}).wait(1).to({graphics:mask_1_graphics_3,x:399.1386,y:423.559}).wait(1).to({graphics:mask_1_graphics_4,x:396.9539,y:446.32}).wait(1).to({graphics:mask_1_graphics_5,x:437.7985,y:446.32}).wait(1).to({graphics:mask_1_graphics_6,x:501.8599,y:446.32}).wait(1).to({graphics:mask_1_graphics_7,x:615.3268,y:449.0568}).wait(1).to({graphics:mask_1_graphics_8,x:686.9591,y:449.0568}).wait(1).to({graphics:mask_1_graphics_9,x:724.2414,y:449.3424}).wait(1).to({graphics:mask_1_graphics_10,x:809.6522,y:449.3424}).wait(14));

	// Layer_2
	this.instance_1 = new lib.Bitmap();
	this.instance_1.setTransform(300,289,1.1625,1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(81,255,237,0)").s().p("EhwYBGMMAAAiMXMDgxAAAMAAACMXg");
	this.shape.setTransform(719.325,449.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1438.7,898.4);


(lib.frame1copy7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(398.55,121.15,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

	// טקסט
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(199.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41));

	// !
	this.instance_3 = new lib.Symbol6copy3("synched",0,false);
	this.instance_3.setTransform(-13.15,111.45,1.25,1.25,0,0,0,719.3,449.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41));

	// רקע
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(87.55,91.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.9219},19).wait(22));

	// Layer_2
	this.instance_5 = new lib.textend();
	this.instance_5.setTransform(-103.8,310.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0.1992},19).to({_off:true},1).wait(21));

	// pic1 copy 4
	this.instance_6 = new lib.backcopy8();
	this.instance_6.setTransform(-35.6,325);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.1992},19).to({_off:true},1).wait(21));

	// pic1 copy 2
	this.instance_7 = new lib.backcopy6();
	this.instance_7.setTransform(-861.2,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0.1992},19).wait(22));

	// pic1 copy
	this.instance_8 = new lib.backcopy4();
	this.instance_8.setTransform(-448.6,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0.1992},19).wait(22));

	// pic1
	this.instance_9 = new lib.back();
	this.instance_9.setTransform(-45,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:0.1992},19).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-912.3,-449.9,1798.3,1122.9);


(lib.frame1copy6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(398.55,121.15,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// טקסט
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(199.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// Layer_2
	this.instance_3 = new lib.textend();
	this.instance_3.setTransform(-103.8,310.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({alpha:1},12).wait(1));

	// pic1 copy 4
	this.instance_4 = new lib.backcopy8();
	this.instance_4.setTransform(-5.6,325);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({x:-35.6,alpha:1},14,cjs.Ease.get(1)).wait(13));

	// pic1 copy 2
	this.instance_5 = new lib.backcopy6();
	this.instance_5.setTransform(-831.2,-55);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({x:-861.2,alpha:1},14).wait(15));

	// pic1 copy
	this.instance_6 = new lib.backcopy4();
	this.instance_6.setTransform(-418.6,-55);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({x:-448.6,alpha:1},14).wait(17));

	// pic1
	this.instance_7 = new lib.back();
	this.instance_7.setTransform(-15,-55);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({x:-45,alpha:1},14).wait(19));

	// text1 copy
	this.instance_8 = new lib.text1copy2();
	this.instance_8.setTransform(678.95,-117.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-97.45,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	// Layer_3
	this.instance_9 = new lib.text1();
	this.instance_9.setTransform(462.55,172.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:246.2,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	// gun1
	this.instance_10 = new lib.glock1();
	this.instance_10.setTransform(7,210,0.77,0.77,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:230,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-733.8,-362,1558.3,1018.6);


(lib.frame1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(398.55,121.15,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

	// טקסט
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(209.6,-315.95,1,1,0,0,0,149.2,46.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:199.6,alpha:1},11,cjs.Ease.get(1)).wait(30));

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41));

	// text1 copy
	this.instance_3 = new lib.text1copy2();
	this.instance_3.setTransform(688.95,-117.45);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({x:678.95,alpha:1},17).wait(11));

	// Layer_2
	this.instance_4 = new lib.text1();
	this.instance_4.setTransform(487.4,172.15);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({x:462.55,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// gun1
	this.instance_5 = new lib.glock1();
	this.instance_5.setTransform(7,210,0.77,0.77,0,0,0,0.1,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({alpha:1},26,cjs.Ease.get(1)).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-733.8,-362,1568.3,998.6);


// stage content:
(lib._460 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2];
	// timeline functions:
	this.frame_0 = function() {
		// Save the root because do not recognize this in func
		this.stop();
		/*var saveRoot = this;
		
		// Add Listner to stage
		canvas.addEventListener("click", moveFrame);
		
		function moveFrame(e)
		{
		                if(saveRoot.totalFrames - 1 != saveRoot.currentFrame)
		                {
		                                // Move one frame foword
		                                saveRoot.gotoAndStop(saveRoot.currentFrame + 1);
		                }
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// content
	this.instance = new lib.frame1();
	this.instance.setTransform(633.5,358.5);

	this.instance_1 = new lib.frame1copy6();
	this.instance_1.setTransform(633.5,358.5);

	this.instance_2 = new lib.frame1copy7();
	this.instance_2.setTransform(633.5,358.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(441.2,358.6,1078.3,672.9);
// library properties:
lib.properties = {
	id: 'CED2E0BB73D0FB4A94F98B57753898E7',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap.png?1636533428681", id:"Bitmap"},
		{src:"images/_10copy.png?1636533428681", id:"_10copy"},
		{src:"images/BG.png?1636533428681", id:"BG"},
		{src:"images/bucket.png?1636533428681", id:"bucket"},
		{src:"images/bullet.png?1636533428681", id:"bullet"},
		{src:"images/chotter.png?1636533428681", id:"chotter"},
		{src:"images/dokran.png?1636533428681", id:"dokran"},
		{src:"images/flanelit.png?1636533428681", id:"flanelit"},
		{src:"images/mivreshet.png?1636533428681", id:"mivreshet"},
		{src:"images/nikui_new.png?1636533428681", id:"nikui_new"},
		{src:"images/oil.png?1636533428681", id:"oil"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CED2E0BB73D0FB4A94F98B57753898E7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;