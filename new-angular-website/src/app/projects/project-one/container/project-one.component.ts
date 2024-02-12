import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { interval, timeInterval } from "rxjs";
import { FormsModule } from "@angular/forms";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { ToFixedPipe } from "../../../shared/pipes/to-fixed.pipe";
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: "project-one",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./project-one.component.html",
  styleUrl: "./project-one.component.scss",
})
export class ProjectOneComponent {
  @Input() public salary = 700000;
  public workHoursPerYear = 1950;
  public hourRate = this.salary / this.workHoursPerYear;
  public monthRate = this.hourRate * 162.5;
  public dayRate = this.hourRate * 7.5;
  public minuteRate = this.hourRate / 60;
  public secondRate = this.minuteRate / 60;

  public currentPay = 0;
  public currentPayUpdatedEverySecond = 0;

  constructor() {
    const tenth = interval(100);
    tenth.pipe(timeInterval()).subscribe((value) => {
      this.currentPay += this.secondRate / 10;
    });
    const seconds = interval(1000);
    seconds.pipe(timeInterval()).subscribe((value) => {
      this.currentPayUpdatedEverySecond += this.secondRate;
    });
  }

  public calculate(): void {
    this.hourRate = this.salary / this.workHoursPerYear;
    this.monthRate = this.hourRate * 162.5;
    this.dayRate = this.hourRate * 7.5;
    this.minuteRate = this.hourRate / 60;
    this.secondRate = this.minuteRate / 60;
    this.currentPay = 0;
    this.currentPayUpdatedEverySecond = 0;
  }
}
