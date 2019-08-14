'use strict'
var  autoplayFirstAniTimeout,
     stage_1_audioAlreadyRun = false,
     la_a_timeout,
     la_b_timeout,
     la_c_timeout

function play() {
	init_animation()
	autoplayFirstAniTimeout = setTimeout(function() {
		startAnimationStage(0)
	}, 1000)
}

$(".navigation-wrapper .bullet").on('click', function() {
	$('.bullet').addClass('active')
	$(this).removeClass('active')
	$(".label").removeClass('active')
	var n = $(this).data('stage')
	clearTimeout(autoplayFirstAniTimeout)
	hideAnimations()
	startAnimationStage(n)
	stage_1_audioAlreadyRun = false
})

var canvas, stage, exportRoot, animationArray = [];
function init_animation() {
	canvas = document.getElementById("canvas");
	var comp=AdobeAn.getComposition("7C53F5C727814495A4D7CFD750CA1921");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
	var images=comp.getImages();
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(var i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.magnifierani();
	stage = new lib.Stage(canvas);
	//Registers the "tick" event listener.
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.compositionLoaded(lib.properties.id);
	stage.addChild(exportRoot);
	AdobeAn.compositionLoaded(lib.properties.id);

	animationArray = [
	  exportRoot.animation.stage_0,
	  exportRoot.animation.stage_1
	  // exportRoot.animation.stage_2
	];

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);

	hideAnimations();
	setFirstAnimation()
}

function hideAnimations() {
  for(var i=0; i<animationArray.length; i++)
  {
    animationArray[i].gotoAndStop(1)
    animationArray[i].visible = false;
  }
}

function setFirstAnimation() {
	animationArray[0].visible = true
	animationArray[0].gotoAndStop(1)
}

function startAnimationStage(n) {
	animationArray[n].visible = true
	animationArray[n].gotoAndPlay(2)
  clearTimeout(la_a_timeout)
  clearTimeout(la_b_timeout)

	if( n == 0 ) {
	  la_c_timeout = setTimeout(()=>{
	  	// $('.label').removeClass('active')
	  	$('.navigation-wrapper').addClass('active')
	  }, 6000)
	} else if ( n == 1 ) {
	  la_b_timeout = setTimeout(()=>{
	    if( stage_1_audioAlreadyRun == false ) {
	      stage_1_audioAlreadyRun = true
	    }
	  	animationArray[1].gotoAndPlay(1)
	  }, 5000)
	  la_c_timeout = setTimeout(()=>{
	  	// $('.label').removeClass('active')
	  	$('.navigation-wrapper').addClass('active')
	  }, 6000)
	} else if ( n == 2 ) {
	  la_c_timeout = setTimeout(()=>{
	  	// $('.label').removeClass('active')
	  	$('.navigation-wrapper').addClass('active')
	  }, 6000)
	} else {
		console.warn("Unexpected value")
	}
}