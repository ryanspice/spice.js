/**
* Stores key input data
* @access private
* @module
*
*/

export default class inputkeycontroller {

    static _codeList = [];

    get codeList(){

        return this.constructor._codeList;

    }

    static get _keyCodes(){

        this.codes = [],this.codes[0]="",this.codes[1]="",this.codes[2]="",this.codes[3]="",this.codes[4]="",this.codes[5]="",this.codes[6]="",this.codes[7]="",this.codes[8]="backspace",this.codes[9]="tab",this.codes[13]="enter",this.codes[16]="shift",this.codes[17]="ctrl",this.codes[18]="alt",this.codes[19]="pause/break",this.codes[20]="capslock",this.codes[27]="escape",this.codes[32]="space",this.codes[33]="pageup",this.codes[34]="pagedown",this.codes[35]="end",this.codes[36]="home",this.codes[37]="leftarrow",this.codes[38]="uparrow",this.codes[39]="rightarrow",this.codes[40]="downarrow",this.codes[45]="insert",this.codes[46]="delete",this.codes[48]="0",this.codes[49]="1",this.codes[50]="2",this.codes[51]="3",this.codes[52]="4",this.codes[53]="5",this.codes[54]="6",this.codes[55]="7",this.codes[56]="8",this.codes[57]="9",this.codes[65]="a",this.codes[66]="b",this.codes[67]="c",this.codes[68]="d",this.codes[69]="e",this.codes[70]="f",this.codes[71]="g",this.codes[72]="h",this.codes[73]="i",this.codes[74]="j",this.codes[75]="k",this.codes[76]="l",this.codes[77]="m",this.codes[78]="n",this.codes[79]="o",this.codes[80]="p",this.codes[81]="q",this.codes[82]="r",this.codes[83]="s",this.codes[84]="t",this.codes[85]="u",this.codes[86]="v",this.codes[87]="w",this.codes[88]="x",this.codes[89]="y",this.codes[90]="z",this.codes[91]="leftwindowkey",this.codes[92]="rightwindowkey",this.codes[93]="selectkey",this.codes[96]="numpad0",this.codes[97]="numpad1",this.codes[98]="numpad2",this.codes[99]="numpad3",this.codes[100]="numpad4",this.codes[101]="numpad5",this.codes[102]="numpad6",this.codes[103]="numpad7",this.codes[104]="numpad8",this.codes[105]="numpad9",this.codes[106]="multiply",this.codes[107]="add",this.codes[109]="subtract",this.codes[110]="decimalpoint",this.codes[111]="divide",this.codes[112]="f1",this.codes[113]="f2",this.codes[114]="f3",this.codes[115]="f4",this.codes[116]="f5",this.codes[117]="f6",this.codes[118]="f7",this.codes[119]="f8",this.codes[120]="f9",this.codes[121]="f10",this.codes[122]="f11",this.codes[123]="f12",this.codes[144]="numlock",this.codes[145]="scrolllock",this.codes[175]="Up (Wii?)",this.codes[176]="Down (Wii?)",this.codes[177]="Left (Wii?)",this.codes[178]="Right (Wii?)",this.codes[170]="- (Wii?)",this.codes[174]="+ (Wii?)",this.codes[172]="1 (Wii?)",this.codes[173]="2 (Wii?)",this.codes[186]="semi-colon",this.codes[187]="equalsign",this.codes[188]="comma",this.codes[189]="dash",this.codes[190]="period",this.codes[191]="forwardslash",this.codes[192]="graveaccent",this.codes[219]="openbracket",this.codes[220]="backslash",this.codes[221]="closebraket",this.codes[222]="singlequote";

        return this.codes;
    }

    get keyCodes(){

        return this.constructor._keyCodes;

    }

    key_down(evt) {


           evt.input.key = true;
           evt.input.kpressed = true;
       }

    key_up(evt) {
           evt.input.key = false;
           evt.input.kpressed = false;
           evt.input.kreleased = true;
           evt.input.kpressed = false;
       }

        keyboardCheck(code){

        	var e = this.codeList.length-1;

        	for (var i = e;i>=0;--i)
        		if (this.codeList[i]==code)
        			return true;

             return false;
        }

        keyboardPop(code){

        	var e = this.codeList.length-1;
        	for (var i = e;i>=0;--i)
        		if (this.codeList[i]==code)
        			this.codeList.splice(i,1);
        }

       init(app){

            app.Listener(app.window.self,'keydown',function(evt){

                    if (app.input.preventNext===true)
                        evt.preventDefault();

                    app.input.preventNext = false;

                    app.input.keyController.codedown = app.input.keyController.keyCodes[evt.keyCode];
                    app.input.keyController.codeList.push(app.input.keyController.codedown);

                    if (evt.ctrlKey)
                        app.input.control = true;

                    //app.input.pressed = true;
                    app.input.released = false;

                    app.input.keyController.key_down(app);

            });

            app.Listener(app.window.self,'keyup',function(evt) {

                    if (app.input.preventNext)
                        evt.preventDefault();

                    app.input.preventNext = false;
                    app.input.codeup = app.input.keyController.keyCodes[evt.keyCode];

                    app.input.keyController.keyboardPop(app.input.codeup);

                    app.input.control = false;
                    app.input.pressed = false;
                    app.input.released = true;
                    app.input.true = true;

                    app.input.keyController.key_up(app);

            });

        return this.codes;
    }

}
