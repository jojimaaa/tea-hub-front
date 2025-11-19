import { useState, useCallback, useEffect } from "react";
import type { DependencyList } from "react";

export interface AsyncState<T> {
  loading: boolean;
  error?: Error;
  value?: T;
}

export interface AsyncFnState<T, P extends any[]> extends AsyncState<T> {
  execute: (...params: P) => Promise<T>;
}

/**
 * Executa uma função assíncrona (que não recebe argumentos)
 * imediatamente ao montar o componente.
 *
 * @param func A função assíncrona () => Promise<T>
 * @param dependencies Lista de dependências para recarregar o dado.
 * @returns O estado: { loading, error, value }
 */
export function useAsync<T>(
  func: () => Promise<T>,
  dependencies: DependencyList = [],
): AsyncState<T> {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
}

/**
 * Retorna uma função `execute` para disparar uma chamada assíncrona
 * manualmente. Não executa ao montar.
 *
 * @param func A função assíncrona (...params: P) => Promise<T>
 * @param dependencies Lista de dependências para o useCallback.
 * @returns O estado e a função: { loading, error, value, execute }
 */
export function useAsyncFn<T, P extends any[]>(
  func: (...params: P) => Promise<T>,
  dependencies: DependencyList = [],
): AsyncFnState<T, P> {
  return useAsyncInternal(func, dependencies, false);
}

/**
 * O hook principal que gerencia o estado da promise.
 */
function useAsyncInternal<T, P extends any[]>(
  func: (...params: P) => Promise<T>,
  dependencies: DependencyList,
  initialLoading: boolean = false,
): AsyncFnState<T, P> {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [value, setValue] = useState<T | undefined>(undefined);

  const execute = useCallback(
    (...params: P): Promise<T> => {
      setLoading(true);
      return func(...params)
        .then((data) => {
          setValue(data);
          setError(undefined);
          return data;
        })
        .catch((error: any) => {
          const err = error instanceof Error ? error : new Error(String(error));
          setError(err);
          setValue(undefined);
          return Promise.reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies,
  );

  return { loading, error, value, execute };
}