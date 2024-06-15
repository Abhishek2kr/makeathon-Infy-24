import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = 'YOUR_API_ENDPOINT';  // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  uploadFiles(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
