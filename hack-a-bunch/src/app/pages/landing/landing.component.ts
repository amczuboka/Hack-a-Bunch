import { Component } from '@angular/core';
import { Topic } from 'src/app/modules/topic';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  topics: Topic[] = [];

  ngOnInit() {
    this.topics = [
      {
        title: 'Student Loans',
        description: 'Are you curious how much you will pay in interest over the life of your student loans? We can help you figure that out.',
        image: '../../../assets/img/cute_student_debt.png',
        link: 'https://picsum.photos/200/300',
      },
      {
        title: 'Mortgages',
        description: 'Would you like to know how much you will pay in interest over the life of your mortgage? We can help you figure that out.',
        image: '../../../assets/img/cute_mortgage.png',
        link: 'https://picsum.photos/200/300',
      },
      {
        title: 'Car payments',
        description: 'Do you know how much you will pay in interest over the life of your car loan? We can help you figure that out.',
        image: '../../../assets/img/cute_car.png',
        link: 'https://picsum.photos/200/300',
      }
    ];
  }
}
