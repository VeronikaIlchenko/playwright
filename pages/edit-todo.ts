import {Locator, Page}  from '@playwright/test';

export class EditTodo{

private page: Page;
private editTitleField: Locator;
private editDescriptionField: Locator;
private updateBtn: Locator;


constructor(page) {

    this.page = page;
    this.editTitleField = page.getByTestId('update-title-field');
    this.editDescriptionField = page.getByTestId('update-description-field');
    this.updateBtn = page.getByTestId('update-button');

}


async goto() {
    await this.page.goto('http://localhost:3000/');
  }

async editTodo(index: number){
    return this.page.locator(`[data-test-id="todo-list-item${index}"] [data-test-id="edit-button"]`).click() 
}

async changeTitleDescription(title: string, description: string) {
  await this.editTitleField.fill(title);
  await this.editDescriptionField.fill(description);
  await this.updateBtn.click();
}


}