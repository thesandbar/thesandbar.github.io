$(document).ready(function(){
  
});

var nextTick;
var tickLength;
function tick(){
	
	nextTick = setTimeout(tick, tickLength);
}

function startTick(time){
	clearTimeout(nextTick);
	
}