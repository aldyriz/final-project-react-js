import { r as registerInstance, h } from './index-745b6bec.js';
import { a as apiFetch } from './fetch-2d92a73e.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scWordpressPasswordEditCss = ":host{display:block;position:relative}";
const ScWordpressPasswordEditStyle0 = scWordpressPasswordEditCss;

const ScWordPressPasswordEdit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.successUrl = undefined;
        this.user = undefined;
        this.loading = undefined;
        this.error = undefined;
        this.enableValidation = true;
    }
    renderEmpty() {
        return h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    validatePassword(password) {
        const regex = new RegExp('^(?=.*?[#?!@$%^&*-]).{6,}$');
        if (regex.test(password))
            return true;
        return false;
    }
    async handleSubmit(e) {
        this.loading = true;
        this.error = '';
        try {
            const { password } = await e.target.getFormJson();
            await apiFetch({
                path: `wp/v2/users/me`,
                method: 'PATCH',
                data: {
                    password,
                    meta: {
                        default_password_nag: false,
                    },
                },
            });
            if (this.successUrl) {
                window.location.assign(this.successUrl);
            }
            else {
                this.loading = false;
            }
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        return (h("sc-dashboard-module", { key: 'd36a5aadccf0407f22295c201af2baf03c6fe5de', class: "customer-details", error: this.error }, h("span", { key: '04ce67d53896e45c039b76e0860205c276fe6b98', slot: "heading" }, this.heading || wp.i18n.__('Update Password', 'surecart'), " "), h("slot", { key: 'f4a6244551b3f1d033ece8af144f8b1a938a5e87', name: "end", slot: "end" }), h("sc-card", { key: '62bd0cce22e67d5b1fc872120e34100ef839ecb8' }, h("sc-form", { key: 'a26e73aa14138b802351fceb26a92612ac310229', onScFormSubmit: e => this.handleSubmit(e) }, h("sc-password", { key: 'bdc4209f763a8d81df9968815b0f51b3e2e38b81', enableValidation: this.enableValidation, label: wp.i18n.__('New Password', 'surecart'), name: "password", confirmation: true, required: true }), h("div", { key: '62988c62cff94149397a7447ac1bdd53f771a6ce' }, h("sc-button", { key: '6de7968693e65523345b1002fff9f0de59e4ac80', type: "primary", full: true, submit: true }, wp.i18n.__('Update Password', 'surecart'))))), this.loading && h("sc-block-ui", { key: 'e24192b0a432092ff56cf43845634ed4db6e1850', spinner: true })));
    }
};
ScWordPressPasswordEdit.style = ScWordpressPasswordEditStyle0;

export { ScWordPressPasswordEdit as sc_wordpress_password_edit };

//# sourceMappingURL=sc-wordpress-password-edit.entry.js.map