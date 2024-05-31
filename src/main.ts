import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from './token.service';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

const $metadata = {
  tokenSetOrder: [
    'GEP Themes/Basic',
    'GEP Themes/Green',
    'GEP Themes/Blue (New)',
    'GEP Themes/Purple',
    'GEP Layout/Default',
    'GEP Layout/Large',
    'GEP Layout/Compact',
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  standalone: true,
  imports: [CommonModule],
  providers: [TokenService],
})
export class App implements OnInit {
  name = 'Token Viewer';
  mainThemes: string[] = [];
  subThemes: { [key: string]: string[] } = {};
  tokens: { [key: string]: { [key: string]: any } } = {};
  defaultThemeName = 'GEP Layout/Default';
  defaultTheme: any;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.tokens = this.tokenService.getCategorizedTokens();
    this.mainThemes = Object.keys(this.tokens);
    this.mainThemes.forEach((theme) => {
      this.subThemes[theme] = Object.keys(this.tokens[theme]);
    });
    this.defaultTheme = this.tokens[this.defaultThemeName];
  }

  getTokens(mainTheme: string, subTheme: string): any[] {
    return this.objectToArray(this.tokens[mainTheme][subTheme]);
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
      let temp = this.tokens[theme];
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

bootstrapApplication(App);
