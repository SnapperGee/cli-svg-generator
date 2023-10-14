import { type Config } from 'jest';

export default async (): Promise<Config> => ({
    moduleDirectories: ["node_modules", "src"],
    modulePaths: ["<rootDir>"],
    roots: ["<rootDir>"]
})
