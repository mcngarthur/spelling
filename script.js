function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    elToAdd = document.getElementById(data);
    var id = new Date().getTime() + Math.random();
    newId = elToAdd.id + id;
    if (ev.target.className == "box") {
      box = ev.target;
    } else {
      box = ev.target.parentNode;
    }
    var nextBoxNum = Number(box.id.substr(box.id.length - 1)) + 1;
    var nextBoxId = "box" + nextBoxNum;
    var numBox = document.getElementById("dropzone").getElementsByClassName("box").length;
    if (elToAdd.id == "sh" && nextBoxNum <= numBox) {
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
      box.appendChild(document.getElementById("s").cloneNode(true));
      document.getElementById("s").setAttribute("class", "digraph_dropzone");
      document.getElementById("s").setAttribute("id", newId);
      while (document.getElementById(nextBoxId).firstChild) {
        document.getElementById(nextBoxId).removeChild(document.getElementById(nextBoxId).firstChild);
      }
      document.getElementById(nextBoxId).appendChild(document.getElementById("h").cloneNode(true));
      document.getElementById("h").setAttribute("class", "digraph_dropzone");
      document.getElementById("h").setAttribute("id", newId);
    } else if (elToAdd.id == "ch" && nextBoxNum <= numBox) {
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
      box.appendChild(document.getElementById("c").cloneNode(true));
      document.getElementById("c").setAttribute("class", "digraph_dropzone");
      document.getElementById("c").setAttribute("id", newId);
      while (document.getElementById(nextBoxId).firstChild) {
        document.getElementById(nextBoxId).removeChild(document.getElementById(nextBoxId).firstChild);
      }
      document.getElementById(nextBoxId).appendChild(document.getElementById("h").cloneNode(true));
      document.getElementById("h").setAttribute("class", "digraph_dropzone");
      document.getElementById("h").setAttribute("id", newId);
    } else if (elToAdd.id == "th" && nextBoxNum <= numBox) {
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
      box.appendChild(document.getElementById("t").cloneNode(true));
      document.getElementById("t").setAttribute("class", "digraph_dropzone");
      document.getElementById("t").setAttribute("id", newId);
      while (document.getElementById(nextBoxId).firstChild) {
        document.getElementById(nextBoxId).removeChild(document.getElementById(nextBoxId).firstChild);
      }
      document.getElementById(nextBoxId).appendChild(document.getElementById("h").cloneNode(true));
      document.getElementById("h").setAttribute("class", "digraph_dropzone");
      document.getElementById("h").setAttribute("id", newId);
    } else if (elToAdd.className == "vowel_dragzone") {
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
      box.appendChild(document.getElementById(data).cloneNode(true));
      document.getElementById(data).setAttribute("class", "vowel_dropzone");
      document.getElementById(data).setAttribute("id", newId);
    } else if (elToAdd.className == "consonant_dragzone") {
      while (box.firstChild) {
        box.removeChild(box.firstChild);
      }
      box.appendChild(document.getElementById(data).cloneNode(true));
      document.getElementById(data).setAttribute("class", "consonant_dropzone");
      document.getElementById(data).setAttribute("id", newId);
    }
  }

  function boxFunc() {
    let dropzone = document.getElementById("dropzone");
    while (dropzone.firstChild) {
      dropzone.removeChild(dropzone.firstChild);
    }
    
    let numInputval = document.getElementById("numInput").value;
    for(var i=numInputval; i>0; i--) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", "box" + i);
      newDiv.setAttribute("class", "box");
      newDiv.setAttribute("ondrop", "drop(event)");
      newDiv.setAttribute("ondragover", "allowDrop(event)");
      newDiv.setAttribute("onmousedown", "return false");
      dropzone.insertBefore(newDiv, dropzone.firstChild);
    }
  }

  function resetFunc() {
    let dropzone = document.getElementById("dropzone");
    while (dropzone.firstChild) {
      dropzone.removeChild(dropzone.firstChild);
    }
    document.getElementById("numInput").value = ""
  }