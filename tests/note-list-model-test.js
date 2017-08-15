function listIsAnarray() {
  var noteList = new NoteList();
  assert.truthy(noteList.getNotes().constructor === Array);
};

function listHasNoNotesByDefault() {
  var noteList = new NoteList();
  assert.truthy(noteList.getNotes().length === 0);
};

listIsAnarray();
listHasNoNotesByDefault();
