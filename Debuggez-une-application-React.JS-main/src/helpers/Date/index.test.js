import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        // Test pour vérifier si la fonction retourne "janvier" pour la date "2022-01-01"
        it("the function return janvier for 2022-01-01 as date", () => {
            // Création d'une nouvelle date pour le 1er janvier 2022
            const date = new Date("2022-01-01");
            // Appel de la fonction getMonth avec la date créée
            const result = getMonth(date);
            // Vérification que le résultat est égal à "janvier"
            expect(result).toBe("janvier");
        });
    });
})
