import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from './animations/slide-in.animation';
import { showStateTrigger, animateStateTrigger, listStateTrigger } from './animations/void-all-animations';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations/basic-animations';
import { rainbowBoxTrigger } from './animations/keyframes';
import { routeFadeStateTrigger, routeSlideStateTrigger } from './../shared/route-animation';


@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
   // animations: [routerTransition()],
 	// host: { '[@routerTransition]': '' }  
  animations: [
    clickedStateTrigger,
    numberEnteredStateTrigger,
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger,
    rainbowBoxTrigger,
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class ExamplesComponent implements OnInit {
  @HostBinding('@routeSlideState')  routeAnimation = true;
  clickInfo = 'default';
  numbers: Array<number> = Array.from(Array(10).keys());
  numberEntered: number = 0;
  isShown: boolean = false;
  width: number = 500;
  animate: boolean = false;
  testResults: Array<number> = [];
  color: 'whiteState';

  constructor() { }

  ngOnInit() {
  }

  onToggleClickInfo() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 1500);
    // this.clickInfo = this.clickInfo === 'default' ? 'clicked' : 'default';
  }
  onAddElement() {
    this.testResults.push(Math.random() * 100);
  }

  onAnimationsHook(event: AnimationEvent, type) {
    console.log(type);
    console.log(event);
    
  }

}
