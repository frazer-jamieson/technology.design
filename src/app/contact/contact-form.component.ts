import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PostService } from '../services/form-poster.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contact-form.component.html',
})

export class ContactForm implements OnInit, OnDestroy {
  frmContact: FormGroup;
  private _sub;
  
  res: any;
  
  constructor(private fb: FormBuilder, private postService: PostService) {}
  
  ngOnInit() {
    this.frmContact = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    let formValue = this.frmContact.value;
    // cool stuff to transform form value
    
    // call AJAX
    this._sub = this.postService.saveContact(formValue)
      .subscribe(data => {
        console.log(data)
        this.res = data;
      });
  }
  
  ngOnDestroy() {
    // clean subscription when component destroy
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }
  
}