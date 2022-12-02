import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/component/users/interface/user.interface'


@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      console.log('User ID:', params.get('uuid')!); 
      this.userService.getUser(params.get('uuid')!).subscribe(
        (response: any) =>{
          console.log(response);
        }
      )
    })
  }

}
