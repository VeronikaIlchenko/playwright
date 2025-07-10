import {Locator, Page}  from '@playwright/test';

export class CompletedPage {
    
    private page: Page; 
    private completeBtn : Locator;
    private completedTab : Locator;
    private completedTime : Locator;
    private completedItems : Locator;
    private toDoTab : Locator ;



    constructor(page) {
        
        this.page = page;
        this.completeBtn = page.getByTestId('complete-button')
        this.completedTab = page.getByTestId('completed-tab')
        this.toDoTab = page. getByTestId('todo-tab')
        this.completedTime = page.getByTestId('task-completed-time')
        
    }


async goto() {
    await this.page.goto('http://localhost:3000/');
  }

async completeTodo (index: number) {
    await this.toDoTab.click();
    await this.completeTaskFromToDo(index).click();
}  

async goToCompleteTodo () {
    await this.completedTab.click();
}

  async getCompletedItem(index: number) {
    return this.page.getByTestId(`completed-todo-list-item${index}`);
  }

completeTaskFromToDo(index: number) {
    return this.page.locator(`[data-test-id="todo-list-item${index}"] [data-test-id="complete-button"]`)
  }
  
}