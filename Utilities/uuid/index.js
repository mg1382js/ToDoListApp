export class uuid {
    generateUUID() {
        // Function to generate a random number between 0 and 255
        function randomByte() {
            return Math.floor(Math.random() * 256);
        }

        // Create an array with 16 random bytes
        const bytes = new Uint8Array(16);
        for (let i = 0; i < 16; i++) {
            bytes[i] = randomByte();
        }

        // Set the version to 4 (random UUID)
        bytes[6] = (bytes[6] & 0x0f) | 0x40;

        // Set the variant to 2 (DCE 1.1, ISO/IEC 11578:1996)
        bytes[8] = (bytes[8] & 0x3f) | 0x80;

        // Convert the byte array to a UUID string
        const byteToHex = [];
        for (let i = 0; i < 256; ++i) {
            byteToHex[i] = (i + 0x100).toString(16).substring(1);
        }

        return (
            byteToHex[bytes[0]] +
            byteToHex[bytes[1]] +
            byteToHex[bytes[2]] +
            byteToHex[bytes[3]] +
            '-' +
            byteToHex[bytes[4]] +
            byteToHex[bytes[5]] +
            '-' +
            byteToHex[bytes[6]] +
            byteToHex[bytes[7]] +
            '-' +
            byteToHex[bytes[8]] +
            byteToHex[bytes[9]] +
            '-' +
            byteToHex[bytes[10]] +
            byteToHex[bytes[11]] +
            byteToHex[bytes[12]] +
            byteToHex[bytes[13]] +
            byteToHex[bytes[14]] +
            byteToHex[bytes[15]]
        ).toLowerCase();
    }
}

