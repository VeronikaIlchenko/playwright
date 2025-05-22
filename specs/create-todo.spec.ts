import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Add To Do', async({page})=>{
    const todoPage = new TodoPage(page);

    await todoPage.goto();

    await todoPage.addToDoItem('title 1', 'description 1');

    const ToDoItemList = await page.evaluate(()=> {
        return JSON.parse(localStorage.getItem('todolist') || '[]')
    }) 

    expect(ToDoItemList[0].title).toBe('title 1')
}) 