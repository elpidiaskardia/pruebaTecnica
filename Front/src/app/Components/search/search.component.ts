import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/service-api.service';
import { Journey } from 'src/app/models/journey.model';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  origin: string = "";
  destination: string = "";
  journey: Journey;
  FormSearch: FormGroup;
  buttonPressed: boolean = false;
  isLoading: boolean = false;
  messageErrorOrigin:string = "";
  messageErrorDestination:string = "";

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.FormSearch = this.fb.group({
      origin: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      destination: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]]
    });
  }
  searchJourney() {
    this.buttonPressed = true;
    if (this.FormSearch.valid) {
      this.isLoading = true;
      this.apiService.getData(this.FormSearch.get("origin").value,this.FormSearch.get("destination").value).subscribe(
        (data) => {
        this.journey = data;
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
      });
    }else{
      this.errosInput();
    }
  }
  ngOnInit(): void {
  }
  errosInput(){
    this.messageErrorDestination="";
    this.messageErrorOrigin="";
    if (this.origin.length<3 && this.origin.length!=0){
      this.messageErrorOrigin+="The origin must have exactly 3 letters  ";
    }
    if (this.origin.length==0){
      this.messageErrorOrigin+="Please enter an origin  ";
    }
    if (this.destination.length<3 && this.destination.length!=0){
      this.messageErrorDestination+="The destination must have exactly 3 letters  ";
    }
    if (this.destination.length==0){
      this.messageErrorDestination+="Please enter an destination  ";
    }
    if (this.destination==this.origin && this.destination.length!=0){
      this.messageErrorDestination+="The destination must be different from the origin  ";
    }
    if (/[0-9\W]/.test(this.destination) ){
      this.messageErrorDestination+="Only letters  ";
    }
    if (/[0-9\W]/.test(this.origin)){
      this.messageErrorOrigin+="Only letters  ";
    }
  }
  onInputChange(value: string, field: string): void {
    this[field] = value.toUpperCase();
    if (this.buttonPressed){
      this.errosInput();

    }
  }
  containNumbers(inputString: string): boolean {
    for (const char of inputString) {
      if (/\d/.test(char)) {
        return true;
      }
    }
    return false;
  }
}

