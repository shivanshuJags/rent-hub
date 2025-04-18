import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  imports: [CommonModule, FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  comments = [
    { name: 'John Doe', rating: 4, text: 'Nice property, well maintained!', date: new Date() },
    { name: 'Jane Smith', rating: 5, text: 'Loved it! Owner was responsive.', date: new Date() },
  ];

  newComment = {
    name: '',
    text: '',
    rating: 0
  };

  addComment() {
    if (this.newComment.name && this.newComment.text && this.newComment.rating) {
      this.comments.unshift({
        ...this.newComment,
        date: new Date()
      });
      this.newComment = { name: '', text: '', rating: 0 };
    }
  }

  setRating(star: number) {
    this.newComment.rating = star;
  }

}
