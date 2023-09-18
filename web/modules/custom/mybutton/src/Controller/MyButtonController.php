<?php

namespace Drupal\mybutton\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Response;

class MyButtonController extends ControllerBase {

  public function content () {

    //Create a button element with an id and an onclick attribute
    $button = [
      '#type' => 'html_tag',
      '#tag' => 'button',
      '#value' => $this->t('Click this button'),
      '#attributes' => [
        'id' => 'mybutton',
        'onclick' => $this->saysWelcome(),
      ]
    ];
     return $button;
}
    public function saysWelcome() {
      return "alert('Button clicked...')";
  }
}