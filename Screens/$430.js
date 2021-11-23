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



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,900);


(lib.stripe = function() {
	this.initialize(img.stripe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,841,839);// helper functions:

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


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



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
	this.shape.graphics.f("#FFFFFF").s().p("AhDChQgigUgTglQgTgkgBgwIAAgbQAAgTAFgVQAGgUAJgRQAKgSALgJIAEgDIgBgBIgYAFIgcAHIgOg3QAjgKAtgGQAtgGAlAAQA0AAAkATQAlATATAlQATAkAAA0IAAAlQAAAwgTAkQgTAlgiAUQgjAUgtAAQgsAAgigUgAgthbQgUAcgBAzIAAAgQAAAeAKAWQAKAXARAMQASANAWAAQAXAAASgNQASgMAKgXQAJgWAAgeIAAgkQAAgxgVgbQgVgbgmAAQgiAAgUAcg");
	this.shape.setTransform(496.425,47.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALCuIAAkhIibAAIAAg6IEhAAIAAA6Ig7AAIAAEhg");
	this.shape_1.setTransform(461.3,47.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATBNIAAiZIA0AAIAAAoIgLBxgAhGBNIAAiZIA1AAIAAAoIgLBxg");
	this.shape_2.setTransform(435.525,27.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhICsQghgFgdgKIAOg3QAbAIAcAEQAbAFAVgBQAtAAAXgVQAYgVAAgpIAAiZIh4AAQgHARgEAUQgFAUAAAUIAAAXQANADAZAAIAAA2IgaACQgZgBgVgFQgUgEgSgLIgBgmQAAgdAHgaQAGgbAMgSIgnAAIAAg7IEpAAIAADJQAAAzgUAjQgVAiglARQgjARguAAQgdAAghgGg");
	this.shape_3.setTransform(405.7,47.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCCuIAAjdQAAgjgRgQQgRgRgjAAIiHAAIAAg6ICLAAQBDAAAkAhQAkAhAAA/IAADagAiLCuIAAh3QAAgdAFgQQAFgPAIgNIA8AAQgGAYAAAqIAAB+g");
	this.shape_4.setTransform(353.675,47.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuCuIAAjrQAAgZgOgOQgPgPgaAAIhuAAIAAg6IBzAAQAlAAAdAOQAdAOAPAaQAPAaAAAlIAADmg");
	this.shape_5.setTransform(319.2,47.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah/CjIALg4QAuAMAjAAQAsgBAXgVQAWgUgBgpIAAiaIinAAIAAg6IDyAAIAADGQAABOgpAnQgpAmhJAAQgsAAg4gOg");
	this.shape_6.setTransform(287.9,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiSCuIAAg6ICxAAIAAijQAAgjgQgQQgQgRgkAAIhaAAIAAg6IBeAAQBDAAAkAhQAjAhAAA/IAACdIAqAFIAAA4g");
	this.shape_7.setTransform(257.175,47.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABCCuIAAjdQAAgjgRgQQgRgRgjAAIiHAAIAAg6ICLAAQBDAAAkAhQAkAhAAA/IAADagAiLCuIAAh3QAAgdAFgQQAFgPAIgNIA8AAQgGAYAAAqIAAB+g");
	this.shape_8.setTransform(222.675,47.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(202.3,0,316.09999999999997,92.1), null);


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

	// Layer_2
	this.instance = new lib.stripe();
	this.instance.setTransform(0,0,0.975,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,820,839), null);


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
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// image
	this.instance = new lib.Symbol4();
	this.instance.setTransform(398.55,121.15,1,1,0,0,0,410,419.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// טקסט
	this.instance_1 = new lib.Symbol5copy();
	this.instance_1.setTransform(209.6,-315.95,1,1,0,0,0,149.2,46.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:199.6,alpha:1},11,cjs.Ease.get(1)).wait(1));

	// טקסט
	this.instance_2 = new lib.Symbol5();
	this.instance_2.setTransform(639.6,-315.95,1,1,0,0,0,149.2,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

	// video
	this.instance_3 = new lib.an_Video({'id': 'instance_3', 'src':'videos/תפעול-%20הרכבה-.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_3.setTransform(88.25,133.15,3.4001,2.5499,0,0,0,200,150);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-593.4,-362,1401.9,902.7);


// stage content:
(lib._430 = function(mode,startPosition,loop,reversed) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// content
	this.instance = new lib.frame1copy();
	this.instance.setTransform(633.5,358.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(720,446.5,722,453.5);
// library properties:
lib.properties = {
	id: 'CED2E0BB73D0FB4A94F98B57753898E7',
	width: 1440,
	height: 900,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG.png?1636533377248", id:"BG"},
		{src:"images/stripe.png?1636533377248", id:"stripe"},
		{src:"components/lib/jquery-3.4.1.min.js?1636533377248", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1636533377248", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1636533377248", id:"an.Video"}
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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