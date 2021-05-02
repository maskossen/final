import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.page.html',
  styleUrls: ['./python.page.scss'],
})
export class PythonPage implements OnInit {

  stringsShown = true;
  stringsList = [{codeSnip: 'msg = "Hello world!" \nprint(msg)', 
      desc: 'Prints out "Hello World" to the terminal through the msg variable'}, 
                 {codeSnip: 'first = "Steve" \nlast = "Jobs" \nfull_name = first + \' \' + last', 
      desc: 'Combies the two strings together'}];

  arrayShown = true;
  arrayList = [{codeSnip: 'cars = ["Chevy", "Honda", "Ford"]', desc: 'Create a predefined list'},
              {codeSnip: 'firstItem = items[0]', desc: 'Gets the first item in the list'},
              {codeSnip: 'lastItem = items[-1]', desc: 'Gets the last item in the list'},
              {codeSnip: 'for car in cars: \nprint(car)', desc: 'For loop that iterates through the list'},
              {codeSnip: 'cars = [] \ncars.append("Subaru")', desc: 'Adds new items to the end of the list'},
              {codeSnip: 'copyOfCars = cars[:]', desc: 'Copies the list by slicing'},
              {codeSnip: 'half = cars[:2]', desc: 'Slices the first two items in a list into a new list'}];

  inputShown = true;
  inputList = [{codeSnip: 'name = input("What is you name? " \nprint("Your name: " + name)', desc: 'Prompts the user for input. (All input is saved as a string)'},
               {codeSnip: 'cars = input("How many cars do you own? ") \ncars = int(cars)', desc: 'Converts the user input into an int data type'}];

  constructor() { }

  ngOnInit() {
  }

  toggleStrings() {
    this.stringsShown === true ? this.stringsShown = false : this.stringsShown = true;
  }

  toggleArray() {
    this.arrayShown === true ? this.arrayShown = false : this.arrayShown = true;
  }

  toggleInput() {
    this.inputShown === true ? this.inputShown = false : this.inputShown = true;
  }
}
