document.addEventListener("DOMContentLoaded", () => {
  let container2 = document.querySelector(".container2");
  let container3 = document.querySelector(".container3");
  let createNoteBtn = document.getElementById("create-note-btn");
  let checkIcon = document.getElementById("check-icon");
  let crossIcon = document.getElementById("cross-icon");
  let i = 0;

  createNoteBtn.addEventListener("click", typeNote);
  crossIcon.addEventListener("click", typeNote);
  checkIcon.addEventListener("click", createNote);

  function typeNote() {
    if (
      container3.style.display === "none" ||
      container3.style.display === ""
    ) {
      container3.style.display = "block";
    } else {
      container3.style.display = "none";
    }
  }

  function createNote() {
    let noteText = document.getElementById("note-text").value.trim();
    if (noteText === "") {
      alert("Please enter a note!");
      return;
    }

    let noteContainer = document.createElement("div");
    let note = document.createElement("div");

    note.innerHTML = noteText;
    note.setAttribute(
      "style",
      `width:250px; height:250px; font-size:26px; padding:25px; 
         margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px rgba(0,0,0,0.75);
         position:relative; background:${color()}; transform:${rotate()}; margin:${margin()};`
    );

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.setAttribute(
      "style",
      "position:absolute; top:5px; right:5px; background:red; color:white; border:none; cursor:pointer;"
    );
    deleteBtn.addEventListener("click", () => noteContainer.remove());

    note.appendChild(deleteBtn);
    noteContainer.appendChild(note);
    container2.appendChild(noteContainer);

    document.getElementById("note-text").value = "";
    container3.style.display = "none";
  }

  function margin() {
    let random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return random_margin[Math.floor(Math.random() * random_margin.length)];
  }

  function rotate() {
    let random_rotate = [
      "rotate(3deg)",
      "rotate(1deg)",
      "rotate(-1deg)",
      "rotate(-3deg)",
      "rotate(5deg)",
      "rotate(-10deg)",
    ];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
  }

  function color() {
    let random_color = [
      "#c2ff3d",
      "#ff3de8",
      "#3dc22f",
      "#04e022",
      "#bc83e6",
      "#ebb328",
    ];
    return random_color[i++ % random_color.length];
  }
});
