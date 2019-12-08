import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    }
  ],
  plugins: [ 
    uglify(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' 
    }) 
  ]
};