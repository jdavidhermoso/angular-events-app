import { Injectable } from '@angular/core';
import { ConfirmationConfig } from '../../shared';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  public toggleConfirmationModal: BehaviorSubject<ConfirmationConfig> =
    new BehaviorSubject<ConfirmationConfig>(null);

  constructor() {
  }

  public openConfirmation(config: ConfirmationConfig) {
    this.toggleConfirmationModal.next(config);
  }

  public closeConfirmation() {
    this.toggleConfirmationModal.next(null);
  }
}
