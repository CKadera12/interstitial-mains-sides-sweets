(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,0,194,187],[0,189,111,109]]},
		{name:"index_atlas_NP_", frames: [[322,257,74,74],[322,120,82,135],[322,0,113,118],[0,0,320,480]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.sixteenblue = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sixteengreens = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sixteenmeats = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sixteenpie = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sixteenspinach = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sixteentable = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.whiterectanglefadeone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgaKAmmMAAAhNLMA0VAAAMAAABNLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiterectanglefadeone, new cjs.Rectangle(-167.4,-246.9,335,494), null);


(lib.sixteentable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteentable();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteentable_1, new cjs.Rectangle(-160,-240,320,480), null);


(lib.sixteenspinach_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenspinach();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenspinach_1, new cjs.Rectangle(-55.5,-54.5,111,109), null);


(lib.sixteenpie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenpie();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenpie_1, new cjs.Rectangle(-56.5,-59,113,118), null);


(lib.sixteenmeats_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenmeats();
	this.instance.parent = this;
	this.instance.setTransform(-97,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenmeats_1, new cjs.Rectangle(-97,-93.5,194,187), null);


(lib.sixteengreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteengreens();
	this.instance.parent = this;
	this.instance.setTransform(-41,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteengreens_1, new cjs.Rectangle(-41,-67.5,82,135), null);


(lib.sixteenblue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sixteenblue();
	this.instance.parent = this;
	this.instance.setTransform(-37,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sixteenblue_1, new cjs.Rectangle(-37,-37,74,74), null);


(lib.seventeenvideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AnwCvQhJAAgzg0Qg0gyAAhJQAAhHA0g0QAzgzBJAAIPhAAQBJAAAzAzQA0A0AABHQAABJg0AyQgzA0hJAAg");
	this.shape.setTransform(0,-20,1.097,1.097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenvideo, new cjs.Rectangle(-73.7,-39.2,147.5,38.4), null);


(lib.seventeenrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AnwCvQhJAAgzg0Qg0gyAAhJQAAhHA0g0QAzgzBJAAIPhAAQBJAAAzAzQA0A0AABHQAABJg0AyQgzA0hJAAg");
	this.shape.setTransform(0,-20,1.097,1.097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenrectangle, new cjs.Rectangle(-73.7,-39.2,147.5,38.4), null);


(lib.ordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAlQgHgCgFgGQgGgFgDgHQgDgIAAgIQAAgJADgHQADgHAFgFQAGgGAHgDQAHgDAHAAQAJAAAHADQAGACAFAFQAFAGACAHQADAIAAAIIAAACIAAACIg7AAQAAAGACADQACAFADADQADADAFACQAEABAEABQAIAAAGgEQAFgDADgFIALAIQgGAIgIAFIgJACIgKABQgHAAgIgDgAAXgGQAAgEgCgEIgEgHIgGgEQgEgCgGAAIgIACIgHAEQgDADgCAEQgCAEAAAEIAsAAIAAAAg");
	this.shape.setTransform(39.5,-16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAnIAAg7IAAgIIAAgIIAOAAIAAAHIAAAGIABAAQADgHAFgEIAHgDIAHgBIAGAAIgBAPIgGgBQgGAAgEACIgGAFQgCADgBAFIgCAJIAAAng");
	this.shape_1.setTransform(32.7,-16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAlQgHgDgFgFQgGgFgDgIQgDgIAAgIQAAgIADgHQADgHAGgFQAFgGAHgDQAIgDAIAAQAIAAAIADQAHADAGAGQAFAFADAHQAEAHAAAIQAAAIgEAIQgDAIgFAFQgGAFgHADQgIADgIAAQgIAAgIgDgAgKgYQgEACgEAEQgDADgCAGQgBAFgBAEQABAGABAFQACAEADAEQAEAEAEACQAFACAFABQAGgBAEgCQAGgCACgEQAEgEACgEQABgFAAgGQAAgEgBgFQgCgGgEgDQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_2.setTransform(24.4,-16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEArQgFgGAAgMIAAgnIgPAAIAAgNIAPAAIAAgWIAOAAIAAAWIAUAAIAAANIgUAAIAAAmQAAAHACADQADADAFAAIAFAAIAEgCIABAMIgGABIgHABQgLABgFgHg");
	this.shape_3.setTransform(16.7,-17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAlQgJgEgGgGIAMgJQADAEAFADQAFADAGAAIAFAAIAFgCIADgEIABgFQAAgGgEgCQgFgDgKgCIgHgCIgHgDQgDgCgDgEQgBgEAAgEQgBgHADgEQACgEAFgDIAJgFQAFgBAFAAQAIAAAHAEQAHACAFAHIgKAJQgDgFgFgCQgFgDgFAAIgFABIgEACIgDACIgBAFQAAAFAEACQAFACAHACIAKADIAIAEIAGAGQABADAAAFQABAIgDAEQgDAFgEADQgEACgGACIgLABQgIAAgHgDg");
	this.shape_4.setTransform(10.6,-16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAmQgFgBgEgCQgEgDgDgEQgCgFAAgGIABgIQABgDADgDQAEgEAHgDQAIgDAJAAIASgBIAAgCQABgJgGgEQgEgEgJAAQgFAAgGADQgGACgDAEIgIgJQAFgGAIgDQAIgDAIAAQAIAAAHADQAFACAFADQADAFACAFQACAGAAAGIAAAgIABAIIAAAHIgOAAIgBgLIAAAAQgFAGgFAEQgHADgIAAIgJgCgAADACIgKACQgFABgDAEQgDADAAAEQAAADABADIAEAEIAFACIAGAAQAEAAAEgBQAEgCADgDQADgEACgEIAAgIIAAgEIgDAAg");
	this.shape_5.setTransform(-1.4,-16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA6QgHgDgFgFQgFgGgDgHQgCgHAAgJQAAgIACgHQADgHAFgFQAFgGAHgDQAHgCAJAAQAIAAAHADQAHAFAEAFIAAAAIAAg5IAPAAIAAB4IgOAAIAAgMIgBAAQgEAIgIADQgHAEgHAAQgJAAgHgEgAgKgDQgEADgDACQgEAEgBAFQgCAFAAAFIACAKQABAGAEADQADAFAEABQAFADAFAAQAGAAAFgDQAFgBADgFQADgDACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgDgCgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(-14.9,-18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAnIAAgpIgBgJIgCgHQgCgDgEgCQgDgCgFAAQgIAAgGAGQgFAIAAAKIAAAoIgQAAIAAg7IAAgIIAAgIIAOAAIABAGIAAAHIAAAAIAEgGIAGgEIAHgEIAHgBQAHAAAFADQAFACAEAEQAEAEACAGQABAFAAAHIAAAug");
	this.shape_7.setTransform(-24.3,-16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA4IAAhLIANAAIAABLgAgGgnQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_8.setTransform(-31,-18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA5IAAhxIBFAAIAAAOIg2AAIAAAkIAzAAIAAAMIgzAAIAAAzg");
	this.shape_9.setTransform(-37.2,-18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernow, new cjs.Rectangle(-44.2,-30.3,90.4,23.7), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.holidaymains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBkIgUgEIgHAEIgFACIgEgCIgEgCQgGgGgGgPQgGgQABgOQAAgGACgEQAEgEAFAAQAJAAAJAPIAIAMQAFAHAKAFQAKAEALABQAMgBAIgGQAHgHAAgKQAAgRgggPIgLgGQgdgPgLgLQgLgNAAgSQAAgZARgQQASgQAcAAIANAAIANADIAKgEIAGgBQAJABAJAPQAJAPAAAQQAAAIgCADQgEAEgFAAQgEAAgFgEQgEgDgGgKQgIgMgHgEQgIgFgLAAQgKAAgHAGQgHAHAAAKQABAIAGAIQAIAGAXAMIACABQA1AaABAgQAAAagVATQgVASgeAAg");
	this.shape.setTransform(128,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJB0QgKgDgHgGQgHgHgDgKQgCgLAAgdIAAhnIgSAAIgGgBIgBgFIAAgFQAAgGATgRIAIgHIAIgHQAUgRAIAAIAFABQACACAAADIAAAkIArAAQAFAAACACQACACAAAFIAAAFQgBAFgCACQgCACgEAAIgoAAIgCACIgCAEIAABfQAAAZAEAHQAFAGALAAQAGAAAKgDIANgDQAEAAADACQADADgBAEQABAKgRAKQgQAKgVAAQgLAAgJgDg");
	this.shape_1.setTransform(113,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BJQgcgdAAgpQAAgsAcgeQAdgdArAAQAlAAAWAVQAWAWAAAkQAAAMgEAEQgDADgPAAIhJAAQgHAAgDgDQgEgDAAgFQAAgFAEgDQADgDAHAAIAnAAIAKgBQACgCAAgEQAAgTgMgMQgNgNgRAAQgXAAgLAUQgLAUAAAcQAAAeAPAWQAQAWAXAAQAPAAAKgDQAJgEAKgGIAHgGQAJgHAGAAQAEAAADACQADADAAAEQAAAFgFAGQgFAHgIAHQgRAOgQAGQgPAGgTAAQgoAAgbgcg");
	this.shape_2.setTransform(95.9,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BJQgcgdAAgpQAAgsAcgeQAdgdArAAQAlAAAWAVQAWAWAAAkQAAAMgEAEQgDADgPAAIhJAAQgHAAgDgDQgEgDAAgFQAAgFAEgDQADgDAHAAIAnAAIAKgBQACgCAAgEQAAgTgMgMQgNgNgRAAQgXAAgLAUQgLAUAAAcQAAAeAPAWQAQAWAXAAQAPAAAKgDQAJgEAKgGIAHgGQAJgHAGAAQAEAAADACQADADAAAEQAAAFgFAGQgFAHgIAHQgRAOgQAGQgPAGgTAAQgoAAgbgcg");
	this.shape_3.setTransform(75.5,26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAVIgXg8QgLgbgJgFIgGgCQgLgFAAgHQAAgHAKgEQAKgDAeAAQAaAAAKADQAJAEAAAHIgBAGIgEAEIgGADQgIADAAAEIADANIAQAoIARAlQAEAJADAAQACAAAEgGIAIgRIAVgwQAHgTAAgGIgBgHIgFgEIgFgCQgJgEAAgGQAAgHAJgEQAIgDAYAAQAUAAAJADQAIAEAAAHQAAAHgKAEIgHACQgJAFgRAoIgEAJIgIASQgsBkgNgBQgNABgihPgAhxALIgGgMIgMghQgNgggIgFIgGgCQgLgFAAgHQAAgHAJgEQAKgDAfAAQAbAAAJADQAJAEAAAHIgBAGIgDAEIgHADQgIADAAAEIAFAQIAOAlIAQAkQAFAKADAAQAGgBAFgLIAGgOIAFgGQACgCAFAAQAEAAADACQADAEAAAEQAAAGgGAKQgUAsgJAQQgJAOgGgBQgOAAgmhYg");
	this.shape_4.setTransform(49.7,26.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvCMQgWgGgOgIQgHgEgFgQQgFgRAAgWQAAgJAEgFQADgEAGAAQAJAAAKASIAFAHQALAWAPAKQAPAJATABQAVgBAPgMQAOgNABgSQgBgbg4gZIgGgDQgwgTgPgRQgPgRAAgcQAAgjAZgVQAagXApAAIAWACIAbAGIAIgFIAGgCQAFAAAEADQADADAEAIQAHALAEANQADANABAJQAAAHgDADQgEAEgFAAQgKAAgKgOIgDgEQgKgPgNgGQgNgHgRAAQgVAAgLAKQgNAKAAASQAAAPAKALQAKALApARIAIAEQAjAOAPANQALAKAFANQAGANAAAQQAAAngbAWQgcAWgxAAQgXAAgVgEg");
	this.shape_5.setTransform(22.3,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah0B1QgkgcAAgsQAAgaAMgSQALgTAagRIAAgCQgIgIgEgKQgEgJAAgKQgBgeAXgUQAWgTAkAAQAXgBAQAKQAQAJAAANQAAAEgEADQgDADgGAAIgPgFQgOgFgLAAQgQAAgJAKQgJAKAAARQAAAHACAGQACAGAFAFQAFADAJAFIALADIAEACIACAEQgBADgGAIQgIAIgGAAIgJgBIgNgGQgLAKgFAOQgGANAAARQAAAlAYAYQAZAYAlAAQAfAAATgQQATgQAAgbQAAgPgIgLQgIgJgMAAQgOAAgJAIQgIAHAAANIAAAEIAAACIgCAAIgDABQgHAAgFgGQgEgEAAgKQAAgcBVgnIAFgDQAWgKAMgMQALgMAAgNQAAgJgEgFQgFgFgKABIgIABIgHAAQgEAAgDgCQgCgDgBgEQAAgIALgHQALgFAQAAQAVAAAMAMQAMAKAAAUQAAAZgVATQgUATgsAQQASAIAKAOQAJAOAAAUQAAAPgGAOQgGAOgLALQgSATgZAKQgbAKgiAAQg7AAgjgcg");
	this.shape_6.setTransform(-15,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBkIgVgEIgFAEIgGACIgEgCIgEgCQgGgGgGgPQgFgQgBgOQAAgGAEgEQADgEAFAAQAJAAAJAPIAHAMQAGAHAKAFQAKAEAKABQAOgBAHgGQAHgHAAgKQAAgRgfgPIgLgGQgfgPgKgLQgLgNAAgSQAAgZASgQQARgQAcAAIANAAIANADIAKgEIAGgBQAJABAKAPQAIAPAAAQQAAAIgDADQgCAEgHAAQgEAAgEgEQgFgDgFgKQgIgMgHgEQgIgFgKAAQgLAAgHAGQgGAHAAAKQgBAIAIAIQAGAGAXAMIADABQA1AaAAAgQAAAagUATQgVASgfAAg");
	this.shape_7.setTransform(-51.5,26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BJQgcgdAAgpQAAgsAcgeQAdgdArAAQAlAAAWAVQAWAWAAAkQAAAMgEAEQgDADgPAAIhJAAQgHAAgDgDQgEgDAAgFQAAgFAEgDQADgDAHAAIAnAAIAKgBQACgCAAgEQAAgTgMgMQgNgNgRAAQgXAAgLAUQgLAUAAAcQAAAeAPAWQAQAWAXAAQAPAAAKgDQAJgEAKgGIAHgGQAJgHAGAAQAEAAADACQADADAAAEQAAAFgFAGQgFAHgIAHQgRAOgQAGQgPAGgTAAQgoAAgbgcg");
	this.shape_8.setTransform(-69.9,26.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhUB1QgXgaAAgqQAAgvAbgdQAagdApAAIANABQAGABAEAFQADAEAAAGQAAAJgNABIgFgBIgFAAQgWgBgMATQgNAQAAAfQAAAgAOAVQAOATAWAAQATABALgLQALgMAAgWIAAg0IAAhZQAAgNgCgFQgDgGgHgCIgFgCQgMgDAAgHQAAgFAFgEQAEgDAPgGIAWgGIASgCQAGAAADAEQADAEAAAIIAAAJIgCB3IABBRQABASADADIAOAEQAKADAAAGQAAAJgcAJIgTAGIgPABQgFAAgDgDQgCgDAAgGIAAgKIgBgDIgBgBIgGADIgIAHQgMAIgKAEQgLAFgMAAQgkAAgXgag");
	this.shape_9.setTransform(-91,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiCKQgJgDAAgJQAAgGAJgEIAFgCQAFgDADgGQABgHAAgOIAAgNIAAgQIAAgUQAAgegBgJQgCgJgEgCIgJgDQgLgEAAgGQAAgFADgDQADgEAJgDIAdgJIATgEQAGAAACAEQACAEAAAIIAAAMIAAAJIgCAwIAAABIAAAwQAAASABAIQACAHAFACIAHAEQAKADAAAIQAAAHgKADQgKADgYAAQgdAAgKgDgAgXhhQgJgGABgLQAAgLAJgHQAJgIANAAQALAAAJAHQAIAHAAALQAAAKgJAIQgJAHgMAAQgNAAgIgHg");
	this.shape_10.setTransform(-108.6,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvCMQgVgGgPgIQgHgEgFgQQgFgRAAgWQAAgJADgFQAEgEAGAAQAJAAAKASIAEAHQAMAWAPAKQAOAJAVABQAUgBAPgMQAPgNAAgSQgBgbg5gZIgGgDQgugTgPgRQgQgRAAgcQAAgjAagVQAZgXApAAIAWACIAbAGIAHgFIAHgCQAFAAADADQAEADAEAIQAHALAEANQAEANAAAJQgBAHgDADQgDAEgFAAQgKAAgKgOIgCgEQgMgPgNgGQgNgHgPAAQgWAAgMAKQgMAKAAASQAAAPAKALQAKALApARIAJAEQAiAOAPANQALAKAGANQAFANAAAQQAAAngcAWQgbAWgwAAQgYAAgVgEg");
	this.shape_11.setTransform(-125.3,22.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUA7QgEgCAAgDIAEgHIADgGIAMgVQAEgKAAgEIgBgFIgHgDQgKgEgEgHQgFgHAAgKQAAgNAIgIQAIgJAMAAQAMAAAJALQAIALAAASQAAANgFANQgGAOgMAVIgJAPQgFAFgDAAQgGAAgDgCg");
	this.shape_12.setTransform(126.7,-9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOBkIgVgEIgFAEIgGACIgEgCIgEgCQgHgGgFgPQgGgQAAgOQAAgGAEgEQADgEAFAAQAIAAAKAPIAHAMQAGAHAKAFQAKAEALABQANgBAHgGQAHgHAAgKQAAgRgggPIgKgGQgegPgLgLQgLgNAAgSQAAgZARgQQASgQAcAAIANAAIANADIAKgEIAGgBQAJABAKAPQAIAPAAAQQAAAIgCADQgEAEgFAAQgFAAgEgEQgFgDgFgKQgIgMgHgEQgIgFgKAAQgLAAgHAGQgGAHgBAKQAAAIAIAIQAGAGAXAMIADABQA1AaAAAgQAAAagUATQgVASgfAAg");
	this.shape_13.setTransform(112.4,-19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AheBgQgKgDAAgJQAAgGAKgEIAFgCQAFgDACgHQACgGAAgOIgBgOIAAgPIAAgTQAAgegBgKQgCgJgEgCIgJgEQgLgDAAgHQAAgEADgEQAEgDAIgDIAcgJIAUgEQAFAAADAEQACADAAAGIAAAMIABACIABABIABAAIABgBIAEgDIAEgFQAVgTAYAAQAOAAANAGQAMAGAJALQAJAKAEAOQAEAPAAAgIAAAYIgBANIAAALQAAAOACAFQACAGAFADIAFACQAJAEAAAGQAAAJgJADQgIACgeAAQgbAAgJgCQgKgDAAgHQAAgIAKgEIAHgDQAFgCACgIQABgJAAgVQAAg8gHgQQgIgQgVAAQgJAAgJAGQgKAHgFAKQgEAIgCAPQgBAPAAAmQAAASABAHQACAGAEACIAHADQAKAEAAAIQAAAGgKAEQgJADgZAAQgeAAgJgDg");
	this.shape_14.setTransform(92.6,-19.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghCKQgKgDAAgJQAAgGAKgEIAEgCQAGgDABgGQACgHAAgOIAAgNIAAgQIAAgUQAAgegCgJQgBgJgEgCIgJgDQgMgEAAgGQABgFADgDQAEgEAIgDIAdgJIATgEQAGAAACAEQACAEAAAIIAAAMIAAAJIgCAwIAAABIAAAwQAAASABAIQACAHAFACIAHAEQAKADAAAIQAAAHgKADQgJADgaAAQgcAAgJgDgAgXhhQgIgGAAgLQAAgLAJgHQAJgIANAAQAMAAAIAHQAIAHAAALQAAAKgJAIQgJAHgNAAQgMAAgIgHg");
	this.shape_15.setTransform(75.6,-23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiBaIgKgKIgIAFQgYAQgXAAQgdAAgRgQQgSgRAAgbQAAgfAXgQQAWgRApAAQAJAAAFACQAFADAAAIQAAALgNgBQgTABgMAIQgMAKAAAQQAAAPALAKQAKAJARAAQASAAAIgIQAIgJAAgUIAAhIQAAgRgIgJQgHgKgNAAQgJAAgIAEQgJAFgHAJIgEAEQgMAPgNAAQgIAAgEgFQgFgEAAgJQAAgTAXgLQAWgNAjAAQAVAAAPAGQAQAFAIALQAGAIACAMQADALAAAcIAAA9QAAALACAGQABAFAEABIAGACQANADAAAHQAAAJgNAIQgNAHgSAAQgIAAgKgLg");
	this.shape_16.setTransform(60.1,-19.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABICIQgLgDAAgJQAAgHANgFIAIgFQADgCACgIQABgJAAgaIAAgKIAAhSIgBgxIgYBAQg5CUgMAAQgGAAgLgUQgLgVgbg/IgrhgIgBBLIgBA1IABAkQABAIADACIAIAFQANAEAAAIQAAAJgKADQgKAEgXAAQgWAAgKgFQgJgDAAgIQAAgHAKgFQALgFABgDQADgKACgyQAEgxAAg8IAAgHQAAgUgCgHQgCgHgEgDIgJgDQgNgFAAgIQAAgIAJgDQAJgCAcAAIAcAAIAHACQADACAOAjIAMAbIAFAOQAuB0AEAAQAEAAARgqQASgpAYhEIADgMQAHgVAHgHQACgDAJgBIAagBQAZAAAJACQAJADAAAIQAAAIgMAEIgEACQgHADgBAIQgCAHAAAeIACBuQABAxACAIQACAEAIADIAEACIAIAEQACADAAAEQAAAJgLADQgLAEgfAAQgdAAgLgEg");
	this.shape_17.setTransform(32.1,-23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhYB/QgKgHABgNQAAgKAGgGQAHgHAJAAIAJACIAGADIAFAIQAFAIAEAAQAKgBAKgOQAKgOAAgPQAAgRgOgeIgCgFIgehDIgSgmQgDgHgMgFQgHgCgCgCQgDgEABgDQgBgJAKgEQALgDAcAAQAcAAAKADQAKAEAAAHIgCAGIgEAEIgHADQgHADAAAEIAEAOIAQAnIAPAkQAFAJACAAQACAAAFgJIAMgfIAPgmQAFgOgBgFQAAgFgLgGQgLgGAAgGQAAgGAJgDQAJgCAWgBQAXAAAJADQAHAEABAHQgBAHgKADIgIADQgLAGgNAgIgGAPIgYA+QggBQgTAZQgVAXgcAAQgOABgJgJg");
	this.shape_18.setTransform(-5.5,-15.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAiBaIgKgKIgIAFQgYAQgXAAQgdAAgRgQQgSgRAAgbQAAgfAXgQQAWgRApAAQAJAAAFACQAFADAAAIQAAALgNgBQgTABgMAIQgMAKAAAQQAAAPALAKQAKAJARAAQASAAAIgIQAIgJAAgUIAAhIQAAgRgIgJQgHgKgNAAQgJAAgIAEQgJAFgHAJIgEAEQgMAPgNAAQgIAAgEgFQgFgEAAgJQAAgTAXgLQAWgNAjAAQAVAAAPAGQAQAFAIALQAGAIACAMQADALAAAcIAAA9QAAALACAGQABAFAEABIAGACQANADAAAHQAAAJgNAIQgNAHgSAAQgIAAgKgLg");
	this.shape_19.setTransform(-25.4,-19.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhUB1QgXgaAAgqQAAgvAbgdQAagdApAAIANABQAGABAEAFQADAEAAAGQAAAJgNABIgFgBIgFAAQgWgBgMATQgNAQAAAfQAAAgAOAVQAOATAWAAQATABALgLQALgMAAgWIAAg0IAAhZQAAgNgCgFQgDgGgHgCIgFgCQgMgDAAgHQAAgFAFgEQAEgDAPgGIAWgGIASgCQAGAAADAEQADAEAAAIIAAAJIgCB3IABBRQABASADADIAOAEQAKADAAAGQAAAJgcAJIgTAGIgPABQgFAAgDgDQgCgDAAgGIAAgKIgBgDIgBgBIgGADIgIAHQgMAIgKAEQgLAFgMAAQgkAAgXgag");
	this.shape_20.setTransform(-46.8,-23.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiCKQgJgDAAgJQAAgGAJgEIAGgCQAEgDACgGQACgHABgOIgBgNIAAgQIAAgUQAAgegCgJQgBgJgEgCIgJgDQgMgEAAgGQAAgFAEgDQAEgEAIgDIAdgJIAUgEQAFAAADAEQACAEAAAIIAAAMIgBAJIgBAwIAAABIgBAwQAAASACAIQACAHADACIAIAEQAJADAAAIQAAAHgJADQgKADgZAAQgcAAgKgDgAgXhhQgJgGAAgLQAAgLAKgHQAJgIANAAQALAAAJAHQAIAHAAALQAAAKgJAIQgJAHgNAAQgMAAgIgHg");
	this.shape_21.setTransform(-64.5,-23.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggCLQgJgDAAgJQgBgGAJgEIAKgFQADgDABgMIABgmIAAgeIAAgkIAAgOQAAgxgCgOQgBgPgEgCIgMgEQgMgDAAgHQAAgFADgDQAFgDANgFIAagHIATgDQAGAAACADQACAEABAJIAAAPQgDBFAABGIABBBQACAOADAEIAKAFQAKAEgBAIQAAAGgJAEQgKADgZAAQgdAAgJgDg");
	this.shape_22.setTransform(-75.6,-23.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhGBIQgbgcAAgrQAAgrAdgdQAdgdAqAAQAqAAAaAbQAbAbAAArQAAAsgdAeQgcAegqAAQgpAAgcgdgAgkg5QgMAQAAAaQAAAlARAaQAQAaAWAAQATAAAMgQQAMgQAAgbQgBgkgQgaQgRgagVAAQgTAAgMAQg");
	this.shape_23.setTransform(-91.5,-19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArCIQgLgDAAgJQABgIALgEIAJgFQADgCACgMIABguIgBgbIgBgHQgCgDgJgCQgKgCgkABIgoAAQgLABgEADIgCAGIgBAPIAAAPIABAuQACAMADACIAJAFQALAEABAIQAAAJgLADQgLAEgfAAQgdAAgLgEQgLgDAAgJQAAgHAMgFIAJgFQADgDACgYQACgYAAg6IgChIQgCgdgBgDQgCgDgLgEQgKgFAAgHQAAgIAIgDQAJgCAjAAQAhAAAKACQAJADAAAIQgBAHgLAGIgJADQgDADgCAMIgBA5QAAAIAIACQAGADAdAAIAPAAIAogBQANgBADgDIACgEIABgHIAAgJIgBgvQgCgKgDgDIgJgDQgLgGgBgHQAAgIAJgDQAJgCAjAAQAiAAAJACQAIADAAAIQAAAIgMAFIgJADQgDADgCAaQgCAbAAAzIACBKQABAeACAEQACACALAFQAKAEAAAHQAAAJgLADQgKAEgeAAQgfAAgLgEg");
	this.shape_24.setTransform(-117,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaymains, new cjs.Rectangle(-138.5,-48.9,277.1,95.8), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgYcgkyMAw5AAAMAAABJlMgw5AAAg");
	this.shape.setTransform(0,0,1.019,1.017);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-160.5,-240.5,321,481), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AizEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAKAAAEgLQADgJAAgZIAAl7QAAgZgDgIQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QAEAQgGAJQgFAJgMAAQgOAAgHgOIgJgSQgGgPgPgFQgMgEggAAIhQAAQghAAgJAIQgIAJAAAiIAABlQAAAZAIAFQAFAEAdAAIAnAAQAaAAAIgEQAHgDACgNIABgFQADgVAUAAQANAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgNAAQgTAAgEgWIgBgGQgCgNgHgDQgIgEgbAAIgmAAQgdAAgFAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAQAGAhAAIBVgBQAvAAAPgfIAHgQQAJgQAOAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(21.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,43.9,56.7), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNBlQgFgDAAgHIAAiTQAAgLgLABIgyAAQgLgBAAgOQAAgUAKgBICfAAQAMABAAARQAAARgLABIgyAAQgLAAAAAKIAACTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape.setTransform(9.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAEQACAEAAAJQAAASgMAAIh5AAQgIAAAAAKIAAAcQAAAIAKABIBFAAQALgBAAATQAAAQgKAAIhFAAQgFAAgDADQgDADAAAFIAAAeQAAAKAKAAIB3AAQALAAAAASQAAASgLAAg");
	this.shape.setTransform(9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,18,20.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ah+EYQgKgJgIgYIhIjYQgCgFgEAAQgEAAgCAFIhNDYIgJAWQgDAGgFAFQgMAJgRAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgKQAAgWAdAAICvAAQAcAAAAAWQAAALgHAFQgHAFgRABQgOACgGAFQgGAFAAAKQAAAKADAJIBzFGQACAFAFAAQAEAAACgGIA/i2QAIgagHgWIgehbIgHgTQgEgJgHgFQgGgEgPgEQgNgDgGgFQgFgFAAgKQAAgZAeAAICmAAQAdAAAAAWQAAAUgcADQgQACgGAFQgGAFAAALQAAALAIAZIBgEsQACAGAEgBQAEAAABgGIBek6QADgMAAgIQAAgSgdgEQgbgCAAgWQAAgMAIgGQAHgFARAAIElAAQAVAAAJAFQAIAFAAAOQAAAKgGAHQgGAHgJAAIgRAAQgLAAgFALQgCAKAAAXIAABuQAAAdAFAHQAGAGAYAAIBzAAQAXAAAHgIQADgDAAgHIABgeIAAhoQAAgbgCgGQgCgFgFgDQgEgDgFAAIgQAAQgKAAgGgHQgHgHAAgKQAAgOAJgFQAIgFAWAAICaAAQAWAAAJAFQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBAEQgDAHAAAaIAAF8QAAAaADAIQABAFAFADQAEACAEAAIASAAQAJAAAGAHQAHAHAAAKQAAAOgJAFQgIAGgXAAIiaAAQgVAAgJgGQgIgFAAgOQAAgJAGgIQAHgHAJAAIAQAAQALAAAFgKQACgHAAgbIAAh8IgBgdQAAgHgDgEQgGgHgYAAIhzAAQgYAAgGAGQgFAHAAAdIAACBQAAAXACALQAEAKAMAAIARAAQAIAAAGAIQAGAHAAAKQAAANgIAGQgIAFgVAAIiaAAQgWAAgIgGQgJgFAAgOQAAgJAGgIQAHgHAJAAIARAAQAEAAAFgCQAEgDABgFQADgHAAgbIAAl8QAAgxgjAFQgMABgHAJQgIAJgGAWIiHGzQgJAfgKALQgKALgUAAQgTAAgLgJg");
	this.shape.setTransform(63.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhTEbIgTgEQgIAAgKAJQgKAHgJABQgLAAgGgHQgGgGgEgPIgVhWQgCgFAAgMQAAgKAIgJQAHgHAMAAQANAAAIAMIAMAQQAWAgAiASQAiARAkABQAogBAagUQAZgVAAgjQAAgggbgfQgZgbhAguQg/grgPgMQgSgOgTgWQggglAAg0QAAg+ArglQArglBGgBQAnABAhAHIAWAFIALACQAIAAAMgHQAJgIAJAAQASAAAGAYIAUBcQACAEAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgOQgOgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAPAAAaQAAAXAJANQANASAaAUIApAfQAzAjAWARQAXATAUATQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgxAAgngNg");
	this.shape.setTransform(19,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.1,59.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABaBkQgGgCAAgFIgOhsQgCgGgFAAQgDAAgDAEIgxA+QgEAFgFAAQgGAAgFgGIgtg8QgCgDgEAAQgFAAgBAIIgOBnQgCALgTAAQgGAAgFgDQgGgCAAgGIAViwQACgKADgDQAEgEALAAQAKAAAFAJIA4BOQAGAJADgBQAFAAAGgIIA7hQQAFgIAKAAQAHAAADADQAEACACAJIAUC0QABALgXAAQgFAAgEgDg");
	this.shape.setTransform(12.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,24.3,20.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA6BlQgFgBgEgFIhAhFQgKgJgUAAQgFAAgEAEQgDAFAAAGIAAA7QAAAIgGACQgFACgKAAQgRAAAAgMIAAi0QAAgIAFgCQAFgDAKAAQASAAAAAMIAAA3QAAANAJAAQALAAAGgCQADgCAFgEIBJhDQAMgLANALQAMAMgKAJIhAA7QgJAHAJAKIBOBVQAIAJgGAFQgEAEgOAAQgMAAgFgCg");
	this.shape.setTransform(9.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.1,20.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ai5EbQgWAAgIgFQgJgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAFgLQACgKAAgXIAAl7QAAgYgDgJQgBgFgFgEQgEgEgEAAIgRAAQgIAAgHgHQgHgHAAgJQAAgOAJgGQAJgFAVAAIFvAAQAZAAAFAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOIgIgSQgGgPgPgFQgMgEggAAIhtAAQgiAAgIAIQgJAJAAAiIAABlQAAAZAIAFQAEAEAeAAIBGAAQAaAAAIgEQAHgDACgNIABgFQADgVATAAQAOAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgSAAgEgWIgBgGQgCgNgHgDQgIgDgbAAIhFAAQgdAAgFADQgIAFAAAaIAACKQAAAbACAGQADAFAFADQAFADAFAAIAUAAQAJAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape.setTransform(22.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,45.1,56.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgSQAngUAmgNQAJgEgCgJQgCgKgNADQgVAEgZAAQgggBgYgJQgXgJgcgSQgggUgKgEQgugWg6AZQgWAJgLgLQgMgLAGgXQAXhVBDg4QBKg9BQAXQA0APAlA0QAnA2AeALQATAGAAAPQAAAOgRADQgbAFgjgQQgfgPgegbQgfgdgvgCQgrgCgcAVQgLAJADAGQAEAHALgCQAfgHAdAGQAoAHAbAgQAkAoAuAPQA4ASAugeIAZgXQAOgMALADQAQAEgCAUQgBAUgTAZQgiAsg9AeQhFAjgeAeQgwAvgTA9QgQAzAABRQAABxArBAQAqBBBKAAQBJAAArhCQAqhCAAhwQAAhfgXg4QgZg6g2gUQgbgLAFgTQAFgUAigDQA2gHA8AtQBoBMAACkQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape.setTransform(33.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.1,93.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAEAAAEgDQAFgEABgEQADgJAAgXIAAl+QAAgYgDgKQgBgEgFgEQgEgDgEAAIgRAAQgKAAgGgGQgHgHAAgKQAAgOAJgGQAJgFAWAAICdAAQAWAAAIAFQAJAGAAAOQAAAKgGAHQgHAGgJAAIgRAAQgOAAgEALQgDAGAAAcIAAFjQAAAcACAKQACAJAIAFQAGAEALACQAMABAaAAIAvAAQAwAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgEAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(20.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.4,56.7), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjmEaQgWgDgGgEQgKgFAAgNQAAgKAGgHQAFgHAKAAIARAAQAKAAAEgLQADgJAAgYIAAl5QAAgZgDgIQgEgMgKAAIgRAAQgKAAgFgGQgGgIAAgJQAAgNAKgFQAGgEAWgDQBdgNBrAAQBOAAA1ASQA0ASAnAoQAmAlATA4QAUA5AABEQAABNgZA9QgZA+gwAlQgkAegxAOQgxAOhDAAQh0AAhUgNgAgvjrQgdAEgIAMQgLAMABAhIAAFjQgBAgAVAMQANAHAnACQBNAFArhAQAsg/gBhxQAAhvgqg/Qgqg+hMAAIgcACg");
	this.shape.setTransform(26.9,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,53.8,59), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgQQAAgOgJgKQgKgKgPAAQgOAAgKAKg");
	this.shape.setTransform(4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,8.8,8.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAvBeIgggxQgGgJgJAAIguAAQgEAAgDADQgDADAAAEIAAAxQAAAGgKABIgPABQgNAAAAgMIABi5QAAgIAIAAIBrAAQAgAAAUATQAVATgBAfQABAYgPAPIgWATQgIAGAEAGIAiAzQAFAHgFAEQgFAEgOAAQgRAAgFgJgAg4g4IAAAuQAAAFAEAEQAEABAFAAIA+AAQAQAAALgHQAMgJAAgRQAAgPgMgKQgLgIgQAAIg+AAQgNAAAAAKg");
	this.shape.setTransform(9.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,18.9,20.6), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJAaIgNgVIgGAAIAAAVIgJAAIAAgzIATAAQARAAAAAQQABAMgNACIAOAVgAgKgCIAHAAQAMAAAAgHQAAgIgKAAIgJAAg");
	this.shape.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,3.9,5.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABnDxQhFg1gYhfIgBgDQgCgKgHgBQgGABgCAKIgBACQgYBfhHA2QhHA2hoAAQh/AAhLhQQhMhQAAiGQAAiGBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQADALAFgBQAHAAADgLIAAAAQAXhgBGg1QBHg3BoAAQB/AABMBPQBNBQAACFQAACIhNBQQhMBRiBAAQhmAAhHg2gACmiqQgoA/AABuQAABsAoA9QApA+BIAAQBGAAAog/QApg/ABhrQAAhrgqhAQgqg/hGAAQhGAAgpA/gAmFiqQgpA/AABuQAABsApA9QAoA+BIAAQBGAAApg/QApg/AAhrQAAhrgqhAQgpg/hGAAQhGAAgpA/g");
	this.shape.setTransform(55.8,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,111.5,59), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABCBfIgNgbQgEgGgGAAIhTAAQgJAAgEAMIgMAVQgDAIgSAAQgWAAAFgMIBZi4QAFgKAKAAQALABAFAIIBYC7QACAGgJADQgGABgIAAQgPABgDgJgAgEgdIgYAyQgCADACACQABADAEAAIAwAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgCgCgDIgYgzQgCgEgDABQgDAAgCADg");
	this.shape.setTransform(10.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,21,20.7), null);


(lib.deliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZA2QgMgEgIgJIgCgCIgBgCIACgEIADgEIAEgDIAFgBQACAAACACIAIAFIAJAFQAGACAHAAIAJgBQAEAAAEgCQAFgCACgDQACgEABgFQAAgEgEgDQgDgDgEgBIgNgDIgMgBIgNgDIgMgEQgFgEgDgGQgDgFAAgJQAAgJAEgGQAFgHAGgEQAIgEAHgCQAJgCAHAAIAKABIAMACIALAFQAFADAEADIABACIAAACIgBAEIgEAEIgEACIgFABIgDAAQgGgFgHgDQgHgDgHAAIgHAAIgIADIgGAFQgCADgBAEQABAGAFADQAGADAHABIARACQAKACAHADQAJADAFAFQAGAGgBAMQABAKgFAHQgFAHgHAFQgHAEgJADQgJACgHAAQgNAAgMgFg");
	this.shape.setTransform(112.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA4IgEgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIBOAAIADABIABAEIABAEIAAADIgBAFIgEACIg6AAIgDACIgCAEIAAAPQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIAAARQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIAAAFIgBADQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(102.5,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDA7QgEAAgCgEIAAhtIADgCIADgBIAEAAIADAAQAFAAABADIAABsIgCADIgEABIgEABg");
	this.shape_2.setTransform(93.9,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdA6IgDgCIgDgBIgBgBIgTgdIgDgFIgFgBIgOAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAcQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAIgFABIgEABIgEAAQgDAAgCgCQgCgBAAgEIAAhnQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgBIAuAAQAKgBAGADQAIADAGAFQAFAFADAHQADAHAAAJQAAAJgEAHQgDAEgEAEIgIAGQgEACAAADIAAACIAFAHIAGAJIAGAJIACAGQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgDACIgFACIgEABgAgXgkQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIAAAZQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQADABADAAIAWAAIAIgBQAEgBADgCQADgCABgEQACgDABgFQAAgKgHgEQgDgCgEgCQgEgBgEAAIgWAAQgDAAgDABg");
	this.shape_3.setTransform(86.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA5IgMgDIgKgFIgJgHQgIgIgFgLIgEgLIgBgMIABgLIAEgLQAFgLAIgIIAJgHIAKgGIAMgDIALgBIAMABIAMADQALAFAIAIQAIAIAFALQAFALAAALIgCAMIgDALQgFALgIAIQgIAIgLAEIgMADQgGACgGAAQgFAAgGgCgAgOgjQgHADgFAFQgGAGgDAGQgDAIAAAHQAAAIADAIQADAGAGAFQAFAGAHADQAHADAHAAQAHAAAHgDQAHgDAGgGQAFgFADgGQAEgIAAgIQAAgHgEgIQgDgGgFgGQgGgFgHgDQgHgDgHAAQgHAAgHADg");
	this.shape_4.setTransform(73.1,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmA5IgFgBQgDgBAAgEIAAgyIgBgCIgDgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgSAdQgCACgDAAIgDAAIgDgDIgQgcQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBACIAAAyQgCAFgDABIgHAAIgDAAIgDgBIgCgCIgBgDIAAhmQABgDADgBIAHgBIAEABIADADIAbAtQACADADAAIADgBIACgCIAbgsQADgFAGAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAABnIgBAEIgDACIgEAAg");
	this.shape_5.setTransform(60.1,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA4IgEgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBIBOAAIADABIABAEIABAEIAAADIgBAFIgEACIg6AAIgDACIgCAEIAAAPQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIAAARQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIAAAFIgBADQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_6.setTransform(48.9,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmA5IgFgBQgDgBAAgEIAAgyIgBgCIgDgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgSAdQgCACgDAAIgDAAIgDgDIgQgcQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBACIAAAyQgCAFgDABIgHAAIgDAAIgDgBIgCgCIgBgDIAAhmQABgDADgBIAHgBIAEABIADADIAbAtQACADADAAIADgBIACgCIAbgsQADgFAGAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAABnIgBAEIgDACIgEAAg");
	this.shape_7.setTransform(36.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYA2QgMgEgKgJIgBgCIgBgCIACgEIAEgEIADgDIAFgBQACAAACACIAIAFIAJAFQAGACAHAAIAJgBQAEAAAEgCQAEgCADgDQADgEAAgFQgBgEgDgDQgCgDgGgBIgLgDIgNgBIgNgDIgMgEQgFgEgDgGQgDgFAAgJQAAgJAEgGQAFgHAGgEQAHgEAJgCQAIgCAHAAIALABIALACIAKAFQAGADADADIABACIABACIgCAEIgDAEIgFACIgEABIgDAAQgGgFgHgDQgGgDgIAAIgHAAIgIADIgGAFQgDADABAEQAAAGAFADQAFADAJABIAQACQAJACAJADQAIADAFAFQAFAGABAMQgBAKgEAHQgFAHgHAFQgHAEgJADQgJACgHAAQgMAAgMgFg");
	this.shape_8.setTransform(19.9,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSA3QgKgDgGgHQgHgGgEgJIgDgJIgBgLIAAgeIAAgfQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIADgBIAFgBIADAAIAFABQABABAAAAQABABAAAAQAAAAABABQAAABAAAAIAAA6QAAAGACAGQACAGADAFQAEAFAGACQAFADAGAAQAHAAAGgDQAFgCAEgFQAEgEACgGIABgNIAAg5QAAgEADgBIAFgBIAEgBIAEABIAEACQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABIAAA9IgBALIgDAJQgEAJgHAGQgGAHgJADQgJAEgLAAQgJAAgJgEg");
	this.shape_9.setTransform(8.1,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLA5IgMgDIgKgFIgJgHQgIgIgFgLIgEgLIgBgMIABgLIAEgLQAFgLAIgIIAJgHIAKgGIAMgDIALgBIAMABIAMADQALAFAIAIQAIAIAFALQAFALAAALIgCAMIgDALQgFALgIAIQgIAIgLAEIgMADQgGACgGAAQgFAAgGgCgAgOgjQgHADgFAFQgGAGgDAGQgDAIAAAHQAAAIADAIQADAGAGAFQAFAGAHADQAHADAHAAQAHAAAHgDQAHgDAGgGQAFgFADgGQAEgIAAgIQAAgHgEgIQgDgGgFgGQgGgFgHgDQgHgDgHAAQgHAAgHADg");
	this.shape_10.setTransform(-4.8,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDA7QgEAAgCgEIAAhtIACgCIAFgBIACAAIAEAAQAFAAABADIAABsIgCADIgEABIgEABg");
	this.shape_11.setTransform(-14,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEA5IgMgDIgKgFIgJgHIgHgIIgGgKQgFgMAAgMQAAgMAFgLIAGgKQADgFAEgDQAIgIALgFQAGgCAGgBIALgBIAMACQAHABAGACQAGADAGAEQAFAEAEAFIABACQAAAEgCACIgFACIgDADIgEABQgCAAgDgCIgGgFIgJgGQgFgCgIAAQgHAAgHADQgHADgGAFQgFAGgDAHQgDAHAAAHQAAAIADAHQADAHAFAFQAGAGAHADQAHADAHAAQAIAAAIgEQAIgDAFgGIAEgBIAEABIAEACIAEAEIABAEIAAACIgKAJQgFAEgGACIgMAEQgHACgGAAQgHAAgEgCg");
	this.shape_12.setTransform(-22.5,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDA7QgEAAgCgEIAAhtIACgCIAFgBIACAAIAFAAQAEAAABADIAABsIgCADIgEABIgEABg");
	this.shape_13.setTransform(-31,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA6IgEgCIgCgEIAAhmQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADgCIAEgBIAEAAQADAAACACQADABABADIAABPIAAAEIADADQACADAEAAIAzAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIACADIAAAEIABADQgBAEgBACQgBADgFAAg");
	this.shape_14.setTransform(-38.3,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmA4IgDgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIADgBIBOAAIADABIABAEIAAAEIAAADIgBAFIgDACIg6AAIgDACIgBAEIAAAPQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIgBAFIgBADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_15.setTransform(-49,-0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvA4IgEgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhmQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIApAAIALABIAMACQALAFAIAHQAJAIAEAKQADAFABAGQABAGAAAFQAAANgFALIgFAJIgIAIIgJAGIgKAGQgLADgMAAgAgegiQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAA9QAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIAEACIAUAAQAIAAAHgCQAHgDAFgFQAGgFADgGQADgIAAgIQAAgIgDgGQgDgHgGgFQgFgEgHgDQgHgCgIgBIgUAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_16.setTransform(-61.1,-0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmA4IgDgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAAhpQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIADgBIBOAAIADABIABAEIABAEIAAADIgCAFIgDACIg6AAIgDACIgCAEIAAAPQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAlAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIACAEIAAAFIAAACQAAAFgEABIgkAAQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIAAARQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIA5AAQAEACAAAFIAAADIgBAFIgBADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_17.setTransform(-77.7,-0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA6IgEgCIgcgrIgDgDIgFgBIgGACQgDABAAAEIAAAjQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBABIgEACIgEAAIgEAAQgHAAAAgFIAAhqIADgDIADgBIAEAAIAEAAQAFAAACAEIAAAkQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAFACQADAAACgDIAfgmIACgBIADgBIADABIAEADIAEADIACADIgBACIgcAgIgCADIAAADIAAADIABADIAkAwIABACIAAABIgCADIgDADIgFABIgEABg");
	this.shape_18.setTransform(-88.7,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAsA5IgCAAIgHAAQgDgBgBgDIgGgPIgCgDIgEgBIglAAIgBABIgCABIgCABIgBABIgGAPIgCACIgDABIgDABIgEAAIgDAAIgDAAIgDgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAvhqQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIADgBIAFAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAIAtBqIAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABgAgBgRIAAACIgCADIgCAFIgDAHIgCAFIgCAFIgBACIABADIACABIAVAAIADgBIABgCIgCgFIgEgJIgDgJIgDgGIgDgBg");
	this.shape_19.setTransform(-100.2,-0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAmA5IgFgBQgDgBAAgEIAAgyIgBgCIgDgBQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgSAdQgCACgDAAIgDAAIgDgDIgQgcQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBACIAAAyQgCAFgDABIgHAAIgDAAIgDgBIgCgCIgBgDIAAhmQABgDADgBIAHgBIAEABIADADIAbAtQACADADAAIADgBIACgCIAbgsQADgFAGAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIAABnIgBAEIgDACIgEAAg");
	this.shape_20.setTransform(-112,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.deliciousmemories, new cjs.Rectangle(-120.4,-10.2,240.8,20.6), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqoZMQk7iFjyjyQjxjyiFk6QiKlFAAlkQAAljCKlFQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE6CFDyDxQDyDyCFE7QCKFFAAFjQAAFkiKFFQiFE7jyDxQjxDyk7CFQlFCKlkAAQljAAlFiKgALRMiQAAAOALAAIAyAAQALAAAAALIAACTQAAAIAGACQADACAKAAQAKAAAEgCQAFgCAAgIIAAiTQAAgLAMAAIAxAAQALAAAAgSQAAgRgMAAIigAAQgKAAAAAVgADSONIBCBFQADAEAFACQAGACALAAQAOAAAEgFQAGgEgIgJIhOhWQgJgKAKgIIBAg6QAJgJgMgMQgNgMgLALIhLBEQgFAEgDABQgGADgKAAQgKAAAAgNIAAg3QAAgMgRAAQgLAAgEADQgFACgBAIIAAC1QAAAMARAAQALAAAEgCQAGgDAAgHIAAg7QAAgHADgEQAEgEAFAAQAVgBAJAKgAhvOXQAKAAAGAJIAgAxQAFAJARAAQAOAAAFgFQAFgEgFgGIgigzQgEgGAHgGQAPgKAIgJQAOgQAAgYQABgfgVgTQgUgTggAAIhsAAQgIAAAAAIIgBC6QAAAMANAAIAPgBQAKgBAAgGIAAgxQAAgEADgDQADgDAEAAgAmPOxQAGAAAEAGIAMAbQAEAIAPAAQAIAAAGgCQAJgDgDgGIhXi8QgFgIgLAAQgMAAgEAKIhZC4QgGAMAXAAQASABADgIIAMgWQAEgLAIAAgArGNjIAOBtQAAAFAFACQAFADAEAAQAYAAgBgLIgVi2QgCgIgDgCQgEgDgGAAQgLAAgEAIIg8BQQgFAIgFAAQgFABgGgJIg3hOQgFgJgLAAQgKAAgEAEQgDADgCAKIgVCxQAAAGAGACQAFADAGAAQATAAACgLIANhoQACgIAEAAQAEAAADADIAtA9QAFAGAGAAQAGAAAEgFIAxg/QADgEADAAQAFAAACAGgAGyMaIAACwQAAAOANAAICcAAQAKAAAAgRQAAgSgKgBIh6AAQgJAAAAgKIAAgeQAAgFADgDQADgCAFAAIBGAAQAKAAAAgSQAAgSgLAAIhHAAQgJAAAAgJIAAgbQAAgKAIAAIB7AAQALAAAAgSQAAgKgCgDQgCgFgHABIicAAQgNAAAAANgAT5IwQgNANAAATQAAASANAMQANAOASAAQATAAAMgOQANgMAAgSQAAgTgNgNQgMgNgTAAQgSAAgNANgAP5JKQAnALAyAAQBUAAAzgsQAygtAAhKQAAgggMgfQgMgegWgWQgUgVgWgSQgXgRgzgkIgpgdQgbgVgNgSQgJgOAAgVQAAgaARgQQASgQAeAAQAtAAAiAcQAOAKAHAHQAGAHAOAVQAKAPAMAAQALAAAHgGQAHgGAAgIQAAgIgCgEIgUhcQgFgXgTAAQgJAAgJAGQgMAIgHAAIgMgCIgWgFQghgIgoABQhFAAgrAlQgsAmABA9QAAA0AfAmQAUAVARAPQAPALA/AsQBBAuAZAbQAcAggBAfQABAjgaAUQgaAWgpAAQgkAAgigSQghgTgWgfIgNgRQgIgLgNAAQgMAAgHAIQgIAHAAAMQAAAKACAHIAWBUQAEAQAFAGQAGAHALgBQAJAAALgIQAJgIAJAAIASAFgAjHGJIABACQAYBeBFA2QBHA2BkAAQCCAABMhRQBMhQAAiJQAAiFhMhPQhNhQh+AAQhoAAhHA3QhFA1gYBgIAAAAQgCALgHABQgHAAgCgLQgYhghHg2QhHg3hoAAQiAAAhMBRQhLBQAACIQAACFBLBQQBMBQB+AAQBoAABIg2QBHg2AYhfIAAgBQACgMAIAAQAGABADALgAFnIeQgGAGAAAKQAAAOAJAEQAIAEAUADQBVANB0AAQBFABAxgOQAvgOAlgeQAwgmAZg9QAZg9AAhOQAAhFgTg4QgVg5glglQgngng1gSQg1gThOABQhrAAheAMQgUAEgIAEQgJAEAAAOQAAAJAGAHQAGAHAIAAIARAAQALAAAEALQADAJAAAYIAAF6QAAAYgDAJQgEAMgLAAIgRAAQgIAAgGAHgAyyIfQgHAIABAJQAAAOAJAFQAIAFAWABICcAAQAYgBAJgFQAJgFAAgOQAAgKgHgHQgGgGgKAAIgTAAQgFgBgFgDQgGgDgCgFQgCgGAAgbIAAiKQAAgZAIgGQAEgDAeAAIBGAAQAbAAAHAEQAIADABANIABAFQAFAWASAAQANAAAGgIQAFgKAAgWIAAhIQAAgVgFgJQgGgJgNAAQgTAAgEAVIgBAGQgBAMgIAEQgHADgaAAIhHAAQgeAAgEgDQgIgGAAgZIAAhlQAAgiAIgJQAJgIAjAAIBtAAQAfAAANAEQAPAFAFAPIAIASQAIAOAOAAQAMAAAFgIQAGgKgEgPIgMg8QgFgVgZAAIlwAAQgVAAgJAGQgJAFAAAOQAAAJAGAIQAIAGAIAAIARAAQAEAAAEAEQAFAEAAAGQAEAIAAAYIAAF8QAAAXgCAKQgGAMgJAAIgSAAQgIAAgHAGgACorXQABAJgIAEQgoANgnAUQglASgaATQg5AoggBCQgfBEAABZQgBCLBPBTQBOBUCFABQCGAABQhVQBPhVAAiOQABilhohMQg9gtg2AHQgiAEgEAUQgFATAaAKQA2AUAZA8QAXA3ABBfQAABwgrBCQgrBChJAAQhLAAgqhBQgrhAAAhxQAAhRAQgzQATg+AwgvQAegeBGgiQA+gfAhgsQATgYABgVQACgTgQgFQgLgDgOANIgZAWQguAeg4gRQgvgPgjgpQgcgfgogIQgcgGgfAHQgLACgEgGQgCgHALgJQAbgUArABQAuADAfAcQAeAbAgAPQAjARAbgGQARgDAAgOQAAgPgTgGQgegLgng1Qgmg0g0gQQhOgWhLA9QhDA3gXBVQgGAXAMALQALALAWgJQA6gZAuAWQAKAFAgAUQAcARAWAJQAYAKAhAAQAYAAAWgEIAFgBQAJAAACAIgAvClPIBIDYQAHAXALAJQALAJATAAQATABALgLQAKgLAJggICImzQAGgXAIgJQAHgIALgCQAjgFAAAxIAAF+QAAAbgCAGQgBAFgFADQgEACgFAAIgQAAQgJABgHAGQgGAIgBAJQAAAPAJAEQAJAGAVAAICbAAQAVAAAIgFQAIgGAAgNQAAgKgGgHQgGgIgJAAIgQAAQgMAAgEgKQgCgLAAgWIAAiCQgBgcAGgIQAGgGAXAAIBzAAQAYAAAHAHQACAFABAGIAAAeIAAB8QAAAbgBAGQgGAKgKAAIgRAAQgIABgHAGQgGAIAAAJQAAAPAIAEQAJAGAVAAICaAAQAWAAAJgGQAJgEAAgPQAAgKgHgHQgGgGgKgBIgRAAQgEAAgFgCQgEgDgBgFQgDgIAAgZIAAl+QAAgaADgHQABgEAEgDQAFgEAEAAIARAAQAKAAAGgGQAHgIAAgKQgBgOgIgFQgJgFgWAAIiaAAQgWAAgIAFQgJAFAAAOQAAAKAGAIQAHAGAJAAIARAAQAFAAADADQAFADADAFQABAGAAAbIAABpIAAAdQgBAHgCADQgHAJgYgBIhzAAQgXAAgGgGQgGgHABgdIAAhuQAAgXACgKQAFgLALAAIAQAAQAKAAAFgGQAHgIAAgKQgBgOgHgFQgJgFgVAAIkmAAQgRAAgIAGQgHAFgBANQAAAVAcACQAeAEAAATQAAAHgEANIheE7QgBAFgFABQgDAAgCgGIhgktQgIgZgBgKQAAgMAHgEQAFgGARgCQAcgDgBgUQABgWgdAAIimAAQgfAAAAAaQABAJAFAFQAGAFANADQAPAEAGAEQAHAFADAJIAHAUIAfBaQAHAWgIAaIg/C3QgCAGgEAAQgFAAgCgEIhzlIQgDgIAAgLQAAgKAGgFQAGgFAOgBQARgBAGgGQAIgEgBgMQABgWgcAAIivAAQgdAAAAAWQAAAKAFAFQAFAGANACQAVAEAHAHQAHAIAJAaICnG/QAJAYALAIQAKAKATgBQARABALgKQAFgEADgHIAJgVIBOjZQABgFAEAAQAFAAACAGgAOkiCQgGAHAAAJQAAAOAJAFQAHAGAWAAIFjAAQAZAAAFgVIANhDQADgPgFgKQgEgIgNAAQgOAAgIAQIgHAQQgPAfgwAAIhUABQgigBgRgFQgKgEgDgLQgDgMAAghIAAhsQAAgZAIgFQAGgEAdAAIAmAAQAbAAAIAEQAHADACANIABAFQAEAXATAAQANgBAGgIQAEgKAAgWIAAhHQAAgWgEgJQgGgIgNgBQgTABgEAUIgBAGQgCAMgHAEQgHADgbAAIgnAAQgdAAgGgDQgIgFAAgaIAAhlQAAghAIgJQAJgJAjAAIBQAAQAfABANAEQAPAFAFAPIAJASQAHAOAOAAQANAAAEgJQAGgJgEgQIgMg7QgEgWgaAAIlTAAQgVABgJAFQgJAGAAAOQAAAJAGAHQAIAHAIAAIARAAQAEAAAEAEQAFADABAGQADAIAAAZIAAF8QAAAZgDAIQgCAFgDADQgEAEgFAAIgRAAQgJAAgGAGgAHyiCQgFAHAAAJQAAAOAIAFQAIAGAVAAIE/AAQAZAAAGgVIAMhDQAEgPgFgKQgFgIgMAAQgPAAgIAQIgHAQQgPAfgvAAIgwAAQgaAAgMgCQgMgBgGgEQgIgFgCgKQgCgJAAgcIAAllQABgbACgGQAEgLAOAAIASAAQAJAAAHgGQAGgHABgKQgBgOgIgGQgJgFgXgBIidAAQgWABgJAFQgJAGAAAOQAAAKAHAHQAGAGAKAAIARAAQAEAAAFADQAEADABAFQADAKABAXIAAGAQgBAXgDAIQgBAFgEADQgFAEgEAAIgRAAQgJAAgGAGg");
	this.shape.setTransform(0,0,0.217,0.217);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAZIgPgVQANgCAAgMQAAgQgRAAIgTAAIAAAzIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(28.3,12.8,0.217,0.217);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgEAAgFIAAgtQAAgKANAAIA+AAQAQAAALAJQALAJAAAPQAAAQgLAJQgLAJgQAAg");
	this.shape_2.setTransform(-2.4,18.4,0.217,0.217);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(28.3,12.6,0.217,0.217);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-10.6,6.5,0.217,0.217);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgDAAgCgCQgBgDABgDIAZgxQACgEACAAQADAAACADIAZAzQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-9.6,19.1,0.217,0.217);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDsQgngCgNgHQgUgMgBggIAAljQAAghALgMQAIgMAdgEIAdgDQBKAAArA/QArA+AABvQgBBxgqBAQgqA8hFAAIgKgBg");
	this.shape_6.setTransform(14,6.5,0.217,0.217);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hFAAQhHAAgpg9g");
	this.shape_7.setTransform(1.5,6.5,0.217,0.217);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(15,-8.1,0.217,0.217,0,0,0,20.3,28.4);
	this.instance.alpha = 0.789;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,-11.7,0.217,0.217,0,0,0,33.5,46.8);
	this.instance_1.alpha = 0.789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.3,6.6,0.217,0.217,0,0,0,22.6,28.4);
	this.instance_2.alpha = 0.789;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.2,36,0.217,0.217,0,0,0,0.2,0.2);
	this.instance_3.alpha = 0.789;

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.6,19.2,0.217,0.217,0,0,0,10.6,10.4);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.9,19.2,0.217,0.217,0,0,0,9.7,10.4);
	this.instance_5.alpha = 0.789;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.9,19.2,0.217,0.217,0,0,0,12.2,10.4);
	this.instance_6.alpha = 0.789;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(23.9,6.6,0.217,0.217,0,0,0,19.2,29.5);
	this.instance_7.alpha = 0.789;

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-4.5,6.6,0.217,0.217,0,0,0,55.8,29.5);
	this.instance_8.alpha = 0.789;

	this.instance_9 = new lib.CompoundPath_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(28.4,12.8,0.217,0.217,0,0,0,2.1,2.6);
	this.instance_9.alpha = 0.789;

	this.instance_10 = new lib.Path_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-16.2,-7.9,0.217,0.217,0,0,0,63.4,29.1);
	this.instance_10.alpha = 0.789;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-2.4,19.2,0.217,0.217,0,0,0,9.7,10.4);
	this.instance_11.alpha = 0.789;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(11.4,19.2,0.217,0.217,0,0,0,9,10.4);
	this.instance_12.alpha = 0.789;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(17.6,19.2,0.217,0.217,0,0,0,9.2,10.2);
	this.instance_13.alpha = 0.789;

	this.instance_14 = new lib.CompoundPath_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(28.3,12.9,0.217,0.217,0,0,0,4.6,4.6);
	this.instance_14.alpha = 0.789;

	this.instance_15 = new lib.CompoundPath_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(13.5,6.6,0.217,0.217,0,0,0,27,29.5);
	this.instance_15.alpha = 0.789;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(24.8,-8.1,0.217,0.217,0,0,0,21.9,28.4);
	this.instance_16.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-37.9,-37.9,75.9,75.9), null);


(lib.seventeenrollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// rectangle
	this.instance = new lib.seventeenvideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.7,-39.2,147.5,38.4);


// stage content:
(lib.interstitialsixteen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(25).call(this.frame_77).wait(3));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(160.4,240.1,1.553,0.731,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(80));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// white-fade
	this.instance_1 = new lib.whiterectanglefadeone();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.5,239);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(71));

	// white-logo
	this.instance_2 = new lib.whitelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,37);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.11,scaleY:0.11},0).to({scaleX:1.34,scaleY:1.34,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1.24,scaleY:1.24},7,cjs.Ease.get(1)).wait(58));

	// make-delicious-memories
	this.instance_3 = new lib.deliciousmemories();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160,132.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({alpha:1},10).wait(18));

	// holiday-mains
	this.instance_4 = new lib.holidaymains();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160,195.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({alpha:1},10).wait(18));

	// order-now
	this.instance_5 = new lib.ordernow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(157,293.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66).to({y:291.6},0).to({alpha:1},10).wait(4));

	// cta-rollover
	this.cta_rollover = new lib.seventeenrollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(160,294);
	this.cta_rollover.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(66).to({alpha:1},10).wait(4));

	// cta-rectangle
	this.instance_6 = new lib.seventeenrectangle();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,294);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({alpha:1},10).wait(4));

	// pie
	this.instance_7 = new lib.sixteenpie_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(56.5,59);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({alpha:1},10).wait(50));

	// meats
	this.instance_8 = new lib.sixteenmeats_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(223,390.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({alpha:1},10).wait(45));

	// spinach
	this.instance_9 = new lib.sixteenspinach_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(55.5,425.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({alpha:1},10).wait(40));

	// blue
	this.instance_10 = new lib.sixteenblue_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(99.5,343.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({alpha:1},10).wait(35));

	// greens
	this.instance_11 = new lib.sixteengreens_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(279,67.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({alpha:1},10).wait(30));

	// table
	this.instance_12 = new lib.sixteentable_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(154.1,232.1,335,494);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;