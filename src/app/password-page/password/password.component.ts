/* import { Component } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-password',
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
})
export class PasswordComponent {
  inputPass!: HTMLInputElement;
  inputSoc!: HTMLInputElement;
  btnAdd!: HTMLElement;
  output!: HTMLElement;
  ngAfterViewInit() {
    this.inputPass = document.querySelector('.input-pass') as HTMLInputElement;
    this.inputSoc = document.querySelector('.socset-pass') as HTMLInputElement;
    this.btnAdd = document.querySelector('.bth-pass-add') as HTMLElement;
    this.output = document.querySelector('.output') as HTMLElement;
  }
  addPassword() {
    let text = this.inputPass.value;
    let text1 = this.inputSoc.value;
    if (text.trim() == '' || text1.trim() == '') {
      alert('Введите данные');
      return;
    }
    let itemPass = document.createElement('div');
    itemPass.classList.add('text-item-pass');
    let textPass = document.createElement('p');
    textPass.textContent = `Ваш пароль: ${text}`;
    let textSoc = document.createElement('p');
    textSoc.textContent = `Сервис: ${text1}`;
    let deletAll = document.createElement('button');
    deletAll.textContent = 'Удалить' ;
    deletAll.addEventListener('click', function () {
      itemPass.remove();
    });
    itemPass.appendChild(textPass);
    itemPass.appendChild(textSoc);
    itemPass.appendChild(deletAll);
    this.output.appendChild(itemPass);
    this.inputPass.value = '';
    this.inputSoc.value = '';
    
  }

} */
  import { Component, signal, viewChild, effect } from '@angular/core';

  @Component({
    selector: 'app-password',
    standalone: true,
    templateUrl: './password.component.html',
    styleUrl: './password.component.scss',
  })
  export class PasswordComponent {
    password = signal('');
    service = signal('');
    lastAdded = signal('');
    items = signal<{ id: number; password: string; service: string }[]>([]);
    constructor() {
      const saved = localStorage.getItem('passwordItems');
      if (saved) {
        this.items.set(JSON.parse(saved));
      }

      effect(() => {
        localStorage.setItem('passwordItems', JSON.stringify(this.items()));
      });
    }
    passwordInput = viewChild<HTMLInputElement>('passwordInput');
    serviceInput = viewChild<HTMLInputElement>('serviceInput');

    updatePassword(value: string) {
      this.password.set(value);
    }

    updateService(value: string) {
      this.service.set(value);
    }

    addPassword() {
      const newItem = {
        id: Date.now(),
        password: this.password(),
        service: this.service(),
      };

      this.items.update((items) => [...items, newItem]);
      this.password.set('');
      this.service.set('');

      /*       setTimeout(() => this.passwordInput()?.focus());
       */
    }

    removeItem(id: number) {
      this.items.update((items) => items.filter((item) => item.id !== id));
    }
  }
/*   import {
    Component,
    ViewChild,
    ElementRef,
    AfterViewInit,
  } from '@angular/core';

  @Component({
    selector: 'app-password',
    template: `
      <!-- Используем шаблонные переменные вместо классов -->
      <input #inputPass type="password" placeholder="Пароль" />
      <input #inputSoc type="text" placeholder="Сокет" />
      <button (click)="addPassword()">Добавить</button>
      <div #outputContainer class="output"></div>
    `,
    styles: [
      `
        .output {
          margin-top: 20px;
          border: 1px solid #ccc;
          padding: 10px;
        }
        .text-item-pass {
          margin: 5px 0;
          padding: 5px;
          background: #f5f5f5;
        }
      `,
    ],
  })
  export class PasswordComponent implements AfterViewInit {
    // Используем ViewChild для безопасного доступа к элементам
    @ViewChild('inputPass') inputPassRef!: ElementRef<HTMLInputElement>;
    @ViewChild('inputSoc') inputSocRef!: ElementRef<HTMLInputElement>;
    @ViewChild('outputContainer')
    outputContainerRef!: ElementRef<HTMLDivElement>;

    // Переносим логику в ngAfterViewInit
    ngAfterViewInit() {
      // Можно добавить дополнительную инициализацию здесь
    }

    addPassword() {
      // Проверяем, что элементы существуют
      if (
        /* !this.inputPassRef?.nativeElement || */
       /*  !this.inputSocRef?.nativeElement */
      /* ) {
        console.error('Элементы не найдены!');
        return;
      }

      const text = this.inputPassRef.nativeElement.value;
      const text1 = this.inputSocRef.nativeElement.value;

      // Проверка на пустые значения
      if (!text.trim() || !text1.trim()) {
        alert('Пожалуйста, заполните оба поля');
        return;
      }

      // Создаем новый элемент
      const newItem = this.createPasswordItem(text, text1);
      this.outputContainerRef.nativeElement.appendChild(newItem);

      // Очищаем поля ввода
      this.inputPassRef.nativeElement.value = '';
      this.inputSocRef.nativeElement.value = '';
    }

    private createPasswordItem(pass: string, soc: string): HTMLElement {
      const item = document.createElement('div');
      item.className = 'text-item-pass';

      const passElement = document.createElement('p');
      passElement.textContent = `Пароль: ${pass}`;

      const socElement = document.createElement('p');
      socElement.textContent = `Сокет: ${soc}`;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Удалить';
      deleteBtn.addEventListener('click', () => item.remove());

      item.append(passElement, socElement, deleteBtn);
      return item;
    }
  } */
/* ============================================================
 *//* let but = document.getElementsByClassName('btn')[0];
let input = document.getElementsByClassName('card')[0];
let value = document.getElementsByClassName('output')[0];

but.addEventListener('click', function () {
  let text = input.value;
  if (text.trim() === '') {
    alert('введите пожалуйста данные');
    return;
  }
  let item = document.createElement('div');
  item.classList.add('text-item');
  let zadacha = document.createElement('p');
  zadacha.textContent = text;
  let delet = document.createElement('button');
  delet.textContent = 'Удалить';
  delet.classList.add('del');
  let got = document.createElement('button');
  got.textContent = 'Выполнено!';
  got.classList.add('got');
  delet.addEventListener('click', function () {
    item.remove();
  });
  got.addEventListener('click', function () {
    item.classList.add('gotc');
  });

  item.appendChild(zadacha);
  item.appendChild(delet);
  item.appendChild(got);
  value.appendChild(item);
  input.value = '';
}); */  /*   passwordForm!: FormGroup;  // Объявляем форму

  constructor(private fb: FormBuilder) {}  // Инжектируем FormBuilder

  ngOnInit() {
    this.initForm();  // Инициализируем форму при старте компонента
  }

  initForm() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Форма отправлена:', this.passwordForm.value);
    } else {
      alert('Заполните все поля корректно!');
    }
  } */
  /*   divWind = false;
  currentService: any; // Добавляем переменную для сервиса
  currentPassword: any;
  addPassword() {
    if (
      this.currentPassword.trim() === '' ||
      this.currentService.trim() === ''
    ) {
      alert('Введите данные');
    } else {
      this.divWind = true;
    }
    this.currentService = '';
    this.currentPassword = '';
  } */