import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() model!: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
