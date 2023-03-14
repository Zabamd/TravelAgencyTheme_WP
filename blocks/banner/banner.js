import { Button, PanelBody, PanelRow } from "@wordpress/components";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./banner.scss";

wp.blocks.registerBlockType("travelagencytheme/banner", {
  title: __("Banner"),
  label: __("Banner"),
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
  },
  category: "travel-agency-theme",
  edit: editComponent,
  save: saveComponent,
});

function editComponent() {
  const BlockTemplate = [
    ["core/paragraph", { className: "topHeading", placeholder: "Top Heading" }],
    [
      "core/paragraph",
      { className: "mainHeading", placeholder: "Main Heading" },
    ],
    ["core/button", { className: "buttonHeading", placeholder: "Button Text" }],
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Background Image")} initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="bannerEditorScreenWrapper">
        <InnerBlocks template={BlockTemplate} templateLock="insert" />
      </div>
    </>
  );
}

function saveComponent() {
  return (
    <div>
      <InnerBlocks.Content />
    </div>
  );
}
