import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import createLogger from 'redux-logger';
import AppView from './appView';
import Homepage from './homepage';
import QuestionsForm from './questionsForm';

const loggerMiddleware = createLogger();
const combinedReducers = combineReducers({
  routing: routerReducer
});

const Store = createStore(
  combinedReducers,
  applyMiddleware(
    loggerMiddleware
  )
)
const history = syncHistoryWithStore(browserHistory, Store);

export function boot({container}) {
  render(app(), container);
}

export function app() {
	return (
		<Provider store ={Store}>
			<div>
				<Router history={history}>
					<Route path="/" component={AppView}>
						<IndexRedirect to="home" />
						<Route path="/home" component={Homepage}/>
						<Route path="/questions" component={QuestionsForm}/>
					</Route>
				</Router>
			</div>
		</Provider>
	)
}
