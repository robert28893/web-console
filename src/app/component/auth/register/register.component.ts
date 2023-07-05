import {Component, OnInit} from '@angular/core';
import {Constants} from "../../../common/constants";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../../service/storage/storage.service";
import {ToastService} from "../../../service/toast/toast.service";
import {AuthService} from "../../../service/auth/auth.service";

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
    private storageService: StorageService,
    private toastService: ToastService,
    private authService: AuthService,
  ) {
    this.registerForm = this.createForm();
  }

  routerLinkLogin() {
    return "/" + Constants.ROUTE_PATH.AUTH_LOGIN
  }

  ngOnInit(): void {
    if(this.storageService.getAccessToken()) {
      this.router.navigateByUrl('')
    }
  }

  register() {
    let formValue = this.registerForm.value;
    console.log(formValue)
    if (formValue.password !== formValue.rePassword) {
      this.toastService.show('Mật khẩu và Nhập lại mật khẩu không trùng khớp', 5000)
      return
    }
    this.authService.register(formValue.email, formValue.fullName, formValue.password).subscribe(() => {
      this.router.navigateByUrl(Constants.ROUTE_PATH.AUTH_LOGIN)
    })
  }

  get emailFc() {
    return this.registerForm.get('email')!;
  }

  get fullNameFc() {
    return this.registerForm.get('fullName')!;
  }

  get passwordFc() {
    return this.registerForm.get('password')!;
  }

  get rePasswordFc() {
    return this.registerForm.get('rePassword')!;
  }

  createForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      fullName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      rePassword: ['', Validators.compose([Validators.required])],
    })
  }
}
