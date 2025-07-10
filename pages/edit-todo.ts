import {Locator, Page}  from '@playwright/test';

export class EditTodo{

private page: Page;
private editTitleInput: Locator;
private editDescriptionInput: Locator;

constructor(page) {

    this.page = page;
    this.editTitleInput = page.getByTestId('update-title-field');
    this.editDescriptionInput = page.getByTestId('update-description-field');

}


async goto() {
    await this.page.goto('http://localhost:3000/');
  }

async getTodo(index: number){
    return this.page.locator(`[data-test-id="todo-list-item${index}"]`);
}

getEditBtn() {
  return this.page.getByTestId('edit-button');
}

async editTodoByIndex(index: number) {
   await this.getTodo(index);
   await this.getEditBtn().click();
}

async changeTitleInput(title: string) {
  await this.editTitleInput.fill(title);
  
}

async changeDescriptionInput(description: string) {
  await this.editDescriptionInput.fill(description);
}

getUpdateBtn() {
  return this.page.getByTestId('update-button');
}

async changeToDoTitleDescription(title: string, description: string){
  await this.changeTitleInput(title);
  await this.changeDescriptionInput(description);
  await this.getUpdateBtn().click()
}

}