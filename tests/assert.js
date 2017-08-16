var assert = {
	truthy: function(assertion, description) {
		if (!assertion) {
			throw new Error(description + ": Incorrect assertion " + assertion + " is not true");
		} else {
			console.log(description + ": Correct assertion");
		};
	}
};
