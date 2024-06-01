import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TokenService } from '../../token.service';

interface Token {
  value: any;
  type: string;
  path?: string;
  name?: string;
  parent?: string;
  description?: string;
}

@Component({
  selector: 'token-json-viewer',
  standalone: true,
  imports: [CommonModule],
  providers: [TokenService],
  template: `
  <div id="token-container">
    <div *ngFor="let token of tokens" [innerHTML]="createTokenHtml(token)"></div>
  </div>
  `,
  styles: `
  .token {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    padding: 10px;
  }
  
  .token.style {
    background-color: #f9f9f9;
  }
  
  .token.type {
    background-color: #eef;
  }
  
  .property {
    margin: 5px 0;
  }
  
  .property span {
    font-weight: bold;
  }
  `
})
export class TokenJSONViewerComponent implements OnInit {
  jsonData: any;
  tokens: Token[] = [];

  constructor(private tokenService: TokenService) {
    this.jsonData = this.tokenService.getTokens();
  }

  ngOnInit(): void {
    this.tokens = this.extractTokens(this.jsonData);
  }

  isStyle(obj: any): boolean {
    const keys = Object.keys(obj);
    return keys.length === 2 && keys.includes('value') && keys.includes('type');
  }

  isToken(key: string): boolean {
    return key.startsWith('--');
  }

  extractTokens(data: any, path: string = ''): Token[] {
    let tokens: Token[] = [];
    for (const key in data) {
      if (this.isStyle(data[key]) && !this.isToken(key)) {
        const style: Token = {
          ...data[key],
          path: path ? `${path}.${key}` : key,
          name: key,
          type: 'style'
        };
        tokens.push(style);
      } else if (typeof data[key] === 'object' && !data[key].value) {
        tokens = tokens.concat(
          this.extractTokens(data[key], path ? `${path}.${key}` : key)
        );
      } else {
        const token: Token = {
          ...data[key],
          path: path ? `${path}.${key}` : key,
          name: key,
          type: 'token'
        };
        tokens.push(token);
      }
    }
    return tokens;
  }

  createTokenHtml(token: Token): string {
    const tokenClass = token.type === 'style' ? 'style' : 'type';
    return `
      <div class="token ${tokenClass}">
          <div class="property"><span>Name:</span> ${token.name}</div>
          <div class="property"><span>Path:</span> ${token.path}</div>
          <div class="property"><span>Value:</span> ${token.value}</div>
          <div class="property"><span>Type:</span> ${token.type}</div>
          <div class="property"><span>Parent:</span> ${token.parent}</div>
          <div class="property"><span>Description:</span> ${token.description}</div>
      </div>
    `;
  }
}