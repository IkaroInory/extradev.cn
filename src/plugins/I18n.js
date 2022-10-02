import {createI18n} from "vue-i18n/dist/vue-i18n.cjs";

import zh_cn from '@/lang/zh_cn';
import en_us from "@/lang/en_us";

const langList = {zh_cn, en_us};

const i18n = createI18n({
    locale: 'zh_cn',
    messages: langList
});

export default (app) => {
    app.use(i18n);
};
