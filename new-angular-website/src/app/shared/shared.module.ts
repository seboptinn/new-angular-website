import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToFixedPipe } from "./pipes/to-fixed.pipe";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ToFixedPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [ToFixedPipe, CommonModule, FormsModule],
})
export class SharedModule {}
