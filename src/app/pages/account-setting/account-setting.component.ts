import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    const links = document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme(links);
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }


}
