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
p.nominalBounds = new cjs.Rectangle(0,0,1134,321);


(lib._10copy = function() {
	this.initialize(img._10copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,820,839);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.bullet = function() {
	this.initialize(img.bullet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);// helper functions:

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


(lib.texttcopy4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bullet();
	this.instance.setTransform(555,-25,0.09,0.09);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape.setTransform(578.45,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCBYIAEgWQAaAGAUAAQAaAAAOgNQAOgNAAgYIAAhdIhiAAIAAgYICAAAIAABuQAAApgWAUQgVAUglAAQgZAAgdgIg");
	this.shape_1.setTransform(559.95,9.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_2.setTransform(543.5,6.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_3.setTransform(516.125,9.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgIQACgJAFgIIAYAAIgDAPIgBAXIAACKgAgIAmQAPAAAMgHQAMgHAGgLQAHgMgBgQIAAhYIh0AAIAAgYICTAAIAABvQgBAXgJASQgLARgTAKQgTAJgXAAg");
	this.shape_4.setTransform(495.55,12.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAHQAPAHAIANQAHAOAAATIAACBg");
	this.shape_5.setTransform(476.45,9.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_6.setTransform(459.425,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhQAMIAAgXIChAAIAAAXg");
	this.shape_7.setTransform(430.625,7.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_8.setTransform(405.925,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2BcQgZgGgWgLIAAirIAdAAIAACbQAQAHARADQARAEAQAAQAVAAASgHQATgGAKgOQALgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgYAJQgZAJgdAAQgYAAgZgFgAgaAoQAFgGAEgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_9.setTransform(388.7,9.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgZgLgLQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_10.setTransform(357.575,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_11.setTransform(341.85,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_12.setTransform(329.1,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_13.setTransform(310.625,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_14.setTransform(284.35,6.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIgfAAIAAClg");
	this.shape_15.setTransform(267.15,9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_16.setTransform(253.1,9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_17.setTransform(243.4,9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgZgLgLQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_18.setTransform(229.375,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_19.setTransform(202.4,9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_20.setTransform(182.975,9.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_21.setTransform(162.975,9.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_22.setTransform(147.475,5.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAHQAOAHAHANQAIAOAAATIAACBg");
	this.shape_23.setTransform(134.5,9.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_24.setTransform(121.65,9.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQAEgPAGgJIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgLQgLgMgYAAIgaAAQgEAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_25.setTransform(106,9.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_26.setTransform(78.975,9.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAIgQASgIIgpg5IAhAAIA6BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_27.setTransform(59.2,9.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgWQAOAEAOACQAPACAMAAQAZAAAOgNQAPgNAAgZIAAhcIhLAAQgGAIgDAOQgDAOAAANIAAAPIAKACIAPABIAAAZQgUAAgLgCQgMgDgLgGIgBgYQAAgQAFgQQAEgPAHgKIgXAAIAAgYICZAAIAABvQAAAbgKASQgKASgTAJQgTAJgXgBQgPAAgQgCg");
	this.shape_28.setTransform(37.475,9.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAPAAQAWAAATgHQASgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgOATQgPASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgHAIg");
	this.shape_29.setTransform(14.35,9.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAPAHQAOAHAHANQAIAOAAATIAACBg");
	this.shape_30.setTransform(-7.6,9.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_31.setTransform(-20.775,5.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAGgJIgkAAIAAgYIBYAAQAmAAATASQASASAAAlIAAB0IgeAAIAAh2QAAgYgLgLQgKgMgYAAIgaAAQgFAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_32.setTransform(-36.35,9.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_33.setTransform(-62.1,6.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_34.setTransform(-81.275,9.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgWQAOAEAOACQAPACAMAAQAZAAAOgNQAPgNAAgZIAAhcIhLAAQgGAIgDAOQgDAOAAANIAAAPIAKACIAPABIAAAZQgUAAgLgCQgMgDgLgGIgBgYQAAgQAFgQQAEgPAHgKIgXAAIAAgYICZAAIAABvQAAAbgKASQgKASgTAJQgTAJgXgBQgPAAgQgCg");
	this.shape_35.setTransform(-102.275,9.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgIQACgJAEgIIAZAAIgDAPIgBAXIAACKgAgIAmQAOAAANgHQAMgHAGgLQAHgMAAgQIAAhYIh0AAIAAgYICRAAIAABvQABAXgKASQgLARgSAKQgUAJgXAAg");
	this.shape_36.setTransform(-122.55,12.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIgfAAIAAClg");
	this.shape_37.setTransform(-141.45,9.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_38.setTransform(-167.875,9.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgoBdIABgXQALACANAAQANAAAGgHQAHgIAAgQIAAhwIglAAIAAgYIBCAAIAACKQABAagNAOQgNANgYAAQgPABgQgEg");
	this.shape_39.setTransform(-184.5,9.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_40.setTransform(-200.125,9.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhEBfIAAgYIBmAAIhxilIAiAAIAyBNIAphNIAiAAIg6BmIAyBIIAAAPg");
	this.shape_41.setTransform(-219.55,9.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_42.setTransform(-238.6,9.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_43.setTransform(-266.4,9.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_44.setTransform(-285.3,9.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGBfIgaikIgNgCIAAgXIBbAAIAAAYIgwAAIAaClg");
	this.shape_45.setTransform(-302.175,9.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_46.setTransform(-313.5,9.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAHQAPAHAHANQAIAOAAATIAACBg");
	this.shape_47.setTransform(-326.55,9.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_48.setTransform(-338.375,17.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texttcopy4, new cjs.Rectangle(-352.9,-25,1037.5,110.3), null);


(lib.texttcopy3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bullet();
	this.instance.setTransform(555,-23,0.09,0.09);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape.setTransform(576.9,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_1.setTransform(555.375,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_2.setTransform(527.025,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgWQAOAEAOACQAPACAMAAQAZAAAOgNQAPgNAAgZIAAhcIhLAAQgGAIgDAOQgDAOAAANIAAAPIAKACIAPABIAAAZQgUAAgLgCQgMgDgLgGIgBgYQAAgQAFgQQAEgPAHgKIgXAAIAAgYICZAAIAABvQAAAbgKASQgKASgTAJQgTAJgXgBQgPAAgQgCg");
	this.shape_3.setTransform(506.675,9.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAWABQgLgNgFgSIgfiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgKASgUAJQgSAJgZAAQggAAgjgOg");
	this.shape_4.setTransform(486.15,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_5.setTransform(471.725,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_6.setTransform(459.2,6.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_7.setTransform(445.15,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAHgJIgkAAIAAgYIBXAAQAmAAATASQASASAAAlIAAB0IgeAAIAAh2QAAgYgLgLQgKgMgYAAIgaAAQgFAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_8.setTransform(429.5,9.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_9.setTransform(402.475,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_10.setTransform(382.7,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjBYQgSgLgLgUQgKgUAAgaIAAgSQAAgMAEgNQADgMAGgJQAGgKAIgGIACgBIAAgBQgIABgaAIIgGgXQATgGAYgDQAYgDATgBQAaAAATALQATAKAKAUQALATAAAcIAAAVQAAAagKAUQgKAUgTALQgSAKgYABQgWgBgSgKgAgVhAQgKAHgGAOQgHAPAAAUIAAATQAAATAGAOQAHAOALAHQALAIAOAAQAPAAAMgIQALgHAHgOQAGgOAAgTIAAgVQAAgTgGgOQgHgOgMgHQgLgIgQAAQgOAAgLAIg");
	this.shape_11.setTransform(360.825,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_12.setTransform(345.1,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAAOAHQAOAHAHANQAIAOAAATIAACBg");
	this.shape_13.setTransform(332.05,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_14.setTransform(315.025,9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoBdIACgXQAKACANAAQANAAAGgHQAGgIAAgQIAAhwIgkAAIAAgYIBCAAIAACKQAAAagNAOQgMANgXAAQgPABgRgEg");
	this.shape_15.setTransform(290.2,9.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_16.setTransform(274.575,9.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2BcQgYgGgXgLIAAirIAdAAIAACbQAQAHARADQARAEAPAAQAWAAATgHQASgGAKgOQALgOAAgTIAAhtIAdAAIAABvQAAAbgOATQgPASgZAJQgYAJgeAAQgXAAgZgFgAgaAoQAFgGAEgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgHAIg");
	this.shape_17.setTransform(251.15,9.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhDBYIAGgWQAZAGAUAAQAZAAAPgNQAOgNAAgYIAAhdIhiAAIAAgYIB/AAIAABuQAAApgUAUQgWAUgmAAQgYAAgegIg");
	this.shape_18.setTransform(228.35,9.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAHgHQAGgHAAgQIAAg7QAAgPAEgOQADgPAIgJIgkAAIAAgYIBXAAQAmAAATASQASASAAAlIAAB0IgdAAIgBh2QAAgYgKgLQgLgMgXAAIgaAAQgFAJgEAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_19.setTransform(208.85,9.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhQAMIAAgXIChAAIAAAXg");
	this.shape_20.setTransform(180.575,7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAWABQgLgNgEgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgLASgUAJQgTAJgXAAQghAAgjgOg");
	this.shape_21.setTransform(151.2,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_22.setTransform(134.2,6.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_23.setTransform(119.825,5.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_24.setTransform(110.2,9.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_25.setTransform(89.4,6.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_26.setTransform(71.175,9.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAGgJIgkAAIAAgYIBYAAQAmAAATASQASASAAAlIAAB0IgeAAIAAh2QAAgYgLgLQgKgMgYAAIgaAAQgFAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_27.setTransform(50.05,9.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQAUAAANAHQAPAHAIANQAHAOAAATIAACBg");
	this.shape_28.setTransform(32.05,9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_29.setTransform(18.875,5.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAXABQgNgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgMASgSAJQgUAJgXAAQghAAgjgOg");
	this.shape_30.setTransform(4.25,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAWABQgMgNgDgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgLASgUAJQgSAJgZAAQggAAgjgOg");
	this.shape_31.setTransform(-23.05,9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_32.setTransform(-40.05,6.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_33.setTransform(-66.475,9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjBYQgSgLgLgUQgKgUAAgaIAAgSQAAgMAEgNQADgMAGgJQAGgKAIgGIACgBIAAgBQgIABgaAIIgGgXQATgGAYgDQAYgDATgBQAaAAATALQATAKAKAUQALATAAAcIAAAVQAAAagKAUQgKAUgTALQgSAKgYABQgWgBgSgKgAgVhAQgKAHgGAOQgHAPAAAUIAAATQAAATAGAOQAHAOALAHQALAIAOAAQAPAAAMgIQALgHAHgOQAGgOAAgTIAAgVQAAgTgGgOQgHgOgMgHQgLgIgQAAQgOAAgLAIg");
	this.shape_34.setTransform(-86.975,9.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_35.setTransform(-103.025,5.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhCBYIAEgWQAaAGAUAAQAaAAAOgNQAOgNAAgYIAAhdIhiAAIAAgYICAAAIAABuQAAApgWAUQgVAUglAAQgZAAgdgIg");
	this.shape_36.setTransform(-116.85,9.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_37.setTransform(-130.4,9.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgCCAIAAjnIgXAAIAAgYIAzAAIAAD/g");
	this.shape_38.setTransform(-140.125,12.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_39.setTransform(-160.85,9.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgWQAOAEAOACQAPACAMAAQAZAAAOgNQAPgNAAgZIAAhcIhLAAQgGAIgDAOQgDAOAAANIAAAPIAKACIAPABIAAAZQgUAAgLgCQgMgDgLgGIgBgYQAAgQAFgQQAEgPAHgKIgXAAIAAgYICZAAIAABvQAAAbgKASQgKASgTAJQgTAJgXgBQgPAAgQgCg");
	this.shape_40.setTransform(-180.325,9.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnBdIABgXQAKACANAAQANAAAGgHQAHgIgBgQIAAhwIgkAAIAAgYIBDAAIAACKQgBAagNAOQgNANgXAAQgPABgPgEg");
	this.shape_41.setTransform(-197.3,9.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_42.setTransform(-208.125,5.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgZgLgLQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_43.setTransform(-230.275,9.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_44.setTransform(-246.325,5.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_45.setTransform(-256.275,5.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_46.setTransform(-268.8,6.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_47.setTransform(-283.175,5.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_48.setTransform(-297.775,9.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA0BfIhUhzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAIgQASgIIgpg5IAhAAIA7BRIAthRIAiAAIg9BqIA8BTg");
	this.shape_49.setTransform(-326.55,9.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgZgLgLQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_50.setTransform(-347.425,9.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAHQAPAHAIANQAHAOAAATIAACBg");
	this.shape_51.setTransform(-366.5,9.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_52.setTransform(-379.675,5.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_53.setTransform(-394.275,9.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_54.setTransform(-422.625,9.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgoBdIACgXQAKACANAAQANAAAGgHQAGgIAAgQIAAhwIgkAAIAAgYIBCAAIAACKQAAAagNAOQgMANgXAAQgPABgRgEg");
	this.shape_55.setTransform(-439.25,9.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_56.setTransform(-449.75,9.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhDBYIAGgWQAZAGAUAAQAZAAAPgNQAOgNAAgYIAAhdIhiAAIAAgYIB/AAIAABuQABApgWAUQgVAUgmAAQgXAAgfgIg");
	this.shape_57.setTransform(-463.65,9.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgZgLgLQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_58.setTransform(-481.525,9.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_59.setTransform(-497.575,5.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_60.setTransform(-512.175,9.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_61.setTransform(-539.4,9.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_62.setTransform(-558.825,9.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhFCAIAAiJQAAgOACgIQADgJAEgIIAYAAIgDAPIgBAXIAACKgAgIAmQAPAAAMgHQAMgHAGgLQAHgMAAgQIAAhYIh0AAIAAgYICSAAIAABvQAAAXgKASQgLARgSAKQgTAJgYAAg");
	this.shape_63.setTransform(-579.4,12.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_64.setTransform(-595.15,9.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhLBfIAAi9ICXAAIAAC9gAgtBHIBbAAIAAiNIhbAAg");
	this.shape_65.setTransform(-609.825,9.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_66.setTransform(-624.775,17.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texttcopy3, new cjs.Rectangle(-631.1,-23,1315.7,108.3), null);


(lib.texttcopy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bullet();
	this.instance.setTransform(555,-25,0.09,0.09);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape.setTransform(578.6,6.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBdIABgXQAKACANAAQANAAAGgHQAHgIgBgQIAAhwIgkAAIAAgYIBDAAIAACKQAAAagOAOQgNANgXAAQgPABgPgEg");
	this.shape_1.setTransform(563.1,9.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBYQgSgLgLgUQgKgUAAgaIAAgSQAAgMAEgNQADgMAGgJQAGgKAIgGIACgBIAAgBQgIABgaAIIgGgXQATgGAYgDQAYgDATgBQAaAAATALQATAKAKAUQALATAAAcIAAAVQAAAagKAUQgKAUgTALQgSAKgYABQgWgBgSgKgAgVhAQgKAHgGAOQgHAPAAAUIAAATQAAATAGAOQAHAOALAHQALAIAOAAQAPAAAMgIQALgHAHgOQAGgOAAgTIAAgVQAAgTgGgOQgHgOgMgHQgLgIgQAAQgOAAgLAIg");
	this.shape_2.setTransform(547.275,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_3.setTransform(531.55,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAHgJIgkAAIAAgYIBXAAQAmAAATASQASASAAAlIAAB0IgeAAIAAh2QAAgYgLgLQgKgMgYAAIgaAAQgFAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_4.setTransform(515.9,9.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_5.setTransform(490.15,6.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAXABQgNgNgEgSIgfiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLASgSAJQgUAJgYAAQggAAgjgOg");
	this.shape_6.setTransform(471.1,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBfIAAgYIBlAAIhxilIAhAAIAzBNIAphNIAiAAIg6BmIAyBIIAAAPg");
	this.shape_7.setTransform(453.4,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_8.setTransform(438.95,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBfIAAiDQAAgQgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAPAHQAOAHAHANQAIAOAAATIAACBg");
	this.shape_9.setTransform(425.9,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzBfIhThzQgRAKAAAaIAABPIgdAAIAAhFQAAgYAIgPQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_10.setTransform(400.25,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPADgOQAFgPAHgJIgkAAIAAgYIBXAAQAmAAATASQASASAAAlIAAB0IgeAAIAAh2QAAgYgLgLQgKgMgYAAIgaAAQgFAJgDAOQgDANAAAPIAAA/QAAAagMANQgNAOgXAAIgTgCg");
	this.shape_11.setTransform(377.75,9.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_12.setTransform(350.725,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgZgLgLQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_13.setTransform(331.225,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_14.setTransform(315.175,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_15.setTransform(305.225,5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_16.setTransform(292.7,6.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_17.setTransform(270.45,9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_18.setTransform(257.85,6.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_19.setTransform(238.675,9.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoBdIABgXQALACANAAQANAAAGgHQAHgIAAgQIAAhwIglAAIAAgYIBCAAIAACKQABAagNAOQgNANgYAAQgPABgQgEg");
	this.shape_20.setTransform(221.4,9.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_21.setTransform(210.9,9.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAWABQgLgNgEgSIggiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgLASgUAJQgTAJgXAAQghAAgjgOg");
	this.shape_22.setTransform(196.2,9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_23.setTransform(168.775,9.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_24.setTransform(147.825,9.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnBdIABgXQAKACANAAQANAAAGgHQAGgIAAgQIAAhwIgkAAIAAgYIBDAAIAACKQAAAagOAOQgMANgYAAQgOABgQgEg");
	this.shape_25.setTransform(130.55,9.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_26.setTransform(120.05,9.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_27.setTransform(99.25,6.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATATAAAiIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAQIgBAVIAABDg");
	this.shape_28.setTransform(81.025,9.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_29.setTransform(60.725,9.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAPAAQAWAAATgHQASgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgOATQgPASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgHAIg");
	this.shape_30.setTransform(37.3,9.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_31.setTransform(18.375,5.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAgCAIAAjnIhdAAIAAgYIB7AAIAAD/g");
	this.shape_32.setTransform(5.15,12.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgZgLgLQgLgLgYAAIguAAIAAgYIAwAAQAkAAATASQATATAAAiIAABdIAXACIAAAXg");
	this.shape_33.setTransform(-18.85,9.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_34.setTransform(-38.275,9.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAXABQgNgNgEgSIgfiKIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLASgSAJQgUAJgXAAQghAAgjgOg");
	this.shape_35.setTransform(-59.1,9.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag1BcQgZgGgXgLIAAirIAdAAIAACbQAPAHARADQASAEAQAAQAWAAARgHQATgGALgOQAKgOAAgTIAAhtIAdAAIAABvQAAAbgPATQgOASgZAJQgYAJgeAAQgXAAgYgFgAgaAoQAGgGADgLQADgLAAgOIAAheIAcAAIAABZQAAAPgEANQgEAMgIAIg");
	this.shape_36.setTransform(-80.8,9.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_37.setTransform(-99.725,5.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_38.setTransform(-109.35,9.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgFQAFgFAIAAQAJAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgJAAQgIAAgFgFg");
	this.shape_39.setTransform(-118.025,17.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texttcopy2, new cjs.Rectangle(-124.4,-25,809,81), null);


(lib.texttcopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgYgLgMQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape.setTransform(619.175,1.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_1.setTransform(603.125,-2.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_2.setTransform(593.175,-2.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_3.setTransform(580.65,-1.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATASAAAjIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAPIgBAXIAABCg");
	this.shape_4.setTransform(554.225,1.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_5.setTransform(533.925,1.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBfIgaijIgNgDIAAgXIBbAAIAAAYIgwAAIAaClg");
	this.shape_6.setTransform(517.775,1.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATASAAAjIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAPIgBAXIAABCg");
	this.shape_7.setTransform(502.275,1.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATASAAAjIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAPIgBAXIAABCg");
	this.shape_8.setTransform(482.925,1.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgYgLgMQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_9.setTransform(455.225,1.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_10.setTransform(439.175,-2.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_11.setTransform(429.225,-2.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdB8IBEilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_12.setTransform(416.7,-1.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA0BfIhUh0QgRALAAAZIAABQIgdAAIAAhFQAAgZAIgOQAIgQASgIIgpg5IAhAAIA7BRIAthRIAiAAIg9BqIA8BTg");
	this.shape_13.setTransform(389.85,1.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgYgLgMQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_14.setTransform(368.975,1.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBfIAAiEQAAgPgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAIQAPAGAIANQAHAOAAATIAACBg");
	this.shape_15.setTransform(349.9,1.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATASAAAjIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAPIgBAXIAABCg");
	this.shape_16.setTransform(324.675,1.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADBhIAAgYIAxAAIAAhcQAAgZgMgNQgLgNgWAAQgPAAgKAMQgKAMgDAUIgOB7IgeAAIAPh4QABgNAGgMQAGgMAIgGIADgCIAAgBIgSAFIgUAFIgHgWQATgHAXgEQAXgEATAAQAmAAAUAVQAUAUABAoIAABwg");
	this.shape_17.setTransform(304.375,1.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATASAAAjIAABcIAXADIAAAXg");
	this.shape_18.setTransform(285.5,1.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhEBfIAAgYIBmAAIhxilIAiAAIAxBNIAqhNIAiAAIg6BlIAyBJIAAAPg");
	this.shape_19.setTransform(267.6,1.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAXACQgNgOgDgTIggiJIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLATQgLARgSAKQgUAJgXAAQghAAgjgOg");
	this.shape_20.setTransform(248.15,1.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjBeQgRgDgPgFIAGgXQAOAFAOACQAPACAMAAQAZAAAOgNQAPgNAAgYIAAheIhLAAQgGAKgDAOQgDANAAAOIAAAOIAKACIAPABIAAAZQgUgBgLgCQgMgCgLgHIgBgXQAAgQAFgQQAEgPAHgLIgXAAIAAgXICZAAIAABvQAAAagKATQgKASgTAJQgTAIgXABQgPgBgQgCg");
	this.shape_21.setTransform(220.675,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhLBTIAHgVQAcAKAWACQgMgOgDgTIggiJIAeAAIAfCLIAEARIAFAMQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgKATQgLARgUAKQgSAJgZAAQggAAgjgOg");
	this.shape_22.setTransform(200.15,1.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACA1IAAhRIghAAIAAgYIA/AAIAABpg");
	this.shape_23.setTransform(185.725,-2.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_24.setTransform(173.2,-1.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_25.setTransform(159.15,1.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhZBeIAAgYIALABQAOAAAGgHQAHgHAAgQIAAg7QAAgPAEgOQADgPAIgJIgkAAIAAgYIBXAAQAmAAATASQASASAAAlIAAB0IgdAAIgBh2QAAgYgLgLQgKgMgXAAIgaAAQgGAJgDAOQgDANAAAPIAAA/QAAAagNANQgMAOgYAAIgSgCg");
	this.shape_26.setTransform(143.5,1.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA0BfIhUh0QgRALAAAZIAABQIgdAAIAAhFQAAgZAIgOQAIgQASgIIgpg5IAhAAIA7BRIAthRIAiAAIg9BqIA8BTg");
	this.shape_27.setTransform(116.05,1.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjBXQgSgKgLgUQgKgTAAgaIAAgTQAAgNAEgMQADgMAGgJQAGgLAIgEIACgCIAAAAQgIAAgaAIIgGgXQATgGAYgDQAYgEATABQAaAAATAKQATAKAKAUQALATAAAbIAAAXQAAAagKATQgKAUgTAKQgSAMgYAAQgWAAgSgMgAgVhBQgKAIgGAPQgHAOAAAUIAAAUQAAASAGAOQAHAOALAIQALAHAOAAQAPAAAMgHQALgIAHgOQAGgOAAgSIAAgWQAAgTgGgOQgHgOgMgIQgLgHgQAAQgOAAgLAHg");
	this.shape_28.setTransform(94.175,1.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_29.setTransform(78.45,1.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAiBfIAAiEQAAgPgJgJQgJgJgQAAIg/AAIAAgYIBAAAQATAAAOAIQAPAGAHANQAIAOAAATIAACBg");
	this.shape_30.setTransform(65.4,1.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AArBfIAAh2QAAgYgLgMQgLgLgYAAIhFAAIAAgYIBGAAQAlAAATASQATASAAAjIAAB2gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAPIgBAXIAABCg");
	this.shape_31.setTransform(48.375,1.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhNBfIAAgYIBmAAIAAheQAAgYgLgMQgLgLgYAAIguAAIAAgYIAvAAQAlAAATASQATASAAAjIAABcIAXADIAAAXg");
	this.shape_32.setTransform(21.95,1.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAzBfIhTh0QgRALAAAZIAABQIgdAAIAAhFQAAgZAIgOQAJgQARgIIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_33.setTransform(3.05,1.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhFCAIAAiIQAAgPACgJQADgIAEgJIAYAAIgDAQIgBAXIAACKgAgIAmQAPgBAMgGQAMgHAGgMQAHgMAAgPIAAhZIh0AAIAAgXICSAAIAABvQAAAXgKASQgLARgSAKQgTAJgYABg");
	this.shape_34.setTransform(-18.25,4.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIgfAAIAAClg");
	this.shape_35.setTransform(-37.15,1.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAsBfIAAh2QAAgYgLgMQgLgLgWAAIgqAAIAAClIgeAAIAAi9IBHAAQAlAAATASQASASAAAlIAAB0g");
	this.shape_36.setTransform(-55.525,1.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWAeQAIgLAEgMQAEgKAAgNIAAgYIAdAAIAAAYQAAAQgIAPQgHAQgNAKg");
	this.shape_37.setTransform(-69.525,11.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAgBnIgBiEQAAgegbAAIgjAAIAACiIg2AAIAAjMIBYAAQApgBAUAUQAVATAAAnIAAB/g");
	this.shape_38.setTransform(-91.4,0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgKA7IAAhKIggAAIAAgqIBVAAIAAB0g");
	this.shape_39.setTransform(-109.65,-3.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKA7IAAhKIggAAIAAgqIBVAAIAAB0g");
	this.shape_40.setTransform(-121.7,-3.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhXBnIAAgqIBiAAIAAhaQAAgQgIgHQgIgIgQABIg3AAIAAgqIA7AAQAZgBASAKQATAIAKARQAJARAAAXIAABWIAYADIAAApg");
	this.shape_41.setTransform(-136.175,0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOBdQgHgEgEgGQgDgGAAgIQAAgHADgHQAEgGAHgDQAHgEAHAAQAJAAAGAEQAHADAEAGQADAHAAAHQAAAIgDAGQgEAGgHAEQgGAEgJAAQgHAAgHgEgAgOgtQgHgDgEgGQgDgHAAgHQAAgIADgGQAEgGAHgEQAHgEAHAAQAJAAAGAEQAHAEAEAGQADAGAAAIQAAAHgDAHQgEAGgHADQgGAEgJAAQgHAAgHgEg");
	this.shape_42.setTransform(-150.9,1.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texttcopy, new cjs.Rectangle(-158.1,-27.7,789.1,55.4), null);


(lib.textt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAeBhIAAh8QAAgdgbAAIggAAIAACZIgzAAIAAjBIBTAAQAnABATASQATASAAAlIAAB3g");
	this.shape.setTransform(618.8,-0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglB8IA+iZIhnAAIAAheIAyAAIAAA3IBrAAIAAAgIhACgg");
	this.shape_1.setTransform(599.1,-3.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmBhIhHhoQgGAHAAALIAABWIgwAAIAAhAQAAgbAIgQQAIgPASgKIgqg9IA4AAIAuBEIAghEIA5AAIg6BvIA4BSg");
	this.shape_2.setTransform(571.175,-0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA3IAAhGIgeAAIAAgnIBQAAIAABtg");
	this.shape_3.setTransform(553.3,-4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBaQgUgLgLgWQgLgUAAgbIAAgLQAAgOAFgPQAGgPAIgIIACgDIAAgBIgZAGIgKgkQAUgHAZgCQAagEAWAAQAtAAAYAXQAZAYAAAuIAAARQAAAbgLAUQgMAWgTALQgUALgaAAQgYAAgTgLgAgTgtQgKAPAAAaIAAAPQAAAOAFALQAFALAHAGQAJAGAJAAQALAAAIgGQAJgGAEgLQAFgLgBgOIAAgRQAAgagJgOQgJgNgSAAQgQAAgJAOg");
	this.shape_4.setTransform(537.4,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBhIAAiZIgRAAIAAgoIBDAAIAADBg");
	this.shape_5.setTransform(521.1,-0.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBhIAAh/QAAgNgHgGQgHgIgNABIg6AAIAAgoIA+AAQAWABARAHQAQAJAKAPQAJAPgBAVIAAB9g");
	this.shape_6.setTransform(507.5,-0.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglB8IA+iZIhnAAIAAheIAzAAIAAA3IBqAAIAAAgIhACgg");
	this.shape_7.setTransform(482.9,-3.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhSBhIAAgoIBcAAIAAhVQAAgOgIgHQgGgHgPAAIg0AAIAAgoIA3AAQAYABARAHQARAJAKAQQAJAPAAAXIAABQIAWAEIAAAmg");
	this.shape_8.setTransform(465.15,-0.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhKBhIAAgoIBXAAIhniZIA5AAIAmA/IAeg/IA4AAIg4BrIArA+IAAAYg");
	this.shape_9.setTransform(446.15,-0.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhVBVIALglQAXAJAVADQgGgGgEgHQgEgHgCgIIgeiCIAzAAIAbCHQADAMAEAIQAMgFAIgLQAGgLAAgQIAAhwIAyAAIAABuQABAcgMATQgMAUgVAKQgWAKgaAAQgnAAgngOg");
	this.shape_10.setTransform(425.45,-0.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhIBbIAIglQAYAFASAAQAWAAALgKQALgKAAgVIAAhMIhXAAIAAgnICKAAIAABrQAAAtgYAVQgXAWgqAAQgYAAgggHg");
	this.shape_11.setTransform(397.825,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgmB8IA+iZIhmAAIAAheIAyAAIAAA3IBrAAIAAAgIhACgg");
	this.shape_12.setTransform(380.5,-3.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag9BdQgdgGgZgNIAAitIAwAAIAACSQAOAGAQAEQAQADAOAAQAhAAAVgPQAUgPAAgeIAAhjIAyAAIAABoQAAAfgRAVQgQAWgcAKQgcALgiAAQgaAAgdgHgAgfAgQADgGACgMQABgLABgMIAAhaIAvAAIAABPQAAAQgDAOQgEAOgHAIg");
	this.shape_13.setTransform(349.05,-0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJA3IAAhGIgfAAIAAgnIBQAAIAABtg");
	this.shape_14.setTransform(328.25,-4.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAGBjIAAgoIAiAAIAAhLQAAgUgIgKQgIgLgOAAQgMAAgJAKQgHAMgCAUIgLByIgzAAIANhsQABgNAFgLQAGgNAHgGIACgCIAAgBIgQAEIgPAFIgLglQAUgGAYgFQAZgEAVAAQAtAAAXAXQAXAWgBArIAABtg");
	this.shape_15.setTransform(312.2,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQBhIAAiZIgRAAIAAgoIBDAAIAADBg");
	this.shape_16.setTransform(295.45,-0.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BdQgdgGgagNIAAitIAxAAIAACSQAOAGAQAEQAQADANAAQAiAAAVgPQAVgPAAgeIAAhjIAwAAIAABoQAAAfgQAVQgQAWgcAKQgcALghAAQgbAAgdgHgAgfAgQADgGACgMQABgLAAgMIAAhaIAxAAIAABPQAAAQgFAOQgDAOgHAIg");
	this.shape_17.setTransform(276.55,-0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhSBhIAAgoIBcAAIAAhVQAAgOgHgHQgHgHgQAAIg0AAIAAgoIA4AAQAXABASAHQASAJAIAQQAKAPAAAXIAABQIAWAEIAAAmg");
	this.shape_18.setTransform(245.25,-0.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhIBbIAIglQAYAFASAAQAWAAALgKQALgKAAgVIAAhMIhXAAIAAgnICKAAIAABrQAAAtgYAVQgXAWgqAAQgYAAgggHg");
	this.shape_19.setTransform(226.175,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglB8IA+iZIhnAAIAAheIAzAAIAAA3IBqAAIAAAgIhACgg");
	this.shape_20.setTransform(208.85,-3.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJA3IAAhGIgeAAIAAgnIBQAAIAABtg");
	this.shape_21.setTransform(193.4,-4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcBiIgTgFIAAgmQALACANAAQALAAAGgGQAEgGAAgNIAAhaIghAAIAAgnIBTAAIAACGQAAATgHAOQgHAOgNAHQgOAHgRAAIgSAAg");
	this.shape_22.setTransform(172.9,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag9BdQgdgGgZgNIAAitIAwAAIAACSQAOAGAQAEQAQADAOAAQAhAAAVgPQAUgPAAgeIAAhjIAyAAIAABoQAAAfgRAVQgQAWgcAKQgcALgiAAQgaAAgdgHgAgfAgQADgGACgMQABgLABgMIAAhaIAvAAIAABPQAAAQgDAOQgEAOgHAIg");
	this.shape_23.setTransform(152.85,-0.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhPCCIAAiFQAAgcAMgOIAoAAQgDANAAAXIAACLgAgKAYQATAAALgMQALgLAAgWIAAhFIhvAAIAAgnIChAAIAABsQAAAZgLATQgLATgUAKQgVAKgcABg");
	this.shape_24.setTransform(127.825,2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag9BdQgdgGgagNIAAitIAxAAIAACSQAOAGAQAEQAQADANAAQAiAAAVgPQAUgPABgeIAAhjIAwAAIAABoQAAAfgQAVQgRAWgbAKQgcALgiAAQgbAAgcgHgAgfAgQADgGACgMQACgLgBgMIAAhaIAxAAIAABPQAAAQgFAOQgDAOgHAIg");
	this.shape_25.setTransform(94.55,-0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AglB8IA+iZIhnAAIAAheIAzAAIAAA3IBqAAIAAAgIhACgg");
	this.shape_26.setTransform(71.25,-3.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAmBhIhHhoQgGAHAAALIAABWIgwAAIAAhAQAAgbAIgQQAIgPASgKIgqg9IA4AAIAuBEIAghEIA5AAIg6BvIA4BSg");
	this.shape_27.setTransform(51.525,-0.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgmB8IA+iZIhmAAIAAheIAyAAIAAA3IBrAAIAAAgIhACgg");
	this.shape_28.setTransform(22.95,-3.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag9BdQgdgGgagNIAAitIAxAAIAACSQAOAGAQAEQAQADANAAQAiAAAVgPQAUgPABgeIAAhjIAwAAIAABoQAAAfgQAVQgQAWgcAKQgcALgiAAQgbAAgcgHgAgfAgQADgGACgMQABgLAAgMIAAhaIAxAAIAABPQAAAQgFAOQgDAOgHAIg");
	this.shape_29.setTransform(-0.3,-0.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhRBhIAAjBICjAAIAADBgAgfA5IA/AAIAAhxIg/AAg");
	this.shape_30.setTransform(-25.475,-0.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGBjIAAgoIAiAAIAAhLQAAgUgIgKQgIgLgOAAQgNAAgHAKQgIAMgCAUIgMByIgxAAIAMhsQACgNAEgLQAFgNAHgGIADgCIAAgBIgPAEIgQAFIgLglQAUgGAYgFQAZgEAVAAQAsAAAYAXQAWAWAAArIAABtg");
	this.shape_31.setTransform(-55.75,-1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgrBZQgTgKgKgTQgLgTAAgZIAAhwIAyAAIAAB2QAAAMAFAIQADAJAIAFQAIAFAJAAQAKAAAIgFQAHgFAEgJQAFgIAAgMIAAg2QAAgagXAAQgGAAgKADIgFghQAJgFAKgDQALgDAJAAQASAAALAIQANAHAHAOQAGAOAAATIAAA1QAAAZgLATQgKATgTAKQgTALgZAAQgYAAgTgLg");
	this.shape_32.setTransform(-76.55,-0.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASBhIAAh/QAAgNgHgGQgIgIgMABIg6AAIAAgoIA9AAQAXABARAHQARAJAJAPQAIAPABAVIAAB9g");
	this.shape_33.setTransform(-96.6,-0.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AheBfIAAgnIAKABQAYAAAAgZIAAguQAAgLADgMQADgNAFgIIgeAAIAAgnIBhAAQAnAAATASQATASAAAlIAAB3IgyAAIgBh7QABgPgHgIQgGgHgNAAIgYAAIgFATIgBAVIAAA2QABAUgIAOQgGANgOAIQgNAHgSAAQgMAAgNgDg");
	this.shape_34.setTransform(-115.65,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAmBhIhHhoQgGAHAAALIAABWIgwAAIAAhAQAAgbAIgQQAIgPASgKIgqg9IA4AAIAuBEIAghEIA5AAIg6BvIA4BSg");
	this.shape_35.setTransform(-144.275,-0.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAeBhIAAh8QAAgdgbAAIggAAIAACZIgyAAIAAjBIBSAAQAnABATASQATASABAlIAAB3g");
	this.shape_36.setTransform(-165.85,-0.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUBhIgWiYIgKgCIAAgnIBqAAIAAAoIgwAAIAYCZg");
	this.shape_37.setTransform(-182.95,-0.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhPCCIAAiFQAAgcAMgOIAoAAQgDANAAAXIAACLgAgKAYQATAAALgMQALgLAAgWIAAhFIhvAAIAAgnIChAAIAABsQAAAZgLATQgLATgUAKQgVAKgcABg");
	this.shape_38.setTransform(-200.125,2.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AheBfIAAgnIAKABQAYAAAAgZIAAguQAAgLADgMQADgNAFgIIgeAAIAAgnIBhAAQAmAAAUASQATASAAAlIAAB3IgyAAIAAh7QAAgPgHgIQgGgHgNAAIgZAAIgDATIgCAVIAAA2QAAAUgGAOQgIANgNAIQgNAHgSAAQgLAAgOgDg");
	this.shape_39.setTransform(-222.55,-0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQBhIAAiZIgRAAIAAgoIBDAAIAADBg");
	this.shape_40.setTransform(-238.2,-0.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcAlIADgFQAHgMAEgLQADgJAAgOIAAgjIAoAAIAAAgQAAASgJATQgJASgOAMg");
	this.shape_41.setTransform(-247.625,9.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAmBhIhHhoQgGAHAAALIAABWIgwAAIAAhAQAAgbAIgQQAIgPASgKIgqg9IA4AAIAuBEIAghEIA5AAIg6BvIA4BSg");
	this.shape_42.setTransform(-270.075,-0.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQBhIAAiZIgRAAIAAgoIBDAAIAADBg");
	this.shape_43.setTransform(-287.45,-0.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag9BdQgdgGgZgNIAAitIAwAAIAACSQAOAGAQAEQAQADAOAAQAiAAAUgPQAVgPgBgeIAAhjIAxAAIAABoQAAAfgQAVQgRAWgbAKQgcALghAAQgcAAgcgHgAgfAgQADgGACgMQACgLAAgMIAAhaIAvAAIAABPQAAAQgDAOQgEAOgHAIg");
	this.shape_44.setTransform(-314.55,-0.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmB8IA+iZIhmAAIAAheIAyAAIAAA3IBrAAIAAAgIhACgg");
	this.shape_45.setTransform(-337.85,-3.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAmBhIhHhoQgGAHAAALIAABWIgwAAIAAhAQAAgbAIgQQAIgPASgKIgqg9IA4AAIAuBEIAghEIA5AAIg6BvIA4BSg");
	this.shape_46.setTransform(-357.575,-0.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhSBhIAAgoIBcAAIAAhVQAAgOgIgHQgGgHgPAAIg1AAIAAgoIA4AAQAYABARAHQASAJAJAQQAJAPAAAXIAABQIAWAEIAAAmg");
	this.shape_47.setTransform(-385.95,-0.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAeBhIAAh9QAAgOgHgHQgIgHgPAAIhPAAIAAgoIBSAAQAZABASAHQARAJAJAQQAJAPAAAXIAAB6gAhQBhIAAhCQAAgdAMgMIAoAAQgDANAAAWIAABIg");
	this.shape_48.setTransform(-405.35,-0.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AheBfIAAgnIALABQAXAAAAgZIAAguQAAgLADgMQADgNAFgIIgeAAIAAgnIBhAAQAnAAATASQATASAAAlIAAB3IgyAAIgBh7QAAgPgGgIQgHgHgNAAIgYAAIgEATIAAAVIAAA2QAAAUgIAOQgGANgOAIQgNAHgTAAQgKAAgOgDg");
	this.shape_49.setTransform(-427.35,-0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAmBhIhHhoQgGAHAAALIAABWIgwAAIAAhAQAAgbAIgQQAIgPASgKIgqg9IA4AAIAuBEIAghEIA5AAIg6BvIA4BSg");
	this.shape_50.setTransform(-447.775,-0.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhRBhIAAjBICjAAIAADBgAgfA5IA/AAIAAhxIg/AAg");
	this.shape_51.setTransform(-470.025,-0.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AglB8IA+iZIhnAAIAAheIAzAAIAAA3IBqAAIAAAgIhACgg");
	this.shape_52.setTransform(-498.1,-3.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgrBgQgTgEgRgGIAJgkQAQAEAQADQAPACAMAAQAWAAAMgLQAMgKAAgVIAAhLIg4AAQgIASABASIAAAKQAHACAKgBIAAAhQgJABgLAAQgNAAgMgCQgMgEgJgFIAAgRQAAgQADgOQADgOAHgJIgUAAIAAgoICqAAIAABsQAAAfgNATQgMAUgVAJQgVAJgaAAQgQAAgUgCg");
	this.shape_53.setTransform(-518.25,-0.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhPCCIAAiFQAAgcAMgOIAoAAQgDANAAAXIAACLgAgKAYQATAAALgMQALgLAAgWIAAhFIhvAAIAAgnIChAAIAABsQAAAZgLATQgLATgUAKQgVAKgcABg");
	this.shape_54.setTransform(-539.675,2.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgQBhIAAiZIgRAAIAAgoIBDAAIAADBg");
	this.shape_55.setTransform(-556.45,-0.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAABhIAAiZIhSAAIAAgoIClAAIAAAoIgiAAIAACZg");
	this.shape_56.setTransform(-570.475,-0.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQBhIAAiZIgRAAIAAgoIBDAAIAADBg");
	this.shape_57.setTransform(-585.75,-0.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AheBfIAAgnIAKABQAYAAAAgZIAAguQAAgLADgMQADgNAFgIIgeAAIAAgnIBhAAQAmAAAUASQATASAAAlIAAB3IgyAAIAAh7QAAgPgHgIQgGgHgNAAIgYAAIgFATIgBAVIAAA2QAAAUgGAOQgIANgNAIQgNAHgSAAQgLAAgOgDg");
	this.shape_58.setTransform(-602,-0.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAfBhIAAh9QAAgOgIgHQgHgHgQAAIhPAAIAAgoIBTAAQAYABARAHQASAJAJAQQAJAPAAAXIAAB6gAhQBhIAAhCQAAgdAMgMIAoAAQgDANAAAWIAABIg");
	this.shape_59.setTransform(-630.1,-0.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhKBhIAAgoIBXAAIhniZIA4AAIAnA/IAeg/IA4AAIg4BrIArA+IAAAYg");
	this.shape_60.setTransform(-650.3,-0.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhSBhIAAgoIBcAAIAAhVQAAgOgIgHQgGgHgPAAIg1AAIAAgoIA4AAQAXABASAHQASAJAJAQQAJAPAAAXIAABQIAWAEIAAAmg");
	this.shape_61.setTransform(-668.65,-0.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAmBhIhHhoQgGAHAAALIAABWIgwAAIAAhAQAAgbAIgQQAIgPASgKIgqg9IA4AAIAuBEIAghEIA5AAIg6BvIA4BSg");
	this.shape_62.setTransform(-688.575,-0.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgNAWQgHgDgDgGQgDgGAAgHQAAgGADgGQADgGAHgEQAGgDAHAAQAIAAAGADQAHAEADAGQADAGAAAGQAAAHgDAGQgDAGgHADQgGAEgIAAQgHAAgGgEg");
	this.shape_63.setTransform(-704.875,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textt, new cjs.Rectangle(-711.8,-27.7,1342.8,52.5), null);


(lib.Symbol13copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhPBQIAKgjQAVAIAUADIgJgMQgEgGgCgHIgch7IAwAAIAZB/QADALADAHQAMgFAHgKQAGgJAAgPIAAhqIAvAAIAABnQAAAbgLASQgLASgUAJQgUAKgZAAQglAAgjgNg");
	this.shape.setTransform(912.975,64.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAvAAIAAAzIBkAAIAAAeIg8CWg");
	this.shape_1.setTransform(895.55,62.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqATIAAglIBVAAIAAAlg");
	this.shape_2.setTransform(880.775,64.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBaQgTgDgPgGIAJgiQAOAEAPACQAPACALAAQAVAAALgKQALgKAAgTIAAhHIg1AAQgHARABASIAAAIQAHACAIAAIAAAfQgJABgJAAQgMAAgLgDQgMgCgJgGIAAgQQABgOADgOQACgNAHgJIgTAAIAAglICgAAIAABmQAAAcgMATQgMASgTAJQgUAJgYAAQgQAAgSgDg");
	this.shape_3.setTransform(864.1,64.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJA0IAAhCIgcAAIAAglIBLAAIAABng");
	this.shape_4.setTransform(847.95,60.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBbIAAh1QAAgNgIgHQgHgHgOAAIhLAAIAAglIBOAAQAXAAAQAIQAQAIAKAPQAIAPAAAVIAABygAhLBbIAAg+QAAgbAKgMIAmAAQgCANgBAUIAABEg");
	this.shape_5.setTransform(826.1,64.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBaQgSgDgQgGIAJgiQAOAEAPACQAPACALAAQAVAAALgKQALgKAAgTIAAhHIg1AAQgHARAAASIAAAIQAHACAJAAIAAAfQgJABgJAAQgMAAgMgDQgLgCgJgGIAAgQQAAgOAEgOQACgNAHgJIgUAAIAAglICgAAIAABmQAAAcgLATQgMASgTAJQgUAJgYAAQgQAAgSgDg");
	this.shape_6.setTransform(805.85,64.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKB6IAAh9QAAgbALgMIAmAAQgDAMAAAWIAACCgAgKAXQATgBAKgKQAKgLAAgUIAAhBIhpAAIAAglICYAAIAABlQABAYgKASQgLARgTAKQgUAJgbABg");
	this.shape_7.setTransform(785.7,67.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_8.setTransform(769.975,64.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAABbIAAiQIhNAAIAAglICbAAIAAAlIggAAIAACQg");
	this.shape_9.setTransform(756.825,64.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_10.setTransform(742.475,64.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhYBaIAAglIAKABQAWAAAAgYIAAgqQAAgKACgMQADgMAFgIIgcAAIAAglIBbAAQAkAAASASQASARAAAhIAABwIgvAAIAAhzQAAgPgGgGQgGgHgNAAIgWAAQgDAIgBALIgBASIAAAzQAAATgHAMQgGANgNAIQgMAGgRAAQgLAAgMgCg");
	this.shape_11.setTransform(727.175,64.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBbIAAh1QABgNgIgHQgHgHgOAAIhKAAIAAglIBNAAQAXAAARAIQAPAIAKAPQAIAPAAAVIAABygAhLBbIAAg+QAAgbALgMIAlAAQgCANAAAUIAABEg");
	this.shape_12.setTransform(700.8,64.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGBdIAAglIAfAAIAAhHQABgSgIgLQgIgKgNAAQgLAAgHAKQgIALgCATIgKBrIgvAAIALhlQABgNAGgKQAEgLAHgHIABgCIAAgBIgOAEIgOAEIgKgiQASgGAXgEQAYgEATAAQAqAAAVAVQAWAVAAApIAABmg");
	this.shape_13.setTransform(680.55,64.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdBbIgBh0QAAgcgYAAIgfAAIAACQIgwAAIABi1IBOAAQAjAAASASQATARAAAiIAABwg");
	this.shape_14.setTransform(660.825,64.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIA0IAAhCIgdAAIAAglIBLAAIAABng");
	this.shape_15.setTransform(644.7,60.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJA0IAAhCIgcAAIAAglIBLAAIAABng");
	this.shape_16.setTransform(634.05,60.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhNBbIAAglIBWAAIAAhQQAAgNgGgHQgHgHgPAAIgwAAIAAglIA0AAQAWAAARAIQAQAIAJAPQAIAPAAAVIAABLIAVADIAAAkg");
	this.shape_17.setTransform(621.25,64.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_18.setTransform(607.025,64.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhYBaIAAglIAKABQAWAAAAgYIAAgqQAAgKACgMQADgMAFgIIgcAAIAAglIBbAAQAkAAASASQASARAAAhIAABwIgvAAIAAhzQAAgPgGgGQgGgHgNAAIgWAAQgDAIgBALIgBASIAAAzQAAATgHAMQgGANgNAIQgMAGgRAAQgLAAgMgCg");
	this.shape_19.setTransform(591.725,64.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhYBaIAAglIAKABQAWAAAAgYIAAgqQAAgKACgMQADgMAFgIIgcAAIAAglIBbAAQAkAAASASQASARAAAhIAABwIgvAAIAAhzQAAgPgGgGQgGgHgNAAIgWAAQgDAIgBALIgBASIAAAzQAAATgHAMQgGANgNAIQgMAGgRAAQgLAAgMgCg");
	this.shape_20.setTransform(563.975,64.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_21.setTransform(549.275,64.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhPBQIAKgjQAVAIAUADIgJgMQgEgGgCgHIgch7IAwAAIAZB/QADALADAHQAMgFAHgKQAGgJAAgPIAAhqIAvAAIAABnQAAAbgLASQgLASgUAJQgUAKgZAAQglAAgjgNg");
	this.shape_22.setTransform(534.475,64.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhNBbIAAglIBWAAIAAhQQAAgNgGgHQgHgHgPAAIgwAAIAAglIA0AAQAWAAARAIQAQAIAJAPQAIAPAAAVIAABLIAVADIAAAkg");
	this.shape_23.setTransform(517.3,64.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARBbIAAh3QAAgMgHgGQgHgHgMAAIg2AAIAAglIA6AAQAVAAAQAIQAPAIAJAOQAIAOAAAUIAAB1g");
	this.shape_24.setTransform(500.275,64.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhYBaIAAglIAKABQAWAAAAgYIAAgqQAAgKACgMQADgMAFgIIgcAAIAAglIBbAAQAkAAASASQASARAAAhIAABwIgvAAIAAhzQAAgPgGgGQgGgHgNAAIgWAAQgDAIgBALIgBASIAAAzQAAATgHAMQgGANgNAIQgMAGgRAAQgLAAgMgCg");
	this.shape_25.setTransform(474.625,64.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAwAAIAAAzIBjAAIAAAeIg8CWg");
	this.shape_26.setTransform(457.05,62.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_27.setTransform(443.025,64.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBbIgSgDIAAgkQAKACAMAAQAKAAAGgGQAFgGAAgMIAAhUIghAAIAAglIBPAAIAAB9QAAASgGANQgHAOgNAGQgMAHgRAAIgQgBg");
	this.shape_28.setTransform(431.725,64.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAdBbIAAh1QAAgNgIgHQgHgHgOAAIhLAAIAAglIBOAAQAXAAAQAIQAQAIAJAPQAJAPAAAVIAABygAhLBbIAAg+QAAgbAKgMIAmAAQgDANAAAUIAABEg");
	this.shape_29.setTransform(416.7,64.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAvAAIAAAzIBkAAIAAAeIg8CWg");
	this.shape_30.setTransform(390.75,62.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGBdIAAglIAfAAIAAhHQABgSgIgLQgIgKgNAAQgLAAgIAKQgHALgCATIgKBrIgvAAIALhlQABgNAGgKQAEgLAHgHIABgCIAAgBIgOAEIgOAEIgKgiQASgGAXgEQAYgEATAAQAqAAAVAVQAWAVAAApIAABmg");
	this.shape_31.setTransform(371.85,64.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhFBbIAAglIBRAAIhgiQIA0AAIAlA8IAbg8IA1AAIg0BlIAoA6IAAAWg");
	this.shape_32.setTransform(352.525,64.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAJAqIAAhTIAgAAIAAAUIgGA/gAgoAqIAAhTIAgAAIAAAUIgGA/g");
	this.shape_33.setTransform(338.55,54.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAdBbIgBh0QAAgcgYAAIgfAAIAACQIgwAAIABi1IBOAAQAjAAASASQATARAAAiIAABwg");
	this.shape_34.setTransform(324.025,64.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAVQgGgDgDgFQgCgGAAgHQAAgGACgFQADgGAGgDQAHgDAGAAQAIAAAFADQAGADADAGQADAFABAGQgBAHgDAGQgDAFgGADQgFADgIAAQgGAAgHgDg");
	this.shape_35.setTransform(309.35,71.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAdBbIgBh0QAAgcgYAAIgfAAIAACQIgwAAIABi1IBOAAQAjAAASASQATARAAAiIAABwg");
	this.shape_36.setTransform(913.825,17.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_37.setTransform(898.175,17.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhNBbIAAglIBXAAIAAhQQgBgNgGgHQgHgHgPAAIgwAAIAAglIA0AAQAWAAAQAIQARAIAJAPQAIAPAAAVIAABLIAVADIAAAkg");
	this.shape_38.setTransform(885.6,17.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhYBaIAAgkIAKAAQAWAAAAgYIAAgrQAAgKACgLQADgMAFgIIgcAAIAAglIBbAAQAkAAASARQASASAAAhIAABxIgvAAIAAh0QAAgPgGgGQgGgHgNAAIgWAAQgDAJgBAKIgBASIAAAzQAAASgHAOQgGANgNAGQgMAHgRAAQgLAAgMgCg");
	this.shape_39.setTransform(866.025,17.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_40.setTransform(851.325,17.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag5BXQgbgFgZgMIAAijIAvAAIAACJQAMAGAQADQAOAEANAAQAgAAAUgPQATgOAAgcIAAhdIAuAAIAABjQgBAcgPAUQgPAUgaAKQgaAKggAAQgZAAgbgHgAgdAeQADgFACgLQABgLABgMIAAhUIAsAAIAABKQAAAQgDAMQgEAOgGAIg");
	this.shape_41.setTransform(825.85,17.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAvAAIAAAzIBkAAIAAAeIg8CWg");
	this.shape_42.setTransform(803.95,14.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAdBbIAAh1QgBgNgHgHQgHgHgOAAIhLAAIAAglIBOAAQAXAAAQAIQARAIAIAPQAJAPAAAVIAABygAhLBbIAAg+QAAgbAKgMIAnAAQgEANAAAUIAABEg");
	this.shape_43.setTransform(778.25,17.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAFBdIAAglIAhAAIAAhHQgBgTgHgJQgHgLgNABQgNgBgGALQgIAKgCATIgLBrIgvAAIAMhlQACgNAEgLQAFgLAGgGIADgCIAAgBIgOAEIgPAFIgKgjQASgGAXgEQAXgEAVAAQAoAAAXAVQAVAVAAApIAABmg");
	this.shape_44.setTransform(758,16.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgoBaQgTgDgPgGIAJgiQAOAEAPACQAPACALAAQAVAAALgKQALgKAAgTIAAhHIg1AAQgHARABASIAAAIQAGACAKAAIAAAfQgJABgKAAQgMAAgLgDQgMgCgIgGIAAgQQAAgOACgOQAEgNAFgJIgSAAIAAglICgAAIAABmQAAAcgMATQgMASgUAJQgTAJgZAAQgPAAgSgDg");
	this.shape_45.setTransform(737.4,17.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhKB6IAAh9QAAgbALgMIAmAAQgDAMAAAWIAACCgAgJAXQARgBALgKQAKgLAAgUIAAhBIhpAAIAAglICYAAIAABlQAAAYgKASQgKARgUAKQgTAJgaABg");
	this.shape_46.setTransform(717.25,20.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAABbIAAiQIhNAAIAAglICbAAIAAAlIggAAIAACQg");
	this.shape_47.setTransform(698.325,17.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAwAAIAAAzIBjAAIAAAeIg8CWg");
	this.shape_48.setTransform(673.4,14.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAFBdIAAglIAhAAIAAhHQgBgTgHgJQgHgLgNABQgNgBgGALQgIAKgCATIgLBrIgvAAIAMhlQACgNAEgLQAFgLAGgGIADgCIAAgBIgOAEIgPAFIgKgjQASgGAXgEQAXgEAVAAQAoAAAXAVQAVAVAAApIAABmg");
	this.shape_49.setTransform(654.5,16.95);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgaBbIgSgDIAAgkQAKACAMAAQAKAAAGgGQAFgGAAgMIAAhUIghAAIAAglIBPAAIAAB9QAAASgGANQgHAOgNAGQgMAHgRAAIgQgBg");
	this.shape_50.setTransform(637.425,17.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_51.setTransform(626.375,17.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhPBQIAKgjQAVAJAUACIgJgLQgEgIgCgHIgch6IAwAAIAZB/QADAMADAGQAMgEAHgLQAGgKAAgPIAAhpIAvAAIAABnQAAAbgLASQgLASgUAJQgUAKgZAAQglAAgjgNg");
	this.shape_52.setTransform(611.575,17.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAkBbIhDhhQgFAGAAAKIAABRIguAAIAAg8QAAgZAIgPQAHgPASgIIgog6IA1AAIAqA/IAfg/IA1AAIg2BoIA1BNg");
	this.shape_53.setTransform(584.775,17.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhYBaIAAgkIAKAAQAWAAAAgYIAAgrQAAgKACgLQADgMAFgIIgcAAIAAglIBbAAQAkAAASARQASASAAAhIAABxIgvAAIAAh0QAAgPgGgGQgGgHgNAAIgWAAQgDAJgBAKIgBASIAAAzQAAASgHAOQgGANgNAGQgMAHgRAAQgLAAgMgCg");
	this.shape_54.setTransform(563.125,17.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAdBbIAAh1QAAgNgIgHQgHgHgOAAIhKAAIAAglIBNAAQAXAAAQAIQAQAIAKAPQAIAPAAAVIAABygAhLBbIAAg+QAAgbAKgMIAmAAQgDANABAUIAABEg");
	this.shape_55.setTransform(536.75,17.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAFBdIAAglIAhAAIAAhHQAAgTgIgJQgHgLgOABQgMgBgHALQgHAKgCATIgKBrIgvAAIALhlQABgNAGgLQAEgLAGgGIACgCIAAgBIgNAEIgPAFIgKgjQASgGAXgEQAYgEATAAQApAAAWAVQAWAVAAApIAABmg");
	this.shape_56.setTransform(516.5,16.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag5BXQgbgFgYgMIAAijIAuAAIAACJQANAGAPADQAOAEANAAQAgAAAUgPQATgOAAgcIAAhdIAuAAIAABjQgBAcgPAUQgPAUgaAKQgaAKggAAQgZAAgbgHgAgdAeQADgFACgLQACgLgBgMIAAhUIAtAAIAABKQABAQgEAMQgEAOgGAIg");
	this.shape_57.setTransform(492.95,17.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AARB6IAAjOIhPAAIAAglIB9AAIAADzg");
	this.shape_58.setTransform(470.725,20.325);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAdBbIAAh1QAAgNgIgHQgHgHgOAAIhLAAIAAglIBOAAQAXAAAQAIQARAIAIAPQAJAPAAAVIAABygAhLBbIAAg+QAAgbAKgMIAnAAQgEANAAAUIAABEg");
	this.shape_59.setTransform(446.05,17.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgoBaQgTgDgPgGIAJgiQAOAEAPACQAPACALAAQAVAAALgKQALgKAAgTIAAhHIg1AAQgHARABASIAAAIQAHACAIAAIAAAfQgJABgJAAQgMAAgLgDQgMgCgJgGIAAgQQABgOADgOQACgNAHgJIgTAAIAAglICgAAIAABmQAAAcgMATQgMASgTAJQgUAJgYAAQgQAAgSgDg");
	this.shape_60.setTransform(425.8,17.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhPBQIAKgjQAVAJAUACIgJgLQgEgIgCgHIgch6IAwAAIAZB/QADAMADAGQAMgEAHgLQAGgKAAgPIAAhpIAvAAIAABnQAAAbgLASQgLASgUAJQgUAKgZAAQglAAgjgNg");
	this.shape_61.setTransform(405.275,17.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgIA0IAAhCIgdAAIAAglIBLAAIAABng");
	this.shape_62.setTransform(390.25,13.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAwAAIAAAzIBjAAIAAAeIg8CWg");
	this.shape_63.setTransform(377.2,14.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_64.setTransform(363.175,17.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhYBaIAAgkIAKAAQAWAAAAgYIAAgrQAAgKACgLQADgMAFgIIgcAAIAAglIBbAAQAkAAASARQASASAAAhIAABxIgvAAIAAh0QAAgPgGgGQgGgHgNAAIgWAAQgDAJgBAKIgBASIAAAzQAAASgHAOQgGANgNAGQgMAHgRAAQgLAAgMgCg");
	this.shape_65.setTransform(347.875,17.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAdBbIAAh1QgBgNgHgHQgHgHgOAAIhLAAIAAglIBOAAQAXAAAQAIQARAIAIAPQAJAPAAAVIAABygAhLBbIAAg+QAAgbAKgMIAnAAQgEANAAAUIAABEg");
	this.shape_66.setTransform(321.5,17.175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAkBbIhDhhQgFAGAAAKIAABRIguAAIAAg8QAAgZAIgPQAHgPASgIIgog6IA1AAIAqA/IAfg/IA1AAIg2BoIA1BNg");
	this.shape_67.setTransform(301.575,17.175);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgjBUQgSgKgLgUQgKgTAAgZIAAgKQAAgNAFgPQAFgOAHgIIADgCIgBgBIgXAFIgJgiQASgFAZgEQAYgDAUAAQAqAAAXAWQAXAXAAAqIAAARQAAAZgLATQgKAUgSAKQgTALgYAAQgXAAgSgLgAgSgqQgJANAAAZIAAAOQAAAOAEAKQAFAKAHAGQAIAGAJAAQAKAAAIgGQAIgGAEgKQAEgKAAgOIAAgQQAAgYgJgMQgJgNgQAAQgPAAgJANg");
	this.shape_68.setTransform(280.525,17.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_69.setTransform(265.225,17.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AARBbIAAh3QAAgMgHgGQgHgHgMAAIg2AAIAAglIA6AAQAVAAAQAIQAPAIAJAOQAIAOAAAUIAAB1g");
	this.shape_70.setTransform(252.475,17.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAdBbIAAh1QAAgNgIgHQgHgHgOAAIhLAAIAAglIBOAAQAXAAAQAIQARAIAIAPQAJAPAAAVIAABygAhLBbIAAg+QAAgbAKgMIAnAAQgEANAAAUIAABEg");
	this.shape_71.setTransform(235.9,17.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgaAjIADgFQAGgMAEgJQADgJAAgNIAAghIAlAAIAAAeQAAARgJARQgIASgNALg");
	this.shape_72.setTransform(221.625,27.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_73.setTransform(205.025,17.175);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAvAAIAAAzIBkAAIAAAeIg8CWg");
	this.shape_74.setTransform(192.2,14.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAABbIAAiQIhNAAIAAglICbAAIAAAlIggAAIAACQg");
	this.shape_75.setTransform(174.975,17.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_76.setTransform(160.625,17.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_77.setTransform(150.675,17.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAdBbIgBh0QAAgcgYAAIgfAAIAACQIgwAAIABi1IBOAAQAjAAASASQATARAAAiIAABwg");
	this.shape_78.setTransform(136.725,17.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgjB0IA6iPIhgAAIAAhYIAvAAIAAAzIBkAAIAAAeIg8CWg");
	this.shape_79.setTransform(110.5,14.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAGBdIAAglIAfAAIAAhHQABgTgIgJQgHgLgOABQgLgBgIALQgHAKgCATIgKBrIgvAAIALhlQACgNAFgLQAEgLAHgGIABgCIAAgBIgNAEIgPAFIgKgjQASgGAXgEQAYgEATAAQAqAAAVAVQAWAVAAApIAABmg");
	this.shape_80.setTransform(91.6,16.95);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgoBaQgSgDgQgGIAJgiQAOAEAPACQAPACALAAQAVAAALgKQALgKAAgTIAAhHIg1AAQgHARAAASIAAAIQAHACAJAAIAAAfQgJABgJAAQgMAAgMgDQgLgCgJgGIAAgQQAAgOAEgOQACgNAHgJIgUAAIAAglICgAAIAABmQAAAcgLATQgMASgTAJQgUAJgYAAQgQAAgSgDg");
	this.shape_81.setTransform(71,17.375);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhKB6IAAh9QAAgbALgMIAmAAQgDAMAAAWIAACCgAgKAXQATgBAKgKQAKgLAAgUIAAhBIhoAAIAAglICXAAIAABlQABAYgKASQgLARgTAKQgUAJgbABg");
	this.shape_82.setTransform(50.85,20.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAABbIAAiQIhNAAIAAglICbAAIAAAlIggAAIAACQg");
	this.shape_83.setTransform(31.925,17.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJA0IAAhCIgcAAIAAglIBLAAIAABng");
	this.shape_84.setTransform(17.1,13.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgPBbIAAiQIgQAAIAAglIA/AAIAAC1g");
	this.shape_85.setTransform(6.925,17.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNAVQgGgDgDgFQgCgGAAgHQAAgGACgFQADgGAGgDQAHgDAGAAQAIAAAFADQAGADADAGQADAFABAGQgBAHgDAGQgDAFgGADQgFADgIAAQgGAAgHgDg");
	this.shape_86.setTransform(-2.05,23.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(-16.4,-8.2,941.9,97.10000000000001), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhpCoQgxgLgsgVIAAk6IBHAAIAAESQAbALAeAHQAeAGAaAAQApABAggMQAggMASgZQATgYAAglIAAi9IBHAAIAADFQAAA0gcAkQgcAkgwATQgvARg7AAQguAAgwgLgAg1BBQAIgLAEgUQAFgVAAgYIAAinIBHAAIAACYQAAAdgHAZQgIAYgNAOg");
	this.shape.setTransform(271.425,47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBiIAAiJIg7AAIAAg6ICFAAIAADDg");
	this.shape_1.setTransform(235.225,39.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJCyIAAg6IBKAAIAAiYQAAgpgSgVQgRgWggAAQgZAAgRAVQgQAUgEAlIgXDYIhKAAIAYjPQADgXAKgWQAKgVANgMIAFgEIgBgBQgMACgRAFQgSAEgOAGIgQg3QAigMAsgIQAsgHAlAAQBLAAAoAnQAnAnAABMIAADJg");
	this.shape_2.setTransform(207.125,47.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTCuIAAkhIgjAAIAAg6IBtAAIAAFbg");
	this.shape_3.setTransform(177.475,47.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhpCoQgxgLgsgVIAAk6IBHAAIAAESQAbALAeAHQAeAGAaAAQApABAggMQAggMASgZQATgYAAglIAAi9IBHAAIAADFQAAA0gcAkQgcAkgwATQgvARg7AAQguAAgwgLgAg1BBQAIgLAEgUQAFgVAAgYIAAinIBHAAIAACYQAAAdgHAZQgIAYgNAOg");
	this.shape_4.setTransform(144.425,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiSCuIAAg6ICxAAIAAijQAAgjgQgQQgQgRgkAAIhaAAIAAg6IBeAAQBDAAAkAhQAjAhAAA/IAACdIAqAFIAAA4g");
	this.shape_5.setTransform(88.675,47.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABRCuIiNjHQgKAIgFANQgFALAAARIAACWIhIAAIAAh4QAAgvAQgcQAOgdAhgQIhMhrIBTAAIBeCGIBHiGIBTAAIhsDGIBpCVg");
	this.shape_6.setTransform(53.275,47.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiIDrIAAj3QAAgcAGgQQAFgQAHgOIA9AAQgHAYAAAsIAAD9gAgSA4QAngBAXgYQAXgYAAgpIAAiOIjPAAIAAg6IEZAAIAADGQAAAtgTAiQgUAhgkASQgkASgwABg");
	this.shape_7.setTransform(13.675,53.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALCuIAAkhIibAAIAAg6IEhAAIAAA6Ig8AAIAAEhg");
	this.shape_8.setTransform(-21.95,47.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABCCuIAAjcQAAgjgPgRQgQgRghAAIhDAAIAAEhIhKAAIAAlbICNAAQCJAAABCEIAADXg");
	this.shape_9.setTransform(-56.375,47.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(-92.6,0,391,92.1), null);


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
	this.shape.graphics.f("#51FFED").s().p("AA1CwIAAjjQAAgyg1AAIiSAAIAAhKICZAAQAsAAAgAQQAgAOAQAeQARAcAAAoIAADfgAiTCwIAAh4QAAg1AVgXIBMAAQgFAaAAAnIAACDg");
	this.shape.setTransform(277.725,47.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51FFED").s().p("AggCwIAAkVIgeAAIAAhKIB9AAIAAFfg");
	this.shape_1.setTransform(247.775,47.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51FFED").s().p("AAeCwIAAjnQAAgWgNgMQgNgMgXAAIhpAAIAAhKIBwAAQAqAAAfAPQAfAPARAcQAQAcAAAoIAADhg");
	this.shape_2.setTransform(222.975,47.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51FFED").s().p("ABDCwIiAi5QgIAKAAASIAACdIhcAAIAAh0QAAgwAPgdQAPgdAhgRIhNhwIBqAAIBSB4IA5h4IBrAAIhrDMIBmCTg");
	this.shape_3.setTransform(189.7,47.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51FFED").s().p("AggCwIAAkVIgeAAIAAhKIB9AAIAAFfg");
	this.shape_4.setTransform(158.025,47.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51FFED").s().p("AitCvIAAhKIATABQArAAgBgsIAAhTQAAgSAGgXQAEgWAKgQIg2AAIAAhKICzAAQBFAAAkAiQAkAiAABCIAADZIhgAAIAAjiQAAgzgsAAIgtAAIgFAkQgDASAAARIAABiQAAAkgNAZQgNAagYANQgYAOgiAAQgUAAgagEg");
	this.shape_5.setTransform(128.35,47.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51FFED").s().p("AiXCwIAAhKICnAAIAAiZQAAgyg1AAIheAAIAAhKIBlAAQAsAAAgAQQAgAOAQAeQARAcABAoIAACSIAoAGIAABHg");
	this.shape_6.setTransform(79.75,47.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51FFED").s().p("AhPCiQgkgTgTgiQgTgjAAgtIAAjOIBfAAIAADaQAAATAHAQQAIAPANAJQAOAIAQAAQARAAAOgIQANgJAIgPQAHgQAAgTIAAhjQAAgXgKgLQgJgLgUAAQgMAAgSADIgJg8QAQgJATgGQAUgFARgBQAgABAXAOQAWANAMAaQAMAaAAAjIAABfQAAAtgTAjQgTAigjATQgjAUgugBQgtABgigUg");
	this.shape_7.setTransform(44.775,47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51FFED").s().p("AgUBlIAAh+Ig2AAIAAhLICVAAIAADJg");
	this.shape_8.setTransform(12.7,39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51FFED").s().p("AA1CwIgBjiQAAgzgtAAIg7AAIAAEVIhfAAIABlfICZAAQBFAAAkAiQAjAiABBCIAADZg");
	this.shape_9.setTransform(-14.875,47.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51FFED").s().p("AggCwIAAkVIgeAAIAAhKIB9AAIAAFfg");
	this.shape_10.setTransform(-45.375,47.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51FFED").s().p("AitCvIAAhKIATABQArAAgBgsIAAhTQAAgSAGgXQAEgWAKgQIg2AAIAAhKICzAAQBFAAAkAiQAkAiAABCIAADZIhgAAIAAjiQAAgzgsAAIgtAAIgFAkQgDASAAARIAABiQAAAkgNAZQgNAagYANQgYAOgiAAQgUAAgagEg");
	this.shape_11.setTransform(-75.05,47.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51FFED").s().p("AhUAlIAAhJICpAAIAABJg");
	this.shape_12.setTransform(-120.325,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-149.8,0,448.2,92.1), null);


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

	// Layer_1 copy
	this.instance = new lib._10copy();
	this.instance.setTransform(1560,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib._10copy();
	this.instance_1.setTransform(-60,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-60,0,1620,839), null);


(lib.Symbol6copy = function(mode,startPosition,loop,reversed) {
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
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhMeAJVIAAypMCY9AAAIAASpg");
	mask.setTransform(913.3,453.6);

	// Layer_3
	this.instance = new lib.Symbol13copy();
	this.instance.setTransform(789.35,581.55,1,1,0,0,0,332.1,54.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({x:795.85,y:458.15},13).wait(1));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhpDUQg4gbghgxQgWgfgLglQgKgnADgtQACgjAJgZQAKgiAYggQAkgvA4gaQA5gZA7AFQA7AFA0AiQA0AiAcA1QAbA1gBA9QgBA+geA0QgdA0g1AgQg2Agg7ACIgKAAQg2AAgzgZg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AhTGSQgxgTgmgmQgugvgOg/QgIghACghQACgrAQgnQAQgnAdgfIAOgOQgagTgUgdQgWgfgKglQgLgmADguQADgjAIgaQALgiAXgfQAkgwA5gZQA5gaA6AFQA8AFA0AiQA0AiAbA1QAcA1gBA+QgCA+gdA0QgRAfgZAXQAeAWAWAhQAgAvAHA3QAIA9gZA9QgZA8gyAmQgxAlhBAKQgRACgSAAQgsAAgqgQg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Ah0KXQgugVgjgoQgigpgOgxQgJglgCg4QgCg4AEgmQAFgzASgnIADgIIgIgpQgIgzgBgkQgBgvAKgmQAGgXALgWQgHggACggQACgrAQgnQAQgnAdgfIAOgOQgbgVgTgcQgWgfgKglQgLgmADguQADgjAIgaQALgiAXgfQAkgwA5gZQA5gaA6AFQA8AFA0AiQA0AiAbA1QAcA1gBA+QgCA+gdA0QgSAegZAYQAfAXAWAhQAgAvAHA3QAIA9gZA8QgGAOgHANIAHAhQAMBEgHA7QgGAygUAoQAFAYACAcQADAegCAyQgDA/gIAfQgNAxgiApQghApgvAWQguAWg0AAIgDAAQgzAAgugVg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AgcNoQg4gHgtgeQg5gmgZg7QgOgggGgvIgHhSIgGhdQgBg0AKgnQADgOAFgMQgLgWgHgYQgJglgCg4QgCg4AEgmQAFgzASgnIADgIIgIgoQgIgzgBgkQgBgvAKgmQAGgYALgWQgHgfACghQACgrAQgnQAQgnAdgfIAOgOQgbgVgTgcQgWgfgKglQgLgmADguQADgjAIgaQALgiAXgfQAkgwA5gZQA5gaA6AFQA8AFA0AiQA0AiAbA1QAcA1gBA+QgCA+gdA0QgSAfgZAXQAfAXAWAhQAgAvAHA3QAIA9gZA9QgGAOgHANIAHAhQAMBEgHA6QgGAygUAoQAFAYACAcQADAegCAyQgDA/gIAfQgEAOgFAOQAUAnAKAxQAMA5AABWQAABXgRAyQgRAzgoAoQgoAngzASQglAMgmAAQgPAAgPgCg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AhiQ0QhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtADQgVgKgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAFgPAGgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQANgUAOgQQgZgcgQgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBAgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAdQAoAoARA0QAQAwACBYQACA9gEAnQgEAngLAgIACATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgYAPgZAIQAYAEATAGQBGAWAuA+QAuA+ACBJQACBJgsBAQgrBAhFAZQgjANguAFQgeADg2AAQhPAAgqgGg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AoHQ0QhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtADQgVgKgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAEgPAHgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgQQgagcgPgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBBgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAdQAnAoASA0QAQAwACBYQACA9gEAnQgFAngLAgIADATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgZAPgZAIQARACAOAEQAggJAngDQAigCBMACQDeAGDagNQBpgFAyAEQBWAIA5AmQAzAjAcA8QAbA7gHA+QgHA+gnA1QgnA0g5AZQgoASg3AGQgiAEhBABIoCAGQhLAAgmgEQgcgDgYgGQgbAIgiADQgeADg2AAQhQAAgqgGg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AyiQ0QhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtADQgVgKgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAFgPAGgOIgBgQIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgQQgZgcgQgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBBgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAdQAnAoASA0QAQAwACBYQACA9gEAnQgEAngLAgIACATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgYAPgZAIQAQACAOAEQAggJAngDQAigCBMACQDfAGDagNIAugCIANgGQAwgXBCgEQAqgDBOAFIFyAWQDqAOBuADQDAAHCZgGQBYgDAjACQBGAEAwAXQA8AcAlA5QAmA5ACBBQADBCgjA7QgiA7g6AfQgzAahIAFQgjADhggDQhSgCi+ACQivAChhgFQg7gDjEgRQiegOhgAAIgjAAIgJAEQgoASg3AGQgiAEhBABIoDAGQhLAAgmgEQgbgDgYgGQgcAIgiADQgeADg2AAQhQAAgqgGg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EAhrARUI00gkQj/gHhvgBQjNgDihAEQhZACgsgFQghgDgcgIQhSgBiOABQiwAChhgFQg6gCjFgSQiegOhhABIgjAAIgIAEQgpASg2AGQgiAEhBAAIoEAGQhLABgmgFQgbgDgYgGQgcAIghADQgfADg1AAQhRAAgqgFQhDgJgwgZQhAgigjhDQgkhEAIhHQAJhIAyg5QAzg5BGgQQAjgIAyABIAsACQgUgJgUgPQg6gqgYg/QgNgkgEgwQgDgbAAg7IACkIQABiFgFhOIgDhJQgBgqAJgeQAEgPAHgPIgBgPIgDhBIgFg4QgDghACgWQAEg3AegwQAMgTAPgRQgagbgQgjQgag5AGg/QAGhEAtg5QAtg4BAgWQBBgWBGASQBGASAuAyQAuAyAMBHQAMBHgbA/QgQAlgbAcQAoApARAzQAQAxACBXQACA+gEAmQgEAogLAgIACASQADAdAAA1IADHNQAABGgEAlQgGA7gVAqQgdA+g+AlQgYAOgZAIQAQADAPAEQAggJAngDQAigDBLACQDgAGDZgMIAvgCIAMgHQAwgWBDgFQAqgDBOAFIFyAWQDrAOBuAEQDAAHCYgHQBYgDAjACQAZACAWAEIZvAqQEKAHCFgEQBggCAqAEQBMAIA0AeQAzAfAfA2QAfA2AAA8QABA8geA2QgfA3gyAgQg1AhhPAKQgjAEg4AAIgzgBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AXGRUI01gkQj9gHhwgBQjMgDiiAEQhZACgsgFQghgDgcgIQhSgBiPABQivAChhgFQg7gCjEgSQiegOhhABIgjAAIgJAEQgoASg3AGQgiAEhBAAIoDAGQhLABgmgFQgbgDgYgGQgcAIgiADQgeADg2AAQhQAAgqgFQhEgJgwgZQg/gigkhDQgjhEAIhHQAIhIAzg5QAyg5BGgQQAjgIAyABIAtACQgVgJgTgPQg6gqgYg/QgOgkgEgwQgCgbAAg7IACkIQABiFgFhOIgEhJQAAgqAIgeQAFgPAGgPIgBgPIgDhBIgFg4QgDghACgWQAEg3AegwQAMgTAPgRQgZgbgQgjQgag5AFg/QAHhEAsg5QAtg4BBgWQBBgWBFASQBGASAuAyQAvAyAMBHQAMBHgbA/QgQAlgbAcQAnApASAzQAQAxACBXQACA+gEAmQgEAogLAgIACASQADAdAAA1IACHNQABBGgEAlQgHA7gUAqQgeA+g9AlQgYAOgZAIQAQADAOAEQAggJAngDQAigDBMACQDfAGDagMIAugCIANgHQAwgWBCgFQAqgDBOAFIFzAWQDqAOBuAEQDAAHCZgHQBYgDAjACQAaACAWAEIZuAqQEKAHCEgEQBhgCApAEQAvAFAlANIAEgEQA0gvBDgNQAzgKBFAJQAoAFBPAPQBiARCyAFQEOAHD1gEQBQgBAnAEQBCAHAuAYQA1AbAjA0QAjAzAFA8QAEA8gaA4QgbA4gxAiQg0AkhQALQgxAGhggBQk5gCidgEQkPgHjEgeQg/gKglgMIgRgFQgQAQgUAMQg1AhhOAKQgjAEg4AAIgzgBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAp9ARUQgxgHgngSQgcAJghAEQgxAHhhgCQk5gBicgEQkQgHjDgfQg/gKgmgLIgQgGQgRAQgTAMQg1AihPAJQgxAGhdgCI0zgkQj/gHhvgCQjNgDihAEQhZACgtgEQghgEgcgIQhSgBiOACQiwAChhgFQg6gDjFgRQiegOhhAAIgjAAIgIAEQgpASg2AGQgiAEhBABIoEAGQhLAAgmgEQgbgDgYgGQgcAHghAEQgfADg1AAQhRAAgqgGQhDgIgwgaQhAgigjhDQgkhDAIhIQAJhHAyg5QAzg6BGgQQAjgIAyABIAsACQgUgJgUgOQg6gqgYhAQgNgjgEgwQgDgbAAg8IACkHQABiGgFhNIgDhKQgBgpAJgfQAEgPAHgPIgBgPIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgRQgagbgQgiQgag5AGhAQAGhEAtg4QAtg5BAgWQBBgWBGASQBGASAuAzQAuAyAMBHQAMBHgbA/QgQAkgbAcQAoApARA0QAQAwACBYQACA9gEAnQgEAngLAgIACATQADAcAAA2IADHNQAABFgEAmQgGA6gVArQgdA9g+AlQgYAOgZAJQAQACAPAEQAggJAngDQAigCBLACQDgAGDZgNIAvgCIAMgGQAwgXBDgEQAqgDBOAFIFyAWQDrAOBuADQDAAHCYgGQBZgDAjACQAZABAWAEIZuAqQEKAHCFgDQBggCAqAEQAuAEAlANIAEgEQA1gvBDgNQAygKBFAJQAoAGBQAPQBiAQCyAFQENAHD1gDQBQgBAnAEQA5AGArATQAWgIAagEQAggGBBgFQDAgNBfgFQCfgJCAABQA9AAAkAEQA1AHAoASQA+AeAlA+QAmA+gEBFQgDBFgrA7QgrA6hAAYQgpAPg3AEQgYABhLgBQiYgDiTAOIhvALQhCAHgtACIgoABQgoAAghgEg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAlLARUQgxgHgngSQgdAJghAEQgxAHhggCQk5gBidgEQkPgHjEgfQg/gKglgLIgRgGQgQAQgUAMQg1AihOAJQgyAGhcgCI00gkQj+gHhwgCQjMgDiiAEQhZACgsgEQghgEgdgIQhRgBiPACQivAChhgFQg7gDjEgRQiegOhhAAIgjAAIgJAEQgoASg3AGQgiAEhBABIoDAGQhLAAgmgEQgcgDgYgGQgbAHgiAEQgeADg2AAQhQAAgqgGQhEgIgwgaQg/gigkhDQgjhDAIhIQAIhHAzg5QAyg6BGgQQAjgIAyABIAtACQgVgJgTgOQg6gqgYhAQgOgjgEgwQgCgbAAg8IACkHQABiGgFhNIgEhKQAAgpAIgfQAFgPAGgPIgBgPIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgRQgZgbgQgiQgag5AFhAQAHhEAsg4QAtg5BBgWQBBgWBFASQBGASAuAzQAvAyAMBHQAMBHgbA/QgQAkgbAcQAnApASA0QAQAwACBYQACA9gEAnQgFAngLAgIADATQADAcAAA2IACHNQABBFgEAmQgHA6gUArQgeA9g9AlQgYAOgaAJQARACAOAEQAggJAngDQAigCBMACQDfAGDagNIAugCIANgGQAwgXBCgEQAqgDBOAFIFzAWQDqAOBuADQDAAHCZgGQBYgDAjACQAZABAXAEIZuAqQEKAHCEgDQBhgCApAEQAuAEAlANIAFgEQA0gvBDgNQAzgKBFAJQAoAGBPAPQBiAQCyAFQEOAHD1gDQBQgBAnAEQA5AGAqATQAXgIAagEQAfgGBBgFQDAgNBfgFQCggJCAABQAsAAAeACQAXgFAagCQAcgDA5AAIGPAAQA+gBAiAEQA0AFAnARQA/AbAnA7QAoA8AABEQAABEgnA8QgoA8g+AaQgnARg0AFQghAEg+AAImCAAQguAAgfgCQggAJgoADQgZABhKgBQiZgDiTAOIhuALQhCAHgtACIgoABQgpAAgggEg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AdARUQgxgHgngSQgcAJghAEQgxAHhhgCQk5gBicgEQkQgHjDgfQg/gKgmgLIgQgGQgRAQgTAMQg1AihPAJQgxAGhdgCI0zgkQj/gHhvgCQjNgDihAEQhZACgtgEQghgEgcgIQhSgBiOACQiwAChhgFQg6gDjFgRQiegOhhAAIgiAAIgJAEQgpASg2AGQgiAEhBABIoEAGQhLAAgmgEQgbgDgYgGQgcAHghAEQgfADg1AAQhRAAgqgGQhDgIgwgaQhAgigjhDQgkhDAIhIQAJhHAyg5QAzg6BGgQQAjgIAyABIAsACQgUgJgUgOQg6gqgYhAQgNgjgEgwQgDgbAAg8IACkHQABiGgFhNIgDhKQgBgpAJgfQAEgPAHgPIgBgPIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgRQgagbgQgiQgag5AGhAQAGhEAtg4QAtg5BAgWQBBgWBGASQBGASAuAzQAuAyAMBHQAMBHgbA/QgQAkgaAcQAnApARA0QAQAwACBYQACA9gEAnQgEAngLAgIACATQADAcAAA2IADHNQAABFgEAmQgGA6gVArQgdA9g+AlQgYAOgZAJQARACAOAEQAggJAngDQAigCBLACQDgAGDZgNIAvgCIAMgGQAwgXBDgEQAqgDBOAFIFyAWQDrAOBuADQDAAHCYgGQBZgDAjACQAZABAWAEIZvAqQEJAHCFgDQBggCAqAEQAuAEAlANIAEgEQA1gvBDgNQAygKBFAJQAoAGBQAPQBiAQCyAFQENAHD1gDQBQgBAnAEQA5AGArATQAWgIAagEQAggGBBgFQDAgNBfgFQCfgJCAABQAsAAAfACQAWgFAagCQAcgDA5AAIGPAAQA+gBAiAEQA1AFAnARIAUAKIAOgJQAsgYA/gGQAngEBKADIDBAIQEiAMCegCQA3gBAZACQAtADAhAMQAwASAjAoQAjApALAyQALAzgRAzQgQAzglAjQg0AxhaAQQg2AJhngEIpigWQg9gCgfgEQgYgEgUgGQghAkgtATQgmARg1AFQggAEg/AAImCAAQgtAAgfgCQghAJgoADQgYABhLgBQiYgDiTAOIhvALQhCAHgtACIgnABQgpAAghgEg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AWQRUQgxgHgngSQgcAJghAEQgxAHhhgCQk5gBicgEQkQgHjDgfQg/gKgmgLIgQgGQgRAQgTAMQg0AihPAJQgxAGhdgCI00gkQj/gHhvgCQjNgDihAEQhZACgtgEQghgEgcgIQhSgBiOACQiwAChhgFQg6gDjFgRQiegOhhAAIgjAAIgIAEQgpASg2AGQgiAEhBABIoEAGQhLAAgmgEQgbgDgYgGQgcAHghAEQgfADg1AAQhRAAgqgGQhDgIgwgaQhAgigjhDQgkhDAIhIQAJhHAyg5QAzg6BGgQQAjgIAyABIAsACQgUgJgUgOQg6gqgYhAQgNgjgEgwQgDgbAAg8IACkHQABiGgFhNIgDhKQgBgpAJgfQAEgPAHgPIgBgPIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgRQgagbgQgiQgag5AGhAQAGhEAtg4QAtg5BAgWQBBgWBGASQBGASAuAzQAuAyAMBHQAMBHgbA/QgQAkgbAcQAoApARA0QAQAwACBYQACA9gEAnQgEAngLAgIACATQADAcAAA2IADHNQAABFgEAmQgGA6gVArQgdA9g+AlQgYAOgZAJQAQACAPAEQAggJAngDQAigCBLACQDgAGDZgNIAvgCIAMgGQAwgXBDgEQAqgDBOAFIFyAWQDrAOBuADQDAAHCYgGQBZgDAjACQAZABAWAEIZvAqQEKAHCFgDQBggCAqAEQAuAEAlANIAEgEQA0gvBDgNQAygKBFAJQAoAGBQAPQBiAQCyAFQENAHD1gDQBQgBAnAEQA5AGArATQAWgIAagEQAggGBBgFQDAgNBfgFQCfgJCAABQAsAAAfACQAWgFAagCQAcgDA5AAIGPAAQA+gBAiAEQA1AFAnARIAUAKIAOgJQAsgYA/gGQAngEBKADIDBAIQEiAMCegCQA3gBAZACQAtADAhAMIAGACQAMgJANgHQAwgaA1ABQAdAAA4AKQArAEBNgFQCzgLBaADQAqABBSAGQAxADAZAEQAoAGAeAOQAlAQAdAeQAcAdAPAlQAPAmgBApQgBApgRAkQgiBKhbAsQgkARguAMQgiAJg1AJQiqAeiDgGQikgGh9g8QgcgOgXgPQgvAghFAMQg2AJhngEIpigWQg9gCgfgEQgYgEgUgGQghAkgtATQgmARg1AFQggAEg/AAImCAAQgtAAgfgCQghAJgoADQgYABhLgBQiYgDiTAOIhvALQhCAHgtACIgnABQgpAAghgEg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AMARUQgxgHgngSQgcAJghAEQgxAHhhgCQk5gBicgEQkPgHjDgfQg/gKgmgLIgQgGQgRAQgTAMQg1AihPAJQgxAGhdgCI00gkQj/gHhvgCQjNgDihAEQhZACgtgEQgggEgdgIQhSgBiOACQiwAChhgFQg6gDjFgRQiegOhhAAIgiAAIgJAEQgpASg2AGQgiAEhBABIoEAGQhLAAgmgEQgbgDgYgGQgbAHgiAEQgfADg1AAQhRAAgqgGQhDgIgwgaQhAgigjhDQgkhDAIhIQAJhHAyg5QAzg6BGgQQAjgIAyABIAsACQgUgJgUgOQg6gqgYhAQgNgjgEgwQgDgbAAg8IACkHQABiGgFhNIgDhKQgBgpAJgfQAEgPAHgPIgBgPIgDhBIgFg3QgDghACgXQAEg2AegwQAMgUAPgRQgagbgQgiQgag5AGhAQAGhEAtg4QAtg5BAgWQBBgWBGASQBGASAuAzQAuAyAMBHQAMBHgbA/QgPAkgbAcQAnApARA0QAQAwACBYQACA9gEAnQgEAngLAgIACATQADAcAAA2IADHNQAABFgEAmQgGA6gVArQgdA9g+AlQgYAOgZAJQARACAOAEQAggJAngDQAigCBLACQDgAGDZgNIAvgCIAMgGQAwgXBDgEQAqgDBOAFIFyAWQDrAOBuADQDAAHCYgGQBZgDAjACQAZABAWAEIZvAqQEKAHCFgDQBggCAqAEQAuAEAlANIAEgEQA1gvBDgNQAygKBFAJQAoAGBQAPQBiAQCyAFQEMAHD1gDQBQgBAnAEQA6AGAqATQAXgIAZgEQAggGBBgFQDAgNBfgFQCfgJCAABQAsAAAfACQAWgFAagCQAcgDA5AAIGPAAQA+gBAiAEQA1AFAnARIAUAKIAOgJQAsgYA/gGQAngEBKADIDBAIQEiAMCegCQA3gBAZACQAtADAhAMIAGACQAMgJANgHQAwgaA1ABQAdAAA4AKQArAEBNgFQCzgLBaADQAqABBSAGQAxADAZAEQAbAEAWAIIAagGQAmgHBKgEQEcgODDgPQEEgUDagbQBMgKAmgBQBAgBAvATQAvASAjAmQAjAnAMAwQANAxgMAyQgNAzgjAkQgqAshKAUQgxANhYAHIvbBPQhKAGgogCQghgDgcgHQgfANglAKQgiAJg1AJQiqAeiDgGQikgGh9g8QgcgOgXgPQguAghGAMQg2AJhngEIpigWQg9gCgfgEQgYgEgUgGQghAkgtATQgmARg1AFQggAEg/AAImCAAQgtAAgfgCQghAJgoADQgYABhLgBQiYgDiTAOIhvALQhCAHgtACIgnABQgpAAghgEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:388.8934,y:359.8444}).wait(1).to({graphics:mask_1_graphics_1,x:389.9136,y:377.9525}).wait(1).to({graphics:mask_1_graphics_2,x:388.7386,y:404.4846}).wait(1).to({graphics:mask_1_graphics_3,x:388.7386,y:423.559}).wait(1).to({graphics:mask_1_graphics_4,x:381.3539,y:446.32}).wait(1).to({graphics:mask_1_graphics_5,x:423.4985,y:446.32}).wait(1).to({graphics:mask_1_graphics_6,x:490.1599,y:446.32}).wait(1).to({graphics:mask_1_graphics_7,x:601.0268,y:449.0568}).wait(1).to({graphics:mask_1_graphics_8,x:668.7591,y:449.0568}).wait(1).to({graphics:mask_1_graphics_9,x:713.8414,y:449.3424}).wait(1).to({graphics:mask_1_graphics_10,x:744.4764,y:449.3424}).wait(1).to({graphics:mask_1_graphics_11,x:796.7214,y:449.3424}).wait(1).to({graphics:mask_1_graphics_12,x:839.9273,y:449.3424}).wait(1).to({graphics:mask_1_graphics_13,x:905.5078,y:449.3424}).wait(14));

	// Layer_6
	this.instance_1 = new lib.Bitmap();
	this.instance_1.setTransform(294,289);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(81,255,237,0)").s().p("EhwYBGMMAAAiMXMDgxAAAMAAACMXg");
	this.shape.setTransform(719.325,449.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1438.7,898.4);


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
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(368.55,121.15,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// טקסט
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(199.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// !
	this.instance_3 = new lib.Symbol6copy("synched",0,false);
	this.instance_3.setTransform(-102.15,321.45,1.25,1.25,0,0,0,719.3,449.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// Layer_7
	this.instance_4 = new lib.textt();
	this.instance_4.setTransform(148.2,-211.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// Layer_7 copy
	this.instance_5 = new lib.texttcopy();
	this.instance_5.setTransform(148.2,-151.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// Layer_8 copy
	this.instance_6 = new lib.texttcopy2();
	this.instance_6.setTransform(148.2,-71.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// Layer_8 copy 2
	this.instance_7 = new lib.texttcopy3();
	this.instance_7.setTransform(148.2,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// Layer_8
	this.instance_8 = new lib.texttcopy4();
	this.instance_8.setTransform(148.2,118.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1001.3,-362,2519.8999999999996,1245);


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
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(1));

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(368.55,121.15,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58));

	// טקסט
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(209.6,-315.95,1,1,0,0,0,149.2,46.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:199.6,alpha:1},11,cjs.Ease.get(1)).wait(47));

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58));

	// Layer_7
	this.instance_3 = new lib.textt();
	this.instance_3.setTransform(168.2,-211.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({x:148.2,alpha:1},15,cjs.Ease.get(1)).wait(32));

	// Layer_7 copy
	this.instance_4 = new lib.texttcopy();
	this.instance_4.setTransform(168.2,-151.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({x:148.2,alpha:1},15,cjs.Ease.get(1)).wait(24));

	// Layer_8 copy
	this.instance_5 = new lib.texttcopy2();
	this.instance_5.setTransform(148.2,-91.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({y:-71.1,alpha:1},17,cjs.Ease.get(1)).wait(7));

	// Layer_8 copy 2
	this.instance_6 = new lib.texttcopy3();
	this.instance_6.setTransform(148.2,3.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({y:23.9,alpha:1},17,cjs.Ease.get(1)).wait(4));

	// Layer_8
	this.instance_7 = new lib.texttcopy4();
	this.instance_7.setTransform(148.2,98.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({y:118.9,alpha:1},17,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563.6,-362,2082.2,902.7);


// stage content:
(lib._330 = function(mode,startPosition,loop,reversed) {
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
	this.instance_2.setTransform(1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(352.2,446.5,1799.8999999999999,795);
// library properties:
lib.properties = {
	id: 'CED2E0BB73D0FB4A94F98B57753898E7',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap.png?1636533324047", id:"Bitmap"},
		{src:"images/_10copy.png?1636533324047", id:"_10copy"},
		{src:"images/BG.jpg?1636533324047", id:"BG"},
		{src:"images/bullet.png?1636533324047", id:"bullet"}
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