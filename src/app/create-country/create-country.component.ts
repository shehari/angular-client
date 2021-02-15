import { CountryService } from '../country.service';
import { Country } from '../country';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

  country: Country = new Country();
  submitted = false;

  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit() {
  }

  newCountry(): void {
    this.submitted = false;
    this.country = new Country();
  }

  save() {
    this.countryService
    .createCountry(this.country).subscribe(data => {
      console.log(data)
      this.country = new Country();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/countries']);
  }
}
