import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { RouteGuard } from './route-guard';

describe('RouteGuard', () => {
	it('should create an instance', () => {
		expect(new RouteGuard(AuthService, Router)).toBeTruthy();
	});
});
