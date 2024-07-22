import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@org/button';
@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `<lib-button>Here comes from Remote App!</lib-button>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
