import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Custom text-size tokens must not be mistaken for text colors by tailwind-merge.
const merge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['display-xxl', 'display-xl', 'display-lg', 'display-md', 'heading-lg', 'heading-md', 'heading-sm', 'body-lg', 'body-md', 'body-tabular', 'button-md', 'button-sm', 'caption', 'micro', 'micro-cap'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return merge(clsx(inputs))
}
