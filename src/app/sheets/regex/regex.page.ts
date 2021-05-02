import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.page.html',
  styleUrls: ['./regex.page.scss'],
})
export class RegexPage implements OnInit {

  anchorShown = true;
  anchorList = [{codeSnip: '^', desc: 'Start of line'},
                {codeSnip: '$', desc: 'End of line'},
                {codeSnip: '\\b', desc: 'Word boundry'},
                {codeSnip: '\\B', desc: 'Not at word boundry'},
                {codeSnip: '\\A', desc: 'Start of subject'},
                {codeSnip: '\\G', desc: 'First match in subject'},
                {codeSnip: '\\z', desc: 'End of subject'},
                {codeSnip: '\\Z', desc: 'End of subject or before newline at end'}];

  litCharShown = true;
  literalCharactersList = [{codeSnip: 'a x B 7 0', desc: 'Letters and digits match exactly'},
                          {codeSnip: '@ - = %', desc: 'Some special characters match exactly'},
                          {codeSnip: '\\\\. \\\\ \\$ \\[', desc: 'Escape other specials with backslash'}];
  
  charGroupsShown = true;                        
  charGroups = [{codeSnip: '.', desc: 'Almost any character (usually not newline)'},
                {codeSnip: '[ ]', desc: 'List and ranges of characters'},
                {codeSnip: '[^ ]', desc: 'Any character except those listed'}];

  constructor() { }

  ngOnInit() {
  }

  toggleAnchor() {
    console.log('Clicked');
    this.anchorShown === false ? this.anchorShown = true : this.anchorShown = false;
  }

  toggleLitChar() {
    this.litCharShown === false ? this.litCharShown = true : this.litCharShown = false;
  }

  toggleCharGroups() {
    this.charGroupsShown === false ? this.charGroupsShown = true : this.charGroupsShown = false;
  }
}
