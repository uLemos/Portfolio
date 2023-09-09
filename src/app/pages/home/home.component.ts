import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
      
    let timeLine = gsap.timeline({defaults: {duration: 3}});
    
    timeLine.to('.perfil', { borderBottomColor: '#77ffc0', delay: 0.3  }, '-=0.2')
      .to('.perfil', { borderLeftColor: '#77ffc0'}, '-=0.2');
      

      gsap.fromTo('.img-wrapper', {height: 0, backgroundColor: 'transparent'}, { delay: 1, duration: 1, height: '500px', backgroundColor: 'transparent' });

      setTimeout(() => {
        document.querySelector('.img-wrapper')?.classList.add('animate');
      });

      gsap.to('.img', {delay: 2, duration:1, opacity: 1});
    }
}
