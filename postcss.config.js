import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 1, // Use stage 1 features, or any other stage desired
    }),
    // Add other PostCSS plugins as needed
  ],
};