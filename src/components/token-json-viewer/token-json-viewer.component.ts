import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../search.pipe';
import { TokenService } from '../../token.service';
import { Token } from '../../token.typings';

@Component({
  selector: 'token-json-viewer',
  templateUrl: './token-json-viewer.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  providers: [TokenService]
})
export class TokenJSONViewerComponent implements OnInit {
  tokens: Token[] = [];
  searchText: string = '';

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.tokens = this.tokenService.getTokens();
  }
}