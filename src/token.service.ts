import { Injectable } from '@angular/core';
import { Token } from './token.typings';

const tokens = {
  'GEP Themes/Basic': {
    Platform: {
      '--themes-platform-white': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-platform-black': {
        value: '#000000',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-platform-transparent': {
        value: 'rgba(255,255,255,0)',
        type: 'color',
      },
    },
    Primary: {
      '--themes-primary-100': {
        value: '#05090e',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-200': {
        value: '#142338',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-300': {
        value: '#192c47',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-500-Default': {
        value: '#32588d',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-400': {
        value: '#233e63',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-600': {
        value: '#6f8aaf',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-700': {
        value: '#98abc6',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-800': {
        value: '#adbcd1',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-900': {
        value: '#c1cddd',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-primary-1000': {
        value: '#eaeef3',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
    },
    Typography: {
      '--themes-typography-100-primary': {
        value: '#1d1d1d',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-200': {
        value: '#303030',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-300-Seconday+ColourBG': {
        value: '#484848',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-400-Secondary': {
        value: '#5b5b5b',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-500': {
        value: '#8e8e8e',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-600': {
        value: '#c2c2c2',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-700': {
        value: '#e0e0e0',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-800': {
        value: '#eeeeee',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-900': {
        value: '#fafafa',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-typography-1000': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
    },
    Highlights: {
      '--themes-highlight-default': {
        value: '#2964bb',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-highlight-hover': {
        value: '#204e92',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-highlight-visited': {
        value: '#8a3ffc',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-highlight-DarkMode': {
        value: '#c7ddff',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-highlight-ALT': {
        value: '#e9f3fd',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
    },
    Special: {
      '--themes-special-Mandatory*': {
        value: '#feffe1',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-special-KeySelectedHighlight': {
        value: '#ad00ff',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
    },
    Indicator: {
      Green: {
        '--themes-indicator-green-100': {
          value: '#00510d',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-green-200-Default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-green-300': {
          value: '#d8e8e6',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
      },
      Blue: {
        '--themes-indicator-blue-100': {
          value: '#15355e',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-blue-200-Default': {
          value: '#6396d8',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-blue-300': {
          value: '#c7deff',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
      },
      Grey: {
        '--themes-indicator-grey-100': {
          value: '#3f464a',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-grey-200-Default': {
          value: '#64737d',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-grey-300': {
          value: '#f6f6f7',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
      },
      Orange: {
        '--themes-indicator-orange-100': {
          value: '#8e3700',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-orange-200-Default': {
          value: '#fb6304',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-orange-300': {
          value: '#f9dbc7',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
      },
      Red: {
        '--themes-indicator-red-100': {
          value: '#801311',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-red-200-Default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-red-300': {
          value: '#fce9e9',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
      },
      Yellow: {
        '--themes-indicator-yellow-100': {
          value: '#694002',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-yellow-200-Default': {
          value: '#e5ab09',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        '--themes-indicator-yellow-300': {
          value: '#ffe872',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
      },
    },
    AppBackground: {
      '--themes-background-100': {
        value: '#eef0f8',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-background-200': {
        value: '#f5f8ff',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-background-300': {
        value: '#f6f6f7',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--themes-background-400': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
    },
    'DataVisualization[NEW]': {
      Azure: {
        '--themes-data-azure-default': {
          value: '#2388e7',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-azure-100': {
            value: '#185fa2',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-200': {
            value: '#4fa0ec',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-300': {
            value: '#65acee',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-400': {
            value: '#7bb8f1',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-500': {
            value: '#91c3f3',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-600': {
            value: '#a7cff5',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-700': {
            value: '#bddbf8',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-800': {
            value: '#d3e7fa',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-azure-900': {
            value: '#e9f3fd',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      Yellow: {
        '--themes-data-yellow-default': {
          value: '#f2db0d',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-yellow-100': {
            value: '#a99909',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-200': {
            value: '#f5e23d',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-300': {
            value: '#f6e656',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-400': {
            value: '#f7e96e',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-500': {
            value: '#f9ed86',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-600': {
            value: '#faf19e',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-700': {
            value: '#fbf4b6',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-800': {
            value: '#fcf8cf',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-yellow-900': {
            value: '#fefbe7',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      Rose: {
        '--themes-data-rose-defaut': {
          value: '#f4428d',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-rose-100': {
            value: '#ab2e63',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-200': {
            value: '#f668a4',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-300': {
            value: '#f77baf',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-400': {
            value: '#f88ebb',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-500': {
            value: '#faa0c6',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-600': {
            value: '#fbb3d1',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-700': {
            value: '#fcc6dd',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-800': {
            value: '#fdd9e8',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-rose-900': {
            value: '#feecf4',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      Purple: {
        '--themes-data-purple-default': {
          value: '#6123e7',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-purple-100': {
            value: '#4418a2',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-200': {
            value: '#814fec',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-300': {
            value: '#9065ee',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-400': {
            value: '#a07bf1',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-500': {
            value: '#b091f3',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-600': {
            value: '#c0a7f5',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-700': {
            value: '#d0bdf8',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-800': {
            value: '#dfd3fa',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-purple-900': {
            value: '#efe9fd',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      Orange: {
        '--themes-data-orange-default': {
          value: '#ed9209',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-orange-100': {
            value: '#a66606',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-200': {
            value: '#f1a83a',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-300': {
            value: '#f2b353',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-400': {
            value: '#f4be6b',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-500': {
            value: '#f6c884',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-600': {
            value: '#f8d39d',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-700': {
            value: '#fadeb5',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-800': {
            value: '#fbe9ce',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-orange-900': {
            value: '#fdf4e6',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      Green: {
        '--themes-data-green-default': {
          value: '#12af8a',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-green-100': {
            value: '#2e8f78',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-200': {
            value: '#41bfa1',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-300': {
            value: '#59c7ad',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-400': {
            value: '#88d7c4',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-500': {
            value: '#a0dfd0',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-600': {
            value: '#b3ebdd',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-700': {
            value: '#c6f0e6',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-800': {
            value: '#d9f5ee',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-900': {
            value: '#ecfaf7',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      Grey: {
        '--themes-data-grey-default': {
          value: '#83888d',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-grey-100': {
            value: '#5c5f63',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-200': {
            value: '#9ca0a4',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-300': {
            value: '#a8acaf',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-400': {
            value: '#b5b8bb',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-500': {
            value: '#c1c3c6',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-600': {
            value: '#cdcfd1',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-700': {
            value: '#dadbdd',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-800': {
            value: '#e8eaee',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-grey-900': {
            value: '#f3f3f4',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      'Red-Warning': {
        '--themes-data-red-warning-default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-red-100': {
            value: '#801311',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-200': {
            value: '#e63935',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-300': {
            value: '#e94f4c',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-400': {
            value: '#eb6562',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-500': {
            value: '#f1918f',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-600': {
            value: '#f4a7a5',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-700': {
            value: '#f7bdbc',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-800': {
            value: '#f9d3d2',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-red-900': {
            value: '#fce9e9',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
      GreenSuccess: {
        '--themes-data-green-success-default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Basic',
          description: '',
        },
        Shades: {
          '--themes-data-green-success-100': {
            value: '#00510d',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-200': {
            value: '#69ae6d',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-300': {
            value: '#79b77d',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-400': {
            value: '#8ac08e',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-500': {
            value: '#9bc99e',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-600': {
            value: '#acd2ae',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-700': {
            value: '#bcdbbe',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-800': {
            value: '#deeddf',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
          '--themes-data-green-success-900': {
            value: '#eef6ef',
            type: 'color',
            parent: 'GEP Themes/Basic',
            description: '',
          },
        },
      },
    },
    Minerva: {
      '--minerva-primary': {
        value: '#2f327c',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--minerva-dark': {
        value: '#040725',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--minerva-mid': {
        value: '#d0d4f7',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
      '--minerva-surface': {
        value: '#ecedf8',
        type: 'color',
        parent: 'GEP Themes/Basic',
        description: '',
      },
    },
  },
  'GEP Themes/Green': {
    Platform: {
      '--themes-platform-white': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-platform-black': {
        value: '#000000',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--Transparent': {
        value: '#ffffff00',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
    },
    Primary: {
      '--themes-primary-100': {
        value: '#013739',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-200': {
        value: '#01484a',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-300': {
        value: '#015d60',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-500-Default': {
        value: '#028387',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-400': {
        value: '#02777b',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-600': {
        value: '#359c9f',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-700': {
        value: '#55acaf',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-800': {
        value: '#8bc6c8',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-900': {
        value: '#b1d9da',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-primary-1000': {
        value: '#e6f3f3',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
    },
    Typography: {
      '--themes-typography-100-primary': {
        value: '#1d1d1d',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-200': {
        value: '#303030',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-300-Seconday+ColourBG': {
        value: '#484848',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-400-Secondary': {
        value: '#5b5b5b',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-500': {
        value: '#8e8e8e',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-600': {
        value: '#c2c2c2',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-700': {
        value: '#e0e0e0',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-800': {
        value: '#eeeeee',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-900': {
        value: '#fafafa',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-typography-1000': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
    },
    Highlights: {
      '--themes-highlight-default': {
        value: '#2964bb',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-highlight-hover': {
        value: '#204e92',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-highlight-visited': {
        value: '#8a3ffc',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-highlight-DarkMode': {
        value: '#c7ddff',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-highlight-ALT': {
        value: '#e9f3fd',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
    },
    Special: {
      '--themes-special-Mandatory*': {
        value: '#feffe1',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-special-KeySelectedHighlight': {
        value: '#ad00ff',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
    },
    Indicator: {
      Green: {
        '--themes-indicator-green-100': {
          value: '#00510d',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-green-200-Default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-green-300': {
          value: '#d8e8e6',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
      },
      Blue: {
        '--themes-indicator-blue-100': {
          value: '#15355e',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-blue-200-Default': {
          value: '#6396d8',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-blue-300': {
          value: '#c7deff',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
      },
      Grey: {
        '--themes-indicator-grey-100': {
          value: '#3f464a',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-grey-200-Default': {
          value: '#64737d',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-grey-300': {
          value: '#f6f6f7',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
      },
      Orange: {
        '--themes-indicator-orange-100': {
          value: '#8e3700',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-orange-200-Default': {
          value: '#fb6304',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-orange-300': {
          value: '#f9dbc7',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
      },
      Red: {
        '--themes-indicator-red-100': {
          value: '#801311',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-red-200-Default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-red-300': {
          value: '#fce9e9',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
      },
      Yellow: {
        '--themes-indicator-yellow-100': {
          value: '#694002',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-yellow-200-Default': {
          value: '#e5ab09',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        '--themes-indicator-yellow-300': {
          value: '#ffe872',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
      },
    },
    AppBackground: {
      '--themes-background-100': {
        value: '#e6f3f3',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-background-200': {
        value: '#f9fff5',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-background-300': {
        value: '#f6f6f7',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--themes-background-400': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
    },
    'DataVisualization[NEW]': {
      Azure: {
        '--themes-data-azure-default': {
          value: '#2388e7',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-azure-100': {
            value: '#185fa2',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-200': {
            value: '#4fa0ec',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-300': {
            value: '#65acee',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-400': {
            value: '#7bb8f1',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-500': {
            value: '#91c3f3',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-600': {
            value: '#a7cff5',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-700': {
            value: '#bddbf8',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-800': {
            value: '#d3e7fa',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-azure-900': {
            value: '#e9f3fd',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      Yellow: {
        '--themes-data-yellow-default': {
          value: '#f2db0d',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-yellow-100': {
            value: '#a99909',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-200': {
            value: '#f5e23d',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-300': {
            value: '#f6e656',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-400': {
            value: '#f7e96e',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-500': {
            value: '#f9ed86',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-600': {
            value: '#faf19e',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-700': {
            value: '#fbf4b6',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-800': {
            value: '#fcf8cf',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-yellow-900': {
            value: '#fefbe7',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      Rose: {
        '--themes-data-rose-defaut': {
          value: '#f4428d',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-rose-100': {
            value: '#ab2e63',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-200': {
            value: '#f668a4',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-300': {
            value: '#f77baf',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-400': {
            value: '#f88ebb',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-500': {
            value: '#faa0c6',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-600': {
            value: '#fbb3d1',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-700': {
            value: '#fcc6dd',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-800': {
            value: '#fdd9e8',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-rose-900': {
            value: '#feecf4',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      Purple: {
        '--themes-data-purple-default': {
          value: '#6123e7',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-purple-100': {
            value: '#4418a2',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-200': {
            value: '#814fec',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-300': {
            value: '#9065ee',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-400': {
            value: '#a07bf1',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-500': {
            value: '#b091f3',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-600': {
            value: '#c0a7f5',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-700': {
            value: '#d0bdf8',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-800': {
            value: '#dfd3fa',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-purple-900': {
            value: '#efe9fd',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      Orange: {
        '--themes-data-orange-default': {
          value: '#ed9209',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-orange-100': {
            value: '#a66606',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-200': {
            value: '#f1a83a',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-300': {
            value: '#f2b353',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-400': {
            value: '#f4be6b',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-500': {
            value: '#f6c884',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-600': {
            value: '#f8d39d',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-700': {
            value: '#fadeb5',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-800': {
            value: '#fbe9ce',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-orange-900': {
            value: '#fdf4e6',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      Green: {
        '--themes-data-green-default': {
          value: '#12af8a',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-green-100': {
            value: '#2e8f78',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-200': {
            value: '#41bfa1',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-300': {
            value: '#59c7ad',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-400': {
            value: '#88d7c4',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-500': {
            value: '#a0dfd0',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-600': {
            value: '#b3ebdd',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-700': {
            value: '#c6f0e6',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-800': {
            value: '#d9f5ee',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-900': {
            value: '#ecfaf7',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      Grey: {
        '--themes-data-grey-default': {
          value: '#83888d',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-grey-100': {
            value: '#5c5f63',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-200': {
            value: '#9ca0a4',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-300': {
            value: '#a8acaf',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-400': {
            value: '#b5b8bb',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-500': {
            value: '#c1c3c6',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-600': {
            value: '#cdcfd1',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-700': {
            value: '#dadbdd',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-800': {
            value: '#e8eaee',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-grey-900': {
            value: '#f3f3f4',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      'Red-Warning': {
        '--themes-data-red-warning-default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-red-100': {
            value: '#801311',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-200': {
            value: '#e63935',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-300': {
            value: '#e94f4c',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-400': {
            value: '#eb6562',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-500': {
            value: '#f1918f',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-600': {
            value: '#f4a7a5',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-700': {
            value: '#f7bdbc',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-800': {
            value: '#f9d3d2',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-red-900': {
            value: '#fce9e9',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
      GreenSuccess: {
        '--themes-data-green-success-default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Green',
          description: '',
        },
        Shades: {
          '--themes-data-green-success-100': {
            value: '#00510d',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-200': {
            value: '#69ae6d',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-300': {
            value: '#79b77d',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-400': {
            value: '#8ac08e',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-500': {
            value: '#9bc99e',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-600': {
            value: '#acd2ae',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-700': {
            value: '#bcdbbe',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-800': {
            value: '#deeddf',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
          '--themes-data-green-success-900': {
            value: '#eef6ef',
            type: 'color',
            parent: 'GEP Themes/Green',
            description: '',
          },
        },
      },
    },
    Minerva: {
      '--minerva-primary': {
        value: '#2f327c',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--minerva-dark': {
        value: '#040725',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--minerva-mid': {
        value: '#d0d4f7',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
      '--minerva-surface': {
        value: '#ecedf8',
        type: 'color',
        parent: 'GEP Themes/Green',
        description: '',
      },
    },
  },
  'GEP Themes/Blue (New)': {
    Platform: {
      '--themes-platform-white': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-platform-black': {
        value: '#000000',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--Transparent': {
        value: '#ffffff00',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
    },
    Primary: {
      '--themes-primary-100': {
        value: '#002a5c',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-200': {
        value: '#013879',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-300': {
        value: '#01489c',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-500-Default': {
        value: '#0165dc',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-400': {
        value: '#015cc8',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-600': {
        value: '#3484e3',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-700': {
        value: '#5598e8',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-800': {
        value: '#8ab8ef',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-900': {
        value: '#b0cff4',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-primary-1000': {
        value: '#e6f0fc',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
    },
    Typography: {
      '--themes-typography-100-primary': {
        value: '#1d1d1d',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-200': {
        value: '#303030',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-300-Seconday+ColourBG': {
        value: '#484848',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-400-Secondary': {
        value: '#5b5b5b',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-500': {
        value: '#8e8e8e',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-600': {
        value: '#c2c2c2',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-700': {
        value: '#e0e0e0',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-800': {
        value: '#eeeeee',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-900': {
        value: '#fafafa',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-typography-1000': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
    },
    Highlights: {
      '--themes-highlight-default': {
        value: '#2964bb',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-highlight-hover': {
        value: '#204e92',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-highlight-visited': {
        value: '#8a3ffc',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-highlight-DarkMode': {
        value: '#c7ddff',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-highlight-ALT': {
        value: '#e9f3fd',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
    },
    Special: {
      '--themes-special-Mandatory*': {
        value: '#feffe1',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-special-KeySelectedHighlight': {
        value: '#ad00ff',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
    },
    Indicator: {
      Green: {
        '--themes-indicator-green-100': {
          value: '#00510d',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-green-200-Default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-green-300': {
          value: '#d8e8e6',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
      },
      Blue: {
        '--themes-indicator-blue-100': {
          value: '#15355e',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-blue-200-Default': {
          value: '#6396d8',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-blue-300': {
          value: '#c7deff',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
      },
      Grey: {
        '--themes-indicator-grey-100': {
          value: '#3f464a',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-grey-200-Default': {
          value: '#64737d',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-grey-300': {
          value: '#f6f6f7',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
      },
      Orange: {
        '--themes-indicator-orange-100': {
          value: '#8e3700',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-orange-200-Default': {
          value: '#fb6304',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-orange-300': {
          value: '#f9dbc7',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
      },
      Red: {
        '--themes-indicator-red-100': {
          value: '#801311',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-red-200-Default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-red-300': {
          value: '#fce9e9',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
      },
      Yellow: {
        '--themes-indicator-yellow-100': {
          value: '#694002',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-yellow-200-Default': {
          value: '#e5ab09',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        '--themes-indicator-yellow-300': {
          value: '#ffe872',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
      },
    },
    AppBackground: {
      '--themes-background-100': {
        value: '#f6e9ea',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-background-200': {
        value: '#fff5f5',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-background-300': {
        value: '#f6f6f7',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--themes-background-400': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
    },
    'DataVisualization[NEW]': {
      Azure: {
        '--themes-data-azure-default': {
          value: '#2388e7',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-azure-100': {
            value: '#185fa2',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-200': {
            value: '#4fa0ec',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-300': {
            value: '#65acee',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-400': {
            value: '#7bb8f1',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-500': {
            value: '#91c3f3',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-600': {
            value: '#a7cff5',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-700': {
            value: '#bddbf8',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-800': {
            value: '#d3e7fa',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-azure-900': {
            value: '#e9f3fd',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      Yellow: {
        '--themes-data-yellow-default': {
          value: '#f2db0d',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-yellow-100': {
            value: '#a99909',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-200': {
            value: '#f5e23d',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-300': {
            value: '#f6e656',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-400': {
            value: '#f7e96e',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-500': {
            value: '#f9ed86',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-600': {
            value: '#faf19e',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-700': {
            value: '#fbf4b6',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-800': {
            value: '#fcf8cf',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-yellow-900': {
            value: '#fefbe7',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      Rose: {
        '--themes-data-rose-defaut': {
          value: '#f4428d',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-rose-100': {
            value: '#ab2e63',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-200': {
            value: '#f668a4',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-300': {
            value: '#f77baf',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-400': {
            value: '#f88ebb',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-500': {
            value: '#faa0c6',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-600': {
            value: '#fbb3d1',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-700': {
            value: '#fcc6dd',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-800': {
            value: '#fdd9e8',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-rose-900': {
            value: '#feecf4',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      Purple: {
        '--themes-data-purple-default': {
          value: '#6123e7',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-purple-100': {
            value: '#4418a2',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-200': {
            value: '#814fec',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-300': {
            value: '#9065ee',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-400': {
            value: '#a07bf1',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-500': {
            value: '#b091f3',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-600': {
            value: '#c0a7f5',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-700': {
            value: '#d0bdf8',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-800': {
            value: '#dfd3fa',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-purple-900': {
            value: '#efe9fd',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      Orange: {
        '--themes-data-orange-default': {
          value: '#ed9209',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-orange-100': {
            value: '#a66606',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-200': {
            value: '#f1a83a',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-300': {
            value: '#f2b353',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-400': {
            value: '#f4be6b',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-500': {
            value: '#f6c884',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-600': {
            value: '#f8d39d',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-700': {
            value: '#fadeb5',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-800': {
            value: '#fbe9ce',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-orange-900': {
            value: '#fdf4e6',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      Green: {
        '--themes-data-green-default': {
          value: '#12af8a',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-green-100': {
            value: '#2e8f78',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-200': {
            value: '#41bfa1',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-300': {
            value: '#59c7ad',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-400': {
            value: '#88d7c4',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-500': {
            value: '#a0dfd0',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-600': {
            value: '#b3ebdd',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-700': {
            value: '#c6f0e6',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-800': {
            value: '#d9f5ee',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-900': {
            value: '#ecfaf7',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      Grey: {
        '--themes-data-grey-default': {
          value: '#83888d',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-grey-100': {
            value: '#5c5f63',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-200': {
            value: '#9ca0a4',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-300': {
            value: '#a8acaf',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-400': {
            value: '#b5b8bb',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-500': {
            value: '#c1c3c6',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-600': {
            value: '#cdcfd1',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-700': {
            value: '#dadbdd',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-800': {
            value: '#e8eaee',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-grey-900': {
            value: '#f3f3f4',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      'Red-Warning': {
        '--themes-data-red-warning-default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-red-100': {
            value: '#801311',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-200': {
            value: '#e63935',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-300': {
            value: '#e94f4c',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-400': {
            value: '#eb6562',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-500': {
            value: '#f1918f',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-600': {
            value: '#f4a7a5',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-700': {
            value: '#f7bdbc',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-800': {
            value: '#f9d3d2',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-red-900': {
            value: '#fce9e9',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
      GreenSuccess: {
        '--themes-data-green-success-default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Blue (New)',
          description: '',
        },
        Shades: {
          '--themes-data-green-success-100': {
            value: '#00510d',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-200': {
            value: '#69ae6d',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-300': {
            value: '#79b77d',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-400': {
            value: '#8ac08e',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-500': {
            value: '#9bc99e',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-600': {
            value: '#acd2ae',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-700': {
            value: '#bcdbbe',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-800': {
            value: '#deeddf',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
          '--themes-data-green-success-900': {
            value: '#eef6ef',
            type: 'color',
            parent: 'GEP Themes/Blue (New)',
            description: '',
          },
        },
      },
    },
    Minerva: {
      '--minerva-primary': {
        value: '#2f327c',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--minerva-dark': {
        value: '#040725',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--minerva-mid': {
        value: '#d0d4f7',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
      '--minerva-surface': {
        value: '#ecedf8',
        type: 'color',
        parent: 'GEP Themes/Blue (New)',
        description: '',
      },
    },
  },
  'GEP Themes/Purple': {
    Platform: {
      '--themes-platform-white': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-platform-black': {
        value: '#000000',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--Transparent': {
        value: '#ffffff00',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
    },
    Primary: {
      '--themes-primary-100': {
        value: '#1b2248',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-200': {
        value: '#242d5e',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-300': {
        value: '#2e3a79',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-500-Default': {
        value: '#4151ab',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-400': {
        value: '#3b4a9c',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-600': {
        value: '#6774bc',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-700': {
        value: '#808ac7',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-800': {
        value: '#a8afd8',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-900': {
        value: '#c4c9e5',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-primary-1000': {
        value: '#eceef7',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
    },
    Typography: {
      '--themes-typography-100-primary': {
        value: '#1d1d1d',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-200': {
        value: '#303030',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-300-Seconday+ColourBG': {
        value: '#484848',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-400-Secondary': {
        value: '#5b5b5b',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-500': {
        value: '#8e8e8e',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-600': {
        value: '#c2c2c2',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-700': {
        value: '#e0e0e0',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-800': {
        value: '#eeeeee',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-900': {
        value: '#fafafa',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-typography-1000': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
    },
    Highlights: {
      '--themes-highlight-default': {
        value: '#2964bb',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-highlight-hover': {
        value: '#204e92',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-highlight-visited': {
        value: '#8a3ffc',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-highlight-DarkMode': {
        value: '#c7ddff',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-highlight-ALT': {
        value: '#e9f3fd',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
    },
    Special: {
      '--themes-special-Mandatory*': {
        value: '#feffe1',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-special-KeySelectedHighlight': {
        value: '#ad00ff',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
    },
    Indicator: {
      Green: {
        '--themes-indicator-green-100': {
          value: '#00510d',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-green-200-Default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-green-300': {
          value: '#d8e8e6',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
      },
      Blue: {
        '--themes-indicator-blue-100': {
          value: '#15355e',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-blue-200-Default': {
          value: '#6396d8',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-blue-300': {
          value: '#c7deff',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
      },
      Grey: {
        '--themes-indicator-grey-100': {
          value: '#3f464a',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-grey-200-Default': {
          value: '#64737d',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-grey-300': {
          value: '#f6f6f7',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
      },
      Orange: {
        '--themes-indicator-orange-100': {
          value: '#8e3700',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-orange-200-Default': {
          value: '#fb6304',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-orange-300': {
          value: '#f9dbc7',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
      },
      Red: {
        '--themes-indicator-red-100': {
          value: '#801311',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-red-200-Default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-red-300': {
          value: '#fce9e9',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
      },
      Yellow: {
        '--themes-indicator-yellow-100': {
          value: '#694002',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-yellow-200-Default': {
          value: '#e5ab09',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        '--themes-indicator-yellow-300': {
          value: '#ffe872',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
      },
    },
    AppBackground: {
      '--themes-background-100': {
        value: '#eceef7',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-background-200': {
        value: '#faf5ff',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-background-300': {
        value: '#f6f6f7',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--themes-background-400': {
        value: '#ffffff',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
    },
    'DataVisualization[NEW]': {
      Azure: {
        '--themes-data-azure-default': {
          value: '#2388e7',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-azure-100': {
            value: '#185fa2',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-200': {
            value: '#4fa0ec',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-300': {
            value: '#65acee',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-400': {
            value: '#7bb8f1',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-500': {
            value: '#91c3f3',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-600': {
            value: '#a7cff5',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-700': {
            value: '#bddbf8',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-800': {
            value: '#d3e7fa',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-azure-900': {
            value: '#e9f3fd',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      Yellow: {
        '--themes-data-yellow-default': {
          value: '#f2db0d',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-yellow-100': {
            value: '#a99909',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-200': {
            value: '#f5e23d',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-300': {
            value: '#f6e656',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-400': {
            value: '#f7e96e',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-500': {
            value: '#f9ed86',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-600': {
            value: '#faf19e',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-700': {
            value: '#fbf4b6',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-800': {
            value: '#fcf8cf',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-yellow-900': {
            value: '#fefbe7',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      Rose: {
        '--themes-data-rose-defaut': {
          value: '#f4428d',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-rose-100': {
            value: '#ab2e63',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-200': {
            value: '#f668a4',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-300': {
            value: '#f77baf',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-400': {
            value: '#f88ebb',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-500': {
            value: '#faa0c6',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-600': {
            value: '#fbb3d1',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-700': {
            value: '#fcc6dd',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-800': {
            value: '#fdd9e8',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-rose-900': {
            value: '#feecf4',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      Purple: {
        '--themes-data-purple-default': {
          value: '#6123e7',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-purple-100': {
            value: '#4418a2',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-200': {
            value: '#814fec',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-300': {
            value: '#9065ee',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-400': {
            value: '#a07bf1',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-500': {
            value: '#b091f3',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-600': {
            value: '#c0a7f5',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-700': {
            value: '#d0bdf8',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-800': {
            value: '#dfd3fa',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-purple-900': {
            value: '#efe9fd',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      Orange: {
        '--themes-data-orange-default': {
          value: '#ed9209',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-orange-100': {
            value: '#a66606',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-200': {
            value: '#f1a83a',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-300': {
            value: '#f2b353',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-400': {
            value: '#f4be6b',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-500': {
            value: '#f6c884',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-600': {
            value: '#f8d39d',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-700': {
            value: '#fadeb5',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-800': {
            value: '#fbe9ce',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-orange-900': {
            value: '#fdf4e6',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      Green: {
        '--themes-data-green-default': {
          value: '#12af8a',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-green-100': {
            value: '#2e8f78',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-200': {
            value: '#41bfa1',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-300': {
            value: '#59c7ad',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-400': {
            value: '#88d7c4',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-500': {
            value: '#a0dfd0',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-600': {
            value: '#b3ebdd',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-700': {
            value: '#c6f0e6',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-800': {
            value: '#d9f5ee',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-900': {
            value: '#ecfaf7',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      Grey: {
        '--themes-data-grey-default': {
          value: '#83888d',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-grey-100': {
            value: '#5c5f63',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-200': {
            value: '#9ca0a4',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-300': {
            value: '#a8acaf',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-400': {
            value: '#b5b8bb',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-500': {
            value: '#c1c3c6',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-600': {
            value: '#cdcfd1',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-700': {
            value: '#dadbdd',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-800': {
            value: '#e8eaee',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-grey-900': {
            value: '#f3f3f4',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      'Red-Warning': {
        '--themes-data-red-warning-default': {
          value: '#e3231f',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-red-100': {
            value: '#801311',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-200': {
            value: '#e63935',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-300': {
            value: '#e94f4c',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-400': {
            value: '#eb6562',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-500': {
            value: '#f1918f',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-600': {
            value: '#f4a7a5',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-700': {
            value: '#f7bdbc',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-800': {
            value: '#f9d3d2',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-red-900': {
            value: '#fce9e9',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
      GreenSuccess: {
        '--themes-data-green-success-default': {
          value: '#58a55d',
          type: 'color',
          parent: 'GEP Themes/Purple',
          description: '',
        },
        Shades: {
          '--themes-data-green-success-100': {
            value: '#00510d',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-200': {
            value: '#69ae6d',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-300': {
            value: '#79b77d',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-400': {
            value: '#8ac08e',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-500': {
            value: '#9bc99e',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-600': {
            value: '#acd2ae',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-700': {
            value: '#bcdbbe',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-800': {
            value: '#deeddf',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
          '--themes-data-green-success-900': {
            value: '#eef6ef',
            type: 'color',
            parent: 'GEP Themes/Purple',
            description: '',
          },
        },
      },
    },
    Minerva: {
      '--minerva-primary': {
        value: '#2f327c',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--minerva-dark': {
        value: '#040725',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--minerva-mid': {
        value: '#d0d4f7',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
      '--minerva-surface': {
        value: '#ecedf8',
        type: 'color',
        parent: 'GEP Themes/Purple',
        description: '',
      },
    },
  },
  'GEP Layout/Default': {
    'Global Surface Colours': {
      '--global-colour-page-background': {
        value: '{AppBackground.--themes-background-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-content-background': {
        value: '{AppBackground.--themes-background-400}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-content-background-highlight': {
        value: '{AppBackground.--themes-background-200}',
        type: 'color',
        parent: 'GEP Layout/Default',
      },
      '--global-colour-content-background-ALT': {
        value: '{AppBackground.--themes-background-300}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-content-background-Dark': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-content-border': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
    },
    'Global Font colours': {
      '--global-colour-header-text': {
        value: '{Typography.--themes-typography-100-primary}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-paragraph-header-text': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-paragraph-body-text': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-paragraph-icon': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-header-text-ALT': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-indicator-default': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-indicator-intermidiate': {
        value: '{Indicator.Blue.--themes-indicator-blue-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-indicator-default-ALT': {
        value: '{Typography.--themes-typography-1000}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-indicator-success': {
        value: '{Indicator.Green.--themes-indicator-green-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-indicator-important': {
        value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-indicator-error': {
        value: '{Indicator.Red.--themes-indicator-red-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-indicator-warning': {
        value: '{Indicator.Orange.--themes-indicator-orange-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-text-disabled': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
    },
    Components: {
      Input: {
        '--input-colour-label': {
          value: '{Typography.--themes-typography-400-Secondary}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--font-input-data': {
          value: '{Typography.--themes-typography-100-primary}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--font-input-placeholder': {
          value: '{Typography.--themes-typography-400-Secondary}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '---input-color-primary-background': {
          value: '{AppBackground.--themes-background-400}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '---input-color-secondary-border': {
          value: '{Typography.--themes-typography-500}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '---input-color-border-active': {
          value: '{Primary.--themes-primary-200}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
      },
      Buttons: {
        Primary: {
          '--button-color-primary-text': {
            value: '{Typography.--themes-typography-1000}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-primary-background': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-primary-background-hover': {
            value: '{Primary.--themes-primary-300}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-primary-background-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
        },
        Secondary: {
          '--button-color-secondary-text': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-secondary-background': {
            value: '{AppBackground.--themes-background-400}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-secondary-border': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '--button-color-secondary-text-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-secondary-background-hover': {
            value: '{Primary.--themes-primary-1000}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-secondary-border-hover': {
            value: '{Primary.--themes-primary-300}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-secondary-border-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
        },
        Tertiary: {
          '--button-color-tertiary-text': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-tertiary-background': {
            value: '{Platform.--Transparent}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '---button-color-background-hover': {
            value: '{Primary.--themes-primary-1000}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '--button-color-tertiary-textactive': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
        },
        Disabled: {
          '--button-colour-disabled-background': {
            value: '{Typography.--themes-typography-600}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
          '--button-color-disabled-text': {
            value: '{Typography.--themes-typography-500}',
            type: 'color',
            parent: 'GEP Layout/Default',
            description: '',
          },
        },
      },
      Status: {
        '--status-color-pending-background': {
          value: '{Indicator.Blue.--themes-indicator-blue-300}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-draft-background-ALT': {
          value: '{Indicator.Grey.--themes-indicator-grey-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-pending-background-ALT': {
          value: '{Indicator.Blue.--themes-indicator-blue-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-warning-background-ALT': {
          value: '{Indicator.Orange.--themes-indicator-orange-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-intermidiate-background-ALT': {
          value: '{Indicator.Grey.--themes-indicator-grey-100}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-error-background-ALT': {
          value: '{Indicator.Red.--themes-indicator-red-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-success-background': {
          value: '{Indicator.Green.--themes-indicator-green-300}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-important-background': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-300}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-warning-background': {
          value: '{Indicator.Orange.--themes-indicator-orange-300}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-error-background': {
          value: '{Indicator.Red.--themes-indicator-red-300}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-version-background': {
          value: '{Typography.--themes-typography-100-primary}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-custom-background': {
          value: '{Primary.--themes-primary-500-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-success-background-ALT': {
          value: '{Indicator.Green.--themes-indicator-green-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-important-background-ALT': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-pending-text': {
          value: '{Indicator.Blue.--themes-indicator-blue-100}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-success-text': {
          value: '{Indicator.Green.--themes-indicator-green-100}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-important-text': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-warning-text': {
          value: '{Indicator.Orange.--themes-indicator-orange-100}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-error-text': {
          value: '{Indicator.Red.--themes-indicator-red-100}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-default-text-ALT': {
          value: '{Typography.--themes-typography-1000}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-pending-border': {
          value: '{Indicator.Blue.--themes-indicator-blue-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-success-border': {
          value: '{Indicator.Green.--themes-indicator-green-300}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-important-border': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-warning-border': {
          value: '{Indicator.Orange.--themes-indicator-orange-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-error-border': {
          value: '{Indicator.Red.--themes-indicator-red-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-draft-background': {
          value: '{Indicator.Grey.--themes-indicator-grey-300}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-draft-border': {
          value: '{Indicator.Grey.--themes-indicator-grey-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-draft-text': {
          value: '{Indicator.Grey.--themes-indicator-grey-100}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--status-color-rating-background': {
          value: '{Primary.--themes-primary-200}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
      },
      Link: {
        '--link-color-text': {
          value: '{Highlights.--themes-highlight-default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--link-color-text-hover': {
          value: '{Highlights.--themes-highlight-hover}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--link-color-text-visited': {
          value: '{Highlights.--themes-highlight-visited}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--link-color-icon': {
          value: '{Highlights.--themes-highlight-default}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--link-color-icon-hover': {
          value: '{Highlights.--themes-highlight-hover}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
        '--link-color-icon-visited': {
          value: '{Highlights.--themes-highlight-visited}',
          type: 'color',
          parent: 'GEP Layout/Default',
          description: '',
        },
      },
    },
    'Global Element Colours': {
      '--global-colour-background-default': {
        value: '{Primary.--themes-primary-1000}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-divider-default': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour--border-primary': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-background-highlight': {
        value: '{Highlights.--themes-highlight-ALT}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour--border-default': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-background-disabled': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour--border-subtle': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-primary-background': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-primary-background-hover': {
        value: '{Primary.--themes-primary-300}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-primary-background-active': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-background-default-ALT': {
        value: '{AppBackground.--themes-background-400}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-primary-border': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-primary-border-hover': {
        value: '{Primary.--themes-primary-300}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-primary-border-active': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
    },
    'Global Data Colors': {
      '--data-viz-azure': {
        value: '{DataVisualization[NEW].Azure.--themes-data-azure-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-yellow': {
        value: '{DataVisualization[NEW].Yellow.--themes-data-yellow-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-rose': {
        value: '{DataVisualization[NEW].Rose.--themes-data-rose-defaut}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-purple': {
        value: '{DataVisualization[NEW].Purple.--themes-data-purple-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-orange': {
        value: '{DataVisualization[NEW].Orange.--themes-data-orange-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-green': {
        value: '{DataVisualization[NEW].Green.--themes-data-green-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-grey': {
        value: '{DataVisualization[NEW].Grey.--themes-data-grey-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-warining': {
        value:
          '{DataVisualization[NEW].Red-Warning.--themes-data-red-warning-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--data-viz-success': {
        value:
          '{DataVisualization[NEW].GreenSuccess.--themes-data-green-success-default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
    },
    'Global Icon Colors': {
      '--global-colour-icon-default': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-success': {
        value: '{Indicator.Green.--themes-indicator-green-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-important': {
        value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-warning': {
        value: '{Indicator.Orange.--themes-indicator-orange-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-error': {
        value: '{Indicator.Red.--themes-indicator-red-100}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-primary': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-bold': {
        value: '{Typography.--themes-typography-100-primary}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-minerva': {
        value: '{Minerva.--minerva-primary}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-disabled': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-subtle': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-colour-icon-default-ALT': {
        value: '{Typography.--themes-typography-1000}',
        type: 'color',
        parent: 'GEP Layout/Default',
        description: '',
      },
    },
    'Global Sizes': {
      '--global-size-XXSmall': {
        value: '4px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-size-XSmall': {
        value: '8px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-size-Small': {
        value: '12px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-size-Medium': {
        value: '20px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-size-xLarge': {
        value: '32px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-size-XXLarge': {
        value: '40px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-size-Base': {
        value: '16px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-size-Large': {
        value: '24px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
    },
    'Corner Radius': {
      '--global-radius-element': {
        value: '4px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-radius-container': {
        value: '8px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-radius-content': {
        value: '12px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
      '--global-radius-page': {
        value: '16px',
        type: 'dimension',
        parent: 'GEP Layout/Default',
        description: '',
      },
    },
    'Table Inner': {
      value: {
        color: '#32588d29',
        type: 'innerShadow',
        x: '2',
        y: '0',
        blur: '4',
        spread: '0',
      },
      type: 'boxShadow',
    },
    'Inner-Fade': {
      value: {
        color: '#ffffff',
        type: 'innerShadow',
        x: '-4',
        y: '0',
        blur: '8',
        spread: '0',
      },
      type: 'boxShadow',
    },
    Elevation: {
      Important: {
        value: {
          color: '#32588d52',
          type: 'dropShadow',
          x: '0',
          y: '8',
          blur: '32',
          spread: '0',
        },
        type: 'boxShadow',
      },
      Highlight: {
        value: {
          color: '#32588d3d',
          type: 'dropShadow',
          x: '0',
          y: '4',
          blur: '16',
          spread: '0',
        },
        type: 'boxShadow',
      },
      Card: {
        value: {
          color: '#32588d29',
          type: 'dropShadow',
          x: '0',
          y: '2',
          blur: '16',
          spread: '0',
        },
        type: 'boxShadow',
      },
      Float: {
        value: {
          color: '#32588d14',
          type: 'dropShadow',
          x: '0',
          y: '2',
          blur: '8',
          spread: '0',
        },
        type: 'boxShadow',
      },
    },
    Overlays: {
      'Slide-out': {
        value: {
          color: '#32588d29',
          type: 'dropShadow',
          x: '-8',
          y: '0',
          blur: '32',
          spread: '0',
        },
        type: 'boxShadow',
      },
    },
    Sticky: {
      Right: {
        value: {
          color: '#32588d29',
          type: 'dropShadow',
          x: '-2',
          y: '0',
          blur: '8',
          spread: '0',
        },
        type: 'boxShadow',
      },
      Bottom: {
        value: {
          color: '#32588d29',
          type: 'dropShadow',
          x: '0',
          y: '-2',
          blur: '8',
          spread: '0',
        },
        type: 'boxShadow',
      },
      Top: {
        value: {
          color: '#32588d29',
          type: 'dropShadow',
          x: '0',
          y: '2',
          blur: '8',
          spread: '0',
        },
        type: 'boxShadow',
      },
      Left: {
        value: {
          color: '#32588d29',
          type: 'dropShadow',
          x: '2',
          y: '0',
          blur: '8',
          spread: '0',
        },
        type: 'boxShadow',
      },
    },
    fontFamilies: {
      roboto: {
        value: 'Roboto',
        type: 'fontFamilies',
      },
    },
    lineHeights: {
      '0': {
        value: '20',
        type: 'lineHeights',
      },
      '1': {
        value: '48',
        type: 'lineHeights',
      },
      '2': {
        value: '40',
        type: 'lineHeights',
      },
      '3': {
        value: '36',
        type: 'lineHeights',
      },
      '4': {
        value: '32',
        type: 'lineHeights',
      },
      '5': {
        value: '28',
        type: 'lineHeights',
      },
      '6': {
        value: '24',
        type: 'lineHeights',
      },
      '7': {
        value: '16',
        type: 'lineHeights',
      },
    },
    fontWeights: {
      'roboto-0': {
        value: 'Regular',
        type: 'fontWeights',
      },
      'roboto-1': {
        value: 'Medium',
        type: 'fontWeights',
      },
    },
    fontSize: {
      '0': {
        value: '11',
        type: 'fontSizes',
      },
      '1': {
        value: '12',
        type: 'fontSizes',
      },
      '2': {
        value: '14',
        type: 'fontSizes',
      },
      '3': {
        value: '16',
        type: 'fontSizes',
      },
      '4': {
        value: '18',
        type: 'fontSizes',
      },
      '5': {
        value: '20',
        type: 'fontSizes',
      },
      '6': {
        value: '24',
        type: 'fontSizes',
      },
      '7': {
        value: '28',
        type: 'fontSizes',
      },
      '8': {
        value: '32',
        type: 'fontSizes',
      },
      '9': {
        value: '36',
        type: 'fontSizes',
      },
    },
    letterSpacing: {
      '0': {
        value: '0%',
        type: 'letterSpacing',
      },
    },
    paragraphSpacing: {
      '0': {
        value: '0',
        type: 'paragraphSpacing',
      },
    },
    Link: {
      value: {
        fontFamily: '{fontFamilies.roboto}',
        fontWeight: '{fontWeights.roboto-0}',
        lineHeight: '{lineHeights.0}',
        fontSize: '{fontSize.2}',
        letterSpacing: '{letterSpacing.0}',
        paragraphSpacing: '{paragraphSpacing.0}',
        paragraphIndent: '{paragraphIndent.0}',
        textCase: '{textCase.none}',
        textDecoration: '{textDecoration.underline}',
      },
      type: 'typography',
    },
    'Heading 1': {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.1}',
          fontSize: '{fontSize.9}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.1}',
          fontSize: '{fontSize.9}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    'Heading 2': {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.2}',
          fontSize: '{fontSize.8}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.2}',
          fontSize: '{fontSize.8}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    'Heading 3': {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.3}',
          fontSize: '{fontSize.7}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.3}',
          fontSize: '{fontSize.7}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    'Heading 4': {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.4}',
          fontSize: '{fontSize.6}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.4}',
          fontSize: '{fontSize.6}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    'Heading 5': {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.5}',
          fontSize: '{fontSize.5}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.5}',
          fontSize: '{fontSize.5}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    'Heading 6': {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.6}',
          fontSize: '{fontSize.4}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.6}',
          fontSize: '{fontSize.4}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    Large: {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.0}',
          fontSize: '{fontSize.3}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.0}',
          fontSize: '{fontSize.3}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    Default: {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.0}',
          fontSize: '{fontSize.2}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.0}',
          fontSize: '{fontSize.2}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    Small: {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.7}',
          fontSize: '{fontSize.1}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.7}',
          fontSize: '{fontSize.1}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    'Extra Small': {
      Regular: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-0}',
          lineHeight: '{lineHeights.7}',
          fontSize: '{fontSize.0}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
      Bold: {
        value: {
          fontFamily: '{fontFamilies.roboto}',
          fontWeight: '{fontWeights.roboto-1}',
          lineHeight: '{lineHeights.7}',
          fontSize: '{fontSize.0}',
          letterSpacing: '{letterSpacing.0}',
          paragraphSpacing: '{paragraphSpacing.0}',
          paragraphIndent: '{paragraphIndent.0}',
          textCase: '{textCase.none}',
          textDecoration: '{textDecoration.none}',
        },
        type: 'typography',
      },
    },
    textCase: {
      none: {
        value: 'none',
        type: 'textCase',
      },
    },
    textDecoration: {
      underline: {
        value: 'underline',
        type: 'textDecoration',
      },
      none: {
        value: 'none',
        type: 'textDecoration',
      },
    },
    paragraphIndent: {
      '0': {
        value: '0px',
        type: 'dimension',
      },
    },
  },
  'GEP Layout/Large': {
    'Global Surface Colours': {
      '--global-colour-page-background': {
        value: '{AppBackground.--themes-background-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-content-background': {
        value: '{AppBackground.--themes-background-400}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-content-highlight-background': {
        value: '{AppBackground.--themes-background-200}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-content-background-ALT': {
        value: '{AppBackground.--themes-background-300}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-content-background-Dark': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-content-border': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
    },
    'Global Font colours': {
      '--global-colour-header-text': {
        value: '{Typography.--themes-typography-100-primary}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-paragraph-header-text': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-paragraph-body-text': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-paragraph-icon': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-header-text-ALT': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-indicator-default': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-indicator-intermidiate': {
        value: '{Indicator.Blue.--themes-indicator-blue-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-indicator-default-ALT': {
        value: '{Typography.--themes-typography-1000}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-indicator-success': {
        value: '{Indicator.Green.--themes-indicator-green-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-indicator-important': {
        value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-indicator-error': {
        value: '{Indicator.Red.--themes-indicator-red-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-indicator-warning': {
        value: '{Indicator.Orange.--themes-indicator-orange-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-text-disabled': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
    },
    Components: {
      Input: {
        '--input-colour-label': {
          value: '{Typography.--themes-typography-400-Secondary}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--font-input-data': {
          value: '{Typography.--themes-typography-100-primary}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--font-input-placeholder': {
          value: '{Typography.--themes-typography-400-Secondary}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '---input-color-primary-background': {
          value: '{AppBackground.--themes-background-400}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '---input-color-secondary-border': {
          value: '{Typography.--themes-typography-500}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '---input-color-border-active': {
          value: '{Primary.--themes-primary-200}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
      },
      Buttons: {
        Primary: {
          '--button-color-primary-text': {
            value: '{Typography.--themes-typography-1000}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-primary-background': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-primary-background-hover': {
            value: '{Primary.--themes-primary-300}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-primary-background-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
        },
        Secondary: {
          '--button-color-secondary-text': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-secondary-background': {
            value: '{AppBackground.--themes-background-400}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-secondary-border': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '--button-color-secondary-text-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-secondary-background-hover': {
            value: '{Primary.--themes-primary-1000}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-secondary-border-hover': {
            value: '{Primary.--themes-primary-300}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-secondary-border-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
        },
        Tertiary: {
          '--button-color-tertiary-text': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-tertiary-background': {
            value: '{Platform.--Transparent}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '---button-color-background-hover': {
            value: '{Primary.--themes-primary-1000}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '--button-color-tertiary-textactive': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
        },
        Disabled: {
          '--button-colour-disabled-background': {
            value: '{Typography.--themes-typography-600}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
          '--button-color-disabled-text': {
            value: '{Typography.--themes-typography-500}',
            type: 'color',
            parent: 'GEP Layout/Large',
            description: '',
          },
        },
      },
      Status: {
        '--status-color-pending-background': {
          value: '{Indicator.Blue.--themes-indicator-blue-300}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-draft-background-ALT': {
          value: '{Indicator.Grey.--themes-indicator-grey-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-pending-background-ALT': {
          value: '{Indicator.Blue.--themes-indicator-blue-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-warning-background-ALT': {
          value: '{Indicator.Orange.--themes-indicator-orange-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-intermidiate-background-ALT': {
          value: '{Indicator.Grey.--themes-indicator-grey-100}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-error-background-ALT': {
          value: '{Indicator.Red.--themes-indicator-red-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-success-background': {
          value: '{Indicator.Green.--themes-indicator-green-300}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-important-background': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-300}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-warning-background': {
          value: '{Indicator.Orange.--themes-indicator-orange-300}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-error-background': {
          value: '{Indicator.Red.--themes-indicator-red-300}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-version-background': {
          value: '{Typography.--themes-typography-100-primary}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-custom-background': {
          value: '{Primary.--themes-primary-500-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-success-background-ALT': {
          value: '{Indicator.Green.--themes-indicator-green-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-important-background-ALT': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-pending-text': {
          value: '{Indicator.Blue.--themes-indicator-blue-100}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-success-text': {
          value: '{Indicator.Green.--themes-indicator-green-100}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-important-text': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-warning-text': {
          value: '{Indicator.Orange.--themes-indicator-orange-100}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-error-text': {
          value: '{Indicator.Red.--themes-indicator-red-100}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-default-text-ALT': {
          value: '{Typography.--themes-typography-1000}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-pending-border': {
          value: '{Indicator.Blue.--themes-indicator-blue-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-success-border': {
          value: '{Indicator.Green.--themes-indicator-green-300}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-important-border': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-warning-border': {
          value: '{Indicator.Orange.--themes-indicator-orange-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-error-border': {
          value: '{Indicator.Red.--themes-indicator-red-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-draft-background': {
          value: '{Indicator.Grey.--themes-indicator-grey-300}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-draft-border': {
          value: '{Indicator.Grey.--themes-indicator-grey-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-draft-text': {
          value: '{Indicator.Grey.--themes-indicator-grey-100}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--status-color-rating-background': {
          value: '{Primary.--themes-primary-200}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
      },
      Link: {
        '--link-color-text': {
          value: '{Highlights.--themes-highlight-default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--link-color-text-hover': {
          value: '{Highlights.--themes-highlight-hover}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--link-color-text-visited': {
          value: '{Highlights.--themes-highlight-visited}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--link-color-icon': {
          value: '{Highlights.--themes-highlight-default}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--link-color-icon-hover': {
          value: '{Highlights.--themes-highlight-hover}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
        '--link-color-icon-visited': {
          value: '{Highlights.--themes-highlight-visited}',
          type: 'color',
          parent: 'GEP Layout/Large',
          description: '',
        },
      },
    },
    'Global Element Colours': {
      '--global-colour-background-default': {
        value: '{Primary.--themes-primary-1000}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-divider-default': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour--border-primary': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-background-highlight': {
        value: '{Highlights.--themes-highlight-ALT}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour--border-default': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-background-disabled': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour--border-subtle': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-primary-background': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-primary-background-hover': {
        value: '{Primary.--themes-primary-300}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-primary-background-active': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-background-default-ALT': {
        value: '{AppBackground.--themes-background-400}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-primary-border': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-primary-border-hover': {
        value: '{Primary.--themes-primary-300}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-primary-border-active': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
    },
    'Global Data Colors': {
      '--data-viz-azure': {
        value: '{DataVisualization[NEW].Azure.--themes-data-azure-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-yellow': {
        value: '{DataVisualization[NEW].Yellow.--themes-data-yellow-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-rose': {
        value: '{DataVisualization[NEW].Rose.--themes-data-rose-defaut}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-purple': {
        value: '{DataVisualization[NEW].Purple.--themes-data-purple-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-orange': {
        value: '{DataVisualization[NEW].Orange.--themes-data-orange-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-green': {
        value: '{DataVisualization[NEW].Green.--themes-data-green-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-grey': {
        value: '{DataVisualization[NEW].Grey.--themes-data-grey-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-warining': {
        value:
          '{DataVisualization[NEW].Red-Warning.--themes-data-red-warning-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--data-viz-success': {
        value:
          '{DataVisualization[NEW].GreenSuccess.--themes-data-green-success-default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
    },
    'Global Icon Colors': {
      '--global-colour-icon-default': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-success': {
        value: '{Indicator.Green.--themes-indicator-green-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-important': {
        value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-warning': {
        value: '{Indicator.Orange.--themes-indicator-orange-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-error': {
        value: '{Indicator.Red.--themes-indicator-red-100}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-primary': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-bold': {
        value: '{Typography.--themes-typography-100-primary}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-minerva': {
        value: '{Minerva.--minerva-primary}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-disabled': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-subtle': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-colour-icon-default-ALT': {
        value: '{Typography.--themes-typography-1000}',
        type: 'color',
        parent: 'GEP Layout/Large',
        description: '',
      },
    },
    'Global Sizes': {
      '--global-size-XXSmall': {
        value: '8px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-size-XSmall': {
        value: '12px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-size-Small': {
        value: '16px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-size-Medium': {
        value: '24px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-size-xLarge': {
        value: '40px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-size-XXLarge': {
        value: '48px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-size-Base': {
        value: '20px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-size-Large': {
        value: '32px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
    },
    'Corner Radius': {
      '--global-radius-element': {
        value: '8px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-radius-container': {
        value: '12px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-radius-content': {
        value: '16px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
      '--global-radius-page': {
        value: '20px',
        type: 'dimension',
        parent: 'GEP Layout/Large',
        description: '',
      },
    },
  },
  'GEP Layout/Compact': {
    'Global Surface Colours': {
      '--global-colour-page-background': {
        value: '{AppBackground.--themes-background-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-content-background': {
        value: '{AppBackground.--themes-background-400}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-content-highlight-background': {
        value: '{AppBackground.--themes-background-200}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-content-background-ALT': {
        value: '{AppBackground.--themes-background-300}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-content-background-Dark': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-content-border': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
    },
    'Global Font colours': {
      '--global-colour-header-text': {
        value: '{Typography.--themes-typography-100-primary}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-paragraph-header-text': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-paragraph-body-text': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-paragraph-icon': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-header-text-ALT': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-indicator-default': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-indicator-intermidiate': {
        value: '{Indicator.Blue.--themes-indicator-blue-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-indicator-default-ALT': {
        value: '{Typography.--themes-typography-1000}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-indicator-success': {
        value: '{Indicator.Green.--themes-indicator-green-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-indicator-important': {
        value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-indicator-error': {
        value: '{Indicator.Red.--themes-indicator-red-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-indicator-warning': {
        value: '{Indicator.Orange.--themes-indicator-orange-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-text-disabled': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
    },
    Components: {
      Input: {
        '--input-colour-label': {
          value: '{Typography.--themes-typography-400-Secondary}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--font-input-data': {
          value: '{Typography.--themes-typography-100-primary}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--font-input-placeholder': {
          value: '{Typography.--themes-typography-400-Secondary}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '---input-color-primary-background': {
          value: '{AppBackground.--themes-background-400}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '---input-color-secondary-border': {
          value: '{Typography.--themes-typography-500}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '---input-color-border-active': {
          value: '{Primary.--themes-primary-200}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
      },
      Buttons: {
        Primary: {
          '--button-color-primary-text': {
            value: '{Typography.--themes-typography-1000}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-primary-background': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-primary-background-hover': {
            value: '{Primary.--themes-primary-300}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-primary-background-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
        },
        Secondary: {
          '--button-color-secondary-text': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-secondary-background': {
            value: '{AppBackground.--themes-background-400}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-secondary-border': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '--button-color-secondary-text-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-secondary-background-hover': {
            value: '{Primary.--themes-primary-1000}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-secondary-border-hover': {
            value: '{Primary.--themes-primary-300}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-secondary-border-active': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
        },
        Tertiary: {
          '--button-color-tertiary-text': {
            value: '{Primary.--themes-primary-500-Default}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-tertiary-background': {
            value: '{Platform.--Transparent}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '---button-color-background-hover': {
            value: '{Primary.--themes-primary-1000}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '--button-color-tertiary-textactive': {
            value: '{Primary.--themes-primary-200}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
        },
        Disabled: {
          '--button-colour-disabled-background': {
            value: '{Typography.--themes-typography-600}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
          '--button-color-disabled-text': {
            value: '{Typography.--themes-typography-500}',
            type: 'color',
            parent: 'GEP Layout/Compact',
            description: '',
          },
        },
      },
      Status: {
        '--status-color-pending-background': {
          value: '{Indicator.Blue.--themes-indicator-blue-300}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-draft-background-ALT': {
          value: '{Indicator.Grey.--themes-indicator-grey-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-pending-background-ALT': {
          value: '{Indicator.Blue.--themes-indicator-blue-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-warning-background-ALT': {
          value: '{Indicator.Orange.--themes-indicator-orange-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-intermidiate-background-ALT': {
          value: '{Indicator.Grey.--themes-indicator-grey-100}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-error-background-ALT': {
          value: '{Indicator.Red.--themes-indicator-red-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-success-background': {
          value: '{Indicator.Green.--themes-indicator-green-300}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-important-background': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-300}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-warning-background': {
          value: '{Indicator.Orange.--themes-indicator-orange-300}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-error-background': {
          value: '{Indicator.Red.--themes-indicator-red-300}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-version-background': {
          value: '{Typography.--themes-typography-100-primary}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-custom-background': {
          value: '{Primary.--themes-primary-500-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-success-background-ALT': {
          value: '{Indicator.Green.--themes-indicator-green-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-important-background-ALT': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-pending-text': {
          value: '{Indicator.Blue.--themes-indicator-blue-100}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-success-text': {
          value: '{Indicator.Green.--themes-indicator-green-100}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-important-text': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-warning-text': {
          value: '{Indicator.Orange.--themes-indicator-orange-100}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-error-text': {
          value: '{Indicator.Red.--themes-indicator-red-100}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-default-text-ALT': {
          value: '{Typography.--themes-typography-1000}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-pending-border': {
          value: '{Indicator.Blue.--themes-indicator-blue-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-success-border': {
          value: '{Indicator.Green.--themes-indicator-green-300}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-important-border': {
          value: '{Indicator.Yellow.--themes-indicator-yellow-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-warning-border': {
          value: '{Indicator.Orange.--themes-indicator-orange-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-error-border': {
          value: '{Indicator.Red.--themes-indicator-red-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-draft-background': {
          value: '{Indicator.Grey.--themes-indicator-grey-300}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-draft-border': {
          value: '{Indicator.Grey.--themes-indicator-grey-200-Default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-draft-text': {
          value: '{Indicator.Grey.--themes-indicator-grey-100}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--status-color-rating-background': {
          value: '{Primary.--themes-primary-200}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
      },
      Link: {
        '--link-color-text': {
          value: '{Highlights.--themes-highlight-default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--link-color-text-hover': {
          value: '{Highlights.--themes-highlight-hover}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--link-color-text-visited': {
          value: '{Highlights.--themes-highlight-visited}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--link-color-icon': {
          value: '{Highlights.--themes-highlight-default}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--link-color-icon-hover': {
          value: '{Highlights.--themes-highlight-hover}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
        '--link-color-icon-visited': {
          value: '{Highlights.--themes-highlight-visited}',
          type: 'color',
          parent: 'GEP Layout/Compact',
          description: '',
        },
      },
    },
    'Global Element Colours': {
      '--global-colour-background-default': {
        value: '{Primary.--themes-primary-1000}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-divider-default': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour--border-primary': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-background-highlight': {
        value: '{Highlights.--themes-highlight-ALT}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour--border-default': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-background-disabled': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour--border-subtle': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-primary-background': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-primary-background-hover': {
        value: '{Primary.--themes-primary-300}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-primary-background-active': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-background-default-ALT': {
        value: '{AppBackground.--themes-background-400}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-primary-border': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-primary-border-hover': {
        value: '{Primary.--themes-primary-300}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-primary-border-active': {
        value: '{Primary.--themes-primary-200}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
    },
    'Global Data Colors': {
      '--data-viz-azure': {
        value: '{DataVisualization[NEW].Azure.--themes-data-azure-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-yellow': {
        value: '{DataVisualization[NEW].Yellow.--themes-data-yellow-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-rose': {
        value: '{DataVisualization[NEW].Rose.--themes-data-rose-defaut}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-purple': {
        value: '{DataVisualization[NEW].Purple.--themes-data-purple-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-orange': {
        value: '{DataVisualization[NEW].Orange.--themes-data-orange-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-green': {
        value: '{DataVisualization[NEW].Green.--themes-data-green-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-grey': {
        value: '{DataVisualization[NEW].Grey.--themes-data-grey-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-warining': {
        value:
          '{DataVisualization[NEW].Red-Warning.--themes-data-red-warning-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--data-viz-success': {
        value:
          '{DataVisualization[NEW].GreenSuccess.--themes-data-green-success-default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
    },
    'Global Icon Colors': {
      '--global-colour-icon-default': {
        value: '{Typography.--themes-typography-400-Secondary}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-success': {
        value: '{Indicator.Green.--themes-indicator-green-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-important': {
        value: '{Indicator.Yellow.--themes-indicator-yellow-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-warning': {
        value: '{Indicator.Orange.--themes-indicator-orange-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-error': {
        value: '{Indicator.Red.--themes-indicator-red-100}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-primary': {
        value: '{Primary.--themes-primary-500-Default}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-bold': {
        value: '{Typography.--themes-typography-100-primary}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-minerva': {
        value: '{Minerva.--minerva-primary}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-disabled': {
        value: '{Typography.--themes-typography-600}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-subtle': {
        value: '{Typography.--themes-typography-500}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-colour-icon-default-ALT': {
        value: '{Typography.--themes-typography-1000}',
        type: 'color',
        parent: 'GEP Layout/Compact',
        description: '',
      },
    },
    'Global Sizes': {
      '--global-size-XXSmall': {
        value: '2px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-size-XSmall': {
        value: '4px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-size-Small': {
        value: '8px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-size-Medium': {
        value: '16px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-size-xLarge': {
        value: '24px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-size-XXLarge': {
        value: '32px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-size-Base': {
        value: '12px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-size-Large': {
        value: '20px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
    },
    'Corner Radius': {
      '--global-radius-element': {
        value: '2px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-radius-container': {
        value: '4px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-radius-content': {
        value: '8px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
      '--global-radius-page': {
        value: '12px',
        type: 'dimension',
        parent: 'GEP Layout/Compact',
        description: '',
      },
    },
  },
  $themes: [],
  $metadata: {
    tokenSetOrder: [
      'GEP Themes/Basic',
      'GEP Themes/Green',
      'GEP Themes/Blue (New)',
      'GEP Themes/Purple',
      'GEP Layout/Default',
      'GEP Layout/Large',
      'GEP Layout/Compact',
    ],
  },
};

const avoidKeys = ['$themes', '$metadata'];

const $metadata = tokens.$metadata;

interface CategorizedTokens {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private categorizedTokens: CategorizedTokens = {};
  private tokens: Token[] = [];

  constructor() {
    this.loadAndCategorizeTokens();
  }

  private loadAndCategorizeTokens() {
    this.categorizedTokens = this.categorizeTokens(tokens);
    this.tokens = this.extractTokens(this.categorizedTokens);
  }

  private categorizeTokens(jsonData: {
    [key: string]: any;
  }): CategorizedTokens {
    const categorizedTokens: CategorizedTokens = {};

    for (const mainTheme in jsonData) {
      if (avoidKeys.includes(mainTheme)) continue;
      if (jsonData.hasOwnProperty(mainTheme)) {
        categorizedTokens[mainTheme] = {};

        const subThemes = jsonData[mainTheme];
        for (const subTheme in subThemes) {
          if (subThemes.hasOwnProperty(subTheme)) {
            const tokenGroups = subThemes[subTheme];
            if (typeof tokenGroups === 'object' && tokenGroups !== null) {
              categorizedTokens[mainTheme][subTheme] = {};

              for (const groupOrToken in tokenGroups) {
                if (tokenGroups.hasOwnProperty(groupOrToken)) {
                  const tokensOrProperties = tokenGroups[groupOrToken];
                  if (
                    typeof tokensOrProperties === 'object' &&
                    tokensOrProperties !== null &&
                    'value' in tokensOrProperties === false
                  ) {
                    categorizedTokens[mainTheme][subTheme][groupOrToken] = {};

                    for (const token in tokensOrProperties) {
                      if (tokensOrProperties.hasOwnProperty(token)) {
                        categorizedTokens[mainTheme][subTheme][groupOrToken][
                          token
                        ] = tokensOrProperties[token];
                      }
                    }
                  } else {
                    categorizedTokens[mainTheme][subTheme][groupOrToken] =
                      tokensOrProperties;
                  }
                }
              }
            } else {
              categorizedTokens[mainTheme][subTheme] = tokenGroups;
            }
          }
        }
      }
    }
    return categorizedTokens;
  }

  getCategorizedTokens(): CategorizedTokens {
    return this.categorizedTokens;
  }

  extractTokens(data: any, path: string = ''): Token[] {
    let tokens: Token[] = [];
    for (const key in data) {
      if (this.isStyle(data[key]) && !this.isToken(key)) {
        const style: Token = {
          ...data[key],
          path: path ? `${path}.${key}` : key,
          name: key,
          tokenType: 'style'
        };
        tokens.push(style);
      } else if (typeof data[key] === 'object' && !data[key].value) {
        tokens = tokens.concat(
          this.extractTokens(data[key], path ? `${path}.${key}` : key)
        );
      } else if (this.isToken(key)) {
        const token: Token = {
          ...data[key],
          path: path ? `${path}.${key}` : key,
          name: key,
          tokenType: 'token'
        };
        tokens.push(token);
      }
    }
    return tokens;
  }

  getTokens() {
    return this.tokens;
  }

  objectToArray(obj: { [key: string]: any }): any[] {
    return Object.keys(obj).map((key) => ({ key, data: obj[key] }));
  }
  
  isToken(key: string): boolean {
    return key.startsWith('--');
  }

  isStyle(obj: any) {
    const keys = Object.keys(obj);
    return keys.length === 2 && keys.includes('value') && keys.includes('type');
  }

  convertToCssStyle(style: any) {
    let cssStyle: any = {};

    const processStyle = (value: any) => {
      switch (value.type) {
        case 'innerShadow':
        case 'dropShadow':
          cssStyle[
            'box-shadow'
          ] = `${value.x}px ${value.y}px ${value.blur}px ${value.spread}px ${value.color}`;
          break;
        case 'fontFamily':
          cssStyle['font-family'] = value.value;
          break;
        case 'fontWeight':
          cssStyle['font-weight'] = this.getFontWeight(value.value);
          break;
        case 'lineHeight':
          cssStyle['line-height'] = `${value.value}px`;
          break;
        case 'fontSize':
          cssStyle['font-size'] = `${value.value}px`;
          break;
        case 'letterSpacing':
          cssStyle['letter-spacing'] = value.value;
          break;
        case 'paragraphSpacing':
          cssStyle['margin-bottom'] = `${value.value}px`;
          break;
        case 'textCase':
          cssStyle['text-transform'] = value.value;
          break;
        case 'textDecoration':
          cssStyle['text-decoration'] = value.value;
          break;
        default:
          break;
      }
    };

    if (typeof style.value === 'string') {
      switch (style.type) {
        case 'fontFamilies':
          cssStyle['font-family'] = style.value;
          break;
        case 'lineHeights':
          cssStyle['line-height'] = `${style.value}px`;
          break;
        case 'fontWeights':
          cssStyle['font-weight'] = this.getFontWeight(style.value);
          break;
        case 'fontSizes':
          cssStyle['font-size'] = `${style.value}px`;
          break;
        case 'letterSpacing':
          cssStyle['letter-spacing'] = style.value;
          break;
        case 'paragraphSpacing':
          cssStyle['margin-bottom'] = `${style.value}px`;
          break;
        case 'textCase':
          cssStyle['text-transform'] = style.value;
          break;
        case 'textDecoration':
          cssStyle['text-decoration'] = style.value;
          break;
        case 'dimension':
          cssStyle['text-indent'] = style.value;
          break;
        default:
          break;
      }
    } else if (style.value && style.value.type) {
      processStyle(style.value);
    } else {
      Object.keys(style.value).forEach((prop: any) => {
        if (style.value[prop]) {
          processStyle({
            type: prop,
            value: this.getValueByDynamicPath(style.value[prop]),
          });
        }
      });
    }

    return cssStyle;
  }

  getFontWeight(weight: string) {
    switch (weight) {
      case 'Regular':
        return '400';
      case 'Medium':
        return '500';
      case 'Bold':
        return '700';
      default:
        return '400';
    }
  }

  isPath(value: string) {
    return /^\{.*\}$/.test(value);
  }

  getValueByDynamicPath(path: string) {
    const keys = path.replace(/[{}]/g, '').split('.');
    for (let theme of $metadata.tokenSetOrder) {
      let temp = this.categorizedTokens[theme];
      for (let key of keys) {
        if (temp && typeof temp === 'object') {
          temp = temp[key];
          if (!temp) break;
        } else {
          return undefined;
        }
      }
      if (temp && temp['value']) return temp['value'];
    }
    return undefined;
  }
}
