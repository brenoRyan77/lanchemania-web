import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CardapioService } from './services/cardapio.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';	

registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProdutosComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [
    {provide: CardapioService, useClass: CardapioService},
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
})
export class AppComponent {
  title = 'lanchemania-web';
}
