<?php
require_once "utility/BlockModel.php";

class TravelAgencyTheme
{
    public function __construct()
    {
        add_action("init", [$this, "enqueueStyle"]);
        add_action("after_setup_theme", [$this, "enqueueStyle"]);
        add_filter("block_categories_all", [$this, "registerBlockCategories"]);
    }

    public function addThemeSupport()
    {
        add_theme_support("title-tag");
        add_theme_support("editor-styles");
        add_theme_support("wp-block-styles");
    }

    public function enqueueStyle(): void
    {
        wp_enqueue_style("main-style", get_stylesheet_uri());
    }

    public function registerBlockCategories(array $block_categories): array
    {
        array_unshift($block_categories, [
            "slug" => "travel-agency-theme",
            "title" => __("Travel Agency Theme"),
            "icon" => null,
        ]);
        return $block_categories;
    }
}

//Theme Init
$init = new TravelAgencyTheme();

//Blocks Init
$banner = new BlockModel("banner");
?>
