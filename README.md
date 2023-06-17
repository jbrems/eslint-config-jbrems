# eslint-config-jbrems

Personal eslint configuration

## Usage

In your project, create a file named `eslint.config.js`, import from `eslint-config-jbrems` and export as default.

```js
import jbremsEslintConfig from 'eslint-config-jbrems';

export default jbremsEslintConfig;
```

This configuration uses the [new eslint flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new#using-plugins-in-your-configuration) which no longer supports the `extends` option.

To extend or override the configuration, destructure it and add it at the start of your flat config array.

```js
import jbremsEslintConfig from 'eslint-config-jbrems';

export default [
  ...jbremsEslintConfig,
  {
    // your custom config here
  },
];
```