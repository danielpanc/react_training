import React, { Component} from 'react';
// import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import HeaderContainer from './modules/header/containers/HeaderContainer';
import Content from './modules/content';


class App extends Component {
  // static propTypes = {
  //   store: PropTypes.object.isRequired,
  // }


  render() {
    // const { store } = this.props;
    // <Provider store={store} >
    // </Provider>
    return (
      <BrowserRouter>
        <div>
          <Grid>
            <HeaderContainer/>
            <Content />
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
