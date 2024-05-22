const editbtn = document.querySelector(".editbtn");
const noteouter = document.querySelector(".noteouter")

const localStFunc = () => {
    const textareadata = document.querySelectorAll('textarea');
    const notesarray = [];

    textareadata.forEach((textnote) => {
        return notesarray.push(textnote.value);
    });

    localStorage.setItem('notes', JSON.stringify(notesarray))

}


const addnewnote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');

    const insidehtml = `
        <div class="btn">
            <button class="texteditbtn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="deletebtn"><i class="fa-solid fa-trash-can"></i></button>
        </div>

        <div class="maintext ${text ? '' : 'hidden'}"></div>
        <textarea class=" ${text ? 'hidden' : ''} "></textarea> `

    note.insertAdjacentHTML('afterbegin', insidehtml);

    //button referance 
    const deletebtn = note.querySelector('.deletebtn');
    const texteditbtn = note.querySelector('.texteditbtn');
    const maintext = note.querySelector('.maintext');
    const textareafield = note.querySelector('textarea');

    //delete note
    deletebtn.addEventListener('click', () => {
        note.remove();
        localStFunc();
    });

    //toggle editbtn
    textareafield.value = text;
    maintext.innerHTML = text;


    texteditbtn.addEventListener('click', () => {
        maintext.classList.toggle('hidden');
        textareafield.classList.toggle('hidden');
    });

    textareafield.addEventListener('change', (event) => {
        const value = event.target.value;
        maintext.innerHTML = value;

        localStFunc();

    });

    noteouter.appendChild(note);
}

const getnotes = JSON.parse(localStorage.getItem('notes'));

if (getnotes) { getnotes.forEach((note) => addnewnote(note)) }


editbtn.addEventListener("click", () => {
    addnewnote();
});
