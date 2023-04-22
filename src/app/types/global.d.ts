declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare const __IS_DEV__: boolean;
