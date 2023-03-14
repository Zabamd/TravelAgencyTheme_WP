<?php
namespace Zabamd\TravelAgencyTheme\Utility;

class BlockModel
{
    private string $blockName;

    public function __construct(string $name) {
        $this->blockName = $name;
    }
}
?>