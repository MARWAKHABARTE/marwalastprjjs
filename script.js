function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;
    console.log(`Preview updated: ${previewPic.alt}, ${previewPic.src}`);
}

function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
    console.log("Preview reset to original state");
}

function addTabIndex() {
    const figures = document.querySelectorAll(".gallery figure");
    figures.forEach((figure, index) => {
        figure.setAttribute("tabindex", "0");
        console.log(`Tabindex added to figure ${index + 1}`);
    });
}

window.onload = addTabIndex;
