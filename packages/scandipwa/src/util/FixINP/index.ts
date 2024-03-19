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

/** @namespace Util/FixINP/Index/fixINP */
export const fixINP = () => {
    const block = document.createElement('div');
    block.style.position = 'absolute';
    block.style.zIndex = '110';
    block.style.width = '1px';
    block.style.height = '1px';
    block.style.top = '0';
    block.style.left = '0';
    block.style.backgroundColor = 'transparent';
    document.body.appendChild(block);

    const timeout = 0;
    setTimeout(() => {
        block.remove();
    }, timeout);
};

export default fixINP;
