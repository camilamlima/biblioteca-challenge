import React, { Component, Fragment } from 'react';

export * from './Admin';
export * from './Home';

export class NotFound extends Component {
  
  render() {
    return (
      <Fragment>
        <h2>Pagina Não Encontrada</h2>
        
      </Fragment>
    );
  }
}
