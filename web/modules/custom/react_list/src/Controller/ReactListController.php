<?php

namespace Drupal\react_list\Controller;

use Drupal\Core\Controller\ControllerBase;

class ReactListController extends ControllerBase
{
    public function content()
    {
        return [
            "#markup" => '<div id="react-app"></div>',
            "#attached" => [
                "library" => ["react_list/react_list"],
            ],
        ];
    }
}