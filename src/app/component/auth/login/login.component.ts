import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth/auth.service";
import {EventService} from "../../../service/event/event.service";
import {StorageService} from "../../../service/storage/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private eventService: EventService,
    private storageService: StorageService,
  ) {
    this.loginForm = this.createForm();
  }

  ngOnInit(): void {
    if (this.storageService.getAccessToken()) {
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
        this.storageService.setAuthToken(value)
        this.authService.getProfile().subscribe(
          value => {
            this.storageService.setAccountInfo(value)
            this.router.navigateByUrl('')
            this.eventService.sendProfileEvent('')
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
