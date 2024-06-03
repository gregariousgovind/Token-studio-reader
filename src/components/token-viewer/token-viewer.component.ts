import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../token.service';

@Component({
  selector: 'token-viewer',
  templateUrl: './token-viewer.component.html',
  standalone: true,
  imports: [CommonModule],
  providers: [TokenService],
})
export class TokenViewerComponent implements OnInit {
  name = 'Token Viewer';
  mainThemes: string[] = [];
  subThemes: { [key: string]: string[] } = {};
  tokens: { [key: string]: { [key: string]: any } } = {};

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
  }

  getTokens(mainTheme: string, subTheme: string): any[] {
    return this.objectToArray(this.tokens[mainTheme][subTheme]);
  }

  objectToArray(obj: { [key: string]: any }): any[] {
    return this.tokenService.objectToArray(obj);
  }

  isToken(key: string): boolean {
    return this.tokenService.isToken(key);
  }

  isStyle(obj: any) {
    return this.tokenService.isStyle(obj);
  }

  convertToCssStyle(style: any) {
    return this.tokenService.convertToCssStyle(style);
  }

  isPath(value: string) {
    return this.tokenService.isPath(value);
  }

  getValueByDynamicPath(path: string) {
    return this.tokenService.getValueByDynamicPath(path);
  }
}
