
declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary'];
    }
  
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  }

export * from './light'
export * from './dark'