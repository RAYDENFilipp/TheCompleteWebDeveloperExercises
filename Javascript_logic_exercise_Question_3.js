// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const answer = color => {
    const rgb = /^rgb/i;
    const hex = /^#/;
    let rgbArray, hexArray;

    const toHex = rgb => {
        let r = ~~rgb[0];
        let g = ~~rgb[1];
        let b = ~~rgb[2];
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }


    const toRGB = hex => {
        let r, g, b;
        if (hex[0].length == 1) {
            r = parseInt(`${hex[0]}${hex[0]}`, 16);
            g = parseInt(`${hex[1]}${hex[1]}`, 16);
            b = parseInt(`${hex[2]}${hex[2]}`, 16);
        } else {
            r = parseInt(hex[0], 16);
            g = parseInt(hex[1], 16);
            b = parseInt(hex[2], 16);
        }
        /* I've left it here just to know how to solve this with full decimal representation of hexadecimal number. Irrelevant to the solution
           let r = decimalHEX >> 16;
           let g = (decimalHEX & 65280) >> 8
           let b = decimalHEX & 255; */
        return `rgb(${r}, ${g}, ${b})`
    }

    // Check what a user had put in, rgb or hex. Accroding to this, the appropriate function will be used.
    if (rgb.test(color)) {
        rgbArray = color.match(/[0-9]{1,3}/g);
        return toHex(rgbArray);
    } else if (hex.test(color)) {
        hexArray = color.match(/[A-F0-9]{2}/gi);
        // check if it is full hex number or shortened 3-character hex number. In the first case, array will have 3 items, 1 otherwise.
        if (hexArray.length == 3) {
            return toRGB(hexArray);
        } else {
            hexArray = color.match(/[A-F0-9]{1}/gi);
            return toRGB(hexArray);
        }
    } else {
        return 'Wrong format';
    }
}

answer('rgb(123, 56, 255 )');