(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=window.wp.element,n=window.wp.components,r=window.wp.blockEditor,a=window.wp.i18n,l=e.p+"images/landingPagecover.b427dfe7.png";wp.blocks.registerBlockType("travelagencytheme/banner",{title:(0,a.__)("Banner"),label:(0,a.__)("Banner"),supports:{align:["full"]},attributes:{align:{type:"string",default:"full"},imageUrl:{type:"string",default:l}},category:"travel-agency-theme",edit:function(e){let{attributes:l,setAttributes:o}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,a.__)("Background Image"),initialOpen:!0},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(r.MediaUploadCheck,null,(0,t.createElement)(r.MediaUpload,{allowedTypes:["image"],onSelect:e=>{o({imageUrl:e.url})},render:e=>{let{open:r}=e;return(0,t.createElement)(n.Button,{className:"menuButton",onClick:r},"Choose Banner Image")}}))))),(0,t.createElement)("div",{className:"bannerEditorScreenWrapper",style:{backgroundImage:`url(${l.imageUrl})`}},(0,t.createElement)(r.InnerBlocks,{template:[["core/paragraph",{className:"topHeading",placeholder:"Top Heading"}],["core/paragraph",{className:"mainHeading",placeholder:"Main Heading"}],["core/button",{className:"buttonHeading",placeholder:"Button Text"}]],templateLock:"insert"})))},save:function(e){let{attributes:n}=e;return(0,t.createElement)("div",{className:"bannerEditorScreenWrapper",style:{backgroundImage:`url(${n.imageUrl})`}},(0,t.createElement)(r.InnerBlocks.Content,null))}})})();