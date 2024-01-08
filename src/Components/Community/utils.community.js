

export function handleLengthString(str) {
    if (str.length > 280)
        return str.substring(0, 180) + "..."
    else
        return str
}