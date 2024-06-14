import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
interface FilePreview {
  file: File;
  preview: string | ArrayBuffer | null;
  name: string;
}
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  files: FilePreview[] = [];
  options: string[] = ['Algo1', 'Algo 2', 'Algo 3'];
  selectedOption: string = this.options[0];

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any): void {
    const selectedFiles = Array.from(event.target.files) as File[];
    this.handleFiles(selectedFiles);
  }

  onDrop(event: any): void {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files) as File[];
    this.handleFiles(droppedFiles);
  }

  onDragOver(event: any): void {
    event.preventDefault();
  }

  handleFiles(files: File[]): void {
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.files.push({ file, preview: reader.result, name: file.name });
      };
      reader.readAsDataURL(file);
    });
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
  }

  processFiles(): void {
    if (this.files.length === 0) {
      alert('No files selected');
      return;
    }

    const formData = new FormData();
    this.files.forEach(filePreview => formData.append('files', filePreview.file));
    formData.append('option', this.selectedOption);

    this.fileUploadService.uploadFiles(formData).subscribe(response => {
      console.log('Files processed successfully', response);
    }, error => {
      console.error('Error processing files', error);
    });
  }
}
