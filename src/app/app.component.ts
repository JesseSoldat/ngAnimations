import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'pink',
        width: '100px',
        height: '100px'
      })),
      state('clicked', style({
        backgroundColor: 'green',
        width: '500px',
        height: '300px'
      })),
      transition('default <=> clicked', animate('1500ms 500ms linear'))
    ])
    
    
  ]
})
export class AppComponent {
  clickInfo = 'default';

  onToggleClickInfo() {
    this.clickInfo = this.clickInfo === 'default' ? 'clicked' : 'default';
  }
 
}
