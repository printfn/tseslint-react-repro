// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react/configs/recommended.js';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintReact, // type error is on this line
	jsxRuntime,
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json', './tsconfig.node.json'],
			},
		},
	},
);
