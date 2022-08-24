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

export interface HistoryState {
    isForgotPassword?: boolean;
    isFromLocked?: boolean;
    editPassword?: boolean;
    category?: number;
    isFromEmailChange?: boolean;
    prevCategoryId?: number;
    stack?: string[];
    firstName?: string;
    lastName?: string;
    email?: string;
}
