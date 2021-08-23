/* eslint-disable spaced-comment */
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { PRODUCT_TYPE } from 'Config/Product.config';
import { IN_STOCK } from 'Config/Stock.config';
import { formatPrice } from 'Util/Price';

export const DEFAULT_MIN_PRODUCTS = 1;
export const DEFAULT_MAX_PRODUCTS = 100;

export const getQuantity = (product, defaultValue, field, configIndex = -1) => {
    const {
        stock_item: { [field]: qty } = {},
        variants
    } = product;

    if (!qty) {
        return defaultValue;
    }

    if ((!configIndex && !variants) || configIndex === -1) {
        return qty;
    }

    const { stock_item: { [field]: variantQty } = {} } = variants[configIndex] || {};

    return variantQty || qty;
};

/**
 * Returns minimum purchasable item quantity
 * @param product
 * @param configIndex
 * @returns {*}
 */
export const getMinQuantity = (product, configIndex = -1) => (
    getQuantity(product, DEFAULT_MIN_PRODUCTS, 'min_sale_qty', configIndex)
);

/**
 * Returns maximum purchasable item quantity.
 * @param product
 * @param configIndex
 * @returns {*}
 */
export const getMaxQuantity = (product, configIndex = -1) => (
    getQuantity(product, DEFAULT_MAX_PRODUCTS, 'max_sale_qty', configIndex) - 1
);

/**
 * Returns active products name
 * @param product
 * @param configIndex
 * @returns {*}
 */
export const getName = (product, configIndex = -1) => {
    const { variants = [] } = product;

    const {
        name
    } = variants[configIndex] || product;

    return name;
};

/**
 * Returns whether or not product is in stock (true if in stock | false if out of stock)
 * @param product
 * @param configIndex
 * @returns {boolean}
 */
export const getProductInStock = (product, configIndex = -1) => {
    if (!product) {
        return false;
    }

    const { type_id, variants = [], items = [] } = product;

    if (type_id === PRODUCT_TYPE.bundle) {
        const { items = [] } = product;
        const requiredItems = items.filter(({ required }) => required);
        const requiredItemsInStock = requiredItems.filter(
            ({ options }) => options.some(({ product }) => getProductInStock(product))
        );

        return requiredItemsInStock.length === requiredItems.length;
    }

    if (type_id === PRODUCT_TYPE.configurable && configIndex === -1) {
        return !!variants.some(({ product }) => getProductInStock(product));
    }

    if (type_id === PRODUCT_TYPE.grouped && configIndex === -1) {
        return !!items.some(({ product }) => getProductInStock(product));
    }

    const { stock_status } = variants[configIndex] || product;

    return stock_status === IN_STOCK;
};

export const getBundleOption = (uid, options = []) => {
    const uidParts = atob(uid).split('/');
    return options.find(({ uid: linkedUid }) => {
        const linkedUidParts = atob(linkedUid).split('/');
        if (uidParts.length !== linkedUidParts.length) {
            return false;
        }

        // eslint-disable-next-line fp/no-loops,fp/no-let
        for (let i = 0; i < uidParts.length - 1; i++) {
            if (uidParts[i] !== linkedUidParts[i]) {
                return false;
            }
        }

        return true;
    });
};

// TODO: Add caching
export const getPrice = (
    priceRange,
    dynamicPrice = false,
    adjustedPrice = {},
    type = PRODUCT_TYPE.simple
) => {
    const priceAcc = type === PRODUCT_TYPE.bundle ? 'default_final_price' : 'regular_price';
    const priceExcTaxAcc = type === PRODUCT_TYPE.bundle ? 'default_final_price_excl_tax' : 'regular_price_excl_tax';

    const {
        minimum_price: {
            [priceAcc]: { currency = 'USD', value: basePrice = 0 } = {},
            [priceExcTaxAcc]: { value: basePriceExclTax = 0 } = {},
            discount: { percent_off: percentOff = 0 } = {},
            final_price: minFinalPrice = {},
            final_price_excl_tax: minFinalPriceExclTax = {}
        } = {},
        maximum_price: {
            final_price: maxFinalPrice = {},
            final_price_excl_tax: maxFinalPriceExclTax = {}
        } = {}
    } = priceRange || {};

    // eslint-disable-next-line no-magic-numbers
    const discountValue = (1 - percentOff / 100);
    // eslint-disable-next-line no-magic-numbers
    const discountValueRevert = discountValue === 0 ? 1 : discountValue;

    const basePriceExclDiscount = priceAcc === 'default_final_price'
        ? basePrice / discountValueRevert
        : basePrice;
    const basePriceExclDiscountExclTax = priceAcc === 'default_final_price'
        ? basePriceExclTax / discountValueRevert
        : basePrice;

    const priceValue = { value: dynamicPrice ? 0 : basePriceExclDiscount * discountValue, currency };
    const priceValueExclTax = { value: dynamicPrice ? 0 : basePriceExclDiscountExclTax * discountValue, currency };
    const priceValueExclDiscount = { value: dynamicPrice ? 0 : basePriceExclDiscount, currency };
    const priceValueExclDiscountExclTax = { value: dynamicPrice ? 0 : basePriceExclDiscountExclTax, currency };

    Object.keys(adjustedPrice || {}).forEach((key) => {
        const { [key]: group } = adjustedPrice;
        const { inclTax = 0, exclTax = 0, hasDiscountCalculated = false } = group;
        if (hasDiscountCalculated) {
            priceValue.value += inclTax;
            priceValueExclTax.value += exclTax;
            priceValueExclDiscount.value += inclTax / discountValueRevert;
            priceValueExclDiscountExclTax.value += exclTax / discountValueRevert;
        } else {
            priceValue.value += inclTax * discountValue;
            priceValueExclTax.value += exclTax * discountValue;
            priceValueExclDiscount.value += inclTax;
            priceValueExclDiscountExclTax.value += exclTax;
        }
    });

    priceValue.valueFormatted = formatPrice(priceValue.value, currency);
    priceValueExclTax.valueFormatted = formatPrice(priceValueExclTax.value, currency);
    priceValueExclDiscount.valueFormatted = formatPrice(priceValueExclDiscount.value, currency);
    priceValueExclDiscountExclTax.valueFormatted = formatPrice(priceValueExclDiscountExclTax.value, currency);

    return {
        price: {
            finalPrice: priceValue,
            finalPriceExclTax: priceValueExclTax,
            originalPrice: priceValueExclDiscount,
            originalPriceExclTax: priceValueExclDiscountExclTax,
            discount: {
                percentOff
            }
        },
        originalPrice: {
            minFinalPrice: {
                ...minFinalPrice,
                valueFormatted: formatPrice(minFinalPrice.value || 0, currency)
            },
            minFinalPriceExclTax: {
                ...minFinalPriceExclTax,
                valueFormatted: formatPrice(minFinalPriceExclTax.value || 0, currency)
            },
            maxFinalPrice: {
                ...maxFinalPrice,
                valueFormatted: formatPrice(maxFinalPrice.value || 0, currency)
            },
            maxFinalPriceExclTax: {
                ...maxFinalPriceExclTax,
                valueFormatted: formatPrice(maxFinalPriceExclTax.value || 0, currency)
            }
        }
    };
};

export const getAdjustedPrice = (product, downloadableLinks, enteredOptions, selectedOptions) => {
    const {
        downloadable_product_links = [],
        options = [],
        items = [],
        dynamic_price: dynamicPrice = false,
        type_id: typeId
    } = product;

    const adjustedPrice = {
        downloadable: {
            exclTax: 0,
            inclTax: 0,
            hasDiscountCalculated: false
        },
        bundle: {
            exclTax: 0,
            inclTax: 0,
            hasDiscountCalculated: true
        },
        config: {
            exclTax: 0,
            inclTax: 0,
            hasDiscountCalculated: true
        }
    };

    //#region DOWNLOADABLE
    if (typeId === PRODUCT_TYPE.downloadable) {
        downloadableLinks.forEach((uid) => {
            const link = downloadable_product_links.find(({ uid: linkUid }) => linkUid === uid);

            if (link) {
                const { price } = link;
                adjustedPrice.downloadable.exclTax += price;
                adjustedPrice.downloadable.inclTax += price;
            }
        });
    }
    //#endregion

    //#region GROUPED
    //#endregion

    //#region BUNDLE
    if (typeId === PRODUCT_TYPE.bundle) {
        selectedOptions.forEach((uid) => {
            items.forEach(({ options = [] }) => {
                const uidParts = atob(uid).split('/');
                const option = Array.isArray(options) && getBundleOption(uid, options);
                const quantity = +uidParts[uidParts.length - 1];

                if (option) {
                    const {
                        finalOptionPrice,
                        finalOptionPriceExclTax,
                        product: {
                            price_range: optionProductPriceRange = {},
                            type_id: optionProductType,
                            dynamic_price: optionProductDynamic
                        },
                        can_change_quantity: canChangeQuantity = false
                    } = option;

                    if (!dynamicPrice) {
                        const multiplier = canChangeQuantity ? quantity : quantity;
                        adjustedPrice.bundle.exclTax += finalOptionPriceExclTax * multiplier;
                        adjustedPrice.bundle.inclTax += finalOptionPrice * multiplier;
                    } else {
                        const {
                            price: {
                                finalPrice: { value: priceInclTax = 0 } = {},
                                finalPriceExclTax: { value: priceExclTax = 0 } = {}
                            }
                        } = getPrice(
                            optionProductPriceRange, optionProductDynamic, {}, optionProductType
                        ) || {};

                        adjustedPrice.bundle.inclTax += priceInclTax * quantity;
                        adjustedPrice.bundle.exclTax += priceExclTax * quantity;
                    }
                }
            });
        });
    }
    //#endregion

    //#region CONFIGURABLE
    enteredOptions.forEach(({ uid }) => {
        const option = options.find(({ uid: linkUid }) => linkUid === uid);
        if (option) {
            const { value: { priceExclTax = 0, priceInclTax = 0 } = {} } = option;
            adjustedPrice.config.inclTax += priceInclTax;
            adjustedPrice.config.exclTax += priceExclTax;
        }
    });

    selectedOptions.forEach((uid) => {
        options.forEach(({ value = [] }) => {
            const option = Array.isArray(value) && value.find(({ uid: linkedUid }) => linkedUid === uid);
            if (option) {
                const { priceExclTax = 0, priceInclTax = 0 } = option;
                adjustedPrice.config.inclTax += priceInclTax;
                adjustedPrice.config.exclTax += priceExclTax;
            }
        });
    });
    //#endregion

    return adjustedPrice;
};
