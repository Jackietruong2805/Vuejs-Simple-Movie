import { createI18n } from "vue-i18n";
import en from "./en/en.json";
import ja from "./ja/ja.json";


export default createI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
        en,
        ja
    }
}
);