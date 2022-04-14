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

import { PureComponent } from 'react';

import { ReactElement } from 'Type/Common.type';

import { MinusIconProps } from './MinusIcon.type';

import './MinusIcon.style';

/** @namespace Component/MinusIcon/Component */
export class MinusIcon extends PureComponent<MinusIconProps> {
    static defaultProps = {
        isPrimary: false
    };

    render(): ReactElement {
        const { isPrimary } = this.props;

        return (
            <svg
              block="MinusIcon"
              mods={ { isPrimary } }
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M5 11H19V13H5V11Z" />
            </svg>
        );
    }
}

export default MinusIcon;
