var note = new Note("I am a note");
var singleNoteView = new SingleNoteView(note);

(function showNoteReturnsNoteAsHtml() {
	description = "SingleNoteView: #GetNoteHtml returns the HTML of a single note";
	assert.truthy(singleNoteView.getNoteHtml() === "<div>I am a note</div>", description);
} )();
