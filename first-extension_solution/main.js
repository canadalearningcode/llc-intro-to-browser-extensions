var allImages = document.getElementsByTagName('img');
console.log(allImages)
for (var i = 0; i < allImages.length; i++) {
	var imageHeight = allImages[i].clientHeight;
	var imageWidth = allImages[i].clientWidth;
	allImages[i].setAttribute('src', 'http://placekitten.com/' + imageWidth + '/' + imageHeight)
}

document.body.style = "transition: 2s; transform: rotate(1080deg);";