import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: [
    ...(isProduction ? [purgecss({
      content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    })] : []),
    autoprefixer,
  ],
};
