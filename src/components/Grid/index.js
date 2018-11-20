import React, { Component } from 'react';
import { GridContainer, GameFactoryConsumer, GridOverlay } from '@Elements';

import Cell from '../Cell';

export default class Grid extends Component {
  cellRender(number, methods) {
    return number.map((i, _) => (
      <Cell key={_} number={i} index={_} clickMove={methods.clickMove} />
    ));
  }
  render() {
    return (
      <GameFactoryConsumer>
        {({ values, methods }) => (
          <GridContainer>
            {this.cellRender(values.numbers, methods)}
            <GridOverlay />
          </GridContainer>
        )}
      </GameFactoryConsumer>
    );
  }
}
