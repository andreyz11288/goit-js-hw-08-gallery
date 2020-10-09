linkLen = allThumbs.length;
for (i = 0; i < linkLen; i++) {
  if (allThumbs[i].href == theTarget.href) {
    if (allThumbs[i - 1]) {
      var thePrevLink = document.createElement('a');
      thePrevLink.className = 'prev';
      thePrevLink.title = allThumbs[i - 1].title;
      thePrevLink.href = allThumbs[i - 1].href;
      thePrevLink.onclick = function () {
        closeBox();
        showBox(this);
        return false;
      };
      theCaption.insertBefore(thePrevLink, theCaption.firstChild);
      imgPrev = allThumbs[i - 1];
    }
    if (allThumbs[i + 1]) {
      var theNextLink = document.createElement('a');
      theNextLink.className = 'next';
      theNextLink.title = allThumbs[i + 1].title;
      theNextLink.href = allThumbs[i + 1].href;
      theNextLink.onclick = function () {
        closeBox();
        showBox(this);
        return false;
      };
      theCaption.insertBefore(theNextLink, theCaption.firstChild);
      imgNext = allThumbs[i + 1];
    }
  }
}

function getKey(e) {
  var arrowImg;

  if (!e) var e = window.event;
  var keycode = e.keyCode ? e.keyCode : e.which;

  switch (keycode) {
    case 27: // esc
    case 32: // spacebar
      closeBox();
      break;
    case 37: // <-
      arrowImg = imgPrev ? imgPrev : '';
      break;
    case 39: // ->
      arrowImg = imgNext ? imgNext : '';
  }
  if (arrowImg) {
    closeBox();
    showBox(arrowImg);
  }
  return false;
}
