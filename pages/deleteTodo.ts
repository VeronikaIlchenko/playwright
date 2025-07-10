import { Page}  from '@playwright/test';

export class DeleteTodo {

private page: Page; 


constructor(page) {

    this.page = page;
}

async goto() {
    await this.page.goto('http://localhost:3000/');
  }

async getTodoByIndex(index: number) {
   return this.page.locator(`[data-test-id="todo-list-item${index}"]`)
}

getDeleteBtn() {
  return this.page.getByTestId('delete-button');
}

async deleteTodoByIndex(index: number) {
  await this.getTodoByIndex(index);
  await this.getDeleteBtn().click();
}

}