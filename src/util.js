const getLogo = async (name, logoColor) => {
    try {
        let logo = await fetch(`https://esm.sh/simple-icons/icons/${name}.svg`)
        logo = await logo.text()

        return `data:image/svg+xml;base64,${btoa(logo.replace('<svg role="img"', `<svg role="img" fill="${logoColor || `#FFFFFF`}"`))}`;
    } catch (e) {
        return e;
    }
}

export default getLogo