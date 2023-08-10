export class SampleClass{
  public variable = 3;

  public doNothing ():void {}

  public overload (age: number): string;
  public overload (name: string): string;
  public overload (arg: number | string): string {
    if (typeof arg == 'string') return `Hello ${arg}`;
    return `Have a ${arg >= 16 ? 'beer' : 'drink'}`;
  }

  public concat (strings: string[]): string {
    return strings.join();
  }

  public async awaitValue (): Promise<void> {
    const getValue = () => 'a value';
    await getValue();
  }
}