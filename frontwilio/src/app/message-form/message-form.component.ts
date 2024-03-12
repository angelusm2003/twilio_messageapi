import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  errorMessage: string = '';
  responseMessage: string = '';

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    this.messageForm = this.formBuilder.group({
      to: ['', [Validators.required, Validators.pattern('^\\+[1-9]\\d{1,14}$')]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('en el submit');
    if (this.messageForm.valid) {
      const formData = this.messageForm.value;
      this.messageService.sendMessage(formData.to, formData.message).subscribe(
        (response: string) => {
          console.log('Message sent successfully:', response);
          // Update response message
          this.responseMessage = response;
          // Reset form after successful submission
          this.messageForm.reset();
    },
        error => {
          console.error('Error sending message:', error);
          this.errorMessage = 'Error sending message. Please try again later.';
        }
      );
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }
}
