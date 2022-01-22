import { PlatformWhetherDisplay } from "../types/PlatformWhetherDisplay";

export const getClassNameByPlatformWhetherDisplayObject = (
    whetherDisplayObject: PlatformWhetherDisplay
): string => {
    const classNames: string[] = [];
    if (!whetherDisplayObject.mobile) {
        classNames.push("mobile-hidden")
    }
    if (!whetherDisplayObject.tablet) {
        classNames.push("tablet-hidden")
    }
    if (!whetherDisplayObject.desktop) {
        classNames.push("desktop-hidden")
    }
    return classNames.join(" ");
}