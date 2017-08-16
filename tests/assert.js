var assert = {
	truthy: function(assertion, description) {
		if (!assertion) {
			console.error(description + ": Incorrect assertion " + assertion + " is not true");
		} else {
			console.log(description + ": Correct assertion");
		};
	}
};
