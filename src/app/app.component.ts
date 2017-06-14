import { Component, OnInit } from '@angular/core';
import { routerTransition } from './animations/slide-in.animation';
import { showStateTrigger, animateStateTrigger } from './animations/void-all-animations';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations/basic-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [routerTransition()],
 	// host: { '[@routerTransition]': '' }
  
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger,
    showStateTrigger,
    animateStateTrigger
  ]
})
export class AppComponent implements OnInit {
  clickInfo = 'default';
  numbers: Array<number> = Array.from(Array(10).keys());
  numberEntered: number = 0;
  isShown: boolean = false;
  width: number = 500;
  animate: boolean = false;

  ngOnInit() {
    // console.log(this.numbers);  
  }

  onToggleClickInfo() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 1500);
    // this.clickInfo = this.clickInfo === 'default' ? 'clicked' : 'default';
  }
 
}
