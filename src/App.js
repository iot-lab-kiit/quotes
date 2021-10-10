import React, {Suspense} from "react";
import {Route, Switch, Redirect} from 'react-router-dom'

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const EditQuote =  React.lazy(() => import('./pages/EditQuote'));

function App() {
    return (
        <Layout>
            <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes"/>
                    </Route>
                    <Route path="/quotes" exact>
                        <AllQuotes/>
                    </Route>
                    <Route path="/quotes/:quoteId">
                        <QuoteDetail/>
                    </Route>
                    <Route path="/edit-quote/:quoteId">
                        <EditQuote/>
                    </Route>
                    <Route path="/new-quote">
                        <NewQuote/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    );
}

export default App;
