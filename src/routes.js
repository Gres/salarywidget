import React, {Fragment, lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';

import LoadingScreen from './components/LoadingScreen';

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<LoadingScreen/>}>
        <Switch>
            {routes.map((route, i) => {
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={props => (
                            <Layout>
                                {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                            </Layout>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

const routes = [
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('./views/errors/NotFoundView'))
    },
    {
        path: '/',
        layout: DashboardLayout,
        routes: [
            {
                exact: true,
                path: '/dashboard',
                component: lazy(() => import('./views/Dashboard'))
            },
            {
                exact: true,
                path: '/city/:citySlug',
                component: lazy(() => import('./views/Cities'))
            },
        ]
    },
    {
        path: '*',
        layout: MainLayout,
        routes: [
            {
                exact: true,
                path: '/',
                component: <div>main</div>
            },
            {
                component: () => <Redirect to="/404"/>
            }
        ]
    }
];

export default routes;
