import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = signal('');
  password = signal('');
  loading = signal(false);
  error = signal<string | null>(null);

  async onSubmit() {
    this.loading.set(true);
    this.error.set(null);

    const { user, error } = await this.authService.signIn(this.email(), this.password());

    if (error) {
      this.error.set(error.message);
    } else if (user) {
      this.router.navigate(['/']);
    }

    this.loading.set(false);
  }
}
