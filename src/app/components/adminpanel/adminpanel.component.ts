import { Component } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {

  

}
class Dropdown {
  constructor(el: Element) {
    // Dropdown sınıfının constructor içeriğini doldurun
  }
}

// TypeScript ile yazılmış kod
const dropdownElementList: NodeListOf<Element> = document.querySelectorAll('.dropdown-toggle');
const dropdownList: Dropdown[] = Array.from(dropdownElementList).map((dropdownToggleEl: Element) => new Dropdown(dropdownToggleEl));