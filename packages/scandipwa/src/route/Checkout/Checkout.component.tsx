/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
 * @package scandipwa/scandipwa
=======
 * @package scandipwa/scandipwa
>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js
 * @link https://github.com/scandipwa/scandipwa
 */

import { lazy, PureComponent, Suspense } from 'react';

import CheckoutGuestForm from 'Component/CheckoutGuestForm';
import ContentWrapper from 'Component/ContentWrapper';
import { Page } from 'Component/Header/Header.config';
import Loader from 'Component/Loader';
<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
import { ReactElement } from 'Type/Common.type';
import { scrollToTop } from 'Util/Browser';
import { appendWithStoreCode } from 'Util/Url';

import {
    CheckoutSteps,
    CheckoutStepUrl
=======
import { Addresstype } from 'Type/Account.type';
import {
    CheckoutStepType,
    PaymentMethodsType,
    ShippingMethodsType,
    StoreType
} from 'Type/Checkout.type';
import { TotalsType } from 'Type/MiniCart.type';
import { scrollToTop } from 'Util/Browser';
import { noopFn } from 'Util/Common';
import history from 'Util/History';
import { appendWithStoreCode } from 'Util/Url';

import {
    BILLING_STEP,
    CHECKOUT_URL,
    CHECKOUT_URL_REGEX,
    DETAILS_STEP,
    SHIPPING_STEP
>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js
} from './Checkout.config';
import { CheckoutComponentProps, CheckoutMapStep } from './Checkout.type';

import './Checkout.style';

export const CartCoupon = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "checkout-info" */
    'Component/CartCoupon'
));

export const CmsBlock = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "checkout-info" */
    'Component/CmsBlock'
));

export const CheckoutOrderSummary = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "checkout-info" */
    'Component/CheckoutOrderSummary'
));

export const CheckoutBilling = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "checkout-billing" */
    'Component/CheckoutBilling'
));

export const CheckoutShipping = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "checkout-shipping" */
    'Component/CheckoutShipping'
));

export const CheckoutSuccess = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "checkout-success" */
    'Component/CheckoutSuccess'
));

export const ExpandableContent = lazy(() => import(
    /* webpackMode: "lazy", webpackChunkName: "checkout-info" */
    'Component/ExpandableContent'
));

/** @namespace Route/Checkout/Component */
<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
export class Checkout extends PureComponent<CheckoutComponentProps> {
    static defaultProps: Partial<CheckoutComponentProps> = {
        paymentTotals: undefined,
        selectedStoreAddress: undefined,
=======
export class Checkout extends PureComponent {
    static propTypes = {
        setLoading: PropTypes.func.isRequired,
        setDetailsStep: PropTypes.func.isRequired,
        shippingMethods: ShippingMethodsType.isRequired,
        onShippingEstimationFieldsChange: PropTypes.func.isRequired,
        setHeaderState: PropTypes.func.isRequired,
        paymentMethods: PaymentMethodsType.isRequired,
        saveAddressInformation: PropTypes.func.isRequired,
        savePaymentInformation: PropTypes.func.isRequired,
        isLoading: PropTypes.bool,
        isDeliveryOptionsLoading: PropTypes.bool.isRequired,
        shippingAddress: Addresstype.isRequired,
        billingAddress: Addresstype.isRequired,
        estimateAddress: Addresstype.isRequired,
        checkoutTotals: TotalsType.isRequired,
        orderID: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        isEmailAvailable: PropTypes.bool.isRequired,
        selectedShippingMethod: PropTypes.string.isRequired,
        onEmailChange: PropTypes.func.isRequired,
        paymentTotals: TotalsType,
        checkoutStep: CheckoutStepType.isRequired,
        isCreateUser: PropTypes.bool.isRequired,
        onCreateUserChange: PropTypes.func.isRequired,
        onPasswordChange: PropTypes.func.isRequired,
        isGuestEmailSaved: PropTypes.bool.isRequired,
        goBack: PropTypes.func.isRequired,
        totals: TotalsType.isRequired,
        isMobile: PropTypes.bool.isRequired,
        isPickInStoreMethodSelected: PropTypes.bool.isRequired,
        handleSelectDeliveryMethod: PropTypes.func.isRequired,
        isInStoreActivated: PropTypes.bool.isRequired,
        cartTotalSubPrice: PropTypes.number,
        onShippingMethodSelect: PropTypes.func.isRequired,
        onStoreSelect: PropTypes.func.isRequired,
        selectedStoreAddress: StoreType,
        onCouponCodeUpdate: PropTypes.func,
        isSignedIn: PropTypes.bool.isRequired,
        isCartLoading: PropTypes.bool.isRequired,
        isVisibleEmailRequired: PropTypes.bool.isRequired,
        onChangeEmailRequired: PropTypes.func.isRequired
    };

    static defaultProps = {
        paymentTotals: {},
        selectedStoreAddress: {},
>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js
        isLoading: false,
        cartTotalSubPrice: null
    };

    stepMap: Record<CheckoutSteps, CheckoutMapStep> = {
        [ CheckoutSteps.SHIPPING_STEP ]: {
            number: 1,
            title: __('Personal information'),
            url: '/shipping',
            render: this.renderShippingStep.bind(this),
            areTotalsVisible: true
        },
        [ CheckoutSteps.BILLING_STEP ]: {
            number: 2,
            title: __('Payment'),
            url: '/billing',
            render: this.renderBillingStep.bind(this),
            areTotalsVisible: true
        },
        [ CheckoutSteps.DETAILS_STEP ]: {
            title: __('Thank you for your purchase!'),
            mobileTitle: __('Order details'),
            url: '/success',
            render: this.renderDetailsStep.bind(this),
            areTotalsVisible: false
        }
    };

<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
    stepsCount = 2;

    componentDidMount(): void {
        const { checkoutStep, history } = this.props;
        const { url } = this.stepMap[ checkoutStep ];

        this.updateHeader();

        history.replace(appendWithStoreCode(`${CheckoutStepUrl.CHECKOUT_URL}${url}`));
=======
    componentDidMount() {
        this.updateHeader();
        this.updateStepURL(true);
>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js
    }

    componentDidUpdate(prevProps: CheckoutComponentProps): void {
        const { checkoutStep } = this.props;
        const { checkoutStep: prevCheckoutStep } = prevProps;

        if (checkoutStep !== prevCheckoutStep) {
            this.updateHeader();
            this.updateStep();
        }
    }

    updateHeader(): void {
        const { setHeaderState, checkoutStep, goBack } = this.props;
        const { mobileTitle, title } = this.stepMap[ checkoutStep ];

        setHeaderState({
            name: checkoutStep === CheckoutSteps.DETAILS_STEP ? Page.CHECKOUT_SUCCESS : Page.CHECKOUT,
            title: mobileTitle || title,
            onBackClick: () => goBack()
        });
    }

<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
    updateStep(): void {
        const { checkoutStep, history } = this.props;
        const { url } = this.stepMap[ checkoutStep ];

        history.push(appendWithStoreCode(`${CheckoutStepUrl.CHECKOUT_URL}${url}`));
=======
    updateStepURL(isMounting = false) {
        const { checkoutStep, isCartLoading } = this.props;
        const { url } = this.stepMap[checkoutStep];
        const { location: { pathname = '' } } = history;

        if (!(isCartLoading && pathname.match(CHECKOUT_URL_REGEX))) {
            if (isMounting) {
                history.replace(appendWithStoreCode(`${ CHECKOUT_URL }${ url }`));
            } else {
                history.push(appendWithStoreCode(`${ CHECKOUT_URL }${ url }`));
            }
        }
    }

    updateStep() {
        this.updateStepURL();
>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js
        scrollToTop({ behavior: 'smooth' });
    }

    renderTitle(): ReactElement {
        const { checkoutStep, totals: { is_virtual } } = this.props;
        const { title = '', number } = this.stepMap[ checkoutStep ];

        if (is_virtual || !number) {
            return (
                <div block="Checkout" elem="Header">
                    <div block="Checkout" elem="Title">{ title }</div>
                </div>
            );
        }

        return (
            <div block="Checkout" elem="ProgressSection">
                <div block="Checkout" elem="Header">
                    <div block="Checkout" elem="Title">{ title }</div>
                    <div block="Checkout" elem="Step">
                        <span block="Checkout" elem="SelectedStep">{ number }</span>
                        <span block="Checkout" elem="StepsBorder">/</span>
                        <span block="Checkout" elem="TotalSteps">{ Object.keys(this.stepMap).length - 1 }</span>
                    </div>
                </div>
                <div block="Checkout" elem="StepBarTotal" />
                <div block="Checkout" elem="StepBarActive" mods={ { isSecond: number === 2 } } />
            </div>
        );
    }

    renderGuestForm(): ReactElement {
        const {
            isCreateUser,
            onEmailChange,
            onCreateUserChange,
            onPasswordChange,
            isGuestEmailSaved,
            isSignedIn,
            isVisibleEmailRequired
        } = this.props;

        if ((checkoutStep !== SHIPPING_STEP && !isBilling) || isSignedIn) {
            return null;
        }

        return (
            <CheckoutGuestForm
              isCreateUser={ isCreateUser }
              onEmailChange={ onEmailChange }
              onCreateUserChange={ onCreateUserChange }
              onPasswordChange={ onPasswordChange }
              isGuestEmailSaved={ isGuestEmailSaved }
              isVisibleEmailRequired={ isVisibleEmailRequired }
            />
        );
    }

    renderShippingStep(): ReactElement {
        const {
            shippingMethods,
            onShippingEstimationFieldsChange,
            saveAddressInformation,
            isDeliveryOptionsLoading,
            estimateAddress,
            isPickInStoreMethodSelected,
            handleSelectDeliveryMethod,
            onShippingMethodSelect,
            onStoreSelect,
            selectedStoreAddress,
            onChangeEmailRequired
        } = this.props;

        return (
            <Suspense fallback={ <Loader /> }>
                <CheckoutShipping
                  isLoading={ isDeliveryOptionsLoading }
                  shippingMethods={ shippingMethods }
                  saveAddressInformation={ saveAddressInformation }
                  onShippingEstimationFieldsChange={ onShippingEstimationFieldsChange }
                  onShippingMethodSelect={ onShippingMethodSelect }
                  estimateAddress={ estimateAddress }
                  handleSelectDeliveryMethod={ handleSelectDeliveryMethod }
                  isPickInStoreMethodSelected={ isPickInStoreMethodSelected }
                  onStoreSelect={ onStoreSelect }
                  selectedStoreAddress={ selectedStoreAddress }
                  onChangeEmailRequired={ onChangeEmailRequired }
                />
            </Suspense>
        );
    }

    renderBillingStep(): ReactElement {
        const {
            setLoading,
            setDetailsStep,
            shippingAddress,
            paymentMethods = [],
            savePaymentInformation,
            selectedShippingMethod,
            onChangeEmailRequired
        } = this.props;

        return (
            <Suspense fallback={ <Loader /> }>
                <CheckoutBilling
                  setLoading={ setLoading }
                  paymentMethods={ paymentMethods }
                  setDetailsStep={ setDetailsStep }
                  shippingAddress={ shippingAddress }
                  savePaymentInformation={ savePaymentInformation }
                  selectedShippingMethod={ selectedShippingMethod }
                  onChangeEmailRequired={ onChangeEmailRequired }
                />
            </Suspense>
        );
    }

    renderDetailsStep(): ReactElement {
        const {
            orderID,
            isEmailAvailable,
            email,
            billingAddress: {
                firstname,
                lastname
            } = {}
        } = this.props;

        return (
            <Suspense fallback={ <Loader /> }>
                <CheckoutSuccess
                  email={ email }
                  firstName={ firstname || '' }
                  lastName={ lastname || '' }
                  isEmailAvailable={ isEmailAvailable }
                  orderID={ orderID }
                />
            </Suspense>
        );
    }

    renderDiscountCode(): ReactElement {
        const {
            checkoutStep,
            totals: {
                items = [],
                prices: {
                    coupon_code
                } = {}
            }
        } = this.props;

        if (!items || items.length < 1 || checkoutStep !== CheckoutSteps.BILLING_STEP) {
            return null;
        }

        return (
            <ExpandableContent
              heading={ __('Have a discount code?') }
              mix={ { block: 'Checkout', elem: 'Discount' } }
              isArrow
            >
                <CartCoupon couponCode={ coupon_code } />
            </ExpandableContent>
        );
    }

    renderStep(): ReactElement {
        const { checkoutStep } = this.props;
        const { render } = this.stepMap[ checkoutStep ];

        if (render) {
            return render();
        }

        return null;
    }

    renderLoader(): ReactElement {
        const { isLoading } = this.props;

        return <Loader isLoading={ isLoading } />;
    }

<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
    renderSummary(showOnMobile = false): ReactElement {
=======
    renderFullPageLoader() {
        return (
            <main block="Checkout" elem="FullPageLoader">
                <Loader isLoading />
            </main>
        );
    }

    renderSummary(showOnMobile = false) {
>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js
        const {
            checkoutStep,
            paymentTotals,
            isMobile
        } = this.props;
<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
        const { areTotalsVisible } = this.stepMap[ checkoutStep ];
=======
        const { areTotalsVisible } = this.stepMap[checkoutStep];
        const { renderPromo } = this.renderPromo(true) || {};
>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js

        if (!areTotalsVisible
            || (showOnMobile && !isMobile)
            || (!showOnMobile && isMobile)
            || !paymentTotals
        ) {
            return null;
        }

        return (
            <>
                <CheckoutOrderSummary
                  checkoutStep={ checkoutStep }
                  totals={ paymentTotals }
                  isExpandable={ isMobile }
                  // eslint-disable-next-line react/jsx-no-bind
                  renderCmsBlock={ () => this.renderPromo(true) }
                  showItems
                />
                { !showOnMobile && this.renderDiscountCode() }
            </>
        );
    }

    renderPromo(showOnMobile = false): ReactElement {
        const { checkoutStep, isMobile } = this.props;
        const isBilling = checkoutStep === CheckoutSteps.BILLING_STEP;

        if ((!showOnMobile && isMobile) || checkoutStep === CheckoutSteps.DETAILS_STEP) {
            return null;
        }

        const {
            checkout_content: {
                [ isBilling ? 'checkout_billing_cms' : 'checkout_shipping_cms' ]: promo
            } = {}
        } = window.contentConfiguration || {};

        if (!promo) {
            return null;
        }

        return (
            <div block="Checkout" elem="Promo">
                <CmsBlock identifier={ promo } />
            </div>
        );
    }

    renderStoreInPickUpMethod(): ReactElement {
        const {
            isPickInStoreMethodSelected,
            handleSelectDeliveryMethod,
            checkoutStep,
            isInStoreActivated,
            shippingMethods,
            totals: {
                is_in_store_pickup_available: isInStorePickupAvailable
            }
        } = this.props;

        if (checkoutStep !== CheckoutSteps.SHIPPING_STEP || !isInStoreActivated) {
            return null;
        }

        if (!isInStorePickupAvailable) {
            return null;
        }

        return (
            <div
              block="Checkout"
              elem="DeliverySelect"
            >
                <button
                  block="Checkout"
                  elem="ShippingButton"
                  mix={ { block: 'Button', mods: { isHollow: !isPickInStoreMethodSelected } } }
                  type="button"
                  disabled={ !isPickInStoreMethodSelected }
                  onClick={ handleSelectDeliveryMethod }
                >
                    { __('Shipping') }
                </button>
                <button
                  block="Checkout"
                  elem="PickInStore"
                  mix={ { block: 'Button', mods: { isHollow: isPickInStoreMethodSelected } } }
                  type="button"
                  disabled={ isPickInStoreMethodSelected || shippingMethods?.length < 1 }
                  onClick={ handleSelectDeliveryMethod }
                >
                    { __('Pick in Store') }
                </button>
            </div>
        );
    }

<<<<<<< HEAD:packages/scandipwa/src/route/Checkout/Checkout.component.tsx
    render(): ReactElement {
=======
    render() {
        const { totals, checkoutStep } = this.props;

        if (totals.items.length < 1 && checkoutStep !== DETAILS_STEP) {
            return this.renderFullPageLoader();
        }

>>>>>>> scandipwa/master:packages/scandipwa/src/route/Checkout/Checkout.component.js
        return (
            <main block="Checkout">
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div>
                        <div block="Checkout" elem="Step">
                            { this.renderTitle() }
                            { this.renderStoreInPickUpMethod() }
                            { this.renderGuestForm() }
                            { this.renderStep() }
                            { this.renderLoader() }
                        </div>
                    </div>
                    <div>
                        <Suspense fallback={ <Loader /> }>
                            { this.renderSummary() }
                            { this.renderPromo() }
                        </Suspense>
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;
