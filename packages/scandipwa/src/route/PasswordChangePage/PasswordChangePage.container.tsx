/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
<<<<<<< HEAD:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.tsx
 * @package scandipwa/scandipwa
=======
 * @package scandipwa/scandipwa
>>>>>>> scandipwa/master:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.js
 * @link https://github.com/scandipwa/scandipwa
 */

import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Dispatch } from 'redux';

import { Page } from 'Component/Header/Header.config';
import { AccountPageUrl } from 'Route/MyAccount/MyAccount.config';
import { toggleBreadcrumbs } from 'Store/Breadcrumbs/Breadcrumbs.action';
import { updateMeta } from 'Store/Meta/Meta.action';
import { changeNavigationState } from 'Store/Navigation/Navigation.action';
import { NavigationType } from 'Store/Navigation/Navigation.type';
import { showNotification } from 'Store/Notification/Notification.action';
<<<<<<< HEAD:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.tsx
import { NotificationType } from 'Store/Notification/Notification.type';
import { ReactElement } from 'Type/Common.type';
=======
>>>>>>> scandipwa/master:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.js
import { isSignedIn } from 'Util/Auth';
import { FieldData } from 'Util/Form/Form.type';
import transformToNameValuePair from 'Util/Form/Transform';
import history from 'Util/History';
import { RootState } from 'Util/Store/Store.type';
import { appendWithStoreCode, getQueryParam } from 'Util/Url';

import PasswordChangePage from './PasswordChangePage.component';
import { PasswordPageStatus } from './PasswordChangePage.config';
import {
    PasswordChangePageComponentProps,
    PasswordChangePageContainerMapDispatchProps,
    PasswordChangePageContainerMapStateProps,
    PasswordChangePageContainerProps,
    PasswordChangePageContainerPropsKeys,
    PasswordChangePageContainerState
} from './PasswordChangePage.type';

export const MyAccountDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/MyAccount/MyAccount.dispatcher'
);

/** @namespace Route/PasswordChangePage/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): PasswordChangePageContainerMapStateProps => ({
    passwordResetStatus: state.MyAccountReducer.passwordResetStatus,
    passwordResetMessage: state.MyAccountReducer.passwordResetMessage,
    isMobile: state.ConfigReducer.device.isMobile,
    minimunPasswordLength: state.ConfigReducer.minimun_password_length,
    minimunPasswordCharacter: state.ConfigReducer.required_character_classes_number
});

/** @namespace Route/PasswordChangePage/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch: Dispatch): PasswordChangePageContainerMapDispatchProps => ({
    updateMeta: (meta) => dispatch(updateMeta(meta)),
    toggleBreadcrumbs: (visibility) => dispatch(toggleBreadcrumbs(visibility)),
    setHeaderState: (headerState) => dispatch(changeNavigationState(NavigationType.TOP_NAVIGATION_TYPE, headerState)),
    resetPassword(options) {
        MyAccountDispatcher.then(
            ({ default: dispatcher }) => dispatcher.resetPassword(options, dispatch)
        );
    },
    showNotification(type, message) {
        dispatch(showNotification(type, message));
    }
});

/** @namespace Route/PasswordChangePage/Container */
<<<<<<< HEAD:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.tsx
export class PasswordChangePageContainer extends PureComponent<
PasswordChangePageContainerProps,
PasswordChangePageContainerState
> {
    state: PasswordChangePageContainerState = {
=======
export class PasswordChangePageContainer extends PureComponent {
    static propTypes = {
        updateMeta: PropTypes.func.isRequired,
        toggleBreadcrumbs: PropTypes.func.isRequired,
        showNotification: PropTypes.func.isRequired,
        passwordResetStatus: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]).isRequired,
        passwordResetMessage: PropTypes.string.isRequired,
        resetPassword: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        setHeaderState: PropTypes.func.isRequired,
        isMobile: PropTypes.bool.isRequired,
        minimunPasswordLength: PropTypes.number.isRequired,
        minimunPasswordCharacter: PropTypes.string.isRequired
    };

    state = {
>>>>>>> scandipwa/master:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.js
        passwordResetStatus: '',
        isLoading: false
    };

    static getDerivedStateFromProps(
        props: PasswordChangePageContainerProps
    ): Partial<PasswordChangePageContainerState> | null {
        const {
            passwordResetStatus,
            passwordResetMessage,
            showNotification
        } = props;
        const stateToBeUpdated: Partial<PasswordChangePageContainerState> = {};

        if (passwordResetStatus) {
            stateToBeUpdated.isLoading = false;
            stateToBeUpdated.passwordResetStatus = passwordResetStatus;

            switch (passwordResetStatus) {
            case PasswordPageStatus.UPDATED:
                showNotification(NotificationType.SUCCESS, __('Password has been successfully updated!'));
                break;
            case PasswordPageStatus.MISS_MATCH:
                showNotification(NotificationType.INFO, __('Your password and confirmation password do not match.'));
                break;
            default:
                showNotification(NotificationType.ERROR, passwordResetMessage);
            }
        }

        return Object.keys(stateToBeUpdated).length ? stateToBeUpdated : null;
    }

    containerFunctions = {
        onPasswordSuccess: this.onPasswordSuccess.bind(this),
        onError: this.onError.bind(this)
    };

    componentDidMount(): void {
        const { setHeaderState } = this.props;

        this.updateMeta();
        this.toggleBreadcrumbs(false);

        if (isSignedIn()) {
            history.replace({ pathname: appendWithStoreCode(AccountPageUrl.ACCOUNT_URL) });
        }

        setHeaderState({
            name: Page.CUSTOMER_SUB_ACCOUNT,
            title: __('Change My Password'),
            onBackClick: () => {
                history.push({ pathname: appendWithStoreCode('/') });
            }
        });
    }

<<<<<<< HEAD:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.tsx
    containerProps(): Pick<PasswordChangePageComponentProps, PasswordChangePageContainerPropsKeys> {
=======
    containerProps() {
        const { showNotification } = this.props;
>>>>>>> scandipwa/master:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.js
        const { isLoading } = this.state;
        const { isMobile, minimunPasswordLength, minimunPasswordCharacter } = this.props;

        const range = {
            min: minimunPasswordLength,
            max: 64
        };

        return {
            range,
            isLoading,
            showNotification,
            isMobile,
            minimunPasswordCharacter,
            shouldDisplayWarning: this.shouldDisplayWarning()
        };
    }

<<<<<<< HEAD:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.tsx
    shouldDisplayWarning(): boolean {
        const { location } = this.props;
        const token = getQueryParam('token', location);
=======
    shouldDisplayWarning() {
        const token = getQueryParam('token', history.location);
>>>>>>> scandipwa/master:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.js

        return !token;
    }

    onPasswordSuccess(form: HTMLFormElement, fields: FieldData[]): void {
        this.setState({ isLoading: true }, () => {
            const { resetPassword } = this.props;
            const { location } = history;
            const { password, password_confirmation } = transformToNameValuePair(fields);
            const token = getQueryParam('token', location);
<<<<<<< HEAD:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.tsx

            if (token) {
                resetPassword({ token, password, password_confirmation });
            }
=======
            const customer_id = getQueryParam('id', location);

            resetPassword({
                customer_id,
                token,
                password,
                password_confirmation
            });
>>>>>>> scandipwa/master:packages/scandipwa/src/route/PasswordChangePage/PasswordChangePage.container.js
        });
    }

    onError(): void {
        this.setState({ isLoading: false });
    }

    updateMeta(): void {
        const { updateMeta } = this.props;

        updateMeta({ title: __('Password Change Page') });
    }

    toggleBreadcrumbs(visibility: boolean): void {
        const { toggleBreadcrumbs } = this.props;

        toggleBreadcrumbs(visibility);
    }

    render(): ReactElement {
        const { passwordResetStatus } = this.state;

        if (passwordResetStatus === PasswordPageStatus.UPDATED) {
            return <Redirect to="/" />;
        }

        return (
            <PasswordChangePage
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangePageContainer);
