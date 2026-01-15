import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.user;

  async logout() {
    await this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
