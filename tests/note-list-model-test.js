window.noteList = new NoteList();

function listIsAnarray() {
  assert.truthy(noteList.getNotes().constructor === Array);
};

function listHasNoNotesByDefault() {
  assert.truthy(noteList.getNotes().length === 0);
};

function listCanCreateAndStoreNotes() {
  text = "Hi, I am a note";
  noteList.makeNote(text);
  assert.truthy(noteList.getNotes().pop().getText() === text);
};

function returnAllNotesinArray() {
	var noteCount = Math.floor(Math.random() * (15 - 5)) + 5;
	for (i = 0; i < noteCount; i ++) {
		noteList.makeNote(String(i));
	};
	assert.truthy(noteList.getNotes().length === noteCount);
};

listIsAnarray();
listHasNoNotesByDefault();
listCanCreateAndStoreNotes();
returnAllNotesinArray()
