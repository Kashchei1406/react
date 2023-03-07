import {lazy} from "react";

export const AboutPageLazy = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Так делать не надо, это для примера
    setTimeout(() => resolve(import('./AboutPages')), 1500)
}));
