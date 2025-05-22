
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * Definicion de tablas mediante JS
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cuota
 * 
 */
export type Cuota = $Result.DefaultSelection<Prisma.$CuotaPayload>
/**
 * Model LineaDeCuota
 * 
 */
export type LineaDeCuota = $Result.DefaultSelection<Prisma.$LineaDeCuotaPayload>
/**
 * Model ValorCuota
 * 
 */
export type ValorCuota = $Result.DefaultSelection<Prisma.$ValorCuotaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuota`: Exposes CRUD operations for the **Cuota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuotas
    * const cuotas = await prisma.cuota.findMany()
    * ```
    */
  get cuota(): Prisma.CuotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lineaDeCuota`: Exposes CRUD operations for the **LineaDeCuota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineaDeCuotas
    * const lineaDeCuotas = await prisma.lineaDeCuota.findMany()
    * ```
    */
  get lineaDeCuota(): Prisma.LineaDeCuotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.valorCuota`: Exposes CRUD operations for the **ValorCuota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ValorCuotas
    * const valorCuotas = await prisma.valorCuota.findMany()
    * ```
    */
  get valorCuota(): Prisma.ValorCuotaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Cuota: 'Cuota',
    LineaDeCuota: 'LineaDeCuota',
    ValorCuota: 'ValorCuota'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "cuota" | "lineaDeCuota" | "valorCuota"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cuota: {
        payload: Prisma.$CuotaPayload<ExtArgs>
        fields: Prisma.CuotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          findFirst: {
            args: Prisma.CuotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          findMany: {
            args: Prisma.CuotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>[]
          }
          create: {
            args: Prisma.CuotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          createMany: {
            args: Prisma.CuotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CuotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          update: {
            args: Prisma.CuotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          deleteMany: {
            args: Prisma.CuotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuotaPayload>
          }
          aggregate: {
            args: Prisma.CuotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuota>
          }
          groupBy: {
            args: Prisma.CuotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuotaCountArgs<ExtArgs>
            result: $Utils.Optional<CuotaCountAggregateOutputType> | number
          }
        }
      }
      LineaDeCuota: {
        payload: Prisma.$LineaDeCuotaPayload<ExtArgs>
        fields: Prisma.LineaDeCuotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineaDeCuotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineaDeCuotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload>
          }
          findFirst: {
            args: Prisma.LineaDeCuotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineaDeCuotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload>
          }
          findMany: {
            args: Prisma.LineaDeCuotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload>[]
          }
          create: {
            args: Prisma.LineaDeCuotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload>
          }
          createMany: {
            args: Prisma.LineaDeCuotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LineaDeCuotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload>
          }
          update: {
            args: Prisma.LineaDeCuotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload>
          }
          deleteMany: {
            args: Prisma.LineaDeCuotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineaDeCuotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LineaDeCuotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaDeCuotaPayload>
          }
          aggregate: {
            args: Prisma.LineaDeCuotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLineaDeCuota>
          }
          groupBy: {
            args: Prisma.LineaDeCuotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineaDeCuotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineaDeCuotaCountArgs<ExtArgs>
            result: $Utils.Optional<LineaDeCuotaCountAggregateOutputType> | number
          }
        }
      }
      ValorCuota: {
        payload: Prisma.$ValorCuotaPayload<ExtArgs>
        fields: Prisma.ValorCuotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValorCuotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValorCuotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload>
          }
          findFirst: {
            args: Prisma.ValorCuotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValorCuotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload>
          }
          findMany: {
            args: Prisma.ValorCuotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload>[]
          }
          create: {
            args: Prisma.ValorCuotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload>
          }
          createMany: {
            args: Prisma.ValorCuotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ValorCuotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload>
          }
          update: {
            args: Prisma.ValorCuotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload>
          }
          deleteMany: {
            args: Prisma.ValorCuotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValorCuotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ValorCuotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValorCuotaPayload>
          }
          aggregate: {
            args: Prisma.ValorCuotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValorCuota>
          }
          groupBy: {
            args: Prisma.ValorCuotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValorCuotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValorCuotaCountArgs<ExtArgs>
            result: $Utils.Optional<ValorCuotaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    cuota?: CuotaOmit
    lineaDeCuota?: LineaDeCuotaOmit
    valorCuota?: ValorCuotaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    cuota: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuota?: boolean | UsuarioCountOutputTypeCountCuotaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuotaWhereInput
  }


  /**
   * Count Type CuotaCountOutputType
   */

  export type CuotaCountOutputType = {
    lineaDeCuota: number
    valorCuota: number
  }

  export type CuotaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineaDeCuota?: boolean | CuotaCountOutputTypeCountLineaDeCuotaArgs
    valorCuota?: boolean | CuotaCountOutputTypeCountValorCuotaArgs
  }

  // Custom InputTypes
  /**
   * CuotaCountOutputType without action
   */
  export type CuotaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuotaCountOutputType
     */
    select?: CuotaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuotaCountOutputType without action
   */
  export type CuotaCountOutputTypeCountLineaDeCuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaDeCuotaWhereInput
  }

  /**
   * CuotaCountOutputType without action
   */
  export type CuotaCountOutputTypeCountValorCuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValorCuotaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombreUsuario: string | null
    password: string | null
    email: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombreUsuario: string | null
    password: string | null
    email: string | null
    nombre: string | null
    apellido: string | null
    telefono: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombreUsuario: number
    password: number
    email: number
    nombre: number
    apellido: number
    telefono: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombreUsuario?: true
    password?: true
    email?: true
    nombre?: true
    apellido?: true
    telefono?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombreUsuario?: true
    password?: true
    email?: true
    nombre?: true
    apellido?: true
    telefono?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombreUsuario?: true
    password?: true
    email?: true
    nombre?: true
    apellido?: true
    telefono?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombreUsuario: string
    password: string
    email: string
    nombre: string
    apellido: string
    telefono: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreUsuario?: boolean
    password?: boolean
    email?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
    cuota?: boolean | Usuario$cuotaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    nombreUsuario?: boolean
    password?: boolean
    email?: boolean
    nombre?: boolean
    apellido?: boolean
    telefono?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombreUsuario" | "password" | "email" | "nombre" | "apellido" | "telefono", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuota?: boolean | Usuario$cuotaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      cuota: Prisma.$CuotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombreUsuario: string
      password: string
      email: string
      nombre: string
      apellido: string
      telefono: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuota<T extends Usuario$cuotaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$cuotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombreUsuario: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.cuota
   */
  export type Usuario$cuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    where?: CuotaWhereInput
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    cursor?: CuotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cuota
   */

  export type AggregateCuota = {
    _count: CuotaCountAggregateOutputType | null
    _avg: CuotaAvgAggregateOutputType | null
    _sum: CuotaSumAggregateOutputType | null
    _min: CuotaMinAggregateOutputType | null
    _max: CuotaMaxAggregateOutputType | null
  }

  export type CuotaAvgAggregateOutputType = {
    id: number | null
    montoTotal: Decimal | null
    idUsuario: number | null
  }

  export type CuotaSumAggregateOutputType = {
    id: number | null
    montoTotal: Decimal | null
    idUsuario: number | null
  }

  export type CuotaMinAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaVencimiento: Date | null
    montoTotal: Decimal | null
    idUsuario: number | null
  }

  export type CuotaMaxAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaVencimiento: Date | null
    montoTotal: Decimal | null
    idUsuario: number | null
  }

  export type CuotaCountAggregateOutputType = {
    id: number
    fechaInicio: number
    fechaVencimiento: number
    montoTotal: number
    idUsuario: number
    _all: number
  }


  export type CuotaAvgAggregateInputType = {
    id?: true
    montoTotal?: true
    idUsuario?: true
  }

  export type CuotaSumAggregateInputType = {
    id?: true
    montoTotal?: true
    idUsuario?: true
  }

  export type CuotaMinAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaVencimiento?: true
    montoTotal?: true
    idUsuario?: true
  }

  export type CuotaMaxAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaVencimiento?: true
    montoTotal?: true
    idUsuario?: true
  }

  export type CuotaCountAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaVencimiento?: true
    montoTotal?: true
    idUsuario?: true
    _all?: true
  }

  export type CuotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuota to aggregate.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cuotas
    **/
    _count?: true | CuotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuotaMaxAggregateInputType
  }

  export type GetCuotaAggregateType<T extends CuotaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuota[P]>
      : GetScalarType<T[P], AggregateCuota[P]>
  }




  export type CuotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuotaWhereInput
    orderBy?: CuotaOrderByWithAggregationInput | CuotaOrderByWithAggregationInput[]
    by: CuotaScalarFieldEnum[] | CuotaScalarFieldEnum
    having?: CuotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuotaCountAggregateInputType | true
    _avg?: CuotaAvgAggregateInputType
    _sum?: CuotaSumAggregateInputType
    _min?: CuotaMinAggregateInputType
    _max?: CuotaMaxAggregateInputType
  }

  export type CuotaGroupByOutputType = {
    id: number
    fechaInicio: Date
    fechaVencimiento: Date
    montoTotal: Decimal
    idUsuario: number
    _count: CuotaCountAggregateOutputType | null
    _avg: CuotaAvgAggregateOutputType | null
    _sum: CuotaSumAggregateOutputType | null
    _min: CuotaMinAggregateOutputType | null
    _max: CuotaMaxAggregateOutputType | null
  }

  type GetCuotaGroupByPayload<T extends CuotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuotaGroupByOutputType[P]>
            : GetScalarType<T[P], CuotaGroupByOutputType[P]>
        }
      >
    >


  export type CuotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    montoTotal?: boolean
    idUsuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    lineaDeCuota?: boolean | Cuota$lineaDeCuotaArgs<ExtArgs>
    valorCuota?: boolean | Cuota$valorCuotaArgs<ExtArgs>
    _count?: boolean | CuotaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuota"]>



  export type CuotaSelectScalar = {
    id?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    montoTotal?: boolean
    idUsuario?: boolean
  }

  export type CuotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaInicio" | "fechaVencimiento" | "montoTotal" | "idUsuario", ExtArgs["result"]["cuota"]>
  export type CuotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    lineaDeCuota?: boolean | Cuota$lineaDeCuotaArgs<ExtArgs>
    valorCuota?: boolean | Cuota$valorCuotaArgs<ExtArgs>
    _count?: boolean | CuotaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CuotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cuota"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      lineaDeCuota: Prisma.$LineaDeCuotaPayload<ExtArgs>[]
      valorCuota: Prisma.$ValorCuotaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaInicio: Date
      fechaVencimiento: Date
      montoTotal: Prisma.Decimal
      idUsuario: number
    }, ExtArgs["result"]["cuota"]>
    composites: {}
  }

  type CuotaGetPayload<S extends boolean | null | undefined | CuotaDefaultArgs> = $Result.GetResult<Prisma.$CuotaPayload, S>

  type CuotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuotaCountAggregateInputType | true
    }

  export interface CuotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cuota'], meta: { name: 'Cuota' } }
    /**
     * Find zero or one Cuota that matches the filter.
     * @param {CuotaFindUniqueArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuotaFindUniqueArgs>(args: SelectSubset<T, CuotaFindUniqueArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CuotaFindUniqueOrThrowArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuotaFindUniqueOrThrowArgs>(args: SelectSubset<T, CuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaFindFirstArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuotaFindFirstArgs>(args?: SelectSubset<T, CuotaFindFirstArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaFindFirstOrThrowArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuotaFindFirstOrThrowArgs>(args?: SelectSubset<T, CuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuotas
     * const cuotas = await prisma.cuota.findMany()
     * 
     * // Get first 10 Cuotas
     * const cuotas = await prisma.cuota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuotaWithIdOnly = await prisma.cuota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CuotaFindManyArgs>(args?: SelectSubset<T, CuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuota.
     * @param {CuotaCreateArgs} args - Arguments to create a Cuota.
     * @example
     * // Create one Cuota
     * const Cuota = await prisma.cuota.create({
     *   data: {
     *     // ... data to create a Cuota
     *   }
     * })
     * 
     */
    create<T extends CuotaCreateArgs>(args: SelectSubset<T, CuotaCreateArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuotas.
     * @param {CuotaCreateManyArgs} args - Arguments to create many Cuotas.
     * @example
     * // Create many Cuotas
     * const cuota = await prisma.cuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuotaCreateManyArgs>(args?: SelectSubset<T, CuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cuota.
     * @param {CuotaDeleteArgs} args - Arguments to delete one Cuota.
     * @example
     * // Delete one Cuota
     * const Cuota = await prisma.cuota.delete({
     *   where: {
     *     // ... filter to delete one Cuota
     *   }
     * })
     * 
     */
    delete<T extends CuotaDeleteArgs>(args: SelectSubset<T, CuotaDeleteArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuota.
     * @param {CuotaUpdateArgs} args - Arguments to update one Cuota.
     * @example
     * // Update one Cuota
     * const cuota = await prisma.cuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuotaUpdateArgs>(args: SelectSubset<T, CuotaUpdateArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuotas.
     * @param {CuotaDeleteManyArgs} args - Arguments to filter Cuotas to delete.
     * @example
     * // Delete a few Cuotas
     * const { count } = await prisma.cuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuotaDeleteManyArgs>(args?: SelectSubset<T, CuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuotas
     * const cuota = await prisma.cuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuotaUpdateManyArgs>(args: SelectSubset<T, CuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuota.
     * @param {CuotaUpsertArgs} args - Arguments to update or create a Cuota.
     * @example
     * // Update or create a Cuota
     * const cuota = await prisma.cuota.upsert({
     *   create: {
     *     // ... data to create a Cuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuota we want to update
     *   }
     * })
     */
    upsert<T extends CuotaUpsertArgs>(args: SelectSubset<T, CuotaUpsertArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaCountArgs} args - Arguments to filter Cuotas to count.
     * @example
     * // Count the number of Cuotas
     * const count = await prisma.cuota.count({
     *   where: {
     *     // ... the filter for the Cuotas we want to count
     *   }
     * })
    **/
    count<T extends CuotaCountArgs>(
      args?: Subset<T, CuotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuotaAggregateArgs>(args: Subset<T, CuotaAggregateArgs>): Prisma.PrismaPromise<GetCuotaAggregateType<T>>

    /**
     * Group by Cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CuotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuotaGroupByArgs['orderBy'] }
        : { orderBy?: CuotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cuota model
   */
  readonly fields: CuotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cuota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lineaDeCuota<T extends Cuota$lineaDeCuotaArgs<ExtArgs> = {}>(args?: Subset<T, Cuota$lineaDeCuotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    valorCuota<T extends Cuota$valorCuotaArgs<ExtArgs> = {}>(args?: Subset<T, Cuota$valorCuotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cuota model
   */
  interface CuotaFieldRefs {
    readonly id: FieldRef<"Cuota", 'Int'>
    readonly fechaInicio: FieldRef<"Cuota", 'DateTime'>
    readonly fechaVencimiento: FieldRef<"Cuota", 'DateTime'>
    readonly montoTotal: FieldRef<"Cuota", 'Decimal'>
    readonly idUsuario: FieldRef<"Cuota", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cuota findUnique
   */
  export type CuotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota findUniqueOrThrow
   */
  export type CuotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota findFirst
   */
  export type CuotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuotas.
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuotas.
     */
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Cuota findFirstOrThrow
   */
  export type CuotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuota to fetch.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cuotas.
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cuotas.
     */
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Cuota findMany
   */
  export type CuotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter, which Cuotas to fetch.
     */
    where?: CuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cuotas to fetch.
     */
    orderBy?: CuotaOrderByWithRelationInput | CuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cuotas.
     */
    cursor?: CuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cuotas.
     */
    skip?: number
    distinct?: CuotaScalarFieldEnum | CuotaScalarFieldEnum[]
  }

  /**
   * Cuota create
   */
  export type CuotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cuota.
     */
    data: XOR<CuotaCreateInput, CuotaUncheckedCreateInput>
  }

  /**
   * Cuota createMany
   */
  export type CuotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cuotas.
     */
    data: CuotaCreateManyInput | CuotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cuota update
   */
  export type CuotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cuota.
     */
    data: XOR<CuotaUpdateInput, CuotaUncheckedUpdateInput>
    /**
     * Choose, which Cuota to update.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota updateMany
   */
  export type CuotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cuotas.
     */
    data: XOR<CuotaUpdateManyMutationInput, CuotaUncheckedUpdateManyInput>
    /**
     * Filter which Cuotas to update
     */
    where?: CuotaWhereInput
    /**
     * Limit how many Cuotas to update.
     */
    limit?: number
  }

  /**
   * Cuota upsert
   */
  export type CuotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cuota to update in case it exists.
     */
    where: CuotaWhereUniqueInput
    /**
     * In case the Cuota found by the `where` argument doesn't exist, create a new Cuota with this data.
     */
    create: XOR<CuotaCreateInput, CuotaUncheckedCreateInput>
    /**
     * In case the Cuota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuotaUpdateInput, CuotaUncheckedUpdateInput>
  }

  /**
   * Cuota delete
   */
  export type CuotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
    /**
     * Filter which Cuota to delete.
     */
    where: CuotaWhereUniqueInput
  }

  /**
   * Cuota deleteMany
   */
  export type CuotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cuotas to delete
     */
    where?: CuotaWhereInput
    /**
     * Limit how many Cuotas to delete.
     */
    limit?: number
  }

  /**
   * Cuota.lineaDeCuota
   */
  export type Cuota$lineaDeCuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    where?: LineaDeCuotaWhereInput
    orderBy?: LineaDeCuotaOrderByWithRelationInput | LineaDeCuotaOrderByWithRelationInput[]
    cursor?: LineaDeCuotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaDeCuotaScalarFieldEnum | LineaDeCuotaScalarFieldEnum[]
  }

  /**
   * Cuota.valorCuota
   */
  export type Cuota$valorCuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    where?: ValorCuotaWhereInput
    orderBy?: ValorCuotaOrderByWithRelationInput | ValorCuotaOrderByWithRelationInput[]
    cursor?: ValorCuotaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValorCuotaScalarFieldEnum | ValorCuotaScalarFieldEnum[]
  }

  /**
   * Cuota without action
   */
  export type CuotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cuota
     */
    select?: CuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cuota
     */
    omit?: CuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuotaInclude<ExtArgs> | null
  }


  /**
   * Model LineaDeCuota
   */

  export type AggregateLineaDeCuota = {
    _count: LineaDeCuotaCountAggregateOutputType | null
    _avg: LineaDeCuotaAvgAggregateOutputType | null
    _sum: LineaDeCuotaSumAggregateOutputType | null
    _min: LineaDeCuotaMinAggregateOutputType | null
    _max: LineaDeCuotaMaxAggregateOutputType | null
  }

  export type LineaDeCuotaAvgAggregateOutputType = {
    id: number | null
    idCuota: number | null
    monto: Decimal | null
  }

  export type LineaDeCuotaSumAggregateOutputType = {
    id: number | null
    idCuota: number | null
    monto: Decimal | null
  }

  export type LineaDeCuotaMinAggregateOutputType = {
    id: number | null
    idCuota: number | null
    fechaPago: Date | null
    monto: Decimal | null
  }

  export type LineaDeCuotaMaxAggregateOutputType = {
    id: number | null
    idCuota: number | null
    fechaPago: Date | null
    monto: Decimal | null
  }

  export type LineaDeCuotaCountAggregateOutputType = {
    id: number
    idCuota: number
    fechaPago: number
    monto: number
    _all: number
  }


  export type LineaDeCuotaAvgAggregateInputType = {
    id?: true
    idCuota?: true
    monto?: true
  }

  export type LineaDeCuotaSumAggregateInputType = {
    id?: true
    idCuota?: true
    monto?: true
  }

  export type LineaDeCuotaMinAggregateInputType = {
    id?: true
    idCuota?: true
    fechaPago?: true
    monto?: true
  }

  export type LineaDeCuotaMaxAggregateInputType = {
    id?: true
    idCuota?: true
    fechaPago?: true
    monto?: true
  }

  export type LineaDeCuotaCountAggregateInputType = {
    id?: true
    idCuota?: true
    fechaPago?: true
    monto?: true
    _all?: true
  }

  export type LineaDeCuotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaDeCuota to aggregate.
     */
    where?: LineaDeCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDeCuotas to fetch.
     */
    orderBy?: LineaDeCuotaOrderByWithRelationInput | LineaDeCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineaDeCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDeCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDeCuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineaDeCuotas
    **/
    _count?: true | LineaDeCuotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineaDeCuotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineaDeCuotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineaDeCuotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineaDeCuotaMaxAggregateInputType
  }

  export type GetLineaDeCuotaAggregateType<T extends LineaDeCuotaAggregateArgs> = {
        [P in keyof T & keyof AggregateLineaDeCuota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineaDeCuota[P]>
      : GetScalarType<T[P], AggregateLineaDeCuota[P]>
  }




  export type LineaDeCuotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaDeCuotaWhereInput
    orderBy?: LineaDeCuotaOrderByWithAggregationInput | LineaDeCuotaOrderByWithAggregationInput[]
    by: LineaDeCuotaScalarFieldEnum[] | LineaDeCuotaScalarFieldEnum
    having?: LineaDeCuotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineaDeCuotaCountAggregateInputType | true
    _avg?: LineaDeCuotaAvgAggregateInputType
    _sum?: LineaDeCuotaSumAggregateInputType
    _min?: LineaDeCuotaMinAggregateInputType
    _max?: LineaDeCuotaMaxAggregateInputType
  }

  export type LineaDeCuotaGroupByOutputType = {
    id: number
    idCuota: number
    fechaPago: Date
    monto: Decimal
    _count: LineaDeCuotaCountAggregateOutputType | null
    _avg: LineaDeCuotaAvgAggregateOutputType | null
    _sum: LineaDeCuotaSumAggregateOutputType | null
    _min: LineaDeCuotaMinAggregateOutputType | null
    _max: LineaDeCuotaMaxAggregateOutputType | null
  }

  type GetLineaDeCuotaGroupByPayload<T extends LineaDeCuotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineaDeCuotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineaDeCuotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineaDeCuotaGroupByOutputType[P]>
            : GetScalarType<T[P], LineaDeCuotaGroupByOutputType[P]>
        }
      >
    >


  export type LineaDeCuotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCuota?: boolean
    fechaPago?: boolean
    monto?: boolean
    cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineaDeCuota"]>



  export type LineaDeCuotaSelectScalar = {
    id?: boolean
    idCuota?: boolean
    fechaPago?: boolean
    monto?: boolean
  }

  export type LineaDeCuotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCuota" | "fechaPago" | "monto", ExtArgs["result"]["lineaDeCuota"]>
  export type LineaDeCuotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }

  export type $LineaDeCuotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineaDeCuota"
    objects: {
      cuota: Prisma.$CuotaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCuota: number
      fechaPago: Date
      monto: Prisma.Decimal
    }, ExtArgs["result"]["lineaDeCuota"]>
    composites: {}
  }

  type LineaDeCuotaGetPayload<S extends boolean | null | undefined | LineaDeCuotaDefaultArgs> = $Result.GetResult<Prisma.$LineaDeCuotaPayload, S>

  type LineaDeCuotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineaDeCuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineaDeCuotaCountAggregateInputType | true
    }

  export interface LineaDeCuotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineaDeCuota'], meta: { name: 'LineaDeCuota' } }
    /**
     * Find zero or one LineaDeCuota that matches the filter.
     * @param {LineaDeCuotaFindUniqueArgs} args - Arguments to find a LineaDeCuota
     * @example
     * // Get one LineaDeCuota
     * const lineaDeCuota = await prisma.lineaDeCuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineaDeCuotaFindUniqueArgs>(args: SelectSubset<T, LineaDeCuotaFindUniqueArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LineaDeCuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineaDeCuotaFindUniqueOrThrowArgs} args - Arguments to find a LineaDeCuota
     * @example
     * // Get one LineaDeCuota
     * const lineaDeCuota = await prisma.lineaDeCuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineaDeCuotaFindUniqueOrThrowArgs>(args: SelectSubset<T, LineaDeCuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaDeCuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDeCuotaFindFirstArgs} args - Arguments to find a LineaDeCuota
     * @example
     * // Get one LineaDeCuota
     * const lineaDeCuota = await prisma.lineaDeCuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineaDeCuotaFindFirstArgs>(args?: SelectSubset<T, LineaDeCuotaFindFirstArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaDeCuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDeCuotaFindFirstOrThrowArgs} args - Arguments to find a LineaDeCuota
     * @example
     * // Get one LineaDeCuota
     * const lineaDeCuota = await prisma.lineaDeCuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineaDeCuotaFindFirstOrThrowArgs>(args?: SelectSubset<T, LineaDeCuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LineaDeCuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDeCuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineaDeCuotas
     * const lineaDeCuotas = await prisma.lineaDeCuota.findMany()
     * 
     * // Get first 10 LineaDeCuotas
     * const lineaDeCuotas = await prisma.lineaDeCuota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineaDeCuotaWithIdOnly = await prisma.lineaDeCuota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineaDeCuotaFindManyArgs>(args?: SelectSubset<T, LineaDeCuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LineaDeCuota.
     * @param {LineaDeCuotaCreateArgs} args - Arguments to create a LineaDeCuota.
     * @example
     * // Create one LineaDeCuota
     * const LineaDeCuota = await prisma.lineaDeCuota.create({
     *   data: {
     *     // ... data to create a LineaDeCuota
     *   }
     * })
     * 
     */
    create<T extends LineaDeCuotaCreateArgs>(args: SelectSubset<T, LineaDeCuotaCreateArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LineaDeCuotas.
     * @param {LineaDeCuotaCreateManyArgs} args - Arguments to create many LineaDeCuotas.
     * @example
     * // Create many LineaDeCuotas
     * const lineaDeCuota = await prisma.lineaDeCuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineaDeCuotaCreateManyArgs>(args?: SelectSubset<T, LineaDeCuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LineaDeCuota.
     * @param {LineaDeCuotaDeleteArgs} args - Arguments to delete one LineaDeCuota.
     * @example
     * // Delete one LineaDeCuota
     * const LineaDeCuota = await prisma.lineaDeCuota.delete({
     *   where: {
     *     // ... filter to delete one LineaDeCuota
     *   }
     * })
     * 
     */
    delete<T extends LineaDeCuotaDeleteArgs>(args: SelectSubset<T, LineaDeCuotaDeleteArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LineaDeCuota.
     * @param {LineaDeCuotaUpdateArgs} args - Arguments to update one LineaDeCuota.
     * @example
     * // Update one LineaDeCuota
     * const lineaDeCuota = await prisma.lineaDeCuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineaDeCuotaUpdateArgs>(args: SelectSubset<T, LineaDeCuotaUpdateArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LineaDeCuotas.
     * @param {LineaDeCuotaDeleteManyArgs} args - Arguments to filter LineaDeCuotas to delete.
     * @example
     * // Delete a few LineaDeCuotas
     * const { count } = await prisma.lineaDeCuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineaDeCuotaDeleteManyArgs>(args?: SelectSubset<T, LineaDeCuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineaDeCuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDeCuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineaDeCuotas
     * const lineaDeCuota = await prisma.lineaDeCuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineaDeCuotaUpdateManyArgs>(args: SelectSubset<T, LineaDeCuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LineaDeCuota.
     * @param {LineaDeCuotaUpsertArgs} args - Arguments to update or create a LineaDeCuota.
     * @example
     * // Update or create a LineaDeCuota
     * const lineaDeCuota = await prisma.lineaDeCuota.upsert({
     *   create: {
     *     // ... data to create a LineaDeCuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineaDeCuota we want to update
     *   }
     * })
     */
    upsert<T extends LineaDeCuotaUpsertArgs>(args: SelectSubset<T, LineaDeCuotaUpsertArgs<ExtArgs>>): Prisma__LineaDeCuotaClient<$Result.GetResult<Prisma.$LineaDeCuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LineaDeCuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDeCuotaCountArgs} args - Arguments to filter LineaDeCuotas to count.
     * @example
     * // Count the number of LineaDeCuotas
     * const count = await prisma.lineaDeCuota.count({
     *   where: {
     *     // ... the filter for the LineaDeCuotas we want to count
     *   }
     * })
    **/
    count<T extends LineaDeCuotaCountArgs>(
      args?: Subset<T, LineaDeCuotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineaDeCuotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineaDeCuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDeCuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LineaDeCuotaAggregateArgs>(args: Subset<T, LineaDeCuotaAggregateArgs>): Prisma.PrismaPromise<GetLineaDeCuotaAggregateType<T>>

    /**
     * Group by LineaDeCuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaDeCuotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LineaDeCuotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineaDeCuotaGroupByArgs['orderBy'] }
        : { orderBy?: LineaDeCuotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineaDeCuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineaDeCuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineaDeCuota model
   */
  readonly fields: LineaDeCuotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineaDeCuota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineaDeCuotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuota<T extends CuotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuotaDefaultArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LineaDeCuota model
   */
  interface LineaDeCuotaFieldRefs {
    readonly id: FieldRef<"LineaDeCuota", 'Int'>
    readonly idCuota: FieldRef<"LineaDeCuota", 'Int'>
    readonly fechaPago: FieldRef<"LineaDeCuota", 'DateTime'>
    readonly monto: FieldRef<"LineaDeCuota", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * LineaDeCuota findUnique
   */
  export type LineaDeCuotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * Filter, which LineaDeCuota to fetch.
     */
    where: LineaDeCuotaWhereUniqueInput
  }

  /**
   * LineaDeCuota findUniqueOrThrow
   */
  export type LineaDeCuotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * Filter, which LineaDeCuota to fetch.
     */
    where: LineaDeCuotaWhereUniqueInput
  }

  /**
   * LineaDeCuota findFirst
   */
  export type LineaDeCuotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * Filter, which LineaDeCuota to fetch.
     */
    where?: LineaDeCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDeCuotas to fetch.
     */
    orderBy?: LineaDeCuotaOrderByWithRelationInput | LineaDeCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaDeCuotas.
     */
    cursor?: LineaDeCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDeCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDeCuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaDeCuotas.
     */
    distinct?: LineaDeCuotaScalarFieldEnum | LineaDeCuotaScalarFieldEnum[]
  }

  /**
   * LineaDeCuota findFirstOrThrow
   */
  export type LineaDeCuotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * Filter, which LineaDeCuota to fetch.
     */
    where?: LineaDeCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDeCuotas to fetch.
     */
    orderBy?: LineaDeCuotaOrderByWithRelationInput | LineaDeCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaDeCuotas.
     */
    cursor?: LineaDeCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDeCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDeCuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaDeCuotas.
     */
    distinct?: LineaDeCuotaScalarFieldEnum | LineaDeCuotaScalarFieldEnum[]
  }

  /**
   * LineaDeCuota findMany
   */
  export type LineaDeCuotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * Filter, which LineaDeCuotas to fetch.
     */
    where?: LineaDeCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaDeCuotas to fetch.
     */
    orderBy?: LineaDeCuotaOrderByWithRelationInput | LineaDeCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineaDeCuotas.
     */
    cursor?: LineaDeCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaDeCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaDeCuotas.
     */
    skip?: number
    distinct?: LineaDeCuotaScalarFieldEnum | LineaDeCuotaScalarFieldEnum[]
  }

  /**
   * LineaDeCuota create
   */
  export type LineaDeCuotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * The data needed to create a LineaDeCuota.
     */
    data: XOR<LineaDeCuotaCreateInput, LineaDeCuotaUncheckedCreateInput>
  }

  /**
   * LineaDeCuota createMany
   */
  export type LineaDeCuotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineaDeCuotas.
     */
    data: LineaDeCuotaCreateManyInput | LineaDeCuotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LineaDeCuota update
   */
  export type LineaDeCuotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * The data needed to update a LineaDeCuota.
     */
    data: XOR<LineaDeCuotaUpdateInput, LineaDeCuotaUncheckedUpdateInput>
    /**
     * Choose, which LineaDeCuota to update.
     */
    where: LineaDeCuotaWhereUniqueInput
  }

  /**
   * LineaDeCuota updateMany
   */
  export type LineaDeCuotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineaDeCuotas.
     */
    data: XOR<LineaDeCuotaUpdateManyMutationInput, LineaDeCuotaUncheckedUpdateManyInput>
    /**
     * Filter which LineaDeCuotas to update
     */
    where?: LineaDeCuotaWhereInput
    /**
     * Limit how many LineaDeCuotas to update.
     */
    limit?: number
  }

  /**
   * LineaDeCuota upsert
   */
  export type LineaDeCuotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * The filter to search for the LineaDeCuota to update in case it exists.
     */
    where: LineaDeCuotaWhereUniqueInput
    /**
     * In case the LineaDeCuota found by the `where` argument doesn't exist, create a new LineaDeCuota with this data.
     */
    create: XOR<LineaDeCuotaCreateInput, LineaDeCuotaUncheckedCreateInput>
    /**
     * In case the LineaDeCuota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineaDeCuotaUpdateInput, LineaDeCuotaUncheckedUpdateInput>
  }

  /**
   * LineaDeCuota delete
   */
  export type LineaDeCuotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
    /**
     * Filter which LineaDeCuota to delete.
     */
    where: LineaDeCuotaWhereUniqueInput
  }

  /**
   * LineaDeCuota deleteMany
   */
  export type LineaDeCuotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaDeCuotas to delete
     */
    where?: LineaDeCuotaWhereInput
    /**
     * Limit how many LineaDeCuotas to delete.
     */
    limit?: number
  }

  /**
   * LineaDeCuota without action
   */
  export type LineaDeCuotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaDeCuota
     */
    select?: LineaDeCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaDeCuota
     */
    omit?: LineaDeCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaDeCuotaInclude<ExtArgs> | null
  }


  /**
   * Model ValorCuota
   */

  export type AggregateValorCuota = {
    _count: ValorCuotaCountAggregateOutputType | null
    _avg: ValorCuotaAvgAggregateOutputType | null
    _sum: ValorCuotaSumAggregateOutputType | null
    _min: ValorCuotaMinAggregateOutputType | null
    _max: ValorCuotaMaxAggregateOutputType | null
  }

  export type ValorCuotaAvgAggregateOutputType = {
    id: number | null
    idCuota: number | null
    precio: Decimal | null
  }

  export type ValorCuotaSumAggregateOutputType = {
    id: number | null
    idCuota: number | null
    precio: Decimal | null
  }

  export type ValorCuotaMinAggregateOutputType = {
    id: number | null
    idCuota: number | null
    precio: Decimal | null
    fechaCambio: Date | null
  }

  export type ValorCuotaMaxAggregateOutputType = {
    id: number | null
    idCuota: number | null
    precio: Decimal | null
    fechaCambio: Date | null
  }

  export type ValorCuotaCountAggregateOutputType = {
    id: number
    idCuota: number
    precio: number
    fechaCambio: number
    _all: number
  }


  export type ValorCuotaAvgAggregateInputType = {
    id?: true
    idCuota?: true
    precio?: true
  }

  export type ValorCuotaSumAggregateInputType = {
    id?: true
    idCuota?: true
    precio?: true
  }

  export type ValorCuotaMinAggregateInputType = {
    id?: true
    idCuota?: true
    precio?: true
    fechaCambio?: true
  }

  export type ValorCuotaMaxAggregateInputType = {
    id?: true
    idCuota?: true
    precio?: true
    fechaCambio?: true
  }

  export type ValorCuotaCountAggregateInputType = {
    id?: true
    idCuota?: true
    precio?: true
    fechaCambio?: true
    _all?: true
  }

  export type ValorCuotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValorCuota to aggregate.
     */
    where?: ValorCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValorCuotas to fetch.
     */
    orderBy?: ValorCuotaOrderByWithRelationInput | ValorCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValorCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValorCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValorCuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ValorCuotas
    **/
    _count?: true | ValorCuotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValorCuotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValorCuotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValorCuotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValorCuotaMaxAggregateInputType
  }

  export type GetValorCuotaAggregateType<T extends ValorCuotaAggregateArgs> = {
        [P in keyof T & keyof AggregateValorCuota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValorCuota[P]>
      : GetScalarType<T[P], AggregateValorCuota[P]>
  }




  export type ValorCuotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValorCuotaWhereInput
    orderBy?: ValorCuotaOrderByWithAggregationInput | ValorCuotaOrderByWithAggregationInput[]
    by: ValorCuotaScalarFieldEnum[] | ValorCuotaScalarFieldEnum
    having?: ValorCuotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValorCuotaCountAggregateInputType | true
    _avg?: ValorCuotaAvgAggregateInputType
    _sum?: ValorCuotaSumAggregateInputType
    _min?: ValorCuotaMinAggregateInputType
    _max?: ValorCuotaMaxAggregateInputType
  }

  export type ValorCuotaGroupByOutputType = {
    id: number
    idCuota: number
    precio: Decimal
    fechaCambio: Date
    _count: ValorCuotaCountAggregateOutputType | null
    _avg: ValorCuotaAvgAggregateOutputType | null
    _sum: ValorCuotaSumAggregateOutputType | null
    _min: ValorCuotaMinAggregateOutputType | null
    _max: ValorCuotaMaxAggregateOutputType | null
  }

  type GetValorCuotaGroupByPayload<T extends ValorCuotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValorCuotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValorCuotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValorCuotaGroupByOutputType[P]>
            : GetScalarType<T[P], ValorCuotaGroupByOutputType[P]>
        }
      >
    >


  export type ValorCuotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCuota?: boolean
    precio?: boolean
    fechaCambio?: boolean
    cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valorCuota"]>



  export type ValorCuotaSelectScalar = {
    id?: boolean
    idCuota?: boolean
    precio?: boolean
    fechaCambio?: boolean
  }

  export type ValorCuotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCuota" | "precio" | "fechaCambio", ExtArgs["result"]["valorCuota"]>
  export type ValorCuotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuota?: boolean | CuotaDefaultArgs<ExtArgs>
  }

  export type $ValorCuotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ValorCuota"
    objects: {
      cuota: Prisma.$CuotaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCuota: number
      precio: Prisma.Decimal
      fechaCambio: Date
    }, ExtArgs["result"]["valorCuota"]>
    composites: {}
  }

  type ValorCuotaGetPayload<S extends boolean | null | undefined | ValorCuotaDefaultArgs> = $Result.GetResult<Prisma.$ValorCuotaPayload, S>

  type ValorCuotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValorCuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValorCuotaCountAggregateInputType | true
    }

  export interface ValorCuotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ValorCuota'], meta: { name: 'ValorCuota' } }
    /**
     * Find zero or one ValorCuota that matches the filter.
     * @param {ValorCuotaFindUniqueArgs} args - Arguments to find a ValorCuota
     * @example
     * // Get one ValorCuota
     * const valorCuota = await prisma.valorCuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValorCuotaFindUniqueArgs>(args: SelectSubset<T, ValorCuotaFindUniqueArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ValorCuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValorCuotaFindUniqueOrThrowArgs} args - Arguments to find a ValorCuota
     * @example
     * // Get one ValorCuota
     * const valorCuota = await prisma.valorCuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValorCuotaFindUniqueOrThrowArgs>(args: SelectSubset<T, ValorCuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ValorCuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValorCuotaFindFirstArgs} args - Arguments to find a ValorCuota
     * @example
     * // Get one ValorCuota
     * const valorCuota = await prisma.valorCuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValorCuotaFindFirstArgs>(args?: SelectSubset<T, ValorCuotaFindFirstArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ValorCuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValorCuotaFindFirstOrThrowArgs} args - Arguments to find a ValorCuota
     * @example
     * // Get one ValorCuota
     * const valorCuota = await prisma.valorCuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValorCuotaFindFirstOrThrowArgs>(args?: SelectSubset<T, ValorCuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ValorCuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValorCuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ValorCuotas
     * const valorCuotas = await prisma.valorCuota.findMany()
     * 
     * // Get first 10 ValorCuotas
     * const valorCuotas = await prisma.valorCuota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valorCuotaWithIdOnly = await prisma.valorCuota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValorCuotaFindManyArgs>(args?: SelectSubset<T, ValorCuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ValorCuota.
     * @param {ValorCuotaCreateArgs} args - Arguments to create a ValorCuota.
     * @example
     * // Create one ValorCuota
     * const ValorCuota = await prisma.valorCuota.create({
     *   data: {
     *     // ... data to create a ValorCuota
     *   }
     * })
     * 
     */
    create<T extends ValorCuotaCreateArgs>(args: SelectSubset<T, ValorCuotaCreateArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ValorCuotas.
     * @param {ValorCuotaCreateManyArgs} args - Arguments to create many ValorCuotas.
     * @example
     * // Create many ValorCuotas
     * const valorCuota = await prisma.valorCuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValorCuotaCreateManyArgs>(args?: SelectSubset<T, ValorCuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ValorCuota.
     * @param {ValorCuotaDeleteArgs} args - Arguments to delete one ValorCuota.
     * @example
     * // Delete one ValorCuota
     * const ValorCuota = await prisma.valorCuota.delete({
     *   where: {
     *     // ... filter to delete one ValorCuota
     *   }
     * })
     * 
     */
    delete<T extends ValorCuotaDeleteArgs>(args: SelectSubset<T, ValorCuotaDeleteArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ValorCuota.
     * @param {ValorCuotaUpdateArgs} args - Arguments to update one ValorCuota.
     * @example
     * // Update one ValorCuota
     * const valorCuota = await prisma.valorCuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValorCuotaUpdateArgs>(args: SelectSubset<T, ValorCuotaUpdateArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ValorCuotas.
     * @param {ValorCuotaDeleteManyArgs} args - Arguments to filter ValorCuotas to delete.
     * @example
     * // Delete a few ValorCuotas
     * const { count } = await prisma.valorCuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValorCuotaDeleteManyArgs>(args?: SelectSubset<T, ValorCuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ValorCuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValorCuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ValorCuotas
     * const valorCuota = await prisma.valorCuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValorCuotaUpdateManyArgs>(args: SelectSubset<T, ValorCuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ValorCuota.
     * @param {ValorCuotaUpsertArgs} args - Arguments to update or create a ValorCuota.
     * @example
     * // Update or create a ValorCuota
     * const valorCuota = await prisma.valorCuota.upsert({
     *   create: {
     *     // ... data to create a ValorCuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ValorCuota we want to update
     *   }
     * })
     */
    upsert<T extends ValorCuotaUpsertArgs>(args: SelectSubset<T, ValorCuotaUpsertArgs<ExtArgs>>): Prisma__ValorCuotaClient<$Result.GetResult<Prisma.$ValorCuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ValorCuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValorCuotaCountArgs} args - Arguments to filter ValorCuotas to count.
     * @example
     * // Count the number of ValorCuotas
     * const count = await prisma.valorCuota.count({
     *   where: {
     *     // ... the filter for the ValorCuotas we want to count
     *   }
     * })
    **/
    count<T extends ValorCuotaCountArgs>(
      args?: Subset<T, ValorCuotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValorCuotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ValorCuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValorCuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValorCuotaAggregateArgs>(args: Subset<T, ValorCuotaAggregateArgs>): Prisma.PrismaPromise<GetValorCuotaAggregateType<T>>

    /**
     * Group by ValorCuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValorCuotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValorCuotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValorCuotaGroupByArgs['orderBy'] }
        : { orderBy?: ValorCuotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValorCuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValorCuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ValorCuota model
   */
  readonly fields: ValorCuotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ValorCuota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValorCuotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuota<T extends CuotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CuotaDefaultArgs<ExtArgs>>): Prisma__CuotaClient<$Result.GetResult<Prisma.$CuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ValorCuota model
   */
  interface ValorCuotaFieldRefs {
    readonly id: FieldRef<"ValorCuota", 'Int'>
    readonly idCuota: FieldRef<"ValorCuota", 'Int'>
    readonly precio: FieldRef<"ValorCuota", 'Decimal'>
    readonly fechaCambio: FieldRef<"ValorCuota", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ValorCuota findUnique
   */
  export type ValorCuotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * Filter, which ValorCuota to fetch.
     */
    where: ValorCuotaWhereUniqueInput
  }

  /**
   * ValorCuota findUniqueOrThrow
   */
  export type ValorCuotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * Filter, which ValorCuota to fetch.
     */
    where: ValorCuotaWhereUniqueInput
  }

  /**
   * ValorCuota findFirst
   */
  export type ValorCuotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * Filter, which ValorCuota to fetch.
     */
    where?: ValorCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValorCuotas to fetch.
     */
    orderBy?: ValorCuotaOrderByWithRelationInput | ValorCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValorCuotas.
     */
    cursor?: ValorCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValorCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValorCuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValorCuotas.
     */
    distinct?: ValorCuotaScalarFieldEnum | ValorCuotaScalarFieldEnum[]
  }

  /**
   * ValorCuota findFirstOrThrow
   */
  export type ValorCuotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * Filter, which ValorCuota to fetch.
     */
    where?: ValorCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValorCuotas to fetch.
     */
    orderBy?: ValorCuotaOrderByWithRelationInput | ValorCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ValorCuotas.
     */
    cursor?: ValorCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValorCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValorCuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ValorCuotas.
     */
    distinct?: ValorCuotaScalarFieldEnum | ValorCuotaScalarFieldEnum[]
  }

  /**
   * ValorCuota findMany
   */
  export type ValorCuotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * Filter, which ValorCuotas to fetch.
     */
    where?: ValorCuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ValorCuotas to fetch.
     */
    orderBy?: ValorCuotaOrderByWithRelationInput | ValorCuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ValorCuotas.
     */
    cursor?: ValorCuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ValorCuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ValorCuotas.
     */
    skip?: number
    distinct?: ValorCuotaScalarFieldEnum | ValorCuotaScalarFieldEnum[]
  }

  /**
   * ValorCuota create
   */
  export type ValorCuotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * The data needed to create a ValorCuota.
     */
    data: XOR<ValorCuotaCreateInput, ValorCuotaUncheckedCreateInput>
  }

  /**
   * ValorCuota createMany
   */
  export type ValorCuotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ValorCuotas.
     */
    data: ValorCuotaCreateManyInput | ValorCuotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ValorCuota update
   */
  export type ValorCuotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * The data needed to update a ValorCuota.
     */
    data: XOR<ValorCuotaUpdateInput, ValorCuotaUncheckedUpdateInput>
    /**
     * Choose, which ValorCuota to update.
     */
    where: ValorCuotaWhereUniqueInput
  }

  /**
   * ValorCuota updateMany
   */
  export type ValorCuotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ValorCuotas.
     */
    data: XOR<ValorCuotaUpdateManyMutationInput, ValorCuotaUncheckedUpdateManyInput>
    /**
     * Filter which ValorCuotas to update
     */
    where?: ValorCuotaWhereInput
    /**
     * Limit how many ValorCuotas to update.
     */
    limit?: number
  }

  /**
   * ValorCuota upsert
   */
  export type ValorCuotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * The filter to search for the ValorCuota to update in case it exists.
     */
    where: ValorCuotaWhereUniqueInput
    /**
     * In case the ValorCuota found by the `where` argument doesn't exist, create a new ValorCuota with this data.
     */
    create: XOR<ValorCuotaCreateInput, ValorCuotaUncheckedCreateInput>
    /**
     * In case the ValorCuota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValorCuotaUpdateInput, ValorCuotaUncheckedUpdateInput>
  }

  /**
   * ValorCuota delete
   */
  export type ValorCuotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
    /**
     * Filter which ValorCuota to delete.
     */
    where: ValorCuotaWhereUniqueInput
  }

  /**
   * ValorCuota deleteMany
   */
  export type ValorCuotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ValorCuotas to delete
     */
    where?: ValorCuotaWhereInput
    /**
     * Limit how many ValorCuotas to delete.
     */
    limit?: number
  }

  /**
   * ValorCuota without action
   */
  export type ValorCuotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValorCuota
     */
    select?: ValorCuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ValorCuota
     */
    omit?: ValorCuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValorCuotaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombreUsuario: 'nombreUsuario',
    password: 'password',
    email: 'email',
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CuotaScalarFieldEnum: {
    id: 'id',
    fechaInicio: 'fechaInicio',
    fechaVencimiento: 'fechaVencimiento',
    montoTotal: 'montoTotal',
    idUsuario: 'idUsuario'
  };

  export type CuotaScalarFieldEnum = (typeof CuotaScalarFieldEnum)[keyof typeof CuotaScalarFieldEnum]


  export const LineaDeCuotaScalarFieldEnum: {
    id: 'id',
    idCuota: 'idCuota',
    fechaPago: 'fechaPago',
    monto: 'monto'
  };

  export type LineaDeCuotaScalarFieldEnum = (typeof LineaDeCuotaScalarFieldEnum)[keyof typeof LineaDeCuotaScalarFieldEnum]


  export const ValorCuotaScalarFieldEnum: {
    id: 'id',
    idCuota: 'idCuota',
    precio: 'precio',
    fechaCambio: 'fechaCambio'
  };

  export type ValorCuotaScalarFieldEnum = (typeof ValorCuotaScalarFieldEnum)[keyof typeof ValorCuotaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    nombreUsuario: 'nombreUsuario',
    password: 'password',
    email: 'email',
    nombre: 'nombre',
    apellido: 'apellido',
    telefono: 'telefono'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombreUsuario?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    cuota?: CuotaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    cuota?: CuotaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombreUsuario?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    telefono?: StringFilter<"Usuario"> | string
    cuota?: CuotaListRelationFilter
  }, "id" | "nombreUsuario">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombreUsuario?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type CuotaWhereInput = {
    AND?: CuotaWhereInput | CuotaWhereInput[]
    OR?: CuotaWhereInput[]
    NOT?: CuotaWhereInput | CuotaWhereInput[]
    id?: IntFilter<"Cuota"> | number
    fechaInicio?: DateTimeFilter<"Cuota"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Cuota"> | Date | string
    montoTotal?: DecimalFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    idUsuario?: IntFilter<"Cuota"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    lineaDeCuota?: LineaDeCuotaListRelationFilter
    valorCuota?: ValorCuotaListRelationFilter
  }

  export type CuotaOrderByWithRelationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    montoTotal?: SortOrder
    idUsuario?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    lineaDeCuota?: LineaDeCuotaOrderByRelationAggregateInput
    valorCuota?: ValorCuotaOrderByRelationAggregateInput
  }

  export type CuotaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fechaInicio?: Date | string
    AND?: CuotaWhereInput | CuotaWhereInput[]
    OR?: CuotaWhereInput[]
    NOT?: CuotaWhereInput | CuotaWhereInput[]
    fechaVencimiento?: DateTimeFilter<"Cuota"> | Date | string
    montoTotal?: DecimalFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    idUsuario?: IntFilter<"Cuota"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    lineaDeCuota?: LineaDeCuotaListRelationFilter
    valorCuota?: ValorCuotaListRelationFilter
  }, "id" | "fechaInicio">

  export type CuotaOrderByWithAggregationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    montoTotal?: SortOrder
    idUsuario?: SortOrder
    _count?: CuotaCountOrderByAggregateInput
    _avg?: CuotaAvgOrderByAggregateInput
    _max?: CuotaMaxOrderByAggregateInput
    _min?: CuotaMinOrderByAggregateInput
    _sum?: CuotaSumOrderByAggregateInput
  }

  export type CuotaScalarWhereWithAggregatesInput = {
    AND?: CuotaScalarWhereWithAggregatesInput | CuotaScalarWhereWithAggregatesInput[]
    OR?: CuotaScalarWhereWithAggregatesInput[]
    NOT?: CuotaScalarWhereWithAggregatesInput | CuotaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cuota"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Cuota"> | Date | string
    fechaVencimiento?: DateTimeWithAggregatesFilter<"Cuota"> | Date | string
    montoTotal?: DecimalWithAggregatesFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    idUsuario?: IntWithAggregatesFilter<"Cuota"> | number
  }

  export type LineaDeCuotaWhereInput = {
    AND?: LineaDeCuotaWhereInput | LineaDeCuotaWhereInput[]
    OR?: LineaDeCuotaWhereInput[]
    NOT?: LineaDeCuotaWhereInput | LineaDeCuotaWhereInput[]
    id?: IntFilter<"LineaDeCuota"> | number
    idCuota?: IntFilter<"LineaDeCuota"> | number
    fechaPago?: DateTimeFilter<"LineaDeCuota"> | Date | string
    monto?: DecimalFilter<"LineaDeCuota"> | Decimal | DecimalJsLike | number | string
    cuota?: XOR<CuotaScalarRelationFilter, CuotaWhereInput>
  }

  export type LineaDeCuotaOrderByWithRelationInput = {
    id?: SortOrder
    idCuota?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    cuota?: CuotaOrderByWithRelationInput
  }

  export type LineaDeCuotaWhereUniqueInput = Prisma.AtLeast<{
    fechaPago?: Date | string
    id_idCuota?: LineaDeCuotaIdIdCuotaCompoundUniqueInput
    AND?: LineaDeCuotaWhereInput | LineaDeCuotaWhereInput[]
    OR?: LineaDeCuotaWhereInput[]
    NOT?: LineaDeCuotaWhereInput | LineaDeCuotaWhereInput[]
    id?: IntFilter<"LineaDeCuota"> | number
    idCuota?: IntFilter<"LineaDeCuota"> | number
    monto?: DecimalFilter<"LineaDeCuota"> | Decimal | DecimalJsLike | number | string
    cuota?: XOR<CuotaScalarRelationFilter, CuotaWhereInput>
  }, "id_idCuota" | "fechaPago">

  export type LineaDeCuotaOrderByWithAggregationInput = {
    id?: SortOrder
    idCuota?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
    _count?: LineaDeCuotaCountOrderByAggregateInput
    _avg?: LineaDeCuotaAvgOrderByAggregateInput
    _max?: LineaDeCuotaMaxOrderByAggregateInput
    _min?: LineaDeCuotaMinOrderByAggregateInput
    _sum?: LineaDeCuotaSumOrderByAggregateInput
  }

  export type LineaDeCuotaScalarWhereWithAggregatesInput = {
    AND?: LineaDeCuotaScalarWhereWithAggregatesInput | LineaDeCuotaScalarWhereWithAggregatesInput[]
    OR?: LineaDeCuotaScalarWhereWithAggregatesInput[]
    NOT?: LineaDeCuotaScalarWhereWithAggregatesInput | LineaDeCuotaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LineaDeCuota"> | number
    idCuota?: IntWithAggregatesFilter<"LineaDeCuota"> | number
    fechaPago?: DateTimeWithAggregatesFilter<"LineaDeCuota"> | Date | string
    monto?: DecimalWithAggregatesFilter<"LineaDeCuota"> | Decimal | DecimalJsLike | number | string
  }

  export type ValorCuotaWhereInput = {
    AND?: ValorCuotaWhereInput | ValorCuotaWhereInput[]
    OR?: ValorCuotaWhereInput[]
    NOT?: ValorCuotaWhereInput | ValorCuotaWhereInput[]
    id?: IntFilter<"ValorCuota"> | number
    idCuota?: IntFilter<"ValorCuota"> | number
    precio?: DecimalFilter<"ValorCuota"> | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFilter<"ValorCuota"> | Date | string
    cuota?: XOR<CuotaScalarRelationFilter, CuotaWhereInput>
  }

  export type ValorCuotaOrderByWithRelationInput = {
    id?: SortOrder
    idCuota?: SortOrder
    precio?: SortOrder
    fechaCambio?: SortOrder
    cuota?: CuotaOrderByWithRelationInput
  }

  export type ValorCuotaWhereUniqueInput = Prisma.AtLeast<{
    fechaCambio?: Date | string
    id_idCuota?: ValorCuotaIdIdCuotaCompoundUniqueInput
    AND?: ValorCuotaWhereInput | ValorCuotaWhereInput[]
    OR?: ValorCuotaWhereInput[]
    NOT?: ValorCuotaWhereInput | ValorCuotaWhereInput[]
    id?: IntFilter<"ValorCuota"> | number
    idCuota?: IntFilter<"ValorCuota"> | number
    precio?: DecimalFilter<"ValorCuota"> | Decimal | DecimalJsLike | number | string
    cuota?: XOR<CuotaScalarRelationFilter, CuotaWhereInput>
  }, "id_idCuota" | "fechaCambio">

  export type ValorCuotaOrderByWithAggregationInput = {
    id?: SortOrder
    idCuota?: SortOrder
    precio?: SortOrder
    fechaCambio?: SortOrder
    _count?: ValorCuotaCountOrderByAggregateInput
    _avg?: ValorCuotaAvgOrderByAggregateInput
    _max?: ValorCuotaMaxOrderByAggregateInput
    _min?: ValorCuotaMinOrderByAggregateInput
    _sum?: ValorCuotaSumOrderByAggregateInput
  }

  export type ValorCuotaScalarWhereWithAggregatesInput = {
    AND?: ValorCuotaScalarWhereWithAggregatesInput | ValorCuotaScalarWhereWithAggregatesInput[]
    OR?: ValorCuotaScalarWhereWithAggregatesInput[]
    NOT?: ValorCuotaScalarWhereWithAggregatesInput | ValorCuotaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ValorCuota"> | number
    idCuota?: IntWithAggregatesFilter<"ValorCuota"> | number
    precio?: DecimalWithAggregatesFilter<"ValorCuota"> | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeWithAggregatesFilter<"ValorCuota"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombreUsuario: string
    password: string
    email: string
    nombre: string
    apellido: string
    telefono: string
    cuota?: CuotaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombreUsuario: string
    password: string
    email: string
    nombre: string
    apellido: string
    telefono: string
    cuota?: CuotaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuota?: CuotaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    cuota?: CuotaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombreUsuario: string
    password: string
    email: string
    nombre: string
    apellido: string
    telefono: string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type CuotaCreateInput = {
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutCuotaInput
    lineaDeCuota?: LineaDeCuotaCreateNestedManyWithoutCuotaInput
    valorCuota?: ValorCuotaCreateNestedManyWithoutCuotaInput
  }

  export type CuotaUncheckedCreateInput = {
    id?: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    idUsuario: number
    lineaDeCuota?: LineaDeCuotaUncheckedCreateNestedManyWithoutCuotaInput
    valorCuota?: ValorCuotaUncheckedCreateNestedManyWithoutCuotaInput
  }

  export type CuotaUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutCuotaNestedInput
    lineaDeCuota?: LineaDeCuotaUpdateManyWithoutCuotaNestedInput
    valorCuota?: ValorCuotaUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idUsuario?: IntFieldUpdateOperationsInput | number
    lineaDeCuota?: LineaDeCuotaUncheckedUpdateManyWithoutCuotaNestedInput
    valorCuota?: ValorCuotaUncheckedUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaCreateManyInput = {
    id?: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    idUsuario: number
  }

  export type CuotaUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CuotaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idUsuario?: IntFieldUpdateOperationsInput | number
  }

  export type LineaDeCuotaCreateInput = {
    id: number
    fechaPago: Date | string
    monto: Decimal | DecimalJsLike | number | string
    cuota: CuotaCreateNestedOneWithoutLineaDeCuotaInput
  }

  export type LineaDeCuotaUncheckedCreateInput = {
    id: number
    idCuota: number
    fechaPago: Date | string
    monto: Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cuota?: CuotaUpdateOneRequiredWithoutLineaDeCuotaNestedInput
  }

  export type LineaDeCuotaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCuota?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaCreateManyInput = {
    id: number
    idCuota: number
    fechaPago: Date | string
    monto: Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCuota?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ValorCuotaCreateInput = {
    id: number
    precio: Decimal | DecimalJsLike | number | string
    fechaCambio: Date | string
    cuota: CuotaCreateNestedOneWithoutValorCuotaInput
  }

  export type ValorCuotaUncheckedCreateInput = {
    id: number
    idCuota: number
    precio: Decimal | DecimalJsLike | number | string
    fechaCambio: Date | string
  }

  export type ValorCuotaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    cuota?: CuotaUpdateOneRequiredWithoutValorCuotaNestedInput
  }

  export type ValorCuotaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCuota?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValorCuotaCreateManyInput = {
    id: number
    idCuota: number
    precio: Decimal | DecimalJsLike | number | string
    fechaCambio: Date | string
  }

  export type ValorCuotaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValorCuotaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCuota?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CuotaListRelationFilter = {
    every?: CuotaWhereInput
    some?: CuotaWhereInput
    none?: CuotaWhereInput
  }

  export type CuotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombreUsuario?: SortOrder
    password?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    telefono?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type LineaDeCuotaListRelationFilter = {
    every?: LineaDeCuotaWhereInput
    some?: LineaDeCuotaWhereInput
    none?: LineaDeCuotaWhereInput
  }

  export type ValorCuotaListRelationFilter = {
    every?: ValorCuotaWhereInput
    some?: ValorCuotaWhereInput
    none?: ValorCuotaWhereInput
  }

  export type LineaDeCuotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValorCuotaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CuotaCountOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    montoTotal?: SortOrder
    idUsuario?: SortOrder
  }

  export type CuotaAvgOrderByAggregateInput = {
    id?: SortOrder
    montoTotal?: SortOrder
    idUsuario?: SortOrder
  }

  export type CuotaMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    montoTotal?: SortOrder
    idUsuario?: SortOrder
  }

  export type CuotaMinOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    montoTotal?: SortOrder
    idUsuario?: SortOrder
  }

  export type CuotaSumOrderByAggregateInput = {
    id?: SortOrder
    montoTotal?: SortOrder
    idUsuario?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CuotaScalarRelationFilter = {
    is?: CuotaWhereInput
    isNot?: CuotaWhereInput
  }

  export type LineaDeCuotaIdIdCuotaCompoundUniqueInput = {
    id: number
    idCuota: number
  }

  export type LineaDeCuotaCountOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
  }

  export type LineaDeCuotaAvgOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    monto?: SortOrder
  }

  export type LineaDeCuotaMaxOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
  }

  export type LineaDeCuotaMinOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    fechaPago?: SortOrder
    monto?: SortOrder
  }

  export type LineaDeCuotaSumOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    monto?: SortOrder
  }

  export type ValorCuotaIdIdCuotaCompoundUniqueInput = {
    id: number
    idCuota: number
  }

  export type ValorCuotaCountOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    precio?: SortOrder
    fechaCambio?: SortOrder
  }

  export type ValorCuotaAvgOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    precio?: SortOrder
  }

  export type ValorCuotaMaxOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    precio?: SortOrder
    fechaCambio?: SortOrder
  }

  export type ValorCuotaMinOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    precio?: SortOrder
    fechaCambio?: SortOrder
  }

  export type ValorCuotaSumOrderByAggregateInput = {
    id?: SortOrder
    idCuota?: SortOrder
    precio?: SortOrder
  }

  export type CuotaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CuotaCreateWithoutUsuarioInput, CuotaUncheckedCreateWithoutUsuarioInput> | CuotaCreateWithoutUsuarioInput[] | CuotaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutUsuarioInput | CuotaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CuotaCreateManyUsuarioInputEnvelope
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
  }

  export type CuotaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CuotaCreateWithoutUsuarioInput, CuotaUncheckedCreateWithoutUsuarioInput> | CuotaCreateWithoutUsuarioInput[] | CuotaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutUsuarioInput | CuotaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CuotaCreateManyUsuarioInputEnvelope
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CuotaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CuotaCreateWithoutUsuarioInput, CuotaUncheckedCreateWithoutUsuarioInput> | CuotaCreateWithoutUsuarioInput[] | CuotaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutUsuarioInput | CuotaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CuotaUpsertWithWhereUniqueWithoutUsuarioInput | CuotaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CuotaCreateManyUsuarioInputEnvelope
    set?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    disconnect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    delete?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    update?: CuotaUpdateWithWhereUniqueWithoutUsuarioInput | CuotaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CuotaUpdateManyWithWhereWithoutUsuarioInput | CuotaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CuotaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CuotaCreateWithoutUsuarioInput, CuotaUncheckedCreateWithoutUsuarioInput> | CuotaCreateWithoutUsuarioInput[] | CuotaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CuotaCreateOrConnectWithoutUsuarioInput | CuotaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CuotaUpsertWithWhereUniqueWithoutUsuarioInput | CuotaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CuotaCreateManyUsuarioInputEnvelope
    set?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    disconnect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    delete?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    connect?: CuotaWhereUniqueInput | CuotaWhereUniqueInput[]
    update?: CuotaUpdateWithWhereUniqueWithoutUsuarioInput | CuotaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CuotaUpdateManyWithWhereWithoutUsuarioInput | CuotaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCuotaInput = {
    create?: XOR<UsuarioCreateWithoutCuotaInput, UsuarioUncheckedCreateWithoutCuotaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCuotaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LineaDeCuotaCreateNestedManyWithoutCuotaInput = {
    create?: XOR<LineaDeCuotaCreateWithoutCuotaInput, LineaDeCuotaUncheckedCreateWithoutCuotaInput> | LineaDeCuotaCreateWithoutCuotaInput[] | LineaDeCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: LineaDeCuotaCreateOrConnectWithoutCuotaInput | LineaDeCuotaCreateOrConnectWithoutCuotaInput[]
    createMany?: LineaDeCuotaCreateManyCuotaInputEnvelope
    connect?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
  }

  export type ValorCuotaCreateNestedManyWithoutCuotaInput = {
    create?: XOR<ValorCuotaCreateWithoutCuotaInput, ValorCuotaUncheckedCreateWithoutCuotaInput> | ValorCuotaCreateWithoutCuotaInput[] | ValorCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ValorCuotaCreateOrConnectWithoutCuotaInput | ValorCuotaCreateOrConnectWithoutCuotaInput[]
    createMany?: ValorCuotaCreateManyCuotaInputEnvelope
    connect?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
  }

  export type LineaDeCuotaUncheckedCreateNestedManyWithoutCuotaInput = {
    create?: XOR<LineaDeCuotaCreateWithoutCuotaInput, LineaDeCuotaUncheckedCreateWithoutCuotaInput> | LineaDeCuotaCreateWithoutCuotaInput[] | LineaDeCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: LineaDeCuotaCreateOrConnectWithoutCuotaInput | LineaDeCuotaCreateOrConnectWithoutCuotaInput[]
    createMany?: LineaDeCuotaCreateManyCuotaInputEnvelope
    connect?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
  }

  export type ValorCuotaUncheckedCreateNestedManyWithoutCuotaInput = {
    create?: XOR<ValorCuotaCreateWithoutCuotaInput, ValorCuotaUncheckedCreateWithoutCuotaInput> | ValorCuotaCreateWithoutCuotaInput[] | ValorCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ValorCuotaCreateOrConnectWithoutCuotaInput | ValorCuotaCreateOrConnectWithoutCuotaInput[]
    createMany?: ValorCuotaCreateManyCuotaInputEnvelope
    connect?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UsuarioUpdateOneRequiredWithoutCuotaNestedInput = {
    create?: XOR<UsuarioCreateWithoutCuotaInput, UsuarioUncheckedCreateWithoutCuotaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCuotaInput
    upsert?: UsuarioUpsertWithoutCuotaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCuotaInput, UsuarioUpdateWithoutCuotaInput>, UsuarioUncheckedUpdateWithoutCuotaInput>
  }

  export type LineaDeCuotaUpdateManyWithoutCuotaNestedInput = {
    create?: XOR<LineaDeCuotaCreateWithoutCuotaInput, LineaDeCuotaUncheckedCreateWithoutCuotaInput> | LineaDeCuotaCreateWithoutCuotaInput[] | LineaDeCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: LineaDeCuotaCreateOrConnectWithoutCuotaInput | LineaDeCuotaCreateOrConnectWithoutCuotaInput[]
    upsert?: LineaDeCuotaUpsertWithWhereUniqueWithoutCuotaInput | LineaDeCuotaUpsertWithWhereUniqueWithoutCuotaInput[]
    createMany?: LineaDeCuotaCreateManyCuotaInputEnvelope
    set?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    disconnect?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    delete?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    connect?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    update?: LineaDeCuotaUpdateWithWhereUniqueWithoutCuotaInput | LineaDeCuotaUpdateWithWhereUniqueWithoutCuotaInput[]
    updateMany?: LineaDeCuotaUpdateManyWithWhereWithoutCuotaInput | LineaDeCuotaUpdateManyWithWhereWithoutCuotaInput[]
    deleteMany?: LineaDeCuotaScalarWhereInput | LineaDeCuotaScalarWhereInput[]
  }

  export type ValorCuotaUpdateManyWithoutCuotaNestedInput = {
    create?: XOR<ValorCuotaCreateWithoutCuotaInput, ValorCuotaUncheckedCreateWithoutCuotaInput> | ValorCuotaCreateWithoutCuotaInput[] | ValorCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ValorCuotaCreateOrConnectWithoutCuotaInput | ValorCuotaCreateOrConnectWithoutCuotaInput[]
    upsert?: ValorCuotaUpsertWithWhereUniqueWithoutCuotaInput | ValorCuotaUpsertWithWhereUniqueWithoutCuotaInput[]
    createMany?: ValorCuotaCreateManyCuotaInputEnvelope
    set?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    disconnect?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    delete?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    connect?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    update?: ValorCuotaUpdateWithWhereUniqueWithoutCuotaInput | ValorCuotaUpdateWithWhereUniqueWithoutCuotaInput[]
    updateMany?: ValorCuotaUpdateManyWithWhereWithoutCuotaInput | ValorCuotaUpdateManyWithWhereWithoutCuotaInput[]
    deleteMany?: ValorCuotaScalarWhereInput | ValorCuotaScalarWhereInput[]
  }

  export type LineaDeCuotaUncheckedUpdateManyWithoutCuotaNestedInput = {
    create?: XOR<LineaDeCuotaCreateWithoutCuotaInput, LineaDeCuotaUncheckedCreateWithoutCuotaInput> | LineaDeCuotaCreateWithoutCuotaInput[] | LineaDeCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: LineaDeCuotaCreateOrConnectWithoutCuotaInput | LineaDeCuotaCreateOrConnectWithoutCuotaInput[]
    upsert?: LineaDeCuotaUpsertWithWhereUniqueWithoutCuotaInput | LineaDeCuotaUpsertWithWhereUniqueWithoutCuotaInput[]
    createMany?: LineaDeCuotaCreateManyCuotaInputEnvelope
    set?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    disconnect?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    delete?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    connect?: LineaDeCuotaWhereUniqueInput | LineaDeCuotaWhereUniqueInput[]
    update?: LineaDeCuotaUpdateWithWhereUniqueWithoutCuotaInput | LineaDeCuotaUpdateWithWhereUniqueWithoutCuotaInput[]
    updateMany?: LineaDeCuotaUpdateManyWithWhereWithoutCuotaInput | LineaDeCuotaUpdateManyWithWhereWithoutCuotaInput[]
    deleteMany?: LineaDeCuotaScalarWhereInput | LineaDeCuotaScalarWhereInput[]
  }

  export type ValorCuotaUncheckedUpdateManyWithoutCuotaNestedInput = {
    create?: XOR<ValorCuotaCreateWithoutCuotaInput, ValorCuotaUncheckedCreateWithoutCuotaInput> | ValorCuotaCreateWithoutCuotaInput[] | ValorCuotaUncheckedCreateWithoutCuotaInput[]
    connectOrCreate?: ValorCuotaCreateOrConnectWithoutCuotaInput | ValorCuotaCreateOrConnectWithoutCuotaInput[]
    upsert?: ValorCuotaUpsertWithWhereUniqueWithoutCuotaInput | ValorCuotaUpsertWithWhereUniqueWithoutCuotaInput[]
    createMany?: ValorCuotaCreateManyCuotaInputEnvelope
    set?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    disconnect?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    delete?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    connect?: ValorCuotaWhereUniqueInput | ValorCuotaWhereUniqueInput[]
    update?: ValorCuotaUpdateWithWhereUniqueWithoutCuotaInput | ValorCuotaUpdateWithWhereUniqueWithoutCuotaInput[]
    updateMany?: ValorCuotaUpdateManyWithWhereWithoutCuotaInput | ValorCuotaUpdateManyWithWhereWithoutCuotaInput[]
    deleteMany?: ValorCuotaScalarWhereInput | ValorCuotaScalarWhereInput[]
  }

  export type CuotaCreateNestedOneWithoutLineaDeCuotaInput = {
    create?: XOR<CuotaCreateWithoutLineaDeCuotaInput, CuotaUncheckedCreateWithoutLineaDeCuotaInput>
    connectOrCreate?: CuotaCreateOrConnectWithoutLineaDeCuotaInput
    connect?: CuotaWhereUniqueInput
  }

  export type CuotaUpdateOneRequiredWithoutLineaDeCuotaNestedInput = {
    create?: XOR<CuotaCreateWithoutLineaDeCuotaInput, CuotaUncheckedCreateWithoutLineaDeCuotaInput>
    connectOrCreate?: CuotaCreateOrConnectWithoutLineaDeCuotaInput
    upsert?: CuotaUpsertWithoutLineaDeCuotaInput
    connect?: CuotaWhereUniqueInput
    update?: XOR<XOR<CuotaUpdateToOneWithWhereWithoutLineaDeCuotaInput, CuotaUpdateWithoutLineaDeCuotaInput>, CuotaUncheckedUpdateWithoutLineaDeCuotaInput>
  }

  export type CuotaCreateNestedOneWithoutValorCuotaInput = {
    create?: XOR<CuotaCreateWithoutValorCuotaInput, CuotaUncheckedCreateWithoutValorCuotaInput>
    connectOrCreate?: CuotaCreateOrConnectWithoutValorCuotaInput
    connect?: CuotaWhereUniqueInput
  }

  export type CuotaUpdateOneRequiredWithoutValorCuotaNestedInput = {
    create?: XOR<CuotaCreateWithoutValorCuotaInput, CuotaUncheckedCreateWithoutValorCuotaInput>
    connectOrCreate?: CuotaCreateOrConnectWithoutValorCuotaInput
    upsert?: CuotaUpsertWithoutValorCuotaInput
    connect?: CuotaWhereUniqueInput
    update?: XOR<XOR<CuotaUpdateToOneWithWhereWithoutValorCuotaInput, CuotaUpdateWithoutValorCuotaInput>, CuotaUncheckedUpdateWithoutValorCuotaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CuotaCreateWithoutUsuarioInput = {
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    lineaDeCuota?: LineaDeCuotaCreateNestedManyWithoutCuotaInput
    valorCuota?: ValorCuotaCreateNestedManyWithoutCuotaInput
  }

  export type CuotaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    lineaDeCuota?: LineaDeCuotaUncheckedCreateNestedManyWithoutCuotaInput
    valorCuota?: ValorCuotaUncheckedCreateNestedManyWithoutCuotaInput
  }

  export type CuotaCreateOrConnectWithoutUsuarioInput = {
    where: CuotaWhereUniqueInput
    create: XOR<CuotaCreateWithoutUsuarioInput, CuotaUncheckedCreateWithoutUsuarioInput>
  }

  export type CuotaCreateManyUsuarioInputEnvelope = {
    data: CuotaCreateManyUsuarioInput | CuotaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CuotaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CuotaWhereUniqueInput
    update: XOR<CuotaUpdateWithoutUsuarioInput, CuotaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CuotaCreateWithoutUsuarioInput, CuotaUncheckedCreateWithoutUsuarioInput>
  }

  export type CuotaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CuotaWhereUniqueInput
    data: XOR<CuotaUpdateWithoutUsuarioInput, CuotaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CuotaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CuotaScalarWhereInput
    data: XOR<CuotaUpdateManyMutationInput, CuotaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CuotaScalarWhereInput = {
    AND?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
    OR?: CuotaScalarWhereInput[]
    NOT?: CuotaScalarWhereInput | CuotaScalarWhereInput[]
    id?: IntFilter<"Cuota"> | number
    fechaInicio?: DateTimeFilter<"Cuota"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Cuota"> | Date | string
    montoTotal?: DecimalFilter<"Cuota"> | Decimal | DecimalJsLike | number | string
    idUsuario?: IntFilter<"Cuota"> | number
  }

  export type UsuarioCreateWithoutCuotaInput = {
    nombreUsuario: string
    password: string
    email: string
    nombre: string
    apellido: string
    telefono: string
  }

  export type UsuarioUncheckedCreateWithoutCuotaInput = {
    id?: number
    nombreUsuario: string
    password: string
    email: string
    nombre: string
    apellido: string
    telefono: string
  }

  export type UsuarioCreateOrConnectWithoutCuotaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCuotaInput, UsuarioUncheckedCreateWithoutCuotaInput>
  }

  export type LineaDeCuotaCreateWithoutCuotaInput = {
    id: number
    fechaPago: Date | string
    monto: Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaUncheckedCreateWithoutCuotaInput = {
    id: number
    fechaPago: Date | string
    monto: Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaCreateOrConnectWithoutCuotaInput = {
    where: LineaDeCuotaWhereUniqueInput
    create: XOR<LineaDeCuotaCreateWithoutCuotaInput, LineaDeCuotaUncheckedCreateWithoutCuotaInput>
  }

  export type LineaDeCuotaCreateManyCuotaInputEnvelope = {
    data: LineaDeCuotaCreateManyCuotaInput | LineaDeCuotaCreateManyCuotaInput[]
    skipDuplicates?: boolean
  }

  export type ValorCuotaCreateWithoutCuotaInput = {
    id: number
    precio: Decimal | DecimalJsLike | number | string
    fechaCambio: Date | string
  }

  export type ValorCuotaUncheckedCreateWithoutCuotaInput = {
    id: number
    precio: Decimal | DecimalJsLike | number | string
    fechaCambio: Date | string
  }

  export type ValorCuotaCreateOrConnectWithoutCuotaInput = {
    where: ValorCuotaWhereUniqueInput
    create: XOR<ValorCuotaCreateWithoutCuotaInput, ValorCuotaUncheckedCreateWithoutCuotaInput>
  }

  export type ValorCuotaCreateManyCuotaInputEnvelope = {
    data: ValorCuotaCreateManyCuotaInput | ValorCuotaCreateManyCuotaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCuotaInput = {
    update: XOR<UsuarioUpdateWithoutCuotaInput, UsuarioUncheckedUpdateWithoutCuotaInput>
    create: XOR<UsuarioCreateWithoutCuotaInput, UsuarioUncheckedCreateWithoutCuotaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCuotaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCuotaInput, UsuarioUncheckedUpdateWithoutCuotaInput>
  }

  export type UsuarioUpdateWithoutCuotaInput = {
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
  }

  export type LineaDeCuotaUpsertWithWhereUniqueWithoutCuotaInput = {
    where: LineaDeCuotaWhereUniqueInput
    update: XOR<LineaDeCuotaUpdateWithoutCuotaInput, LineaDeCuotaUncheckedUpdateWithoutCuotaInput>
    create: XOR<LineaDeCuotaCreateWithoutCuotaInput, LineaDeCuotaUncheckedCreateWithoutCuotaInput>
  }

  export type LineaDeCuotaUpdateWithWhereUniqueWithoutCuotaInput = {
    where: LineaDeCuotaWhereUniqueInput
    data: XOR<LineaDeCuotaUpdateWithoutCuotaInput, LineaDeCuotaUncheckedUpdateWithoutCuotaInput>
  }

  export type LineaDeCuotaUpdateManyWithWhereWithoutCuotaInput = {
    where: LineaDeCuotaScalarWhereInput
    data: XOR<LineaDeCuotaUpdateManyMutationInput, LineaDeCuotaUncheckedUpdateManyWithoutCuotaInput>
  }

  export type LineaDeCuotaScalarWhereInput = {
    AND?: LineaDeCuotaScalarWhereInput | LineaDeCuotaScalarWhereInput[]
    OR?: LineaDeCuotaScalarWhereInput[]
    NOT?: LineaDeCuotaScalarWhereInput | LineaDeCuotaScalarWhereInput[]
    id?: IntFilter<"LineaDeCuota"> | number
    idCuota?: IntFilter<"LineaDeCuota"> | number
    fechaPago?: DateTimeFilter<"LineaDeCuota"> | Date | string
    monto?: DecimalFilter<"LineaDeCuota"> | Decimal | DecimalJsLike | number | string
  }

  export type ValorCuotaUpsertWithWhereUniqueWithoutCuotaInput = {
    where: ValorCuotaWhereUniqueInput
    update: XOR<ValorCuotaUpdateWithoutCuotaInput, ValorCuotaUncheckedUpdateWithoutCuotaInput>
    create: XOR<ValorCuotaCreateWithoutCuotaInput, ValorCuotaUncheckedCreateWithoutCuotaInput>
  }

  export type ValorCuotaUpdateWithWhereUniqueWithoutCuotaInput = {
    where: ValorCuotaWhereUniqueInput
    data: XOR<ValorCuotaUpdateWithoutCuotaInput, ValorCuotaUncheckedUpdateWithoutCuotaInput>
  }

  export type ValorCuotaUpdateManyWithWhereWithoutCuotaInput = {
    where: ValorCuotaScalarWhereInput
    data: XOR<ValorCuotaUpdateManyMutationInput, ValorCuotaUncheckedUpdateManyWithoutCuotaInput>
  }

  export type ValorCuotaScalarWhereInput = {
    AND?: ValorCuotaScalarWhereInput | ValorCuotaScalarWhereInput[]
    OR?: ValorCuotaScalarWhereInput[]
    NOT?: ValorCuotaScalarWhereInput | ValorCuotaScalarWhereInput[]
    id?: IntFilter<"ValorCuota"> | number
    idCuota?: IntFilter<"ValorCuota"> | number
    precio?: DecimalFilter<"ValorCuota"> | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFilter<"ValorCuota"> | Date | string
  }

  export type CuotaCreateWithoutLineaDeCuotaInput = {
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutCuotaInput
    valorCuota?: ValorCuotaCreateNestedManyWithoutCuotaInput
  }

  export type CuotaUncheckedCreateWithoutLineaDeCuotaInput = {
    id?: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    idUsuario: number
    valorCuota?: ValorCuotaUncheckedCreateNestedManyWithoutCuotaInput
  }

  export type CuotaCreateOrConnectWithoutLineaDeCuotaInput = {
    where: CuotaWhereUniqueInput
    create: XOR<CuotaCreateWithoutLineaDeCuotaInput, CuotaUncheckedCreateWithoutLineaDeCuotaInput>
  }

  export type CuotaUpsertWithoutLineaDeCuotaInput = {
    update: XOR<CuotaUpdateWithoutLineaDeCuotaInput, CuotaUncheckedUpdateWithoutLineaDeCuotaInput>
    create: XOR<CuotaCreateWithoutLineaDeCuotaInput, CuotaUncheckedCreateWithoutLineaDeCuotaInput>
    where?: CuotaWhereInput
  }

  export type CuotaUpdateToOneWithWhereWithoutLineaDeCuotaInput = {
    where?: CuotaWhereInput
    data: XOR<CuotaUpdateWithoutLineaDeCuotaInput, CuotaUncheckedUpdateWithoutLineaDeCuotaInput>
  }

  export type CuotaUpdateWithoutLineaDeCuotaInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutCuotaNestedInput
    valorCuota?: ValorCuotaUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateWithoutLineaDeCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idUsuario?: IntFieldUpdateOperationsInput | number
    valorCuota?: ValorCuotaUncheckedUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaCreateWithoutValorCuotaInput = {
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutCuotaInput
    lineaDeCuota?: LineaDeCuotaCreateNestedManyWithoutCuotaInput
  }

  export type CuotaUncheckedCreateWithoutValorCuotaInput = {
    id?: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    idUsuario: number
    lineaDeCuota?: LineaDeCuotaUncheckedCreateNestedManyWithoutCuotaInput
  }

  export type CuotaCreateOrConnectWithoutValorCuotaInput = {
    where: CuotaWhereUniqueInput
    create: XOR<CuotaCreateWithoutValorCuotaInput, CuotaUncheckedCreateWithoutValorCuotaInput>
  }

  export type CuotaUpsertWithoutValorCuotaInput = {
    update: XOR<CuotaUpdateWithoutValorCuotaInput, CuotaUncheckedUpdateWithoutValorCuotaInput>
    create: XOR<CuotaCreateWithoutValorCuotaInput, CuotaUncheckedCreateWithoutValorCuotaInput>
    where?: CuotaWhereInput
  }

  export type CuotaUpdateToOneWithWhereWithoutValorCuotaInput = {
    where?: CuotaWhereInput
    data: XOR<CuotaUpdateWithoutValorCuotaInput, CuotaUncheckedUpdateWithoutValorCuotaInput>
  }

  export type CuotaUpdateWithoutValorCuotaInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutCuotaNestedInput
    lineaDeCuota?: LineaDeCuotaUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateWithoutValorCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    idUsuario?: IntFieldUpdateOperationsInput | number
    lineaDeCuota?: LineaDeCuotaUncheckedUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaCreateManyUsuarioInput = {
    id?: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
  }

  export type CuotaUpdateWithoutUsuarioInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lineaDeCuota?: LineaDeCuotaUpdateManyWithoutCuotaNestedInput
    valorCuota?: ValorCuotaUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lineaDeCuota?: LineaDeCuotaUncheckedUpdateManyWithoutCuotaNestedInput
    valorCuota?: ValorCuotaUncheckedUpdateManyWithoutCuotaNestedInput
  }

  export type CuotaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaCreateManyCuotaInput = {
    id: number
    fechaPago: Date | string
    monto: Decimal | DecimalJsLike | number | string
  }

  export type ValorCuotaCreateManyCuotaInput = {
    id: number
    precio: Decimal | DecimalJsLike | number | string
    fechaCambio: Date | string
  }

  export type LineaDeCuotaUpdateWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaUncheckedUpdateWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaDeCuotaUncheckedUpdateManyWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ValorCuotaUpdateWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValorCuotaUncheckedUpdateWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValorCuotaUncheckedUpdateManyWithoutCuotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}