import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.scss']
})
export class MissingComponent implements OnInit {
  constructor(private route:Router) {}
  
  ngOnInit(): void {
    setInterval(() => {
      this.route.navigateByUrl("/home");
    },3000);
  }
}
