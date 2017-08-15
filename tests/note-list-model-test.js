window.noteList = new NoteList();

function listIsAnarray() {
  // var noteList = new NoteList();
  assert.truthy(noteList.getNotes().constructor === Array);
};

function listHasNoNotesByDefault() {
  // var noteList = new NoteList();
  assert.truthy(noteList.getNotes().length === 0);
};

function listCanCreateAndStoreNotes() {
  text = "Hi, I am a note";
  noteList.makeNote(text);
  assert.truthy(noteList.getNotes().pop().getText() === text);
};

listIsAnarray();
listHasNoNotesByDefault();
listCanCreateAndStoreNotes();
