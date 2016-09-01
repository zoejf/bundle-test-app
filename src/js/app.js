import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import mainReducer from './modules/main';
import AppView from './appView';
import Homepage from './homepage';
import QuestionsForm from './questionsForm';

const combinedReducers = combineReducers({
	main: mainReducer,
  routing: routerReducer
});
const devTools = window.devToolsExtension ? [window.devToolsExtension()] : [];


const Store = createStore(
  combinedReducers,
  compose(...devTools)
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
