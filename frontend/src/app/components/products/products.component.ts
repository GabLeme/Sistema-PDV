import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList: any = [];
  addOrEditProduct: Product;
  isEdit: boolean = false;
  initialize() {
    this.isEdit = false;
    this.addOrEditProduct = {
      nome: '',
      quantidade: 0,
      valor: 0,
      codigo: ''
    };
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.initialize();
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(
      r => {
        this.productsList = r;
      }
    )
  }

  editProduct(p: Product) {
    this.isEdit = true;
    this.addOrEditProduct = {
      _id: p._id,
      nome: p.nome,
      quantidade: p.quantidade,
      valor: p.valor,
      codigo: p.codigo
    }
  }

  deleteProduct(p: Product) {
    if (confirm("Você deseja deletar o produto: " + p.codigo + "?")) {
      this.productsService.deleteProduct(p).subscribe(r => {
        this.getAllProducts();
      })
    }
  }

  saveProduct() {
    if (this.isEdit) {
      this.productsService.updateProduct(this.addOrEditProduct).subscribe(r => {
        
        this.getAllProducts();
        this.initialize();
      });
    }
    else {
      this.productsService.saveProduct(this.addOrEditProduct).subscribe(r => {
        
        this.getAllProducts();
        this.initialize();
      })
    }
  }
}

