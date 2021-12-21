module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "consistent",
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: "always",
  quoteProps: "consistent",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};
