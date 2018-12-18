solutions = document.getElementsByClassName("solution")

isShowing = true; // True by default

function toggleSolution() {
    var i;
    for (i = 0; i < solutions.length; i++) {
	solutions[i].style.display = isShowing==true ? "none" : "block";
    }
    isShowing = !isShowing // Toggle true/false
}
