import { classNames } from './classNames';

describe('ClassNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with first param and additional classes', () => {
        expect(classNames('class', {}, ['class1', 'class2']))
            .toBe('class class1 class2');
    });
    test('with a first param and additional classes, plus a mode', () => {
        expect(classNames('class', { disabled: true }, ['class1', 'class2']))
            .toBe('class class1 class2 disabled');
    });
    test('with a first param and additional classes, plus mods', () => {
        expect(classNames('class', { disabled: true, scrollable: false }, ['class1', 'class2']))
            .toBe('class class1 class2 disabled');
    });
    test('when a mode is undefined', () => {
        expect(classNames('class', { disabled: true, scrollable: undefined }, ['class1', 'class2']))
            .toBe('class class1 class2 disabled');
    });
});
