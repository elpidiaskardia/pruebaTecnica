import { Component, OnInit, Input } from '@angular/core';
import { Journey } from '../../models/journey.model';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  @Input() journey: Journey;

  constructor() { }

  ngOnInit(): void {
   
  }


}
