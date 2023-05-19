import { join } from 'node:path'

export const entry = join(__dirname, './index.tsx')
export const output = {
  path: join(__dirname, '../server/public'),
  filename: 'bundle.js',
}
export const mode = 'development'
export const module = {
  rules: [
    {
      test: /\.(j|t)sx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
  ],
}
export const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
}
export const devtool = 'source-map'
