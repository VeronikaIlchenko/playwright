import {Locator, Page}  from '@playwright/test';

export class DeleteTodo {

private page: Page; 
private deleteBtn: Locator;

constructor(page) {

    this.page = page;
    this.deleteBtn = page.getByTestId('delete-button')

}

async goto() {
    await this.page.goto('http://localhost:3000/');
  }

async deleteTodo(index: number) {
   return this.page.locator(`[data-test-id="todo-list-item${index}"] [data-test-id="delete-button"]`).click()
}




}