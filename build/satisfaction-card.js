(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.blocks,r=window.wp.i18n,n=window.wp.blockEditor;var l=e.n(n);(0,a.registerBlockType)("travelagencytheme/satisfaction-card",{title:(0,r.__)("Satisfaction Card"),label:(0,r.__)("Satisfaction Card"),category:"travel-agency-theme",edit:function(){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"satisfactionCardWrapper"},(0,t.createElement)("p",null,"Text")))},save:function(){return(0,t.createElement)("div",{className:"satisfactionCardWrapper"},(0,t.createElement)(l().Content,null))}})})();