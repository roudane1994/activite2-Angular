import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { Post } from 'src/app/models/post';
import { ServicePostService } from 'src/app/services/service-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private postService:ServicePostService,private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      titre: '',
      contenu:''
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    let post =new Post(formValue['titre'],formValue['contenu'],new Date(),false);
    this.postService.addPOst(post);
    
    this.router.navigate(['/posts']);
  }

}
