import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  sections = [
    {
      title: 'Getting Started',
      questions: [
        {
          q: 'What is Kleen Bill?'
        },
        {
          q: 'What makes Kleen Bill different from other primary care and urgent care practices?'
        }
      ]
    },
    {
      title: 'Membership',
      questions: [
        {
          q: 'Does a Kleen Bill membership come with?'
        }
      ]
    },
    {
      title: 'Pricing, payment, and insurance',
      questions: [
        {
          q: 'Why is there a membership fee?'
        },
        {
          q: 'Does Kleen Bill accept insurance? Is Kleen Bill an insurance plan?'
        }
      ]
    },
    {
      title: 'Care',
      questions: [
        {
          q: 'How do I get care with Kleen Bill?'
        },
        {
          q: 'Does Kleen Bill offer pediatric care for my kids?'
        },
        {
          q: 'I\'m 65+ years and on Medicare. Does Kleen Bill have an offering for me?'
        },
        {
          q: 'I only have Medicaid. Can I receive care from Kleen Bill?'
        },
        {
          q: 'Can Kleen Bill providers write a prescription for my condition?'
        },
      ]
    },
    {
      title: 'Other questions',
      questions: [
        {
          q: 'I still have questions about Kleen Bill. Who can I talk to?'
        }
      ]
    },
  ]
}
