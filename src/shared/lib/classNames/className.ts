type Mods = Record<string, boolean | string>
export function classNames(cls: string, mode: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mode)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)

    ].join(" ")
}

