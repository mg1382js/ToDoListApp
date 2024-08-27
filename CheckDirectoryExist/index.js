import fs from 'fs';
import path from 'path';

export function checkDirectoryExist() {
    const Directories = ['Bootstrap', 'Controllers', 'Middleware', 'Router', 'DependencyInjection', 'Services', 'Utilities', 'View'];
    let ErrorMessage = []
    Directories.forEach((dir) => {
        const directoryPath = path.join(process.cwd(), dir);
        if (!fs.existsSync(directoryPath)) {
            console.log(`Directory ${dir} does not exist`);
        }

    });
    return ErrorMessage;
}