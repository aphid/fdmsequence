/*
sequencer.js 0.00002
abram stern, aphid@ucsc.edu
This code is public domain.

notes: requires popcornjs and jquery
include this file and 'sequence.js' with your sequence in it.
for now sequence will always start with the first element in the file.

reads "groupdata" object from manifest.js (loaded in the html).  follows structu

*/
var current = {};
current.id = rnd(groupdata); 
current.type = "Intro";
var topmediadir = "http://metaviddemo01.ucsc.edu/sequence_videos/"; //relative or absolute

$(document).ready(function() {
    var id = current.id;
	createVideo(id);
	Popcorn("#" + id).on('loadedmetadata', function(){
		setupVideo(id);
	});


}); 


function createVideo(id){
    var video = groupdata[id];
    var type = current.type;
    //put data from element into html
    $('#course').text("Course: " + video.title);
    $('#description').text("Instructor: " + video.instructor);
    //create video element for first item in course (intro)
    var vtag = $('<video/>', {id: id, autoplay: false, controls: true});
    var path = topmediadir + video.code + "/" + type + "/";
    var fname = video[type][rnd(video[type])] + "";
    //create sources (mp4/webm) for video tag
    console.log("Loading " + path + fname);
    $("<source/>", { src: path + fname +  ".mp4" }).appendTo(vtag);
    $("<source/>", { src: path + fname + ".webm" }).appendTo(vtag);
    //make it go    
    vtag.appendTo("#videoplayer")
}

/*  method from older json structure
function createVideo(id){
    video = sequence.clips[id];
    console.log(video);
    $('#title').text(video.title);
    $('#description').text(video.description);
    $('<video/>', {id: id, autoplay: false}).appendTo("#videoplayer");
    $('video').attr('src', video.id + );
    $('video').attr('controls', true);
}
*/

function setupVideo(id){
	var video = sequence.clips[id];
	var pvid = Popcorn("#" + id);
    getNext(id, current.type);
    
    //if video has start/endtimes defined, use them, otherwise use whole video
	if (video.start) {
		pvid.currentTime(video.start);	
	}
	if (video.end) {
		endpoint = video.end;
	} else {
		endpoint = pvid.duration();
	}
	
	pvid.play();
	
	//at end of video, remove current one and load next
	pvid.cue(endpoint, function() {
		
		$("#" + id).remove();
		createVideo(current.id);
		Popcorn("#" + current.id).on('loadedmetadata', function(){
			setupVideo(current.id);
		});
	});
}

//returns random element of array
function rnd(a){
    return Math.floor ( Math.random() * a.length );


}

function getNext(id, type){
    //if current type is x, make it y
    if (type === 'Intro'){
        current.type = 'Explanation';
    } else if (type === 'Explanation'){
        current.type = 'Followup';
    } else if (type === 'Followup'){
        current.id = rnd(groupdata);
        current.type = 'Intro';
    }
    
}


