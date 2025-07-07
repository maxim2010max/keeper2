import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { link } from 'node:fs';
import path from 'node:path';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
/*   buttons_header = [
    { text: 'Пароли', action: 'profile', link: '/password' },
    { text: 'TODO', action: 'settings', link: '/todo' },
    { text: 'Дневник', action: 'documents', link: '/diary' },
    { text: 'О разработчике', action: 'logout', link: '/info' },
  ]; */
  
}
