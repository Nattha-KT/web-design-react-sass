export default {
  // Check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint and Format TypeScript and JavaScript
  '**/*.(ts|tsx|js)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],
// Stylelint 
   '**/*.scss': ['stylelint --fix --rule "scss/load-no-partial-leading-underscore: null"'],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')} `,
};