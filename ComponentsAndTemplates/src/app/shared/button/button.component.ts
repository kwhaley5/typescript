import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]', //css selector (attribute)
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({required: true}) text!: string
  @Input({required: true}) symbol!: string
}
