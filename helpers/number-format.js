const NumberFormat = (value, options = {characterReplace: ',', numberFormat: 3}) => {

    if (typeof value !== "undefined") {
        const format = new RegExp(`\\B(?=(\\d{${options.numberFormat}})+(?!\\d))`, 'g');
        return value.toString().replace(format, options.characterReplace);
    }

    return '';
}

export default NumberFormat;
