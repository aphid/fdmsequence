/*
sequencer.js 0.00002
abram stern, aphid@ucsc.edu
This code is public domain.

notes: requires popcornjs and jquery
include this file and 'sequence.js' with your sequence in it.
for now sequence will always start with the first element in the file.
*/
var current = {};
current.id = rnd(groupdata);
current.type = "Intro";
var topmediadir = "http://localhost/~aphid/sequence_videos/"; //relative or absolute
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
    $('#course').text("Course: " + video.title);
    $('#description').text("Instructor: " + video.instructor);
    //create video element for first item in course (intro)
    var vtag = $('<video/>', {id: id, autoplay: false});
    var path = topmediadir + video.code + "/" + type + "/";
    var fname = video[type][rnd(video[type])] + "";
    $("<source/>", { src: path + fname +  ".mp4" }).appendTo(vtag);
    $("<source/>", { src: path + fname + ".webm" }).appendTo(vtag);
    
    vtag.appendTo("#videoplayer")
    //$('video').attr('controls', true);
}
/*
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
    console.log(current.type + " bb");
	//var nextvid = video.connectsTo[Math.floor ( Math.random() * video.connectsTo.length )]; 

	if (video.start) {
		pvid.currentTime(video.start);	
	}
	if (video.end) {
		endpoint = video.end;
	} else {
		endpoint = pvid.duration();
	}
	pvid.play();
	pvid.cue(endpoint, function() {
		
		$("#" + id).remove();
		createVideo(current.id);
		Popcorn("#" + current.id).on('loadedmetadata', function(){
			setupVideo(current.id);
		});
	});
}

function rnd(a){

    return Math.floor ( Math.random() * a.length );


}

function getNext(id, type){

    if (type === 'Intro'){
        current.type = 'Explanation';
    } else if (type === 'Explanation'){
        current.type = 'Followup';
    } else if (type === 'Followup'){
        current.id = rnd(groupdata);
        current.type = 'Intro';
    }
    console.log(current.id + " " + current.type);
    
}


