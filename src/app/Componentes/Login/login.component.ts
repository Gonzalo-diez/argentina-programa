import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/Model/login.model';
import { AuthService } from 'src/app/Service/auth.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    isLog = false;
    isLogFail = false;
    logUsuario!: login;
    nombreUsuario!: string;
    password!: string;
    roles: string[] = [];
    errorMsj!: string;

    constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        if(this.tokenService.getToken()) {
            this.isLog = true;
            this.isLogFail = false;
            this.roles = this.tokenService.getAuthorities();
        }
    }

    onLogin(): void {
        this.logUsuario = new login(this.nombreUsuario, this.password);
        this.authService.login(this.logUsuario).subscribe(data => {
            this.isLog = true;
            this.isLogFail = false;
            this.tokenService.setToken(data.token);
            this.tokenService.setUserName(data.nombreUsuario);
            this.tokenService.setAuthorities(data.authorities);
            this.roles = data.authorities;
            this.router.navigate([''])
        }, err => {
            this.isLog = false;
            this.isLogFail = true;
            this.errorMsj = err.error.aviso;
            console.log(this.errorMsj);
        })
    }
}