import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username: string = '';
  // password: string = '';
  // isFormSubmitted: boolean = false;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.createForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem(Constants.ACCESS_TOKEN)) {
      this.router.navigateByUrl('')
      return
    }
  }

  login() {
    // this.isFormSubmitted = true;
    let formValue = this.loginForm.value;
    if (!formValue.username.trim() || !formValue.password.trim()) {
      return;
    }
    console.log(formValue)
    // call api login to get access token
    this.authService.login(formValue.username.trim(), formValue.password.trim())
      .subscribe(value => {
        localStorage.setItem(Constants.ACCESS_TOKEN, value.access_token)
        this.authService.getProfile().subscribe(
          value => {
            localStorage.setItem(Constants.ACCOUNT_INFO, JSON.stringify(value))
            this.router.navigateByUrl('')
          }
        )
      })
  }

  createForm() {
    return this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    })
  }

  get usernameFc() {
    return this.loginForm.get('username')!;
  }

  get passwordFc() {
    return this.loginForm.get('password')!;
  }

  routeLinkRegister() {
    return "/" + Constants.ROUTE_PATH.AUTH_REGISTER;
  }
}
