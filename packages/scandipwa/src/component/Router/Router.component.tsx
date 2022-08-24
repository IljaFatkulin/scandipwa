/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */

/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */

import {
    cloneElement,
    ErrorInfo,
    lazy,
    PureComponent,
    ReactChild,
    Suspense
} from 'react';
import { Router as ReactRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import ErrorHandler from 'Component/ErrorHandler';
import Loader from 'Component/Loader';
import Meta from 'Component/Meta';
import {
    PRINT_ALL_INVOICES,
    PRINT_ALL_REFUNDS,
    PRINT_ALL_SHIPMENT,
    PRINT_INVOICE,
    PRINT_ORDER as PRINT_ORDER_REQUEST,
    PRINT_REFUND,
    PRINT_SHIPMENT
} from 'Component/MyAccountOrderPrint/MyAccountOrderPrint.config';
import UrlRewrites from 'Route/UrlRewrites';
import { MyAccountTabs } from 'Type/Account.type';
import { ReactElement } from 'Type/Common.type';
import history from 'Util/History';

import {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
    RouterAfterItemType,
    RouterBeforeItemType,
    RouterItemType,
    RouterSwitchItemType
=======
    ACCOUNT_FORGOT_PASSWORD,
    AFTER_ITEMS_TYPE,
    BEFORE_ITEMS_TYPE,
    BREADCRUMBS,
    CART,
    CHANGE_PASSWORD,
    CHECKOUT,
    CMS_PAGE,
    COMPARE,
    CONFIRM_ACCOUNT,
    CONTACT_PAGE,
    COOKIE_POPUP,
    CREATE_ACCOUNT,
    DEMO_NOTICE,
    FOOTER,
    HEADER,
    HOME,
    LOGIN,
    MENU,
    MY_ACCOUNT,
    MY_ACCOUNT_ADDRESS,
    MY_ACCOUNT_DOWNLOADABLE,
    MY_ACCOUNT_NEWSLETTER,
    MY_ACCOUNT_ORDER,
    MY_ACCOUNT_ORDERS,
    MY_ACCOUNT_WISHLIST,
    NAVIGATION_TABS,
    NEW_VERSION_POPUP,
    NOTIFICATION_LIST,
    PRINT_ORDER,
    SEARCH,
    SHARED_WISHLIST,
    STYLE_GUIDE,
    SWITCH_ITEMS_TYPE,
    URL_REWRITES
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
} from './Router.config';
import { RouterComponentProps, RouterComponentState, RouterItem } from './Router.type';

import './Router.style';

export const CartPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "cart" */ 'Route/CartPage'));
export const Checkout = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "checkout" */ 'Route/Checkout'));
export const CmsPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "cms" */ 'Route/CmsPage'));
export const CookiePopup = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "notice" */ 'Component/CookiePopup'));
export const DemoNotice = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "notice" */ 'Component/DemoNotice'));
export const Header = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "header" */ 'Component/Header'));
export const HomePage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "cms" */ 'Route/HomePage'));
export const MyAccount = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "account" */ 'Route/MyAccount'));
export const PasswordChangePage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "misc" */ 'Route/PasswordChangePage'));
export const SearchPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "search" */ 'Route/SearchPage'));
export const SendConfirmationPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "cms" */ 'Route/SendConfirmationPage'));
export const ConfirmAccountPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "cms" */ 'Route/ConfirmAccountPage'));
export const MenuPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "cms" */ 'Route/MenuPage'));
export const Footer = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "footer" */ 'Component/Footer'));
export const NavigationTabs = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "header" */ 'Component/NavigationTabs'));
export const NewVersionPopup = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "notice" */ 'Component/NewVersionPopup'));
export const NotificationList = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "notice" */ 'Component/NotificationList'));
export const WishlistShared = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "misc" */ 'Route/WishlistSharedPage'));
export const OfflineNotice = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "notice" */ 'Component/OfflineNotice'));
export const ContactPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "contact" */ 'Route/ContactPage'));
export const ProductComparePage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "compare" */ 'Route/ProductComparePage'));
export const CreateAccountPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "account" */ 'Route/CreateAccount'));
export const LoginAccountPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "account" */ 'Route/LoginAccount'));
export const ForgotPasswordPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "account" */ 'Route/ForgotPassword'));
export const SomethingWentWrong = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "something-went-wrong" */ 'Route/SomethingWentWrong'));
export const StyleGuidePage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "styleguide" */ 'Route/StyleGuidePage'));
export const Breadcrumbs = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "header" */ 'Component/Breadcrumbs'));
export const OrderPrintPage = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "print-order" */ 'Route/OrderPrintPage'));

/** @namespace Component/Router/Component/withStoreRegex */
export const withStoreRegex = (path: string): string => window.storeRegexText.concat(path);

/** @namespace Component/Router/Component */
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
export class Router extends PureComponent<RouterComponentProps, RouterComponentState> {
    static defaultProps: Partial<RouterComponentProps> = {
=======
export class Router extends PureComponent {
    static propTypes = {
        isBigOffline: PropTypes.bool,
        isOnlyMainItems: PropTypes.bool.isRequired,
        setBigOfflineNotice: PropTypes.func.isRequired,
        currentUrl: PropTypes.string.isRequired
    };

    static defaultProps = {
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
        isBigOffline: false
    };

    [RouterItemType.BEFORE_ITEMS_TYPE] = [
        {
            component: <NotificationList />,
            position: 10,
            name: RouterBeforeItemType.NOTIFICATION_LIST
        },
        {
            component: <DemoNotice />,
            position: 15,
            name: RouterBeforeItemType.DEMO_NOTICE
        },
        {
            component: <Header />,
            position: 20,
            name: RouterBeforeItemType.HEADER
        },
        {
            component: <NavigationTabs />,
            position: 25,
            name: RouterBeforeItemType.NAVIGATION_TABS
        },
        {
            component: <Breadcrumbs />,
            position: 30,
            name: RouterBeforeItemType.BREADCRUMBS
        },
        {
            component: <NewVersionPopup />,
            position: 35,
            name: RouterBeforeItemType.NEW_VERSION_POPUP
        }
    ];

    [RouterItemType.SWITCH_ITEMS_TYPE] = [
        {
            component: <Route path={ withStoreRegex('/') } exact render={ ({ currentUrl }) => <HomePage currentUrl={ currentUrl } /> } />,
            position: 10,
            name: RouterSwitchItemType.HOME
        },
        {
            component: <Route path={ withStoreRegex('/search/:query/') } render={ () => <SearchPage /> } />,
            position: 25,
            name: RouterSwitchItemType.SEARCH
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component: <Route path={ withStoreRegex('/page') } render={ (props) => <CmsPage { ...props } /> } />,
=======
            component: <Route path={ withStoreRegex('/page') } render={ ({ currentUrl, match }) => <CmsPage match={ match } currentUrl={ currentUrl } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 40,
            name: RouterSwitchItemType.CMS_PAGE
        },
        {
            component: <Route path={ withStoreRegex('/cart') } exact render={ () => <CartPage /> } />,
            position: 50,
            name: RouterSwitchItemType.CART
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component: <Route path={ withStoreRegex('/checkout/:step?') } render={ (props) => <Checkout { ...props } /> } />,
=======
            component: <Route path={ withStoreRegex('/checkout/:step?') } render={ ({ match }) => <Checkout match={ match } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 55,
            name: RouterSwitchItemType.CHECKOUT
        },
        {
            component: <Route path={ withStoreRegex('/customer/account/createPassword/') } render={ () => <PasswordChangePage /> } />,
            position: 60,
            name: RouterSwitchItemType.CHANGE_PASSWORD
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component: <Route path={ withStoreRegex('/customer/account/create/') } render={ (props) => <CreateAccountPage { ...props } /> } />,
=======
            component: <Route path={ withStoreRegex('/customer/account/create/') } render={ () => <CreateAccountPage /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 61,
            name: RouterSwitchItemType.CREATE_ACCOUNT
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component: <Route path={ withStoreRegex('/customer/account/login/') } render={ (props) => <LoginAccountPage { ...props } /> } />,
=======
            component: <Route path={ withStoreRegex('/customer/account/login/') } render={ () => <LoginAccountPage /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 62,
            name: RouterSwitchItemType.LOGIN
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component: <Route path={ withStoreRegex('/customer/account/forgotpassword/') } render={ (props) => <ForgotPasswordPage { ...props } /> } />,
=======
            component: <Route path={ withStoreRegex('/customer/account/forgotpassword/') } render={ () => <ForgotPasswordPage /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 63,
            name: RouterSwitchItemType.ACCOUNT_FORGOT_PASSWORD
        },
        {
            component: <Route path={ withStoreRegex('/customer/account/confirmation') } render={ () => <SendConfirmationPage /> } />,
            position: 64,
            name: CONFIRM_ACCOUNT
        },
        {
            component: <Route path={ withStoreRegex('/customer/account/confirm') } render={ () => <ConfirmAccountPage /> } />,
            position: 65,
            name: RouterSwitchItemType.CONFIRM_ACCOUNT
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            component: <Route path={ withStoreRegex('/sales/order/view/order_id/:orderId?') } render={ (props) => <MyAccount { ...{ ...props, selectedTab: MyAccountTabs.MY_ORDERS } } /> } />,
=======
            component: <Route path={ withStoreRegex('/sales/order/view/order_id/:orderId?') } render={ ({ match }) => <MyAccount match={ match } selectedTab={ MY_ORDERS } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 70,
            name: RouterSwitchItemType.MY_ACCOUNT_ORDER
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            component: <Route path={ withStoreRegex('/sales/order/history') } render={ (props) => <MyAccount { ...{ ...props, selectedTab: MyAccountTabs.MY_ORDERS } } /> } />,
=======
            component: <Route path={ withStoreRegex('/sales/order/history') } render={ ({ match }) => <MyAccount match={ match } selectedTab={ MY_ORDERS } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 71,
            name: RouterSwitchItemType.MY_ACCOUNT_ORDERS
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            component: <Route path={ withStoreRegex('/downloadable/customer/products') } render={ (props) => <MyAccount { ...{ ...props, selectedTab: MyAccountTabs.MY_DOWNLOADABLE } } /> } />,
=======
            component: <Route path={ withStoreRegex('/downloadable/customer/products') } render={ ({ match }) => <MyAccount match={ match } selectedTab={ MY_DOWNLOADABLE } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 72,
            name: RouterSwitchItemType.MY_ACCOUNT_DOWNLOADABLE
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            component: <Route path={ withStoreRegex('/wishlist') } render={ (props) => <MyAccount { ...{ ...props, selectedTab: MyAccountTabs.MY_WISHLIST } } /> } />,
=======
            component: <Route path={ withStoreRegex('/wishlist') } render={ ({ match }) => <MyAccount match={ match } selectedTab={ MY_WISHLIST } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 73,
            name: RouterSwitchItemType.MY_ACCOUNT_WISHLIST
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            component: <Route path={ withStoreRegex('/customer/address') } render={ (props) => <MyAccount { ...{ ...props, selectedTab: MyAccountTabs.ADDRESS_BOOK } } /> } />,
=======
            component: <Route path={ withStoreRegex('/customer/address') } render={ ({ match }) => <MyAccount match={ match } selectedTab={ ADDRESS_BOOK } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 74,
            name: RouterSwitchItemType.MY_ACCOUNT_ADDRESS
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            component: <Route path={ withStoreRegex('/newsletter/manage') } render={ (props) => <MyAccount { ...{ ...props, selectedTab: MyAccountTabs.NEWSLETTER_SUBSCRIPTION } } /> } />,
=======
            component: <Route path={ withStoreRegex('/newsletter/manage') } render={ ({ match }) => <MyAccount match={ match } selectedTab={ NEWSLETTER_SUBSCRIPTION } /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 75,
            name: RouterSwitchItemType.MY_ACCOUNT_NEWSLETTER
        },
        {
            component: <Route path={ withStoreRegex('/customer/account/:tab?') } render={ ({ match }) => <MyAccount match={ match } /> } />,
            position: 76,
            name: RouterSwitchItemType.MY_ACCOUNT
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            component: <Route path={ withStoreRegex('/menu') } render={ (props) => <MenuPage { ...props } /> } />,
=======
            component: <Route path={ withStoreRegex('/menu') } render={ () => <MenuPage /> } />,
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            position: 80,
            name: RouterSwitchItemType.MENU
        },
        {
            component: <Route path={ withStoreRegex('/wishlist/shared/:code') } render={ ({ match }) => <WishlistShared match={ match } /> } />,
            position: 81,
            name: RouterSwitchItemType.SHARED_WISHLIST
        },
        {
            component: <Route path={ withStoreRegex('/contact') } render={ () => <ContactPage /> } />,
            position: 82,
            name: RouterSwitchItemType.CONTACT_PAGE
        },
        {
            component: <Route path={ withStoreRegex('/compare') } render={ () => <ProductComparePage /> } />,
            position: 83,
            name: RouterSwitchItemType.COMPARE
        },
        {
            component: <Route path={ withStoreRegex('/styleguide') } render={ () => <StyleGuidePage /> } />,
            position: 84,
            name: RouterSwitchItemType.STYLE_GUIDE
        },
        {
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
=======
            component: <Route path={ withStoreRegex('/sales/order/print/order_id/:orderId?') } render={ ({ match }) => <OrderPrintPage match={ match } orderPrintRequest={ PRINT_ORDER_REQUEST } /> } />,
            position: 90,
            name: PRINT_ORDER
        },
        {
            component: <Route path={ withStoreRegex('/sales/order/printInvoice/order_id/:orderId?') } render={ ({ match }) => <OrderPrintPage match={ match } orderPrintRequest={ PRINT_ALL_INVOICES } /> } />,
            position: 91,
            name: PRINT_ORDER
        },
        {
            component: <Route path={ withStoreRegex('/sales/order/printShipment/order_id/:orderId?') } render={ ({ match }) => <OrderPrintPage match={ match } orderPrintRequest={ PRINT_ALL_SHIPMENT } /> } />,
            position: 92,
            name: PRINT_ORDER
        },
        {
            component: <Route path={ withStoreRegex('/sales/order/printCreditmemo/order_id/:orderId?') } render={ ({ match }) => <OrderPrintPage match={ match } orderPrintRequest={ PRINT_ALL_REFUNDS } /> } />,
            position: 93,
            name: PRINT_ORDER
        },
        {
            component: <Route path={ withStoreRegex('/sales/order/printInvoice/invoice_id/:invoiceId?') } render={ ({ match }) => <OrderPrintPage match={ match } orderPrintRequest={ PRINT_INVOICE } /> } />,
            position: 94,
            name: PRINT_ORDER
        },
        {
            component: <Route path={ withStoreRegex('/sales/order/printShipment/shipment_id/:shipmentId?') } render={ ({ match }) => <OrderPrintPage match={ match } orderPrintRequest={ PRINT_SHIPMENT } /> } />,
            position: 95,
            name: PRINT_ORDER
        },
        {
            component: <Route path={ withStoreRegex('/sales/order/printCreditmemo/creditmemo_id/:refundId?') } render={ ({ match }) => <OrderPrintPage match={ match } orderPrintRequest={ PRINT_REFUND } /> } />,
            position: 95,
            name: PRINT_ORDER
        },
        {
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            component: <Route render={ (props) => <UrlRewrites { ...props } /> } />,
            position: 1000,
            name: RouterSwitchItemType.URL_REWRITES
        }
    ];

    [RouterItemType.AFTER_ITEMS_TYPE] = [
        {
            component: <Footer />,
            position: 10,
            name: RouterAfterItemType.FOOTER
        },
        {
            component: <CookiePopup />,
            position: 20,
            name: RouterAfterItemType.COOKIE_POPUP
        }
    ];

    state: RouterComponentState = {
        hasError: false,
        errorDetails: {}
    };

    componentDidCatch(err: Error, info: ErrorInfo): void {
        this.setState({
            hasError: true,
            errorDetails: { err, info }
        });
    }

    getSortedItems(type: RouterItemType): RouterItem[] {
        const sortedRouteItems: RouterItem[] = this[type].sort(
            (a, b) => a.position - b.position
        );
        const filteredRouteItems: RouterItem[] = sortedRouteItems.filter(
            (entry: RouterItem) => {
                if (!entry.component) {
                    // eslint-disable-next-line no-console
                    console.warn('There is an item without a component property declared in main router.');

                    return false;
                }

                return true;
            }
        );

        return filteredRouteItems;
    }

    handleErrorReset(): void {
        this.setState({ hasError: false });
    }

    renderComponentsOfType(type: RouterItemType): ReactElement {
        return this.getSortedItems(type)
            .map(({ position, component }: RouterItem) => cloneElement(component, { key: position }));
    }

    renderSectionOfType(type: RouterItemType): ReactElement {
        return (
            <Suspense fallback={ this.renderFallbackPage() }>
                { this.renderComponentsOfType(type) }
            </Suspense>
        );
    }

    renderMainItems(): ReactElement {
        const { isBigOffline } = this.props;

        if (!navigator.onLine && isBigOffline) {
            return <OfflineNotice isPage />;
        }

        return (
            <Switch>
                { this.renderComponentsOfType(RouterItemType.SWITCH_ITEMS_TYPE) }
            </Switch>
        );
    }

    renderErrorRouterContent(): ReactElement {
        const { errorDetails } = this.state;

        return (
            <SomethingWentWrong
              onClick={ this.handleErrorReset }
              errorDetails={ errorDetails }
            />
        );
    }

<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
    renderFallbackPage(): ReactChild {
=======
    renderFallbackPage(showLoader = false) {
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
        return (
            <main block="Router" elem="Loader">
                { showLoader && <Loader isLoading /> }
            </main>
        );
    }

<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
    renderDefaultRouterContent(): ReactElement {
        if (location.pathname.match('/styleguide')) {
=======
    renderDefaultRouterContent() {
        const { isOnlyMainItems } = this.props;
        const { setBigOfflineNotice } = this.props;

        if (isOnlyMainItems) {
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
            return this.renderMainItems();
        }

        return (
<<<<<<< HEAD:packages/scandipwa/src/component/Router/Router.component.tsx
            <>
                { this.renderSectionOfType(RouterItemType.BEFORE_ITEMS_TYPE) }
                { this.renderMainItems() }
                { this.renderSectionOfType(RouterItemType.AFTER_ITEMS_TYPE) }
            </>
=======
            <ErrorHandler setBigOfflineNotice={ setBigOfflineNotice }>
                    <div block="Router" elem="MainItems">
                        { this.renderMainItems() }
                    </div>
                    { this.renderSectionOfType(AFTER_ITEMS_TYPE) }
            </ErrorHandler>
>>>>>>> scandipwa/master:packages/scandipwa/src/component/Router/Router.component.js
        );
    }

    renderRouterContent(): ReactElement {
        const { hasError } = this.state;

        if (hasError) {
            return this.renderErrorRouterContent();
        }

        return this.renderDefaultRouterContent();
    }

    render(): ReactElement {
        return (
            <>
                <Meta />
                <ReactRouter history={ history }>
                    { this.renderSectionOfType(BEFORE_ITEMS_TYPE) }
                    <Suspense fallback={ this.renderFallbackPage(true) }>
                        { this.renderRouterContent() }
                    </Suspense>
                </ReactRouter>
            </>
        );
    }
}

export default Router;
