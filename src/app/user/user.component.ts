import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;
  userId: number | null = null;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.getUsers();

    // Check if there's a user ID in the route parameters and load the user data
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.userId = +params['id'];
        this.loadUser(this.userId);
      }
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.data;
    });
  }

  loadUser(id: number): void {
    this.userService.getUserById(id).subscribe((user: any) => {
      this.userForm.patchValue(user.data);
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      if (this.userId) {
        this.userService.updateUser(this.userId, user).subscribe(() => {
          this.router.navigate(['/users']);
          this.resetForm();
          this.getUsers();
        });
      } else {
        this.userService.createUser(user).subscribe(() => {
          this.getUsers();
          this.resetForm();
        });
      }
    }
  }

  updateUser(id: number): void {
    this.userId = id;
    this.loadUser(id);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  resetForm(): void {
    this.userForm.reset();
    this.userId = null;
  }
}
