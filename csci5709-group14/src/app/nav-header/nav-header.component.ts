import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../Authentication/auth.service';

@Component({
	selector: 'app-nav-header',
	templateUrl: './nav-header.component.html',
	styleUrls: ['./nav-header.component.css'],
})
export class NavHeaderComponent implements OnInit {
	private authSubscription!: Subscription;
	isUserAuthenticated = false;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authSubscription = this.authService
			.getAuthenticatedSub()
			.subscribe((status) => (this.isUserAuthenticated = status));

		this.isUserAuthenticated = this.authService.getIsAuthenticated();
	}

	ngOnDestroy(): void {
		this.authSubscription.unsubscribe();
	}

	logout() {
		this.authService.logout();
	}
}
