import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/todo.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  public model!: ToDo;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getModel()
    //setTimeout(this.getModel, 3000)
  }

  public getModel(): void {
    setTimeout(
      () => this.httpService.get<ToDo>('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => this.model = data),
      2000
    )

  }
}
