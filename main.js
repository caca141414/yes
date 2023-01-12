const replaceScript = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-12.chunk.js"
if (document.scripts[15].src == replaceScript) { //checks if the script has already been loaded
    alert('lesson has already been loaded, refresh the page and run before going into your lesson')
} else {
    //override the script
    fetch("https://raw.githubusercontent.com/no9999999/yes/main/app-12.chunk.js").then(r => r.text()).then(r => eval(r))
}
