const idsGenerator = new Set<string>();

export const generarId = (): string => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let id: string;

    do {
        id = '';

        // Generar las dos letters iniciales
        for (let i = 0; i < 2; i++) {
            id += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        // Generar los cuatro números restantes
        for (let i = 0; i < 4; i++) {
            id += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
    } while (idsGenerator.has(id));

    idsGenerator.add(id);

    return id;
}