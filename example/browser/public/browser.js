!function(M){var e={};function t(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return M[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=M,t.c=e,t.d=function(M,e,i){t.o(M,e)||Object.defineProperty(M,e,{enumerable:!0,get:i})},t.r=function(M){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},t.t=function(M,e){if(1&e&&(M=t(M)),8&e)return M;if(4&e&&"object"==typeof M&&M&&M.__esModule)return M;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:M}),2&e&&"string"!=typeof M)for(var n in M)t.d(i,n,function(e){return M[e]}.bind(null,n));return i},t.n=function(M){var e=M&&M.__esModule?function(){return M.default}:function(){return M};return t.d(e,"a",e),e},t.o=function(M,e){return Object.prototype.hasOwnProperty.call(M,e)},t.p="",t(t.s=0)}([function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=t(1),z=t(3),N=function(){return location.origin+location.pathname},j=function(){function M(){this.caseInfo=[],this.registerEvent()}return M.prototype.pushEventToCase=function(M){var e=N(),t=this.caseInfo.filter((function(M){return M.page===e}));0!==t.length?t[0].events.push(M):this.caseInfo.push({page:e,events:[M]})},M.prototype.exportCases=function(){var M=document.createElement("a");M.download="cases.json",M.style.display="none";var e=new Blob([JSON.stringify(this.caseInfo)]);M.href=URL.createObjectURL(e),document.body.appendChild(M),M.click(),document.body.removeChild(M),this.caseInfo=[]},M.prototype.registerEvent=function(){var M=this;window.onload=function(){z.default((function(){M.pushEventToCase({type:"SCREENSHOT",scrollTop:document.documentElement.scrollTop,selector:""})})),z.save(M.exportCases.bind(M)),M.caseInfo.push({page:N(),events:[]})},n.injectClick((function(e){M.pushEventToCase(e)}))},M}();j.init=function(){return i||(i=new j),i},j.init()},function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.injectClick=void 0;var i=t(2);e.injectClick=function(M){window.addEventListener("click",(function(e){var t=e.target;t&&"e2e-test-by-screenshot-btn"!==t.id&&"e2e-test-by-screenshot-export-btn"!==t.id&&M({type:"CLICK",scrollTop:document.documentElement.scrollTop,selector:i.getSelector(t)})}))}},function(M,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getSelector=void 0,e.getSelector=function M(e){var t=e.id;if(t)return/^[0-9]+/.test(t)?"[id='"+t+"']":"#"+t;var i=[].slice.call(e.classList);return i.length>0&&e.parentElement?M(e.parentElement)+" ."+i.join(".")+" ":e.parentElement?M(e.parentElement)+e.tagName.toLowerCase():e.tagName.toLowerCase()}},function(M,e,t){"use strict";function i(M,e){var t=document.createElement("img");t.src=e.img,t.width=32,t.height=32,t.id=e.id;var i=document.createElement("div");return i.style.cssText="    display: flex;\n    align-items: center;\n    position: fixed;\n    justify-content: center;\n    left: "+e.left+"px;\n    bottom: "+e.bottom+"px;\n    width: 50px;\n    height: 50px;\n    z-index: 999999;\n    background-color: "+e.background+";\n    border-radius: 50%;",i.appendChild(t),i.onclick=function(e){M(e)},i}Object.defineProperty(e,"__esModule",{value:!0}),e.toast=e.save=void 0,e.default=function(M){document&&document.body.appendChild(i(M,{background:"#2b85e4",img:"data:image/svg+xml;base64,PHN2ZyB0PSIxNjIzMTQ1NjMyNjUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDEiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTI5MC4xMzMzMzMgMjkwLjEzMzMzM2gtODUuMzMzMzMzYTUxLjIgNTEuMiAwIDAgMC01MS4yIDUxLjJ2NDQzLjczMzMzNGE1MS4yIDUxLjIgMCAwIDAgNTEuMiA1MS4yaDYxNC40YTUxLjIgNTEuMiAwIDAgMCA1MS4yLTUxLjJWMzQxLjMzMzMzM2E1MS4yIDUxLjIgMCAwIDAtNTEuMi01MS4yaC04NS4zMzMzMzNhNTEuMiA1MS4yIDAgMCAxLTQ4LjU3MTczNC0zNS4wMDM3MzNsLTEwLjgwMzItMzIuMzkyNTMzQTUxLjIgNTEuMiAwIDAgMCA2MjUuOTIgMTg3LjczMzMzM2gtMjI3Ljg0YTUxLjIgNTEuMiAwIDAgMC00OC41NzE3MzMgMzUuMDAzNzM0bC0xMC44MDMyIDMyLjM5MjUzM0E1MS4yIDUxLjIgMCAwIDEgMjkwLjEzMzMzMyAyOTAuMTMzMzMzeiBtMC01MS4ybDEwLjc4NjEzNC0zMi4zNzU0NjZBMTAyLjQgMTAyLjQgMCAwIDEgMzk4LjA4IDEzNi41MzMzMzNoMjI3Ljg0YTEwMi40IDEwMi40IDAgMCAxIDk3LjE2MDUzMyA3MC4wMjQ1MzRMNzMzLjg2NjY2NyAyMzguOTMzMzMzaDg1LjMzMzMzM2ExMDIuNCAxMDIuNCAwIDAgMSAxMDIuNCAxMDIuNHY0NDMuNzMzMzM0YTEwMi40IDEwMi40IDAgMCAxLTEwMi40IDEwMi40SDIwNC44YTEwMi40IDEwMi40IDAgMCAxLTEwMi40LTEwMi40VjM0MS4zMzMzMzNhMTAyLjQgMTAyLjQgMCAwIDEgMTAyLjQtMTAyLjRoODUuMzMzMzMzeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjI0MiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNzI1LjMzMzMzM2MtOTguOTY5NiAwLTE3OS4yLTgwLjIzMDQtMTc5LjItMTc5LjJTNDEzLjAzMDQgMzY2LjkzMzMzMyA1MTIgMzY2LjkzMzMzMyA2OTEuMiA0NDcuMTYzNzMzIDY5MS4yIDU0Ni4xMzMzMzMgNjEwLjk2OTYgNzI1LjMzMzMzMyA1MTIgNzI1LjMzMzMzM3ogbTAtNTEuMmExMjggMTI4IDAgMSAwIDAtMjU2IDEyOCAxMjggMCAwIDAgMCAyNTZ6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyMjQzIj48L3BhdGg+PC9zdmc+",left:10,bottom:110,id:"e2e-test-by-screenshot-btn"}))},e.save=function(M){document.body.appendChild(i(M,{background:"#19be6b",img:"data:image/svg+xml;base64,PHN2ZyB0PSIxNjIzMzkyOTEzNTY4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MDkiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTgxNi43Mzk5OTQgOTE0LjAwNDEzOCAyMDcuMjU4NzU1IDkxNC4wMDQxMzhDMTU5LjMzMDAyNCA5MTQuMDA0MTM4IDEyMC4zMzk5NjEgODc0Ljk4NDg4NCAxMjAuMzM5OTYxIDgyNy4wMjQ1MjhMMTIwLjMzOTk2MSAxOTcuNTMzNzU5YzAtNDcuOTY1MjIxIDM4Ljk5MDA2My04Ni45ODMyNTkgODYuOTE4Nzk1LTg2Ljk4MzI1OWw2MDkuNDgyNDU1IDBjNDcuOTI4NzMyIDAgODYuOTE4Nzk1IDM5LjAxODAzOCA4Ni45MTg3OTUgODYuOTgzMjU5bDAgNjI5LjQ4NzEyMUM5MDMuNjU4Nzg5IDg3NC45ODQ4ODQgODY0LjY2OTk0MiA5MTQuMDA0MTM4IDgxNi43Mzk5OTQgOTE0LjAwNDEzOEw4MTYuNzM5OTk0IDkxNC4wMDQxMzh6TTE5Ny43OTQ2NCAxNTguMTI4OTM0Yy0xNi40NzI0OTkgMC0yOS44NzYyNDUgMTMuNDAyNTMtMjkuODc2MjQ1IDI5Ljg3NTAyOWwwIDY0OC41NDU0OTZjMCAxNi40NzI0OTkgMTMuNDAzNzQ2IDI5Ljg3NjI0NSAyOS44NzYyNDUgMjkuODc2MjQ1bDYyOC40MDk0NjkgMGMxNi40NzI0OTkgMCAyOS44NzYyNDUtMTMuNDAzNzQ2IDI5Ljg3NjI0NS0yOS44NzYyNDVMODU2LjA4MDM1NSAxODguMDAzOTYzYzAtMTYuNDcyNDk5LTEzLjQwMzc0Ni0yOS44NzUwMjktMjkuODc2MjQ1LTI5Ljg3NTAyOUwxOTcuNzk0NjQgMTU4LjEyODkzNCAxOTcuNzk0NjQgMTU4LjEyODkzNHpNMTk3Ljc5NDY0IDE1OC4xMjg5MzQiIHAtaWQ9IjI1MTAiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzU3LjA1OTI2NiA0NjMuMTU2NjAyIDI2Ni45MzgyNjcgNDYzLjE1NjYwMiAyNjYuOTM4MjY3IDE0OS41MDA0MjRsMjkuODcxMzggMCAwIDI4My43ODQ3OTggNDMwLjM3OTQ1NiAwTDcyNy4xODkxMDMgMTQ5LjUwMDQyNGwyOS44NzAxNjQgMEw3NTcuMDU5MjY2IDQ2My4xNTY2MDJ6TTc1Ny4wNTkyNjYgNDYzLjE1NjYwMiIgcC1pZD0iMjUxMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NzAuNzYzMjIzIDM4OC40Nzc1NDVsLTg3LjQwMjg4NiAwTDU4My4zNjAzMzYgMjM5LjExODIxM2w4Ny40MDI4ODYgMEw2NzAuNzYzMjIzIDM4OC40Nzc1NDUgNjcwLjc2MzIyMyAzODguNDc3NTQ1ek02MTMuMjMwNSAzNTguNjA2MTY1bDI3LjY2MjU1OSAwIDAtODkuNjE3Nzg5LTI3LjY2MjU1OSAwTDYxMy4yMzA1IDM1OC42MDYxNjUgNjEzLjIzMDUgMzU4LjYwNjE2NXpNNjEzLjIzMDUgMzU4LjYwNjE2NSIgcC1pZD0iMjUxMiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==",left:10,bottom:30,id:"e2e-test-by-screenshot-export-btn"}))},e.toast=function(M){}}]);