import { ClienteService } from './service/cliente/cliente.service';
import { CarrinhoService } from './service/carrinho.service';
import { ProdutoService } from './service/product/produto.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ProductComponent } from './content/products/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './content/checkout/checkout.component';
import { ClienteIdentificacaoComponent } from './content/cliente-identificacao/cliente-identificacao.component';
import { ResumoVendaComponent } from './content/resumo-venda/resumo-venda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    CheckoutComponent,
    ClienteIdentificacaoComponent,
    ResumoVendaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    ProdutoService,
    CarrinhoService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
