import {describe, expect, it } from '@jest/globals';
import Task from './Task';

describe('Task', () => {
  it('should create a task', () => {
    const data = {id: 'id', description: 'description', done: false };
    const task = new Task(data);
    expect(task.id).toBe('id');
    expect(task.description).toBe('description');
    expect(task.done).toBe(false);
  });
});