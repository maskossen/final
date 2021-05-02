import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complexities',
  templateUrl: './complexities.page.html',
  styleUrls: ['./complexities.page.scss'],
})
export class ComplexitiesPage implements OnInit {

  dataStructShown = true;
  dataStructList = [{structure: 'Array', 
                    a_access: 'Θ(1)', a_search: 'Θ(n)', a_insertion: 'Θ(n)', a_deletion: 'Θ(n)',
                    w_access: 'O(1)', w_search: 'O(n)', w_insertion: 'O(n)', w_deletion: 'O(n)',
                    space: 'O(n)', shown: 'false'},

                    {structure: 'Stack', 
                    a_access: 'Θ(n)', a_search: 'Θ(n)', a_insertion: 'Θ(1)', a_deletion: 'Θ(1)',
                    w_access: 'O(n)', w_search: 'O(n)', w_insertion: 'O(1)', w_deletion: 'O(1)',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'Queue', 
                    a_access: 'Θ(n)', a_search: 'Θ(n)', a_insertion: 'Θ(1)', a_deletion: 'Θ(1)',
                    w_access: 'O(n)', w_search: 'O(n)', w_insertion: 'O(1)', w_deletion: 'O(1)',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'Singly Linked List', 
                    a_access: 'Θ(n)', a_search: 'Θ(n)', a_insertion: 'Θ(1)', a_deletion: 'Θ(1)',
                    w_access: 'O(n)', w_search: 'O(n)', w_insertion: 'O(1)', w_deletion: 'O(1)',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'Doubly Linked List', 
                    a_access: 'Θ(n)', a_search: 'Θ(n)', a_insertion: 'Θ(1)', a_deletion: 'Θ(1)',
                    w_access: 'O(n)', w_search: 'O(n)', w_insertion: 'O(1)', w_deletion: 'O(1)',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'Hash Table', 
                    a_access: 'N/A', a_search: 'Θ(1)', a_insertion: 'Θ(1)', a_deletion: 'Θ(1)',
                    w_access: 'N/A', w_search: 'O(n)', w_insertion: 'O(n)', w_deletion: 'O(n)',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'Binary Search Tree', 
                    a_access: 'Θ(log(n))', a_search: 'Θ(log(n))', a_insertion: 'Θ(log(n))', a_deletion: 'Θ(log(n))',
                    w_access: 'O(n)', w_search: 'O(n)', w_insertion: 'O(n)', w_deletion: 'O(n)',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'B-Tree', 
                    a_access: 'Θ(log(n))', a_search: 'Θ(log(n))', a_insertion: 'Θ(log(n))', a_deletion: 'Θ(log(n))',
                    w_access: 'O(log(n))', w_search: 'O(log(n))', w_insertion: 'O(log(n))', w_deletion: 'O(log(n))',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'Red-Black Tree', 
                    a_access: 'Θ(log(n))', a_search: 'Θ(log(n))', a_insertion: 'Θ(log(n))', a_deletion: 'Θ(log(n))',
                    w_access: 'O(log(n))', w_search: 'O(log(n))', w_insertion: 'O(log(n))', w_deletion: 'O(log(n))',
                    space: 'O(n)', shown: 'false'},
                  
                    {structure: 'AVL Tree', 
                    a_access: 'Θ(log(n))', a_search: 'Θ(log(n))', a_insertion: 'Θ(log(n))', a_deletion: 'Θ(log(n))',
                    w_access: 'O(log(n))', w_search: 'O(log(n))', w_insertion: 'O(log(n))', w_deletion: 'O(log(n))',
                    space: 'O(n)', shown: 'false'}];

  algoShown = true;
  algoList = [{algo: 'Quicksort', best: 'Ω(nlog(n))', average: 'Θ(nlog(n))', worst: 'O(n^2)', s_worst: 'O(log(n))', shown: 'false'},
              {algo: 'Mergesort', best: 'Ω(nlog(n))', average: 'Θ(nlog(n))', worst: 'O(nlog(n))', s_worst: 'O(n)', shown: 'false'},
              {algo: 'Heapsort', best: 'Ω(nlog(n))', average: 'Θ(nlog(n))', worst: 'O(nlog(n))', s_worst: 'O(1)', shown: 'false'},
              {algo: 'Bubble Sort', best: 'Ω(n)', average: 'Θ(n^2)', worst: 'O(n^2)', s_worst: 'O(1)', shown: 'false'},
              {algo: 'Insertion Sort', best: 'Ω(n)', average: 'Θ(n^2)', worst: 'O(n^2)', s_worst: 'O(1)', shown: 'false'},
              {algo: 'Selection Sort', best: 'Ω(n^2)', average: 'Θ(n^2)', worst: 'O(n^2)', s_worst: 'O(1)', shown: 'false'}];

  constructor() { }

  ngOnInit() {
  }

  toggleStruct() {
    this.dataStructShown === true ? this.dataStructShown = false : this.dataStructShown = true;
  }

  toggleAlgo() {
    this.algoShown === true ? this.algoShown = false : this.algoShown = true;
  }

  showStructure(item) {
    console.log(item.structure);
    item.shown === false ? item.shown = true : item.shown = false;
  }

  showAlgo(item) {
    item.shown === false ? item.shown = true : item.shown = false;
  }
}
