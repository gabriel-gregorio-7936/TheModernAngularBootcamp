import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset at the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beach with Boats',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Boxed water at the Beach',
      url: 'https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset at the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beach with Boats',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Boxed water at the Beach',
      url: 'https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset at the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beach with Boats',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Boxed water at the Beach',
      url: 'https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset at the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beach with Boats',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Boxed water at the Beach',
      url: 'https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset at the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beach with Boats',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Boxed water at the Beach',
      url: 'https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset at the Beach',
      url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Beach with Boats',
      url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Boxed water at the Beach',
      url: 'https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    }
  ];
}
