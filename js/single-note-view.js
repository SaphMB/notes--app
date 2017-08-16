(function(exports) {
	function SingleNoteView(note) {
		this.note = note;
	}

	SingleNoteView.prototype.getNoteHtml = function() {
		var divs = ["<div>","</div>"];
		return divs.join(this.note.getText());
	};

	exports.SingleNoteView = SingleNoteView;
})(this);
