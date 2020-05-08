import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter } from '../../models';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output()
  public filterApplied: EventEmitter<Filter> = new EventEmitter<Filter>();

  public formGroup: FormGroup;
  public nameControl: FormControl = new FormControl();
  public freeEventControl: FormControl = new FormControl(false);
  public timeRange: FormControl = new FormControl('ALL');

  public ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: this.nameControl,
      onlyFree: this.freeEventControl,
      timeRange: this.timeRange
    });

    this.nameControl.valueChanges.pipe(debounceTime(500),
      distinctUntilChanged()
    ).subscribe(() => (this.onFilter()));
  }

  public onFilter() {
    this.filterApplied.emit(this.formGroup.value);
  }

  public resetFilter(): void {
    this.filterApplied.emit({
      name: '',
      onlyFree: false,
      timeRange: 'ALL'
    });

    this.formGroup.reset();
  }
}
