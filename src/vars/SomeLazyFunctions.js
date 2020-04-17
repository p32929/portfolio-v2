export function getHeightWidthObject(matches, parent = false) {
    var topBottomMargins = 84;
    var leftRightMargins = 158;

    if (matches) {
        topBottomMargins = 24
        leftRightMargins = 24
    } else {
        topBottomMargins = 84;
        leftRightMargins = 158;
    }

    if (parent) {
        return {
            flex: 1,
            marginLeft: leftRightMargins,
            marginRight: leftRightMargins,
            marginTop: topBottomMargins,
            marginBottom: topBottomMargins,
            maxHeight: window.innerHeight - topBottomMargins * 2,
            maxWidth: window.innerWidth - leftRightMargins * 2,
            height: window.innerHeight - topBottomMargins * 2,
            width: window.innerWidth - leftRightMargins * 2
        }
    } else
        return {
            maxHeight: window.innerHeight - topBottomMargins * 2,
            maxWidth: window.innerWidth - leftRightMargins * 2,
            height: window.innerHeight - topBottomMargins * 2,
            width: window.innerWidth - leftRightMargins * 2
        }
}