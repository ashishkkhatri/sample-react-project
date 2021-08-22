/*
 * *********************************
 *  * Copyright © 2020 Ambikaprasad Khatri. All Rights Reserved.
 *  * 
 *  * NOTICE:  All information contained herein is, and remains the property of Ambikaprasad Khatri. 
 *  * The intellectual and technical concepts contained herein are proprietary to Ambikaprasad Khatri 
 *  * and are protected by trade secret or copyright law. Dissemination of this information or 
 *  * reproduction of this material is strictly forbidden unless prior written permission is obtained
 *  * from Ambikaprasad Khatri.
 *  *********************************
 */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FirstPost from './FirstPost';
import App from './App';

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/first">First Post</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/first">
          <FirstPost />
        </Route>
      </Switch>
    </Router>
  );
}