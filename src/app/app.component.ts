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
        height: '100px',
        borderRadius: '0',
        border: '5px solid green'
      })),
      state('clicked', style({
        backgroundColor: 'green',
        width: '300px',
        height: '300px',
        borderRadius: '150px',
        border: '15px solid pink'        
      })),
      state('mousedown', style({
        width: '100px',
        height: '100px',
        borderRadius: '0',
        backgroundColor: 'purple',
        border: '3px solid black'
      })),
      
      transition('default <=> clicked', animate('1500ms 500ms linear')),
      transition('clicked <=> mousedown', animate(500))
    ])   
  ]
})
export class AppComponent {
  clickInfo = 'default';

  onToggleClickInfo() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 1500);
    // this.clickInfo = this.clickInfo === 'default' ? 'clicked' : 'default';
  }
 
}
