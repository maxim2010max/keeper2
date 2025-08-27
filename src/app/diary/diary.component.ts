import { Component } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
@Component({
  selector: 'app-diary',
  imports: [PickerModule],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.scss',
})
export class DiaryComponent {}
