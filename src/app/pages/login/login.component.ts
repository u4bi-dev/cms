import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../providers/router.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public routerService : RouterService) { }

  ngOnInit() {

      this.loginForm = this.formBuilder.group({
          id : ['', [
              <any> Validators.required
          ]],
          password : ['', [
              <any> Validators.required
          ]],
          keep : [false]
      });
  
  }

  login(model: Object, isValid: boolean){
    
      if(isValid){
          alert(JSON.stringify(model));
          this.routerService.onRouter('/');
      }

  }  

}
