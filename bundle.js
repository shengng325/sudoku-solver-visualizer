!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],u=t.base?o[0]+t.base:o[0],c=n[u]||0,d="".concat(u," ").concat(c);n[u]=c+1;var l=a(d),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(s[l].references++,s[l].updater(m)):s.push({identifier:d,updater:b(m,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function b(e,t){var n,r,i;if(t.singleton){var o=p++;n=h||(h=c(t)),r=m.bind(null,n,o,!1),i=m.bind(null,n,o,!0)}else n=c(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=u(e,t),c=0;c<n.length;c++){var d=a(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"html {\n    height: 100%;\n}\n\nbody {\n    width: 100%;\n}\n\ntable {\n    border: 4px solid #07367a;\n}\n\ntd {\n    width: 50px;\n    height: 50px;\n    border: 1px solid #1e68d6;\n    font-size: 1.8em;\n    text-align: center;\n}\n\ntable.small-table td {\n    font-size: 2em;\n    width: 70px;\n    height: 70px;\n}\n\ntable.big-table td {\n    font-size: 1.2em;\n    width: 30px;\n    height: 30px;\n}\n\n@media only screen and (max-width : 480px)  { \n    td {\n        font-size: 1.4em;\n        width: 40px;\n        height: 40px;\n    }\n    \n    table.small-table td {\n        font-size: 1.8em;\n        width: 50px;\n        height: 50px;\n    }\n    \n    table.big-table td {\n        font-size: 0.8em;\n        width: 20px;\n        height: 20px;\n    }\n} \n\ntd.bottom-border {\n    border-bottom: 3px solid #073982;\n}\n\ntd.right-border {\n    border-right: 3px solid #073982;\n}\n\ntd.backtracking-cell {\n    background-color: #ff9999;\n}\n\n#slider {\n    width: 150px;\n    align-self: center;\n}\n\n#slider .slider-selection {\n\tbackground: #8dbfe3;\n}\n\n#slider .slider-handle {\n\tbackground: #329be6;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&i[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";n.r(t);const r={interval:1,skip:!1,status:!1,setInterval:function(e){this.interval=e},pause:async function(){return new Promise((e,t)=>{setTimeout(e,this.interval)})},stop:async function(){return this.status=!1,new Promise((e,t)=>{setTimeout(e,200)})}},i=async(e,t,n)=>{const s=e.length;if(!0===r.status){for(var a=0;a<s;a++)for(var u=0;u<s;u++)if(0===e[a][u]){for(var c=1;c<=s;c++)if(o(e,a,u,c)){if(e[a][u]=c,0!==r.interval&&!1===r.skip&&(t(a,u,e[a][u]),await r.pause()),n(),await i(e,t,n))return e;if(!1===r.status)return}return e[a][u]=0,!1}return!0}};function o(e,t,n,r){const i=e.length,o=Math.sqrt(i);for(var s=0;s<i;s++)if(s!==n&&e[t][s]===r)return!1;for(var a=0;a<i;a++)if(a!==t&&e[a][n]===r)return!1;var u=parseInt((t+o)/o),c=parseInt((n+o)/o);for(a=u*o-o;a<u*o;a++)for(s=c*o-o;s<c*o;s++)if((s!==n||a!==t)&&e[a][s]===r)return!1;return!0}n(0);const s=new class{constructor(e){this.board=[],this.sudokuSize=e,this.boardNumber=0}clearElements(e){this.board=[];for(let t=0;t<e;t++){this.board.push([]);for(let n=0;n<e;n++)this.board[t].push(0)}}generateSudoku(e){return this.board=function(e,t){switch(e){case 4:return function(e){switch(e){case 0:return[[4,0,0,3],[0,2,1,0],[0,3,4,0],[1,0,0,2]];case 1:return[[1,0,0,0],[0,2,0,0],[0,0,3,0],[0,0,0,4]];case 2:return[[0,3,1,0],[1,0,0,3],[2,0,0,4],[0,4,2,0]]}}(t);case 9:return function(e){switch(e){case 0:return[[0,0,0,0,0,0,0,0,0],[0,3,0,0,0,0,1,6,0],[0,6,7,0,3,5,0,0,4],[6,0,8,1,2,0,9,0,0],[0,9,0,0,8,0,0,3,0],[0,0,2,0,7,9,8,0,6],[8,0,0,6,9,0,3,5,0],[0,2,6,0,0,0,0,9,0],[0,0,0,0,0,0,0,0,0]];case 1:return[[0,0,0,0,0,8,9,1,0],[0,0,1,0,0,0,0,0,3],[9,0,0,0,2,7,0,0,5],[3,0,2,5,6,0,0,0,0],[5,0,0,0,0,0,0,0,8],[0,0,0,0,8,3,5,0,4],[8,0,0,7,4,0,0,0,2],[6,0,0,0,0,0,1,0,0],[0,5,7,3,0,0,0,0,0]];case 2:return[[0,5,9,0,0,0,3,8,0],[2,0,0,9,0,1,0,0,6],[8,0,0,0,7,0,0,0,2],[9,0,0,0,0,0,0,0,3],[1,0,0,0,0,0,0,0,5],[0,2,0,0,0,0,0,7,0],[0,0,1,0,0,0,8,0,0],[0,0,0,5,0,6,0,0,0],[0,0,0,0,2,0,0,0,0]]}}(t);case 16:return[[0,0,0,4,0,0,0,9,8,0,0,0,12,0,0,0],[0,0,7,8,0,0,4,0,0,14,0,0,3,9,0,0],[0,15,10,0,0,13,0,0,0,0,3,0,0,6,7,0],[12,13,0,0,8,0,0,0,0,0,0,9,0,0,4,10],[0,0,0,3,0,0,0,0,0,0,0,0,13,0,0,0],[0,0,8,0,0,0,0,0,0,0,0,0,0,10,0,0],[0,9,0,0,0,0,0,14,2,0,0,0,0,0,8,0],[13,0,0,0,0,0,10,0,0,5,0,0,0,0,0,4],[3,0,0,0,0,0,5,0,0,8,0,0,0,0,0,14],[0,11,0,0,0,0,0,8,15,0,0,0,0,0,9,0],[0,0,12,0,0,0,0,0,0,0,0,0,0,11,0,0],[0,0,0,13,0,0,0,0,0,0,0,0,10,0,0,0],[4,3,0,0,10,0,0,0,0,0,0,18,0,0,12,9],[0,7,6,0,0,8,0,0,0,0,12,0,0,4,10,0],[0,0,14,10,0,0,12,0,0,9,0,0,11,13,0,0],[0,0,0,9,0,0,0,11,4,0,0,0,8,0,0,0]];case 25:return[[25,24,23,0,0,22,3,0,0,0,9,0,0,0,0,14,0,16,0,0,19,20,0,0,0],[9,0,0,0,0,0,16,23,0,18,19,20,21,24,25,0,0,7,8,10,0,12,0,14,22],[22,0,0,0,16,0,20,21,24,25,0,8,0,0,18,9,3,0,5,0,0,0,0,15,23],[0,0,17,18,21,0,5,1,2,0,22,0,0,23,16,0,12,0,19,20,0,7,8,0,0],[7,0,19,20,0,0,10,0,12,13,0,0,0,0,0,22,0,23,24,25,3,0,16,17,0],[1,0,0,17,22,5,0,9,0,0,0,21,0,19,0,0,0,25,23,24,12,16,0,20,8],[16,0,25,0,19,1,2,12,21,0,24,17,23,14,0,0,11,10,0,22,13,0,0,6,15],[24,0,18,0,0,20,0,0,23,0,0,0,7,0,0,0,0,19,0,21,0,0,0,25,0],[0,0,0,0,20,7,15,0,18,10,25,0,0,9,8,0,0,6,0,5,21,24,0,0,19],[21,0,0,0,23,24,0,16,25,22,0,0,20,0,12,0,0,8,0,13,0,1,14,0,5],[12,1,2,0,0,21,13,0,0,0,20,19,0,0,14,0,23,24,0,0,0,25,0,22,0],[15,17,7,6,0,16,0,14,22,9,0,25,10,8,0,0,0,20,12,2,23,0,0,18,21],[0,21,10,22,0,0,0,0,0,12,0,1,24,0,0,25,0,14,0,8,0,3,20,16,0],[0,14,0,25,0,0,0,0,4,0,0,23,0,21,9,19,22,0,0,15,0,0,0,8,10],[0,19,16,23,0,17,25,24,0,0,0,22,0,15,4,0,7,18,21,0,14,0,1,0,0],[2,20,1,11,0,10,0,0,0,23,6,0,0,13,19,24,0,22,0,17,25,15,0,0,16],[13,22,0,0,7,0,6,4,1,0,0,15,17,0,20,21,19,0,25,14,0,0,5,0,24],[0,18,5,21,25,0,0,0,0,16,3,0,4,1,0,0,0,12,10,0,20,0,6,7,0],[23,0,9,0,10,14,24,25,0,0,18,0,12,5,21,20,0,0,1,3,22,0,19,0,0],[14,6,15,24,17,8,0,0,20,19,23,0,25,0,22,16,0,5,13,0,10,21,0,1,0],[3,16,0,0,0,0,22,0,0,21,8,6,0,0,10,23,25,0,11,0,24,4,0,0,0],[0,25,21,7,11,0,0,0,0,1,0,12,22,0,23,0,0,0,14,19,0,5,18,0,0],[18,5,13,0,24,25,17,0,14,0,21,0,2,3,0,0,20,0,22,16,0,0,23,0,0],[0,0,20,19,15,0,23,13,0,24,0,18,0,4,7,0,10,3,0,0,0,0,25,21,11],[0,23,22,0,12,0,8,0,19,15,17,13,0,25,24,5,0,21,18,0,0,0,0,0,1]]}}(e,this.boardNumber++),this.boardNumber>2&&(this.boardNumber=0),this.board}}(9),a=new class{constructor(){this.sudokuTableElement=document.getElementById("sudoku"),this.iterationCountElement=document.getElementById("iteration-count"),this.timeCountElement=document.getElementById("time-count"),this.iterationCount=0,this.timeCount=0,this.start=(new Date).getTime()}renderGrid(e){this.sudokuTableElement.innerHTML="";for(let t=0;t<e;t++){let n=document.createElement("tr");for(let r=0;r<e;r++){let i=document.createElement("td");switch(i.id=`cell-${t}-${r}`,e){case 4:1!==t&&3!==t||i.classList.add("bottom-border"),1!==r&&3!==r||i.classList.add("right-border");break;case 9:2!==t&&5!==t||i.classList.add("bottom-border"),2!==r&&5!==r||i.classList.add("right-border");break;case 16:3!==t&&7!==t&&11!==t||i.classList.add("bottom-border"),3!==r&&7!==r&&11!==r||i.classList.add("right-border")}n.appendChild(i)}this.sudokuTableElement.appendChild(n)}}renderSudokuElements(e){const t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)0!==e[n][r]&&this.renderCell(n,r,e[n][r])}clearSudokuElements(e){for(let t=0;t<e;t++)for(let n=0;n<e;n++)this.renderCell(t,n,"")}async renderSolvingAnimation(e){return r.status=!0,r.skip=!1,this.resetStatus(),await i(e,this.renderCell,this.renderStatus.bind(this))}async stopAnimation(){await r.stop()}renderCell(e,t,n){const i=`cell-${e}-${t}`,o=document.getElementById(i);o.textContent=n,!0===r.status&&(o.classList.add("backtracking-cell"),setTimeout((function(){o.classList.remove("backtracking-cell")}),200))}renderStatus(){this.renderIterationCount(),this.renderTimeCount()}renderIterationCount(){this.iterationCount++,this.iterationCountElement.innerHTML="Iterations: "+this.iterationCount}renderTimeCount(){this.timeCount=((new Date).getTime()-this.start)/1e3,this.timeCountElement.innerHTML="Time: "+this.timeCount.toFixed(1)+"s"}resetStatus(){this.iterationCount=0,this.timeCount=0,this.start=(new Date).getTime(),this.iterationCountElement.innerHTML="Iterations: 0",this.timeCountElement.innerHTML="Time: 0ms"}};a.renderGrid(s.sudokuSize),a.renderSudokuElements(s.generateSudoku(s.sudokuSize));document.getElementById("solve-button").addEventListener("click",async e=>{r.status?($(".pop").popover("disable"),console.log("clicked"),e.target.disabled=!0,r.skip=!0):(await a.renderSolvingAnimation(s.board),a.renderSudokuElements(s.board),r.status=!1,e.target.disabled=!1)});document.getElementById("clear-button").addEventListener("click",async e=>{await a.stopAnimation(),a.clearSudokuElements(s.sudokuSize),a.resetStatus(),a.renderSudokuElements(s.generateSudoku(s.sudokuSize))});const u=document.getElementById("sudoku"),c=document.getElementById("button-4x4"),d=document.getElementById("button-9x9"),l=document.getElementById("button-16x16");c.addEventListener("click",e=>{u.classList.add("small-table"),u.classList.remove("big-table"),c.classList.add("active"),d.classList.remove("active"),l.classList.remove("active"),a.stopAnimation(),s.sudokuSize=4,a.renderGrid(s.sudokuSize),a.renderSudokuElements(s.generateSudoku(s.sudokuSize)),a.resetStatus()}),d.addEventListener("click",e=>{u.classList.remove("small-table"),u.classList.remove("big-table"),c.classList.remove("active"),d.classList.add("active"),l.classList.remove("active"),a.stopAnimation(),s.sudokuSize=9,a.renderGrid(s.sudokuSize),a.renderSudokuElements(s.generateSudoku(s.sudokuSize)),a.resetStatus()}),l.addEventListener("click",e=>{u.classList.remove("small-table"),u.classList.add("big-table"),c.classList.remove("active"),d.classList.remove("active"),l.classList.add("active"),a.stopAnimation(),s.sudokuSize=16,a.renderGrid(s.sudokuSize),a.renderSudokuElements(s.generateSudoku(s.sudokuSize)),a.resetStatus()}),$(".pop").popover().click((function(){setTimeout((function(){$(".pop").popover("hide"),$(".pop").popover("disable")}),5e3)})),$("#animation-slider").slider({formatter:function(e){return r.interval+"ms"}}),$("#animation-slider").on("change",(function(e){console.log(e.value.newValue);let t=5-parseInt(e.value.newValue);t>1&&(t*=10),console.log(t),r.setInterval(t)}))}]);