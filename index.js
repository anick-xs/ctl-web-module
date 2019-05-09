import CtlDialogForm from 'ctl-web-module/src/components/dialog-form/index';
import CtlSearchForm from 'ctl-web-module/src/components/search-form/index';
import CtlTableBox from 'ctl-web-module/src/components/table-box/index';
const components = [
    CtlDialogForm,
    CtlSearchForm,
    CtlTableBox
];
const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    CtlDialogForm,
    CtlSearchForm,
    CtlTableBox
}
