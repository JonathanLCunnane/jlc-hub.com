var dict = {
    "about.txt":"nano about.txt",
    "contact.txt":"nano contact.txt",
    "introduction.txt":"nano introduction.txt",
    "Projects":"cd Projects",
    "welcome.txt":"nano welcome.txt",
    "Complex-Loci-Plotter.zip":"unzip -t Complex-Loci-Plotter.zip",
    "CS-Visualtisations.zip":"unzip -t CS-Visualtisations.zip",
    "jlc-hub.zip":"unzip -t jlc-hub.zip",
    "Maze-Generation-and-Path-Finding.zip":"unzip -t Maze-Generation-and-Path-Finding.zip",
    "Project-Euler.zip":"unzip -t Project-Euler.zip"
};

function changeHoverText(text){
    document.getElementById("hovering").innerText = dict[text];
}

function removeHoverText(){
    document.getElementById("hovering").innerText = "";
}