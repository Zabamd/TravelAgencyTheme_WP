(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var n=a.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=window.wp.element,a=e.p+"images/Destination1.40b26d32.png",n=window.wp.blocks,r=window.wp.i18n,i=window.wp.components,l=window.wp.blockEditor;(0,n.registerBlockType)("travelagencytheme/destination-card",{title:(0,r.__)("Destination Card"),Label:(0,r.__)("Destination Card"),category:"travel-agency-theme",attributes:{imageURL:{type:"string",default:a}},edit:function(e){let{attributes:a,setAttributes:n}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(i.PanelBody,{title:(0,r.__)("Card Background Image"),initialOpen:!0},(0,t.createElement)(i.PanelRow,null,(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{allowedTypes:["image"],onSelect:e=>{n({imageURL:e.url})},render:e=>{let{open:a}=e;return(0,t.createElement)(i.Button,{className:"menuButton",onClick:a},"Choose Card Image")}}))))),(0,t.createElement)("div",{className:"destinationCard",style:{backgroundImage:`url(${a.imageURL})`}},(0,t.createElement)(l.InnerBlocks,{template:[["core/paragraph",{className:"destinationCardName",placeholder:"Card Name"}],["core/paragraph",{className:"destinationCardPrice",placeholder:"Card Price"}]],templateLock:"insert"})))},save:function(e){let{attributes:a}=e;return(0,t.createElement)("div",{className:"destinationCard",style:{backgroundImage:`url(${a.imageURL})`}},(0,t.createElement)(l.InnerBlocks.Content,null))}})})();