import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    template: `
        <h1>Login</h1>
        <div>
            <input type="text" [(ngModel)]="user" placeholder="User">
            <input type="password" [(ngModel)]="password" placeholder="Password">
            <button (click) ="login()" class="btn btn-primary">Login</button>
        </div>
        `
})

export class LoginFormComponent {

        user = '';
        password = '';
        constructor(private router: Router,
                    private route: ActivatedRoute,
                    private loginService: LoginService) { }
        login() {
            console.log('queryParams', this.route.snapshot.queryParams['destination']);
            const destination = this.route.snapshot.queryParams['destination'] || '/';
            if (this.loginService.login(this.user, this.password)) {
                this.router.navigateByUrl(destination);
            };
        }
}