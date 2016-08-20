var thumbnails = document.getElementsByClassName("yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related");
var count = thumbnails.length


originalSize = [168,94]
desiredSize = [120,68]

console.log("I HAVE EXECUTED")

function smallerThumbnails() {


	thumbnails = document.getElementsByClassName("yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related");
	count = thumbnails.length;
	console.log("THUMBNAILS CONTAINS " + count + " ELEMENTS")

	if(thumbnails[count-1].children[0].height == originalSize[1]) {
		var titles = document.getElementsByClassName("title");
		
		for (var i = titles.length - 1; i >= 0; i--) {
			if(titles[i].dir == "ltr"){
				titles[i].style.fontSize = "13px"
			}
		};
		
		
		var thumbWrapper = document.getElementsByClassName("video-time")
		
		
		for (var i = 0; i < count; i++) {
			thumbnails[i].children[0].width = desiredSize[0];
			thumbnails[i].children[0].height = desiredSize[1];
			thumbWrapper[i].parentElement.style.width = desiredSize[0] + "px"
			thumbWrapper[i].parentElement.style.height = desiredSize[1] + "px"
			document.getElementsByClassName("thumb-link")[i].parentElement.style.height = desiredSize[1] + "px"
			document.getElementsByClassName("content-wrapper")[i].children[0].style.right = originalSize[0]-desiredSize[0]+"px"
			document.getElementsByClassName("content-link")[i].style.marginBottom = desiredSize[1]-originalSize[1]+"px"
		
		};

		
		var mixThumbs = document.getElementsByClassName("yt-mix-thumb")
		//var thumbOverlays = document.getElementsByClassName("yt-pl-thumb-overlay")
		var mixCount = mixThumbs.length

		for (var i = mixCount - 1; i >= 0; i--) {

		
			mixThumbs[i].style.width = desiredSize[0] + "px"
			mixThumbs[i].parentElement.style.height = desiredSize[1] + "px"
		
			//thumbOverlays[i].style.width = desiredSize[0] + "px"
			//thumbOverlays[i].style.height = desiredSize[1] + "px"

		
			document.getElementsByClassName("yt-mix-thumb")[i].children[0].children[0].children[0].children[0].style.position = "relative"
			document.getElementsByClassName("yt-mix-thumb")[i].children[0].children[0].children[0].children[0].width = desiredSize[0]
			document.getElementsByClassName("yt-mix-thumb")[i].children[0].children[0].children[0].children[0].height = desiredSize[1]
			document.getElementsByClassName("yt-mix-thumb")[i].children[0].children[0].children[0].children[0].style.top = (desiredSize[1]-originalSize[1])/2 + "px"
			document.getElementsByClassName("yt-mix-thumb")[i].children[0].children[0].children[0].children[0].style.left = (desiredSize[0]-originalSize[0])/2 + "px"
		
		};	
	}


for (var i = document.getElementsByClassName("sidebar").length - 1; i >= 0; i--) {
	document.getElementsByClassName("sidebar")[i].style.height = desiredSize[1] + "px"
	document.getElementsByClassName("sidebar")[i].style.width = desiredSize[0]/2-10 + "px"
};

for (var i = document.getElementsByClassName("formatted-video-count-label").length - 1; i >= 0; i--) {
	document.getElementsByClassName("formatted-video-count-label")[i].style.fontSize = "8px"
	document.getElementsByClassName("formatted-video-count-label")[i].children[0].style.fontSize = "14px"
};

for (var i = document.getElementsByClassName("yt-pl-thumb-overlay-text").length - 1; i >= 0; i--) {
	document.getElementsByClassName("yt-pl-thumb-overlay-text")[i].style.fontSize = "12px"
};

for (var i = document.getElementsByClassName("yt-pl-thumb-overlay").length - 1; i >= 0; i--) {
	document.getElementsByClassName("yt-pl-thumb-overlay")[i].style.width = desiredSize[0] + "px"
	document.getElementsByClassName("yt-pl-thumb-overlay")[i].style.height = desiredSize[1] + "px"
};



playlistThumbs = document.getElementsByClassName("yt-pl-thumb")


for (var i = playlistThumbs.length - 1; i >= 0; i--) {
	if(!(playlistThumbs[i].className.indexOf("yt-mix-thumb")+1)){
		playlistThumbs[i].style.width="120px"
		playlistThumbs[i].style.height="68px"
		playlistThumbs[i].children[0].children[0].children[0].children[0].height = 68
		playlistThumbs[i].children[0].children[0].children[0].children[0].width = 120
		playlistThumbs[i].children[0].children[0].children[0].children[0].style.marginBottom = "26px"
		playlistThumbs[i].children[0].children[0].children[0].children[0].style.marginRight = "48px"
	}

};






}

smallerThumbnails();


function checkForNewThumbs() {
    if(document.getElementsByClassName("yt-uix-simple-thumb-wrap yt-uix-simple-thumb-related").length == count) {
       window.setTimeout(checkForNewThumbs, 100);
    } else {
      smallerThumbnails();
    }
}

var expandButton = document.getElementsByClassName("yt-uix-button-expander")[document.getElementsByClassName("yt-uix-button-expander").length-1]

expandButton.onclick = function(event){
	checkForNewThumbs();
	return false;
}

//chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
//  if (changeInfo.status == 'complete' && tab.active) {
//  	alert("now executing")
//   	smallerThumbnails();
//  }
//})

// "content_scripts": [
//     {
//       "matches": ["http://www.youtube.com/watch*", "https://www.youtube.com/watch*"],
//       "js": ["myscript.js"],
//       "run_at": "document_end"
//     }
// ],







//,
//     {
//       "matches": ["http://www.youtube.com/*", "https://www.youtube.com/*"],
//       "js": ["normalAnchors.js"],
//       "run_at": "document_end"
//     }