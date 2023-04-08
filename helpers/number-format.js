const NumberFormat = (value, options = {characterReplace: ',', numberFormat: 3}) => {
    const format = new RegExp(`\\B(?=(\\d{${options.numberFormat}})+(?!\\d))`, 'g');

    return value.toString().replace(format, options.characterReplace);
}

export default NumberFormat;
