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



(lib._10copy = function() {
	this.initialize(img._10copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,820,839);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,433);


(lib.Bitmap9A = function() {
	this.initialize(img.Bitmap9A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,330);


(lib.bullet = function() {
	this.initialize(img.bullet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.imagegeg = function() {
	this.initialize(img.imagegeg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,186);// helper functions:

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


(lib.text1copy4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBpIAAgpIAkAAIAAhRQAAgUgIgMQgIgLgPAAQgOAAgIALQgIALgCAWIgMB5Ig1AAIAMhyQADgOAFgMQAFgNAHgIIADgBIAAgBIgQAEIgRAFIgLgnQAUgHAbgEQAagFAWAAQAvAAAYAYQAZAXAAAvIAABzg");
	this.shape.setTransform(63.35,20.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaBaIALgnQAZAJAWADQgGgFgFgHQgEgJgCgIIgfiKIA1AAIAdCQQAEANADAHQAOgFAGgMQAIgLgBgRIAAh3IA2AAIAAB1QAAAdgMAVQgNAVgWALQgWAKgeAAQgoAAgpgPg");
	this.shape_1.setTransform(40.1,20.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhXBnIAAgrIBiAAIAAhZQAAgPgIgIQgIgHgQAAIg3AAIAAgrIA7AAQAZAAASAJQATAJAKARQAJARAAAXIAABWIAYADIAAApg");
	this.shape_2.setTransform(20.675,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATBnIAAiHQAAgOgIgGQgHgIgOABIg+AAIAAgrIBCAAQAYAAASAJQASAJAJAQQAKARgBAWIAACEg");
	this.shape_3.setTransform(1.4,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBnIAAiEQAAgegcAAIgjAAIAACiIg1AAIAAjNIBYAAQAoAAAUAUQAVATABAnIAAB/g");
	this.shape_4.setTransform(-25.95,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA6IAAhJIggAAIAAgrIBVAAIAAB0g");
	this.shape_5.setTransform(-44.2,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBnIAAiHQAAgOgIgGQgHgIgOABIg+AAIAAgrIBCAAQAYAAASAJQASAJAJAQQAKARgBAWIAACEg");
	this.shape_6.setTransform(-58.9,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBnIAAiiIgSAAIAAgrIBHAAIAADNg");
	this.shape_7.setTransform(-73.125,20.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhWBnIAAjNICtAAIAADNgAghA8IBDAAIAAh3IhDAAg");
	this.shape_8.setTransform(-89.525,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1copy4, new cjs.Rectangle(-103.2,-7.7,180.5,55.400000000000006), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBpIAAgpIAkAAIgBhRQAAgUgIgMQgIgLgQAAQgNAAgIALQgIALgCAWIgNB5Ig0AAIAMhyQACgOAGgMQAFgNAHgIIACgBIAAgBIgPAEIgQAFIgMgnQAUgHAbgEQAagFAWAAQAvAAAYAYQAZAXAAAvIAABzg");
	this.shape.setTransform(63.25,20.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZBaIAKgnQAZAJAWADQgGgFgFgHQgEgJgCgIIgfiKIA2AAIAcCQQADANAEAHQAOgFAGgMQAIgLgBgRIAAh3IA2AAIAAB1QABAdgNAVQgMAVgXALQgWAKgdAAQgpAAgogPg");
	this.shape_1.setTransform(40,20.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhXBnIAAgrIBiAAIAAhZQAAgPgIgIQgIgHgQAAIg3AAIAAgrIA7AAQAZAAASAJQATAJAKARQAJARAAAXIAABWIAYADIAAApg");
	this.shape_2.setTransform(20.575,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATBnIAAiHQAAgOgIgGQgHgIgOABIg9AAIAAgrIBBAAQAYAAASAJQASAJAKAQQAJARAAAWIAACEg");
	this.shape_3.setTransform(1.3,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA6IAAhJIggAAIAAgrIBVAAIAAB0g");
	this.shape_4.setTransform(-22.15,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBnIgYihIgLgDIAAgpIBxAAIAAArIgyAAIAaCig");
	this.shape_5.setTransform(-34.05,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBnIAAiiIgSAAIAAgrIBHAAIAADNg");
	this.shape_6.setTransform(-47.275,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWBnIAAjNICtAAIAADNgAghA8IBDAAIAAh3IhDAAg");
	this.shape_7.setTransform(-63.675,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1copy2, new cjs.Rectangle(-77.2,-7.7,154.5,55.400000000000006), null);


(lib.text1copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhDBYIAGgWQAZAGAUAAQAZAAAPgNQAOgNAAgYIAAhdIhiAAIAAgYIB/AAIAABuQAAApgUAUQgWAUgmAAQgYAAgegIg");
	this.shape.setTransform(69.5,-0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0BfIhUh0QgRALAAAaIAABPIgdAAIAAhFQAAgZAIgOQAIgQASgIIgpg5IAhAAIA7BRIAthRIAiAAIg9BqIA8BTg");
	this.shape_1.setTransform(51.35,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAQAAQAWAAARgHQATgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_2.setTransform(27.2,-0.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAHQAOAIAHAMQAIAOAAATIAACBg");
	this.shape_3.setTransform(5.25,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_4.setTransform(-16.125,-4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAPAAQAWAAATgHQASgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgOATQgPASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgHAIg");
	this.shape_5.setTransform(-33.35,-0.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBdIABgXQAKACANAAQANAAAGgHQAHgIgBgQIAAhxIgkAAIAAgXIBDAAIAACKQAAAagOAOQgNANgXAAQgOABgQgEg");
	this.shape_6.setTransform(-53.4,-0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_7.setTransform(-68.075,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQAEgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_8.setTransform(-97.4,-0.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgJQADgIAEgIIAYAAIgDAPIgBAXIAACKgAgIAmQAPgBAMgGQAMgGAGgNQAHgLAAgQIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgLARgSAKQgTAJgYABg");
	this.shape_9.setTransform(-116.8,2.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_10.setTransform(-135.45,-3.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_11.setTransform(-153.675,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_12.setTransform(-180.1,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBdIAAgXQALACANAAQANAAAGgHQAHgIAAgQIAAhxIglAAIAAgXIBDAAIAACKQgBAagNAOQgNANgXAAQgPABgPgEg");
	this.shape_13.setTransform(-195.85,-0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2BcQgZgGgWgLIAAirIAdAAIAACbQAQAHARADQARAEAPAAQAXAAARgHQATgGAKgOQALgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgYAJQgZAJgdAAQgYAAgZgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_14.setTransform(-213.95,-0.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgJQACgIAEgIIAZAAIgDAPIgBAXIAACKgAgIAmQAOgBANgGQAMgGAGgNQAHgLAAgQIAAhZIh0AAIAAgXICRAAIAABvQABAXgKASQgLARgSAKQgUAJgXABg");
	this.shape_15.setTransform(-237.3,2.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_16.setTransform(-265.425,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAzBfIhTh0QgRALAAAaIAABPIgdAAIAAhFQAAgZAIgOQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_17.setTransform(-285.2,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAANAHQAPAIAIAMQAHAOAAATIAACBg");
	this.shape_18.setTransform(-305.1,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_19.setTransform(-317.95,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhCAIAAjoIheAAIAAgXIB7AAIAAD/g");
	this.shape_20.setTransform(-331.25,2.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAeQAIgMAEgLQAEgJAAgNIAAgZIAdAAIAAAYQAAAPgIAPQgHAQgNALg");
	this.shape_21.setTransform(-342.275,9.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_22.setTransform(-361.75,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAXABQgNgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgMASgSAJQgTAJgYAAQghAAgjgOg");
	this.shape_23.setTransform(-381.05,-0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAHgJIgkAAIAAgYIBXAAQAmAAATASQASASAAAlIAAB0IgdAAIgBh2QAAgYgLgLQgKgMgXAAIgaAAQgGAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_24.setTransform(-401.1,-0.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_25.setTransform(-428.125,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_26.setTransform(-443.625,-4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQAEgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_27.setTransform(-459.2,-0.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgJQADgIAEgIIAYAAIgDAPIgBAXIAACKgAgIAmQAPgBAMgGQAMgGAGgNQAHgLAAgQIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgLARgSAKQgTAJgYABg");
	this.shape_28.setTransform(-478.6,2.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_29.setTransform(-497.25,-3.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_30.setTransform(-511.3,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAEgPAHgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgLgLQgKgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_31.setTransform(-526.95,-0.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_32.setTransform(-554.925,-0.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgmBYQgSgJgJgRQgKgSAAgXIAAh0IAeAAIAAB3QAAAPAGALQAGALAKAGQAKAHANgBQAOABAKgHQAKgGAGgLQAGgLAAgPIAAg/QAAgPgHgJQgHgIgMAAQgLgBgMAHIgEgVQAHgEAKgEQAJgDAJAAQAPABALAGQAKAHAGAMQAGAMAAARIAAA/QAAAXgJASQgKARgRAJQgRAKgXAAQgVAAgRgKg");
	this.shape_33.setTransform(-575.125,-0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_34.setTransform(-591.1,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_35.setTransform(-600.8,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgYgLgMQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_36.setTransform(-614.825,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgJQACgIAFgIIAYAAIgDAPIgBAXIAACKgAgJAmQAQgBAMgGQALgGAHgNQAHgLgBgQIAAhZIh0AAIAAgXICTAAIAABvQgBAXgJASQgLARgTAKQgTAJgYABg");
	this.shape_37.setTransform(-643.5,2.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhDBfIAAgYIBkAAIhwilIAhAAIAyBNIArhNIAhAAIg6BmIAyBIIAAAPg");
	this.shape_38.setTransform(-662.85,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAHQAOAIAHAMQAIAOAAATIAACBg");
	this.shape_39.setTransform(-680.65,-0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_40.setTransform(-692.475,7.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1copy, new cjs.Rectangle(-707,-27.7,788.2,52.5), null);


(lib.Symbol15copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2ZRAMAAAghhMAszAAAMAAAAhhg");
	mask.setTransform(143.425,108.825);

	// Layer_2
	this.instance = new lib.Bitmap9A();
	this.instance.setTransform(-30,-7,0.68,0.68);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15copy, new cjs.Rectangle(0,3,286.9,214.4), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2ZQxMAAAghhMAszAAAMAAAAhhg");
	mask.setTransform(143.425,107.325);

	// Layer_2
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-7,0,0.67,0.67);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,286.9,214.7), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.imagegeg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,456,186), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABCCuIAAjdQAAgjgRgQQgRgRgjAAIiHAAIAAg6ICLAAQBDAAAkAhQAkAhAAA/IAADagAiLCuIAAh3QAAgdAFgQQAFgPAIgNIA8AAQgGAYAAAqIAAB+g");
	this.shape.setTransform(499.225,47.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiCCuIAAg6ICrAAIjEkhIBUAAIBQB+IBAh+IBTAAIhoC+IBVB6IAAAjg");
	this.shape_1.setTransform(463.7,47.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTCuIAAkhIgjAAIAAg6IBtAAIAAFbg");
	this.shape_2.setTransform(436.375,47.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuCuIAAjrQAAgZgPgOQgOgPgZAAIhwAAIAAg6IBzAAQAmAAAdAOQAcAOAQAaQAPAagBAlIAADmg");
	this.shape_3.setTransform(412.05,47.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAsDrIAAmbIihAAIAAg6IDrAAIAAHVg");
	this.shape_4.setTransform(381.75,53.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiSCuIAAg6ICxAAIAAijQAAgjgQgQQgQgRgkAAIhaAAIAAg6IBeAAQBDAAAkAhQAjAhAAA/IAACdIAqAFIAAA4g");
	this.shape_5.setTransform(337.225,47.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABRCuIiNjHQgKAIgFANQgFALAAARIAACWIhIAAIAAh4QAAgvAQgcQAOgdAhgQIhMhrIBTAAIBeCGIBHiGIBTAAIhsDGIBpCVg");
	this.shape_6.setTransform(301.825,47.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiIDrIAAj3QAAgcAGgQQAFgQAHgOIA9AAQgHAYAAAsIAAD9gAgSA4QAngBAXgYQAXgYAAgpIAAiOIjPAAIAAg6IEZAAIAADGQAAAtgTAiQgUAhgkASQgkASgwABg");
	this.shape_7.setTransform(262.225,53.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALCuIAAkhIibAAIAAg6IEhAAIAAA6Ig7AAIAAEhg");
	this.shape_8.setTransform(226.6,47.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABCCuIAAjcQAAgjgPgRQgQgRghAAIhDAAIAAEhIhKAAIAAlbICNAAQCJAAABCEIAADXg");
	this.shape_9.setTransform(192.175,47.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+DhIB3khIjCAAIAAigIBLAAIAABlIDIAAIAAAwIh5Esg");
	this.shape_10.setTransform(142.375,42.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABCCuIAAjcQAAgjgPgRQgQgRghAAIhDAAIAAEhIhKAAIAAlbICNAAQCJAAABCEIAADXg");
	this.shape_11.setTransform(108.275,47.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHBiIAAiJIg7AAIAAg6ICFAAIAADDg");
	this.shape_12.setTransform(77.975,39.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAJCyIAAg6IBKAAIAAiYQAAgpgSgVQgRgWggAAQgZAAgRAVQgQAUgEAlIgXDYIhKAAIAYjPQADgXAKgWQAKgVANgMIAFgEIgBgBQgMACgRAFQgSAEgOAGIgQg3QAigMAsgIQAsgHAlAAQBLAAAoAnQAnAnAABMIAADJg");
	this.shape_13.setTransform(49.875,47.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AinCtIAAg6IATABQAXAAAMgMQAKgMABgaIAAhfQAAgXAFgYQAHgZAKgQIg7AAIAAg6ICqAAQBEAAAjAhQAiAhAABCIAADXIhJAAIgBjcQAAgkgPgQQgPgRghAAIguAAQgHAQgEAWQgEAWAAAVIAABrQAAAzgaAbQgZAbgvAAQgSAAgVgDg");
	this.shape_14.setTransform(9.7,47.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHBiIAAiJIg7AAIAAg6ICFAAIAADDg");
	this.shape_15.setTransform(-18.675,39.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(-29.1,0,548.5,92.1), null);


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
	this.shape.graphics.f("#51FFED").s().p("AALC1IAAhLIA7AAIAAiIQAAgigNgTQgNgTgZAAQgvAAgHBLIgVDQIheAAIAWjDQADgXAJgWQAJgWAMgMIAEgDIgBgCIgaAGIgbAJIgUhEQAigNAtgIQAugIApAAQBRAAAqAqQAqApAABQIAADGg");
	this.shape.setTransform(275.95,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51FFED").s().p("AiXCwIAAhKICnAAIAAiZQAAgyg0AAIhgAAIAAhKIBnAAQArAAAgAQQAfAOASAeQAQAcAAAoIAACSIApAGIAABHg");
	this.shape_1.setTransform(240.35,47.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51FFED").s().p("AggCwIAAkVIgeAAIAAhKIB9AAIAAFfg");
	this.shape_2.setTransform(212.675,47.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51FFED").s().p("ABCCwIh/i5QgIAKAAASIAACdIhcAAIAAh0QAAgwAPgdQAPgdAhgRIhOhwIBrAAIBRB4IA6h4IBrAAIhqDMIBlCTg");
	this.shape_3.setTransform(184.45,47.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51FFED").s().p("AiYAmIAAhLIExAAIAABLg");
	this.shape_4.setTransform(130.925,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(109.1,0,189.29999999999998,92.1), null);


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
	this.instance.setTransform(-21,0,1.0256,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-21,0,841,839), null);


(lib.text1copy2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(16,-65,0.09,0.09);

	this.instance_1 = new lib.bullet();
	this.instance_1.setTransform(16,-115,0.09,0.09);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCBYIAEgWQAaAGAUAAQAZAAAPgNQAOgNAAgYIAAhdIhiAAIAAgYICAAAIAABuQgBApgUAUQgWAUglAAQgZAAgdgIg");
	this.shape_8.setTransform(39.5,-31.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAzBfIhTh0QgRALAAAaIAABPIgdAAIAAhFQAAgZAIgOQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_9.setTransform(21.35,-32.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BcQgZgGgWgLIAAirIAdAAIAACbQAQAHARADQARAEAQAAQAVAAASgHQATgGAKgOQALgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgYAJQgZAJgdAAQgYAAgZgFgAgaAoQAFgGAEgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_10.setTransform(-2.8,-31.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAANAHQAPAIAIAMQAHAOAAATIAACBg");
	this.shape_11.setTransform(-24.75,-32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_12.setTransform(-46.125,-36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag1BcQgagGgWgLIAAirIAdAAIAACbQAQAHAQADQASAEAQAAQAVAAASgHQATgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgZAJQgYAJgdAAQgYAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_13.setTransform(-63.35,-31.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBfIAAgYIBmAAIhxilIAiAAIAxBNIAqhNIAiAAIg6BmIAyBIIAAAPg");
	this.shape_14.setTransform(-93.75,-32.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_15.setTransform(-108.2,-32.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAHQAPAIAIAMQAHAOAAATIAACBg");
	this.shape_16.setTransform(-121.25,-32.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAgCAIAAjoIhdAAIAAgXIB7AAIAAD/g");
	this.shape_17.setTransform(-137.7,-28.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_18.setTransform(-161.7,-32.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_19.setTransform(-176.325,-36.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIggAAIAAClg");
	this.shape_20.setTransform(-189.1,-32.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAQAAQAWAAARgHQATgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_21.setTransform(-218.95,-31.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBdIACgXQAKACANAAQANAAAGgHQAGgIAAgQIAAhxIgkAAIAAgXIBCAAIAACKQAAAagNAOQgMANgXAAQgPABgRgEg");
	this.shape_22.setTransform(-239,-31.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_23.setTransform(-249.825,-36.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_24.setTransform(-263.625,-32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgWQAOAEAOACQAPACAMAAQAZAAAOgNQAPgNAAgYIAAheIhLAAQgGAKgDANQgDAOAAANIAAAPIAKACIAPABIAAAZQgUAAgLgCQgMgDgLgGIgBgYQAAgQAFgQQAEgPAHgLIgXAAIAAgXICZAAIAABvQAAAagKATQgKASgTAJQgTAIgXAAQgPABgQgDg");
	this.shape_25.setTransform(-292.175,-31.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoBdIABgXQALACANAAQANAAAGgHQAHgIAAgQIAAhxIglAAIAAgXIBCAAIAACKQABAagNAOQgNANgYAAQgPABgQgEg");
	this.shape_26.setTransform(-309.15,-31.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_27.setTransform(-319.65,-32.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_28.setTransform(-329.675,-36.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_29.setTransform(-343.475,-32.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNBUQgFgFAAgHQAAgIAFgGQAFgEAIAAQAJAAAFAEQAEAGAAAIQAAAHgEAFQgFAFgJAAQgIAAgFgFgAgNg6QgFgEAAgIQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAIgFAEQgFAGgJAAQgIAAgFgGg");
	this.shape_30.setTransform(-357.125,-31.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmBYQgSgJgJgRQgKgSAAgXIAAh0IAeAAIAAB3QAAAPAGALQAGALAKAGQAKAHANgBQAOABAKgHQAKgGAGgLQAGgLAAgPIAAg/QAAgPgHgJQgHgIgMAAQgLgBgMAHIgEgVQAHgEAKgEQAJgDAJAAQAPABALAGQAKAHAGAMQAGAMAAARIAAA/QAAAXgJASQgKARgRAJQgRAKgXAAQgVAAgRgKg");
	this.shape_31.setTransform(-379.225,-32);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_32.setTransform(-395.525,-36.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgWQAOAEAOACQAPACAMAAQAZAAAOgNQAPgNAAgYIAAheIhLAAQgGAKgDANQgDAOAAANIAAAPIAKACIAPABIAAAZQgUAAgLgCQgMgDgLgGIgBgYQAAgQAFgQQAEgPAHgLIgXAAIAAgXICZAAIAABvQAAAagKATQgKASgTAJQgTAIgXAAQgPABgQgDg");
	this.shape_33.setTransform(-410.325,-31.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_34.setTransform(-425.85,-32.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjBYQgSgLgLgUQgKgUAAgaIAAgSQAAgMAEgNQADgMAGgJQAGgLAIgFIACgBIAAAAQgIAAgaAIIgGgXQATgGAYgDQAYgDATAAQAaAAATAKQATAKAKAUQALATAAAcIAAAVQAAAagKAUQgKAUgTALQgSAKgYABQgWgBgSgKgAgVhAQgKAHgGAOQgHAPAAAUIAAATQAAATAGAOQAHAOALAHQALAIAOAAQAPAAAMgIQALgHAHgOQAGgOAAgTIAAgVQAAgTgGgOQgHgOgMgHQgLgIgQAAQgOAAgLAIg");
	this.shape_35.setTransform(-440.875,-32.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAWABQgLgNgEgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgLASgUAJQgTAJgXAAQghAAgjgOg");
	this.shape_36.setTransform(-469.8,-31.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_37.setTransform(-486.8,-34.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgjBYQgSgLgLgUQgKgUAAgaIAAgSQAAgMAEgNQADgMAGgJQAGgLAIgFIACgBIAAAAQgIAAgaAIIgGgXQATgGAYgDQAYgDATAAQAaAAATAKQATAKAKAUQALATAAAcIAAAVQAAAagKAUQgKAUgTALQgSAKgYABQgWgBgSgKgAgVhAQgKAHgGAOQgHAPAAAUIAAATQAAATAGAOQAHAOALAHQALAIAOAAQAPAAAMgIQALgHAHgOQAGgOAAgTIAAgVQAAgTgGgOQgHgOgMgHQgLgIgQAAQgOAAgLAIg");
	this.shape_38.setTransform(-514.375,-32.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_39.setTransform(-530.1,-32.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_40.setTransform(-542.7,-34.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_41.setTransform(-561.725,-32.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgWAeQAIgMAEgLQAEgJAAgNIAAgZIAdAAIAAAYQAAAPgIAPQgHAQgNALg");
	this.shape_42.setTransform(-575.975,-22.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgIAEgIIAYAAIgDAQIgBAVIAABDg");
	this.shape_43.setTransform(-596.575,-32.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGBfIgaikIgNgCIAAgXIBbAAIAAAYIgwAAIAaClg");
	this.shape_44.setTransform(-612.075,-32.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGBfIgaikIgNgCIAAgXIBbAAIAAAYIgwAAIAaClg");
	this.shape_45.setTransform(-623.725,-32.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQAEgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_46.setTransform(-641,-32.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_47.setTransform(-663.85,-32.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_48.setTransform(-673.875,-36.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_49.setTransform(-686.4,-34.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_50.setTransform(-700.45,-32.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCCAIAAjoIgXAAIAAgXIAzAAIAAD/g");
	this.shape_51.setTransform(-710.175,-28.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_52.setTransform(-727.85,-32.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhDBYIAGgWQAZAGAUAAQAZAAAPgNQAOgNAAgYIAAhdIhiAAIAAgYIB/AAIAABuQABApgWAUQgVAUgmAAQgXAAgfgIg");
	this.shape_53.setTransform(-741.75,-31.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_54.setTransform(-755.3,-32.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgLAmIAAg3IAAgUIAXAAIAAASIgDA5g");
	this.shape_55.setTransform(-762.375,-43.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_56.setTransform(-769.725,-24.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_57.setTransform(40.65,-80.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_58.setTransform(21.225,-80.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPADgOQAFgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_59.setTransform(-0.55,-80.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_60.setTransform(-19.8,-80.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAHQAPAHAIANQAHAOAAATIAACBg");
	this.shape_61.setTransform(-39.7,-80.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_62.setTransform(-52.875,-84.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_63.setTransform(-67.475,-80.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_64.setTransform(-96.775,-80.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ag3BfIAAgbIAKAAQAXAAAPgOQANgNAEgWIAAhaIgqAAIAAgYIBIAAIAABhQAAAPADAOIANA/IgcAAIgMg1IgBAAQgCAOgIANQgIANgOAHQgOAIgQAAIgIgBg");
	this.shape_65.setTransform(-113.975,-80.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_66.setTransform(-128.4,-80.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_67.setTransform(-143.025,-84.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_68.setTransform(-155.55,-83.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_69.setTransform(-169.925,-84.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQAEgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_70.setTransform(-193.7,-80.525);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgnBdIAAgXQALACANAAQANAAAGgHQAHgIAAgQIAAhwIglAAIAAgYIBDAAIAACKQgBAagNAOQgNANgXAAQgPABgPgEg");
	this.shape_71.setTransform(-209.8,-80.45);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_72.setTransform(-220.3,-80.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AhLBTIAHgWQAcALAWABQgMgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgLASgUAJQgSAJgZAAQggAAgjgOg");
	this.shape_73.setTransform(-235,-80.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_74.setTransform(-253.275,-80.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgNBUQgFgFAAgHQAAgIAFgGQAFgEAIAAQAJAAAFAEQAEAGAAAIQAAAHgEAFQgFAFgJAAQgIAAgFgFgAgNg6QgFgEAAgIQAAgIAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAIQAAAIgFAEQgFAGgJAAQgIAAgFgGg");
	this.shape_75.setTransform(-266.925,-79.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_76.setTransform(-289.775,-80.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgjBYQgSgLgLgUQgKgUAAgaIAAgSQAAgMAEgNQADgMAGgJQAGgKAIgGIACgBIAAgBQgIABgaAIIgGgXQATgGAYgDQAYgDATgBQAaAAATALQATAKAKAUQALATAAAcIAAAVQAAAagKAUQgKAUgTALQgSAKgYABQgWgBgSgKgAgVhAQgKAHgGAOQgHAPAAAUIAAATQAAATAGAOQAHAOALAHQALAIAOAAQAPAAAMgIQALgHAHgOQAGgOAAgTIAAgVQAAgTgGgOQgHgOgMgHQgLgIgQAAQgOAAgLAIg");
	this.shape_77.setTransform(-310.925,-80.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAPBfIAAilIhaAAIAAgYICXAAIAAAYIggAAIAAClg");
	this.shape_78.setTransform(-329.8,-80.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAHQAOAHAHANQAIAOAAATIAACBg");
	this.shape_79.setTransform(-347.2,-80.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_80.setTransform(-360.05,-80.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgCCAIAAjnIgXAAIAAgYIAzAAIAAD/g");
	this.shape_81.setTransform(-369.775,-77.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhDBfIAAgYIBkAAIhwilIAhAAIAyBNIArhNIAhAAIg6BmIAyBIIAAAPg");
	this.shape_82.setTransform(-391.05,-80.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAHQAOAHAHANQAIAOAAATIAACBg");
	this.shape_83.setTransform(-408.85,-80.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgWAeQAIgMAEgLQAEgJAAgNIAAgZIAdAAIAAAYQAAAPgIAPQgHAQgNALg");
	this.shape_84.setTransform(-419.975,-70.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_85.setTransform(-441.525,-80.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhCBYIAEgWQAaAGAUAAQAaAAAOgNQAOgNAAgYIAAhdIhiAAIAAgYICAAAIAABuQAAApgWAUQgVAUglAAQgZAAgdgIg");
	this.shape_86.setTransform(-461.55,-80.475);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag2BcQgZgGgWgLIAAirIAdAAIAACbQAPAHASADQARAEAPAAQAXAAASgHQASgGAKgOQALgOAAgTIAAhtIAdAAIAABvQAAAbgOATQgPASgYAJQgZAJgeAAQgXAAgZgFgAgaAoQAFgGAEgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgHAIg");
	this.shape_87.setTransform(-482.7,-80.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_88.setTransform(-501.3,-80.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_89.setTransform(-513.9,-83.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgWAeQAIgMAEgLQAEgJAAgNIAAgZIAdAAIAAAYQAAAPgIAPQgHAQgNALg");
	this.shape_90.setTransform(-526.225,-70.55);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_91.setTransform(-547.775,-80.775);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhLBTIAHgWQAcALAXABQgNgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLASgSAJQgUAJgXAAQghAAgjgOg");
	this.shape_92.setTransform(-568.6,-80.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_93.setTransform(-585.75,-80.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAPAHQAOAHAHANQAIAOAAATIAACBg");
	this.shape_94.setTransform(-603.4,-80.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOADgIQABgJAFgIIAYAAIgDAPIgBAXIAACKgAgJAmQAQAAALgHQANgHAGgLQAHgMgBgQIAAhYIh0AAIAAgYICTAAIAABvQAAAXgLASQgKARgTAKQgSAJgZAAg");
	this.shape_95.setTransform(-629.2,-77.25);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_96.setTransform(-649.125,-80.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_97.setTransform(-667.2,-83.475);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_98.setTransform(-689.45,-80.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AhDBYIAGgWQAZAGAUAAQAaAAAOgNQAOgNAAgYIAAhdIhiAAIAAgYIB/AAIAABuQAAApgUAUQgWAUgmAAQgYAAgegIg");
	this.shape_99.setTransform(-703.35,-80.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_100.setTransform(-716.9,-80.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgLAnIAAg4IAAgVIAXAAIAAASIgDA7g");
	this.shape_101.setTransform(-723.975,-92);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_102.setTransform(-731.325,-72.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1copy2_1, new cjs.Rectangle(-776.1,-115,921.7,131), null);


(lib.frame1copy = function(mode,startPosition,loop,reversed) {
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
	this.instance_1.setTransform(219.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguWAGlIAAtJMBctAAAIAANJg");
	mask.setTransform(509.875,-314.025);

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41));

	// text1
	this.instance_3 = new lib.text1copy4();
	this.instance_3.setTransform(711.55,-207.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41));

	// text1
	this.instance_4 = new lib.text1copy();
	this.instance_4.setTransform(707.6,-137.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41));

	// Layer_2 copy
	this.instance_5 = new lib.Symbol14();
	this.instance_5.setTransform(-307.75,-6.95,1,1,0,0,0,228,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41));

	// Layer_3 copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A2ZQxMAAAghhMAszAAAMAAAAhhg");
	mask_1.setTransform(-305.225,-112.575);

	// Layer_3 copy 3
	this.instance_6 = new lib.Symbol15();
	this.instance_6.setTransform(-305.25,-112.6,1,1,0,0,0,143.4,107.3);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41));

	// text1 copy
	this.instance_7 = new lib.text1copy2();
	this.instance_7.setTransform(698.95,162.55);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:711.55,alpha:1},14).wait(27));

	// text1 copy
	this.instance_8 = new lib.text1copy2_1();
	this.instance_8.setTransform(655.45,312.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({x:696.35},14,cjs.Ease.get(1)).wait(13));

	// Layer_2
	this.instance_9 = new lib.Symbol14();
	this.instance_9.setTransform(-307.75,158.4,1,1,0,0,0,228,93);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).to({y:383.05},15,cjs.Ease.get(1)).wait(1));

	// Layer_3 copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_25 = new cjs.Graphics().p("A2ZQxMAAAghhMAszAAAMAAAAhhg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_2_graphics_25,x:-305.225,y:277.425}).wait(16));

	// Layer_3
	this.instance_10 = new lib.Symbol15copy();
	this.instance_10.setTransform(-305.25,47.7,1,1,0,0,0,143.4,107.3);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({y:277.4},15,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-535.7,-362,1377.6,902.7);


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
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(398.55,121.15,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	// טקסט
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(229.6,-315.95,1,1,0,0,0,149.2,46.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:219.6,alpha:1},11,cjs.Ease.get(1)).wait(44));

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55));

	// text1
	this.instance_3 = new lib.text1copy4();
	this.instance_3.setTransform(698.95,-207.45);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:711.55,alpha:1},17,cjs.Ease.get(1)).wait(28));

	// text1
	this.instance_4 = new lib.text1copy();
	this.instance_4.setTransform(688.95,-137.45);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({x:707.6,alpha:1},17).wait(12));

	// Layer_2
	this.instance_5 = new lib.Symbol14();
	this.instance_5.setTransform(-307.75,-231.6,1,1,0,0,0,228,93);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).to({y:-6.95},15,cjs.Ease.get(1)).wait(3));

	// Layer_3 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_37 = new cjs.Graphics().p("A2ZQxMAAAghhMAszAAAMAAAAhhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_graphics_37,x:-305.225,y:-112.575}).wait(18));

	// Layer_3
	this.instance_6 = new lib.Symbol15();
	this.instance_6.setTransform(-305.25,-342.3,1,1,0,0,0,143.4,107.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({y:-112.6},15,cjs.Ease.get(1)).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-535.7,-362,1344.3000000000002,902.7);


// stage content:
(lib._120 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// content
	this.instance = new lib.frame1();
	this.instance.setTransform(633.5,358.5);

	this.instance_1 = new lib.frame1copy();
	this.instance_1.setTransform(633.5,358.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(720,446.5,722.0999999999999,454.29999999999995);
// library properties:
lib.properties = {
	id: 'CED2E0BB73D0FB4A94F98B57753898E7',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_10copy.png?1636533069312", id:"_10copy"},
		{src:"images/BG.jpg?1636533069312", id:"BG"},
		{src:"images/Bitmap7.jpg?1636533069312", id:"Bitmap7"},
		{src:"images/Bitmap9A.png?1636533069312", id:"Bitmap9A"},
		{src:"images/bullet.png?1636533069312", id:"bullet"},
		{src:"images/imagegeg.png?1636533069312", id:"imagegeg"}
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