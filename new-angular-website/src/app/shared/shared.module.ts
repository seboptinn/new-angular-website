import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToFixedPipe } from "./pipes/to-fixed.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ToFixedPipe],
  imports: [CommonModule],
  exports: [ToFixedPipe, CommonModule, FormsModule],
})
export class SharedModule {}
