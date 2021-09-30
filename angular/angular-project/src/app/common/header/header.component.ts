import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/auth/firebase-auth.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, public fbAuth: FirebaseAuthService) {}

  ngOnInit(): void {}
}
