/* @flow */


const CTYPE:Object = {

	trace:'trace',
	log:'log'

}

export default class DEBUGGER {

	static options:Object = {

		logging:true,
		loggingType:CTYPE.log,
		loggingLevel:0

	};

	static console:Object = console;

	static log:Function = (string:string):void =>{

		if (DEBUGGER.options.logging) {

			switch(DEBUGGER.options.loggingType) {

				case CTYPE.trace:

					DEBUGGER.console.trace(string, '\n', this);

				break;

				case CTYPE.log:

					DEBUGGER.console.log(string, '\n', this);

				break;

			}

		}

	}

}
export const log = DEBUGGER.log;
