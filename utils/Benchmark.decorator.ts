export function Benchmark(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const label = `Benchmark for ${propertyKey}`;
    console.time(label);

    try {
      const result = originalMethod.apply(this, args);
      console.log(`Result:`, result);
      return result;
    } catch (error) {
      console.error(`Error in ${propertyKey}:`, error);
      throw error;
    } finally {
      console.timeEnd(label);
    }
  };

  return descriptor;
}
