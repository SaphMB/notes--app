var noteList = new NoteList();

(function listIsAnarray() {
  description = "Notelist: #getNotes returns an array";
  assert.truthy(noteList.getNotes().constructor === Array, description);
})();

(function listHasNoNotesByDefault() {
  description = "Notelist: #getNotes returns an ampty array";
  assert.truthy(noteList.getNotes().length === 0, description);
})();

(function listCanCreateAndStoreNotes() {
  description = "Notelist: #makeNote creates a note in the #getNotes array";
  text = "Hi, I am a note";
  noteList.makeNote(text);
  assert.truthy(noteList.getNotes().pop().getText() === text, description);
})();

(function returnAllNotesinArray() {
  description = "Notelist: #getNotes returns an array of all notes";
	var noteCount = Math.floor(Math.random() * (15 - 5)) + 5;
	for (i = 0; i < noteCount; i ++) {
		noteList.makeNote(String(i));
	};
	assert.truthy(noteList.getNotes().length === noteCount, description);
})();

(function notesHaveAnId() {
	description = "Notelist: notes have a unique id";
	var noteList = new NoteList()
	noteList.makeNote("I'm a note");
	noteList.makeNote("I'm also a note");
	noteList.makeNote("I too, am a note");
	assert.truthy(noteList.getNotes()[1].getId() === 1, description);
})();
