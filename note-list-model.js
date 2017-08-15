(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  exports.NoteList = NoteList;

})(this);

NoteList.prototype.getNotes = function() {
	return this.notes;
};
