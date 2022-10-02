const Environment = {
    _this: null,
    initialize: (_this) => {
        Environment._this = _this;
    },
    setLanguage: (language) => {
        if (!(language in Environment._this.$i18n.messages)) {
            return false;
        }
        Environment._this.$i18n.locale = language;
        return true;
    }
};

export default Environment;
