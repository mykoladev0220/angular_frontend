import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'https://anapioficeandfire.com/api/books';

  constructor(private http: HttpClient) {}

  getBook(bookId: string): Observable<Book> {
    const url = `${this.baseUrl}/${bookId}`;
    return this.http.get<Book>(url);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }
}