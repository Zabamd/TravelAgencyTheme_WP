<?php
class BlockModel
{
    private string $blockName;

    public function __construct(string $name)
    {
        $this->blockName = $name;
        add_action("init", [$this, "blockInit"]);
    }

    public function blockInit()
    {
        $this->registerScript();
        $this->registerStyle();
    }

    private function registerScript(): void
    {
        wp_register_script(
            $this->blockName . "_blockScript",
            get_stylesheet_directory_uri() .
                "/build/" .
                $this->blockName .
                ".js",
            ["wp-blocks", "wp-editor"]
        );
        register_block_type("travelagencytheme/" . $this->blockName, [
            "editor_script" => $this->blockName . "_blockScript",
        ]);
    }
    private function registerStyle(): void
    {
        wp_enqueue_style(
            $this->blockName . "_style",
            get_theme_file_uri("/build/" . $this->blockName . ".css")
        );
        add_editor_style("/build/" . $this->blockName . ".css");
    }
}
?>
