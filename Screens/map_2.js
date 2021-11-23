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


(lib._5copy3 = function() {
	this.initialize(img._5copy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,28);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.pic_glock = function() {
	this.initialize(img.pic_glock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1252,749);// helper functions:

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


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0AsIAqgoIA9A5IDYjQIAqAnIkDEAg");
	this.shape.setTransform(14.8,17.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,0,36.3,31.8);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._5copy3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,63,28), null);


(lib.Symbol7copy8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQAAgRAEgSQAFgSAIgMIgtAAIAAgsIB/AAQAzAAAbAZQAaAZAAAxIAAChIg4AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgDARAAAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape.setTransform(115.65,46.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2CBQgZgEgVgHIAKgpQAVAGAVADQAUADAQAAQAhgBARgPQASgQAAgeIAAhzIhZAAQgGAMgDAPQgDAQAAAPIAAAQQAJADATAAIAAApIgUAAQgTAAgPgDQgPgEgNgIIgBgcQAAgVAFgVQAFgUAJgNIgeAAIAAgsIDfAAIAACWQAAAmgQAaQgPAagbANQgbAMgiAAQgWAAgZgEg");
	this.shape_1.setTransform(87.825,46.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtBzIAMgpQAkAOAcADQgHgIgGgLQgGgKgDgMIgqi3IA4AAIApC8QADAUAHANQAWgHAMgRQALgQAAgaIAAibIA3AAIAACYQABAlgQAaQgPAZgbANQgcAOgjAAQgxAAgygTg");
	this.shape_2.setTransform(58.8,46.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_3.setTransform(38.55,46.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguCpIBZjZIiRAAIAAh4IA4AAIAABMICVAAIAAAkIhaDhg");
	this.shape_4.setTransform(20.625,42.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQAAgRAEgSQAFgSAIgMIgtAAIAAgsIB/AAQAzAAAbAZQAaAZAAAxIAAChIg4AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgDARAAAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape_5.setTransform(115.65,46.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51FFED").s().p("Ag2CBQgZgEgVgHIAKgpQAVAGAVADQAUADAQAAQAhgBARgPQASgQAAgeIAAhzIhZAAQgGAMgDAPQgDAQAAAPIAAAQQAJADATAAIAAApIgUAAQgTAAgPgDQgPgEgNgIIgBgcQAAgVAFgVQAFgUAJgNIgeAAIAAgsIDfAAIAACWQAAAmgQAaQgPAagbANQgbAMgiAAQgWAAgZgEg");
	this.shape_6.setTransform(87.825,46.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51FFED").s().p("AhtBzIAMgpQAkAOAcADQgHgIgGgLQgGgKgDgMIgqi3IA4AAIApC8QADAUAHANQAWgHAMgRQALgQAAgaIAAibIA3AAIAACYQABAlgQAaQgPAZgbANQgcAOgjAAQgxAAgygTg");
	this.shape_7.setTransform(58.8,46.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_8.setTransform(38.55,46.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51FFED").s().p("AguCpIBZjZIiRAAIAAh4IA4AAIAABMICVAAIAAAkIhaDhg");
	this.shape_9.setTransform(20.625,42.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51FFED").s().p("Au1FeIAAq7IdrAAIAAK7g");
	this.shape_10.setTransform(43.025,47.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,10,190.1,72.2);


(lib.Symbol7copy4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgyB5QgagPgOgbQgOgcAAgkIAAgUQgBgOAEgQQAFgQAGgMQAIgNAIgHIADgCIgBgCIgSAFIgVAFIgKgpQAagHAhgFQAjgFAbAAQAnAAAcAOQAbAPAOAbQAOAcAAAnIAAAbQAAAkgOAcQgOAbgaAPQgaAPgiAAQggAAgagPgAghhEQgQAVAAAmIAAAYQAAAWAIARQAGARAOAJQANAKAQgBQASABANgKQANgJAIgRQAHgRAAgWIAAgaQAAgmgQgUQgQgVgcAAQgZAAgPAWg");
	this.shape.setTransform(116.45,46.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFBKIAAhnIgsAAIAAgsIBjAAIAACTg");
	this.shape_1.setTransform(94,40.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhfB6IAJgpQAiAIAaAAQAhAAARgQQAQgQAAgeIAAhzIh9AAIAAgsIC1AAIAACUQAAA7gfAdQgfAdg2AAQghAAgqgLg");
	this.shape_2.setTransform(74.525,46.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_3.setTransform(55.45,46.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrCDIAAkFIDXAAIAAEFgAg0BXIBoAAIAAitIhoAAg");
	this.shape_4.setTransform(34.8,46.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51FFED").s().p("AgyB5QgagPgOgbQgOgcAAgkIAAgUQgBgOAEgQQAFgQAGgMQAIgNAIgHIADgCIgBgCIgSAFIgVAFIgKgpQAagHAhgFQAjgFAbAAQAnAAAcAOQAbAPAOAbQAOAcAAAnIAAAbQAAAkgOAcQgOAbgaAPQgaAPgiAAQggAAgagPgAghhEQgQAVAAAmIAAAYQAAAWAIARQAGARAOAJQANAKAQgBQASABANgKQANgJAIgRQAHgRAAgWIAAgaQAAgmgQgUQgQgVgcAAQgZAAgPAWg");
	this.shape_5.setTransform(116.45,46.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51FFED").s().p("AgFBKIAAhnIgsAAIAAgsIBjAAIAACTg");
	this.shape_6.setTransform(94,40.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51FFED").s().p("AhfB6IAJgpQAiAIAaAAQAhAAARgQQAQgQAAgeIAAhzIh9AAIAAgsIC1AAIAACUQAAA7gfAdQgfAdg2AAQghAAgqgLg");
	this.shape_7.setTransform(74.525,46.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_8.setTransform(55.45,46.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51FFED").s().p("AhrCDIAAkFIDXAAIAAEFgAg0BXIBoAAIAAitIhoAAg");
	this.shape_9.setTransform(34.8,46.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51FFED").s().p("AqEFeIAAq7IUJAAIAAK7g");
	this.shape_10.setTransform(73.525,47.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,10,129.1,72.2);


(lib.Symbol7copy3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAyCDIAAimQAAgagNgMQgNgNgaAAIhlAAIAAgsIBoAAQAzAAAaAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape.setTransform(117.8,46.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAEgSAJgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgDARAAAQIAABQQAAAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_1.setTransform(88.35,46.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOA6IAAhzIAnAAIAAAeIgHBVgAg0A6IAAhzIAnAAIAAAeIgHBVg");
	this.shape_2.setTransform(68.35,31.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAEgSAJgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgDARAAAQIAABQQAAAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_3.setTransform(45.15,46.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5AWIAAgrIBzAAIAAArg");
	this.shape_4.setTransform(13.45,45.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAxCDIAAimQAAgagMgMQgNgNgaAAIhlAAIAAgsIBoAAQAzAAAaAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape_5.setTransform(-18.9,46.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhfB6IAJgpQAiAIAaAAQAhAAARgQQAQgQAAgeIAAhzIh9AAIAAgsIC1AAIAACUQAAA7gfAdQgfAdg2AAQghAAgqgLg");
	this.shape_6.setTransform(-45.875,46.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiCDIAAiwQAAgTgLgLQgLgLgSAAIhTAAIAAgsIBVAAQAdAAAWALQAVAKALAUQAMAUAAAbIAACtg");
	this.shape_7.setTransform(-69.2,46.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAxCDIAAimQAAgagMgMQgNgNgaAAIhmAAIAAgsIBpAAQAyAAAbAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape_8.setTransform(-92.95,46.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjAuQALgSAGgPQAGgOAAgUIAAgpIAwAAIgBAnQAAAXgLAXQgMAYgRAPg");
	this.shape_9.setTransform(-112.425,60.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAFgSAIgMIgtAAIAAgsIB/AAQA0AAAaAZQAZAZAAAxIAAChIg3AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgEARABAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape_10.setTransform(-143.65,46.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFBKIAAhnIgsAAIAAgsIBjAAIAACTg");
	this.shape_11.setTransform(-164.95,40.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA9CDIhqiWQgHAHgEAJQgDAIgBANIAABxIg2AAIAAhbQAAgjAMgUQAMgWAXgMIg5hRIA/AAIBGBlIA1hlIA/AAIhRCVIBPBwg");
	this.shape_12.setTransform(-185.45,46.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_13.setTransform(-208.65,46.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAjCDIAAiwQgBgTgKgLQgLgLgUAAIhSAAIAAgsIBVAAQAdAAAVALQAWAKALAUQALAUAAAbIAACtg");
	this.shape_14.setTransform(-226.85,46.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgjAuQALgSAGgPQAGgOAAgUIAAgpIAwAAIgBAnQAAAXgLAXQgMAYgRAPg");
	this.shape_15.setTransform(-242.775,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJgBgTIAAhIQAAgRAFgSQAFgSAIgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgEARAAAQIAABQQABAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_16.setTransform(-274,46.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhfB6IAJgpQAiAIAaAAQAhAAARgQQAQgQAAgeIAAhzIh9AAIAAgsIC1AAIAACUQAAA7gfAdQgfAdg2AAQghAAgqgLg");
	this.shape_17.setTransform(-300.175,46.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_18.setTransform(-319.25,46.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkCEIgYgFIABgqQAPADARAAQARAAAIgKQAHgJAAgUIAAiJIgvAAIAAgsIBnAAIAAC6QAAAmgUAUQgUAVgiAAQgMAAgLgBg");
	this.shape_19.setTransform(-335.125,46.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_20.setTransform(-350.4,46.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAFgSAIgMIgtAAIAAgsIB/AAQA0AAAaAZQAZAZAAAxIAAChIg3AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgEARABAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape_21.setTransform(-372.25,46.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#51FFED").s().p("AAyCDIAAimQAAgagNgMQgNgNgaAAIhlAAIAAgsIBoAAQAzAAAaAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape_22.setTransform(117.8,46.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAEgSAJgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgDARAAAQIAABQQAAAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_23.setTransform(88.35,46.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#51FFED").s().p("AAOA6IAAhzIAnAAIAAAeIgHBVgAg0A6IAAhzIAnAAIAAAeIgHBVg");
	this.shape_24.setTransform(68.35,31.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAEgSAJgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgDARAAAQIAABQQAAAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_25.setTransform(45.15,46.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#51FFED").s().p("Ag5AWIAAgrIBzAAIAAArg");
	this.shape_26.setTransform(13.45,45.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#51FFED").s().p("AAxCDIAAimQAAgagMgMQgNgNgaAAIhlAAIAAgsIBoAAQAzAAAaAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape_27.setTransform(-18.9,46.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#51FFED").s().p("AhfB6IAJgpQAiAIAaAAQAhAAARgQQAQgQAAgeIAAhzIh9AAIAAgsIC1AAIAACUQAAA7gfAdQgfAdg2AAQghAAgqgLg");
	this.shape_28.setTransform(-45.875,46.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#51FFED").s().p("AAiCDIAAiwQAAgTgLgLQgLgLgSAAIhTAAIAAgsIBVAAQAdAAAWALQAVAKALAUQAMAUAAAbIAACtg");
	this.shape_29.setTransform(-69.2,46.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#51FFED").s().p("AAxCDIAAimQAAgagMgMQgNgNgaAAIhmAAIAAgsIBpAAQAyAAAbAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape_30.setTransform(-92.95,46.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#51FFED").s().p("AgjAuQALgSAGgPQAGgOAAgUIAAgpIAwAAIgBAnQAAAXgLAXQgMAYgRAPg");
	this.shape_31.setTransform(-112.425,60.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAFgSAIgMIgtAAIAAgsIB/AAQA0AAAaAZQAZAZAAAxIAAChIg3AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgEARABAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape_32.setTransform(-143.65,46.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#51FFED").s().p("AgFBKIAAhnIgsAAIAAgsIBjAAIAACTg");
	this.shape_33.setTransform(-164.95,40.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#51FFED").s().p("AA9CDIhqiWQgHAHgEAJQgDAIgBANIAABxIg2AAIAAhbQAAgjAMgUQAMgWAXgMIg5hRIA/AAIBGBlIA1hlIA/AAIhRCVIBPBwg");
	this.shape_34.setTransform(-185.45,46.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_35.setTransform(-208.65,46.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#51FFED").s().p("AAjCDIAAiwQgBgTgKgLQgLgLgUAAIhSAAIAAgsIBVAAQAdAAAVALQAWAKALAUQALAUAAAbIAACtg");
	this.shape_36.setTransform(-226.85,46.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#51FFED").s().p("AgjAuQALgSAGgPQAGgOAAgUIAAgpIAwAAIgBAnQAAAXgLAXQgMAYgRAPg");
	this.shape_37.setTransform(-242.775,60.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJgBgTIAAhIQAAgRAFgSQAFgSAIgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgEARAAAQIAABQQABAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_38.setTransform(-274,46.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#51FFED").s().p("AhfB6IAJgpQAiAIAaAAQAhAAARgQQAQgQAAgeIAAhzIh9AAIAAgsIC1AAIAACUQAAA7gfAdQgfAdg2AAQghAAgqgLg");
	this.shape_39.setTransform(-300.175,46.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_40.setTransform(-319.25,46.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#51FFED").s().p("AgkCEIgYgFIABgqQAPADARAAQARAAAIgKQAHgJAAgUIAAiJIgvAAIAAgsIBnAAIAAC6QAAAmgUAUQgUAVgiAAQgMAAgLgBg");
	this.shape_41.setTransform(-335.125,46.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_42.setTransform(-350.4,46.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAFgSAIgMIgtAAIAAgsIB/AAQA0AAAaAZQAZAZAAAxIAAChIg3AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgEARABAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape_43.setTransform(-372.25,46.225);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#51FFED").s().p("EgquAFeIAAq7MBVdAAAIAAK7g");
	this.shape_44.setTransform(-135.45,47.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_44}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,10,547,72.2);


(lib.Symbol7copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAyCDIAAimQAAgagNgMQgNgNgaAAIhlAAIAAgsIBoAAQAzAAAaAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape.setTransform(117.8,46.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_1.setTransform(96.25,46.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjCDIAAiwQAAgTgMgLQgKgLgTAAIhTAAIAAgsIBVAAQAdAAAWALQAVAKALAUQAMAUAAAbIAACtg");
	this.shape_2.setTransform(78.05,46.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA9CDIhqiWQgHAHgEAJQgEAIAAANIAABxIg2AAIAAhbQAAgjAMgUQAMgWAYgMIg6hRIA/AAIBGBlIA1hlIA/AAIhRCVIBPBwg");
	this.shape_3.setTransform(53.6,46.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_4.setTransform(30.4,46.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQAAgRAEgSQAFgSAIgMIgtAAIAAgsIB/AAQAzAAAbAZQAaAZAAAxIAAChIg4AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgDARAAAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape_5.setTransform(8.55,46.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhtCDIAAgsICFAAIAAh6QAAgagNgMQgMgNgbAAIhDAAIAAgsIBGAAQAyAAAbAaQAbAYAAAvIAAB2IAfAEIAAAqg");
	this.shape_6.setTransform(-27.4,46.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4B5QgZgNgOgZQgNgZAAggIAAidIA3AAIAACiQAAASAHAOQAHANAMAIQAMAHAPAAQAQAAAMgHQAMgIAHgNQAHgOAAgSIAAhQQAAgTgJgKQgIgKgQAAQgMAAgPAGIgGgkQALgHANgEQAPgEAMAAQAWgBAPAKQAQAKAJASQAIASAAAZIAABPQAAAggNAZQgOAZgZANQgZAOggAAQgfAAgZgOg");
	this.shape_7.setTransform(-53.225,46.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFBKIAAhnIgsAAIAAgsIBjAAIAACTg");
	this.shape_8.setTransform(-76.4,40.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAxCDIAAilQAAgbgLgMQgMgNgYAAIgzAAIAADZIg3AAIAAkFIBpAAQBnAAABBkIAAChg");
	this.shape_9.setTransform(-96.175,46.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_10.setTransform(-118.4,46.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAEgSAJgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgDARAAAQIAABQQAAAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_11.setTransform(-140.25,46.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51FFED").s().p("AAyCDIAAimQAAgagNgMQgNgNgaAAIhlAAIAAgsIBoAAQAzAAAaAaQAbAYAAAvIAACkgAhoCDIAAhaQAAgVAEgNQAEgLAGgJIAtAAQgFASAAAfIAABfg");
	this.shape_12.setTransform(117.8,46.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_13.setTransform(96.25,46.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51FFED").s().p("AAjCDIAAiwQAAgTgMgLQgKgLgTAAIhTAAIAAgsIBVAAQAdAAAWALQAVAKALAUQAMAUAAAbIAACtg");
	this.shape_14.setTransform(78.05,46.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51FFED").s().p("AA9CDIhqiWQgHAHgEAJQgEAIAAANIAABxIg2AAIAAhbQAAgjAMgUQAMgWAYgMIg6hRIA/AAIBGBlIA1hlIA/AAIhRCVIBPBwg");
	this.shape_15.setTransform(53.6,46.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_16.setTransform(30.4,46.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAPABQASAAAIgJQAJgJAAgTIAAhIQAAgRAEgSQAFgSAIgMIgtAAIAAgsIB/AAQAzAAAbAZQAaAZAAAxIAAChIg4AAIAAilQAAgagMgNQgLgMgZAAIgiAAQgFAMgDAQQgDARAAAQIAABQQgBAmgSAUQgUAUgiAAQgOAAgRgCg");
	this.shape_17.setTransform(8.55,46.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51FFED").s().p("AhtCDIAAgsICFAAIAAh6QAAgagNgMQgMgNgbAAIhDAAIAAgsIBGAAQAyAAAbAaQAbAYAAAvIAAB2IAfAEIAAAqg");
	this.shape_18.setTransform(-27.4,46.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51FFED").s().p("Ag4B5QgZgNgOgZQgNgZAAggIAAidIA3AAIAACiQAAASAHAOQAHANAMAIQAMAHAPAAQAQAAAMgHQAMgIAHgNQAHgOAAgSIAAhQQAAgTgJgKQgIgKgQAAQgMAAgPAGIgGgkQALgHANgEQAPgEAMAAQAWgBAPAKQAQAKAJASQAIASAAAZIAABPQAAAggNAZQgOAZgZANQgZAOggAAQgfAAgZgOg");
	this.shape_19.setTransform(-53.225,46.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51FFED").s().p("AgFBKIAAhnIgsAAIAAgsIBjAAIAACTg");
	this.shape_20.setTransform(-76.4,40.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#51FFED").s().p("AAxCDIAAilQAAgbgLgMQgMgNgYAAIgzAAIAADZIg3AAIAAkFIBpAAQBnAAABBkIAAChg");
	this.shape_21.setTransform(-96.175,46.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_22.setTransform(-118.4,46.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#51FFED").s().p("Ah+CCIAAgsIAQABQARAAAIgJQAJgJAAgTIAAhIQgBgRAFgSQAEgSAJgMIgtAAIAAgsIB/AAQAzAAAaAZQAaAZAAAxIAAChIg3AAIAAilQAAgagLgNQgMgMgYAAIgjAAQgFAMgDAQQgDARAAAQIAABQQAAAmgUAUQgSAUgkAAQgNAAgRgCg");
	this.shape_23.setTransform(-140.25,46.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#51FFED").s().p("A3CFeIAAq7MAuFAAAIAAK7g");
	this.shape_24.setTransform(-9.45,47.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.9,10,295,72.2);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAHCFIAAgrIA3AAIAAhyQAAgegNgRQgNgQgYAAQgTAAgMAPQgMAQgDAcIgSChIg3AAIASiaQADgSAHgQQAHgQAKgJIAEgDIgBgBIgWAGIgYAGIgMgoQAagKAhgFQAhgGAbABQA5AAAdAdQAeAdAAA5IAACWg");
	this.shape.setTransform(116.525,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhtCDIAAgsICFAAIAAh6QAAgagNgMQgMgNgbAAIhDAAIAAgsIBGAAQAyAAAbAaQAbAYAAAvIAAB2IAfAEIAAAqg");
	this.shape_1.setTransform(90.25,46.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_2.setTransform(70.1,46.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA8CDIhpiWQgHAHgEAJQgDAIgBANIAABxIg2AAIAAhbQAAgjAMgUQALgWAYgMIg4hRIA+AAIBGBlIA1hlIA/AAIhRCVIBPBwg");
	this.shape_3.setTransform(49.7,46.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51FFED").s().p("AAHCFIAAgrIA3AAIAAhyQAAgegNgRQgNgQgYAAQgTAAgMAPQgMAQgDAcIgSChIg3AAIASiaQADgSAHgQQAHgQAKgJIAEgDIgBgBIgWAGIgYAGIgMgoQAagKAhgFQAhgGAbABQA5AAAdAdQAeAdAAA5IAACWg");
	this.shape_4.setTransform(116.525,45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51FFED").s().p("AhtCDIAAgsICFAAIAAh6QAAgagNgMQgMgNgbAAIhDAAIAAgsIBGAAQAyAAAbAaQAbAYAAAvIAAB2IAfAEIAAAqg");
	this.shape_5.setTransform(90.25,46.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51FFED").s().p("AgOCDIAAjZIgaAAIAAgsIBRAAIAAEFg");
	this.shape_6.setTransform(70.1,46.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51FFED").s().p("AA8CDIhpiWQgHAHgEAJQgDAIgBANIAABxIg2AAIAAhbQAAgjAMgUQALgWAYgMIg4hRIA+AAIBGBlIA1hlIA/AAIhRCVIBPBwg");
	this.shape_7.setTransform(49.7,46.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51FFED").s().p("AqYFeIAAq7IUxAAIAAK7g");
	this.shape_8.setTransform(71.525,47.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,10,133.1,72.2);


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
	this.shape_1.graphics.f("#51FFED").s().p("AhPCuQglgGgegLIARhFQAdAHAdAFQAdAFAVAAQApgBAUgSQAWgSgBglIAAiIIhkAAQgGARgDAQQgCAPAAAQIAAARQAOADAQgBIAAA+QgTADgSABQgYgBgXgFQgWgGgQgKIAAgeQgBgdAGgZQAGgaAKgRIgjAAIAAhKIE5AAIAADFQAAA4gWAjQgXAlgmARQgnARgxAAQgeAAgjgGg");
	this.shape_1.setTransform(235.9,47.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51FFED").s().p("AisCvIAAhKIASABQAqAAABgsIAAhTQAAgSAEgXQAGgWAJgQIg2AAIAAhKICzAAQBFAAAkAiQAkAiAABCIAADZIhgAAIAAjiQAAgzgsAAIgtAAIgGAkQgCASAAARIAABiQAAAkgMAZQgNAagZANQgYAOgiAAQgUAAgZgEg");
	this.shape_2.setTransform(195.1,47.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51FFED").s().p("AhxCpQg1gLgvgXIAAk8IBcAAIAAEJQAYALAdAGQAdAGAYAAQA/AAAlgaQAlgbAAg3IAAi0IBcAAIAAC+QAAA4geAnQgeAngzATQgzAUg/AAQgxgBg1gMgAg6A5QAFgKADgWQADgUAAgYIAAiiIBbAAIAACOQAAAfgHAYQgHAbgLAOg");
	this.shape_3.setTransform(136.325,47.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51FFED").s().p("AgTBlIAAh+Ig3AAIAAhLICVAAIAADJg");
	this.shape_4.setTransform(98.25,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51FFED").s().p("AicCaIAUhFQAqAQAkAFQgKgJgHgNQgJgNgDgOIg2jtIBgAAIAzD3QAEAUAHAOQAVgKAMgTQAMgTAAgcIAAjNIBfAAIAADJQAAAzgWAkQgVAkgnASQgnASgzABQhIAAhFgbg");
	this.shape_5.setTransform(68.9,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51FFED").s().p("AggCwIAAkVIgeAAIAAhKIB9AAIAAFfg");
	this.shape_6.setTransform(40.475,47.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51FFED").s().p("AAeCwIAAjnQAAgWgNgMQgNgMgXAAIhpAAIAAhKIBwAAQAqAAAfAPQAfAPARAcQAQAcAAAoIAADhg");
	this.shape_7.setTransform(15.675,47.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,298.4,92.1), null);


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


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pic_glock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,1252,749), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// V
	this.bar15_15 = new lib.Symbol9();
	this.bar15_15.name = "bar15_15";
	this.bar15_15.setTransform(1137.3,626.1,1,1,0,0,0,18.2,14.8);

	this.bar8_14 = new lib.Symbol9();
	this.bar8_14.name = "bar8_14";
	this.bar8_14.setTransform(1133.5,522.3,1,1,0,0,0,18.2,14.8);

	this.bar5_7 = new lib.Symbol9();
	this.bar5_7.name = "bar5_7";
	this.bar5_7.setTransform(972.8,418.8,1,1,0,0,0,18.2,14.8);

	this.bar2_4 = new lib.Symbol9();
	this.bar2_4.name = "bar2_4";
	this.bar2_4.setTransform(749.1,314.1,1,1,0,0,0,18.2,14.8);

	this.bar0_1 = new lib.Symbol9();
	this.bar0_1.name = "bar0_1";
	this.bar0_1.setTransform(1158.65,209.5,1,1,0,0,0,18.2,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bar0_1},{t:this.bar2_4},{t:this.bar5_7},{t:this.bar8_14},{t:this.bar15_15}]},80).wait(1));

	// כדור copy 5
	this.instance = new lib.Symbol8();
	this.instance.setTransform(1853.9,640.2,1,1,0,0,0,31.5,14);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({x:1352},14,cjs.Ease.get(1)).wait(6));

	// תפעול copy
	this.instance_1 = new lib.Symbol7copy4();
	this.instance_1.setTransform(1364.95,636.35,0.59,0.59,0,0,0,66.7,46.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Symbol7copy4(), 3);

	this.a15 = new lib.Symbol7copy4();
	this.a15.name = "a15";
	this.a15.setTransform(1228.15,636.4,1,1,0,0,0,66.7,46.1);
	new cjs.ButtonHelper(this.a15, 0, 1, 2, false, new lib.Symbol7copy4(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},73).to({state:[{t:this.a15}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1228.15,y:636.4,alpha:1},7,cjs.Ease.get(1)).wait(1));

	// כדור copy 3
	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(1853.9,535.2,1,1,0,0,0,31.5,14);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({x:1352},14,cjs.Ease.get(1)).wait(15));

	// תפעול
	this.instance_3 = new lib.Symbol7copy8();
	this.instance_3.setTransform(1364.95,531.35,0.59,0.59,0,0,0,66.7,46.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Symbol7copy8(), 3);

	this.a8 = new lib.Symbol7copy8();
	this.a8.name = "a8";
	this.a8.setTransform(1228.15,531.4,1,1,0,0,0,66.7,46.1);
	new cjs.ButtonHelper(this.a8, 0, 1, 2, false, new lib.Symbol7copy8(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},64).to({state:[{t:this.a8}]},7).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1228.15,y:531.4,alpha:1},7,cjs.Ease.get(1)).wait(10));

	// כדור copy 2
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(1853.9,429.6,1,1,0,0,0,31.5,14);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).to({x:1352},14,cjs.Ease.get(1)).wait(24));

	// הוראות
	this.instance_5 = new lib.Symbol7copy2();
	this.instance_5.setTransform(1364.95,426.75,0.59,0.59,0,0,0,66.7,46.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Symbol7copy2(), 3);

	this.a5 = new lib.Symbol7copy2();
	this.a5.name = "a5";
	this.a5.setTransform(1228.15,426.8,1,1,0,0,0,66.7,46.1);
	new cjs.ButtonHelper(this.a5, 0, 1, 2, false, new lib.Symbol7copy2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},55).to({state:[{t:this.a5}]},7).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1228.15,y:426.8,alpha:1},7,cjs.Ease.get(1)).wait(19));

	// כדור copy
	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(1853.9,325,1,1,0,0,0,31.5,14);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({x:1352},14,cjs.Ease.get(1)).wait(33));

	// הת"ת
	this.instance_7 = new lib.Symbol7copy3();
	this.instance_7.setTransform(1364.95,322.15,0.59,0.59,0,0,0,66.7,46.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Symbol7copy3(), 3);

	this.a2 = new lib.Symbol7copy3();
	this.a2.name = "a2";
	this.a2.setTransform(1228.15,322.2,1,1,0,0,0,66.7,46.1);
	new cjs.ButtonHelper(this.a2, 0, 1, 2, false, new lib.Symbol7copy3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},46).to({state:[{t:this.a2}]},7).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1228.15,y:322.2,alpha:1},7,cjs.Ease.get(1)).wait(28));

	// כדור
	this.instance_8 = new lib.Symbol8();
	this.instance_8.setTransform(1853.9,221.4,1,1,0,0,0,31.5,14);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).to({x:1352},14,cjs.Ease.get(1)).wait(42));

	// מבוא
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(1349.8,217.55,0.59,0.59,0,0,0,66.8,46.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.a0 = new lib.Symbol7();
	this.a0.name = "a0";
	this.a0.setTransform(1228.15,217.6,1,1,0,0,0,66.7,46.1);
	new cjs.ButtonHelper(this.a0, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},37).to({state:[{t:this.a0}]},7).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(37).to({_off:false},0).to({_off:true,regX:66.7,scaleX:1,scaleY:1,x:1228.15,y:217.6,alpha:1},7,cjs.Ease.get(1)).wait(37));

	// גלוק
	this.instance_10 = new lib.Symbol12();
	this.instance_10.setTransform(466,523.55,0.81,0.81,0,0,0,626,374.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({x:506,alpha:1},19,cjs.Ease.get(1)).wait(37));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(81,255,237,0)").s().p("EhwYBGMMAAAiMXMDgxAAAMAAACMXg");
	this.shape.setTransform(719.325,449.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,0,1926.4,898.4);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(404.5,483.1,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-457.4},11,cjs.Ease.get(1)).wait(13));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8KGlIAAtJMA4VAAAIAANJg");
	mask.setTransform(-229.6,47.925);

	// טקסט
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(-216.35,117.6,1,1,0,0,0,149.2,46.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({y:46},12,cjs.Ease.get(1)).wait(1));

	// כפתור\
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#55514B").s().p("AiEClIAPhFQAsAKAfAAQAqgBATgSQATgSAAgkIAAiJIidAAIAAhKID9AAIAADCQAABUgrAoQgrAnhOAAQgtAAg5gOg");
	this.shape.setTransform(157.7,47.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#55514B").s().p("AggCwIAAkVIgeAAIAAhKIB9AAIAAFfg");
	this.shape_1.setTransform(131.575,47.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#55514B").s().p("AitCvIAAhKIAUABQAqAAgBgsIAAhTQAAgSAGgXQAEgWAKgQIg2AAIAAhKICzAAQBGAAAjAiQAjAiAABCIAADZIhfAAIAAjiQAAgzgsAAIgtAAIgFAkQgDASAAARIAABiQAAAkgNAZQgNAagYANQgYAOgiAAQgUAAgagEg");
	this.shape_2.setTransform(101.9,47.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#55514B").s().p("AAeCwIAAjnQAAgWgNgMQgNgMgXAAIhpAAIAAhKIBwAAQAqAAAfAPQAfAPARAcQAQAcAAAoIAADhg");
	this.shape_3.setTransform(67.875,47.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#55514B").s().p("AisCvIAAhKIATABQApAAAAgsIAAhTQABgSAFgXQAEgWAKgQIg2AAIAAhKIC0AAQBFAAAjAiQAjAiAABCIAADZIheAAIgBjiQAAgzgsAAIgsAAIgGAkQgDASAAARIAABiQAAAkgNAZQgNAagYANQgYAOgiAAQgUAAgZgEg");
	this.shape_4.setTransform(33.15,47.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51FFED").s().p("Au6E7IAAp1Id1AAIAAJ1g");
	this.shape_5.setTransform(95.5,46.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-867.4,0,1681.9,902.6);


// stage content:
(lib.map_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// Save the root because do not recognize this in func
		var saveRoot = this;
		
		// Add Listner to stage
		canvas.addEventListener("click", moveFrame);
		
		function moveFrame(e)
		{
		                if(saveRoot.totalFrames - 1 != saveRoot.currentFrame)
		                {
		                                // Move one frame foword
		                                saveRoot.gotoAndStop(saveRoot.currentFrame + 1);
		                }
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// כותרת
	this.instance = new lib.Symbol3();
	this.instance.setTransform(1583.45,40.3,1,1,0,0,0,95.5,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// תוכן
	this.map_anim = new lib.Symbol6();
	this.map_anim.name = "map_anim";
	this.map_anim.setTransform(721.8,450.5,1,1,0,0,0,719.3,449.2);

	this.timeline.addTween(cjs.Tween.get(this.map_anim).wait(1));

	// BG
	this.instance_1 = new lib.BG();
	this.instance_1.setTransform(1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(721,444.2,1581.5,456.40000000000003);
// library properties:
lib.properties = {
	id: 'A94D4CD364C12641848DB172A074CA66',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_10copy.png?1636533456659", id:"_10copy"},
		{src:"images/_5copy3.png?1636533456659", id:"_5copy3"},
		{src:"images/BG.jpg?1636533456659", id:"BG"},
		{src:"images/pic_glock.png?1636533456659", id:"pic_glock"}
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
an.compositions['A94D4CD364C12641848DB172A074CA66'] = {
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