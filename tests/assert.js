var assert = {
	truthy: function(assertion) {
		if (!assertion) {
			throw new Error("Incorrect assertion " + assertion + " is not true");
		} else {
			console.log(" Correct assertion")
		}
	}
};
