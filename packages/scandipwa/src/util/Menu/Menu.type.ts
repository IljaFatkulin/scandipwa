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

import { MenuItem } from 'Query/Menu.type';
import { Merge } from 'Type/Common.type';

export interface MenuLocation {
    pathname: string;
    search: string;
    state: {
        category?: number;
        page?: boolean;
    };
}

export type FormattedMenuItem = Merge<
Omit<MenuItem, 'cms_page_identifier' | 'url_type' | 'category_id' >,
{
    url: MenuLocation | string;
    children: Record<string, FormattedMenuItem>;
}>;

export enum MenuItemType {
    TYPE_CUSTOM_URL,
    TYPE_CMS_PAGE,
    TYPE_CATEGORY
}
