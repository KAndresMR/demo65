import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(HttpClientModule), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"demo65ppwe","appId":"1:98562881159:web:36df63e0ed0c6efaf92a22","storageBucket":"demo65ppwe.appspot.com","apiKey":"AIzaSyCT8MOoKYYBYGNTuYAiyg58x8Ppm6C8StQ","authDomain":"demo65ppwe.firebaseapp.com","messagingSenderId":"98562881159"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
