/* Jison generated parser */
var iupac = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"0":59,"1":60,"2":61,"3":62,"4":63,"5":64,"6":65,"7":66,"8":67,"9":68,"error":2,"iupacname":3,"PLIST":4,"infix":5,"rootword":6,"primarysuffix":7,"secondarysuffix":8,"PL":9,"PR":10,"-":11,"prefixname":12,"numberlist":13,"prefixnum":14,"prefixnum2":15,"(":16,"PL2":17,")":18,"bis":19,"tris":20,"tetrakis":21,"di":22,"tri":23,"iso":24,"metyyli":25,"etyyli":26,"butyyli":27,"propyyli":28,"cyclo":29,"spiro":30,"bicyclo":31,"met":32,"et":33,"prop":34,"but":35,"pent":36,"heks":37,"hept":38,"okt":39,"non":40,"dek":41,"undek":42,"dodek":43,"tridek":44,"tetradek":45,"pentadek":46,"eikos":47,"triakont":48,"tetrakont":49,"pentakont":50,"aani":51,"an":52,"eeni":53,"NUMBER":54,"yyni":55,"oli":56,",":57,"numeral":58,"$accept":0,"$end":1},
terminals_: {2:"error",11:"-",16:"(",18:")",19:"bis",20:"tris",21:"tetrakis",22:"di",23:"tri",24:"iso",25:"metyyli",26:"etyyli",27:"butyyli",28:"propyyli",29:"cyclo",30:"spiro",31:"bicyclo",32:"met",33:"et",34:"prop",35:"but",36:"pent",37:"heks",38:"hept",39:"okt",40:"non",41:"dek",42:"undek",43:"dodek",44:"tridek",45:"tetradek",46:"pentadek",47:"eikos",48:"triakont",49:"tetrakont",50:"pentakont",51:"aani",52:"an",53:"eeni",55:"yyni",56:"oli",57:",",59:"0",60:"1",61:"2",62:"3",63:"4",64:"5",65:"6",66:"7",67:"8",68:"9"},
productions_: [0,[3,5],[4,1],[4,0],[9,1],[9,3],[10,1],[10,3],[10,4],[10,6],[17,1],[17,2],[15,1],[15,1],[15,1],[15,0],[14,1],[14,1],[14,1],[12,1],[12,1],[12,1],[12,1],[5,1],[5,1],[5,1],[5,0],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,1],[7,1],[7,1],[7,4],[7,1],[7,4],[8,4],[8,1],[8,0],[13,1],[13,3],[54,2],[54,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1],[58,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return { prefix: $$[$0-4], infix: $$[$0-3], rootword: $$[$0-2], primarysuffix: $$[$0-1], secondarysuffix: $$[$0] }; 
break;
case 2: this.$ = $$[$0]; 
break;
case 4: this.$ = [$$[$0]]; 
break;
case 5: this.$ = $$[$0-2].concat([$$[$0]]); 
break;
case 6: this.$ = { name: $$[$0] }; 
break;
case 7: this.$ = { numberList: $$[$0-2], name: $$[$0] }; 
break;
case 8: this.$ = { numberList: $$[$0-3], num: $$[$0-1], name: $$[$0] }; 
break;
case 9: this.$ = { numberList: $$[$0-5], num: $$[$0-3], name: $$[$0-2] }; 
break;
case 10: this.$ = [$$[$0]]; 
break;
case 11: this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 19: this.$ = 'metyyli' 
break;
case 20: this.$ = 'etyyli' 
break;
case 21: this.$ = 'butyyli' 
break;
case 22: this.$ = 'propyyli' 
break;
case 23: this.$ = 'cyclo' 
break;
case 24: this.$ = 'spiro' 
break;
case 25: this.$ = 'bicyclo' 
break;
case 27: this.$ = 1 
break;
case 28: this.$ = 2 
break;
case 29: this.$ = 3 
break;
case 30: this.$ = 4 
break;
case 31: this.$ = 5 
break;
case 32: this.$ = 6 
break;
case 33: this.$ = 7 
break;
case 34: this.$ = 8 
break;
case 35: this.$ = 9 
break;
case 36: this.$ = 10 
break;
case 37: this.$ = 11 
break;
case 38: this.$ = 12 
break;
case 39: this.$ = 13 
break;
case 40: this.$ = 14 
break;
case 41: this.$ = 15 
break;
case 42: this.$ = 20 
break;
case 43: this.$ = 30 
break;
case 44: this.$ = 40 
break;
case 45: this.$ = 50 
break;
case 46: this.$ = 'aani' 
break;
case 47: this.$ = 'an' 
break;
case 48: this.$ = 'eeni' 
break;
case 49: this.$ = 'eeni' 
break;
case 50: this.$ = 'yyni' 
break;
case 51: this.$ = 'yyni' 
break;
case 52: this.$ = { name: 'oli', numberlist: $$[$0-2] } 
break;
case 53: this.$ = { name: 'oli' } 
break;
case 55: this.$ = [$$[$0]]; 
break;
case 56: this.$ =  $$[$0-2].concat([$$[$0]]); 
break;
case 57: this.$ = parseInt($$[$0-1] + $$[$0]); 
break;
case 58: this.$ = parseInt($$[$0]); 
break;
case 59: this.$ = '0'; 
break;
case 60: this.$ = '1'; 
break;
case 61: this.$ = '2'; 
break;
case 62: this.$ = '3'; 
break;
case 63: this.$ = '4'; 
break;
case 64: this.$ = '5'; 
break;
case 65: this.$ = '6'; 
break;
case 66: this.$ = '7'; 
break;
case 67: this.$ = '8'; 
break;
case 68: this.$ = '9'; 
break;
}
},
table: [{3:1,4:2,9:3,10:4,12:5,13:6,25:[1,7],26:[1,8],27:[1,9],28:[1,10],29:[2,3],30:[2,3],31:[2,3],32:[2,3],33:[2,3],34:[2,3],35:[2,3],36:[2,3],37:[2,3],38:[2,3],39:[2,3],40:[2,3],41:[2,3],42:[2,3],43:[2,3],44:[2,3],45:[2,3],46:[2,3],47:[2,3],48:[2,3],49:[2,3],50:[2,3],54:11,58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{1:[3]},{5:23,29:[1,24],30:[1,25],31:[1,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],37:[2,26],38:[2,26],39:[2,26],40:[2,26],41:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],47:[2,26],48:[2,26],49:[2,26],50:[2,26]},{11:[1,27],29:[2,2],30:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],35:[2,2],36:[2,2],37:[2,2],38:[2,2],39:[2,2],40:[2,2],41:[2,2],42:[2,2],43:[2,2],44:[2,2],45:[2,2],46:[2,2],47:[2,2],48:[2,2],49:[2,2],50:[2,2]},{11:[2,4],29:[2,4],30:[2,4],31:[2,4],32:[2,4],33:[2,4],34:[2,4],35:[2,4],36:[2,4],37:[2,4],38:[2,4],39:[2,4],40:[2,4],41:[2,4],42:[2,4],43:[2,4],44:[2,4],45:[2,4],46:[2,4],47:[2,4],48:[2,4],49:[2,4],50:[2,4]},{11:[2,6],18:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],29:[2,6],30:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],35:[2,6],36:[2,6],37:[2,6],38:[2,6],39:[2,6],40:[2,6],41:[2,6],42:[2,6],43:[2,6],44:[2,6],45:[2,6],46:[2,6],47:[2,6],48:[2,6],49:[2,6],50:[2,6],59:[2,6],60:[2,6],61:[2,6],62:[2,6],63:[2,6],64:[2,6],65:[2,6],66:[2,6],67:[2,6],68:[2,6]},{11:[1,28],57:[1,29]},{11:[2,19],18:[2,19],25:[2,19],26:[2,19],27:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19],32:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19],37:[2,19],38:[2,19],39:[2,19],40:[2,19],41:[2,19],42:[2,19],43:[2,19],44:[2,19],45:[2,19],46:[2,19],47:[2,19],48:[2,19],49:[2,19],50:[2,19],59:[2,19],60:[2,19],61:[2,19],62:[2,19],63:[2,19],64:[2,19],65:[2,19],66:[2,19],67:[2,19],68:[2,19]},{11:[2,20],18:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[2,20],29:[2,20],30:[2,20],31:[2,20],32:[2,20],33:[2,20],34:[2,20],35:[2,20],36:[2,20],37:[2,20],38:[2,20],39:[2,20],40:[2,20],41:[2,20],42:[2,20],43:[2,20],44:[2,20],45:[2,20],46:[2,20],47:[2,20],48:[2,20],49:[2,20],50:[2,20],59:[2,20],60:[2,20],61:[2,20],62:[2,20],63:[2,20],64:[2,20],65:[2,20],66:[2,20],67:[2,20],68:[2,20]},{11:[2,21],18:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[2,21],29:[2,21],30:[2,21],31:[2,21],32:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],37:[2,21],38:[2,21],39:[2,21],40:[2,21],41:[2,21],42:[2,21],43:[2,21],44:[2,21],45:[2,21],46:[2,21],47:[2,21],48:[2,21],49:[2,21],50:[2,21],59:[2,21],60:[2,21],61:[2,21],62:[2,21],63:[2,21],64:[2,21],65:[2,21],66:[2,21],67:[2,21],68:[2,21]},{11:[2,22],18:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22],32:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22],42:[2,22],43:[2,22],44:[2,22],45:[2,22],46:[2,22],47:[2,22],48:[2,22],49:[2,22],50:[2,22],59:[2,22],60:[2,22],61:[2,22],62:[2,22],63:[2,22],64:[2,22],65:[2,22],66:[2,22],67:[2,22],68:[2,22]},{11:[2,55],57:[2,55]},{11:[2,58],54:30,57:[2,58],58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{11:[2,59],57:[2,59],59:[2,59],60:[2,59],61:[2,59],62:[2,59],63:[2,59],64:[2,59],65:[2,59],66:[2,59],67:[2,59],68:[2,59]},{11:[2,60],57:[2,60],59:[2,60],60:[2,60],61:[2,60],62:[2,60],63:[2,60],64:[2,60],65:[2,60],66:[2,60],67:[2,60],68:[2,60]},{11:[2,61],57:[2,61],59:[2,61],60:[2,61],61:[2,61],62:[2,61],63:[2,61],64:[2,61],65:[2,61],66:[2,61],67:[2,61],68:[2,61]},{11:[2,62],57:[2,62],59:[2,62],60:[2,62],61:[2,62],62:[2,62],63:[2,62],64:[2,62],65:[2,62],66:[2,62],67:[2,62],68:[2,62]},{11:[2,63],57:[2,63],59:[2,63],60:[2,63],61:[2,63],62:[2,63],63:[2,63],64:[2,63],65:[2,63],66:[2,63],67:[2,63],68:[2,63]},{11:[2,64],57:[2,64],59:[2,64],60:[2,64],61:[2,64],62:[2,64],63:[2,64],64:[2,64],65:[2,64],66:[2,64],67:[2,64],68:[2,64]},{11:[2,65],57:[2,65],59:[2,65],60:[2,65],61:[2,65],62:[2,65],63:[2,65],64:[2,65],65:[2,65],66:[2,65],67:[2,65],68:[2,65]},{11:[2,66],57:[2,66],59:[2,66],60:[2,66],61:[2,66],62:[2,66],63:[2,66],64:[2,66],65:[2,66],66:[2,66],67:[2,66],68:[2,66]},{11:[2,67],57:[2,67],59:[2,67],60:[2,67],61:[2,67],62:[2,67],63:[2,67],64:[2,67],65:[2,67],66:[2,67],67:[2,67],68:[2,67]},{11:[2,68],57:[2,68],59:[2,68],60:[2,68],61:[2,68],62:[2,68],63:[2,68],64:[2,68],65:[2,68],66:[2,68],67:[2,68],68:[2,68]},{6:31,32:[1,32],33:[1,33],34:[1,34],35:[1,35],36:[1,36],37:[1,37],38:[1,38],39:[1,39],40:[1,40],41:[1,41],42:[1,42],43:[1,43],44:[1,44],45:[1,45],46:[1,46],47:[1,47],48:[1,48],49:[1,49],50:[1,50]},{32:[2,23],33:[2,23],34:[2,23],35:[2,23],36:[2,23],37:[2,23],38:[2,23],39:[2,23],40:[2,23],41:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],47:[2,23],48:[2,23],49:[2,23],50:[2,23]},{32:[2,24],33:[2,24],34:[2,24],35:[2,24],36:[2,24],37:[2,24],38:[2,24],39:[2,24],40:[2,24],41:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],47:[2,24],48:[2,24],49:[2,24],50:[2,24]},{32:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25],37:[2,25],38:[2,25],39:[2,25],40:[2,25],41:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],47:[2,25],48:[2,25],49:[2,25],50:[2,25]},{10:51,12:5,13:6,25:[1,7],26:[1,8],27:[1,9],28:[1,10],54:11,58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{12:52,14:53,15:54,16:[2,15],19:[1,58],20:[1,59],21:[1,60],22:[1,55],23:[1,56],24:[1,57],25:[1,7],26:[1,8],27:[1,9],28:[1,10]},{54:61,58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{11:[2,57],57:[2,57]},{7:62,11:[1,66],51:[1,63],52:[1,64],53:[1,65],55:[1,67]},{11:[2,27],51:[2,27],52:[2,27],53:[2,27],55:[2,27]},{11:[2,28],51:[2,28],52:[2,28],53:[2,28],55:[2,28]},{11:[2,29],51:[2,29],52:[2,29],53:[2,29],55:[2,29]},{11:[2,30],51:[2,30],52:[2,30],53:[2,30],55:[2,30]},{11:[2,31],51:[2,31],52:[2,31],53:[2,31],55:[2,31]},{11:[2,32],51:[2,32],52:[2,32],53:[2,32],55:[2,32]},{11:[2,33],51:[2,33],52:[2,33],53:[2,33],55:[2,33]},{11:[2,34],51:[2,34],52:[2,34],53:[2,34],55:[2,34]},{11:[2,35],51:[2,35],52:[2,35],53:[2,35],55:[2,35]},{11:[2,36],51:[2,36],52:[2,36],53:[2,36],55:[2,36]},{11:[2,37],51:[2,37],52:[2,37],53:[2,37],55:[2,37]},{11:[2,38],51:[2,38],52:[2,38],53:[2,38],55:[2,38]},{11:[2,39],51:[2,39],52:[2,39],53:[2,39],55:[2,39]},{11:[2,40],51:[2,40],52:[2,40],53:[2,40],55:[2,40]},{11:[2,41],51:[2,41],52:[2,41],53:[2,41],55:[2,41]},{11:[2,42],51:[2,42],52:[2,42],53:[2,42],55:[2,42]},{11:[2,43],51:[2,43],52:[2,43],53:[2,43],55:[2,43]},{11:[2,44],51:[2,44],52:[2,44],53:[2,44],55:[2,44]},{11:[2,45],51:[2,45],52:[2,45],53:[2,45],55:[2,45]},{11:[2,5],29:[2,5],30:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],35:[2,5],36:[2,5],37:[2,5],38:[2,5],39:[2,5],40:[2,5],41:[2,5],42:[2,5],43:[2,5],44:[2,5],45:[2,5],46:[2,5],47:[2,5],48:[2,5],49:[2,5],50:[2,5]},{11:[2,7],18:[2,7],25:[2,7],26:[2,7],27:[2,7],28:[2,7],29:[2,7],30:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],35:[2,7],36:[2,7],37:[2,7],38:[2,7],39:[2,7],40:[2,7],41:[2,7],42:[2,7],43:[2,7],44:[2,7],45:[2,7],46:[2,7],47:[2,7],48:[2,7],49:[2,7],50:[2,7],59:[2,7],60:[2,7],61:[2,7],62:[2,7],63:[2,7],64:[2,7],65:[2,7],66:[2,7],67:[2,7],68:[2,7]},{12:68,25:[1,7],26:[1,8],27:[1,9],28:[1,10]},{16:[1,69]},{25:[2,16],26:[2,16],27:[2,16],28:[2,16]},{25:[2,17],26:[2,17],27:[2,17],28:[2,17]},{25:[2,18],26:[2,18],27:[2,18],28:[2,18]},{16:[2,12]},{16:[2,13]},{16:[2,14]},{11:[2,56],57:[2,56]},{1:[2,54],8:70,11:[1,71],56:[1,72]},{1:[2,46],11:[2,46],56:[2,46]},{1:[2,47],11:[2,47],56:[2,47]},{1:[2,48],11:[2,48],56:[2,48]},{54:73,58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{1:[2,50],11:[2,50],56:[2,50]},{11:[2,8],18:[2,8],25:[2,8],26:[2,8],27:[2,8],28:[2,8],29:[2,8],30:[2,8],31:[2,8],32:[2,8],33:[2,8],34:[2,8],35:[2,8],36:[2,8],37:[2,8],38:[2,8],39:[2,8],40:[2,8],41:[2,8],42:[2,8],43:[2,8],44:[2,8],45:[2,8],46:[2,8],47:[2,8],48:[2,8],49:[2,8],50:[2,8],59:[2,8],60:[2,8],61:[2,8],62:[2,8],63:[2,8],64:[2,8],65:[2,8],66:[2,8],67:[2,8],68:[2,8]},{10:75,12:5,13:6,17:74,25:[1,7],26:[1,8],27:[1,9],28:[1,10],54:11,58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{1:[2,1]},{13:76,54:11,58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{1:[2,53]},{11:[1,77]},{10:79,12:5,13:6,18:[1,78],25:[1,7],26:[1,8],27:[1,9],28:[1,10],54:11,58:12,59:[1,13],60:[1,14],61:[1,15],62:[1,16],63:[1,17],64:[1,18],65:[1,19],66:[1,20],67:[1,21],68:[1,22]},{18:[2,10],25:[2,10],26:[2,10],27:[2,10],28:[2,10],59:[2,10],60:[2,10],61:[2,10],62:[2,10],63:[2,10],64:[2,10],65:[2,10],66:[2,10],67:[2,10],68:[2,10]},{11:[1,80],57:[1,29]},{53:[1,81],55:[1,82]},{11:[2,9],18:[2,9],25:[2,9],26:[2,9],27:[2,9],28:[2,9],29:[2,9],30:[2,9],31:[2,9],32:[2,9],33:[2,9],34:[2,9],35:[2,9],36:[2,9],37:[2,9],38:[2,9],39:[2,9],40:[2,9],41:[2,9],42:[2,9],43:[2,9],44:[2,9],45:[2,9],46:[2,9],47:[2,9],48:[2,9],49:[2,9],50:[2,9],59:[2,9],60:[2,9],61:[2,9],62:[2,9],63:[2,9],64:[2,9],65:[2,9],66:[2,9],67:[2,9],68:[2,9]},{18:[2,11],25:[2,11],26:[2,11],27:[2,11],28:[2,11],59:[2,11],60:[2,11],61:[2,11],62:[2,11],63:[2,11],64:[2,11],65:[2,11],66:[2,11],67:[2,11],68:[2,11]},{56:[1,83]},{1:[2,49],11:[2,49],56:[2,49]},{1:[2,51],11:[2,51],56:[2,51]},{1:[2,52]}],
defaultActions: {58:[2,12],59:[2,13],60:[2,14],70:[2,1],72:[2,53],83:[2,52]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};

function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = iupac;
exports.Parser = iupac.Parser;
exports.parse = function () { return iupac.parse.apply(iupac, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}