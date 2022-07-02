var j = 0;
DisplayNotes();
//To add notes
let Ad = document.getElementById('add');
Ad.addEventListener("click", function (e) {
    let text = document.getElementById('notDesc');
    let title = document.getElementById('notTitle');
    let notes = localStorage.getItem('notes');
    let notestitle = localStorage.getItem('notestitle');
    let highlight = localStorage.getItem('bod');
    if (highlight == null) {
        highob = [];
    }
    else {
        highob = JSON.parse(highlight);
    }
    if (notes == null) {
        notesob = [];
    }
    else {
        notesob = JSON.parse(notes);
    }
    if (notestitle == null)
        ntob = [];
    else
        ntob = JSON.parse(notestitle);
    if (text.value != '' && title.value != '') {
        notesob.push(text.value);
        ntob.push(title.value);
        highob.push("white");
        localStorage.setItem("notes", JSON.stringify(notesob));
        localStorage.setItem("notestitle", JSON.stringify(ntob));
        localStorage.setItem("bod", JSON.stringify(highob));
    }
    text.value = "";
    title.value = "";
    DisplayNotes();
})
// To display the notes
function DisplayNotes() {
    let notes = localStorage.getItem('notes');
    let notestitle = localStorage.getItem('notestitle');
    if (notes == null) {
        notesob = [];
    }
    else {
        notesob = JSON.parse(notes);
    }
    if (notestitle == null)
        ntob = [];
    else
        ntob = JSON.parse(notestitle);
    let highlight = localStorage.getItem('bod');
    if (highlight == null) {
        highob = [];
    }
    else {
        highob = JSON.parse(highlight);
    }

    let html = '';
    for (i = 0; i < notesob.length; i++) {
        html += `
        <div class="Notecard my-2 mx-2" id="bod" style="width: 18rem;background-color:${highob[i]}">
        <img src="triangle.png" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"id="ntl">${ntob[i]}</h5>
            <pre class="card-text"><font face="Calibri" size='3'>${notesob[i]}</font></pre>
            <button class="btn btn-primary" id="${i}" onclick="remove(id)">REMOVE</button>
            <br>
            <br>
            <button class="btn btn-primary" id="${i}" onclick="high(id)">HIGHLIGHT</button>
        </div>
    </div>`;
    }
    element = document.getElementById("notes");
    if (notesob.length != 0)
        element.innerHTML = html;
    else
        element.innerHTML = "Add some Notes!!!";
}
// To highlight the node
function high(id) {
    let highlight = localStorage.getItem('bod');
    if (highlight == null) {
        highob = [];
    }
    else {
        highob = JSON.parse(highlight);
    }
    if (highob[id] == 'white')
        highob[id] = 'yellow';
    else
        highob[id] = 'white';
    localStorage.setItem("bod", JSON.stringify(highob));
    DisplayNotes();
}
//To delete the notes
function remove(id) {
    let notes = localStorage.getItem('notes');
    let notestitle = localStorage.getItem('notestitle');
    let highlight = localStorage.getItem('bod');
    if (highlight == null) {
        highob = [];
    }
    else {
        highob = JSON.parse(highlight);
    }
    if (notes == null) {
        notesob = [];
    }
    else {
        notesob = JSON.parse(notes);
    }
    if (notestitle == null)
        ntob = [];
    else
        ntob = JSON.parse(notestitle);
    notesob.splice(id, 1);
    ntob.splice(id, 1);
    highob.splice(id, 1);
    localStorage.setItem("notes", JSON.stringify(notesob));
    localStorage.setItem("notestitle", JSON.stringify(ntob));
    localStorage.setItem("bod", JSON.stringify(highob));
    DisplayNotes();
}
//To search the notes
let search = document.getElementById("stxt");
search.addEventListener("input", function () {
    let input = search.value.toLowerCase();
    let notecard = document.getElementsByClassName("Notecard");
    Array.from(notecard).forEach(function (element) {
        let cardtitle = element.getElementsByTagName("h5")[0].innerHTML.toLowerCase();
        if (cardtitle.includes(input))
            element.style.display = "block";
        else
            element.style.display = "none";

    })
})