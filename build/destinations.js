(()=>{"use strict";const e=window.wp.element,t=window.wp.blockEditor,a=window.wp.blocks,n=window.wp.i18n;(0,a.registerBlockType)("travelagencytheme/destinations",{title:(0,n.__)("Destinations"),label:(0,n.__)("Destinations"),category:"travel-agency-theme",attributes:{DestinationsList:{type:"array"}},edit:function(){return(0,e.createElement)("div",{className:"sectionWrapper"},(0,e.createElement)(t.InnerBlocks,{template:[["core/heading",{placeholder:"Section Heading",className:"sectionHeading"}],["core/paragraph",{placeholder:"Section Content",className:"sectionParagraph"}],["core/group",{className:"cardWrapper",layout:{type:"flex",flexWrap:"nowrap"}},[["travelagencytheme/destination-card"],["travelagencytheme/destination-card"],["travelagencytheme/destination-card"]]]],templateLock:"insert"}))},save:function(){return(0,e.createElement)("div",{className:"sectionWrapper"},(0,e.createElement)(t.InnerBlocks.Content,null))}})})();