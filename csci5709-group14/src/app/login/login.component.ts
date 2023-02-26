import { Component, OnInit } from '@angular/core';

import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	hide: any;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: [
				'',
				[
					Validators.required,
					Validators.minLength(8),
					Validators.pattern(
						'^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};:\\\\|,.<>\\/?]*)$'
					),
				],
			],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.loginForm.controls;
	}

	onLogin() {
		console.log('submitted');
		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}

		// store user info in local storage
		localStorage.setItem('user', JSON.stringify(this.loginForm.value));

		// navigate to profile page
		this.router.navigate(['/homepage']);
	}
}
