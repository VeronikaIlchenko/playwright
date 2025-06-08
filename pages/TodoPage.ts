import {Locator, Page}  from '@playwright/test';

export class TodoPage {
    
    private page: Page; 
    private mainTitle : Locator;
    private taskTitle : Locator;
    private taskDescription : Locator;
    private addButton : Locator;


    constructor(page) {
        
        this.page = page;
        this.mainTitle = page.getByTestId('general-title')
        this.taskTitle = page.getByTestId('title-field')
        this.taskDescription = page.getByTestId('task-description')
        this.addButton = page.getByTestId('add-button')
    }


async goto() {
    await this.page.goto('http://localhost:3000/');
  }

async addToDoItem (title: string, description: string) {
    await this.taskTitle.fill(title);
    await this.taskDescription.fill(description);
    await this.addButton.click();
}

async takeToDoListFromLocalStore(page: Page) {
  return await page.evaluate(() => {
    return JSON.parse(localStorage.getItem('todolist')!);
  });
}
};