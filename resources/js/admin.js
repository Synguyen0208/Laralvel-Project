import { STATE_LOGIN, STATE_SIGNUP } from './Admin/components/AuthForm';
import GAListener from './Admin/components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from './Admin/components/Layout';
import PageSpinner from './Admin/components/PageSpinner';
import AuthPage from './Admin/pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './Admin/styles/reduction.scss';

const AlertPage = React.lazy(() => import('./Admin/pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('./Admin/pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('./Admin/pages/BadgePage'));
const StaffPage = React.lazy(() => import('./Admin/pages/StaffPage'));
const PartnerPage = React.lazy(() => import('./Admin/pages/PartnerPage'));
const ButtonGroupPage = React.lazy(() => import('./Admin/pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('./Admin/pages/ButtonPage'));
const CardPage = React.lazy(() => import('./Admin/pages/CardPage'));
const ChartPage = React.lazy(() => import('./Admin/pages/ChartPage'));
const DashboardPage = React.lazy(() => import('./Admin/pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('./Admin/pages/DropdownPage'));
const FormPage = React.lazy(() => import('./Admin/pages/FormPage'));
const InputGroupPage = React.lazy(() => import('./Admin/pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('./Admin/pages/ModalPage'));
const ProgressPage = React.lazy(() => import('./Admin/pages/ProgressPage'));
const TablePage = React.lazy(() => import('./Admin/pages/TablePage'));
const TypographyPage = React.lazy(() => import('./Admin/pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('./Admin/pages/WidgetPage'));

// const getBasename = () => {
//   return `/${process.env.PUBLIC_URL.split('/').pop()}`;
// };

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/admin/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/admin/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/admin" component={DashboardPage} />
                <Route exact path="/admin/login-modal" component={AuthModalPage} />
                <Route exact path="/admin/buttons" component={ButtonPage} />
                <Route exact path="/admin/cards" component={CardPage} />
                <Route exact path="/admin/widgets" component={WidgetPage} />
                <Route exact path="/admin/typography" component={TypographyPage} />
                <Route exact path="/admin/alerts" component={AlertPage} />
                <Route exact path="/admin/tables" component={TablePage} />
                <Route exact path="/admin/badges" component={BadgePage} />
                <Route exact path="/admin/staff" component={StaffPage} />
                <Route exact path="/admin/partner" component={PartnerPage} />
                <Route
                  exact
                  path="/admin/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/admin/dropdowns" component={DropdownPage} />
                <Route exact path="/admin/progress" component={ProgressPage} />
                <Route exact path="/admin/modals" component={ModalPage} />
                <Route exact path="/admin/forms" component={FormPage} />
                <Route exact path="/admin/input-groups" component={InputGroupPage} />
                <Route exact path="/admin/charts" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/admin" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
