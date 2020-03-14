import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../products';
import { map, tap, catchError } from 'rxjs/operators';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = "http://localhost:3000/products";
   //baseUrl = "https://localhost:44396/api/product";

  constructor(private _http: HttpClient) { }
 // new code for CRUD operation
 createProduct(product: Product) {  
  return this._http.post(this.baseUrl, product);  
} 

updateProduct(product: Iproduct) {  
  return this._http.put(this.baseUrl + '/' + product.id, product);  
}  
deleteProduct(id: number) {  
  console.log('delete this '+id);
  return this._http.delete(this.baseUrl +'/'+ id);  
} 


 // End


  getProducts11(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(this.baseUrl);
  }
  getProducts2(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(this.baseUrl)
      .pipe(tap(_ => console.log('fetched')));
  }
  getProducts(): Observable<Iproduct[]> {
    return this._http.get<Iproduct[]>(this.baseUrl)
      .pipe(
        tap(_ => console.log('Product fetched from Api')),
        catchError(this.handleError<Iproduct[]>
          ('getProducts', []))

      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
