export class LocalStorageMock {
  ls: any = {};
  setItem(name: string, value: string) {
    this.ls[name] = value;
  }

  getItem(name) {
    return this.ls[name];
  }

  removeItem(name) {
    delete this.ls[name];
  }

}
