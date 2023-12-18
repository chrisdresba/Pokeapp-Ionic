import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigateByUrl('home');
    }, 3000);
  }

  ionViewWillEnter() {
    this.showSplash();
  }

  async showSplash() {
    await SplashScreen.show({
      showDuration: 3000, // Mostrar el splash durante 3 segundos
      autoHide: true,
    });
  }

  ngOnInit() {}
}
