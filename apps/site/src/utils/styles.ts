import clsx from 'clsx';

export const glassClassName = clsx(
  'backdrop-saturate-300 border-base-100 border-opacity-20 bg-black bg-opacity-20 backdrop-blur-md backdrop-filter',
);

export const borderClassName = clsx('border-1');

export function addGlassStyle(classes: string, haveBorder: boolean = true): string {
  return clsx(glassClassName, haveBorder ? borderClassName : '', classes);
}