import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() hasCancelBtn?: boolean = true;
  @Input() okBtnText?: string = 'Aceptar';
  @Input() modalTitle !:string;
  @Input() modalDescription !:string;
  @Input() hasActionIcon:boolean = false;
  @Input() okIcon?:boolean;
  @Output() modalValue: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closeModal(value:boolean){
    this.modalValue.emit(value);
  }
}
