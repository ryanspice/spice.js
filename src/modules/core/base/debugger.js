/* @flow */

export default class DEBUGGER {

	static options:Object = {

		logging:false

	};

	static console:Object = console;

	static log:Object = (string:string):void =>{

		if (DEBUGGER.options.logging)
		DEBUGGER.console.log(string, '\n', this);

	}

}
export const log = DEBUGGER.log;
