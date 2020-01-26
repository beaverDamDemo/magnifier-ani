(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"magnifier_ani_atlas_", frames: [[0,0,1280,800],[0,802,1161,667],[1163,802,561,526]]}
];


// symbols:



(lib.background = function() {
	this.initialize(ss["magnifier_ani_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._img = function() {
	this.initialize(ss["magnifier_ani_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lupa = function() {
	this.initialize(ss["magnifier_ani_atlas_"]);
	this.gotoAndStop(2);
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


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._img();
	this.instance.setTransform(-580.5,-333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580.5,-333.5,1161,667);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._img();
	this.instance.setTransform(-580.5,-333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580.5,-333.5,1161,667);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lupa();
	this.instance.setTransform(-280.5,-263,1.0001,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280.5,-263,561.1,526);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgRAOIAAgcIAjAAIAAAcg");
	mask.setTransform(1.825,1.45);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8A66").s().p("AgRAJIAjgXIgHAcg");
	this.shape.setTransform(1.8,1.45);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,3.6,2.9), null);


(lib.Stage0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1));

	// lupa
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(480.35,530.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(1).to({x:473.8788,y:526.6629},0).wait(1).to({x:466.3899,y:522.3959},0).wait(1).to({x:458.4148,y:517.8518},0).wait(1).to({x:450.1663,y:513.1521},0).wait(1).to({x:441.7575,y:508.3609},0).wait(1).to({x:433.2584,y:503.5183},0).wait(1).to({x:424.7178,y:498.6521},0).wait(1).to({x:416.1728,y:493.7833},0).wait(1).to({x:407.6538,y:488.9294},0).wait(1).to({x:399.1877,y:484.1056},0).wait(1).to({x:390.7997,y:479.3264},0).wait(1).to({x:382.8596,y:474.8022},0).wait(1).to({x:375.645,y:470.6915},0).wait(1).to({x:368.9447,y:466.8739},0).wait(1).to({x:362.6329,y:463.2775},0).wait(1).to({x:356.628,y:459.8561},0).wait(1).to({x:350.874,y:456.5776},0).wait(1).to({x:345.3302,y:453.4189},0).wait(1).to({x:339.9657,y:450.3623},0).wait(1).to({x:334.7571,y:447.3946},0).wait(1).to({x:329.6853,y:444.5048},0).wait(1).to({x:324.7352,y:441.6843},0).wait(1).to({x:319.8943,y:438.9261},0).wait(1).to({x:315.1521,y:436.2241},0).wait(1).to({x:310.4998,y:433.5733},0).wait(1).to({x:305.9298,y:430.9695},0).wait(1).to({x:301.4358,y:428.4089},0).wait(1).to({x:297.0121,y:425.8884},0).wait(1).to({x:292.6537,y:423.4051},0).wait(1).to({x:288.3564,y:420.9566},0).wait(1).to({x:284.1164,y:418.5407},0).wait(1).to({x:279.9301,y:416.1554},0).wait(1).to({x:275.7945,y:413.7991},0).wait(1).to({x:271.7069,y:411.4701},0).wait(1).to({x:267.6648,y:409.1669},0).wait(1).to({x:263.6657,y:406.8884},0).wait(1).to({x:259.7076,y:404.6332},0).wait(1).to({x:255.7885,y:402.4001},0).wait(1).to({x:251.9061,y:400.188},0).wait(1).to({x:248.0586,y:397.9958},0).wait(1).to({x:244.2434,y:395.822},0).wait(1).to({x:240.4577,y:393.665},0).wait(1).to({x:236.6971,y:391.5223},0).wait(1).to({x:232.9532,y:389.3891},0).wait(1).to({x:229.2042,y:387.253},0).wait(1).to({x:225.25,y:385},0).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AGMe5QkCkBAAltQAAltECkCQECkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkCkCg");
	var mask_graphics_3 = new cjs.Graphics().p("AGMe5QkCkBAAltQAAltECkCQECkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkCkCg");
	var mask_graphics_4 = new cjs.Graphics().p("AFrenQkBkCAAltQAAlsEBkCQECkCFtAAQFtAAEBECQECECAAFsQAAFtkCECQkBEBltAAQltAAkCkBg");
	var mask_graphics_5 = new cjs.Graphics().p("AFGeRQkCkBAAltQAAltECkCQECkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkCkCg");
	var mask_graphics_6 = new cjs.Graphics().p("AEed7QkCkCAAltQAAlsECkCQECkCFsAAQFtAAECECQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_graphics_7 = new cjs.Graphics().p("AD1djQkBkBAAltQAAltEBkCQECkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkCkCg");
	var mask_graphics_8 = new cjs.Graphics().p("ADLdLQkBkBAAltQAAltEBkCQECkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkCkCg");
	var mask_graphics_9 = new cjs.Graphics().p("ACgczQkAkCAAlsQAAltEAkCQECkCFtAAQFtAAEBECQECECAAFtQAAFskCECQkBECltAAQltAAkCkCg");
	var mask_graphics_10 = new cjs.Graphics().p("AB1cbQkAkCAAltQAAlsEAkCQECkCFtAAQFtAAEBECQECECAAFsQAAFtkCECQkBEBltAAQltAAkCkBg");
	var mask_graphics_11 = new cjs.Graphics().p("ABKcCQkAkBAAltQAAltEAkCQECkBFtAAQFtAAEBEBQECECAAFtQAAFtkCEBQkBECltAAQltAAkCkCg");
	var mask_graphics_12 = new cjs.Graphics().p("AAgbqQkBkBAAltQAAltEBkCQECkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkCkCg");
	var mask_graphics_13 = new cjs.Graphics().p("AgKbSQkBkCAAltQAAlsEBkCQEBkCFtAAQFtAAEBECQECECAAFsQAAFtkCECQkBEBltAAQltAAkBkBg");
	var mask_graphics_14 = new cjs.Graphics().p("Ag0a6QkBkCAAltQAAlsEBkCQEBkCFtAAQFtAAEBECQECECAAFsQAAFtkCECQkBEBltAAQltAAkBkBg");
	var mask_graphics_15 = new cjs.Graphics().p("AhbajQkCkBAAltQAAltECkCQEBkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkBkCg");
	var mask_graphics_16 = new cjs.Graphics().p("Ah/aPQkCkCAAltQAAlsECkCQEBkCFsAAQFtAAECECQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkBkBg");
	var mask_graphics_17 = new cjs.Graphics().p("AihZ8QkBkCAAltQAAlsEBkCQEBkCFtAAQFtAAEBECQECECAAFsQAAFtkCECQkBEBltAAQltAAkBkBg");
	var mask_graphics_18 = new cjs.Graphics().p("AjBZqQkBkCAAltQAAlsEBkCQEBkCFtAAQFtAAEBECQECECAAFsQAAFtkCECQkBEBltAAQltAAkBkBg");
	var mask_graphics_19 = new cjs.Graphics().p("AjfZZQkBkCAAltQAAlsEBkCQEBkCFtAAQFtAAEBECQECECAAFsQAAFtkCECQkBEBltAAQltAAkBkBg");
	var mask_graphics_20 = new cjs.Graphics().p("Aj7ZIQkCkBAAltQAAltECkCQEBkBFsAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkBkCg");
	var mask_graphics_21 = new cjs.Graphics().p("AkXY4QkCkBAAltQAAltECkCQECkBFrAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlrAAkCkCg");
	var mask_graphics_22 = new cjs.Graphics().p("AkyYpQkBkBAAltQAAltEBkCQECkBFsAAQFtAAEBEBQEBECAAFtQAAFtkBEBQkBECltAAQlsAAkCkCg");
	var mask_graphics_23 = new cjs.Graphics().p("AlMYaQkCkBAAltQAAltECkCQECkBFrAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlrAAkCkCg");
	var mask_graphics_24 = new cjs.Graphics().p("AllYMQkCkCAAltQAAlsECkCQECkCFrAAQFtAAECECQEBECAAFsQAAFtkBECQkCEBltAAQlrAAkCkBg");
	var mask_graphics_25 = new cjs.Graphics().p("Al+X+QkCkCAAltQAAlsECkCQECkCFrAAQFtAAECECQEBECAAFsQAAFtkBECQkCEBltAAQlrAAkCkBg");
	var mask_graphics_26 = new cjs.Graphics().p("AmWXwQkCkCAAltQAAlsECkCQECkCFrAAQFtAAECECQEBECAAFsQAAFtkBECQkCEBltAAQlrAAkCkBg");
	var mask_graphics_27 = new cjs.Graphics().p("AmuXiQkCkBAAltQAAltECkCQECkBFrAAQFtAAECEBQEBECAAFtQAAFtkBEBQkCECltAAQlrAAkCkCg");
	var mask_graphics_28 = new cjs.Graphics().p("AnGXVQkBkBAAltQAAltEBkCQEDkAFrAAQFtAAECEAQEBECAAFtQAAFtkBEBQkCECltAAQlrAAkDkCg");
	var mask_graphics_29 = new cjs.Graphics().p("AncXIQkCkBAAltQAAltECkCQECkAFrAAQFtAAECEAQEBECAAFtQAAFtkBEBQkCECltAAQlrAAkCkCg");
	var mask_graphics_30 = new cjs.Graphics().p("AnzW7QkBkBAAltQAAltEBkCQECkAFsAAQFtAAEBEAQECECAAFtQAAFtkCEBQkBECltAAQlsAAkCkCg");
	var mask_graphics_31 = new cjs.Graphics().p("AoJWvQkCkCAAltQAAlsECkCQECkBFrAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlrAAkCkBg");
	var mask_graphics_32 = new cjs.Graphics().p("AofWiQkBkBAAltQAAltEBkCQECkAFsAAQFtAAEBEAQECECAAFtQAAFtkCEBQkBECltAAQlsAAkCkCg");
	var mask_graphics_33 = new cjs.Graphics().p("Ao0WWQkCkCAAltQAAlsECkCQECkBFrAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlrAAkCkBg");
	var mask_graphics_34 = new cjs.Graphics().p("ApKWKQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAEBEBQECECAAFsQAAFtkCECQkBEBltAAQlsAAkCkBg");
	var mask_graphics_35 = new cjs.Graphics().p("ApfV+QkBkCAAltQAAlsEBkCQECkBFsAAQFtAAEBEBQECECAAFsQAAFtkCECQkBEBltAAQlsAAkCkBg");
	var mask_graphics_36 = new cjs.Graphics().p("AptVyQkCkBAAltQAAltECkCQEBkAFsAAQFtAAEBEAQECECAAFtQAAFtkCEBQkBECltAAQlsAAkBkCg");
	var mask_graphics_37 = new cjs.Graphics().p("AptVmQkCkBAAltQAAltECkCQEBkAFsAAQFtAAECEAQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkBkCg");
	var mask_graphics_38 = new cjs.Graphics().p("ApuVbQkBkCAAltQAAlsEBkCQEDkBFrAAQFtAAEBEBQECECAAFsQAAFtkCECQkBEBltAAQlrAAkDkBg");
	var mask_graphics_39 = new cjs.Graphics().p("ApuVQQkBkCAAltQAAlsEBkCQEDkBFrAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlrAAkDkBg");
	var mask_graphics_40 = new cjs.Graphics().p("ApuVEQkBkBAAltQAAltEBkCQEDkAFrAAQFtAAECEAQEBECAAFtQAAFtkBEBQkCECltAAQlrAAkDkCg");
	var mask_graphics_41 = new cjs.Graphics().p("AptU5QkCkBAAltQAAltECkCQEBkAFsAAQFtAAECEAQEBECAAFtQAAFtkBEBQkCECltAAQlsAAkBkCg");
	var mask_graphics_42 = new cjs.Graphics().p("AptUuQkCkCAAltQAAlsECkCQECkBFrAAQFtAAEBEBQECECAAFsQAAFtkCECQkBEBltAAQlrAAkCkBg");
	var mask_graphics_43 = new cjs.Graphics().p("AptUjQkCkBAAltQAAltECkCQEBkAFsAAQFtAAEBEAQECECAAFtQAAFtkCEBQkBECltAAQlsAAkBkCg");
	var mask_graphics_44 = new cjs.Graphics().p("AptUYQkCkBAAltQAAltECkCQEBkAFsAAQFtAAEBEAQECECAAFtQAAFtkCEBQkBECltAAQlsAAkBkCg");
	var mask_graphics_45 = new cjs.Graphics().p("ApuUNQkBkBAAltQAAltEBkCQEDkAFrAAQFtAAECEAQEBECAAFtQAAFtkBEBQkCECltAAQlrAAkDkCg");
	var mask_graphics_46 = new cjs.Graphics().p("ApuUDQkBkCAAltQAAlsEBkCQEDkBFrAAQFtAAEBEBQECECAAFsQAAFtkCECQkBEBltAAQlrAAkDkBg");
	var mask_graphics_47 = new cjs.Graphics().p("ApuT4QkBkCAAltQAAlsEBkCQECkBFsAAQFtAAECEBQEBECAAFsQAAFtkBECQkCEBltAAQlsAAkCkBg");
	var mask_graphics_48 = new cjs.Graphics().p("AptTtQkCkBAAltQAAltECkCQECkAFrAAQFtAAEBEAQECECAAFtQAAFtkCEBQkBECltAAQlrAAkCkCg");
	var mask_graphics_49 = new cjs.Graphics().p("ApuTiQkBkCAAltQAAlsEBkCQECkBFsAAQFtAAEBEBQECECAAFsQAAFtkCECQkBEBltABQlsgBkCkBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:189.825,y:223.475}).wait(3).to({graphics:mask_graphics_3,x:189.825,y:223.475}).wait(1).to({graphics:mask_graphics_4,x:186.5856,y:221.6302}).wait(1).to({graphics:mask_graphics_5,x:182.8367,y:219.4952}).wait(1).to({graphics:mask_graphics_6,x:178.8445,y:217.2216}).wait(1).to({graphics:mask_graphics_7,x:174.7154,y:214.8701}).wait(1).to({graphics:mask_graphics_8,x:170.5061,y:212.4729}).wait(1).to({graphics:mask_graphics_9,x:166.2515,y:210.0499}).wait(1).to({graphics:mask_graphics_10,x:161.9762,y:207.6151}).wait(1).to({graphics:mask_graphics_11,x:157.6987,y:205.1791}).wait(1).to({graphics:mask_graphics_12,x:153.4341,y:202.7505}).wait(1).to({graphics:mask_graphics_13,x:149.1961,y:200.3369}).wait(1).to({graphics:mask_graphics_14,x:144.9972,y:197.9456}).wait(1).to({graphics:mask_graphics_15,x:141.0225,y:195.682}).wait(1).to({graphics:mask_graphics_16,x:137.4109,y:193.6253}).wait(1).to({graphics:mask_graphics_17,x:134.0569,y:191.7151}).wait(1).to({graphics:mask_graphics_18,x:130.8972,y:189.9157}).wait(1).to({graphics:mask_graphics_19,x:127.8913,y:188.2038}).wait(1).to({graphics:mask_graphics_20,x:125.0109,y:186.5634}).wait(1).to({graphics:mask_graphics_21,x:122.2357,y:184.983}).wait(1).to({graphics:mask_graphics_22,x:119.5503,y:183.4537}).wait(1).to({graphics:mask_graphics_23,x:116.9429,y:181.9687}).wait(1).to({graphics:mask_graphics_24,x:114.4041,y:180.5229}).wait(1).to({graphics:mask_graphics_25,x:111.9261,y:179.1117}).wait(1).to({graphics:mask_graphics_26,x:109.5028,y:177.7316}).wait(1).to({graphics:mask_graphics_27,x:107.1289,y:176.3797}).wait(1).to({graphics:mask_graphics_28,x:104.8,y:175.0534}).wait(1).to({graphics:mask_graphics_29,x:102.5124,y:173.7506}).wait(1).to({graphics:mask_graphics_30,x:100.2627,y:172.4694}).wait(1).to({graphics:mask_graphics_31,x:98.0482,y:171.2082}).wait(1).to({graphics:mask_graphics_32,x:95.8665,y:169.9658}).wait(1).to({graphics:mask_graphics_33,x:93.7153,y:168.7406}).wait(1).to({graphics:mask_graphics_34,x:91.5928,y:167.5319}).wait(1).to({graphics:mask_graphics_35,x:89.4972,y:166.3384}).wait(1).to({graphics:mask_graphics_36,x:86.854,y:165.1595}).wait(1).to({graphics:mask_graphics_37,x:82.7616,y:163.9941}).wait(1).to({graphics:mask_graphics_38,x:78.7146,y:162.8418}).wait(1).to({graphics:mask_graphics_39,x:74.7109,y:161.7017}).wait(1).to({graphics:mask_graphics_40,x:70.7482,y:160.5733}).wait(1).to({graphics:mask_graphics_41,x:66.8244,y:159.456}).wait(1).to({graphics:mask_graphics_42,x:62.9375,y:158.3492}).wait(1).to({graphics:mask_graphics_43,x:59.0854,y:157.2524}).wait(1).to({graphics:mask_graphics_44,x:55.2658,y:156.1647}).wait(1).to({graphics:mask_graphics_45,x:51.4756,y:155.0855}).wait(1).to({graphics:mask_graphics_46,x:47.7105,y:154.0134}).wait(1).to({graphics:mask_graphics_47,x:43.9623,y:152.9461}).wait(1).to({graphics:mask_graphics_48,x:40.2089,y:151.8773}).wait(1).to({graphics:mask_graphics_49,x:36.25,y:150.75}).wait(1));

	// Layer_5
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(-256.55,44.5);

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(-11,179);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-250.739,y:47.683},0).wait(1).to({x:-244.0262,y:51.3599},0).wait(1).to({x:-236.8699,y:55.2798},0).wait(1).to({x:-229.4582,y:59.3395},0).wait(1).to({x:-221.8919,y:63.484},0).wait(1).to({x:-214.2334,y:67.6789},0).wait(1).to({x:-206.5261,y:71.9006},0).wait(1).to({x:-198.8026,y:76.1312},0).wait(1).to({x:-191.089,y:80.3563},0).wait(1).to({x:-183.408,y:84.5635},0).wait(1).to({x:-175.7803,y:88.7416},0).wait(1).to({x:-168.2409,y:92.8713},0).wait(1).to({x:-161.2436,y:96.7041},0).wait(1).to({x:-154.8166,y:100.2245},0).wait(1).to({x:-148.8066,y:103.5164},0).wait(1).to({x:-143.119,y:106.6318},0).wait(1).to({x:-137.6906,y:109.6052},0).wait(1).to({x:-132.4765,y:112.4613},0).wait(1).to({x:-127.4435,y:115.2181},0).wait(1).to({x:-122.5666,y:117.8894},0).wait(1).to({x:-117.8258,y:120.4862},0).wait(1).to({x:-113.2054,y:123.017},0).wait(1).to({x:-108.6923,y:125.489},0).wait(1).to({x:-104.276,y:127.9081},0).wait(1).to({x:-99.9473,y:130.2791},0).wait(1).to({x:-95.6986,y:132.6063},0).wait(1).to({x:-91.5235,y:134.8932},0).wait(1).to({x:-87.4163,y:137.143},0).wait(1).to({x:-83.3721,y:139.3582},0).wait(1).to({x:-79.3865,y:141.5413},0).wait(1).to({x:-75.4557,y:143.6944},0).wait(1).to({x:-71.5763,y:145.8193},0).wait(1).to({x:-67.7454,y:147.9177},0).wait(1).to({x:-63.9601,y:149.9911},0).wait(1).to({x:-60.2181,y:152.0408},0).wait(1).to({x:-56.5171,y:154.068},0).wait(1).to({x:-52.855,y:156.0739},0).wait(1).to({x:-49.2301,y:158.0595},0).wait(1).to({x:-45.6404,y:160.0257},0).wait(1).to({x:-42.0845,y:161.9735},0).wait(1).to({x:-38.5605,y:163.9037},0).wait(1).to({x:-35.067,y:165.8173},0).wait(1).to({x:-31.6022,y:167.7151},0).wait(1).to({x:-28.164,y:169.5984},0).wait(1).to({x:-24.7499,y:171.4685},0).wait(1).to({x:-21.3558,y:173.3276},0).wait(1).to({x:-17.9739,y:175.18},0).wait(1).to({x:-14.5839,y:177.0369},0).to({_off:true},1).wait(1));

	// static bgr
	this.instance_3 = new lib._img();
	this.instance_3.setTransform(-277,31,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// new bgr
	this.instance_4 = new lib.background();
	this.instance_4.setTransform(-500,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-185,1280,978.4);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgRAOIAAgcIAjAAIAAAcg");
	mask.setTransform(1.825,20.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60372B").s().p("AhyDBQhPgKhCgsQhCgsgnhGQgshOAQhLQAHgjAcgRQAagPAgAFQAfAFATAXQAVAagEAkIgBAHQgRBwDCAlQCJAcCCg9QBNgkAPgtQAVhIADhLIA4CHIANA1QAHA+gcAvQhCByjwAAQhRAAhmgNg");
	this.shape.setTransform(58.0181,20.6111);

	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(1.8,20.3,1,1,0,0,0,1.8,1.4);

	var maskedShapeInstanceList = [this.shape,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,18.9,3.7,2.900000000000002), null);


(lib.Stage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2AE8A").s().p("AitC8QgdgRgHgkQgQhLAshOQAnhFBCgsQBCgsBOgKQBPgKBDgDIAACOQgqgBguAJQhSAPgsAfQg7AnAJBAIABAHQAFAkgVAZQgUAXggAFIgQACQgWAAgSgLg");
	this.shape.setTransform(420.7498,467.7238);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2AE8A").s().p("AizCZQgZgSgGgiIgBgCQgEggAHgfQAGgcAPgYIARgZIAOgRQATgVAUgQIAEgEQARgNAXgLQA9gfBRgGIAtgDIBbgFIAIABIAACCIgBAKQgrAAguAGIgrAJQgzALghAQQgcAPgPAUQgPAVACAaIAAAGQABAdgUATQgIAGgJAEQgOAHgSAAIgEABQgbAAgUgQg");
	this.shape_1.setTransform(420.8656,464.7563);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2AE8A").s().p("AiKCLQgbgDgUgSQgVgVgEghIgBgCQgDghAKgdQAJgZASgUQAJgLAKgJIAOgMQATgOARgJIADgCQAPgHAUgGQA4gTBUAAIAtgCIBagDIAIADIAACCIgDAHQgqgBgvAGIgrAGQgzAJgiAMQgdALgPAOQgRAQgCAUIAAAEQgDAVgUANQgHAEgIABQgJADgKAAIgLgBg");
	this.shape_2.setTransform(420.9167,461.8614);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2AE8A").s().p("Ah5BxQgNAAgOgFQgYgHgRgTQgTgXgDghIAAgCQgBggANgbQAMgYATgQQALgJALgGQAHgEAIgDQATgIANgBIADgBIAegBQAzgHBXAFIAtAAQAtABAtgCIAGAEIAACBIgFAHQgqgBguAEIgsAEQgyAGgkAHQgcAIgSAJQgSAKgFANIgBACQgGAOgTAGQgGACgHAAIgDAAg");
	this.shape_3.setTransform(420.9466,459.063);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2AE8A").s().p("Ah3BpQgGgBgIgCQgNgEgMgHQgWgLgPgVQgPgZgBghIgBgBQABghAQgZQAPgWAWgMQAMgGAMgDQAIgCAHAAQAVgCAJAHIACABQAIAFARAEQAtAGBbAKIAsACQAsACAugBIAEAGIAACAIgFAGQgqgBgvACIgsACQgyAEglABIgvAIQgVAEgHAGIgCACQgIAGgSAAIgDAAg");
	this.shape_4.setTransform(420.95,454.9377);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2AE8A").s().p("AB1BwIgtABQgxAAgmgDQgdAAgVgCIghgCIgDAAQgLAAgTgHIgPgIQgLgHgMgJQgSgQgMgWQgNgaABghIgBAAQADgjAUgXQARgUAYgIQAOgEALAAQAJAAAJACQATAGAHAOIABACQAEAMAPAJQApATBdAOIAsAFQAsADAugBIADAHIAACBIgGAEQgrgCguABg");
	this.shape_5.setTransform(420.95,450.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2AE8A").s().p("ABzCJIgtgBQgwgCgogIQgcgEgXgHQgXgGgPgIIgDgCQgPgHgTgOIgOgMIgVgXQgQgTgJgYQgKgcADghIAAAAQAEgjAWgVQAUgSAbgEQAPgBAMADQAKACAIAFQAVAMACAVIABAEQABARAOAPQAjAgBgASIAsAHQArAEAuAAIADAIIAACCIgJACIhZgDg");
	this.shape_6.setTransform(420.9404,447.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2AE8A").s().p("AByClIgtgEQgwgEgpgNQgdgIgYgNQgYgMgTgOIgDgDQgTgPgSgUQgHgIgGgJQgLgOgIgOQgOgXgGgZQgHgfAEghQAGgjAagTQAWgRAdABQARABANAGQAKAEAJAIQAUATgBAcIAAAGQgBAXALAUQAeAsBjAXQAVAEAXAEQAqAHAvgBIABALIAACBIgKABIhZgEg");
	this.shape_7.setTransform(420.8656,445.0972);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2AE8A").s().p("ABEC6QhOgKhCgsQhCgtgnhFQgshNAQhMQAHgjAdgRQAZgPAfAFQAgAGAUAXQAVAZgFAkIgBAHQgQBwDAAlQApAIAvAAIAACOQhDgDhPgKg");
	this.shape_8.setTransform(420.7498,442.1512);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2AE8A").s().p("AByCqIgtgEQgwgFgpgOQgdgJgYgNQgZgNgTgQIgEgDQgTgRgSgVIgNgSQgKgOgJgPQgNgYgFgZQgHggAFggIAAgBQAGgjAagSQAXgRAeACQAQABAOAHQAKAFAJAIQAUAUgBAeIgBAGQgCAYAMAVQAcAvBkAXIAsAJQAqAHAvAAIABAKIAACCIgLABIhZgFg");
	this.shape_9.setTransform(420.8458,444.5142);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2AE8A").s().p("ABzCUIgugCQgwgDgogKQgcgGgYgJQgXgIgRgLIgDgCQgRgLgSgQIgOgOIgUgZQgPgUgIgYQgJgeAEghQAEgjAYgUQAVgSAcgBQAPgBANAEQAKADAIAGQAVAPABAYIAAAFQABATAMARQAhAlBiAUIAsAGQAqAGAvAAIACAJIAACCIgJACIhZgEg");
	this.shape_10.setTransform(420.901,446.8469);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2AE8A").s().p("AB0B/IgtgBQgxAAgngGQgcgDgXgFQgWgEgOgFIgCgBQgOgFgTgLIgOgKIgWgUQgRgSgKgXQgMgbADghIgBgBQAEgiAVgWQATgTAagFQAOgDANACQAJABAIAEQAUAKAEASIABADQADAPAOAMQAlAbBfARIAsAFQAsAFAtgBIADAIIAACBIgIADIhYgCg");
	this.shape_11.setTransform(420.95,449.0969);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2AE8A").s().p("AgPBrIgxAAIggAAIgCABQgMAAgTgFQgHgDgHgEQgMgGgMgJQgTgPgMgWQgOgaABggIgBgBQACgiATgYQARgUAYgJQANgEAMgBQAJAAAIACQATAEAIAMIABACQAFAKAQAIQApARBcANIAtAEQAsADAugBIADAHIAACBIgGAEQgrgBguABIgtAAIgoABIgvgBg");
	this.shape_12.setTransform(420.95,451.2571);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2AE8A").s().p("Ah7BtQgNgBgOgFQgYgIgQgUQgTgXgCghIAAgBQgBghAOgaQAMgYAUgQIAWgNIAQgGQATgHAMABIADgBIAdABQAxgEBYAGIAtABIBagBIAGAEIAACBIgFAHQgqgBgvADIgsAEIhVALQgdAHgSAIQgTAJgFAMIgBACQgGANgUAEIgKABIgFAAg");
	this.shape_13.setTransform(420.9467,458.4403);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2AE8A").s().p("AiOB/QgagFgTgSQgUgWgEghIAAgCQgDghAMgbQAKgZASgTIAUgSIAPgKQAUgMAPgFIADgCQANgEAUgEQA1gOBWACIAtgBIBagCIAHADIAACBIgEAIQgqgBguAEIgsAGQgzAIgiAJQgdAKgQAMQgSAOgDARIAAADQgEATgUAKQgHADgIABIgLAAQgJAAgJgBg");
	this.shape_14.setTransform(420.9285,460.74);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2AE8A").s().p("AiGCXQgcgCgVgRQgXgUgEghIgBgCQgEghAJgeQAIgZARgXQAIgLAKgKIAOgOQATgRASgMIAEgDQAPgJAWgIQA5gYBTgCIAugCIBagEIAIACIAACCIgDAJQgqgBguAGIgsAGQgyAKgiAOQgdANgPAQQgQASAAAWIgBAFQAAAYgVAPQgHAFgIADQgMAEgNAAIgGAAg");
	this.shape_15.setTransform(420.901,463.0083);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2AE8A").s().p("AiyCgQgZgSgGgiIgBgBQgFghAHgfQAFgcAPgZIAQgaIAOgSQATgWAUgSIAFgEQASgOAWgMQA+giBRgGIAtgEIBbgFIAJABIAACBIgBALQgrgBguAHIgrAJQgzAMghARQgcAQgOAUQgPAXACAbIAAAGQACAegUAVQgIAHgJAEQgOAHgSABIgIAAQgZAAgUgOg");
	this.shape_16.setTransform(420.8458,465.3415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},35).wait(1));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2AE8A").s().p("Ai2DOIAAiOQBggBBUgoQBMgkAOgtQAPgrAGg4QADgdAAgTIA4CHQAeBIgcBHQg3CFkFAAIgkAAg");
	this.shape_17.setTransform(460.3442,441.4298);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(64));

	// cat head
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(430.4,444.2,1,1,0,0,0,48.9,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#21100B").s().p("AgOAvQgYgEgOgUIAIgFQAMAQAUADQATADAQgMIABAAQAQgNADgTQADgUgMgQIAHgGQAPAUgEAYQgDAXgUAOQgPAMgTAAIgJAAg");
	this.shape_18.setTransform(389.009,428.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#21100B").s().p("AgCAqQgRAAgPgKQgPgJgHgRIAKgDQAIATATAHQATAHASgJQASgHAIgUQAHgSgIgTIAIgDQAKAVgIAXQgJAXgWAJQgLAGgMAAg");
	this.shape_19.setTransform(363.5203,444.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2AE8A").s().p("AhDAHICHg4IgjBjg");
	this.shape_20.setTransform(387.45,398.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2AE8A").s().p("AhTAyICnh5IgFCPg");
	this.shape_21.setTransform(337.2,428.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2AE8A").s().p("AhAEmQh6gbhDhpQhDhpAbh5QAbh6BphDQBphDB4AbQB6AbBDBpIABABQBDBpgbB4QgbB6hqBDQhKAwhUAAQggAAgjgIg");
	this.shape_22.setTransform(373.4,428.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance}]}).wait(64));

	// Layer_2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2AE8A").s().p("AAHCbQgbAAAAgcIAAjrQAAgKgKAAIgSAAIAAgkIAqAAQAbAAAAAcIAADrQAAAKAKAAIASAAIAAAkg");
	this.shape_23.setTransform(416.3,167.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2AE8A").s().p("AAHCbQgbAAAAgcIAAiTQAAgKgKAAIgSAAIAAgkIAqAAQAbAAAAAcIAACTQAAAKAKAAIASAAIAAAkgAgThuIAAgsIAlAAIAAAsg");
	this.shape_24.setTransform(402.475,167.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2AE8A").s().p("AhTBjQgXgTAAgfQAAhLCFAAIAJAAIAAgCQABgegMgMQgLgMgZAAQglAAAAARIAAANIgoAAIAAgWQAAgYAegKQAVgIAaAAQBaAAAABYIAABdQAAAKAKAAIASAAIAAAkIgoAAQgcAAABgZIAAgNIAAAAQgTAsgzAAQgfAAgWgSgAg/AvQAAAOAKAKQALALAVAAQAZAAARgXQAQgVAAgbIAAgHIgLAAQhZAAAAArg");
	this.shape_25.setTransform(382.85,171.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2AE8A").s().p("AgCCBQgggUgBgxIAAhqIgdAAIAAgiIAeAAIAAg+IApAAIAAA+IA2AAIAAAiIg2AAIAABlQABAyAuAAIAKgBIAAAmIgOABQghAAgTgOg");
	this.shape_26.setTransform(360.7,168.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2AE8A").s().p("AgvBxIAAiwQABgJgLAAIgSAAIAAglIApAAQAdAAAAAaIAAAOIgBAQIABAAQAHgaASgQQAUgRAYAAIAMABIAAArQgGgCgHAAQgVAAgRAOQgRAOgHAZQgFARAAAWIAABbg");
	this.shape_27.setTransform(328.95,171.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2AE8A").s().p("AhGBTQghghAAgyQAAgzAgghQAgggAvAAQAtAAAaAfQAZAcAAAuIgCAQIihAAQACAjAWAUQAWAUAeAAQAmAAAbgaIASAeQghAhg0AAQg0AAghgigAA8gZQgBgbgPgPQgPgPgWAAQgYAAgRAPQgSAPgFAbIB1AAIAAAAg");
	this.shape_28.setTransform(306.175,171.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2AE8A").s().p("ABXCbQgdAAAAgcIAAhpQAAgagHgMQgKgRgYAAQgZAAgTAQQgTAPgHAXQgEAMAAASIAABoIgrAAIAAkHQAAgKgJAAIgSAAIAAgkIApAAQAdAAAAAbIAABXIgBASIABAAQAJgTATgOQAYgRAeAAQBLAAAABVIAABgQAAAKAKAAIASAAIAAAkg");
	this.shape_29.setTransform(278.5,167.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2AE8A").s().p("AhhCOIAPgjQAbAPAhAAQAfAAASgOQAVgQAAggIAAgPIABgOIgBAAQgVAigsAAQguAAgbghQgbgfAAgxQAAgxAageQAaggAuAAQA2AAAQAjIABAAIAAgHQAAgXAZAAIApAAIAAAlIgSAAQgJAAAAAJIAACnQAAAzgjAbQgfAXguAAQgnAAglgSgAg6hmQgPATAAAiQAAAjARAVQARAVAeAAQA6AAAAhLQAAhLg+AAQgdAAgQAUg");
	this.shape_30.setTransform(236.325,176.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2AE8A").s().p("ABWByQgcAAAAgcIAAhoQAAgbgIgMQgJgRgYAAQgZAAgTAQQgTAOgHAYQgEAMAAASIAABoIgqAAIAAiwQAAgJgLAAIgSAAIAAglIApAAQAdABAAAYIAAAJIgBAMIABAAQAIgTASgNQAZgTAfAAQBNAAAABVIAABgQAAAKAKAAIASAAIAAAkg");
	this.shape_31.setTransform(207.2,171.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2AE8A").s().p("AAHCbQgbAAAAgcIAAiTQAAgKgKAAIgSAAIAAgkIAqAAQAbAAAAAcIAACTQAAAKAKAAIASAAIAAAkgAgThuIAAgsIAlAAIAAAsg");
	this.shape_32.setTransform(185.375,167.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2AE8A").s().p("AgYBvIhEiwQgEgJgKAAIgEAAIAAgkIAVAAQAPAAAHAEQAHAFAFANIAwB/QAFAMACARIABAAQAEgRAEgMIAwh/QAFgNAHgFQAHgEAPAAIAUAAIAAAkIgEAAQgLAAgEAJIhECwg");
	this.shape_33.setTransform(165.625,171.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2AE8A").s().p("AhUBTQgjghAAgyQAAgyAjghQAighAyAAQAyAAAjAhQAjAhAAAyQAAAygjAhQgjAigyAAQgxAAgjgigAg1g4QgWAWAAAiQAAAiAWAXQAWAXAfAAQAgAAAWgXQAWgXAAgiQAAgigWgWQgWgXggAAQgfAAgWAXg");
	this.shape_34.setTransform(138.775,171.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2AE8A").s().p("ACaByQgcAAAAgcIAAhpQABgbgIgMQgJgQgWAAQgWAAgTARQgQAQgGAYQgEAOAAAQIAABlIgpAAIAAiFQgBgagFgMQgKgRgXAAQgWAAgSASQgQAPgIAaQgDAMAAAQIAABlIgqAAIAAiwQAAgJgKAAIgSAAIAAglIApAAQAcABABAYIAAAJIgBAMIABAAQAIgVAVgOQAWgQAZAAQA2AAAMAzIABAAQAJgWAVgOQAXgPAaAAQBKAAAABVIAABgQAAAKAJAAIASAAIAAAkg");
	this.shape_35.setTransform(102.65,171.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2AE8A").s().p("AgCCBQghgUAAgxIAAhqIgdAAIAAgiIAeAAIAAg+IAqAAIAAA+IA1AAIAAAiIg1AAIAABlQAAAyAuAAIAKgBIAAAmIgOABQghAAgTgOg");
	this.shape_36.setTransform(58.2,168.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2AE8A").s().p("AhTBjQgXgTAAgfQAAhLCFAAIAKAAIAAgCQAAgegMgMQgLgMgaAAQgkAAAAARIAAANIgoAAIAAgWQAAgYAegKQAUgIAbAAQBbAAAABYIAABdQAAAKAJAAIASAAIAAAkIgoAAQgbAAgBgZIABgNIgBAAQgRAsg1AAQgeAAgWgSgAg/AvQAAAOALAKQALALATAAQAZAAASgXQAQgVAAgbIAAgHIgLAAQhZAAAAArg");
	this.shape_37.setTransform(37.2,171.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E2AE8A").s().p("AhHBTQghghAAgyQAAgxAhghQAigiA0AAQAbAAAXALQAeANAAAZIAAAXIgnAAIAAgMQAAgLgPgHQgMgFgOAAQggAAgWAWQgVAXAAAiQAAAkAXAWQAWAVAgAAQAqAAAbgfIATAeQggAng7AAQgzAAgigig");
	this.shape_38.setTransform(11.475,171.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E2AE8A").s().p("AhTBjQgXgTAAgfQAAhLCFAAIAJAAIAAgCQAAgegLgMQgLgMgZAAQglAAAAARIAAANIgoAAIAAgWQAAgYAegKQAUgIAbAAQBbAAAABYIAABdQAAAKAJAAIASAAIAAAkIgoAAQgcAAAAgZIABgNIgBAAQgSAsg0AAQgeAAgWgSgAg/AvQAAAOAKAKQAMALATAAQAZAAASgXQAQgVAAgbIAAgHIgLAAQhZAAAAArg");
	this.shape_39.setTransform(-27.95,171.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2AE8A").s().p("AgCCBQgggUgBgxIAAhqIgdAAIAAgiIAeAAIAAg+IApAAIAAA+IA1AAIAAAiIg1AAIAABlQABAyAuAAIAKgBIAAAmIgOABQghAAgTgOg");
	this.shape_40.setTransform(-64.1,168.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E2AE8A").s().p("AhUBNIAWgcQAaAhAoAAQAQAAALgHQAMgIAAgOQAAgNgTgKIgpgTQgcgLgOgMQgTgRAAgYQAAgfAZgQQAWgQAjAAQAaAAAVAJQAaAMAAAWIAAAWIgmAAIAAgLQAAgJgMgGQgKgEgMAAQgoAAAAAaQAAAOATAKIApASQAcALANALQATARAAAZQAAAegXASQgXASgjAAQg7AAgdgog");
	this.shape_41.setTransform(-83.775,171.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E2AE8A").s().p("AhjAdIAAhgQAAgJgJAAIgSAAIAAglIApAAQAdAAAAAbIAABoQAAAbAHANQAKAQAYAAQAgAAAVgZQATgZAAghIAAhoIArAAIAACvQAAAKAJAAIASAAIAAAkIgpAAQgcAAAAgYIAAgIIABgOIgBAAQgIAVgUANQgYASgdAAQhMAAAAhVg");
	this.shape_42.setTransform(-109.175,172.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E2AE8A").s().p("AgxDIIAAgkIAKAAQAvAAAAgxIAAi1QgBgJgIAAIgSAAIAAglIApAAQAcAAAAAcIAADKQAAAwggAVQgUANggAAIgPAAgAAIibIAAgtIAnAAIAAAtg");
	this.shape_43.setTransform(-133.25,172.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E2AE8A").s().p("AhzCIIASggQAOARASgBQAaAAANgfIAKgZIhMivQgDgJgLAAIgFAAIAAglIAZAAQAOABAGAEQAGAFAGANIAzB9QADALAEAPIAAAAQADgPAFgLIAuh9QAFgNAHgFQAHgEANgBIAaAAIAAAlIgFAAQgLAAgEAJIhYDYQgTA1g0gBQghAAgTgVg");
	this.shape_44.setTransform(-165.35,176.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E2AE8A").s().p("AAHCbQgcAAAAgcIAAjrQABgKgKAAIgSAAIAAgkIAqAAQAcAAgBAcIAADrQAAAKAKAAIASAAIAAAkg");
	this.shape_45.setTransform(-185.1,167.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E2AE8A").s().p("AgDCBQgfgUAAgxIAAhqIgeAAIAAgiIAfAAIAAg+IAoAAIAAA+IA1AAIAAAiIg1AAIAABlQAAAyAwAAIAKgBIAAAmIgQABQgfAAgVgOg");
	this.shape_46.setTransform(-200.6,168.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E2AE8A").s().p("ABWByQgcAAAAgcIAAhoQAAgbgIgMQgJgRgZAAQgYAAgUAQQgTAOgGAYQgEAMAAASIAABoIgrAAIAAiwQABgJgLAAIgSAAIAAglIAqAAQAcABAAAYIAAAJIgBAMIABAAQAIgTATgNQAYgTAfAAQBNAAAABVIAABgQAAAKAKAAIASAAIAAAkg");
	this.shape_47.setTransform(-223.75,171.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E2AE8A").s().p("AhGBTQghghAAgyQAAgzAgghQAgggAvAAQAtAAAaAfQAZAcAAAuIgCAQIihAAQACAjAWAUQAWAUAeAAQAmAAAbgaIASAeQghAhg0AAQg0AAghgigAA8gZQgBgbgPgPQgPgPgWAAQgYAAgRAPQgSAPgFAbIB1AAIAAAAg");
	this.shape_48.setTransform(-251.825,171.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E2AE8A").s().p("AgvBxIAAiwQAAgJgKAAIgSAAIAAglIApAAQAdAAAAAaIAAAOIgBAQIABAAQAHgaASgQQAUgRAYAAIALABIAAArQgFgCgHAAQgVAAgRAOQgRAOgHAZQgFARAAAWIAABbg");
	this.shape_49.setTransform(-273.4,171.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E2AE8A").s().p("AgvBxIAAiwQABgJgKAAIgSAAIAAglIAoAAQAdAAAAAaIAAAOIgBAQIABAAQAHgaASgQQATgRAZAAIAMABIAAArQgGgCgHAAQgVAAgRAOQgRAOgIAZQgEARAAAWIAABbg");
	this.shape_50.setTransform(-292.7,171.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E2AE8A").s().p("AhjAdIAAhgQAAgJgJAAIgSAAIAAglIApAAQAdAAAAAbIAABoQAAAbAHANQAKAQAYAAQAgAAAVgZQATgZAAghIAAhoIArAAIAACvQAAAKAJAAIASAAIAAAkIgpAAQgcAAAAgYIAAgIIABgOIgBAAQgIAVgUANQgYASgdAAQhMAAAAhVg");
	this.shape_51.setTransform(-316.875,172.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E2AE8A").s().p("AhHBTQghghAAgyQAAgxAhghQAigiA0AAQAbAAAXALQAeANAAAZIAAAXIgnAAIAAgMQAAgLgPgHQgMgFgOAAQggAAgWAWQgVAXAAAiQAAAkAXAWQAWAVAgAAQAqAAAbgfIATAeQggAng7AAQgzAAgigig");
	this.shape_52.setTransform(-343.875,171.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#E2AE8A").ss(1,1,1).p("A0svEIAoB5QA4CWBQCUQECHZGWELQHoFEHRClQHUCmGEgPImeCCAUtNDIlgjX");
	this.shape_53.setTransform(185.55,319.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(64));

	// cat body
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7A5535").s().p("ApZFLQgwhCAXhQQAuifAahGQAqhzAyhGQB2ioDsAAQD/AADMCfQDJCbBKD2QAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhDg");
	this.shape_54.setTransform(415.2469,420.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7A5535").s().p("ApZFMQgwhDAXhPQAuigAahGQAqhzAyhGQB3ioDrAAQECAADLCeQDHCbBKD3QAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_55.setTransform(415.2469,420.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7A5535").s().p("ApZFMQgwhCAXhQQAuifAahGQArh0AxhGQB3ipDsAAQEEABDKCeQDECaBLD5QAZBSgxBHQgxBFhUAAIuuANQhQAAgwhDg");
	this.shape_56.setTransform(415.2469,420.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7A5535").s().p("ApZFMQgwhCAXhQQAuifAahHQArhyAxhHQB4ipDrAAQEIAADJCfQDBCZBLD6QAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhDg");
	this.shape_57.setTransform(415.2469,420.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7A5535").s().p("ApZFNQgwhDAXhPQAuifAbhHQAqhzAyhHQB3ipDsAAQEKAADICfQC/CXBLD9QAZBSgxBGQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_58.setTransform(415.2358,420.675);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7A5535").s().p("ApZFNQgwhCAXhQQAuifAbhHQAqhzAyhHQB4ipDrgBQENAADHCgQC9CWBLD+QAZBSgxBHQgxBFhUAAIuuANQhQAAgwhDg");
	this.shape_59.setTransform(415.2358,420.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7A5535").s().p("ApZFOQgwhDAXhPQAuifAbhIQAqhzAyhHQB4iqDsAAQEQAADFCfQC7CWBLD/QAZBUgxBFQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_60.setTransform(415.2358,420.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7A5535").s().p("ApZFOQgwhDAXhPQAuifAbhHQAqh0AyhHQB5iqDrAAQETAADECfQC4CVBMEBQAZBTgxBFQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_61.setTransform(415.2358,420.575);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7A5535").s().p("ApZFOQgwhCAXhQQAuieAbhJQAqhzAzhHQB4iqDsAAQEVAADDCeQC2CUBMEDQAZBTgxBGQgxBFhUAAIuuANQhQAAgwhDg");
	this.shape_62.setTransform(415.2358,420.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7A5535").s().p("ApZFPQgwhDAXhPQAuieAbhJQArh0AyhHQB5irDrAAQEZAADBCfQC0CUBMEDQAZBUgxBFQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_63.setTransform(415.2358,420.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7A5535").s().p("ApZFPQgwhDAXhPQAuieAbhJQArh0AyhHQB5irDsAAQEbAADACfQCyCSBMEGQAZBTgxBFQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_64.setTransform(415.2358,420.475);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7A5535").s().p("ApZFPQgwhCAXhQQAuieAbhIQArh0AyhIQB5isDsAAQEeAADACgQCvCRBMEHQAYBTgxBGQgxBGhTAAIuuAMQhQAAgwhDg");
	this.shape_65.setTransform(415.222,420.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7A5535").s().p("ApZFQQgwhDAXhPQAuieAbhJQArh0AzhIQB5isDrAAQEhAAC/CgQCsCPBNEJQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_66.setTransform(415.222,420.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7A5535").s().p("ApZFQQgwhCAXhQQAuidAbhKQArh0AzhHQB5iuDsAAQEkAAC9CgQCqCPBNELQAYBTgxBGQgxBFhTAAIuuANQhQAAgwhDg");
	this.shape_67.setTransform(415.222,420.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7A5535").s().p("ApZFQQgwhCAXhQQAuidAbhKQArh0AzhIQB6itDrAAQEnAAC8CgQCoCOBNEMQAYBTgxBGQgxBGhTAAIuuAMQhQAAgwhDg");
	this.shape_68.setTransform(415.222,420.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7A5535").s().p("ApZFRQgwhDAXhPQAuieAbhJQArh1AzhIQB6itDsAAQEpAAC7CfQCmCOBNENQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_69.setTransform(415.222,420.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7A5535").s().p("ApZFRQgwhCAXhQQAtidAchKQAsh1AzhIQB6itDrgBQEtABC5CfQCkCNBNEPQAYBUgxBFQgxBFhTAAIuuANQhQAAgwhDg");
	this.shape_70.setTransform(415.222,420.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7A5535").s().p("ApZFRQgwhCAXhQQAtidAchKQAsh1AzhIQB6iuDsAAQEvAAC4CgQCiCMBNEQQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhDg");
	this.shape_71.setTransform(415.222,420.225);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7A5535").s().p("ApZFSQgwhDAXhPQAtidAdhKQArh2AzhIQB7iuDrAAQEyAAC3CgQCfCKBOETQAYBTgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_72.setTransform(415.211,420.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7A5535").s().p("ApZFSQgwhCAXhQQAtidAdhLQArh0AzhJQB7iuDsAAQE1AAC2CgQCcCJBOEUQAYBUgxBFQgxBFhTAAIuuANQhQAAgwhDg");
	this.shape_73.setTransform(415.211,420.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#7A5535").s().p("ApZFTQgwhDAXhPQAtidAdhLQArh1A0hIQB7iwDrAAQE4AAC1CgQCaCJBOEVQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_74.setTransform(415.211,420.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7A5535").s().p("ApZFTQgwhDAXhPQAtidAdhLQArh1A0hJQB7ivDsAAQE6AAC0CgQCYCIBOEXQAYBTgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_75.setTransform(415.211,420.075);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#7A5535").s().p("ApZFTQgwhDAXhPQAtidAdhLQArh1A0hJQB7ivDsAAQE5AAC0CgQCZCJBOEVQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_76.setTransform(415.211,420.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7A5535").s().p("ApZFSQgwhCAXhQQAticAdhLQArh1AzhJQB8ivDrAAQE2AAC2CgQCbCKBOEUQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhDg");
	this.shape_77.setTransform(415.211,420.125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7A5535").s().p("ApZFSQgwhDAXhPQAtidAdhLQArh1AzhIQB7iuDsAAQEzAAC2CfQCeCLBOETQAYBTgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_78.setTransform(415.211,420.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7A5535").s().p("ApZFSQgwhDAXhPQAtieAchJQAsh2AzhHQB7ivDrAAQExAAC3CgQCgCLBOERQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_79.setTransform(415.222,420.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7A5535").s().p("ApZFRQgwhCAXhQQAtidAchKQAsh1AzhIQB6iuDsAAQEtAAC5CgQCjCMBNEQQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhDg");
	this.shape_80.setTransform(415.222,420.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7A5535").s().p("ApZFRQgwhDAXhPQAuieAbhJQArh1AzhIQB7itDrAAQErAAC6CfQClCNBNEPQAYBTgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_81.setTransform(415.222,420.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7A5535").s().p("ApZFRQgwhDAXhPQAuieAbhJQArh1AzhHQB6iuDsAAQEoAAC7CfQCnCPBNEMQAYBUgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_82.setTransform(415.222,420.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7A5535").s().p("ApZFQQgwhCAXhQQAuieAbhJQArh0AzhIQB6itDrAAQElAAC9CgQCpCPBNELQAYBTgxBGQgxBFhTAAIuuANQhQAAgwhDg");
	this.shape_83.setTransform(415.222,420.35);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7A5535").s().p("ApZFQQgwhDAXhPQAuieAbhJQArh0AzhIQB5isDsAAQEiAAC+CfQCrCQBNEKQAYBTgxBFQgxBGhTAAIuuAMQhQAAgwhCg");
	this.shape_84.setTransform(415.222,420.375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7A5535").s().p("ApZFPQgwhCAXhQQAuieAbhIQArh0AyhIQB6isDrAAQEgAAC/CfQCuCRBMEIQAYBTgxBGQgxBGhTAAIuuAMQhQAAgwhDg");
	this.shape_85.setTransform(415.222,420.425);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7A5535").s().p("ApZFPQgwhCAXhQQAuieAbhJQArhzAyhHQB5isDsAAQEdAADACfQCwCSBMEGQAZBTgxBGQgxBFhUAAIuuANQhQAAgwhDg");
	this.shape_86.setTransform(415.2358,420.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7A5535").s().p("ApZFPQgwhDAXhPQAuieAbhJQArh0AyhHQB5irDrAAQEaAADBCfQCzCTBMEFQAZBTgxBFQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_87.setTransform(415.2358,420.475);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7A5535").s().p("ApZFOQgwhCAXhQQAuieAbhIQAqh0AzhHQB4irDsAAQEXAADCCfQC1CUBMEDQAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhDg");
	this.shape_88.setTransform(415.2358,420.525);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7A5535").s().p("ApZFOQgwhCAXhQQAuifAbhHQAqh0AzhGQB4isDrABQEVAADDCeQC3CVBMECQAZBTgxBGQgxBFhUAAIuuANQhQAAgwhDg");
	this.shape_89.setTransform(415.2358,420.55);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7A5535").s().p("ApZFOQgwhDAXhPQAuifAbhIQAqhzAyhHQB4iqDsAAQERAADFCfQC6CWBLD/QAZBUgxBFQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_90.setTransform(415.2358,420.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7A5535").s().p("ApZFNQgwhCAXhQQAuieAbhIQAqhzAyhHQB4iqDrAAQEPAADGCfQC8CXBLD+QAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhDg");
	this.shape_91.setTransform(415.2358,420.625);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7A5535").s().p("ApZFNQgwhDAXhPQAuifAbhHQAqhzAyhHQB3ipDsAAQEMAADHCeQC+CYBLD9QAZBSgxBGQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_92.setTransform(415.2358,420.675);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7A5535").s().p("ApZFNQgwhDAXhPQAuigAbhHQAqhzAyhGQB3ipDrAAQEJAADJCeQDACZBLD7QAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_93.setTransform(415.2358,420.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7A5535").s().p("ApZFMQgwhCAXhQQAuifAahGQArhzAxhHQB3ipDsAAQEGAADKCfQDCCZBLD6QAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhDg");
	this.shape_94.setTransform(415.2469,420.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7A5535").s().p("ApZFMQgwhDAXhPQAuigAahGQAqhzAyhGQB3ioDrAAQEEAADKCeQDFCaBLD5QAZBSgxBGQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_95.setTransform(415.2469,420.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7A5535").s().p("ApZFMQgwhDAXhPQAuigAahGQAqhzAyhFQB2ipDsAAQEAAADMCeQDICcBKD2QAZBTgxBGQgxBGhUAAIuuAMQhQAAgwhCg");
	this.shape_96.setTransform(415.2469,420.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54}]}).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_54}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.9,139.8,837.2,347.8);


(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stage_1
	this.stage_1 = new lib.Stage_1();
	this.stage_1.name = "stage_1";
	this.stage_1.setTransform(135.7,128,1,1,0,0,0,122.7,123);

	this.timeline.addTween(cjs.Tween.get(this.stage_1).wait(1));

	// stage 0
	this.stage_0 = new lib.Stage0();
	this.stage_0.name = "stage_0";
	this.stage_0.setTransform(48.05,-26.35);

	this.timeline.addTween(cjs.Tween.get(this.stage_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-789,-315.3,1617.1,1082.3);


// stage content:
(lib.magnifierani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.animation = new lib.Animation();
	this.animation.name = "animation";
	this.animation.setTransform(451,211.65);

	this.timeline.addTween(cjs.Tween.get(this.animation).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174,280.3,1105.1,698.4000000000001);
// library properties:
lib.properties = {
	id: '7C53F5C727814495A4D7CFD750CA1921',
	width: 1024,
	height: 768,
	fps: 20,
	color: "#333333",
	opacity: 0.00,
	manifest: [
		{src:"images/magnifier_ani_atlas_.png?1579958853035", id:"magnifier_ani_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['7C53F5C727814495A4D7CFD750CA1921'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;