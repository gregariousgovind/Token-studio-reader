import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  templateUrl: './token-json-viewer.component.html'
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
      } else if (this.isToken(key)) {
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
}