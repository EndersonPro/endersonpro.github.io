import { jsx as _jsx } from "react/jsx-runtime";
/** Renders `**bold**` and `_italic_` spans from a translated message string. */
export const renderRich = (text) => text.split(/(\*\*.+?\*\*|_.+?_)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
        return _jsx("b", { children: part.slice(2, -2) }, index);
    }
    if (part.startsWith("_") && part.endsWith("_") && part.length > 1) {
        return _jsx("i", { children: part.slice(1, -1) }, index);
    }
    return part;
});
