import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common'; 

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  mostrarDetalles: boolean; 
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  posts: Post[] = [];
  photos: any;
  postSeleccionado: any;

  constructor(private postService: PostService){}

  ngOnInit(){
    this.postService.getAllPost().subscribe(data =>{
      this.posts = Object.values(data).map((post: Post) => ({ ...post, mostrarDetalles: false }));
    });

    this.postService.getAllPhotos().subscribe(data =>{
      this.photos = data;
    });
  }

  mostrarDetalles(post: Post) {
    post.mostrarDetalles = !post.mostrarDetalles;
  }

}
