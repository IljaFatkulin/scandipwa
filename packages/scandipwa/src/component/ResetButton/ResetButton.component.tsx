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

import { ReactElement } from 'Type/Common.type';

import { ResetButtonComponentProps } from './ResetButton.type';

import './ResetButton.style';

/** @namespace Component/ResetButton/Component */
export class ResetButtonComponent extends PureComponent<ResetButtonComponentProps> {
    static defaultProps: Partial<ResetButtonComponentProps> = {
        mix: {},
    };

    __construct(props: ResetButtonComponentProps): void {
        super.__construct?.(props);
    }

    render(): ReactElement {
        const { mix, isContentFiltered, onClick } = this.props;

        if (!isContentFiltered) {
            return null;
        }

        return (
            <div
              block="ResetButton"
              mix={ mix }
            >
                <button
                  onClick={ onClick }
                  block="ResetButton"
                  elem="Button"
                  mix={ {
                      block: 'Button',
                      mods: { isHollow: true },
                  } }
                >
                    { __('Reset all') }
                </button>
            </div>
        );
    }
}

export default ResetButtonComponent;
