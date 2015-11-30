
const SJS = window.SpiceJS;

export default class SJSClass {

	constructor(app) {

		let appReference = app;

		if (typeof appReference == 'undefined') {

			appReference = SJS.controller.list();

			console.warn('Unable to find app reference.', 'Using ', appReference, ' for ', this);

		}

		this.app = appReference;

		this.visuals = appReference.client.visuals;

		this.graphics = appReference.client.graphics;

	}

}
