(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(10),c=n.n(l),o=n(5),i=n(2),u=n(1),d=n(4),m={body:"#FAFAFA",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",inputBody:"#FAFAFA",inputText:"#363537",inputBorder:"#363537",containerBorder:"#363537",headerButtonColor:"#363537",headerAfterBorderColor:"#363537",headerButtonHoverColor:"#79D7ED"},f={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",inputBody:"#363537",inputText:"#FAFAFA",inputBorder:"#FAFAFA",containerBorder:"#FAFAFA",headerButtonColor:"#FAFAFA",headerAfterBorderColor:"#FAFAFA",headerButtonHoverColor:"#6B8096"},p=n(19),s=n.n(p),h="DISPLAY_ALL_TODO",g="DISPLAY_COMPLETED_TODO",E="DISPLAY_UNCOMPLETED_TODO";var v={createTodoItem:function(e){return{type:"CREATE_TODO_ITEM",item:e}},deleteTodoItem:function(e){return{type:"DELETE_TODO_ITEM",item:e}},updateTodoItem:function(e){return{type:"UPDATE_TODO_ITEM",item:e}},changeTodoItemCompleted:function(e){return{type:"CHANGE_TODO_ITEM_COMPLETED",item:e}},clearCompletedTodoItem:function(){return{type:"CLEAR_COMPLETED_TODO_ITEM"}},setDisplayFilter:function(e){return{type:"SET_DISPLAY_FILTER",filter:e}}};function x(){var e=Object(i.a)(["\n    height: 50%;\n    width: 50%;\n    font-size: 22px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        width: 90%;\n        height: 40%;\n        font-size: 14px;\n    }\n"]);return x=function(){return e},e}function b(){var e=Object(i.a)(["\n    height: 100px;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        height: 80px;\n        padding-bottom: 5px;\n    }\n"]);return b=function(){return e},e}var y=u.default.div(b()),O=u.default.input(x());var w=Object(d.b)()((function(e){var t=e.dispatch,n=Object(r.useState)(""),l=Object(o.a)(n,2),c=l[0],i=l[1];return a.a.createElement(y,null,a.a.createElement(O,{type:"text",placeholder:"Write some to do task and press enter.",value:c,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&(""===c?alert("Please write any text."):(t(v.createTodoItem({id:s()(),text:c,isCompleted:!1})),i("")))}(e)}}))})),j=n(3);function C(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 15px;\n    visibility: ",";\n\n    svg {\n        height: auto;\n        width: 1.4rem;\n    }\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        svg {\n            width: 1rem;\n        }\n    }\n"]);return C=function(){return e},e}var z=u.default.button(C(),(function(e){return e.flag?"hidden":"visible"}));var T=function(e){var t=e.onClick,n=e.buttonIcon,r=e.flag,l=e.styles;return a.a.createElement(z,{onClick:t,style:l,flag:r},n)},F={fontSize:24,justifyContent:"center",alignItems:"center"},A={fontSize:24,justifyContent:"center",alignItems:"center"},D={fontSize:24,justifyContent:"center",alignItems:"center"};function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B=a.a.createElement("g",null),S=a.a.createElement("g",null),R=a.a.createElement("g",null),k=a.a.createElement("g",null),L=a.a.createElement("g",null),P=a.a.createElement("g",null),M=a.a.createElement("g",null),N=a.a.createElement("g",null),H=a.a.createElement("g",null),U=a.a.createElement("g",null),X=a.a.createElement("g",null),Y=a.a.createElement("g",null),G=a.a.createElement("g",null),V=a.a.createElement("g",null),W=a.a.createElement("g",null),J=function(e){var t=e.svgRef,n=e.title,r=I(e,["svgRef","title"]);return a.a.createElement("svg",_({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("circle",{style:{fill:"#25AE88"},cx:25,cy:25,r:25}),a.a.createElement("polyline",{style:{fill:"none",stroke:"#FFFFFF",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10},points:" 38,15 22,33 12,25 "}),B,S,R,k,L,P,M,N,H,U,X,Y,G,V,W)},K=a.a.forwardRef((function(e,t){return a.a.createElement(J,_({svgRef:t},e))}));n.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z=a.a.createElement("path",{d:"m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0",fill:"#e76e54"}),$=function(e){var t=e.svgRef,n=e.title,r=Q(e,["svgRef","title"]);return a.a.createElement("svg",q({height:"511.992pt",viewBox:"0 0 511.992 511.992",width:"511.992pt",ref:t},r),n?a.a.createElement("title",null,n):null,Z)},ee=a.a.forwardRef((function(e,t){return a.a.createElement($,q({svgRef:t},e))}));n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var re=a.a.createElement("path",{d:"m392.5 8h-368c-8.835938 0-16 7.164062-16 16v49h400v-49c0-8.835938-7.164062-16-16-16zm0 0",fill:"#78b9eb"}),ae=a.a.createElement("path",{d:"m39.835938 440.679688c.371093 17.40625 14.589843 31.324218 32 31.320312h273.335937c17.410156.003906 31.628906-13.914062 32-31.320312l7.328125-344.679688h-352zm256.664062-288.679688c0-8.835938 7.164062-16 16-16h8c8.835938 0 16 7.164062 16 16v264c0 8.835938-7.164062 16-16 16h-8c-8.835938 0-16-7.164062-16-16zm-72 0c0-8.835938 7.164062-16 16-16h8c8.835938 0 16 7.164062 16 16v264c0 8.835938-7.164062 16-16 16h-8c-8.835938 0-16-7.164062-16-16zm-72 0c0-8.835938 7.164062-16 16-16h8c8.835938 0 16 7.164062 16 16v264c0 8.835938-7.164062 16-16 16h-8c-8.835938 0-16-7.164062-16-16zm-72 0c0-8.835938 7.164062-16 16-16h8c8.835938 0 16 7.164062 16 16v264c0 8.835938-7.164062 16-16 16h-8c-8.835938 0-16-7.164062-16-16zm0 0",fill:"#78b9eb"}),le=a.a.createElement("g",{fill:"#006df0"},a.a.createElement("path",{d:"m392.5 0h-368c-13.253906 0-24 10.746094-24 24v56c0 13.253906 10.746094 24 24 24h.167969l7.199219 336.847656c.578124 21.710938 18.285156 39.039063 40 39.152344h273.304687c21.714844-.113281 39.421875-17.441406 40-39.152344l7.160156-336.847656h.167969c13.253906 0 24-10.746094 24-24v-56c0-13.253906-10.746094-24-24-24zm-368 16h368c4.417969 0 8 3.582031 8 8v41h-384v-41c0-4.417969 3.582031-8 8-8zm344.664062 424.511719c-.34375 13.027343-10.96875 23.421875-24 23.488281h-273.335937c-13.03125-.066406-23.660156-10.46875-24-23.496094l-7.160156-336.503906h335.664062zm23.335938-352.511719h-368c-3.992188-.035156-7.335938-3.035156-7.800781-7h383.601562c-.464843 3.964844-3.808593 6.964844-7.800781 7zm0 0"}),a.a.createElement("path",{d:"m96.5 440h8c13.253906 0 24-10.746094 24-24v-264c0-13.253906-10.746094-24-24-24h-8c-13.253906 0-24 10.746094-24 24v264c0 13.253906 10.746094 24 24 24zm-8-288c0-4.417969 3.582031-8 8-8h8c4.417969 0 8 3.582031 8 8v264c0 4.417969-3.582031 8-8 8h-8c-4.417969 0-8-3.582031-8-8zm0 0"}),a.a.createElement("path",{d:"m168.5 440h8c13.253906 0 24-10.746094 24-24v-264c0-13.253906-10.746094-24-24-24h-8c-13.253906 0-24 10.746094-24 24v264c0 13.253906 10.746094 24 24 24zm-8-288c0-4.417969 3.582031-8 8-8h8c4.417969 0 8 3.582031 8 8v264c0 4.417969-3.582031 8-8 8h-8c-4.417969 0-8-3.582031-8-8zm0 0"}),a.a.createElement("path",{d:"m240.5 440h8c13.253906 0 24-10.746094 24-24v-264c0-13.253906-10.746094-24-24-24h-8c-13.253906 0-24 10.746094-24 24v264c0 13.253906 10.746094 24 24 24zm-8-288c0-4.417969 3.582031-8 8-8h8c4.417969 0 8 3.582031 8 8v264c0 4.417969-3.582031 8-8 8h-8c-4.417969 0-8-3.582031-8-8zm0 0"}),a.a.createElement("path",{d:"m312.5 440h8c13.253906 0 24-10.746094 24-24v-264c0-13.253906-10.746094-24-24-24h-8c-13.253906 0-24 10.746094-24 24v264c0 13.253906 10.746094 24 24 24zm-8-288c0-4.417969 3.582031-8 8-8h8c4.417969 0 8 3.582031 8 8v264c0 4.417969-3.582031 8-8 8h-8c-4.417969 0-8-3.582031-8-8zm0 0"})),ce=function(e){var t=e.svgRef,n=e.title,r=ne(e,["svgRef","title"]);return a.a.createElement("svg",te({height:"480pt",viewBox:"-31 0 479 480",width:"480pt",ref:t},r),n?a.a.createElement("title",null,n):null,re,ae,le)},oe=a.a.forwardRef((function(e,t){return a.a.createElement(ce,te({svgRef:t},e))}));n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var de=a.a.createElement("g",null),me=a.a.createElement("g",null),fe=a.a.createElement("g",null),pe=a.a.createElement("g",null),se=a.a.createElement("g",null),he=a.a.createElement("g",null),ge=a.a.createElement("g",null),Ee=a.a.createElement("g",null),ve=a.a.createElement("g",null),xe=a.a.createElement("g",null),be=a.a.createElement("g",null),ye=a.a.createElement("g",null),Oe=a.a.createElement("g",null),we=a.a.createElement("g",null),je=a.a.createElement("g",null),Ce=function(e){var t=e.svgRef,n=e.title,r=ue(e,["svgRef","title"]);return a.a.createElement("svg",ie({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 53.255 53.255",style:{enableBackground:"new 0 0 53.255 53.255"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("path",{style:{fill:"#D75A4A"},d:"M39.598,2.343c3.124-3.124,8.19-3.124,11.314,0s3.124,8.19,0,11.314L39.598,2.343z"}),a.a.createElement("polygon",{style:{fill:"#ED8A19"},points:"42.426,17.899 16.512,43.814 15.982,48.587 44.548,20.02 44.548,20.02 "}),a.a.createElement("polygon",{style:{fill:"#ED8A19"},points:"10.325,42.93 15.098,42.4 41.012,16.485 36.77,12.243 10.855,38.157 "}),a.a.createElement("polygon",{style:{fill:"#ED8A19"},points:"35.356,10.829 33.234,8.707 33.234,8.707 4.668,37.273 9.441,36.743 "}),a.a.createElement("polygon",{style:{fill:"#C7CAC7"},points:"48.79,15.778 48.79,15.778 50.912,13.657 39.598,2.343 37.476,4.465 37.477,4.465 "}),a.a.createElement("polygon",{style:{fill:"#C7CAC7"},points:"36.062,5.879 36.062,5.879 34.648,7.293 34.648,7.293 45.962,18.606 45.962,18.606  47.376,17.192 47.376,17.192 "}),a.a.createElement("path",{style:{fill:"#FBCE9D"},d:"M14.424,44.488l-5.122,0.569c-0.036,0.004-0.073,0.006-0.109,0.006c0,0-0.001,0-0.001,0H9.192H9.192 c-0.001,0-0.001,0-0.001,0c-0.036,0-0.073-0.002-0.109-0.006c-0.039-0.004-0.071-0.026-0.108-0.035 c-0.072-0.017-0.141-0.035-0.207-0.067c-0.05-0.024-0.093-0.053-0.138-0.084c-0.057-0.04-0.109-0.083-0.157-0.134 c-0.038-0.04-0.069-0.081-0.1-0.127c-0.038-0.057-0.069-0.116-0.095-0.181c-0.022-0.054-0.038-0.107-0.05-0.165 c-0.007-0.032-0.024-0.059-0.028-0.092c-0.004-0.038,0.01-0.073,0.01-0.11c0-0.038-0.014-0.072-0.01-0.11l0.569-5.122l-5.122,0.569 c-0.037,0.004-0.075,0.006-0.111,0.006c-0.079,0-0.152-0.024-0.227-0.042L0.442,51.399l2.106-2.106c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414l-2.106,2.106l12.03-2.864c-0.026-0.109-0.043-0.222-0.03-0.339L14.424,44.488z"}),a.a.createElement("path",{style:{fill:"#38454F"},d:"M3.962,49.293c-0.391-0.391-1.023-0.391-1.414,0l-2.106,2.106L0,53.255l1.856-0.442l2.106-2.106 C4.352,50.316,4.352,49.684,3.962,49.293z"}),a.a.createElement("polygon",{style:{fill:"#F2ECBF"},points:"48.79,15.778 37.477,4.465 37.476,4.465 36.062,5.879 36.062,5.879 47.376,17.192  47.376,17.192 48.79,15.778 "}),a.a.createElement("path",{style:{fill:"#EBBA16"},d:"M41.012,16.485L15.098,42.4l-4.773,0.53l0.53-4.773L36.77,12.243l-1.414-1.414L9.441,36.743 l-4.773,0.53l-1.133,1.133l-0.228,0.957c0.075,0.018,0.147,0.042,0.227,0.042c0.036,0,0.074-0.002,0.111-0.006l5.122-0.569 l-0.569,5.122c-0.004,0.038,0.01,0.073,0.01,0.11c0,0.038-0.014,0.072-0.01,0.11c0.004,0.033,0.021,0.06,0.028,0.092 c0.012,0.057,0.029,0.112,0.05,0.165c0.026,0.064,0.057,0.124,0.095,0.181c0.03,0.045,0.063,0.088,0.1,0.127 c0.047,0.05,0.1,0.094,0.157,0.134c0.044,0.031,0.089,0.061,0.138,0.084c0.065,0.031,0.135,0.05,0.207,0.067 c0.038,0.009,0.069,0.03,0.108,0.035c0.036,0.004,0.072,0.006,0.109,0.006h0.001h0h0.001h0.001c0,0,0.001,0,0.001,0h0 c0.035,0,0.072-0.002,0.109-0.006l5.122-0.569l-0.569,5.122c-0.013,0.118,0.004,0.23,0.03,0.339l0.963-0.229l1.133-1.132l0.53-4.773 l25.914-25.915L41.012,16.485z"}),a.a.createElement("polygon",{style:{fill:"#F2ECBF"},points:"45.962,18.606 34.648,7.293 34.648,7.293 33.234,8.707 33.234,8.707 35.356,10.829  36.77,12.243 41.012,16.485 42.426,17.899 44.548,20.02 44.548,20.02 45.962,18.606 "}),de,me,fe,pe,se,he,ge,Ee,ve,xe,be,ye,Oe,we,je)},ze=a.a.forwardRef((function(e,t){return a.a.createElement(Ce,ie({svgRef:t},e))}));n.p;function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ae=a.a.createElement("g",{id:"Froppy_disk","data-name":"Froppy disk"},a.a.createElement("path",{d:"m49 3h-42a4 4 0 0 0 -4 4v50a4 4 0 0 0 4 4h50a4 4 0 0 0 4-4v-46l-8-8z",fill:"#d1e7f8"}),a.a.createElement("path",{d:"m49 3v17a2.006 2.006 0 0 1 -2 2h-30a2.006 2.006 0 0 1 -2-2v-17z",fill:"#d1d3d4"}),a.a.createElement("path",{d:"m39 7h6v11h-6z",fill:"#6d6e71"}),a.a.createElement("path",{d:"m51 31h-38a4 4 0 0 0 -4 4v26h46v-26a4 4 0 0 0 -4-4z",fill:"#2488ff"}),a.a.createElement("path",{d:"m3 56v1a4 4 0 0 0 4 4h2v-5z",fill:"#bddbff"}),a.a.createElement("path",{d:"m55 5v56h2a4 4 0 0 0 4-4v-46z",fill:"#bddbff"}),a.a.createElement("path",{d:"m47 56h-38v5h46v-13a8 8 0 0 1 -8 8z",fill:"#006df0"}),a.a.createElement("g",{fill:"#231f20"},a.a.createElement("path",{d:"m61.707 10.293-8-8a1 1 0 0 0 -.707-.293h-46a5.006 5.006 0 0 0 -5 5v50a5.006 5.006 0 0 0 5 5h50a5.006 5.006 0 0 0 5-5v-46a1 1 0 0 0 -.293-.707zm-13.707-6.293v16a1 1 0 0 1 -1 1h-30a1 1 0 0 1 -1-1v-16zm-38 56v-25a3 3 0 0 1 3-3h38a3 3 0 0 1 3 3v25zm50-3a3 3 0 0 1 -3 3h-1v-25a5.006 5.006 0 0 0 -5-5h-38a5.006 5.006 0 0 0 -5 5v25h-1a3 3 0 0 1 -3-3v-50a3 3 0 0 1 3-3h7v16a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-16h2.586l7.414 7.414z"}),a.a.createElement("path",{d:"m39 19h6a1 1 0 0 0 1-1v-11a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v11a1 1 0 0 0 1 1zm1-11h4v9h-4z"}),a.a.createElement("path",{d:"m47 45h-30a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2z"}),a.a.createElement("path",{d:"m47 39h-30a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2z"}),a.a.createElement("path",{d:"m47 51h-30a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2z"}))),De=function(e){var t=e.svgRef,n=e.title,r=Fe(e,["svgRef","title"]);return a.a.createElement("svg",Te({height:512,viewBox:"0 0 64 64",width:512,ref:t},r),n?a.a.createElement("title",null,n):null,Ae)},_e=a.a.forwardRef((function(e,t){return a.a.createElement(De,Te({svgRef:t},e))}));n.p;function Ie(){var e=Object(i.a)(["\n    width: 80%;\n    border: none;\n    font-size: 22px;\n    font-weight: 400;\n    text-align: left;\n    margin: 0 10px;\n"]);return Ie=function(){return e},e}function Be(){var e=Object(i.a)(["\n    width: 80%;\n    font-size: 22px;\n    font-weight: 400;\n    text-decoration: ",";\n    margin: 0 10px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        font-size: 15px;\n    }\n"]);return Be=function(){return e},e}function Se(){var e=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    height: 50px;\n    width: 90%;\n    margin: 0px 0px 20px 0px;\n    padding: 10px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        height: 40px;\n        width: 90%;\n        margin: 0px 0px 15px 0px;\n    }\n"]);return Se=function(){return e},e}var Re=u.default.div(Se()),ke=u.default.div(Be(),(function(e){return e.isCompleted?"line-through":"none"})),Le=u.default.input(Ie());var Pe=Object(d.b)()((function(e){var t=e.item,n=e.dispatch,l=Object(r.useState)(t.text),c=Object(o.a)(l,2),i=c[0],u=c[1],d=Object(r.useState)(!1),m=Object(o.a)(d,2),f=m[0],p=m[1];return a.a.createElement(Re,{className:"todo-item"},a.a.createElement(T,{onClick:function(){n(v.changeTodoItemCompleted(t))},buttonIcon:t.isCompleted?a.a.createElement(K,null):a.a.createElement(ee,null),flag:f,styles:F}),f?a.a.createElement(Le,{className:"todo-input",onChange:function(e){return u(e.target.value)},value:i,inputStyle:{fontSize:20,fontWeight:400,padding:"5px 10px"}}):a.a.createElement(ke,{isCompleted:t.isCompleted},t.text),a.a.createElement(T,{onClick:function(){n(v.deleteTodoItem(t))},buttonIcon:a.a.createElement(oe,null),flag:f,styles:A}),a.a.createElement(T,{onClick:function(){f&&(""!==i?n(v.updateTodoItem(Object(j.a)({},t,{text:i}))):alert("Please write any text.")),p(!f)},buttonIcon:f?a.a.createElement(_e,null):a.a.createElement(ze,null),flag:!1,styles:D}))}));function Me(){var e=Object(i.a)(["\n    display: flex;\n    height: 100px;\n    align-items: center;\n    margin-top: -20px;\n    font-size: 26px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        margin-top: -15px;\n    }\n"]);return Me=function(){return e},e}function Ne(){var e=Object(i.a)(["\n    display: flex;\n    width: 50%;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 20px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        width: 90%;\n        padding-top: 15px;\n    }\n"]);return Ne=function(){return e},e}var He=u.default.div(Ne()),Ue=u.default.div(Me());var Xe=Object(d.b)((function(e){return function(e,t){switch(t){case h:return Object(j.a)({},e);case g:return Object(j.a)({},e,{todos:e.todos.filter((function(e){return e.isCompleted}))});case E:return Object(j.a)({},e,{todos:e.todos.filter((function(e){return!e.isCompleted}))});default:throw new Error("Unknown Filter : "+t)}}(e.todoReducer,e.todoDisplayFilterReducer)}))((function(e){var t=e.todos;return a.a.createElement(He,{className:"todo-container"},t.length>0?t.map((function(e){return a.a.createElement(Pe,{key:e.id,item:e})})):a.a.createElement(Ue,null,"Todo list is empty."))}));function Ye(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: flex-start;\n    font-size: 18px;\n    margin-left: 10px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        font-size: 10px;\n        margin-left: 5px;\n        font-weight: 500;\n    }\n"]);return Ye=function(){return e},e}var Ge=u.default.button(Ye());var Ve=Object(d.b)()((function(e){var t=e.dispatch;return a.a.createElement(Ge,{className:"header-button",onClick:function(){t(v.clearCompletedTodoItem())}},"CLEAR COMPLETED")}));function We(){var e=Object(i.a)(["\n    font-size: 18px;\n\n    :last-child {\n        :after {\n            border: none;\n        }\n    }\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        font-size: 12px;\n        font-weight: 500;\n\n        :hover {\n            font-size: 12px;\n        }\n    }\n"]);return We=function(){return e},e}function Je(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: flex-start;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        padding-right: 10px;\n    }\n"]);return Je=function(){return e},e}var Ke=u.default.div(Je()),qe=u.default.button(We());var Qe=Object(d.b)((function(e){return{filter:e.todoDisplayFilterReducer}}))((function(e){var t=e.filter,n=e.dispatch;return a.a.createElement(Ke,null,a.a.createElement(qe,{className:"header-button ".concat(t===h?"selected":"unselected"),disabled:t===h,filter:t===h,onClick:function(){return n(v.setDisplayFilter(h))}},"ALL"),a.a.createElement(qe,{className:"header-button ".concat(t===g?"selected":"unselected"),disabled:t===g,onClick:function(){return n(v.setDisplayFilter(g))}},"COMPLETE"),a.a.createElement(qe,{className:"header-button ".concat(t===E?"selected":"unselected"),disabled:t===E,onClick:function(){return n(v.setDisplayFilter(E))}},"UNCOMPLETE"))}));function Ze(){var e=Object(i.a)(["\n    font-size: 20px;\n    margin: 5px 10px 5px 5px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        font-size: 16px;\n        margin: 5px 5px 5px 5px;\n    }\n"]);return Ze=function(){return e},e}function $e(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return $e=function(){return e},e}function et(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: row;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        margin-left: -90px;\n        margin-top: -75px;\n    }\n"]);return et=function(){return e},e}var tt=u.default.div(et()),nt=u.default.div($e()),rt=u.default.div(Ze());var at=function(e){var t=e.completed,n=e.uncompleted;return a.a.createElement(tt,null,a.a.createElement(nt,null,a.a.createElement(K,{className:"counter-icon"}),a.a.createElement(rt,null,t)),a.a.createElement(nt,null,a.a.createElement(ee,{className:"counter-icon"}),a.a.createElement(rt,null,n)))};function lt(){var e=Object(i.a)(["\n    display: flex;\n    width: 50%;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: row;\n    height: 40px;\n    padding: 0 35px;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        width: 90%;\n        padding: 5px 10px 0 10px;\n    }\n"]);return lt=function(){return e},e}var ct=u.default.div(lt());var ot=function(e){var t=e.completed,n=e.uncompleted;return a.a.createElement(ct,{className:"todo-counter-container"},a.a.createElement(Ve,null),a.a.createElement(Qe,null),a.a.createElement(at,{completed:t,uncompleted:n}))},it=n(22),ut=n.n(it);function dt(){var e=Object(i.a)(["\n    ",";\n    *,\n    *::after,\n    *::before {\n        box-sizing: border-box;\n    }\n\n    body {\n      align-items: center;\n      background: ",";\n      color: ",";\n      display: flex;\n      flex:1;\n      width: 100%;\n      flex-direction: column;\n      justify-content: center;\n      height: 100%;\n      margin: 0;\n      padding: 0;\n      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n      transition: all 0.25s linear;\n    }\n\n    input {\n      background-color: ",";\n      color: ",";\n      border: 1px solid ",";\n      text-align: center;\n    }\n\n    button {\n      background-color: ",";\n      color: ",";\n    }\n\n    #root {\n      display: flex;\n      flex:1;\n      width: 100%;\n    }\n\n    .todo-container {\n      border: 1px solid ",";\n    }\n\n    .todo-counter-container {\n      border: 1px solid ",";\n      border-bottom: none;\n    }\n\n    .todo-item {\n      border: 1px solid ",";\n    }\n\n    button {\n      padding: 0;\n      border: 0;\n      background: none;\n    }\n\n    .todo-input {\n      border-bottom: 1px solid ",";\n    }\n\n    .counter-icon {\n      width: 20px;\n      height: auto;\n      \n      @media (min-width: 320px) and (max-width: 480px) {\n        width: 14px;\n      }\n    }\n\n    .header-button {\n        color: ",";\n\n        :after {\n            content: '';\n            border-right-width: 1px;\n            border-right-color: ",";\n            border-right-style: solid;\n            margin: 0 10px;\n        }\n\n        :hover {\n            color: ",";\n        }\n    }\n\n    .selected {\n      :hover {\n            color: ",";\n        }\n    }\n"]);return dt=function(){return e},e}var mt=Object(u.createGlobalStyle)(dt(),ut.a,(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.inputBody}),(function(e){return e.theme.inputText}),(function(e){return e.theme.inputBorder}),(function(e){return e.theme.inputBody}),(function(e){return e.theme.inputText}),(function(e){return e.theme.containerBorder}),(function(e){return e.theme.containerBorder}),(function(e){return e.theme.containerBorder}),(function(e){return e.theme.containerBorder}),(function(e){return e.theme.headerButtonColor}),(function(e){return e.theme.headerAfterBorderColor}),(function(e){return e.theme.headerButtonHoverColor}),(function(e){return e.theme.headerButtonColor}));function ft(){return(ft=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var st=a.a.createElement("g",null),ht=a.a.createElement("g",null),gt=a.a.createElement("g",null),Et=a.a.createElement("g",null),vt=a.a.createElement("g",null),xt=a.a.createElement("g",null),bt=a.a.createElement("g",null),yt=a.a.createElement("g",null),Ot=a.a.createElement("g",null),wt=a.a.createElement("g",null),jt=a.a.createElement("g",null),Ct=a.a.createElement("g",null),zt=a.a.createElement("g",null),Tt=a.a.createElement("g",null),Ft=a.a.createElement("g",null),At=function(e){var t=e.svgRef,n=e.title,r=pt(e,["svgRef","title"]);return a.a.createElement("svg",ft({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("path",{style:{fill:"#EFDA45"},d:"M492.533,393.514c-45.591,71.117-125.26,118.288-215.959,118.484 C136.061,512.303,20.686,398.644,18.987,258.141C17.389,125.938,115.61,16.341,243.014,0.027c2.723-0.349,4.497,2.766,2.842,4.956 c-30.719,40.661-48.931,91.286-48.931,146.177c0,134.063,108.676,242.738,242.738,242.738c17.004,0,33.592-1.744,49.607-5.075 C491.959,388.264,494.015,391.202,492.533,393.514z"}),a.a.createElement("path",{style:{fill:"#EDC148"},d:"M489.276,388.819c2.684-0.558,4.74,2.373,3.261,4.682C446.851,464.773,366.946,512,276.009,512 C134.044,512,18.972,396.917,18.972,254.963c0-56.808,18.424-109.306,49.635-151.86c-7.086,23.245-10.961,47.888-11.116,73.419 C56.624,319.554,171.5,435.157,314.535,435.151c51.831-0.002,100.076-15.342,140.436-41.74 C466.655,392.692,478.106,391.143,489.276,388.819z"}),st,ht,gt,Et,vt,xt,bt,yt,Ot,wt,jt,Ct,zt,Tt,Ft)},Dt=a.a.forwardRef((function(e,t){return a.a.createElement(At,ft({svgRef:t},e))}));n.p;function _t(){return(_t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function It(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Bt=a.a.createElement("g",null),St=a.a.createElement("g",null),Rt=a.a.createElement("g",null),kt=a.a.createElement("g",null),Lt=a.a.createElement("g",null),Pt=a.a.createElement("g",null),Mt=a.a.createElement("g",null),Nt=a.a.createElement("g",null),Ht=a.a.createElement("g",null),Ut=a.a.createElement("g",null),Xt=a.a.createElement("g",null),Yt=a.a.createElement("g",null),Gt=a.a.createElement("g",null),Vt=a.a.createElement("g",null),Wt=a.a.createElement("g",null),Jt=function(e){var t=e.svgRef,n=e.title,r=It(e,["svgRef","title"]);return a.a.createElement("svg",_t({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 481.882 481.882",style:{enableBackground:"new 0 0 481.882 481.882"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("circle",{style:{fill:"#FCD462"},cx:240.941,cy:240.941,r:138.541}),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#F6C358"},d:"M306.598,118.664c6.024,19.275,10.24,39.755,10.842,60.838 c3.614,83.727-53.007,157.816-126.494,190.344c15.661,6.024,32.527,9.638,49.995,9.638c76.499,0,138.541-62.042,138.541-138.541 C379.482,187.934,349.967,142.155,306.598,118.664z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M240.941,0c-11.445,0-20.48,9.035-20.48,20.48v33.732c0,11.445,9.035,20.48,20.48,20.48 s20.48-9.035,20.48-20.48V20.48C261.421,9.035,252.386,0,240.941,0z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M240.941,407.191c-11.445,0-20.48,9.035-20.48,20.48v33.732c0,11.445,9.035,20.48,20.48,20.48 s20.48-9.035,20.48-20.48v-33.732C261.421,416.226,252.386,407.191,240.941,407.191z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M481.882,240.941c0-11.445-9.035-20.48-20.48-20.48h-33.732c-11.445,0-20.48,9.035-20.48,20.48 s9.035,20.48,20.48,20.48h33.732C472.847,261.421,481.882,252.386,481.882,240.941z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M74.692,240.941c0-11.445-9.035-20.48-20.48-20.48H20.48c-11.445,0-20.48,9.035-20.48,20.48 s9.035,20.48,20.48,20.48h33.732C65.656,261.421,74.692,252.386,74.692,240.941z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M411.407,70.475c-7.831-7.831-21.082-7.831-28.913,0L358.4,94.569 c-7.831,7.831-7.831,21.082,0,28.913c7.831,7.831,21.082,7.831,28.913,0l24.094-24.094 C419.238,91.558,419.238,78.306,411.407,70.475z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M123.482,358.4c-7.831-7.831-21.082-7.831-28.913,0l-24.094,24.094 c-7.831,7.831-7.831,21.082,0,28.913c7.831,7.831,21.082,7.831,28.913,0l24.094-24.094 C131.313,379.482,131.313,366.833,123.482,358.4z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M411.407,411.407c7.831-7.831,7.831-21.082,0-28.913L387.313,358.4 c-7.831-7.831-21.082-7.831-28.913,0c-7.831,7.831-7.831,21.082,0,28.913l24.094,24.094 C390.325,419.238,403.576,419.238,411.407,411.407z"}),a.a.createElement("path",{style:{fill:"#F6C358"},d:"M123.482,123.482c7.831-7.831,7.831-21.082,0-28.913L99.388,70.475 c-7.831-7.831-21.082-7.831-28.913,0s-7.831,21.082,0,28.913l24.094,24.094C102.4,131.313,115.049,131.313,123.482,123.482z"})),Bt,St,Rt,kt,Lt,Pt,Mt,Nt,Ht,Ut,Xt,Yt,Gt,Vt,Wt)},Kt=a.a.forwardRef((function(e,t){return a.a.createElement(Jt,_t({svgRef:t},e))}));n.p;function qt(){var e=Object(i.a)(["\n    position: fixed;\n    top: 20px;\n    right: 50px;\n    background: ",";\n    border: 2px solid ",";\n    border-radius: 30px;\n    font-size: 0.5rem;\n    margin: 0 auto;\n    overflow: hidden;\n    padding: 0.5rem;\n    width: 4.5rem;\n    height: 2.5rem;\n\n    svg {\n        height: auto;\n        width: 1.2rem;\n        transition: all 0.3s linear;\n\n        &:first-child {\n            transform: ",";\n        }\n\n        &:nth-child(2) {\n            transform: ",";\n        }\n    }\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        width: 3.5rem;\n        height: 1.7rem;\n        border-radius: 20px;\n        padding: 0.2rem;\n        top: 25px;\n        right: 25px;\n\n        svg {\n            width: 1rem;\n        }\n    }\n"]);return qt=function(){return e},e}var Qt=u.default.button(qt(),(function(e){return e.theme.gradient}),(function(e){return e.theme.toggleBorder}),(function(e){return e.lightTheme?"translateX(10)":"translateX(-100px)"}),(function(e){return e.lightTheme?"translateX(100px)":"translateX(-10)"}));var Zt=function(e){var t=e.theme,n=e.setTheme,r="light"===t;return a.a.createElement(Qt,{onClick:n,lightTheme:r},a.a.createElement(Kt,null),a.a.createElement(Dt,null))};var $t=function(){var e=Object(r.useState)(window.localStorage.getItem("theme")||"light"),t=Object(o.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1];function d(e){window.localStorage.setItem("theme",e),a(e)}return Object(r.useEffect)((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?d("dark"):e?a(e):d("light"),u(!0)}),[]),[n,function(){d("light"===n?"dark":"light")},i]};function en(){var e=Object(i.a)(['\n    text-align: center;\n    margin-top: 30px;\n    font-size: 52px;\n    font-weight: bold;\n    font-family: "Abel", sans-serif;\n    text-shadow: 4px 4px 1px gray;\n\n    @media (min-width: 320px) and (max-width: 480px) {\n        margin-top: 24px;\n        font-size: 36px;\n        text-shadow: 3px 3px 1px gray;\n    }\n']);return en=function(){return e},e}function tn(){var e=Object(i.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n"]);return tn=function(){return e},e}var nn=u.default.div(tn()),rn=u.default.div(en());var an=Object(d.b)((function(e){return e}))((function(e){var t=$t(),n=Object(o.a)(t,3),r=n[0],l=n[1],c=n[2],i=e.todoReducer,d=i.completed,p=i.uncompleted;return c?a.a.createElement(u.ThemeProvider,{theme:"light"===r?m:f},a.a.createElement(nn,null,a.a.createElement(rn,null,"TO DO LIST"),a.a.createElement(w,null),a.a.createElement(ot,{completed:d,uncompleted:p}),a.a.createElement(Xe,null),a.a.createElement(Zt,{theme:r,setTheme:l}),a.a.createElement(mt,null))):a.a.createElement("div",null)})),ln=n(23),cn=n(9),on={todos:[],completed:0,uncompleted:0};var un=Object(cn.b)({todoReducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CREATE_TODO_ITEM":return Object(j.a)({},t,{todos:[].concat(Object(ln.a)(t.todos),[n.item]),uncompleted:t.uncompleted+1});case"DELETE_TODO_ITEM":return e=t.todos.filter((function(e){return e.id!==n.item.id})),n.item.isCompleted?Object(j.a)({},t,{todos:e,completed:t.completed-1}):Object(j.a)({},t,{todos:e,uncompleted:t.uncompleted-1});case"CHANGE_TODO_ITEM_COMPLETED":return e=t.todos.map((function(e){return e.id===n.item.id?Object(j.a)({},e,{isCompleted:!e.isCompleted}):e})),n.item.isCompleted?{todos:e,completed:t.completed-1,uncompleted:t.uncompleted+1}:{todos:e,completed:t.completed+1,uncompleted:t.uncompleted-1};case"UPDATE_TODO_ITEM":return e=t.todos.map((function(e){return e.id===n.item.id?e.isCompleted?Object(j.a)({},e.item,{isCompleted:!e.isCompleted,text:n.item.text}):Object(j.a)({},e,{text:n.item.text}):e})),n.item.isCompleted?{todos:e,completed:t.completed-1,uncompleted:t.uncompleted+1}:Object(j.a)({},t,{todos:e});case"CLEAR_COMPLETED_TODO_ITEM":return e=t.todos.filter((function(e){return!e.isCompleted})),Object(j.a)({},t,{todos:e,completed:0});default:return t}},todoDisplayFilterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DISPLAY_FILTER":return t.filter;default:return e}}}),dn=Object(cn.c)(un,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(d.a,{store:dn},a.a.createElement(an,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.4fa78a47.chunk.js.map