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

import { PureComponent } from 'react';

import CartCoupon from 'Component/CartCoupon';
import CartItem from 'Component/CartItem';
import CheckoutOrderSummary from 'Component/CheckoutOrderSummary/CheckoutOrderSummary.container';
import CmsBlock from 'Component/CmsBlock';
import ContentWrapper from 'Component/ContentWrapper';
import ExpandableContent from 'Component/ExpandableContent';
import Loader from 'Component/Loader';
import LockIcon from 'Component/LockIcon';
import ProductLinks from 'Component/ProductLinks';
import { TotalsObject } from 'Query/Checkout.type';
import { LinkedProductType } from 'Store/LinkedProducts/LinkedProducts.type';
import { ReactElement } from 'Type/Common.type';
import { noopFn } from 'Util/Common';

import { CartPageComponentProps } from './CartPage.type';

import './CartPage.style';

/** @namespace Route/CartPage/Component */
<<<<<<< HEAD:packages/scandipwa/src/route/CartPage/CartPage.component.tsx
export class CartPage extends PureComponent<CartPageComponentProps> {
    static defaultProps: Partial<CartPageComponentProps> = {
        hasOutOfStockProductsInCart: false,
        onCartItemLoading: noopFn
=======
export class CartPage extends PureComponent {
    static propTypes = {
        totals: TotalsType.isRequired,
        onCheckoutButtonClick: PropTypes.func.isRequired,
        hasOutOfStockProductsInCart: PropTypes.bool,
        onCouponCodeUpdate: PropTypes.func,
        onCartItemLoading: PropTypes.func,
        device: DeviceType.isRequired,
        isInitialLoad: PropTypes.bool.isRequired,
        minimumOrderAmountReached: PropTypes.bool,
        minimumOrderDescription: PropTypes.string,
        areDetailsLoaded: PropTypes.bool
    };

    static defaultProps = {
        hasOutOfStockProductsInCart: false,
        onCouponCodeUpdate: noopFn,
        onCartItemLoading: null,
        minimumOrderAmountReached: true,
        minimumOrderDescription: '',
        areDetailsLoaded: false
>>>>>>> scandipwa/master:packages/scandipwa/src/route/CartPage/CartPage.component.js
    };

    renderCartItems(): ReactElement {
        const {
            totals: {
                items = [],
                prices: {
                    quote_currency_code = ''
                } = {}
            },
            onCartItemLoading,
            isInitialLoad
        } = this.props;

        if (!items || isInitialLoad) {
            return (
                <div block="CartPage" elem="InitialLoaderContainer">
                    <Loader isLoading />
                </div>
            );
        }

        if (!items.length) {
            return (
                <p block="CartPage" elem="Empty">{ __('There are no products in cart.') }</p>
            );
        }

        return (
            <>
                <p block="CartPage" elem="TableHead" aria-hidden>
                    <span>{ __('item') }</span>
                    <span>{ __('quantity') }</span>
                    <span>{ __('subtotal') }</span>
                </p>
                <div block="CartPage" elem="Items" aria-label="List of items in cart">
                    { items.map((item) => (
                        <CartItem
                          key={ item.item_id }
                          item={ item }
                          currency_code={ quote_currency_code }
                          onCartItemLoading={ onCartItemLoading }
                          showLoader
                          isEditing
                          updateCrossSellsOnRemove
                        />
                    )) }
                </div>
            </>
        );
    }

    renderDiscountCode(): ReactElement {
        const {
            totals: {
                items = [],
                prices: {
                    coupon_code
                } = {}
            }
        } = this.props;

        if (!items || items.length < 1) {
            return null;
        }

        return (
            <ExpandableContent
              heading={ __('Have a discount code?') }
              mix={ { block: 'CartPage', elem: 'Discount' } }
              isArrow
            >
                <CartCoupon couponCode={ coupon_code } />
            </ExpandableContent>
        );
    }

<<<<<<< HEAD:packages/scandipwa/src/route/CartPage/CartPage.component.tsx
    renderSecureCheckoutButton(): ReactElement {
        const { onCheckoutButtonClick, hasOutOfStockProductsInCart } = this.props;
=======
    renderSecureCheckoutButton() {
        const {
            onCheckoutButtonClick,
            minimumOrderDescription,
            minimumOrderAmountReached,
            hasOutOfStockProductsInCart
        } = this.props;
>>>>>>> scandipwa/master:packages/scandipwa/src/route/CartPage/CartPage.component.js

        if (hasOutOfStockProductsInCart) {
            return (
                <div block="CartPage" elem="OutOfStockProductsWarning">
                    { __('Please, remove out of stock products from cart') }
                </div>
            );
        }

        if (!minimumOrderAmountReached) {
            return (
                <div block="CartPage" elem="OutOfStockProductsWarning">
                    { minimumOrderDescription }
                </div>
            );
        }

        return (
            <div block="CartPage" elem="CheckoutButtonWrapper">
                <button
                  block="CartPage"
                  elem="CheckoutButton"
                  mix={ { block: 'Button' } }
                  onClick={ onCheckoutButtonClick }
                >
                    <LockIcon />
                    { __('Proceed to checkout') }
                </button>
            </div>
        );
    }

    renderSummary(): ReactElement {
        const {
            totals
        } = this.props;

        return (
            <CheckoutOrderSummary
<<<<<<< HEAD:packages/scandipwa/src/route/CartPage/CartPage.component.tsx
              totals={ totals as Partial<TotalsObject> }
                // eslint-disable-next-line react/jsx-no-bind
              renderCmsBlock={ () => this.renderPromo() }
=======
              totals={ totals }
              // eslint-disable-next-line react/jsx-no-bind
              renderCmsBlock={ () => this.renderPromo(true) }
              onCouponCodeUpdate={ onCouponCodeUpdate }
>>>>>>> scandipwa/master:packages/scandipwa/src/route/CartPage/CartPage.component.js
              showItems={ false }
            >
                { this.renderSecureCheckoutButton() }
            </CheckoutOrderSummary>
        );
    }

    renderTotals(): ReactElement {
        return (
            <article
              block="CartPage"
              elem="Summary"
              mix={ { block: 'FixedElement', elem: 'Bottom' } }
            >
                { this.renderSummary() }
            </article>
        );
    }

<<<<<<< HEAD:packages/scandipwa/src/route/CartPage/CartPage.component.tsx
    renderCrossSellProducts(): ReactElement {
=======
    renderCrossSellProducts() {
        const { areDetailsLoaded } = this.props;

>>>>>>> scandipwa/master:packages/scandipwa/src/route/CartPage/CartPage.component.js
        return (
            <ProductLinks
              linkType={ LinkedProductType.CROSS_SELL }
              title={ __('Frequently bought together') }
              areDetailsLoaded={ areDetailsLoaded }
            />
        );
    }

    renderPromoContent(): ReactElement {
        const { cart_content: { cart_cms = '' } = {} } = window.contentConfiguration || {};

        if (cart_cms) {
            return <CmsBlock identifier={ cart_cms } />;
        }

        return (
            <figure
              block="CartPage"
              elem="PromoBlock"
            >
                <figcaption block="CartPage" elem="PromoText">
                    { __('Free shipping on order 49$ and more.') }
                </figcaption>
            </figure>
        );
    }

    renderPromo(): ReactElement {
        return (
            <div
              block="CartPage"
              elem="Promo"
            >
                { this.renderPromoContent() }
            </div>
        );
    }

    renderHeading(): ReactElement {
        return (
            <h1 block="CartPage" elem="Heading">
                { __('Cart') }
            </h1>
        );
    }

    renderTotalsSection(): ReactElement {
        const { totals: { items = [] } } = this.props;

        if (items.length < 1) {
            return this.renderPromo();
        }

        return (
            <div block="CartPage" elem="Floating">
                { this.renderPromo() }
                { this.renderTotals() }
            </div>
        );
    }

    renderDesktop(): ReactElement {
        return (
            <>
                <div block="CartPage" elem="Static">
                    { this.renderHeading() }
                    { this.renderCartItems() }
                    { this.renderDiscountCode() }
                </div>
                { this.renderTotalsSection() }
            </>
        );
    }

<<<<<<< HEAD:packages/scandipwa/src/route/CartPage/CartPage.component.tsx
    renderMobile(): ReactElement {
=======
    renderMobile() {
        const { totals: { items = [] } } = this.props;
        const isShowTotals = items.length > 0;

>>>>>>> scandipwa/master:packages/scandipwa/src/route/CartPage/CartPage.component.js
        return (
            <div block="CartPage" elem="Static">
                { this.renderHeading() }
                { this.renderCartItems() }
                <div block="CartPage" elem="Floating">
                    { isShowTotals && this.renderTotals() }
                </div>
                { this.renderDiscountCode() }
                { this.renderPromo() }
            </div>
        );
    }

    renderMainContent(): ReactElement {
        const { device: { isMobile } } = this.props;

        if (isMobile) {
            return this.renderMobile();
        }

        return this.renderDesktop();
    }

    render(): ReactElement {
        return (
            <main block="CartPage" aria-label="Cart Page">
                <ContentWrapper
                  wrapperMix={ { block: 'CartPage', elem: 'Wrapper' } }
                  label="Cart page details"
                >
                    { this.renderMainContent() }
                </ContentWrapper>
                { this.renderCrossSellProducts() }
            </main>
        );
    }
}

export default CartPage;
