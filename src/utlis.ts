export const statNameTransformation = (stat: string) => {
    switch (stat) {
        case "hp":
        return "HP";
        case "attack":
        return "ATK";
        case "defense":
        return "DEF";
        case "special-attack":
        return "SATK";
        case "special-defense":
        return "SDEF";
        case "speed":
        return "SPD";
        default:
        return stat;
    }
}