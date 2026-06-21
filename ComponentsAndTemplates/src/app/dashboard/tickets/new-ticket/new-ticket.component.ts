import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {

  // @ViewChild('form') form?: ElementRef<HTMLFormElement> 
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')
  enteredTitle = ''
  enteredRequest = ''
  add = output<{title: string; text: string}>()

  constructor () {
    afterRender(() => {
      //any change occurs
    })

    afterNextRender(() => {
      //idk how this one works
    })
  }

  ngAfterViewInit(): void {
    
  }

  onSubmit( ) {
    this.add.emit({title: this.enteredTitle, text: this.enteredRequest})

    // this.form?.nativeElement.reset()
    // this.form().nativeElement.reset()
    this.enteredRequest = ''
    this.enteredTitle = ''
  }
}
