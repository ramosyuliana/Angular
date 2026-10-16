import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  cargando = signal(false);
  error = signal('');

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.cargando.set(true);
    this.error.set('');

    const { email, password } = this.form.getRawValue();


    this.auth.login({ Email: email, Contrasena: password}).subscribe({
      next: () => this.router.navigate(['/productos']),
      error: (err) => {
        this.cargando.set(false);
        this.error.set(
          err.status === 401
            ? 'Correo o contraseña incorrectos'
            : 'No se pudo conectar con el servidor',
        );
      },
    });
  }
}