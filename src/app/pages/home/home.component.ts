import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hutaoSurprise() {
    const sound = document.querySelector('audio');
    sound?.play();
    alert("Teng te teng! Kamu Kena Prank!");
  }
}
