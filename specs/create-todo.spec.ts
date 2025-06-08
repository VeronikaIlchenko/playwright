import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { todoTestData }  from '../pages/testData'

test('@positive Add To Do', async({page})=>{
    const todoPage = new TodoPage(page);

    await todoPage.goto();

    await todoPage.addToDoItem(todoTestData.title, todoTestData.description);

    const toDoItemList = await todoPage.takeToDoListFromLocalStore(page);

    expect(toDoItemList[0].title).toBe(todoTestData.title);
}) 