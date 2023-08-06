export const staticGeneral = {
  // text-size
  'text-md': 'text-16px',
  'size-md': 'text-16px',

  // text color
  'text-base': 'text-$c-foreground',
  'text-inverted': 'text-$c-background',
  'text-muted': 'text-$c-muted-foreground',
  'text-info': 'text-info-500 dark:text-info-400',
  'text-error': 'text-error-500 dark:text-error-400',
  'text-success': 'text-success-500 dark:text-success-400',
  'text-warning': 'text-warning-500 dark:text-warning-400',

  // ring
  'ring-base': 'ring-$c-ring',
  'ring-inverted': 'ring-$c-ring-foreground',
  'ring-offset-base': 'ring-offset-$c-background',
  'ring-offset-inverted': 'ring-offset-$c-bg-foreground',

  // border
  'border-base': 'border-$c-border',

  // divide
  'divide-base': 'divide-$c-divider',

  // bg
  'bg-base': 'bg-$c-background',
  'bg-inverted': 'bg-$c-foreground',
  'bg-muted': 'bg-$c-muted',

  // icon
  'i-loading': 'i-heroicons-arrow-path-20-solid',
  'i-warning': 'i-heroicons-exclamation-triangle-20-solid',
  'i-error': 'i-heroicons-exclamation-circle-20-solid',
  'i-success': 'i-heroicons-check-circle-20-solid',
  'i-info': 'i-heroicons-information-circle-20-solid',
}

export const dynamicGeneral: [RegExp, (params: RegExpExecArray) => string][] = [
  //  add your dynamic general shortcuts here
]

export const general = [
  ...dynamicGeneral,
  staticGeneral,
]
