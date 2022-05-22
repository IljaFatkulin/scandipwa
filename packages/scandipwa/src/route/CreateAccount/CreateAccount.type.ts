/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/scandipwa
 */

import { RouteComponentProps } from 'react-router';

import {
    MyAccountOverlayComponentProps,
    MyAccountOverlayContainerMapDispatchProps,
    MyAccountOverlayContainerProps
} from 'Component/MyAccountOverlay/MyAccountOverlay.type';
import { Device } from 'Type/Device.type';

export interface CreateAccountContainerMapDispatchProps extends MyAccountOverlayContainerMapDispatchProps {
    toggleBreadcrumbs: (isVisible: boolean) => void;
}

export type CreateAccountContainerProps = CreateAccountContainerMapDispatchProps
& MyAccountOverlayContainerProps;

export interface CreateAccountComponentProps extends MyAccountOverlayComponentProps, RouteComponentProps {
    onLoginClick: () => void;
    device: Device;
}
