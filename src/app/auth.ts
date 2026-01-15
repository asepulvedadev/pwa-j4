import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase';
import { User, AuthError } from '@supabase/supabase-js';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private supabaseService = inject(SupabaseService);
  private supabase = this.supabaseService.client;

  // Signal for current user
  user = signal<User | null>(null);

  constructor() {
    // Initialize auth state
    this.supabase.auth.getUser().then(({ data: { user } }) => {
      this.user.set(user);
    });

    // Listen to auth changes
    this.supabase.auth.onAuthStateChange((event, session) => {
      this.user.set(session?.user ?? null);
    });
  }

  async signUp(email: string, password: string): Promise<{ user: User | null; error: AuthError | null }> {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    return { user: data.user, error };
  }

  async signIn(email: string, password: string): Promise<{ user: User | null; error: AuthError | null }> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { user: data.user, error };
  }

  async signOut(): Promise<{ error: AuthError | null }> {
    const { error } = await this.supabase.auth.signOut();
    return { error };
  }

  // Observable for compatibility
  get user$(): Observable<User | null> {
    return from(Promise.resolve(this.user()));
  }
}
