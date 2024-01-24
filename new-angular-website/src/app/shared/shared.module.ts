import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToFixedPipe } from "./pipes/to-fixed.pipe";

@NgModule({
  declarations: [ToFixedPipe],
  imports: [CommonModule],
  exports: [ToFixedPipe, CommonModule],
})
export class SharedModule {}
