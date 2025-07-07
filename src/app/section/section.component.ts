import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  currentProjectIndex = 0;
  animationClass = 'project-transition';
  showPopup: boolean = false;

  projects = [
  {
    image: 'assets/bg-img/iragu.jpg',
    title: 'Iragu Foundation Website Development',
    description: 'The website features a Payment API for secure transactions,a C-Panel for seamless content and website management, and a Query Box for users to submit inquiries or feedback efficiently. These tools ensure smooth operations, user engagement, and streamlined functionality ',
    link: 'https://iragufoundation.org/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Tailwid CSS', 'MySql']
  },
  {
    image: 'assets/bg-img/genez.png',
    title: 'Gene Z Learnings Website Development',
    description: 'GeneZ  instigating initiative by our industrial experts makes up to empower professionals in the field of life science through exhaustive online education. Gene Z structures the theoretical student into an empowered professional: "Theoretical student gyrated into empowered professional."',
    link: '#',
    technologies: ['Angular', 'HTML','CSS', 'Tailwind CSS']
  },
  {
    image: 'assets/bg-img/e2o.jpg',
    title: 'E2o Technologies Website Development',
    description: 'E2o Technology is a dynamic startup specializing in custom web development. We craft scalable, modern solutions that empower startups and businesses to grow and succeed.',
    link: '#',
    technologies: ['HTML', 'CSS', 'Javascript','Bootstrap']
  },
  {
    image: 'assets/bg-img/kavi.png',
    title: 'Kavi Travels Management Software',
    description: 'Maduraikavitravels.com is a dynamic website I developed for a travel agency based in Madurai. It includes features like an admin panel for managing content, interactive contact forms for inquiries, and API integration for bookings and real-time updates. The site is designed for smooth navigation, efficient service access, and enhanced user engagement.',
    link: '#',
    technologies: ['HTML', 'CSS','Angular', '.Net Web Core API', 'Typescript','Bootstrap']
  },
   {
    image: 'assets/skills-img/subbulogowhite.png',
    title: 'My Portfolio Static Website',
    description: 'I am Subburam K, a creative web developer focused on building dynamic and user-friendly websites.My portfolio highlights clean design, smooth user experience, and responsive layouts.Each project reflects my passion for delivering modern and professional web solutions.',
    link: '#',
    technologies: ['HTML', 'CSS','Angular', 'Tailwind CSS', 'Typescript','Bootstrap']
  }
];


  steps = [
    {
      title: 'Research',
      icon: 'assets/work-flow-img/research.png',
      description: 'Understand the client’s needs and market.',
    },
    {
      title: 'Planning',
      icon: 'assets/work-flow-img/planning.png',
      description: 'Create strategy and wireframes.',
    },
    {
      title: 'Design',
      icon: 'assets/work-flow-img/design.png',
      description: 'Craft beautiful and intuitive interfaces.',
    },
    {
      title: 'Development',
      icon: 'assets/work-flow-img/develop.png',
      description: 'Develop scalable and clean code.',
    },
  ];
  
 skills = [
  {
    title: 'Frontend Essentials',
    icon: 'assets/skills-img/frontend1.png', // Represents HTML, CSS, JS
    description: 'Expertise in HTML, CSS, and JavaScript to build responsive and interactive user interfaces.'
  },
  {
    title: 'Angular',
    icon: 'assets/skills-img/angular1.png',
    description: 'Building scalable, component-based web applications using Angular.'
  },
  {
    title: 'React',
    icon: 'assets/skills-img/reactive.png',
    description: 'Developing fast and modern UIs using React.js and its ecosystem.'
  },
  {
    title: 'Laravel',
    icon: 'assets/skills-img/laravel.png',
    description: 'Creating robust backend applications using the Laravel PHP framework.'
  },
  {
    title: 'Database & Backend',
    icon: 'assets/skills-img/database.png', // Represents SQL, MySQL, PHP, .NET
    description: 'Skilled in SQL, MySQL, PHP, and .NET for backend and database management.'
  },
  {
    title: 'Cloud & Design',
    icon: 'assets/skills-img/aws.png', // Represents AWS & Figma
    description: 'Deploying applications on AWS and designing user interfaces with Figma.'
  },
  {
    title: 'Version Control',
    icon: 'assets/skills-img/github.png', // Represents Git & GitHub
    description: 'Experienced in using Git and GitHub for source control and collaborative development.'
  }
];



greetingText = '';
nameText = '';

private greetingFull = 'Hello, I’m';
private nameFull = 'SUBBURAM K';

@ViewChild('scrollContainer') scrollContainer!: ElementRef;

scrollLeft() {
  this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight() {
  this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
}


  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  prevProject() {
    this.currentProjectIndex =
      (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }


triggerAnimation() {
  this.animationClass = '';
  setTimeout(() => {
    this.animationClass = 'project-transition';
  }, 10); // Small delay to re-trigger animation
}  

ngOnInit() {
  this.startTyping();
}

startTyping() {
  const totalDuration = 3000; // total typing time = 4 sec
  const totalChars = this.greetingFull.length + this.nameFull.length;
  const interval = totalDuration / totalChars; // ms per character

  let index = 0;

  const combinedText = this.greetingFull + '|' + this.nameFull;

  const typeNext = () => {
    if (index < combinedText.length) {
      const char = combinedText.charAt(index);

      if (char === '|') {
        // marker between two lines
        index++;
        setTimeout(typeNext, interval);
        return;
      }

      if (index < this.greetingFull.length) {
        this.greetingText += char;
      } else {
        this.nameText += char;
      }

      index++;
      setTimeout(typeNext, interval);
    }
  };

  typeNext();
}

 openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

}
