import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { ThemeType } from '../../../@types/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private themeService = inject(ThemeService);

  public darkMode = false;

  ngOnInit() {
    this.darkMode = this.themeService.getActiveTheme() === ThemeType.dark;
  }
}
