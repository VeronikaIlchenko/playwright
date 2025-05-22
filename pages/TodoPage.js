export class TodoPage {
    
    constructor(page) {
        this.page = page;
        this.mainTitle = page.locator('[data-test-id="general-title"]')
        this.taskTitle = page.locator('[data-test-id="title-field"]')
        this.taskDescription = page.locator('[data-test-id="task-description"]')
        this.addButton = page.locator('[data-test-id="add-button"]')
    }


async goto() {
    await this.page.goto('http://localhost:3000/');
  }

async addToDoItem (title, description) {
    await this.taskTitle.fill(title);
    await this.taskDescription.fill(description);
    await this.addButton.click();
}
};