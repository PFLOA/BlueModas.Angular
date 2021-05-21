import { ResumoVendaComponent } from './content/resumo-venda/resumo-venda.component';
import { ClienteIdentificacaoComponent } from './content/cliente-identificacao/cliente-identificacao.component';
import { CheckoutComponent } from './content/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './content/products/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ClienteIdentificacaoComponent,
    pathMatch: 'full'
  },{
    path: 'resumo-venda/:id',
    component: ResumoVendaComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
