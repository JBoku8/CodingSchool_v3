import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage = localStorage;
  constructor() {}

  set(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any | undefined {
    const data = this.storage.getItem(key) || undefined;
    return data ? JSON.parse(data) : data;
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  exists(key: string): boolean {
    return !!this.storage.getItem(key);
  }
}
