import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit {
  files: any[] = [];
  apiUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg' //'YOUR_API_ENDPOINT_HERE'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchFile().subscribe({
      next: (file) => {
        console.log(file)
        this.files.push({
          file: file,
          preview: this.createPreview(file)
        });
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching file', error);
      }
    });
  }

  fetchFile() {
    return this.http.get(this.apiUrl, { responseType: 'blob' }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  createPreview(file: any) {
    // Create a preview URL for the file (e.g., base64 or blob URL)
    return URL.createObjectURL(new Blob([file]));
  }

  downloadFile(file: any) {
    const link = document.createElement('a');
    link.href = file.preview;
    link.download = file.file.name;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }
}
