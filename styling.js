var circle = document.getElementById('circle')
var another_body = document.getElementById('next')
circle.addEventListener('click', function(){
	another_body.style.display = "flex";
})
function myfunction(){
	circle.style.backgroundColor ="white";
}
function over(){
	circle.style.backgroundColor ="black";

}

//for the button about 
var btn = document.getElementById('explore-btn').addEventListener('click', function(){
	/* for changing the background of the home page after clicking */
	var about = document.querySelector('.about')
	if (about.style.display == "none"){
		about.style.display = "flex";
	} 
	else{
		about.style.display = "none";
	}
	document.getElementById('crs-btn').addEventListener('click', function(){
		about.style.display = "none";
	});
});
//for the another page 
/* for the workouts  */
let classPage = document.getElementById('class-window');
let homepg = document.querySelector('.body-part');
let teamPage = document.getElementById('team-window');
let gallaryPage = document.getElementById('gallary-window'); 
let anotherPg = document.querySelector('.workout-page');
let x =window.matchMedia("(max-width:600px)");

let y =window.matchMedia("(min-width:600px)");


if (x.matches){
	homepg.style.display = "flex";
	teamPage.style.display ='flex';
	classPage.style.display ='flex';
	anotherPg.style.display = 'flex';
	gallaryPage.style.display ='flex';
}
if (y.matches){
	document.getElementById('workout-nav').addEventListener('click', function(){
		anotherPg.style.display = 'flex';
		homepg.style.display = 'none';
		teamPage.style.display ='none';
		classPage.style.display ='none';
		gallaryPage.style.display ='none';
	
	});
	document.getElementById('home-nav').addEventListener('click', function(){
		homepg.style.display = 'flex';
		anotherPg.style.display = 'none';
		teamPage.style.display ='none';
		classPage.style.display ='none';
		gallaryPage.style.display ='none';
	
	});
	/* for the classes */ 
	let classWindow = document.getElementById('class-nav').addEventListener('click',function(){
		anotherPg.style.display = 'none';
		homepg.style.display = 'none';
		classPage.style.display ='flex';
		teamPage.style.display ='none';
		gallaryPage.style.display ='none';
	
	
	});
	/* for the team page */
	document.getElementById('team-nav').addEventListener('click',function(){
		anotherPg.style.display = 'none';
		homepg.style.display = 'none';
		classPage.style.display ='none';
		gallaryPage.style.display ='none';
		teamPage.style.display ='flex';
	
	});
	// for the gallary page
	document.getElementById('gallaries-nav').addEventListener('click',function(){
		anotherPg.style.display = 'none';
		homepg.style.display = 'none';
		classPage.style.display ='none';
		teamPage.style.display ='none';
		gallaryPage.style.display ='flex';

	});
}



/* -------------- */

//for the pop up of the upper body workout
let workoutpop = document.getElementById('workout-popup')
let upPop = document.getElementById('upper-pop')
let upperPop = document.getElementById('upper-click')
upperPop.addEventListener('click', function(){
	workoutpop.style.display = " flex";
	upPop.style.display = " flex";

})
//for cross btn
let crossBtn = document.getElementById('crossFunciton')
crossBtn.addEventListener('click', function(){
	workoutpop.style.display = " none";
	upPop.style.display = " none";

})

//for the animation 
var picCount = 0;
picanimation();

function picanimation(){
	var i ;
	var x = document.getElementsByClassName('wrkout-img');
	for( i = 0; i<x.length;i++){
		x[i].style.display = "none";
	}
	picCount++;
	if(picCount > x.length){
		picCount =1;
	}
	x[picCount - 1].style.display = "block";
	setTimeout(picanimation, 4000);
}





