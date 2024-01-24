import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./pages/home/container/home.component";
import { AboutComponent } from "./pages/about/container/about.component";
import { ContactComponent } from "./pages/contact/container/contact.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { NavigationBarComponent } from "./shared/components/navigation-bar/navigation-bar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    NavigationBarComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "nettside-native";
}
