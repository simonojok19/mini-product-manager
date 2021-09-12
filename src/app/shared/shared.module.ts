import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConvertToSpacesPipe, StarComponent],
  imports: [CommonModule, FormsModule],
  exports: [StarComponent, FormsModule, CommonModule, ConvertToSpacesPipe],
})
export class SharedModule {}
