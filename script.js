function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    // if (ev.target.hasChildNodes()) { return; }
    var data = ev.dataTransfer.getData("text");
    elToAdd = document.getElementById(data),
    dropBefore = ev.target;
    if (dropBefore.className == "box") {
      while (dropBefore.firstChild) {
        dropBefore.removeChild(dropBefore.firstChild);
      }
      dropBefore.appendChild(elToAdd.cloneNode(true));
    } else if (dropBefore.className == "vowel") {
      dropBefore.parentNode.replaceChild(elToAdd.cloneNode(true), dropBefore);
    } else if (dropBefore.className == "consonant") {
      dropBefore.parentNode.replaceChild(elToAdd.cloneNode(true), dropBefore);
    } else if (dropBefore.className == "digraph") {
      dropBefore.parentNode.replaceChild(elToAdd.cloneNode(true), dropBefore);
    }
    document.getElementById(data).style.backgroundColor = "transparent"
    document.getElementById(data).style.borderRadius = "0%"
    document.getElementById(data).style.fontSize = "150px"
    document.getElementById(data).style.width = "200px"
    document.getElementById(data).style.height = "200px"
    document.getElementById(data).style.alignItems = "center"
    if (document.getElementById(data).className == "vowel") {
      document.getElementById(data).style.color = "red"
    }
    if (document.getElementById(data).className == "consonant") {
      document.getElementById(data).style.color = "green"
    }
    if (document.getElementById(data).className == "digraph") {
      document.getElementById(data).style.color = "deepskyblue"
    }
  }

  function boxFunc() {
    let numInput = document.getElementById("dropzone");
    while (numInput.firstChild) {
      numInput.removeChild(numInput.firstChild);
    }
    
    let numInputval = document.getElementById("numInput").value;
    for(var i=numInputval; i>0; i--) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", "box" + i);
      newDiv.setAttribute("class", "box");
      newDiv.setAttribute("ondrop", "drop(event)");
      newDiv.setAttribute("ondragover", "allowDrop(event)");
      newDiv.setAttribute("onmousedown", "return false");
      numInput.insertBefore(newDiv, numInput.firstChild);
    }
  }
