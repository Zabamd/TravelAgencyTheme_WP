(()=>{"use strict";const e=window.wp.element,n=window.wp.components,t=window.wp.blockEditor,a=window.wp.i18n;wp.blocks.registerBlockType("travelagencytheme/banner",{title:(0,a.__)("Banner"),label:(0,a.__)("Banner"),supports:{align:["full"]},attributes:{align:{type:"string",default:"full"}},category:"travel-agency-theme",edit:function(){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:(0,a.__)("Background Image"),initialOpen:!0},(0,e.createElement)(n.PanelRow,null,(0,e.createElement)(t.MediaUpload,null)))),(0,e.createElement)("div",{className:"bannerEditorScreenWrapper"},(0,e.createElement)(t.InnerBlocks,{template:[["core/paragraph",{className:"topHeading",placeholder:"Top Heading"}],["core/paragraph",{className:"mainHeading",placeholder:"Main Heading"}],["core/button",{className:"buttonHeading",placeholder:"Button Text"}]],templateLock:"insert"})))},save:function(){return(0,e.createElement)("div",null,(0,e.createElement)(t.InnerBlocks.Content,null))}})})();