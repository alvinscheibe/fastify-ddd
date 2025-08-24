interface DIContainer {
  bind<T>(symbol: symbol): BindingBuilder<T>;
  get<T>(symbol: symbol): T;
}

interface BindingBuilder<T> {
  to(implementation: new (...args: any[]) => T): void;
  toValue(value: T): void;
  toFactory(factory: () => T): void;
  toAsyncFactory(factory: () => Promise<T>): void;
  asSingleton(): BindingBuilder<T>;
}

type LifecycleType = 'transient' | 'singleton';

interface Binding<T> {
  implementation?: new (...args: any[]) => T;
  value?: T;
  factory?: () => T;
  asyncFactory?: () => Promise<T>;
  lifecycle: LifecycleType;
  instance?: T;
}

class Container implements DIContainer {
  private bindings = new Map<symbol, Binding<any>>();
  private singletonInstances = new Map<symbol, any>();

  bind<T>(symbol: symbol): BindingBuilder<T> {
    const binding: Binding<T> = {
      lifecycle: 'transient',
    };

    this.bindings.set(symbol, binding);

    const builder: BindingBuilder<T> = {
      to: (implementation: new (...args: any[]) => T) => {
        binding.implementation = implementation;
      },
      toValue: (value: T) => {
        binding.value = value;
      },
      toFactory: (factory: () => T) => {
        binding.factory = factory;
      },
      toAsyncFactory: (factory: () => Promise<T>) => {
        binding.asyncFactory = factory;
      },
      asSingleton: () => {
        binding.lifecycle = 'singleton';
        return builder;
      },
    };

    return builder;
  }

  get<T>(symbol: symbol): T {
    const binding = this.bindings.get(symbol);
    if (!binding) {
      throw new Error(`No binding found for symbol: ${symbol.toString()}`);
    }

    // If it's a singleton and already instantiated, return the instance
    if (binding.lifecycle === 'singleton' && this.singletonInstances.has(symbol)) {
      return this.singletonInstances.get(symbol);
    }

    let instance: T;

    if (binding.value !== undefined) {
      instance = binding.value;
    } else if (binding.factory) {
      instance = binding.factory();
    } else if (binding.implementation) {
      const dependencies = this.resolveDependencies(binding.implementation);
      instance = new binding.implementation(...dependencies);
    } else {
      throw new Error(`Invalid binding configuration for symbol: ${symbol.toString()}`);
    }

    // If it's a singleton, store the instance
    if (binding.lifecycle === 'singleton') {
      this.singletonInstances.set(symbol, instance);
    }

    return instance;
  }

  private resolveDependencies(constructor: new (...args: any[]) => any): any[] {
    return [];
  }

  clear(): void {
    this.bindings.clear();
    this.singletonInstances.clear();
  }
}

// Global container instance
export const container = new Container();
export { Container, DIContainer };
