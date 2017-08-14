function testNoteIsInstatiatedWithTextPassed() {
  var note = new Note("JS is alright");
  assert.truthy(note.getText() === "JS is alright");
	assert.truthy(typeof note.getText() === 'string');
};

function noteTextUndefinedIfNoTestPassed() {
  var note = new Note();
  assert.truthy(note.getText() === undefined );
};

testNoteIsInstatiatedWithTextPassed();
noteTextUndefinedIfNoTestPassed();
