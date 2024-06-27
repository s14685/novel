var firstChapter = 0;
var totalChapter = 3000;
// 



function goToPreviousChapter() {
  var currentPage = parseInt(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
  var previousPage = currentPage - 1;
// alert(previousPage);
  if (previousPage >= firstChapter) {
	window.location.href = padZero(previousPage) + '.html';
  }
}

function goToNextChapter() {
  var currentPage = parseInt(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
  var nextPage = currentPage + 1;
// alert(nextPage);
  if (nextPage <= totalChapter) {
	window.location.href = padZero(nextPage) + '.html';
  }
}

function padZero(number) {
  var paddedNumber = number.toString();
  while (paddedNumber.length < 4) {
	paddedNumber = '0' + paddedNumber;
  }
  return paddedNumber;
}

function changeFontSize(size) {
	document.body.style.fontSize = size;
	// alert(document.body.style.fontSize = size);
}


// Check if the browser is a mobile browser
function isMobileBrowser() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Update the page title with the browser type and viewport dimensions
function updateTitle() {
  var browserType = isMobileBrowser() ? "Mobile" : "Desktop";
  var dimensions = window.innerWidth + "x" + window.innerHeight;
  // document.title = browserType + " (" + dimensions + ") " + document.body.style.fontSize;
  // document.getElementById("font_Size").textContent = document.body.style.fontSize;
// Get the HTML file name
var fileName = window.location.pathname.split('/').pop();
// Remove the file extension if present
if (fileName.indexOf('.') !== -1) {
  fileName = fileName.split('.').slice(0, -1).join('.');
}
// Set the HTML file name as the page title
var panelDiv = document.getElementById('h01');
// var bodyFontFamily = window.getComputedStyle(document.body).getPropertyValue('font-family');
//panelDiv.innerHTML = fileName + '(' + document.body.style.fontSize  + ' ' + bodyFontFamily +')';
// panelDiv.innerHTML = fileName + '(' + document.body.style.fontSize +')';
panelDiv.innerHTML = fileName ;

}

// Call the updateTitle function when the page loads
window.onload = function() {

// Get the HTML file name
var fileName = window.location.pathname.split('/').pop();
// Remove the file extension if present
if (fileName.indexOf('.') !== -1) {
  fileName = fileName.split('.').slice(0, -1).join('.');
}
// Set the HTML file name as the page title
  var content = `
	  <br>
	  <!--
      <button class="btn btn-primary" title="small" onclick="changeFontSize('1em')">最小</button>
      <button class="btn btn-primary" title="medium" onclick="changeFontSize('1.5em')">標準</button>
      <button class="btn btn-primary" title="large" onclick="changeFontSize('2em')">最大</button>
	  -->
  `;

var panelDiv = document.getElementById('h01');
panelDiv.innerHTML =  fileName ;
panelDiv.onclick = scrollToggle;
//panelDiv.style.width = "240px";
//panelDiv.innerHTML = content + fileName ;

 var content = `
	  <br>
	 <!--
      <button class="btn btn-primary" title="small" onclick="changeFontSize('1em')">最小</button>
      <button class="btn btn-primary" title="medium" onclick="changeFontSize('1.5em')">標準</button>
      <button class="btn btn-primary" title="large" onclick="changeFontSize('2em')">最大</button>
	 -->
  `;
  var fsDiv = document.getElementById('font_Size');
  fsDiv.innerHTML = content;
  //
  var navPage = `
	<button class='btn btn-danger' onclick='goToPreviousChapter()'>上一頁</button>
	<button class='btn btn-danger' onclick='goToNextChapter()'>下一頁</button>
  `;
  var navDiv = document.getElementById('navigation');
  navDiv.innerHTML = navPage;

//   alert(fileName);
  

};

// Call the updateTitle function whenever the window is resized
window.onresize = function() {
  if (window.innerWidth < window.innerHeight) {
    // Portrait orientation
    // document.body.style.fontSize = "32px";
  } else {
    // Landscape orientation
    // document.body.style.fontSize = "24px";
  }
  updateTitle();
};

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
function scrollToTop() {
  window.scrollTo(0, 0);
}

function scrollToggle() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop + window.innerHeight === scrollHeight) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
  }
}


//  <button type="button" class="btn">Gray</button>
//  <button type="button" class="btn btn-default">Default white</button>
//  <button type="button" class="btn btn-primary">Primary blue</button>
//  <button type="button" class="btn btn-success">Success green</button>
//  <button type="button" class="btn btn-info">Info light blue</button>
//  <button type="button" class="btn btn-warning">Warning Oren</button>
//  <button type="button" class="btn btn-danger">Danger Red</button>
//  <button type="button" class="btn btn-link">Link blue</button>