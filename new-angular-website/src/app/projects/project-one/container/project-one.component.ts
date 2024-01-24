import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { interval, timeInterval } from "rxjs";
import { FormsModule } from "@angular/forms";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { ToFixedPipe } from "../../../shared/pipes/to-fixed.pipe";
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: "project-one",
  standalone: true,
  imports: [FormsModule, SharedModule],
  templateUrl: "./project-one.component.html",
  styleUrl: "./project-one.component.scss",
})
export class ProjectOneComponent {
  @Input() public salary = 700000;
  public salaryPerMonth = this.salary / 12;
  public salaryPerDay = this.salaryPerMonth / 30;
  public salaryPerHour = this.salaryPerDay / 7.5;
  public salaryPerMinute = this.salaryPerHour / 60;
  public salaryPerSecond = this.salaryPerMinute / 60;

  public currentPay = 0;

  public secondsInAnHour = 27000;

  constructor() {
    const seconds = interval(1000);

    seconds.pipe(timeInterval()).subscribe((value) => {
      this.currentPay += this.salaryPerSecond;
    });
  }
}
