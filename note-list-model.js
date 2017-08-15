(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  exports.NoteList = NoteList;

})(this);

NoteList.prototype.getNotes = function() {
	return this.notes;
};

NoteList.prototype.makeNote = function(text) {
  note = new Note(text);
  this._addNote(note);
};

// Private

NoteList.prototype._addNote = function(note) {
  this.notes.push(note);
};
