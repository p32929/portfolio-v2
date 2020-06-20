
export function getContainerHeight(matches) {
    var topBottomMargins;
    var leftRightMargins;

    if (matches) {
        topBottomMargins = 24
        leftRightMargins = 24
    } else {
        topBottomMargins = 84;
        leftRightMargins = 158;
    }

    return {
        maxHeight: window.innerHeight - topBottomMargins * 2,
        maxWidth: window.innerWidth - leftRightMargins * 2,
        height: window.innerHeight - topBottomMargins * 2,
        width: window.innerWidth - leftRightMargins * 2
    }
}
