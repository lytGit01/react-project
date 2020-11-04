import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Html5 from '../page/routerList/html5';
import Css3 from '..//page/routerList/css3';

class Routes extends React.Component {
    public render () {
        return (
                <Switch>
                    <Route path='/html5' component={Html5}></Route>
                    <Route path='/css3' component={Css3}></Route>
                </Switch>
        )
    }
}

export default Routes;
