import {Injectable} from '@angular/core';

export interface ToastInfo {
  body: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: ToastInfo[] = [];

  constructor() {
  }

  show(body: string, delay?: number) {
    this.toasts.push({body, delay});
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
