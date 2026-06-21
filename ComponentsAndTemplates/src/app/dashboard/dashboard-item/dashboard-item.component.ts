import { Component, Input } from '@angular/core';

type ImageType = {
  src: string,
  alt: string
}

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required: true}) img!: ImageType
  @Input({required: true}) header!: string
}
