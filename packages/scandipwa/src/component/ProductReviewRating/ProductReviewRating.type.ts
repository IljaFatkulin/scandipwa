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

import { Mix } from 'Type/Common.type';

export interface ProductReviewRatingComponentProps {
    summary: number;
    code: string;
    placeholder: boolean;
    mix: Mix;
    count: number;
}
