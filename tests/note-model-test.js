function testNoteIsInstatiatedWithTextPassed() {
  description = "Note: #getText returns the text of a note, as a string";
  var note = new Note("JS is alright");
  assert.truthy((note.getText() === "JS is alright") && (typeof note.getText() === 'string'), description);
}

testNoteIsInstatiatedWithTextPassed();
