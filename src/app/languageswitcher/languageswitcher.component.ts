import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languageswitcher',
  templateUrl: './languageswitcher.component.html',
  styleUrls: ['./languageswitcher.component.css'],
})
export class LanguageswitcherComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  onLanguageSelect(language: any) {
    let lang = language.target.value;
    this.translate.use(lang);
  }

  ngOnInit(): void {}
}
