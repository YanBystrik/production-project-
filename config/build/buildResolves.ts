import { ResolveOptions } from 'webpack';

export function buildResoves(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}
