(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,1700,500],[0,502,1700,500]]},
		{name:"index_atlas_NP_1", frames: [[0,0,1700,210],[0,212,1700,210]]}
];


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



(lib.bg_pic = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_picgray = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.snow1 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.snow2 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.tx34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmPA/IAGgaQAbAEApABIAxABIAHggIhTAAIAGgWIBRAAIAHgfIgwABQgjABgfADIAGgZQAugDAjAAQAbAAANAHQAOAHAAAPIgBAJQgCALgGAHQgGAHgKACQAOAFAAAPIgBAKQgDAOgIAHQgJAIgMAEQgOADgXAAQgsAAgrgDgAFWBAIAeh+IAcAAIgdB+gAC3BAIAdh+IAcAAIgKAqIA7AAQAWAAAKAHQAKAHAAAOIgBAPQgEAPgHAJQgHAJgKADQgLAFgSAAgADYAnIBPAAIAIgkIhOAAgAB1BAIAahtIgBAAIhABRIgiAAIgahRIgBAAIgYBtIgcAAIAdh+IAtAAIAYBMIACAAIA8hMIAyAAIgdB+gAhlBAIAZhpIAAAAIhlBpIguAAIAdh+IAcAAIgZBoIABAAIBlhoIAtAAIgdB+g");
	this.shape.setTransform(39.95,6.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnaB1IAajpIObAAIgbDpg");
	this.shape_1.setTransform(43.75,6.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx34, new cjs.Rectangle(-3.8,-5.3,95.1,23.5), null);


(lib.tx33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIaBRQgQgDgHgJQgIgKAAgPQAAgKAEgRQAGgZAKgOQAJgNASgGQAWgFAhAAQAaAAARAEQARAEAGAJQAIAIAAAQQAAAJgDARQgHAagKAOQgJAOgTAEQgRAGgkAAQgdgBgPgDgAImgSIgRBLQAbADAagBQAbABAcgDIARhLQgbgDgaAAQgbAAgcADgADVBRQgMgDgGgJQgGgHAAgPQAAgNAEgRQAHgcAIgLQAIgOAPgEQAQgGAcAAIBLACIgEAaQgjgDgogBIgmgBIgUBVIAmgBQAkAAAqgEIgHAaQggACgqAAQgWgBgNgDgAlGBRQgMgDgHgJQgFgHgBgPQAAgKAFgUQAGgaAIgNQAJgOAPgEQAPgGAcAAIBMACIgEAaQgkgDgogBIglgBIgUBVIAlgBQAlAAAqgEIgHAaQggACgqAAQgXgBgMgDgAnkBRQgNgDgGgJQgGgHAAgPQAAgLAEgTQAHgaAIgNQAIgOAPgEQAQgGAbAAIBNACIgFAaQgjgDgogBIglgBIgVBVIAngBQAjAAAqgEIgGAaQggACgrAAQgWgBgMgDgAqfBRQgPgDgJgJQgIgKAAgPQAAgKAFgRQAGgZAJgOQAJgNATgGQAVgFAhAAQAbAAAQAEQARADAIAKQAHAIAAAQQAAAJgEARQgGAagKAOQgKAOgRAEQgTAGgjAAQgegBgOgDgAqTgSIgSBLQAbADAagBQAbABAcgDIARhLQgZgDgcAAQgaAAgcADgAMzBTIAZhpIgBAAIhlBpIgtAAIAch/IAcAAIgYBpIABAAIBlhpIAuAAIgdB/gAHFBTIgsg0IgUAAIgNA0IgcAAIAdh/IAcAAIgLAyIAQAAIBDgyIAoAAIAAACIhSA8IA4A/IgBACgAB4BTIAYhpIgBAAIhlBpIgtAAIAch/IAcAAIgYBpIABAAIBlhpIAtAAIgcB/gAhEBTIAYhpIAAAAIhlBpIguAAIAdh/IAcAAIgYBpIABAAIBlhpIAtAAIgdB/gAtsBTIAdh/IBgAAQAVABALAGQALAIAAAPQgBAIgCAGQgCAOgIAKQgGAIgLAEQgMAFgRAAIhHAAIgKAqgAtAAQIBXAAIAIgjIhXAAgAMMg4QgIAAgEgDQgFgEAAgIIACgNIATAAIgDAMIA1AAIACgMIATAAIgDALQgBAHgGAGQgGAEgHAAgABQg4QgIAAgEgDQgFgEAAgIIADgNIASAAIgDAMIA0AAIAEgMIASAAIgDALQgBAHgGAGQgGAEgIAAg");
	this.shape.setTransform(87.65,8.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuSB1IAajpIcLAAIgbDpg");
	this.shape_1.setTransform(87.75,9.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx33, new cjs.Rectangle(-3.8,-2.5,183.10000000000002,23.5), null);


(lib.tx32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag9A+QgPgDgJgJQgHgJAAgQQAAgKAEgQQAGgaAKgOQAIgNATgGQAVgFAgAAQAbAAARAEQAQAEAIAJQAHAJAAAPQAAAKgEAQQgGAbgKAOQgJANgTAFQgRAFgjAAQgdAAgPgEgAgxgkIgSBKQAbADAbAAQAZAAAdgDIARhKQgagDgcAAQgZAAgcADgAkqBBIAGgcIAjACIAghlIB4AAIgdB+IgcAAIAXhmIhBAAIgUA9QgIAYgMAJQgMAKgYAAIgSgBgAmbA+QgNgDgGgIQgGgIAAgPQAAgLAFgRQAGgbAIgOQAJgOAPgEQAPgGAcAAIBMADIgFAaQgjgEgogBIglgBIgUBVIAmAAQAjgBArgEIgHAaQggACgrAAQgWAAgMgEgApDBAIAFgYIAnACIAMgPIgMAAIglhYIAAgBIAeAAIAeBKIABAAIA5hKIAgAAIAAABIhOBiQgJALgHAGQgGAGgKADQgJADgMAAQgQAAgKgCgALwBAIgfg0IgBAAIg4A0IgmAAIAAgBIBJg/Igng9IABgBIAgAAIAdAwIABAAIA1gwIAmAAIgBABIhFA8IApBAIAAABgAJDBAIAKguIgsAAIg0AuIglAAIAAgBIA0gtQgQgDgHgGQgGgGAAgLIABgPQAEgPAGgIQAGgHALgFQAMgEARAAIBkAAIgdB+gAH7gEIBXAAIAJgjIhYAAgAGRBAIAYhpIAAAAIhlBpIguAAIAdh+IAcAAIgYBoIAAAAIBlhoIAuAAIgdB+gABgBAIAdh+IBkAAQAXAAAKAGQALAGAAAOIgBAKQgCALgFAGQgGAHgJACQAOAGAAAOQAAAGgCAEQgCAMgHAIQgGAGgLAEQgNAEgPAAgACBAoIBhAAIAHgdIhhAAgACNgLIBeAAIAGgcIhdAAgAstBAIAdh+IBkAAQAXAAALAGQALAHAAANQAAAFgCAFQgCALgFAGQgGAHgJACQAOAGAAAOIgBAKQgDANgHAHQgGAGgLAEQgMAEgPAAgAsMAoIBhAAIAHgdIhhAAgAr/gLIBdAAIAGgcIhdAAg");
	this.shape.setTransform(81.375,6.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtqB1IAajpIa7AAIgbDpg");
	this.shape_1.setTransform(80.95,5.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx32, new cjs.Rectangle(-6.6,-6.1,175.1,23.5), null);


(lib.tx31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmVBSIAIgjIiEAAIgJAjIgcAAIAJgjIgbAAIgIgcIhRAAIgVAcIggAAIAAgBIBeh9IApAAIAjB5IAFgTIAXAAQAMgQAGgQIAZhGIB1AAIgYBmIAdAAIgOA7gAnhgJQgGARgLAPIBOAAIAShNIg/AAgAqQgEIA6AAIgPg5IAAAAgAHCAuQgNgDgGgJQgGgIAAgOQAAgMAFgRQAFgbAJgNQAJgOAOgFQAQgFAcAAIBMACIgFAaQgjgEgogBIglgBIgUBWIAlgBQAkAAArgFIgHAaQghACgqAAQgWAAgMgDgAEHAuQgPgEgJgJQgHgJAAgPQAAgJADgRQAHgbAKgOQAIgNATgFQAVgFAhAAQAbAAARAEQAQADAIAKQAHAIAAAQQAAAJgEASQgGAZgKAOQgKAOgSAEQgRAFglAAQgcAAgPgDgAETg1IgSBKQAbADAbAAQAaAAAdgDIARhKQgagDgcAAQgaAAgcADgALjAvIAdh+IAcAAIgKAqIBEAAQAWAAAJAIQALAHAAAPIgCANQgDAPgHAJQgIAJgKAEQgKAEgSAAgAMFAXIBXAAIAIgkIhXAAgAJ1AvIAYhlIhAAAIAFgZICcAAIgFAZIhAAAIgYBlgACiAvIALgzIhgAAIgMAzIgcAAIAdh+IAcAAIgMAzIBhAAIAMgzIAcAAIgeB+gAgPAvIgngzIgNAAIgMAzIgbAAIAMgzIgKAAIg7AzIgqAAIAAgBIBPhAIgvg8IABgBIAfAAIAoAzIAMAAIAMgzIAbAAIgMAzIAJAAIA+gzIAkAAIAAABIhLA+IAxA+IAAABgAlcAvIAdh+ICLAAIgGAZIhvAAIgGAbIBSAAIgFAXIhSAAIgHAbIBxAAIgFAYgAsCAvIAMgzIhhAAIgMAzIgcAAIAdh+IAcAAIgLAzIBgAAIAMgzIAcAAIgdB+g");
	this.shape.setTransform(89.6,8.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Au6B1IAajpIdcAAIgbDpg");
	this.shape_1.setTransform(88.95,5.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx31, new cjs.Rectangle(-6.6,-6.1,191.1,23.5), null);


(lib.tx2_3_mask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKmA4IAFgYIhaAAIgGAYIgTAAIAKgpIAQAAQAIgJAEgMIASgwIBPAAIgQBFIAUAAIgEARIAAAAIA/hWIAdAAIAYBWIAAAAIgTAAIgGgTIg4AAIgNATIgWAAIgGAYgAJygGQgEAMgIAJIA2AAIANg0IgrAAgALugDIAoAAIgKgmIgBAAgAPJAfQgLgCgFgGQgFgGgBgLQAAgGADgLQAEgUAHgIQAGgJANgEQANgDAXAAQAVAAAJACQALACAFAHQAGAGAAAKQAAAJgDAKQgDAQgIAKQgHAKgMADQgLADgaABQgUgBgJgCgAPRgkIgMAzIAkABIAlgBIANgzQgQgCgVAAQgUAAgRACgAHkAfQgKgCgGgGQgFgGAAgLQAAgIADgJQAEgTAGgJQAHgJAMgEQANgDAYAAQAUAAAKACQAKADAGAGQAFAFAAALQAAALgCAIQgEAQgIAKQgGAKgNADQgLADgZABQgVgBgJgCgAHsgkIgMAzIAkABIAmgBIAMgzQgRgCgTAAQgUAAgSACgAnDAfQgLgCgGgGQgFgHAAgKQAAgGADgLQAEgUAHgIQAGgJANgEQAMgDAYAAQAWAAAIACQALACAFAHQAGAFAAALQgBAIgCALQgFASgGAIQgHALgMACQgMADgZABQgUgBgJgCgAm7gkIgNAzIAlABIAmgBIALgzQgQgCgUAAQgVAAgQACgAreAfQgKgCgFgGQgGgHAAgKQAAgHADgKQADgRAIgLQAGgJANgEQANgDAYAAQAUAAAJACQALACAGAHQAEAFAAALQAAAIgCALQgFASgGAIQgGAKgNADQgMADgYABQgVgBgKgCgArWgkIgMAzIAlABIAlgBIAMgzQgQgCgUAAQgVAAgRACgAR8AgIgegiIgOAAIgIAiIgTAAIAUhWIATAAIgJAjIAMAAIAtgjIAbAAIAAABIg4AqIAmArIAAAAgAM9AgIAUhWIBBAAQAPAAAHAGQAHAEAAAKIgBALQgCAJgFAHQgEAGgIABQgHAEgNAAIgwAAIgHAcgANagMIA8AAIAGgZIg8AAgAGfAgIAQhFIg/AAIgRBFIgSAAIAThWIBmAAIgUBWgACuAgIAUhWIBEAAQAQABAHAEQAIAEAAAJIgCAHQgBAGgEAFQgDAFgHACQAKAEAAAKIgBAGQgCAIgFAGQgDAEgIADQgIACgLAAgADFAQIBCAAIAFgSIhDAAgADNgTIBAAAIAEgSIhAAAgABuAgIgbgiIgJAAIgIAiIgSAAIAIgiIgGAAIgqAiIgrAAIgFgTIg4AAIgOATIgWAAIAAAAIA/hWIAeAAIAXBUIAzgqIghgpIAAgBIAXAAIAaAjIAJAAIAIgjIASAAIgIAjIAGAAIArgjIAZAAIAAABIg1AqIAjArIAAAAgAhUgDIAoAAIgLgmIAAAAgAi3AgIAPhFIgrAAIAEgRIBqAAIgEARIgsAAIgPBFgAkDAgIAJgiIhCAAIgIAiIgTAAIAThWIATAAIgIAjIBDAAIAHgjIAUAAIgVBWgAoJAgIARhJIAAAAIgsA2IgXAAIgSg2IgBAAIgQBJIgUAAIAVhWIAeAAIARA1IABAAIAqg1IAhAAIgUBWgAsiAgIAIgiIhDAAIgIAiIgTAAIAUhWIATAAIgHAjIBBAAIAIgjIATAAIgTBWgAulAgIARhHIAAAAIhFBHIggAAIAUhWIATAAIgQBHIABAAIBEhHIAgAAIgVBWgAymAgIAThWIATAAIgQBFIAuAAIAQhFIATAAIgQBFIAuAAIAQhFIATAAIgUBWg");
	this.shape.setTransform(152.15,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtBPQgHgCgCgHIgBgGIABhkIADgBIAfgMIgBBXIACgBIAkgtIABgDIABgYQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAHgDQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgUAIIAAgCIACgWQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAsgRIAAACIgFBMQAAADgDAFIgvA5QgCAEgEABIgdAMIgFABIgGgCg");
	this.shape_1.setTransform(18.725,11.8194);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED702").s().p("A10B/IArj9MAq9AAAIgqD9g");
	this.shape_2.setTransform(139.65,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx2_3_mask, new cjs.Rectangle(0,0,279.3,25.4), null);


(lib.tx2_2_mask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKFAsIgegBIAEgSIAtAEIAbABIAFgWIhFgCIALgwIBWAAIgEAQIhDAAIgDARIAqABQAXABAAAQIgBAJQgCAKgGAGQgEAFgJAEQgHACgPAAgAISArQgJgCgFgEQgEgEAAgIIABgJIAHgeQACgJAFgHQAEgGAHgDQAHgDALAAIA8AAIgDAQIhHAAIgDAQIAoAAQAMAAAGABQAHADADADQADADAAAHIgBALQgCAMgGAFQgFAGgKACQgKACgUAAQgQAAgKgCgAISAaIAMABIAsgBIAFgVIg4AAgAGQArIADgSQASADAYABIAfABIAFgWIgyAAIAEgPIAwAAIAFgVIhGADIAFgRQAYgCAXAAQATAAAJAFQAJAFAAAJIgBAGQgBAIgEAFQgFAFgGABQAJADAAAMIAAAHQgCAHgFAGQgGAFgJACQgIADgSAAQgcAAgXgCgAnJAqQgKgCgGgGQgFgGAAgLQAAgJADgIQAEgTAGgJQAHgJANgDQALgEAZAAQASAAAMADQAMADAEAGQAFAFAAALQAAAKgCAHQgFATgGAJQgGAJgNAEQgMADgZAAQgUAAgKgDgAnBgYIgMAyQARACAUAAQAUAAARgCIAMgyQgUgDgQAAQgQAAgWADgAFeArIgFgTIg4AAIgOATIgVAAIAAAAIA/hVIAdAAIAYBVIAAAAgAEuAIIAnAAIgKgmIgBAAgADfArIARhJIAAAAIgsA2IgXAAIgSg2IAAAAIgSBJIgTAAIAUhVIAfAAIARAzIABAAIAqgzIAhAAIgUBVgABKArIARhJIgBAAIgsA2IgXAAIgRg2IgBAAIgQBJIgTAAIAUhVIAeAAIARAzIAAAAIAqgzIAiAAIgUBVgAg8ArIgFgTIg4AAIgOATIgWAAIAAAAIBAhVIAcAAIAZBVIAAAAgAhtAIIAnAAIgKgmIAAAAgAj+ArIAUhVIBBAAQAPAAAHAFQAHAEAAALQAAAFgBAFQgDALgEAEQgEAGgIADQgJADgLAAIgwAAIgHAcgAjggBIA7AAIAGgZIg8AAgAldArIAUhVIBUAAIgEAQIhBAAIgQBFgApUArIAUhVIBBAAQAPAAAHAFQAHAEAAALIgBAKQgCAKgFAFQgFAGgHADQgJADgLAAIgxAAIgGAcgAo3gBIA8AAIAGgZIg8AAgAqBArIAQhFIg/AAIgQBFIgTAAIAThVIBmAAIgUBVg");
	this.shape.setTransform(105.275,12.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtBPQgHgCgCgHIgBgGIABhkIADgBIAfgMIgBBXIACgBIAkgtIABgCIABgZIABgCIAHgDQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBIgUAIIACgYQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAsgRIAAACIgFBMQAAADgDAFIgvA5IgGAGIgdALIgFABIgGgCg");
	this.shape_1.setTransform(18.725,11.8194);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED702").s().p("AujB/IArj9IcbAAIgqD9g");
	this.shape_2.setTransform(93.15,12.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx2_2_mask, new cjs.Rectangle(0,0,186.3,25.5), null);


(lib.tx2_1_mask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuKArQgJgDgEgFQgEgGAAgKQAAgIADgLQAEgTAGgJQAFgIALgEQAJgEAVAAIA0ABIgEASQgWgCgdgBIgZAAIgOA5IAaAAQAegBAXgDIgFASQgWACgdAAQgOAAgJgCgARTArIAHgeIgeAAIgjAeIgaAAIAAAAIAkgfQgKgBgGgFQgEgEAAgIIABgKQACgIAFgHQADgFAIgDQAJgEALAAIBEAAIgUBWgAQigCIA8AAIAFgZIg7AAgAPaArIAQhHIAAAAIhFBHIgfAAIAUhWIATAAIgRBIIABAAIBEhIIAgAAIgUBWgAM7ArIAQhFIgsAAIAEgRIBqAAIgDARIgsAAIgQBFgALwArIAIgkIhCAAIgIAkIgTAAIAUhWIATAAIgIAjIBCAAIAIgjIATAAIgUBWgAJ9ArIgFgTIg4AAIgOATIgWAAIAAAAIBAhWIAcAAIAZBWIAAAAgAJMAHIAnAAIgKglIAAAAgAG7ArIAUhWIBBAAQAOABAIAFQAHAFAAAKIgBAKQgDALgEAEQgEAGgIADQgJACgKABIgxAAIgHAcgAHZgBIA7AAIAGgZIg8AAgAGdArIgFgTIg4AAIgOATIgVAAIAAAAIA/hWIAdAAIAYBWIAAAAgAFtAHIAnAAIgKglIgBAAgAD1ArIAUhWIBTAAIgEARIhAAAIgQBFgACmArIAHgeIgeAAIgjAeIgaAAIAAAAIAkgfQgLgBgFgFQgEgEAAgIIABgKQACgHAEgIQAEgFAIgDQAIgEAMAAIBEAAIgUBWgAB1gCIA8AAIAFgZIg8AAgAA7ArIgFgTIg3AAIgOATIgVAAIAAAAIA+hWIAdAAIAYBWIAAAAgAAKAHIAoAAIgLglIAAAAgAhDArIAIgkIhCAAIgIAkIgTAAIAUhWIATAAIgIAjIBCAAIAIgjIATAAIgUBWgAjFArIAJgkIhDAAIgIAkIgTAAIAUhWIATAAIgIAjIBCAAIAIgjIATAAIgUBWgAmMArIAUhWIBfAAIgEARIhMAAIgEASIA4AAIgEAPIg4AAIgEATIBNAAIgEARgAn/ArIAUhWIBBAAQAOABAIAFQAHAFAAAKIgBAKQgDALgEAEQgEAGgIADQgJACgKABIgxAAIgHAcgAnhgBIA7AAIAGgZIg8AAgAorArIAQhHIAAAAIhFBHIgfAAIAUhWIATAAIgRBIIAAAAIBFhIIAgAAIgUBWgAsuArIAUhWIATAAIgQBFIAuAAIAQhFIATAAIgQBFIAuAAIAQhFIATAAIgUBWgAu4ArIgFgTIg4AAIgOATIgVAAIAAAAIA/hWIAdAAIAYBWIAAAAgAvoAHIAnAAIgLglIAAAAgAx5ArIAThWIBBAAQAPABAHAFQAIAFAAAKIgCAKQgCAKgFAFQgEAGgIADQgIACgLABIgxAAIgGAcgAxcgBIA8AAIAGgZIg8AAg");
	this.shape.setTransform(147.575,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtBQQgHgDgCgGIgBgHIABhhIAAgDIADgBIAfgMIgBBYIACgCIAkgsIABgDIABgZIABgCIAHgDQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgUAIIACgYQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAsgRIAAACIgFBMQAAAEgDAEIgvA5QgCAEgEACIgdALIgFABIgGgBg");
	this.shape_1.setTransform(18.725,11.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED702").s().p("A1MB/IArj9MAptAAAIgqD9g");
	this.shape_2.setTransform(135.65,12.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx2_1_mask, new cjs.Rectangle(0,0,271.3,25.5), null);


(lib.tx1_2_mask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKdBrQglgWAAgwQAAgSAGgXQALgxAVgaQAWgbAmgLQAngLBCAAQBPAAAlAWQAmAWAAAxQAAARgGAYQgLAvgVAcQgWAagnALQglALhDAAQhQAAglgWgALLA5IClAAIAahxIilAAgAFhBsQgfgVAAguQAAgUAGgZQALgwATgaQASgaAigNQAhgLA3AAQBVAABDAGIgOBJQhCgIg5gEQgkgDgrgCIgfCFIBRgEQBKgGA4gHIgTBJQgiADgpACIhHABQhBAAgfgVgAvdBrQglgWAAgwQAAgSAFgXQALgxAWgaQAWgaAmgMQAngLBBAAQBQAAAlAWQAlAWAAAxQAAARgFAYQgLAvgWAcQgVAagnALQgmALhCAAQhRAAgkgWgAuwA5ICmAAIAahxIilAAgAQ7B7IAShNQAHggAXgPQAZgRArgEIB4gJIAIgjQg3ACgrAEQgZACg9AJIAUhIQBIgHBCAAQA3AAAcAQQAcAQAAAfIgCATQgIAfgXARQgXAQgtAEIh3AJIgHAbIC+AAIgPBBgAAiB7IAPhBIBTAAIAbhzIhTAAIAPhBID2AAIgPBBIhTAAIgbBzIBTAAIgPBBgAkxB7IA4j1ICuAAQA/AAAdAVQAgAVAAAtQAAARgGAYQgKAsgUAaQgRAZghALQgfALg1AAgAjOA2ICTAAIAahrIiUAAgAnCB7IhHhVIghAAIgUBVIhTAAIA5j1IDFAAQAvAAAXARQAYARAAAeQAAAKgDAMQgIAjgaASQgaATguACIBJBTIAAACgAoegNICJAAIAKguIiJAAgAzPB7Ig1jCIgCAAIgtDCIhQAAIA5j1ICHAAIA1DDIACAAIAtjDIBQAAIg5D1g");
	this.shape.setTransform(153.875,21.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AKoDOIgBADIhAAGQglADgqABIhLACQg2AAgogMIgCAGImxAAIAAgCQgUACgVAAIl0AAIgGgHIgCAHIkPAAIAAgCQgtAIg4AAQhZAAg4gZIgFATIn3AAIBimtIH4AAIgBACQAtgIA4AAQBZAAA5AaIAEgUIEPAAQAsAAAiAMIADgMID3AAQAyAAAnAMIADgMIGTAAQAkgGApAAQBQAABRAGIA6AGQAygMBEAAQBpAAA7AjIAAAAQAtAbAWAvIAZheIA/gHQBPgIBFAAQBOAAAxAcIABAAQAjAUATAgQAUAhAAAqQAAATgEATIAAAAIAAABQgHAegRAaIgqC5InTAAIAJgjQgbARggAJQgzAPhPAAQhFAAgxgPg");
	this.shape_1.setTransform(151.525,22.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx1_2_mask, new cjs.Rectangle(0,0,303.1,44.3), null);


(lib.tx1_1_mask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxPCjIAHgmQAqAFATACQAdACAhABIAGgaIhVAAIAHgcIBRAAIAFgaIg6ADIg8AGIAKglQBAgGAhAAQAdAAAQAIQAPAHAAARIgCAKQgDANgHAIQgIAIgNAEQAKADAGAGQAFAHAAAJIgBALQgDANgJAIQgJAJgPADQgRAEgYAAQgxAAg2gGgAQgClIgGgbIhJAAIgTAbIg1AAIAAgBIBhiLIBEAAIAiCLIAAABgAPmBqIAtAAIgLgwIgBAAgANLClIAMgzIhRAAIgMAzIgwAAIAhiMIAvAAIgLAxIBRAAIALgxIAwAAIghCMgAJ4ClIAYhnIgBAAIhRBnIhJAAIAgiMIAvAAIgYBnIACAAIBRhnIBIAAIggCMgADeClIAgiMIAwAAIgYBlIAzAAIAXhlIAwAAIgYBlIAzAAIAYhlIAvAAIggCMgABTClIALguIgaAAIg1AuIg8AAIABgBIA3gvQgQgDgJgJQgIgIAAgPIACgNQAFgWAPgLQAQgLAeAAIB1AAIggCMgAAYBZIBNAAIAGgcIhMAAgAh1ClIALguIgaAAIg1AuIg8AAIAAgBIA4gvQgRgDgJgJQgIgIAAgPIACgNQAFgWAQgLQARgLAdAAIB1AAIggCMgAivBZIBMAAIAGgcIhMAAgAk+ClIAMgzIhQAAIgMAzIgwAAIAgiMIAwAAIgLAxIBQAAIAMgxIAvAAIggCMgAoRClIAZhrIgBAAIg2BPIguAAIgPhPIgBAAIgZBrIgwAAIAgiMIBIAAIAOBLIABAAIAyhLIBMAAIggCMgAsIClIAYhnIgCAAIhRBnIhIAAIAgiMIAvAAIgYBnIABAAIBRhnIBJAAIggCMgAkGghQgVgMAAgcQAAgLADgNQAHgdALgOQANgPAWgGQAXgHAkAAQAtAAAWANQAVAMAAAcQAAAKgDAOQgHAcgLAPQgNAPgWAHQgVAGgmAAQgtAAgWgNgAjsg9IBeAAIAPhBIheAAgAG4gYIALguIgaAAIg1AuIhtAAIgGgbIhJAAIgSAbIg2AAIABgBIBhiLIBEAAIAiCLIA4gvQgRgDgIgJQgJgJAAgOQAAgFACgIQAFgWAQgLQARgLAdAAIB1AAIggCMgADOhTIAsAAIgKgwIgBAAgAF+hkIBMAAIAGgcIhMAAgAhIgYIAgiMIBzAAQA1AAAAAeQAAAGgBAFQgDAMgHAGQgHAIgOADQAXAGAAASIgBAKQgGAVgOAHQgPAIgbAAgAgRg8IBWAAIAEgUIhWAAgAgGhtIBRAAIAEgTIhRAAgAlygYIAMg0IhRAAIgMA0IgwAAIAgiMIAwAAIgLAxIBQAAIAMgxIAvAAIggCMg");
	this.shape.setTransform(117.475,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AxQDdIg/gGIAfiaIAEABIAZhYIAngEQBBgFAmAAQAbAAAVAGIABgDIFtAAIAsi+IElAAQAbgDAZAAQAvAAAgANIACgKIChAAQApAAAcAQQAJAFAHAIIAUgdICPAAIAFAUQAegUAtAAIC9AAIgrC+II3AAIAvDDIgCANIAAABIgKAuIiOAAIgFgXIgQAXI+XAAQgUADgZAAQg8AAgxgFg");
	this.shape_1.setTransform(116.8,22.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx1_1_mask, new cjs.Rectangle(0,0,233.6,45.3), null);


(lib.snow2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.snow2();
	this.instance.setTransform(90,523);

	this.instance_1 = new lib.snow2();
	this.instance_1.setTransform(90,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snow2_1, new cjs.Rectangle(90,0,1700,1023), null);


(lib.snow1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.snow1();
	this.instance.setTransform(0,501);

	this.instance_1 = new lib.snow1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snow1_1, new cjs.Rectangle(0,0,1700,1001), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAJIAGgOQADgEACAAQAPAAAHACQAFAAABAEQAAADgDADIgJAFQgGACgJAAIgMgBg");
	this.shape.setTransform(222.0031,5.0336);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDDcIjEgBIC8msQAFgKAJAAIC6AAIALABIi8GrQgFALgJAAIgBAAg");
	this.shape_1.setTransform(307.9875,46.001);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjHDcIAEgLIC3mgQAGgMAMAAIC0AAIAOABIi6GnIgHAOIgPABg");
	this.shape_2.setTransform(96,46.024);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABYDcIkNAAQgMAAgJgCQgPgDgIgEQgVgKgIgSQgIgSAGgVIAFgPICZlWQADgGAHAAIDZAAIgCAJIgTArQgEAIgJAAIgtgBQgNAAgFANIgCAGIDmAAIgDALIgwBsQgEAJgLAAIidAAIgxBuQgGANAFAJQAFAKAOACICEABIgEALIgdBBQgFAMgLAAIgBAAg");
	this.shape_3.setTransform(265.9964,46.0242);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABZDcIkUAAQgTAAgTgJQgVgJgIgSQgJgTAHgVQADgMAHgNICRlGQAGgMAMAAIDVAAIgJAUIgOAhQgEAHgIAAIgtAAQgOgCgDANIgDAGQADACAJAAIDaAAIgEALIgwBrQgFAKgLgBIicAAIgxBuQgGANAGAKQAFAJAOACICDAAIgDALIgfBFQgEAJgJAAIgBAAg");
	this.shape_4.setTransform(217.9842,46.0253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Aj4DcQgeAAgegNQgagLgNgWQgOgXACgfQACgUAJgXIBUjDQAhhQBZgSQAKgDAPAAIDeAAIgEALIgrBgQgFAKgLAAIh5AAIg/CFQgJATgCATQgCAjAjADQA1AGAxgXQAIgEAGgLIB9kZQAGgNANAAIDRAAIgFANIiGEpQgGAPAFAKQAGAJARABICAAAIgDAJIgfBGQgEAJgKAAIkTgBQgbAAgQgLIgagWQgZARghAIQgoALgnACIhDACIgMAAg");
	this.shape_5.setTransform(152.0061,46.0291);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AvTBGIAEgMIA5h2QAFgJALAAIdaAAIgFAMIg1BzQgFAMgOAAgALBATQgEACgIAKIACACQAlAHAkgGQAPgCARgGQAIgDAGgJQAJgJgLgGQgFgDgGgCIgpgKQAEgIAIAAQAUgBAQABQARACAGgQQgXgFgjADQgbACgRAKQgNAIABAIQABAIANAEIAcAGIAIACQADABADAEQgDAEgJACQgJADgNgBIgXgDIgEgBQgFAAgCACgAgOgnQgJABgDAHIgeA8IgDAHIAoAAIADgDIAIgQQAEgIADgCQADgCAIACQAHABACACQADADAAAGIABAQIAqAAQABgRgBgFQgCgGgJgHQAHgBAEgCIATgLQAHgFgBgGQgBgGgIgDQgGgDgLgCQgSgCgVAAQgTAAgUACgAFighIgeA9IgDAHIBqAAIAHgQIg+AAQACgKADgDQACgCAKAAIAuAAIAAAAIAIgPIg4AAQACgJACgCQADgCAHAAIA0AAIAIgPIgGgBIhbgBQgGAAgEAIgAmzgoIAYAnQAFAFgEAIIgLAXIApAAIAJgSQAFgKAJgGIA5gjIAIgGIgQAAIgQgBQgLAAgFACQgGACgHAGIgMALIgMAKIgMgegAr3gXIgcA6IAqAAIAFgKIAVgqQADgHAJAAIAbAAQAIABACgHIAEgKIhzgBQgKAAgEAJIgCAHIATABIAFAAQAJAAAFABg");
	this.shape_6.setTransform(218,7.0238);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Al4FnQgkgBgbgbQgegcAAgsQAAgQAJgYIA6iVIChmbIAFgOQADgBAOAAIDJAAIjFH6IALgEIEtiyQAHgFAFgJIA7iMQADgJAKABIAoAAQALgBADgCQADgCADgNIh8AAIADgKIA4h/QAEgKALAAIEXABIjDGyQgMAcgcARIl6DgQgaAPgYAAg");
	this.shape_7.setTransform(47,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,328,72), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAAiuQBJAAAzAzQAzAzAABIQAABJgzAzQgzAzhJAAQhIAAgzgzQgFgFgFgFQgpgwAAhCQAAhAApgwQAFgGAFgFQAzgzBIAAg");
	this.shape.setTransform(18,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVBOQgOgXAAg2QAAgxANgaQANgZAYAAQAWAAANAVQAOAZAAA2QAAAxgMAZQgMAZgZAAQgWAAgOgWgAhHg/QgJASAAAuQAAAuAJASQAJAPANAAQAOAAAIgQQAJgRAAguQAAgvgJgRQgJgQgOAAQgNAAgIAQgAAqA8IAAgxIgqAAIAAgVIAqAAIAAgxIARAAIAAAxIApAAIAAAVIgpAAIAAAxg");
	this.shape_1.setTransform(17.975,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.5,-0.5,37,37), null);


(lib.disc_b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AAAiuQBJAAAyAzQA0AzAABIQAABJg0AzQgyAzhJAAQhIAAgzgzQgFgFgFgFQgpgwAAhCQAAhBApgvQAFgGAFgFQAzgzBIAAg");
	this.shape.setTransform(1367.5,-82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhVBOQgOgXAAg3QAAgvANgbQANgZAYAAQAWAAANAVQAOAZAAA1QAAAygMAZQgMAZgZAAQgWAAgOgWgAhHg/QgJARAAAuQAAAwAJAQQAJARANgBQAOAAAIgQQAJgQAAgwQAAgvgJgQQgJgQgOAAQgNAAgIAQgAAqA8IAAgyIgqAAIAAgUIAqAAIAAgxIARAAIAAAxIApAAIAAAUIgpAAIAAAyg");
	this.shape_1.setTransform(1367.475,-82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA3QgMgMAAgUIANgCQABALAEAGQAEAGAHADQAHAFAHAAQANgBAHgGQAHgGAAgKQAAgGgDgEQgDgEgFgDQgFgCgPgGQgPgEgHgDQgGgEgEgIQgDgGAAgJQAAgQAKgJQAKgKARAAQALgBAJAFQAJAEAFAKQAFAIAAAMIgOABQgBgMgGgGQgHgHgLAAQgLAAgGAGQgHAFAAAIQAAAIAFAFQAFAEAPAFQAPAEAHADQAJAEAFAIQAFAIAAALQAAALgFAJQgFAJgJAFQgJAFgNgBQgSAAgMgLg");
	this.shape_2.setTransform(360.125,30.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBAIAAh/IBMAAIAAAPIg9AAIAAAnIA5AAIAAAPIg5AAIAAArIBAAAIAAAPg");
	this.shape_3.setTransform(350.55,30.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdBAIgOgbIgMgUQgEgGgDgCQgEgCgHABIgQAAIAAA4IgPAAIAAh/IAuAAQAPAAAHADQAHAEAEAIQAFAJAAALQAAAPgIAIQgHAJgPACQAGADADAEQAGAIAFAIIATAjgAgfgHIAdAAQAJABAGgDQAFgCADgGQACgEAAgHQABgKgHgFQgFgGgLAAIggAAg");
	this.shape_4.setTransform(340.65,30.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBAIAAg2IgphJIARAAIAVAmIAKAXIAMgYIAUglIAQAAIgqBJIAAA2g");
	this.shape_5.setTransform(329.95,30.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBAIAAhwIgjAAIAAgPIBTAAIAAAPIgjAAIAABwg");
	this.shape_6.setTransform(320.6,30.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAhBAIgMgmIgsAAIgLAmIgPAAIAph/IAOAAIArB/gAgGgZIgMAkIAjAAIgMgiIgGgbIgFAZg");
	this.shape_7.setTransform(307.1,30.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAlBAIAAhrIgfBrIgLAAIgfhsIAABsIgNAAIAAh/IAUAAIAaBaIADATIAGgUIAahZIASAAIAAB/g");
	this.shape_8.setTransform(296,30.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAiBAIgNgmIgrAAIgMAmIgOAAIAoh/IAOAAIAsB/gAgHgZIgMAkIAjAAIgKgiIgHgbIgGAZg");
	this.shape_9.setTransform(285,30.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAUBAIgSgjQgHgQgGgEQgFgFgFAAIgBAAIAAA8IgOAAIAAh/IAOAAIAAA4QAJAAAEgEQAFgFAFgRQAEgNADgGQAEgGAEgDQAGgCAJAAIAFAAIAAAOIgDAAIgDAAQgFABgEADQgDADgFAOQgFAQgEAEQgDAFgFADQAJACAKATIAWArg");
	this.shape_10.setTransform(276.3,30.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVAvIAAglIgIAAQgGAAgEACQgDADgGALIgLAVIgQAAIAOgZQAGgMAHgBQgLgCgGgHQgFgIAAgKQAAgNAHgHQAHgIANAAIAjAAIAABdgAgLgcQgEAEAAAGQAAAJAFADQAFAEAMAAIAOAAIAAgeIgSAAQgLAAgDAEg");
	this.shape_11.setTransform(262.975,32.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATAvIAAhGIgkBGIgNAAIAAhdIAMAAIAABGIAjhGIAOAAIAABdg");
	this.shape_12.setTransform(255.225,32.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYBBIAAgkIg6AAIAAhdIANAAIAABQIAjAAIAAhQIANAAIAABQIAIAAIAAAxg");
	this.shape_13.setTransform(247.15,34.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAvIgOgdQgDgJgDgDQgDgCgFAAIAAArIgNAAIAAhdIANAAIAAApQAHAAACgDQADgDADgOQAEgLACgEQADgDADgBQADgCAHAAIACAAIAAANIgEAAQgEAAgCACQgCABgBAFQgEAOgDAEQgCAEgFADQAIACAIAQIAOAdg");
	this.shape_14.setTransform(239.95,32.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcBAIgBgPIAIABQADAAAEgBIAEgGIAFgPIgdhdIAOAAIAQA2IAEAVIAFgUIARg3IANAAIgdBeQgGATgCAGQgDAGgFADQgEADgFAAQgEAAgFgCg");
	this.shape_15.setTransform(232.55,34.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeA8IAAgbIg7AAIAAAbIgLAAIAAgnIAHAAQAOgWgBg6IA1AAIAABQIAIAAIAAAngAgVAVIApAAIAAhDIgdAAQgBAugLAVg");
	this.shape_16.setTransform(224.275,33.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAlQgKgNAAgYQAAgXAKgMQAKgNAPAAQAPAAALANQAKAMAAAXQAAAYgKANQgKAMgQAAQgPAAgKgMgAgPgaQgHAJABARQgBASAHAJQAGAJAJAAQAKAAAGgJQAHgJAAgSQAAgRgHgJQgGgJgKAAQgJAAgGAJg");
	this.shape_17.setTransform(216.05,32.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggBCIAAiBIAMAAIAAANQAEgIAGgDQAFgEAGAAQAJAAAHAGQAHAFAFALQAEALAAAPQAAAXgKANQgKANgNAAQgFAAgFgDQgFgDgEgGIAAAugAgOgrQgGAKAAASQAAARAGAIQAGAJAIAAQAIAAAGgJQAGgJAAgRQAAgTgGgJQgGgIgIAAQgIAAgGAJg");
	this.shape_18.setTransform(208.075,34.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAcBAIAAhwIg2AAIAABwIgOAAIAAh/IBRAAIAAB/g");
	this.shape_19.setTransform(198.525,30.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_20.setTransform(187.1,36.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTA/QABgPAFgWQAEgWAJgSQAIgUAJgNIgyAAIAAgQIBDAAIAAAMQgPAVgMAeQgLAggBAfg");
	this.shape_21.setTransform(180.9,30.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAzQgJgPgBgkQABgfAIgRQAJgRAQAAQAPAAAIAOQAMAQAAAjQgBAggIARQgJARgRAAQgPAAgJgPgAgPgpQgFALgBAeQABAgAFAKQAHALAIAAQAJAAAGgLQAGgLAAgfQAAgegGgLQgGgLgJAAQgIAAgHALg");
	this.shape_22.setTransform(172.65,30.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYA3QgKgLAAgRQAAgNAFgJQAGgHAJgDQgIgEgEgGQgEgHAAgJQAAgPAJgJQAJgKAMAAQANAAAJAKQAIAJAAAPQAAAJgEAHQgDAGgIAEQAJAEAGAHQAFAJAAAMQAAARgKALQgKALgPAAQgOAAgKgLgAgOAIQgHAHAAAMQAAALAHAIQAGAHAIAAQAJAAAGgHQAGgHAAgMQAAgMgGgHQgGgHgJAAQgIAAgGAHgAgLguQgFAGAAAIQAAAJAFAGQAFAGAGAAQAHAAAFgGQAFgFAAgJQAAgJgFgGQgFgGgHAAQgGAAgFAGg");
	this.shape_23.setTransform(164.475,30.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAJBAIAAgeIgtAAIAAgPIAwhSIAKAAIAABSIAPAAIAAAPIgPAAIAAAegAgXATIAgAAIAAg5g");
	this.shape_24.setTransform(156.025,30.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgiBBQAAgJAGgMQAGgLAPgQQARgRAGgKQAGgKAAgIQAAgKgGgGQgGgHgIAAQgIAAgGAHQgGAHAAAMIgNgBQABgTAJgJQAJgKAOAAQAQAAAJALQAIALAAAOQAAAMgHAMQgGAKgSATIgOAQIgGAJIAzAAIAAAPg");
	this.shape_25.setTransform(147.9481,30.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAzQgKgPABgkQgBgfAJgRQAJgRAQAAQAPAAAIAOQAMAQgBAjQABAggKARQgIARgRAAQgOAAgKgPgAgOgpQgHALAAAeQAAAgAHAKQAFALAJAAQAJAAAGgLQAGgLAAgfQAAgegGgLQgGgLgJAAQgIAAgGALg");
	this.shape_26.setTransform(139.85,30.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAGBBIAAhkQgEAFgHAGIgNAIIAAgPQAKgGAIgJQAHgJAEgJIAJAAIAACBg");
	this.shape_27.setTransform(131.15,30.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYA3QgJgKgBgQIANgCQACANAFAFQAHAHAHAAQAIAAAGgJQAHgIAAgPQAAgOgGgGQgHgIgIAAQgGAAgGAEQgEACgEAGIgMgDIAKhBIA0AAIAAAQIgqAAIgFAiQAKgIAJAAQANAAAKAMQAKAKAAASQAAAUgKANQgKANgPAAQgOAAgKgJg");
	this.shape_28.setTransform(123.5,30.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYA0QgKgPAAgiQAAgkALgQQAKgQAQAAQAMAAAIAJQAIAIACAPIgNACQgCgKgDgEQgGgHgHAAQgKAAgHAOQgGANAAAXQAEgIAHgEQAHgFAHAAQAMAAAJAMQAKAKAAATQAAANgFAKQgFALgHAFQgHAFgJAAQgPAAgLgOgAgNACQgGAHAAANQAAAOAHAJQAGAIAIAAQAHAAAHgIQAGgIAAgOQAAgOgGgHQgGgHgJAAQgHAAgHAHg");
	this.shape_29.setTransform(115.225,30.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAGBBIAAhkQgEAFgHAGIgOAIIAAgPQALgGAIgJQAIgJADgJIAJAAIAACBg");
	this.shape_30.setTransform(106.55,30.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbBAIAAg8Ig1AAIAAA8IgOAAIAAh/IAOAAIAAA1IA1AAIAAg1IAOAAIAAB/g");
	this.shape_31.setTransform(93.575,30.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAbBAIAAg8Ig1AAIAAA8IgOAAIAAh/IAOAAIAAA1IA1AAIAAg1IAOAAIAAB/g");
	this.shape_32.setTransform(82.975,30.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAdBAIAAhkIg3BkIgPAAIAAh/IAOAAIAABlIA3hlIAOAAIAAB/g");
	this.shape_33.setTransform(72.4,30.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHAPQAEgCACgEQABgEAAgIIgGAAIAAgSIAOAAIAAASQAAAKgDAGQgDAGgFADg");
	this.shape_34.setTransform(60.925,37.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCAoIASgoIgSgnIAKAAIAXAnIgXAogAgeAoIATgoIgTgnIALAAIAWAnIgWAog");
	this.shape_35.setTransform(54.775,32.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiBAIgNgmIgsAAIgLAmIgPAAIAph/IAOAAIArB/gAgHgZIgLAkIAjAAIgLgiIgHgbIgGAZg");
	this.shape_36.setTransform(45.85,30.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAlBAIAAhrIgfBrIgLAAIgfhsIAABsIgOAAIAAh/IAVAAIAZBaIAFATIAFgUIAZhZIATAAIAAB/g");
	this.shape_37.setTransform(34.75,30.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAhBAIgMgmIgrAAIgMAmIgOAAIAoh/IAOAAIAsB/gAgGgZIgNAkIAjAAIgLgiIgGgbIgFAZg");
	this.shape_38.setTransform(23.75,30.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAUBAIgSgjQgHgQgGgEQgEgFgGAAIgBAAIAAA8IgOAAIAAh/IAOAAIAAA4QAJAAAFgEQADgFAGgRQAEgNAEgGQACgGAGgDQAFgCAJAAIAFAAIAAAOIgDAAIgDAAQgGABgDADQgEADgEAOQgGAQgDAEQgEAFgEADQAJACAKATIAWArg");
	this.shape_39.setTransform(15.05,30.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAUAoIgWgoIAWgnIALAAIgTAnIATAogAgHAoIgXgoIAXgnIAKAAIgSAnIASAog");
	this.shape_40.setTransform(6.025,32.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAcAvIAAhKIgXBKIgKAAIgWhOIAABOIgNAAIAAhdIAVAAIATBKIAWhKIATAAIAABdg");
	this.shape_41.setTransform(334.675,13.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAlQgLgNAAgYQAAgXALgMQAJgNAPAAQAQAAAJANQALAMAAAXQAAAYgKANQgLAMgPAAQgOAAgKgMgAgPgaQgGAJgBARQABASAGAJQAHAJAJAAQAIAAAHgJQAGgJAAgSQAAgRgGgJQgHgJgJAAQgIAAgHAJg");
	this.shape_42.setTransform(325.45,13.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAeA8IAAgaIg7AAIAAAaIgLAAIAAgoIAHAAQAOgVgBg6IA1AAIAABPIAIAAIAAAogAgVAUIApAAIAAhBIgdAAQgBAtgLAUg");
	this.shape_43.setTransform(316.875,15.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATBAIAAhFIgkBFIgNAAIAAhcIAMAAIAABGIAjhGIAOAAIAABcgAgOguQgGgGgBgLIAJAAQACALAKAAQAFAAADgCQADgDABgGIAJAAQgBALgGAGQgGAFgIAAQgIAAgGgFg");
	this.shape_44.setTransform(304.625,12.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAgAvIAAhdIAMAAIAABdgAgrAvIAAhdIANAAIAAAlIAQAAQARAAAIAIQAIAIAAALQAAAMgHAIQgIAJgPAAgAgeAiIANAAQAPAAADgFQAEgFAAgFQAAgIgEgEQgEgEgMAAIgPAAg");
	this.shape_45.setTransform(294.875,13.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeAvIAAhdIAdAAQAKAAAFACQAFACAFAGQAEAGAAAJQAAAOgJAGQAMAFAAARQAAAKgGAIQgGAIgQAAgAgSAiIASAAQAKAAAEgEQAEgDAAgHQAAgIgEgDQgFgDgLAAIgQAAgAgSgGIAOAAIALgBQADgBACgEQADgDAAgEQAAgIgFgDQgEgCgJAAIgPAAg");
	this.shape_46.setTransform(285.775,13.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAlQgKgNAAgYQAAgXAKgMQALgNAOAAQAPAAALANQAKAMAAAXQAAAYgKANQgLAMgPAAQgOAAgLgMgAgPgaQgHAJAAARQAAASAHAJQAGAJAKAAQAJAAAGgJQAHgJgBgSQABgRgHgJQgGgJgKAAQgJAAgGAJg");
	this.shape_47.setTransform(277.5,13.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgVAvIAAhdIArAAIAAAOIgeAAIAABPg");
	this.shape_48.setTransform(271.25,13.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AggBCIAAiBIAMAAIAAANQAEgIAGgDQAFgEAGAAQAJAAAHAGQAHAFAFALQAEALAAAPQAAAXgKANQgKANgNAAQgFAAgFgDQgFgDgEgGIAAAugAgOgrQgGAKAAASQAAARAGAIQAGAJAIAAQAIAAAGgJQAGgJAAgRQAAgTgGgJQgGgIgIAAQgIAAgGAJg");
	this.shape_49.setTransform(264.125,15.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAlQgLgNAAgYQAAgXALgMQAKgNAOAAQAQAAAJANQALAMAAAXQAAAYgKANQgLAMgPAAQgOAAgKgMgAgPgaQgGAJgBARQABASAGAJQAHAJAJAAQAIAAAHgJQAGgJAAgSQAAgRgGgJQgHgJgJAAQgIAAgHAJg");
	this.shape_50.setTransform(255.7,13.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGBBIAAhxIgjAAIAAgQIBTAAIAAAQIgjAAIAABxg");
	this.shape_51.setTransform(247.2,12.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAUAoIgWgoIAWgnIALAAIgTAnIATAogAgHAoIgXgoIAXgnIAKAAIgSAnIASAog");
	this.shape_52.setTransform(238.475,13.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AglAvQgNgTAAgaQAAggAPgSQAPgSAUAAQAOAAALAIQAMAIAHAQQAGAOAAAUQABAdgNASQgPAUgXAAQgXgBgOgTgAgZgmQgKAOAAAaQAAAYALANQAKANAOAAQAPAAALgNQAKgOAAgZQAAgQgFgNQgFgKgHgGQgJgGgKAAQgOAAgLANg");
	this.shape_53.setTransform(224.65,12.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkAvQgNgTgBgaQAAggAPgSQAPgSAUAAQAOAAAMAIQALAIAHAQQAHAOgBAUQAAAdgNASQgOAUgXAAQgWgBgOgTgAgZgmQgKAOAAAaQAAAYAKANQALANAOAAQAPAAALgNQAKgOAAgZQAAgQgFgNQgFgKgHgGQgJgGgKAAQgPAAgKANg");
	this.shape_54.setTransform(213.15,12.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkAvQgOgTAAgaQAAggAPgSQAPgSAUAAQAOAAAMAIQALAIAHAQQAHAOAAAUQAAAdgOASQgOAUgXAAQgWgBgOgTgAgZgmQgKAOAAAaQAAAYAKANQALANAOAAQAQAAAKgNQAKgOAAgZQAAgQgFgNQgEgKgJgGQgIgGgKAAQgPAAgKANg");
	this.shape_55.setTransform(201.65,12.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgHAvIAAgSIAPAAIAAASgAgHgcIAAgSIAPAAIAAASg");
	this.shape_56.setTransform(189.75,13.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgfAvIAAhdIANAAIAAAlIARAAQARAAAHAIQAJAIgBALQABAMgIAIQgHAJgQAAgAgSAiIAOAAQAOAAAEgFQAEgFAAgFQAAgIgFgEQgEgEgLAAIgQAAg");
	this.shape_57.setTransform(184.05,13.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgkAvIAAgOIALgBIACgCQABgCAAgOIAAg8IA8AAIAABdIgOAAIAAhPIghAAIAAAtIgBAVQgBAFgEAEQgEAEgHAAIgKAAg");
	this.shape_58.setTransform(175.25,13.95);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgYAlQgKgNAAgXQAAgXAKgNQAKgNAPAAQAPAAAJANQAKAMAAAXIAAAEIg4AAQABAQAHAIQAGAIAIAAQAPAAAGgTIANACQgDAPgJAHQgJAIgNAAQgPAAgKgMgAgNgbQgGAHgBAMIAqAAQgBgMgEgGQgHgJgJAAQgIAAgGAIg");
	this.shape_59.setTransform(167.175,13.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFAvIAAhPIgZAAIAAgOIA9AAIAAAOIgYAAIAABPg");
	this.shape_60.setTransform(159.775,13.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgbAqQgHgIAAgMQAAgIADgGQAEgGAFgDQAGgDAMgCQAPgCAHgEIAAgEQAAgJgDgEQgFgGgKAAQgIAAgFAEQgEAEgCAKIgNgCQADgPAIgHQAIgHAPAAQAMAAAHAFQAHAEABAHQACAHAAANIAAAUQAAAWABAGQABAFACAGIgNAAQgCgFgBgHQgGAHgHADQgGAEgIAAQgMAAgHgHgAgCAGQgIABgDACQgEACgCADQgBADAAAFQAAAGAEAFQAEADAHAAQAGAAAGgDQAFgEADgGQADgGAAgLIAAgGQgHADgNADg");
	this.shape_61.setTransform(152.225,13.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAeA8IAAgaIg7AAIAAAaIgLAAIAAgoIAHAAQAOgVgBg6IA1AAIAABPIAIAAIAAAogAgVAUIApAAIAAhBIgdAAQgBAtgLAUg");
	this.shape_62.setTransform(143.675,15.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYAlQgLgNAAgYQAAgXALgMQAJgNAPAAQAQAAAJANQALAMAAAXQAAAYgKANQgLAMgPAAQgPAAgJgMgAgPgaQgGAJgBARQABASAGAJQAHAJAJAAQAIAAAHgJQAGgJAAgSQAAgRgGgJQgHgJgJAAQgIAAgHAJg");
	this.shape_63.setTransform(135.45,13.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAcAvIAAhKIgXBKIgKAAIgWhOIAABOIgNAAIAAhdIAVAAIATBKIAWhKIATAAIAABdg");
	this.shape_64.setTransform(126.325,13.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgbAqQgHgIAAgMQAAgIADgGQAEgGAFgDQAGgDAMgCQAPgCAHgEIAAgEQAAgJgDgEQgFgGgKAAQgIAAgFAEQgEAEgCAKIgNgCQADgPAIgHQAIgHAPAAQAMAAAHAFQAHAEABAHQACAHAAANIAAAUQAAAWABAGQABAFACAGIgNAAQgCgFgBgHQgGAHgHADQgGAEgIAAQgMAAgHgHgAgCAGQgIABgDACQgEACgCADQgBADAAAFQAAAGAEAFQAEADAHAAQAGAAAGgDQAFgEADgGQADgGAAgLIAAgGQgHADgNADg");
	this.shape_65.setTransform(117.075,13.925);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AglAvIAAgOIALgBIADgCQABgCAAgOIAAg8IA8AAIAABdIgOAAIAAhPIghAAIAAAtIgBAVQgBAFgDAEQgFAEgHAAIgLAAg");
	this.shape_66.setTransform(108.35,13.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAOAvIgOgdQgDgJgEgDQgDgCgEAAIAAArIgNAAIAAhdIANAAIAAApQAGAAADgDQACgDAEgOQAEgLADgEQACgDADgBQADgCAIAAIACAAIAAANIgFAAQgEAAgBACQgCABgCAFQgEAOgCAEQgDAEgEADQAHACAIAQIAOAdg");
	this.shape_67.setTransform(101.75,13.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgYAlQgKgNAAgXQAAgXAKgNQAKgNAPAAQAPAAAJANQAKAMAAAXIAAAEIg4AAQABAQAHAIQAGAIAIAAQAPAAAGgTIANACQgDAPgJAHQgJAIgNAAQgPAAgKgMgAgNgbQgGAHgBAMIAqAAQgBgMgEgGQgHgJgJAAQgIAAgGAIg");
	this.shape_68.setTransform(93.825,13.925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnBBIAAiBIAnAAQANAAAHADQAJADAGAJQAFAKAAAMQAAASgJAKQgJALgVAAIgaAAIAAA1gAgZgCIAaAAQANAAAGgGQAGgGAAgLQAAgIgDgGQgDgFgEgCQgEgCgLAAIgaAAg");
	this.shape_69.setTransform(85.175,12.15);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_70.setTransform(73.9,17.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAhBBIgMgoIgrAAIgMAoIgOAAIAoiBIAOAAIAsCBgAgGgZIgNAlIAjAAIgLgjIgGgbIgFAZg");
	this.shape_71.setTransform(66.95,12.15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAlBBIAAhrIgfBrIgMAAIgehtIAABtIgOAAIAAiBIAWAAIAZBbIADATIAHgVIAZhZIATAAIAACBg");
	this.shape_72.setTransform(55.85,12.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAiBBIgNgoIgsAAIgLAoIgPAAIApiBIAOAAIArCBgAgHgZIgLAlIAjAAIgMgjIgGgbIgGAZg");
	this.shape_73.setTransform(44.85,12.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgpBAIACgPIAGABQAFAAACgEQADgEAAgRIAAhaIBBAAIAACBIgOAAIAAhxIglAAIAABBQAAAUgCAKQgBAJgFAFQgFAGgIAAQgFAAgGgCg");
	this.shape_74.setTransform(34.525,12.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAUBBIgSgjQgIgRgFgFQgFgEgFAAIgBAAIAAA9IgOAAIAAiBIAOAAIAAA5QAKAAADgFQAFgEAEgRQAFgNADgGQAEgFAEgDQAGgEAJAAIAFAAIAAAPIgDAAIgDAAQgGAAgDADQgDAEgFAOQgFAQgEAFQgDAEgFACQAKADAJAUIAWArg");
	this.shape_75.setTransform(26.45,12.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgmBBIAAiBIBLAAIAAAQIg+AAIAAAnIA6AAIAAAOIg6AAIAAAtIBBAAIAAAPg");
	this.shape_76.setTransform(16.9,12.15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgnBBIAAiBIAnAAQANAAAHADQAJADAGAJQAFAKAAAMQAAASgJAKQgJALgVAAIgaAAIAAA1gAgZgCIAaAAQANAAAGgGQAGgGAAgLQAAgIgDgGQgDgFgEgCQgEgCgLAAIgaAAg");
	this.shape_77.setTransform(7.175,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.disc_b, new cjs.Rectangle(0,-101,1386,143.8), null);


(lib.cr4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD00").s().p("EhbrgM7IiMKKMA9LgkgIkeXWMAobgRCIlvSZINGw8ItTWzIdCzxIiBMTMA2cgRTIpATWMAnqgPPIEzaDMAhNgjAMAU4BMAMlQnABmg");
	this.shape.setTransform(1081.875,212.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cr4, new cjs.Rectangle(4.7,-38.7,2154.4,502.9), null);


(lib.cr2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD00").s().p("EBFPAN7MgoQAPwIJazuMg3WASuICBsUI9DTxINU2zItHQ9IDqyeMgklAPdID93MMgzgAgKMAAghMIMD4AAcqMgyLAzJg");
	this.shape.setTransform(281.55,397.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cr2, new cjs.Rectangle(-513.7,142.4,1590.5,510.80000000000007), null);


(lib.but_new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap/BTQgdgRAAglQAAgOAEgSQAJgmARgUQARgVAdgIQAegJAzAAQA8AAAeARQAdARAAAmQAAANgEASQgJAlgRAVQgQAUgeAKQgeAIgzAAQg9AAgdgRgApcAsICAAAIAUhXIiAAAgAN+BfIgIglIhiAAIgZAlIiNAAIgxhHIgVAAIgRBHIhAAAIAsi9IBAAAIgQBGIAOAAIBLhGIBWAAIAAABIhtBdIBBBYICAi2IBcAAIAuC8IAAABgAMxAPIA8AAIgOhAIgCAAgAFnBfIAQhGIhtAAIgQBGIhBAAIAsi9IBAAAIgPBDIBtAAIAPhDIBBAAIgsC9gABKBfIAgiLIgCAAIhsCLIhjAAIAsi9IA+AAIgfCLIACAAIBtiLIBiAAIgsC9gAl+BfIAsi9ICcAAQBIAAAAAqIgBAOQgEAQgKAJQgJAKgTADQAfAIAAAZIgCAOQgHAZgTAMQgUALgmAAgAk0AvIB2AAIAGgcIh2AAgAkkgTIBvAAIAGgaIhwAAgAsSBfIAQhGIhtAAIgQBGIhAAAIAri9IBBAAIgQBDIBuAAIAPhDIBAAAIgrC9g");
	this.shape.setTransform(-0.0102,0.004,0.9132,0.9135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AumC5QhCAAgvgvQgvguAAhDIAAgxQAAhCAvgvQAvgvBCAAIdNAAQBCAAAvAvQAvAvAABCIAAAxQAABDgvAuQgvAvhCAAg");
	this.shape_1.setTransform(-0.0004,0.004,0.9132,0.9135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.but_new, new cjs.Rectangle(-100,-16.9,200,33.8), null);


(lib.bgy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD00").s().p("EhxvAOEIAA8HMDjfAAAIAAcHg");
	this.shape.setTransform(728,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgy, new cjs.Rectangle(0,0,1456,180), null);


(lib.bg_picgray_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.698)"],[0,1],0.1,-53.7,0.1,53.7).s().p("EiFVAIaIAAwzMEKqAAAIAAQzg");
	this.shape.setTransform(0.15,53.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.bg_picgray();
	this.instance.setTransform(-850,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_picgray_1, new cjs.Rectangle(-853.2,-105,1706.7,212.6), null);


(lib.bg_pic_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(7,30,43,0.698)"],[0,1],0.1,-53.7,0.1,53.7).s().p("EiFVAIaIAAwzMEKqAAAIAAQzg");
	this.shape.setTransform(0.15,53.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.bg_pic();
	this.instance.setTransform(-850,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_pic_1, new cjs.Rectangle(-853.2,-105,1706.7,212.6), null);


(lib.tx3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.s4 = new lib.tx34();
	this.s4.name = "s4";
	this.s4.setTransform(9.45,5.25);

	this.s3 = new lib.tx33();
	this.s3.name = "s3";
	this.s3.setTransform(4.8,1.5,1,1,0,0,0,175.3,0);

	this.s2 = new lib.tx32();
	this.s2.name = "s2";
	this.s2.setTransform(14.95,-3.55,1,1,0,0,0,0,13.2);

	this.s1 = new lib.tx31();
	this.s1.name = "s1";
	this.s1.setTransform(8.7,-0.35,1,1,0,0,0,179.2,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4}]}).wait(1));

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A86D3IA1ntMA5AAAAIg1Htg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx3, new cjs.Rectangle(-185.1,-24.6,370.29999999999995,49.3), null);


(lib.tx2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3qB/IAAj9MAvVAAAIAAD9g");
	mask.setTransform(0,0.025);

	// Слой_1
	this.s1 = new lib.tx2_3_mask();
	this.s1.name = "s1";
	this.s1.setTransform(0.05,0,1,1,0,0,0,139.7,12.7);

	var maskedShapeInstanceList = [this.s1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx2_3, new cjs.Rectangle(-139.6,-12.7,279.29999999999995,25.4), null);


(lib.tx2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au7CzIAAllId3AAIAAFlg");
	mask.setTransform(0.025,0.025);

	// Слой_1
	this.s1 = new lib.tx2_2_mask();
	this.s1.name = "s1";
	this.s1.setTransform(0.05,0,1,1,0,0,0,93.2,12.7);

	var maskedShapeInstanceList = [this.s1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx2_2, new cjs.Rectangle(-93.1,-12.7,186.3,25.5), null);


(lib.tx2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1LCzIAAllMAqXAAAIAAFlg");
	mask.setTransform(0,0.025);

	// Слой_1
	this.s1 = new lib.tx2_1_mask();
	this.s1.name = "s1";
	this.s1.setTransform(0.05,0,1,1,0,0,0,135.7,12.7);

	var maskedShapeInstanceList = [this.s1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx2_1, new cjs.Rectangle(-135.6,-12.7,271.29999999999995,25.5), null);


(lib.tx2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// s1
	this.s1 = new lib.tx2_1();
	this.s1.name = "s1";
	this.s1.setTransform(0,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	// s2
	this.s2 = new lib.tx2_2();
	this.s2.name = "s2";
	this.s2.setTransform(0,-0.55);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

	// s3
	this.s3 = new lib.tx2_3();
	this.s3.name = "s3";
	this.s3.setTransform(0,23.25);

	this.timeline.addTween(cjs.Tween.get(this.s3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx2, new cjs.Rectangle(-151.4,-42.7,302.9,78.7), null);


(lib.tx1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4GEIIAAoPMAwNAAAIAAIPg");
	mask.setTransform(148.75,22.575);

	// Слой_1
	this.s1 = new lib.tx1_2_mask();
	this.s1.name = "s1";
	this.s1.setTransform(151.5,22.1,1,1,0,0,0,151.5,22.1);

	var maskedShapeInstanceList = [this.s1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx1_2, new cjs.Rectangle(0,0,303.1,44.3), null);


(lib.tx1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzgEXIAAotMAnBAAAIAAItg");
	mask.setTransform(119.375,24.125);

	// Слой_1
	this.s1 = new lib.tx1_1_mask();
	this.s1.name = "s1";
	this.s1.setTransform(116.8,22.6,1,1,0,0,0,116.8,22.6);

	var maskedShapeInstanceList = [this.s1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx1_1, new cjs.Rectangle(0,0,233.6,45.3), null);


(lib.tx1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// s2
	this.s2 = new lib.tx1_2();
	this.s2.name = "s2";
	this.s2.setTransform(151.5,61.4,1,1,0,0,0,151.5,22.1);

	this.timeline.addTween(cjs.Tween.get(this.s2).wait(1));

	// s1
	this.s1 = new lib.tx1_1();
	this.s1.name = "s1";
	this.s1.setTransform(151.5,22.6,1,1,0,0,0,116.8,22.6);

	this.timeline.addTween(cjs.Tween.get(this.s1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tx1, new cjs.Rectangle(-5.5,-3.8,308.6,92.1), null);


(lib.snow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.sn2 = new lib.snow2_1();
	this.sn2.name = "sn2";
	this.sn2.setTransform(31.35,208,1,1,0,0,0,850,250);

	this.timeline.addTween(cjs.Tween.get(this.sn2).wait(1));

	// Слой_1
	this.sn1 = new lib.snow1_1();
	this.sn1.name = "sn1";
	this.sn1.setTransform(0,0,1,1,0,0,0,850,250);

	this.timeline.addTween(cjs.Tween.get(this.sn1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(-850,-250,1821.4,1231), null);


(lib.disc_w = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Group();
	this.instance.setTransform(1368,-82,1,1,0,0,0,18,18);
	this.instance.alpha = 0.6992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA3QgMgMAAgUIANgCQABALAEAGQAEAGAHADQAHAFAHAAQANgBAHgGQAHgGAAgKQAAgGgDgEQgDgEgFgDQgFgCgPgGQgPgEgHgDQgGgEgEgIQgDgGAAgJQAAgQAKgJQAKgKARAAQALgBAJAFQAJAEAFAKQAFAIAAAMIgOABQgBgMgGgGQgHgHgLAAQgLAAgGAGQgHAFAAAIQAAAIAFAFQAFAEAPAFQAPAEAHADQAJAEAFAIQAFAIAAALQAAALgFAJQgFAJgJAFQgJAFgNgBQgSAAgMgLg");
	this.shape.setTransform(360.125,30.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBAIAAh/IBMAAIAAAPIg9AAIAAAnIA5AAIAAAPIg5AAIAAArIBAAAIAAAPg");
	this.shape_1.setTransform(350.55,30.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdBAIgOgbIgMgUQgEgGgDgCQgEgCgHABIgQAAIAAA4IgPAAIAAh/IAuAAQAPAAAHADQAHAEAEAIQAFAJAAALQAAAPgIAIQgHAJgPACQAGADADAEQAGAIAFAIIATAjgAgfgHIAdAAQAJABAGgDQAFgCADgGQACgEAAgHQABgKgHgFQgFgGgLAAIggAAg");
	this.shape_2.setTransform(340.65,30.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBAIAAg2IgphJIARAAIAVAmIAKAXIAMgYIAUglIAQAAIgqBJIAAA2g");
	this.shape_3.setTransform(329.95,30.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBAIAAhwIgjAAIAAgPIBTAAIAAAPIgjAAIAABwg");
	this.shape_4.setTransform(320.6,30.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBAIgMgmIgsAAIgLAmIgPAAIAph/IAOAAIArB/gAgGgZIgMAkIAjAAIgMgiIgGgbIgFAZg");
	this.shape_5.setTransform(307.1,30.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBAIAAhrIgfBrIgLAAIgfhsIAABsIgNAAIAAh/IAUAAIAaBaIADATIAGgUIAahZIASAAIAAB/g");
	this.shape_6.setTransform(296,30.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBAIgNgmIgrAAIgMAmIgOAAIAoh/IAOAAIAsB/gAgHgZIgMAkIAjAAIgKgiIgHgbIgGAZg");
	this.shape_7.setTransform(285,30.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUBAIgSgjQgHgQgGgEQgFgFgFAAIgBAAIAAA8IgOAAIAAh/IAOAAIAAA4QAJAAAEgEQAFgFAFgRQAEgNADgGQAEgGAEgDQAGgCAJAAIAFAAIAAAOIgDAAIgDAAQgFABgEADQgDADgFAOQgFAQgEAEQgDAFgFADQAJACAKATIAWArg");
	this.shape_8.setTransform(276.3,30.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVAvIAAglIgIAAQgGAAgEACQgDADgGALIgLAVIgQAAIAOgZQAGgMAHgBQgLgCgGgHQgFgIAAgKQAAgNAHgHQAHgIANAAIAjAAIAABdgAgLgcQgEAEAAAGQAAAJAFADQAFAEAMAAIAOAAIAAgeIgSAAQgLAAgDAEg");
	this.shape_9.setTransform(262.975,32.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATAvIAAhGIgkBGIgNAAIAAhdIAMAAIAABGIAjhGIAOAAIAABdg");
	this.shape_10.setTransform(255.225,32.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBBIAAgkIg6AAIAAhdIANAAIAABQIAjAAIAAhQIANAAIAABQIAIAAIAAAxg");
	this.shape_11.setTransform(247.15,34.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOAvIgOgdQgDgJgDgDQgDgCgFAAIAAArIgNAAIAAhdIANAAIAAApQAHAAACgDQADgDADgOQAEgLACgEQADgDADgBQADgCAHAAIACAAIAAANIgEAAQgEAAgCACQgCABgBAFQgEAOgDAEQgCAEgFADQAIACAIAQIAOAdg");
	this.shape_12.setTransform(239.95,32.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcBAIgBgPIAIABQADAAAEgBIAEgGIAFgPIgdhdIAOAAIAQA2IAEAVIAFgUIARg3IANAAIgdBeQgGATgCAGQgDAGgFADQgEADgFAAQgEAAgFgCg");
	this.shape_13.setTransform(232.55,34.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAeA8IAAgbIg7AAIAAAbIgLAAIAAgnIAHAAQAOgWgBg6IA1AAIAABQIAIAAIAAAngAgVAVIApAAIAAhDIgdAAQgBAugLAVg");
	this.shape_14.setTransform(224.275,33.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAlQgKgNAAgYQAAgXAKgMQAKgNAPAAQAPAAALANQAKAMAAAXQAAAYgKANQgKAMgQAAQgPAAgKgMgAgPgaQgHAJABARQgBASAHAJQAGAJAJAAQAKAAAGgJQAHgJAAgSQAAgRgHgJQgGgJgKAAQgJAAgGAJg");
	this.shape_15.setTransform(216.05,32.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggBCIAAiBIAMAAIAAANQAEgIAGgDQAFgEAGAAQAJAAAHAGQAHAFAFALQAEALAAAPQAAAXgKANQgKANgNAAQgFAAgFgDQgFgDgEgGIAAAugAgOgrQgGAKAAASQAAARAGAIQAGAJAIAAQAIAAAGgJQAGgJAAgRQAAgTgGgJQgGgIgIAAQgIAAgGAJg");
	this.shape_16.setTransform(208.075,34.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcBAIAAhwIg2AAIAABwIgOAAIAAh/IBRAAIAAB/g");
	this.shape_17.setTransform(198.525,30.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_18.setTransform(187.1,36.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTA/QABgPAFgWQAEgWAJgSQAIgUAJgNIgyAAIAAgQIBDAAIAAAMQgPAVgMAeQgLAggBAfg");
	this.shape_19.setTransform(180.9,30.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAzQgJgPgBgkQABgfAIgRQAJgRAQAAQAPAAAIAOQAMAQAAAjQgBAggIARQgJARgRAAQgPAAgJgPgAgPgpQgFALgBAeQABAgAFAKQAHALAIAAQAJAAAGgLQAGgLAAgfQAAgegGgLQgGgLgJAAQgIAAgHALg");
	this.shape_20.setTransform(172.65,30.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYA3QgKgLAAgRQAAgNAFgJQAGgHAJgDQgIgEgEgGQgEgHAAgJQAAgPAJgJQAJgKAMAAQANAAAJAKQAIAJAAAPQAAAJgEAHQgDAGgIAEQAJAEAGAHQAFAJAAAMQAAARgKALQgKALgPAAQgOAAgKgLgAgOAIQgHAHAAAMQAAALAHAIQAGAHAIAAQAJAAAGgHQAGgHAAgMQAAgMgGgHQgGgHgJAAQgIAAgGAHgAgLguQgFAGAAAIQAAAJAFAGQAFAGAGAAQAHAAAFgGQAFgFAAgJQAAgJgFgGQgFgGgHAAQgGAAgFAGg");
	this.shape_21.setTransform(164.475,30.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAJBAIAAgeIgtAAIAAgPIAwhSIAKAAIAABSIAPAAIAAAPIgPAAIAAAegAgXATIAgAAIAAg5g");
	this.shape_22.setTransform(156.025,30.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiBBQAAgJAGgMQAGgLAPgQQARgRAGgKQAGgKAAgIQAAgKgGgGQgGgHgIAAQgIAAgGAHQgGAHAAAMIgNgBQABgTAJgJQAJgKAOAAQAQAAAJALQAIALAAAOQAAAMgHAMQgGAKgSATIgOAQIgGAJIAzAAIAAAPg");
	this.shape_23.setTransform(147.9481,30.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYAzQgKgPABgkQgBgfAJgRQAJgRAQAAQAPAAAIAOQAMAQgBAjQABAggKARQgIARgRAAQgOAAgKgPgAgOgpQgHALAAAeQAAAgAHAKQAFALAJAAQAJAAAGgLQAGgLAAgfQAAgegGgLQgGgLgJAAQgIAAgGALg");
	this.shape_24.setTransform(139.85,30.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAGBBIAAhkQgEAFgHAGIgNAIIAAgPQAKgGAIgJQAHgJAEgJIAJAAIAACBg");
	this.shape_25.setTransform(131.15,30.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYA3QgJgKgBgQIANgCQACANAFAFQAHAHAHAAQAIAAAGgJQAHgIAAgPQAAgOgGgGQgHgIgIAAQgGAAgGAEQgEACgEAGIgMgDIAKhBIA0AAIAAAQIgqAAIgFAiQAKgIAJAAQANAAAKAMQAKAKAAASQAAAUgKANQgKANgPAAQgOAAgKgJg");
	this.shape_26.setTransform(123.5,30.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYA0QgKgPAAgiQAAgkALgQQAKgQAQAAQAMAAAIAJQAIAIACAPIgNACQgCgKgDgEQgGgHgHAAQgKAAgHAOQgGANAAAXQAEgIAHgEQAHgFAHAAQAMAAAJAMQAKAKAAATQAAANgFAKQgFALgHAFQgHAFgJAAQgPAAgLgOgAgNACQgGAHAAANQAAAOAHAJQAGAIAIAAQAHAAAHgIQAGgIAAgOQAAgOgGgHQgGgHgJAAQgHAAgHAHg");
	this.shape_27.setTransform(115.225,30.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAGBBIAAhkQgEAFgHAGIgOAIIAAgPQALgGAIgJQAIgJADgJIAJAAIAACBg");
	this.shape_28.setTransform(106.55,30.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAbBAIAAg8Ig1AAIAAA8IgOAAIAAh/IAOAAIAAA1IA1AAIAAg1IAOAAIAAB/g");
	this.shape_29.setTransform(93.575,30.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAbBAIAAg8Ig1AAIAAA8IgOAAIAAh/IAOAAIAAA1IA1AAIAAg1IAOAAIAAB/g");
	this.shape_30.setTransform(82.975,30.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAdBAIAAhkIg3BkIgPAAIAAh/IAOAAIAABlIA3hlIAOAAIAAB/g");
	this.shape_31.setTransform(72.4,30.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHAPQAEgCACgEQABgEAAgIIgGAAIAAgSIAOAAIAAASQAAAKgDAGQgDAGgFADg");
	this.shape_32.setTransform(60.925,37.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCAoIASgoIgSgnIAKAAIAXAnIgXAogAgeAoIATgoIgTgnIALAAIAWAnIgWAog");
	this.shape_33.setTransform(54.775,32.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAiBAIgNgmIgsAAIgLAmIgPAAIAph/IAOAAIArB/gAgHgZIgLAkIAjAAIgLgiIgHgbIgGAZg");
	this.shape_34.setTransform(45.85,30.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAlBAIAAhrIgfBrIgLAAIgfhsIAABsIgOAAIAAh/IAVAAIAZBaIAFATIAFgUIAZhZIATAAIAAB/g");
	this.shape_35.setTransform(34.75,30.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAhBAIgMgmIgrAAIgMAmIgOAAIAoh/IAOAAIAsB/gAgGgZIgNAkIAjAAIgLgiIgGgbIgFAZg");
	this.shape_36.setTransform(23.75,30.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAUBAIgSgjQgHgQgGgEQgEgFgGAAIgBAAIAAA8IgOAAIAAh/IAOAAIAAA4QAJAAAFgEQADgFAGgRQAEgNAEgGQACgGAGgDQAFgCAJAAIAFAAIAAAOIgDAAIgDAAQgGABgDADQgEADgEAOQgGAQgDAEQgEAFgEADQAJACAKATIAWArg");
	this.shape_37.setTransform(15.05,30.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAUAoIgWgoIAWgnIALAAIgTAnIATAogAgHAoIgXgoIAXgnIAKAAIgSAnIASAog");
	this.shape_38.setTransform(6.025,32.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAcAvIAAhKIgXBKIgKAAIgWhOIAABOIgNAAIAAhdIAVAAIATBKIAWhKIATAAIAABdg");
	this.shape_39.setTransform(334.675,13.925);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYAlQgLgNAAgYQAAgXALgMQAJgNAPAAQAQAAAJANQALAMAAAXQAAAYgKANQgLAMgPAAQgOAAgKgMgAgPgaQgGAJgBARQABASAGAJQAHAJAJAAQAIAAAHgJQAGgJAAgSQAAgRgGgJQgHgJgJAAQgIAAgHAJg");
	this.shape_40.setTransform(325.45,13.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAeA8IAAgaIg7AAIAAAaIgLAAIAAgoIAHAAQAOgVgBg6IA1AAIAABPIAIAAIAAAogAgVAUIApAAIAAhBIgdAAQgBAtgLAUg");
	this.shape_41.setTransform(316.875,15.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AATBAIAAhFIgkBFIgNAAIAAhcIAMAAIAABGIAjhGIAOAAIAABcgAgOguQgGgGgBgLIAJAAQACALAKAAQAFAAADgCQADgDABgGIAJAAQgBALgGAGQgGAFgIAAQgIAAgGgFg");
	this.shape_42.setTransform(304.625,12.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAgAvIAAhdIAMAAIAABdgAgrAvIAAhdIANAAIAAAlIAQAAQARAAAIAIQAIAIAAALQAAAMgHAIQgIAJgPAAgAgeAiIANAAQAPAAADgFQAEgFAAgFQAAgIgEgEQgEgEgMAAIgPAAg");
	this.shape_43.setTransform(294.875,13.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgeAvIAAhdIAdAAQAKAAAFACQAFACAFAGQAEAGAAAJQAAAOgJAGQAMAFAAARQAAAKgGAIQgGAIgQAAgAgSAiIASAAQAKAAAEgEQAEgDAAgHQAAgIgEgDQgFgDgLAAIgQAAgAgSgGIAOAAIALgBQADgBACgEQADgDAAgEQAAgIgFgDQgEgCgJAAIgPAAg");
	this.shape_44.setTransform(285.775,13.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgZAlQgKgNAAgYQAAgXAKgMQALgNAOAAQAPAAALANQAKAMAAAXQAAAYgKANQgLAMgPAAQgOAAgLgMgAgPgaQgHAJAAARQAAASAHAJQAGAJAKAAQAJAAAGgJQAHgJgBgSQABgRgHgJQgGgJgKAAQgJAAgGAJg");
	this.shape_45.setTransform(277.5,13.925);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVAvIAAhdIArAAIAAAOIgeAAIAABPg");
	this.shape_46.setTransform(271.25,13.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AggBCIAAiBIAMAAIAAANQAEgIAGgDQAFgEAGAAQAJAAAHAGQAHAFAFALQAEALAAAPQAAAXgKANQgKANgNAAQgFAAgFgDQgFgDgEgGIAAAugAgOgrQgGAKAAASQAAARAGAIQAGAJAIAAQAIAAAGgJQAGgJAAgRQAAgTgGgJQgGgIgIAAQgIAAgGAJg");
	this.shape_47.setTransform(264.125,15.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgYAlQgLgNAAgYQAAgXALgMQAKgNAOAAQAQAAAJANQALAMAAAXQAAAYgKANQgLAMgPAAQgOAAgKgMgAgPgaQgGAJgBARQABASAGAJQAHAJAJAAQAIAAAHgJQAGgJAAgSQAAgRgGgJQgHgJgJAAQgIAAgHAJg");
	this.shape_48.setTransform(255.7,13.925);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGBBIAAhxIgjAAIAAgQIBTAAIAAAQIgjAAIAABxg");
	this.shape_49.setTransform(247.2,12.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAUAoIgWgoIAWgnIALAAIgTAnIATAogAgHAoIgXgoIAXgnIAKAAIgSAnIASAog");
	this.shape_50.setTransform(238.475,13.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AglAvQgNgTAAgaQAAggAPgSQAPgSAUAAQAOAAALAIQAMAIAHAQQAGAOAAAUQABAdgNASQgPAUgXAAQgXgBgOgTgAgZgmQgKAOAAAaQAAAYALANQAKANAOAAQAPAAALgNQAKgOAAgZQAAgQgFgNQgFgKgHgGQgJgGgKAAQgOAAgLANg");
	this.shape_51.setTransform(224.65,12.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgkAvQgNgTgBgaQAAggAPgSQAPgSAUAAQAOAAAMAIQALAIAHAQQAHAOgBAUQAAAdgNASQgOAUgXAAQgWgBgOgTgAgZgmQgKAOAAAaQAAAYAKANQALANAOAAQAPAAALgNQAKgOAAgZQAAgQgFgNQgFgKgHgGQgJgGgKAAQgPAAgKANg");
	this.shape_52.setTransform(213.15,12.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkAvQgOgTAAgaQAAggAPgSQAPgSAUAAQAOAAAMAIQALAIAHAQQAHAOAAAUQAAAdgOASQgOAUgXAAQgWgBgOgTgAgZgmQgKAOAAAaQAAAYAKANQALANAOAAQAQAAAKgNQAKgOAAgZQAAgQgFgNQgEgKgJgGQgIgGgKAAQgPAAgKANg");
	this.shape_53.setTransform(201.65,12.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgHAvIAAgSIAPAAIAAASgAgHgcIAAgSIAPAAIAAASg");
	this.shape_54.setTransform(189.75,13.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgfAvIAAhdIANAAIAAAlIARAAQARAAAHAIQAJAIgBALQABAMgIAIQgHAJgQAAgAgSAiIAOAAQAOAAAEgFQAEgFAAgFQAAgIgFgEQgEgEgLAAIgQAAg");
	this.shape_55.setTransform(184.05,13.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgkAvIAAgOIALgBIACgCQABgCAAgOIAAg8IA8AAIAABdIgOAAIAAhPIghAAIAAAtIgBAVQgBAFgEAEQgEAEgHAAIgKAAg");
	this.shape_56.setTransform(175.25,13.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYAlQgKgNAAgXQAAgXAKgNQAKgNAPAAQAPAAAJANQAKAMAAAXIAAAEIg4AAQABAQAHAIQAGAIAIAAQAPAAAGgTIANACQgDAPgJAHQgJAIgNAAQgPAAgKgMgAgNgbQgGAHgBAMIAqAAQgBgMgEgGQgHgJgJAAQgIAAgGAIg");
	this.shape_57.setTransform(167.175,13.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFAvIAAhPIgZAAIAAgOIA9AAIAAAOIgYAAIAABPg");
	this.shape_58.setTransform(159.775,13.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgbAqQgHgIAAgMQAAgIADgGQAEgGAFgDQAGgDAMgCQAPgCAHgEIAAgEQAAgJgDgEQgFgGgKAAQgIAAgFAEQgEAEgCAKIgNgCQADgPAIgHQAIgHAPAAQAMAAAHAFQAHAEABAHQACAHAAANIAAAUQAAAWABAGQABAFACAGIgNAAQgCgFgBgHQgGAHgHADQgGAEgIAAQgMAAgHgHgAgCAGQgIABgDACQgEACgCADQgBADAAAFQAAAGAEAFQAEADAHAAQAGAAAGgDQAFgEADgGQADgGAAgLIAAgGQgHADgNADg");
	this.shape_59.setTransform(152.225,13.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAeA8IAAgaIg7AAIAAAaIgLAAIAAgoIAHAAQAOgVgBg6IA1AAIAABPIAIAAIAAAogAgVAUIApAAIAAhBIgdAAQgBAtgLAUg");
	this.shape_60.setTransform(143.675,15.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgYAlQgLgNAAgYQAAgXALgMQAJgNAPAAQAQAAAJANQALAMAAAXQAAAYgKANQgLAMgPAAQgPAAgJgMgAgPgaQgGAJgBARQABASAGAJQAHAJAJAAQAIAAAHgJQAGgJAAgSQAAgRgGgJQgHgJgJAAQgIAAgHAJg");
	this.shape_61.setTransform(135.45,13.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAcAvIAAhKIgXBKIgKAAIgWhOIAABOIgNAAIAAhdIAVAAIATBKIAWhKIATAAIAABdg");
	this.shape_62.setTransform(126.325,13.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgbAqQgHgIAAgMQAAgIADgGQAEgGAFgDQAGgDAMgCQAPgCAHgEIAAgEQAAgJgDgEQgFgGgKAAQgIAAgFAEQgEAEgCAKIgNgCQADgPAIgHQAIgHAPAAQAMAAAHAFQAHAEABAHQACAHAAANIAAAUQAAAWABAGQABAFACAGIgNAAQgCgFgBgHQgGAHgHADQgGAEgIAAQgMAAgHgHgAgCAGQgIABgDACQgEACgCADQgBADAAAFQAAAGAEAFQAEADAHAAQAGAAAGgDQAFgEADgGQADgGAAgLIAAgGQgHADgNADg");
	this.shape_63.setTransform(117.075,13.925);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AglAvIAAgOIALgBIADgCQABgCAAgOIAAg8IA8AAIAABdIgOAAIAAhPIghAAIAAAtIgBAVQgBAFgDAEQgFAEgHAAIgLAAg");
	this.shape_64.setTransform(108.35,13.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAOAvIgOgdQgDgJgEgDQgDgCgEAAIAAArIgNAAIAAhdIANAAIAAApQAGAAADgDQACgDAEgOQAEgLADgEQACgDADgBQADgCAIAAIACAAIAAANIgFAAQgEAAgBACQgCABgCAFQgEAOgCAEQgDAEgEADQAHACAIAQIAOAdg");
	this.shape_65.setTransform(101.75,13.925);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgYAlQgKgNAAgXQAAgXAKgNQAKgNAPAAQAPAAAJANQAKAMAAAXIAAAEIg4AAQABAQAHAIQAGAIAIAAQAPAAAGgTIANACQgDAPgJAHQgJAIgNAAQgPAAgKgMgAgNgbQgGAHgBAMIAqAAQgBgMgEgGQgHgJgJAAQgIAAgGAIg");
	this.shape_66.setTransform(93.825,13.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIAnAAQANAAAHADQAJADAGAJQAFAKAAAMQAAASgJAKQgJALgVAAIgaAAIAAA1gAgZgCIAaAAQANAAAGgGQAGgGAAgLQAAgIgDgGQgDgFgEgCQgEgCgLAAIgaAAg");
	this.shape_67.setTransform(85.175,12.15);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_68.setTransform(73.9,17.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAhBBIgMgoIgrAAIgMAoIgOAAIAoiBIAOAAIAsCBgAgGgZIgNAlIAjAAIgLgjIgGgbIgFAZg");
	this.shape_69.setTransform(66.95,12.15);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAlBBIAAhrIgfBrIgMAAIgehtIAABtIgOAAIAAiBIAWAAIAZBbIADATIAHgVIAZhZIATAAIAACBg");
	this.shape_70.setTransform(55.85,12.15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAiBBIgNgoIgsAAIgLAoIgPAAIApiBIAOAAIArCBgAgHgZIgLAlIAjAAIgMgjIgGgbIgGAZg");
	this.shape_71.setTransform(44.85,12.15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgpBAIACgPIAGABQAFAAACgEQADgEAAgRIAAhaIBBAAIAACBIgOAAIAAhxIglAAIAABBQAAAUgCAKQgBAJgFAFQgFAGgIAAQgFAAgGgCg");
	this.shape_72.setTransform(34.525,12.25);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAUBBIgSgjQgIgRgFgFQgFgEgFAAIgBAAIAAA9IgOAAIAAiBIAOAAIAAA5QAKAAADgFQAFgEAEgRQAFgNADgGQAEgFAEgDQAGgEAJAAIAFAAIAAAPIgDAAIgDAAQgGAAgDADQgDAEgFAOQgFAQgEAFQgDAEgFACQAKADAJAUIAWArg");
	this.shape_73.setTransform(26.45,12.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgmBBIAAiBIBLAAIAAAQIg+AAIAAAnIA6AAIAAAOIg6AAIAAAtIBBAAIAAAPg");
	this.shape_74.setTransform(16.9,12.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIAnAAQANAAAHADQAJADAGAJQAFAKAAAMQAAASgJAKQgJALgVAAIgaAAIAAA1gAgZgCIAaAAQANAAAGgGQAGgGAAgLQAAgIgDgGQgDgFgEgCQgEgCgLAAIgaAAg");
	this.shape_75.setTransform(7.175,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.disc_w, new cjs.Rectangle(0,-100,1386,142.8), null);


(lib.crunch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cr4
	this.cr3 = new lib.cr4();
	this.cr3.name = "cr3";
	this.cr3.setTransform(1266.75,951.95,1,1,0,0,0,790.7,265.1);

	this.timeline.addTween(cjs.Tween.get(this.cr3).wait(1));

	// cr2
	this.cr2 = new lib.cr2();
	this.cr2.name = "cr2";
	this.cr2.setTransform(1985.2,546.3,1,1,0,0,0,457.1,313.7);

	this.timeline.addTween(cjs.Tween.get(this.cr2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.crunch, new cjs.Rectangle(480.7,375,2154.5,776), null);


// stage content:
(lib.viatti_1456x180_ymain = function(mode,startPosition,loop,reversed) {
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
		var root = this;
		
		var tl = gsap.timeline({repeat:-1});
			StagS1 = [root.tx1.s1, root.tx1.s2]
			StagP1 = [root.tx1.s1.s1, root.tx1.s2.s1]
			StagS2 = [root.tx2.s1, root.tx2.s2, root.tx2.s3]
			StagP2 = [root.tx2.s1.s1, root.tx2.s2.s1, root.tx2.s3.s1]
			StagS3 = [root.tx3.s1, root.tx3.s2, root.tx3.s3, root.tx3.s4]
		;
		
		
		tl
			.staggerFrom(StagS1, 0.8, {y:"-=70", ease:"Power3.easeOut"}, 0.1, "0")
			.staggerFrom(StagP1, 0.8, {y:"+=50", ease:"Power3.easeOut"}, 0.1, "0")
		
			.staggerFrom(StagS2, 0.7, {y:"-=120", ease:"Back.easeOut"}, 0.1, "0.2")
			.staggerFrom(StagP2, 0.8, {y:"+=50", ease:"Power3.easeOut"}, 0.1, "0.2")
			
			.from(root.but_new, 1.3, {scaleX:4, scaleY:4, ease:"Elastic.easeOut"}, "0.9")
			.from(root.but_new, 0.1, {alpha:0, ease:"Elastic.easeOut"}, "0.9")
		
			.to(root.snow.sn1, 5, {y:"+=200", x:"+=150", ease:"none"}, "0")
			.to(root.snow.sn2, 8, {y:"+=150",  x:"-=150", ease:"none"}, "0")
			.to(root.bg_picgray, 1.5, {alpha:0, ease:"Power2.easeOut"}, "0.5")
		
		
		
			.from(root.cr.cr2, 0.6, {y:"-=400", x:"+=280", ease:"none"}, "3.5")
			.from(root.cr.cr3, 0.6, {y:"+=500", x:"-=270", ease:"none"}, "3.5")
		
		
			.from(root.disc_b, 0.3, {alpha:0, ease:"Power3.easeOut"}, "4")	
			.from(root.tx1_end, 1, {y:"-=170", ease:"Bounce.easeOut"}, "4")	
			.from(root.tx3, 1, {y:"-=170", ease:"Bounce.easeOut"}, "4.5")
		
			.staggerTo(StagS3, 0.4, {scaleX:1.15, scaleY:1.15, ease:"Power3.easeOut"}, 0.5, "6")
			.staggerTo(StagS3, 0.4, {scaleX:1, scaleY:1, ease:"Power3.easeOut"}, 0.5, "6.5")
		
			.from(root.bgy, 0.1, {alpha:0}, "4.5")
			.to(root.cr, 0.1, {alpha:0}, "5.5")
			.to(root.tx1, 0.1, {alpha:0}, "5.5")
			.to(root.tx2, 0.1, {alpha:0}, "5.8")
			.to(root.but_new, 0.1, {alpha:0}, "5.5")
			.from(root.bg_picgray2, 0.1, {alpha:0}, "5.5")
		
		
			.to(root.disc_b, 0.3, {alpha:0, ease:"Power3.easeOut"}, "9")	
			.to(root.logo, 0.3, {alpha:0, ease:"Power3.easeOut"}, "9")	
			.to(root.tx3, 0.3, {alpha:0, ease:"Power3.easeOut"}, "9")	
			.to(root.tx1_end, 0.3, {alpha:0, ease:"Power3.easeOut"}, "9")	
			.to(root.cr, 0.3, {alpha:0, ease:"Power3.easeOut"}, "9.3")	
		
		;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#092132").ss(2,2,0,3).p("EhxvgODMDjfAAAIAAcHMjjfAAAg");
	this.shape.setTransform(728,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// discl_b
	this.disc_b = new lib.disc_b();
	this.disc_b.name = "disc_b";
	this.disc_b.setTransform(233.85,147.1,1,1,0,0,0,190.1,21.4);
	this.disc_b.alpha = 0.6406;

	this.timeline.addTween(cjs.Tween.get(this.disc_b).wait(1));

	// tx1_end
	this.tx1_end = new lib.tx1();
	this.tx1_end.name = "tx1_end";
	this.tx1_end.setTransform(498.7,40.25,1.2044,1.2034);

	this.timeline.addTween(cjs.Tween.get(this.tx1_end).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(204,75,1,1,0,0,0,164,36);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// tx3
	this.tx3 = new lib.tx3();
	this.tx3.name = "tx3";
	this.tx3.setTransform(1143.95,96.2);

	this.timeline.addTween(cjs.Tween.get(this.tx3).wait(1));

	// bgy
	this.bgy = new lib.bgy();
	this.bgy.name = "bgy";
	this.bgy.setTransform(728,90,1,1,0,0,0,728,90);

	this.timeline.addTween(cjs.Tween.get(this.bgy).wait(1));

	// crunch
	this.cr = new lib.crunch();
	this.cr.name = "cr";
	this.cr.setTransform(550.75,36.25,1,1,0,0,0,1579.7,702.4);

	this.timeline.addTween(cjs.Tween.get(this.cr).wait(1));

	// snow
	this.snow = new lib.snow();
	this.snow.name = "snow";
	this.snow.setTransform(1457.1,-305,1,1,0,0,0,850,250);

	this.timeline.addTween(cjs.Tween.get(this.snow).wait(1));

	// tx2
	this.tx2 = new lib.tx2();
	this.tx2.name = "tx2";
	this.tx2.setTransform(728,127.75);

	this.timeline.addTween(cjs.Tween.get(this.tx2).wait(1));

	// tx1
	this.tx1 = new lib.tx1();
	this.tx1.name = "tx1";
	this.tx1.setTransform(576.5,8.8);

	this.timeline.addTween(cjs.Tween.get(this.tx1).wait(1));

	// but_new
	this.but_new = new lib.but_new();
	this.but_new.name = "but_new";
	this.but_new.setTransform(1211.45,54.4,1,1,-5.999);

	this.timeline.addTween(cjs.Tween.get(this.but_new).wait(1));

	// discl_w
	this.disc_w = new lib.disc_w();
	this.disc_w.name = "disc_w";
	this.disc_w.setTransform(233.85,147.1,1,1,0,0,0,190.1,21.4);
	this.disc_w.alpha = 0.6484;

	this.timeline.addTween(cjs.Tween.get(this.disc_w).wait(1));

	// bg_picgray2
	this.bg_picgray2 = new lib.bg_picgray_1();
	this.bg_picgray2.name = "bg_picgray2";
	this.bg_picgray2.setTransform(728.2,90.15,0.8575,0.8573,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bg_picgray2).wait(1));

	// bg_picgray
	this.bg_picgray = new lib.bg_picgray_1();
	this.bg_picgray.name = "bg_picgray";
	this.bg_picgray.setTransform(728.2,90.15,0.8575,0.8573,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bg_picgray).wait(1));

	// bg_pic
	this.bg_pic = new lib.bg_pic_1();
	this.bg_pic.name = "bg_pic";
	this.bg_pic.setTransform(728.2,90.15,0.8575,0.8573,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.bg_pic).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(179.8,-715,1426.4,1199.9);
// library properties:
lib.properties = {
	id: '45D857908C63AD4D87BA4C7D85229672',
	width: 1456,
	height: 180,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"index_atlas_P_1.png", id:"index_atlas_P_1"},
		{src:"index_atlas_NP_1.jpg", id:"index_atlas_NP_1"}
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
an.compositions['45D857908C63AD4D87BA4C7D85229672'] = {
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