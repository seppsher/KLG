import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PathsEnum } from '../../enums/paths.enum';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public readonly PATHS = PathsEnum;

  constructor() {}

  public ngOnInit(): void {}
}
