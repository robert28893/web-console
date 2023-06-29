import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.createForm();
  }

  routerLinkLogin() {
    return "/" + Constants.ROUTE_PATH.AUTH_LOGIN
  }

  ngOnInit(): void {
    if(localStorage.getItem(Constants.ACCESS_TOKEN)) {
      this.router.navigateByUrl('')
    }
  }

  register() {
    let formValue = this.registerForm.value;
    console.log(formValue)
    //TODO: handle register
  }

  get emailFc() {
    return this.registerForm.get('email')!;
  }

  get passwordFc() {
    return this.registerForm.get('password')!;
  }

  get rePasswordFc() {
    return this.registerForm.get('rePassword')!;
  }

  createForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      rePassword: ['', Validators.compose([Validators.required])],
    })
  }
}
