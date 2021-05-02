import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpp',
  templateUrl: './cpp.page.html',
  styleUrls: ['./cpp.page.scss'],
})
export class CppPage implements OnInit {

  cdtShown = true;
  cdtList = [{codeSnip: 'bool', desc: '1 Byte'},
             {codeSnip: 'char', desc: '1 Byte'},
             {codeSnip: 'int', desc: '4 Bytes (At least 2 bytes)'},
             {codeSnip: 'long int', desc: '4 Bytes'},
             {codeSnip: 'long long int', desc: '8 Bytes'}];

  hfciShown = true;
  hfciList = [{codeSnip: '#include <filename>', desc: 'Include a headerfile or another file'},
              {codeSnip: '#include <iostream>', desc: 'Library for things like cin and cout'},
              {codeSnip: '#include <fstream>', desc: 'File stream library'},
              {codeSnip: '#inlcude <vector>', desc: 'Vectors'},
              {codeSnip: '#inlcude <string>', desc: 'String data type'}];

  opShown = true;
  opList = [{codeSnip: 'a + b', desc: 'Addition'},
            {codeSnip: 'a - b', desc: 'Subtraction'},
            {codeSnip: 'a * b', desc: 'Multiplecation'},
            {codeSnip: 'a / b', desc: 'Division'},
            {codeSnip: 'a % b', desc: 'Modulus'},
            {codeSnip: 'a += b', desc: 'Add b to a and store in a'},
            {codeSnip: 'a -= b', desc: 'Subtract b from a and store in a'},
            {codeSnip: 'a /= b', desc: 'Divide a by b store in a'},
            {codeSnip: 'a *= b', desc: 'Multiply a by b store in a'},
            {codeSnip: 'a++', desc: 'Increament a by 1'},
            {codeSnip: 'a--', desc: 'Decreament a by 1'},];

  pointShown = true;
  pointerList = [{codeSnip: 'int* ptr = mem_address;', desc: 'Pointer definition'},
                 {codeSnip: 'int& ref = other_val', desc: 'Reference to a value'}];

  constructor() { }

  ngOnInit() {
  }

  toggleCdt() {
    this.cdtShown === true ? this.cdtShown = false : this.cdtShown = true;
  }

  toggleHfci() {
    this.hfciShown === true ? this.hfciShown = false : this.hfciShown = true;
  }

  toggleOp() {
    this.opShown === true ? this.opShown = false : this.opShown = true;
  }

  togglePoint() {
    this.pointShown === true ? this.pointShown = false : this.pointShown = true;
  }

}
