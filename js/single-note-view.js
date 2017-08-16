(function(exports) {
	function SingleNoteView(note) {
		this.note = note;
	}
	exports.SingleNoteView = SingleNoteView;
} )(this);

SingleNoteView.prototype.getNoteHtml = function() {
	var divs = ["<div>","</div>"];
	return divs.join(note.getText());
};
