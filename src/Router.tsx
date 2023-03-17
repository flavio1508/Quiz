import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Constant from './Constant';

import Start from './container/quiz/Start';
import Question from './container/quiz/Question';
import Result from './container/quiz/Result';

import FourZeroFour from './container/error/FourZeroFour';

const Router = (props:any) => {
    return(
        <Switch>
            <Route exact={true} path={Constant.url.home} component={Start}/>
            <Route exact={true} path={Constant.url.start} component={Start}/>
            <Route exact={true} path={Constant.url.question} component={Question}/>
            <Route exact={true} path={Constant.url.result} component={Result}/>

            <Route  component={FourZeroFour}/>
        </Switch>
    )
}
export default Router;