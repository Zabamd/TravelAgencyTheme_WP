import { __ } from "@wordpress/i18n";
import "./banner.scss";

wp.blocks.registerBlockType("travelagencytheme/banner", {
  title: "banner",
  label: __("Banner"),
  category: "travel-agency-theme",
  edit: editComponent,
  save: saveComponent,
});

function editComponent() {
  return (
    <div>
      <h1 className="banner_text">Hello</h1>
    </div>
  );
}

function saveComponent() {
  return (
    <div>
      <h1>Hello Front</h1>
    </div>
  );
}
