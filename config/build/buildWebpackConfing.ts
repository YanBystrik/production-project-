import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugin } from './buildPlugin';
import { buildLouders } from './buildLouders';
import { buildResoves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfing(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugin(paths.html),
    module: {
      rules: buildLouders(options),
    },
    resolve: buildResoves(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
