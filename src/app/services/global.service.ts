import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  public readonly searchTrigger: ChromiumGlobalBoolean = new ChromiumGlobalBoolean(
    false
  );
}

export class ChromiumGlobalString {
  private _value: string;
  private _dataChanged: Subject<string> = new Subject();

  public constructor(defaultValue: string) {
    this._value = defaultValue;
  }

  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
    this._dataChanged.next(value);
  }
  public onChanged(): Observable<string> {
    return this._dataChanged.asObservable();
  }
}

export class ChromiumGlobalBoolean {
  private _value: boolean;
  private _dataChanged: Subject<boolean> = new Subject();

  public constructor(defaultValue: boolean) {
    this._value = defaultValue;
  }

  public get value(): boolean {
    return this._value;
  }
  public set value(value: boolean) {
    this._value = value;
    this._dataChanged.next(value);
  }
  public onChanged(): Observable<boolean> {
    return this._dataChanged.asObservable();
  }
}

export class ChromiumGlobalGeneric<T> {
  private _value: T;
  private _dataChanged: Subject<T> = new Subject();

  public constructor(defaultValue: T) {
    this._value = defaultValue;
  }

  public get value(): T {
    return this._value;
  }
  public set value(value: T) {
    this._value = value;
    this._dataChanged.next(value);
  }
  public onChanged(): Observable<T> {
    return this._dataChanged.asObservable();
  }
}
