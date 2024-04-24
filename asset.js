function getTime() {
    const currentTime = new Date();
    const formattedTime = currentTime.getMinutes();
    return formattedTime
}

const formating = (string) => {
    return string.toString().padStart(2, '0')
}

export default formating