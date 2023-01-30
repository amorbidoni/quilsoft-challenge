import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() hasCancelBtn?: boolean = true;
  @Input() hasOkBtn?: boolean = true;
  @Input() okBtnText?: string = 'Aceptar';
  @Input() modalTitle !:string;
  @Input() modalDescription !:string;
  @Input() hasActionIcon:boolean = false;
  @Input() okIcon?:boolean;
  @Input() shareIcons:boolean = false;
  @Input() idToShare?:string;
  @Output() modalValue: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closeModal(value:boolean){
    this.modalValue.emit(value);
  }
  getLink(type: 'facebook' | 'whatsapp' | 'instagram'){
    switch (type) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=http%3A//localhost%3A4200/card-detail/${this.idToShare};backRoute=%252Fdashboard`
    case 'whatsapp':
      return ''
    case 'instagram':
      return ''
      default:
        return;
    }
  }
}
