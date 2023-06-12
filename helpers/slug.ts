const Slug = (value: string): string => {
    return value.toLowerCase().replace(/\s+/g, '-')
}

export default Slug