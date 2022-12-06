import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/component/users/interface/user.interface';
import { Response } from '../users/interface/response.interface';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent implements OnInit {

  response: Response;
  mode: 'edit' | 'locked' = 'locked';
  user: User;
  buttontext: 'Save Changes' | 'Edit' = 'Edit';

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }


  changeMode(mode?: 'edit' |'locked'): void {
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttontext = this.buttontext === 'Edit' ? 'Save Changes' : 'Edit';
    if (mode === 'edit') {
      // This Updates users on the bsck-end
      console.log('Updating using on the back end');
      }
    }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      console.log('User ID:', params.get('uuid')!); 
      this.userService.getUser(params.get('uuid')!).subscribe(
        (response: any) =>{
          console.log(response);
          this.response = response;
        }
      )
    })
  }

}
