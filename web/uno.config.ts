import { defineConfig } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */ }),
    presetUno()
  ],
  rules: [
  ]
})