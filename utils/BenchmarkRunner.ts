import { Benchmark } from "./Benchmark.decorator";

export class BenchmarkRunner {
  constructor(private solution: (...args: any[]) => any) {}

  @Benchmark
  execute(...args: any[]) {
    return this.solution(...args);
  }

  run(cases: any[][]): void {
    cases.forEach((args, index) => {
      console.log(`\nRunning Use Case ${index + 1}`);
      this.execute(...args);
    });
  }
}
