import SearchForm from './src/index';

/* istanbul ignore next */
SearchForm.install = function(Vue) {
    Vue.component(SearchForm.name, SearchForm);
};

export default SearchForm;
