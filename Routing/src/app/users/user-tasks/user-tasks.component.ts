import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  RouterOutlet,
  RouterLink,
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  userId = input.required<string>();
  message = input<string>();
  userName2 = input<string>()
  private usersService = inject(UsersService);

  // private activatedRoute = inject(ActivatedRoute); //rsx option
  // private destroyRef = inject(DestroyRef)
  // userName2 = '';

  userName = computed(
    () => this.usersService.users.find((u) => u.id === this.userId())?.name,
  );

  ngOnInit(): void {
    console.log(this.message);
    // this.activatedRoute.paramMap.subscribe({
    //   next: (paramMap) => {
    //     this.userName2 =
    //       this.usersService.users.find((u) => u.id === paramMap.get('userId'))
    //         ?.name || '';
    //   },
    // });

    //add destroy logic
  }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot,
) => {
  const usersService = inject(UsersService)
  return usersService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))?.name || ''
};

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot) => {
    return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
  }
