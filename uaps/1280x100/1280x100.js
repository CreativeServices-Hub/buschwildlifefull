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



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,100);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,100);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,491,463);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,213);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,701);


(lib.Bitmap9copy = function() {
	this.initialize(img.Bitmap9copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,65);


(lib.panther = function() {
	this.initialize(img.panther);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2535,2028);// helper functions:

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

	// Layer_1
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(5,13,1.0047,1.0045);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(5,13,95,84.5), null);


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
	this.text = new cjs.Text("Kick Off Your Florida Adventure", "bold 28px 'MerriweatherUltraBold'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 570;
	this.text.parent = this;
	this.text.setTransform(71.05,21.45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(69.1,19.5,574.1,42.5), null);


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
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(0,0,1.005,1.0048);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,98,98.5), null);


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
	this.instance = new lib.Bitmap9copy();
	this.instance.setTransform(21,-15,1.1764,1.175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(21,-15,149,40.5), null);


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
	this.text = new cjs.Text("Go Wild", "bold 28px 'MerriweatherUltraBold'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 122;
	this.text.parent = this;
	this.text.setTransform(-79.25,6.55,1.3492,1.3492);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-81.9,3.9,170,43.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Between Matches...", "bold 28px 'MerriweatherUltraBold'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 305;
	this.text.parent = this;
	this.text.setTransform(-45,-7.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-47,-9.9,309,32), null);


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
	this.instance = new lib.panther();
	this.instance.setTransform(-33,-25,0.8863,0.8863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-33,-25,161.8,129.4), null);


// stage content:
(lib.RECOVER_1280x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.instance = new lib.Symbol5();
	this.instance.setTransform(1204.1,53.6,0.0562,0.0562,0,0,0,87.1,32.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161).to({_off:false},0).to({regX:87,regY:32.5,scaleX:0.8506,scaleY:0.8506,x:1194.05,y:73.55},26,cjs.Ease.backOut).wait(53));

	// Layer_11
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(714,-16,1,1,0,0,0,272,15.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({y:30.5,alpha:1},27,cjs.Ease.get(1)).wait(128));

	// Layer_12
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(1068.95,137.45,1,1,0,0,0,53,47.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(122).to({_off:false},0).to({y:49.1},27,cjs.Ease.get(1)).wait(91));

	// Layer_10
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(336.5,49.2,1,1,0,0,0,49,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({x:322.85},0).to({rotation:720,x:1331.95},43).wait(184));

	// Layer_5
	this.instance_4 = new lib.Symbol2();
	this.instance_4.setTransform(628.3,47.5,1,1,0,0,0,75.5,14.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({x:627.55,y:60.5,alpha:1},16,cjs.Ease.backOut).wait(44).to({y:130.5},5).wait(155));

	// Layer_7
	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(849.9,55.6,0.0309,0.0309,-128.5318,0,0,7.1,22.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).wait(1).to({regX:3.1,regY:25.8,scaleX:0.2966,scaleY:0.2966,rotation:-93.293,x:860.55,y:56.55},0).wait(1).to({scaleX:0.517,scaleY:0.517,rotation:-64.0663,x:868.1,y:57.95},0).wait(1).to({scaleX:0.686,scaleY:0.686,rotation:-41.6487,x:873,y:58.85},0).wait(1).to({scaleX:0.8102,scaleY:0.8102,rotation:-25.1764,x:876.2,y:59.15},0).wait(1).to({scaleX:0.8996,scaleY:0.8996,rotation:-13.3163,x:878.35,y:59.05},0).wait(1).to({scaleX:0.9631,scaleY:0.9631,rotation:-4.9015,x:879.8,y:58.8},0).wait(1).to({scaleX:1.0071,scaleY:1.0071,rotation:0.941,x:880.85,y:58.6},0).wait(1).to({scaleX:1.0365,scaleY:1.0365,rotation:4.8353,x:881.6,y:58.35},0).wait(1).to({scaleX:1.0545,scaleY:1.0545,rotation:7.2264,x:882.05,y:58.2},0).wait(1).to({scaleX:1.0636,scaleY:1.0636,rotation:8.4355,x:882.2,y:58.15},0).wait(1).to({scaleX:1.0656,scaleY:1.0656,rotation:8.6986,x:882.25},0).wait(1).to({scaleX:1.0618,scaleY:1.0618,rotation:8.1926,x:882.2,y:58.1},0).wait(1).to({scaleX:1.0532,scaleY:1.0532,rotation:7.0524,x:881.95,y:58.2},0).wait(1).to({scaleX:1.0406,scaleY:1.0406,rotation:5.3826,x:881.7,y:58.35},0).wait(1).to({scaleX:1.0246,scaleY:1.0246,rotation:3.266,x:881.3,y:58.45},0).wait(1).to({regX:7.2,regY:22.2,scaleX:1.0058,scaleY:1.0058,rotation:0.7684,x:885,y:55.05},0).wait(24).to({rotation:0.7684},0).to({y:-18.95},5).wait(155));

	// Layer_2
	this.instance_6 = new lib.Bitmap12();
	this.instance_6.setTransform(12,2,0.9991,0.9989);

	this.instance_7 = new lib.Bitmap11();
	this.instance_7.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(240));

	// Layer_3
	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(326,64.5,1,1,0,0,0,216,64.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.1205,scaleY:1.1205,x:405.05,y:63.5,alpha:1},21,cjs.Ease.get(1)).wait(219));

	// Layer_1
	this.instance_9 = new lib.Bitmap10();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,11.4,741,176.5);
// library properties:
lib.properties = {
	id: 'CC5BD5723D68444BA80984F8AA6EC4D6',
	width: 1280,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap16.png", id:"Bitmap16"},
		{src:"images/Bitmap9copy.png", id:"Bitmap9copy"},
		{src:"images/panther.png", id:"panther"}
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
an.compositions['CC5BD5723D68444BA80984F8AA6EC4D6'] = {
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