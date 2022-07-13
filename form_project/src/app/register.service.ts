import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  jsonData: {}[] = [
    {
      id: 1,
      name: 'Shivani',
      email: 'shivani@gmail.com',
      gender: 'female',
      dob: '2010-08-09',
      profile: '',
      hobbies: ([] = ['singing', 'dancing']),
      phoneNum: '934-456-7890',
      qualification: ['MCA', 'BCA'],
      profession: 'software Engineer',
      description: 'text description',
      contacts: [
        {
          name: 'Sonu',
          number: '564-456-7890',
        },
      ],
    },
    {
      id: 2,
      name: 'Nishi',
      email: 'nishi@gmail.com',
      gender: 'female',
      dob: '1990-06-09',
      profile: '',
      hobbies: ([] = ['singing', 'dancing']),
      phoneNum: '345-456-7890',
      qualification: ['MCS', 'BCA'],
      profession: 'Manager',
      description: 'Description Ipsum',
      contacts: [
        {
          name: 'Sonu',
          number: '123-456-7890',
        },
        {
          name: 'Megha',
          number: '123-456-7890',
        },
      ],
    },
    {
      id: 3,
      name: 'Sonu',
      email: 'sonu@gmail.com',
      gender: 'female',
      dob: '2020-04-20',
      profile: '',
      hobbies: ([] = ['singing', 'dancing']),
      phoneNum: '667-456-7890',
      qualification: ['10th', '12th'],
      profession: 'student',
      description: 'description',
      contacts: [
        {
          name: 'Sonam',
          number: '123-456-7890',
        },
        {
          name: 'Shivani',
          number: '123-456-7890',
        },
      ]
    }
  ];
  constructor() {}
  dataUpdated = new Subject<{}[]>();
  getData() {
    return this.jsonData.slice();
    console.log(this.jsonData);
    
  }

  getselectedData(id: number) {
    return this.jsonData[id];
  }
  addData(newValue: any) {
    this.jsonData.push(newValue);
  }

  updateData(index: number, newUserData: object) {
    this.jsonData[index] = newUserData;
    this.dataUpdated.next(this.jsonData.slice());
  }

  deleteData(index: number) {
    this.jsonData.splice(index, 1);
    this.dataUpdated.next(this.jsonData.slice());
  }

  activatedEmitter = new Subject<boolean>();
}
