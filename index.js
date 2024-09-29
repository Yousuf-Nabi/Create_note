const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Load existing notes from localStorage and display them
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || '';
}

// Save notes to localStorage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener to create a new note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "image/delete.png";
  img.className = "delete-btn"; // Added class for possible future use

  // Append image and note
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  // Update storage after adding a new note
  updateStorage();
});

// Event listener to handle note deletion and content updates
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P" && e.target.hasAttribute("contenteditable")) {
    e.target.addEventListener("keyup", updateStorage);
  }
});

// Handle Enter key to create a new line within editable content
document.addEventListener("keydown", event => {
  if (event.key === "Enter" && document.activeElement.hasAttribute("contenteditable")) {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

// Initial load of notes
showNotes();









