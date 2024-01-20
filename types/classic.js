function classic(arg1 = "#0E0E0E") {
    let color;

    if (typeof arg1 === 'object') {
        color = arg1.color || "#0E0E0E";
    } else {
        color = arg1;
    }

    return (`<svg width="2367" height="802" viewBox="0 0 2367 802" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1501.3" height="490.375" rx="20" fill="${color}" />
        <rect y="541.298" width="1501.3" height="260.276" rx="20" fill="${color}" />
    </svg>`);
}

module.exports = classic;