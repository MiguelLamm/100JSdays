class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    let newNote = document.createElement('div'); //<div>

    newNote.setAttribute("class", "card"); //class card

    let newP = document.createElement("p"); // <p>

    newP.innerHTML = title;
    newNote.appendChild(newP); //p in de div zetten
  

    let a = document.createElement('a'); //<a>

    a.setAttribute("href", "#"); //link zonder destinatie

    a.setAttribute("class", "remove");
    a.innerHTML = "Remove";
    newNote.appendChild(a);
    a.addEventListener('click', this.remove.bind(newNote));
    a.addEventListener('click', this.removeFromStorage.bind(newNote));
    return newNote;
  }

  add() {
    document.querySelector(".notes").appendChild(this.element);
  }

  saveToStorage() {
    let notes = JSON.parse(localStorage.getItem("notes"));

    if (notes === null) {
      notes = [];
    } else notes.push(this.title);

    localStorage.setItem("notes", JSON.stringify(notes));

    console.log(localStorage);
  }

  remove() {
    this.style.display = "none";
    let removed = this.querySelector("a").previousSibling.innerHTML;
  }

  removeFromStorage() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let child = this.children[0].innerHTML; //console.log(child);

    let index = notes.indexOf(child); //console.log('dit is index '+index);

    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(localStorage);
  }

}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!"); // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work

    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    document.querySelector('#txtAddNote').addEventListener("keydown", q => {
      if (q.keyCode == 13) {
        this.createNote();
      }
    });
    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
    let notesStored = JSON.parse(localStorage.getItem("notes"));

    for (let a = 0; a < notesStored.length; a++) {
      console.log('test' + notesStored);
      let noteStorage = new Note(notesStored[a]);
      noteStorage.add();
    }
  }

  createNote(e) {
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);
    note.add();
    note.saveToStorage();
    this.reset();
  }

  reset() {
    document.getElementById('txtAddNote').value = "";
  }

}

let app = new App();
console.log(localStorage);