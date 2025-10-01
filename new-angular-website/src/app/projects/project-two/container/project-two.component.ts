import { Component } from "@angular/core";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonApiService } from "../../../shared/services/common-api.service";

@Component({
  selector: "project-two",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: "./project-two.component.html",
  styleUrl: "./project-two.component.scss",
})
export class ProjectTwoComponent {
  constructor(private commonApiService: CommonApiService) {
    this.commonApiService.pokemon$.subscribe((data) => {
      if (data) {
        alert(
          `Pokemon Name: ${data.name}\nHeight: ${data.height}\nWeight: ${data.weight}`
        );
      } else {
        alert("Failed to fetch Pokémon data.");
      }
    });
  }

  fetchPokemon() {
    this.commonApiService.fetchPokemon("pikachu");
  }
}
