import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`
  animation: 2s ${keyframes` ${bounce}`} infinite;
`;

export default class ReactBounce extends Component {
  render() {
    return (
      <Bounce>
        <h1>Drupal loves React</h1>
      </Bounce>
    );
  }
}
