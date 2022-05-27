import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('contactRef') contactRef: ElementRef<HTMLElement> | null = null;
  @Input()
  set scrollToContact(value: boolean) {
    this._scrollToContact = value;
    this.onScrollToContact();
  }
  get scrollToContact() {
    return this._scrollToContact;
  }
  @Output() scrollToContactChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  private _scrollToContact: boolean = false;
  email = new FormControl(null, [
    Validators.required,
    Validators.email,
    Validators.pattern(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  ]);
  constructor() {}

  ngOnInit(): void {}

  onSubscribe(): void {
    alert(`Se ha suscrito con el correo: ${this.email.value} ¡Felicitaciones!`);
  }

  onScrollToContact(): void {
    this.contactRef?.nativeElement.scrollIntoView();
    setTimeout(() => {
      this.scrollToContactChange.emit(false);
    }, 500);
  }
}
