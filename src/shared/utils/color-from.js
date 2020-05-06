import { colorsForAvatar } from "../../styles/colors";

export const getColor = (string) => {
    try {
        const index = string
            .toString()
            .split("")
            .map((char) => char.charCodeAt())
            .reduce((sum, num) => sum + num, 0);

        const colorIndex = index % colorsForAvatar.length;

        return colorsForAvatar[colorIndex];
    } catch (e) {
        return colorsForAvatar[5];
    }
};
