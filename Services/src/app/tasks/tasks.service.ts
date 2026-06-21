import { Injectable, signal, inject } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService)

  allTasks = this.tasks.asReadonly();

  addTask(title: string, desc: string) {
    const newTask: Task = {
      title: title,
      description: desc,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks]);
    this.loggingService.log('Added Task with Title ' + title)
  }

  updateTaskService(taskId: string, newTaskStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newTaskStatus } : task
      )
    );
  }
}
