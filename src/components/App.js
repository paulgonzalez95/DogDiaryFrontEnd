import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//browserHistory allows us to use /dogs url without it requesting for the route from the back end
//ensures that that route is handled in the front end

import {Root} from "./Root";
import Dogs from './dogs/dogs.js';

class App extends React.Component{



      render() {
        return (

          <Router>
              <Route path={"/"} component={Root} />
          </Router>

              );
         }
  }



export default App;
