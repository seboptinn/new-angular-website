import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toFixed",
})
export class ToFixedPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number): string {
    return value.toFixed(decimalPlaces);
  }
}
