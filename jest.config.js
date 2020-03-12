module.exports = {
	preset: 'jest-puppeteer',
	testMatch: ["**/?(*.)+(spec|test).[t]s"],
	testPathIgnorePatterns: ['/node_modules/', 'dist'], // 
	setupFilesAfterEnv: ['./jest.setup.ts'],
	transform: {
		"^.+\\.ts?$": "ts-jest"
  },
  globalSetup: './jest.global-setup.ts', // will be called once before all tests are executed
};