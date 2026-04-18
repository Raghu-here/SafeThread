
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model MemoryCard
 * 
 */
export type MemoryCard = $Result.DefaultSelection<Prisma.$MemoryCardPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model MemoryCardTag
 * 
 */
export type MemoryCardTag = $Result.DefaultSelection<Prisma.$MemoryCardTagPayload>
/**
 * Model MemoryAttachment
 * 
 */
export type MemoryAttachment = $Result.DefaultSelection<Prisma.$MemoryAttachmentPayload>
/**
 * Model Timeline
 * 
 */
export type Timeline = $Result.DefaultSelection<Prisma.$TimelinePayload>
/**
 * Model TimelineEntry
 * 
 */
export type TimelineEntry = $Result.DefaultSelection<Prisma.$TimelineEntryPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.memoryCard`: Exposes CRUD operations for the **MemoryCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemoryCards
    * const memoryCards = await prisma.memoryCard.findMany()
    * ```
    */
  get memoryCard(): Prisma.MemoryCardDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.memoryCardTag`: Exposes CRUD operations for the **MemoryCardTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemoryCardTags
    * const memoryCardTags = await prisma.memoryCardTag.findMany()
    * ```
    */
  get memoryCardTag(): Prisma.MemoryCardTagDelegate<ExtArgs>;

  /**
   * `prisma.memoryAttachment`: Exposes CRUD operations for the **MemoryAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemoryAttachments
    * const memoryAttachments = await prisma.memoryAttachment.findMany()
    * ```
    */
  get memoryAttachment(): Prisma.MemoryAttachmentDelegate<ExtArgs>;

  /**
   * `prisma.timeline`: Exposes CRUD operations for the **Timeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timelines
    * const timelines = await prisma.timeline.findMany()
    * ```
    */
  get timeline(): Prisma.TimelineDelegate<ExtArgs>;

  /**
   * `prisma.timelineEntry`: Exposes CRUD operations for the **TimelineEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimelineEntries
    * const timelineEntries = await prisma.timelineEntry.findMany()
    * ```
    */
  get timelineEntry(): Prisma.TimelineEntryDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    RefreshToken: 'RefreshToken',
    MemoryCard: 'MemoryCard',
    Tag: 'Tag',
    MemoryCardTag: 'MemoryCardTag',
    MemoryAttachment: 'MemoryAttachment',
    Timeline: 'Timeline',
    TimelineEntry: 'TimelineEntry',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "refreshToken" | "memoryCard" | "tag" | "memoryCardTag" | "memoryAttachment" | "timeline" | "timelineEntry" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      MemoryCard: {
        payload: Prisma.$MemoryCardPayload<ExtArgs>
        fields: Prisma.MemoryCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>
          }
          findFirst: {
            args: Prisma.MemoryCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>
          }
          findMany: {
            args: Prisma.MemoryCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>[]
          }
          create: {
            args: Prisma.MemoryCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>
          }
          createMany: {
            args: Prisma.MemoryCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemoryCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>[]
          }
          delete: {
            args: Prisma.MemoryCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>
          }
          update: {
            args: Prisma.MemoryCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>
          }
          deleteMany: {
            args: Prisma.MemoryCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemoryCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardPayload>
          }
          aggregate: {
            args: Prisma.MemoryCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoryCard>
          }
          groupBy: {
            args: Prisma.MemoryCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryCardCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryCardCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      MemoryCardTag: {
        payload: Prisma.$MemoryCardTagPayload<ExtArgs>
        fields: Prisma.MemoryCardTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryCardTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryCardTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>
          }
          findFirst: {
            args: Prisma.MemoryCardTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryCardTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>
          }
          findMany: {
            args: Prisma.MemoryCardTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>[]
          }
          create: {
            args: Prisma.MemoryCardTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>
          }
          createMany: {
            args: Prisma.MemoryCardTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemoryCardTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>[]
          }
          delete: {
            args: Prisma.MemoryCardTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>
          }
          update: {
            args: Prisma.MemoryCardTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>
          }
          deleteMany: {
            args: Prisma.MemoryCardTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryCardTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemoryCardTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryCardTagPayload>
          }
          aggregate: {
            args: Prisma.MemoryCardTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoryCardTag>
          }
          groupBy: {
            args: Prisma.MemoryCardTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryCardTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryCardTagCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryCardTagCountAggregateOutputType> | number
          }
        }
      }
      MemoryAttachment: {
        payload: Prisma.$MemoryAttachmentPayload<ExtArgs>
        fields: Prisma.MemoryAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemoryAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemoryAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>
          }
          findFirst: {
            args: Prisma.MemoryAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemoryAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>
          }
          findMany: {
            args: Prisma.MemoryAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>[]
          }
          create: {
            args: Prisma.MemoryAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>
          }
          createMany: {
            args: Prisma.MemoryAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemoryAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>[]
          }
          delete: {
            args: Prisma.MemoryAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>
          }
          update: {
            args: Prisma.MemoryAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.MemoryAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemoryAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemoryAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemoryAttachmentPayload>
          }
          aggregate: {
            args: Prisma.MemoryAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemoryAttachment>
          }
          groupBy: {
            args: Prisma.MemoryAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemoryAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemoryAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<MemoryAttachmentCountAggregateOutputType> | number
          }
        }
      }
      Timeline: {
        payload: Prisma.$TimelinePayload<ExtArgs>
        fields: Prisma.TimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findFirst: {
            args: Prisma.TimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          findMany: {
            args: Prisma.TimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          create: {
            args: Prisma.TimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          createMany: {
            args: Prisma.TimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>[]
          }
          delete: {
            args: Prisma.TimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          update: {
            args: Prisma.TimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          deleteMany: {
            args: Prisma.TimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelinePayload>
          }
          aggregate: {
            args: Prisma.TimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeline>
          }
          groupBy: {
            args: Prisma.TimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineCountAggregateOutputType> | number
          }
        }
      }
      TimelineEntry: {
        payload: Prisma.$TimelineEntryPayload<ExtArgs>
        fields: Prisma.TimelineEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimelineEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimelineEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          findFirst: {
            args: Prisma.TimelineEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimelineEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          findMany: {
            args: Prisma.TimelineEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>[]
          }
          create: {
            args: Prisma.TimelineEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          createMany: {
            args: Prisma.TimelineEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimelineEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>[]
          }
          delete: {
            args: Prisma.TimelineEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          update: {
            args: Prisma.TimelineEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimelineEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimelineEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimelineEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimelineEntryPayload>
          }
          aggregate: {
            args: Prisma.TimelineEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimelineEntry>
          }
          groupBy: {
            args: Prisma.TimelineEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimelineEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimelineEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimelineEntryCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memories: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memories?: boolean | UserCountOutputTypeCountMemoriesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type MemoryCardCountOutputType
   */

  export type MemoryCardCountOutputType = {
    tags: number
    attachments: number
  }

  export type MemoryCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | MemoryCardCountOutputTypeCountTagsArgs
    attachments?: boolean | MemoryCardCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * MemoryCardCountOutputType without action
   */
  export type MemoryCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardCountOutputType
     */
    select?: MemoryCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemoryCardCountOutputType without action
   */
  export type MemoryCardCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryCardTagWhereInput
  }

  /**
   * MemoryCardCountOutputType without action
   */
  export type MemoryCardCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryAttachmentWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    memories: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memories?: boolean | TagCountOutputTypeCountMemoriesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountMemoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryCardTagWhereInput
  }


  /**
   * Count Type TimelineCountOutputType
   */

  export type TimelineCountOutputType = {
    entries: number
  }

  export type TimelineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | TimelineCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * TimelineCountOutputType without action
   */
  export type TimelineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineCountOutputType
     */
    select?: TimelineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimelineCountOutputType without action
   */
  export type TimelineCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memories?: boolean | User$memoriesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memories?: boolean | User$memoriesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memories: Prisma.$MemoryCardPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memories<T extends User$memoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findMany"> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.memories
   */
  export type User$memoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    where?: MemoryCardWhereInput
    orderBy?: MemoryCardOrderByWithRelationInput | MemoryCardOrderByWithRelationInput[]
    cursor?: MemoryCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryCardScalarFieldEnum | MemoryCardScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model MemoryCard
   */

  export type AggregateMemoryCard = {
    _count: MemoryCardCountAggregateOutputType | null
    _min: MemoryCardMinAggregateOutputType | null
    _max: MemoryCardMaxAggregateOutputType | null
  }

  export type MemoryCardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    eventDate: Date | null
    eventTime: string | null
    dateConfidence: string | null
    submittedAt: Date | null
    isSuperseded: boolean | null
    supersedesId: string | null
    hash: string | null
    audioData: string | null
  }

  export type MemoryCardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    eventDate: Date | null
    eventTime: string | null
    dateConfidence: string | null
    submittedAt: Date | null
    isSuperseded: boolean | null
    supersedesId: string | null
    hash: string | null
    audioData: string | null
  }

  export type MemoryCardCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    eventDate: number
    eventTime: number
    dateConfidence: number
    submittedAt: number
    isSuperseded: number
    supersedesId: number
    hash: number
    audioData: number
    _all: number
  }


  export type MemoryCardMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    eventDate?: true
    eventTime?: true
    dateConfidence?: true
    submittedAt?: true
    isSuperseded?: true
    supersedesId?: true
    hash?: true
    audioData?: true
  }

  export type MemoryCardMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    eventDate?: true
    eventTime?: true
    dateConfidence?: true
    submittedAt?: true
    isSuperseded?: true
    supersedesId?: true
    hash?: true
    audioData?: true
  }

  export type MemoryCardCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    eventDate?: true
    eventTime?: true
    dateConfidence?: true
    submittedAt?: true
    isSuperseded?: true
    supersedesId?: true
    hash?: true
    audioData?: true
    _all?: true
  }

  export type MemoryCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryCard to aggregate.
     */
    where?: MemoryCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCards to fetch.
     */
    orderBy?: MemoryCardOrderByWithRelationInput | MemoryCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemoryCards
    **/
    _count?: true | MemoryCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryCardMaxAggregateInputType
  }

  export type GetMemoryCardAggregateType<T extends MemoryCardAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoryCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoryCard[P]>
      : GetScalarType<T[P], AggregateMemoryCard[P]>
  }




  export type MemoryCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryCardWhereInput
    orderBy?: MemoryCardOrderByWithAggregationInput | MemoryCardOrderByWithAggregationInput[]
    by: MemoryCardScalarFieldEnum[] | MemoryCardScalarFieldEnum
    having?: MemoryCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryCardCountAggregateInputType | true
    _min?: MemoryCardMinAggregateInputType
    _max?: MemoryCardMaxAggregateInputType
  }

  export type MemoryCardGroupByOutputType = {
    id: string
    userId: string
    content: string
    eventDate: Date | null
    eventTime: string | null
    dateConfidence: string
    submittedAt: Date
    isSuperseded: boolean
    supersedesId: string | null
    hash: string
    audioData: string | null
    _count: MemoryCardCountAggregateOutputType | null
    _min: MemoryCardMinAggregateOutputType | null
    _max: MemoryCardMaxAggregateOutputType | null
  }

  type GetMemoryCardGroupByPayload<T extends MemoryCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryCardGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryCardGroupByOutputType[P]>
        }
      >
    >


  export type MemoryCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    eventDate?: boolean
    eventTime?: boolean
    dateConfidence?: boolean
    submittedAt?: boolean
    isSuperseded?: boolean
    supersedesId?: boolean
    hash?: boolean
    audioData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    supersedes?: boolean | MemoryCard$supersedesArgs<ExtArgs>
    supersededBy?: boolean | MemoryCard$supersededByArgs<ExtArgs>
    tags?: boolean | MemoryCard$tagsArgs<ExtArgs>
    attachments?: boolean | MemoryCard$attachmentsArgs<ExtArgs>
    timelineEntry?: boolean | MemoryCard$timelineEntryArgs<ExtArgs>
    _count?: boolean | MemoryCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryCard"]>

  export type MemoryCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    eventDate?: boolean
    eventTime?: boolean
    dateConfidence?: boolean
    submittedAt?: boolean
    isSuperseded?: boolean
    supersedesId?: boolean
    hash?: boolean
    audioData?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    supersedes?: boolean | MemoryCard$supersedesArgs<ExtArgs>
  }, ExtArgs["result"]["memoryCard"]>

  export type MemoryCardSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    eventDate?: boolean
    eventTime?: boolean
    dateConfidence?: boolean
    submittedAt?: boolean
    isSuperseded?: boolean
    supersedesId?: boolean
    hash?: boolean
    audioData?: boolean
  }

  export type MemoryCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    supersedes?: boolean | MemoryCard$supersedesArgs<ExtArgs>
    supersededBy?: boolean | MemoryCard$supersededByArgs<ExtArgs>
    tags?: boolean | MemoryCard$tagsArgs<ExtArgs>
    attachments?: boolean | MemoryCard$attachmentsArgs<ExtArgs>
    timelineEntry?: boolean | MemoryCard$timelineEntryArgs<ExtArgs>
    _count?: boolean | MemoryCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemoryCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    supersedes?: boolean | MemoryCard$supersedesArgs<ExtArgs>
  }

  export type $MemoryCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemoryCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      supersedes: Prisma.$MemoryCardPayload<ExtArgs> | null
      supersededBy: Prisma.$MemoryCardPayload<ExtArgs> | null
      tags: Prisma.$MemoryCardTagPayload<ExtArgs>[]
      attachments: Prisma.$MemoryAttachmentPayload<ExtArgs>[]
      timelineEntry: Prisma.$TimelineEntryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      eventDate: Date | null
      eventTime: string | null
      dateConfidence: string
      submittedAt: Date
      isSuperseded: boolean
      supersedesId: string | null
      hash: string
      audioData: string | null
    }, ExtArgs["result"]["memoryCard"]>
    composites: {}
  }

  type MemoryCardGetPayload<S extends boolean | null | undefined | MemoryCardDefaultArgs> = $Result.GetResult<Prisma.$MemoryCardPayload, S>

  type MemoryCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemoryCardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemoryCardCountAggregateInputType | true
    }

  export interface MemoryCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemoryCard'], meta: { name: 'MemoryCard' } }
    /**
     * Find zero or one MemoryCard that matches the filter.
     * @param {MemoryCardFindUniqueArgs} args - Arguments to find a MemoryCard
     * @example
     * // Get one MemoryCard
     * const memoryCard = await prisma.memoryCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryCardFindUniqueArgs>(args: SelectSubset<T, MemoryCardFindUniqueArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MemoryCard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemoryCardFindUniqueOrThrowArgs} args - Arguments to find a MemoryCard
     * @example
     * // Get one MemoryCard
     * const memoryCard = await prisma.memoryCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryCardFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MemoryCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardFindFirstArgs} args - Arguments to find a MemoryCard
     * @example
     * // Get one MemoryCard
     * const memoryCard = await prisma.memoryCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryCardFindFirstArgs>(args?: SelectSubset<T, MemoryCardFindFirstArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MemoryCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardFindFirstOrThrowArgs} args - Arguments to find a MemoryCard
     * @example
     * // Get one MemoryCard
     * const memoryCard = await prisma.memoryCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryCardFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MemoryCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemoryCards
     * const memoryCards = await prisma.memoryCard.findMany()
     * 
     * // Get first 10 MemoryCards
     * const memoryCards = await prisma.memoryCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryCardWithIdOnly = await prisma.memoryCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemoryCardFindManyArgs>(args?: SelectSubset<T, MemoryCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MemoryCard.
     * @param {MemoryCardCreateArgs} args - Arguments to create a MemoryCard.
     * @example
     * // Create one MemoryCard
     * const MemoryCard = await prisma.memoryCard.create({
     *   data: {
     *     // ... data to create a MemoryCard
     *   }
     * })
     * 
     */
    create<T extends MemoryCardCreateArgs>(args: SelectSubset<T, MemoryCardCreateArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MemoryCards.
     * @param {MemoryCardCreateManyArgs} args - Arguments to create many MemoryCards.
     * @example
     * // Create many MemoryCards
     * const memoryCard = await prisma.memoryCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemoryCardCreateManyArgs>(args?: SelectSubset<T, MemoryCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemoryCards and returns the data saved in the database.
     * @param {MemoryCardCreateManyAndReturnArgs} args - Arguments to create many MemoryCards.
     * @example
     * // Create many MemoryCards
     * const memoryCard = await prisma.memoryCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemoryCards and only return the `id`
     * const memoryCardWithIdOnly = await prisma.memoryCard.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemoryCardCreateManyAndReturnArgs>(args?: SelectSubset<T, MemoryCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MemoryCard.
     * @param {MemoryCardDeleteArgs} args - Arguments to delete one MemoryCard.
     * @example
     * // Delete one MemoryCard
     * const MemoryCard = await prisma.memoryCard.delete({
     *   where: {
     *     // ... filter to delete one MemoryCard
     *   }
     * })
     * 
     */
    delete<T extends MemoryCardDeleteArgs>(args: SelectSubset<T, MemoryCardDeleteArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MemoryCard.
     * @param {MemoryCardUpdateArgs} args - Arguments to update one MemoryCard.
     * @example
     * // Update one MemoryCard
     * const memoryCard = await prisma.memoryCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryCardUpdateArgs>(args: SelectSubset<T, MemoryCardUpdateArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MemoryCards.
     * @param {MemoryCardDeleteManyArgs} args - Arguments to filter MemoryCards to delete.
     * @example
     * // Delete a few MemoryCards
     * const { count } = await prisma.memoryCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryCardDeleteManyArgs>(args?: SelectSubset<T, MemoryCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemoryCards
     * const memoryCard = await prisma.memoryCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryCardUpdateManyArgs>(args: SelectSubset<T, MemoryCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemoryCard.
     * @param {MemoryCardUpsertArgs} args - Arguments to update or create a MemoryCard.
     * @example
     * // Update or create a MemoryCard
     * const memoryCard = await prisma.memoryCard.upsert({
     *   create: {
     *     // ... data to create a MemoryCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemoryCard we want to update
     *   }
     * })
     */
    upsert<T extends MemoryCardUpsertArgs>(args: SelectSubset<T, MemoryCardUpsertArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MemoryCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardCountArgs} args - Arguments to filter MemoryCards to count.
     * @example
     * // Count the number of MemoryCards
     * const count = await prisma.memoryCard.count({
     *   where: {
     *     // ... the filter for the MemoryCards we want to count
     *   }
     * })
    **/
    count<T extends MemoryCardCountArgs>(
      args?: Subset<T, MemoryCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemoryCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemoryCardAggregateArgs>(args: Subset<T, MemoryCardAggregateArgs>): Prisma.PrismaPromise<GetMemoryCardAggregateType<T>>

    /**
     * Group by MemoryCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardGroupByArgs} args - Group by arguments.
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
      T extends MemoryCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryCardGroupByArgs['orderBy'] }
        : { orderBy?: MemoryCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemoryCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemoryCard model
   */
  readonly fields: MemoryCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemoryCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supersedes<T extends MemoryCard$supersedesArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCard$supersedesArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    supersededBy<T extends MemoryCard$supersededByArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCard$supersededByArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    tags<T extends MemoryCard$tagsArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCard$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "findMany"> | Null>
    attachments<T extends MemoryCard$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCard$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "findMany"> | Null>
    timelineEntry<T extends MemoryCard$timelineEntryArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCard$timelineEntryArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the MemoryCard model
   */ 
  interface MemoryCardFieldRefs {
    readonly id: FieldRef<"MemoryCard", 'String'>
    readonly userId: FieldRef<"MemoryCard", 'String'>
    readonly content: FieldRef<"MemoryCard", 'String'>
    readonly eventDate: FieldRef<"MemoryCard", 'DateTime'>
    readonly eventTime: FieldRef<"MemoryCard", 'String'>
    readonly dateConfidence: FieldRef<"MemoryCard", 'String'>
    readonly submittedAt: FieldRef<"MemoryCard", 'DateTime'>
    readonly isSuperseded: FieldRef<"MemoryCard", 'Boolean'>
    readonly supersedesId: FieldRef<"MemoryCard", 'String'>
    readonly hash: FieldRef<"MemoryCard", 'String'>
    readonly audioData: FieldRef<"MemoryCard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemoryCard findUnique
   */
  export type MemoryCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCard to fetch.
     */
    where: MemoryCardWhereUniqueInput
  }

  /**
   * MemoryCard findUniqueOrThrow
   */
  export type MemoryCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCard to fetch.
     */
    where: MemoryCardWhereUniqueInput
  }

  /**
   * MemoryCard findFirst
   */
  export type MemoryCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCard to fetch.
     */
    where?: MemoryCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCards to fetch.
     */
    orderBy?: MemoryCardOrderByWithRelationInput | MemoryCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryCards.
     */
    cursor?: MemoryCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryCards.
     */
    distinct?: MemoryCardScalarFieldEnum | MemoryCardScalarFieldEnum[]
  }

  /**
   * MemoryCard findFirstOrThrow
   */
  export type MemoryCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCard to fetch.
     */
    where?: MemoryCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCards to fetch.
     */
    orderBy?: MemoryCardOrderByWithRelationInput | MemoryCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryCards.
     */
    cursor?: MemoryCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryCards.
     */
    distinct?: MemoryCardScalarFieldEnum | MemoryCardScalarFieldEnum[]
  }

  /**
   * MemoryCard findMany
   */
  export type MemoryCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCards to fetch.
     */
    where?: MemoryCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCards to fetch.
     */
    orderBy?: MemoryCardOrderByWithRelationInput | MemoryCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemoryCards.
     */
    cursor?: MemoryCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCards.
     */
    skip?: number
    distinct?: MemoryCardScalarFieldEnum | MemoryCardScalarFieldEnum[]
  }

  /**
   * MemoryCard create
   */
  export type MemoryCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * The data needed to create a MemoryCard.
     */
    data: XOR<MemoryCardCreateInput, MemoryCardUncheckedCreateInput>
  }

  /**
   * MemoryCard createMany
   */
  export type MemoryCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemoryCards.
     */
    data: MemoryCardCreateManyInput | MemoryCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemoryCard createManyAndReturn
   */
  export type MemoryCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MemoryCards.
     */
    data: MemoryCardCreateManyInput | MemoryCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemoryCard update
   */
  export type MemoryCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * The data needed to update a MemoryCard.
     */
    data: XOR<MemoryCardUpdateInput, MemoryCardUncheckedUpdateInput>
    /**
     * Choose, which MemoryCard to update.
     */
    where: MemoryCardWhereUniqueInput
  }

  /**
   * MemoryCard updateMany
   */
  export type MemoryCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemoryCards.
     */
    data: XOR<MemoryCardUpdateManyMutationInput, MemoryCardUncheckedUpdateManyInput>
    /**
     * Filter which MemoryCards to update
     */
    where?: MemoryCardWhereInput
  }

  /**
   * MemoryCard upsert
   */
  export type MemoryCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * The filter to search for the MemoryCard to update in case it exists.
     */
    where: MemoryCardWhereUniqueInput
    /**
     * In case the MemoryCard found by the `where` argument doesn't exist, create a new MemoryCard with this data.
     */
    create: XOR<MemoryCardCreateInput, MemoryCardUncheckedCreateInput>
    /**
     * In case the MemoryCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoryCardUpdateInput, MemoryCardUncheckedUpdateInput>
  }

  /**
   * MemoryCard delete
   */
  export type MemoryCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    /**
     * Filter which MemoryCard to delete.
     */
    where: MemoryCardWhereUniqueInput
  }

  /**
   * MemoryCard deleteMany
   */
  export type MemoryCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryCards to delete
     */
    where?: MemoryCardWhereInput
  }

  /**
   * MemoryCard.supersedes
   */
  export type MemoryCard$supersedesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    where?: MemoryCardWhereInput
  }

  /**
   * MemoryCard.supersededBy
   */
  export type MemoryCard$supersededByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
    where?: MemoryCardWhereInput
  }

  /**
   * MemoryCard.tags
   */
  export type MemoryCard$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    where?: MemoryCardTagWhereInput
    orderBy?: MemoryCardTagOrderByWithRelationInput | MemoryCardTagOrderByWithRelationInput[]
    cursor?: MemoryCardTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryCardTagScalarFieldEnum | MemoryCardTagScalarFieldEnum[]
  }

  /**
   * MemoryCard.attachments
   */
  export type MemoryCard$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    where?: MemoryAttachmentWhereInput
    orderBy?: MemoryAttachmentOrderByWithRelationInput | MemoryAttachmentOrderByWithRelationInput[]
    cursor?: MemoryAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryAttachmentScalarFieldEnum | MemoryAttachmentScalarFieldEnum[]
  }

  /**
   * MemoryCard.timelineEntry
   */
  export type MemoryCard$timelineEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    where?: TimelineEntryWhereInput
  }

  /**
   * MemoryCard without action
   */
  export type MemoryCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCard
     */
    select?: MemoryCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    type: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    type: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    memories?: boolean | Tag$memoriesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memories?: boolean | Tag$memoriesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      memories: Prisma.$MemoryCardTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memories<T extends Tag$memoriesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly type: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.memories
   */
  export type Tag$memoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    where?: MemoryCardTagWhereInput
    orderBy?: MemoryCardTagOrderByWithRelationInput | MemoryCardTagOrderByWithRelationInput[]
    cursor?: MemoryCardTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemoryCardTagScalarFieldEnum | MemoryCardTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model MemoryCardTag
   */

  export type AggregateMemoryCardTag = {
    _count: MemoryCardTagCountAggregateOutputType | null
    _min: MemoryCardTagMinAggregateOutputType | null
    _max: MemoryCardTagMaxAggregateOutputType | null
  }

  export type MemoryCardTagMinAggregateOutputType = {
    memoryCardId: string | null
    tagId: string | null
  }

  export type MemoryCardTagMaxAggregateOutputType = {
    memoryCardId: string | null
    tagId: string | null
  }

  export type MemoryCardTagCountAggregateOutputType = {
    memoryCardId: number
    tagId: number
    _all: number
  }


  export type MemoryCardTagMinAggregateInputType = {
    memoryCardId?: true
    tagId?: true
  }

  export type MemoryCardTagMaxAggregateInputType = {
    memoryCardId?: true
    tagId?: true
  }

  export type MemoryCardTagCountAggregateInputType = {
    memoryCardId?: true
    tagId?: true
    _all?: true
  }

  export type MemoryCardTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryCardTag to aggregate.
     */
    where?: MemoryCardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCardTags to fetch.
     */
    orderBy?: MemoryCardTagOrderByWithRelationInput | MemoryCardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryCardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCardTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemoryCardTags
    **/
    _count?: true | MemoryCardTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryCardTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryCardTagMaxAggregateInputType
  }

  export type GetMemoryCardTagAggregateType<T extends MemoryCardTagAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoryCardTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoryCardTag[P]>
      : GetScalarType<T[P], AggregateMemoryCardTag[P]>
  }




  export type MemoryCardTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryCardTagWhereInput
    orderBy?: MemoryCardTagOrderByWithAggregationInput | MemoryCardTagOrderByWithAggregationInput[]
    by: MemoryCardTagScalarFieldEnum[] | MemoryCardTagScalarFieldEnum
    having?: MemoryCardTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryCardTagCountAggregateInputType | true
    _min?: MemoryCardTagMinAggregateInputType
    _max?: MemoryCardTagMaxAggregateInputType
  }

  export type MemoryCardTagGroupByOutputType = {
    memoryCardId: string
    tagId: string
    _count: MemoryCardTagCountAggregateOutputType | null
    _min: MemoryCardTagMinAggregateOutputType | null
    _max: MemoryCardTagMaxAggregateOutputType | null
  }

  type GetMemoryCardTagGroupByPayload<T extends MemoryCardTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryCardTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryCardTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryCardTagGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryCardTagGroupByOutputType[P]>
        }
      >
    >


  export type MemoryCardTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memoryCardId?: boolean
    tagId?: boolean
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryCardTag"]>

  export type MemoryCardTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    memoryCardId?: boolean
    tagId?: boolean
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryCardTag"]>

  export type MemoryCardTagSelectScalar = {
    memoryCardId?: boolean
    tagId?: boolean
  }

  export type MemoryCardTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type MemoryCardTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $MemoryCardTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemoryCardTag"
    objects: {
      memoryCard: Prisma.$MemoryCardPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      memoryCardId: string
      tagId: string
    }, ExtArgs["result"]["memoryCardTag"]>
    composites: {}
  }

  type MemoryCardTagGetPayload<S extends boolean | null | undefined | MemoryCardTagDefaultArgs> = $Result.GetResult<Prisma.$MemoryCardTagPayload, S>

  type MemoryCardTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemoryCardTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemoryCardTagCountAggregateInputType | true
    }

  export interface MemoryCardTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemoryCardTag'], meta: { name: 'MemoryCardTag' } }
    /**
     * Find zero or one MemoryCardTag that matches the filter.
     * @param {MemoryCardTagFindUniqueArgs} args - Arguments to find a MemoryCardTag
     * @example
     * // Get one MemoryCardTag
     * const memoryCardTag = await prisma.memoryCardTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryCardTagFindUniqueArgs>(args: SelectSubset<T, MemoryCardTagFindUniqueArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MemoryCardTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemoryCardTagFindUniqueOrThrowArgs} args - Arguments to find a MemoryCardTag
     * @example
     * // Get one MemoryCardTag
     * const memoryCardTag = await prisma.memoryCardTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryCardTagFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryCardTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MemoryCardTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardTagFindFirstArgs} args - Arguments to find a MemoryCardTag
     * @example
     * // Get one MemoryCardTag
     * const memoryCardTag = await prisma.memoryCardTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryCardTagFindFirstArgs>(args?: SelectSubset<T, MemoryCardTagFindFirstArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MemoryCardTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardTagFindFirstOrThrowArgs} args - Arguments to find a MemoryCardTag
     * @example
     * // Get one MemoryCardTag
     * const memoryCardTag = await prisma.memoryCardTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryCardTagFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryCardTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MemoryCardTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemoryCardTags
     * const memoryCardTags = await prisma.memoryCardTag.findMany()
     * 
     * // Get first 10 MemoryCardTags
     * const memoryCardTags = await prisma.memoryCardTag.findMany({ take: 10 })
     * 
     * // Only select the `memoryCardId`
     * const memoryCardTagWithMemoryCardIdOnly = await prisma.memoryCardTag.findMany({ select: { memoryCardId: true } })
     * 
     */
    findMany<T extends MemoryCardTagFindManyArgs>(args?: SelectSubset<T, MemoryCardTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MemoryCardTag.
     * @param {MemoryCardTagCreateArgs} args - Arguments to create a MemoryCardTag.
     * @example
     * // Create one MemoryCardTag
     * const MemoryCardTag = await prisma.memoryCardTag.create({
     *   data: {
     *     // ... data to create a MemoryCardTag
     *   }
     * })
     * 
     */
    create<T extends MemoryCardTagCreateArgs>(args: SelectSubset<T, MemoryCardTagCreateArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MemoryCardTags.
     * @param {MemoryCardTagCreateManyArgs} args - Arguments to create many MemoryCardTags.
     * @example
     * // Create many MemoryCardTags
     * const memoryCardTag = await prisma.memoryCardTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemoryCardTagCreateManyArgs>(args?: SelectSubset<T, MemoryCardTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemoryCardTags and returns the data saved in the database.
     * @param {MemoryCardTagCreateManyAndReturnArgs} args - Arguments to create many MemoryCardTags.
     * @example
     * // Create many MemoryCardTags
     * const memoryCardTag = await prisma.memoryCardTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemoryCardTags and only return the `memoryCardId`
     * const memoryCardTagWithMemoryCardIdOnly = await prisma.memoryCardTag.createManyAndReturn({ 
     *   select: { memoryCardId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemoryCardTagCreateManyAndReturnArgs>(args?: SelectSubset<T, MemoryCardTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MemoryCardTag.
     * @param {MemoryCardTagDeleteArgs} args - Arguments to delete one MemoryCardTag.
     * @example
     * // Delete one MemoryCardTag
     * const MemoryCardTag = await prisma.memoryCardTag.delete({
     *   where: {
     *     // ... filter to delete one MemoryCardTag
     *   }
     * })
     * 
     */
    delete<T extends MemoryCardTagDeleteArgs>(args: SelectSubset<T, MemoryCardTagDeleteArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MemoryCardTag.
     * @param {MemoryCardTagUpdateArgs} args - Arguments to update one MemoryCardTag.
     * @example
     * // Update one MemoryCardTag
     * const memoryCardTag = await prisma.memoryCardTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryCardTagUpdateArgs>(args: SelectSubset<T, MemoryCardTagUpdateArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MemoryCardTags.
     * @param {MemoryCardTagDeleteManyArgs} args - Arguments to filter MemoryCardTags to delete.
     * @example
     * // Delete a few MemoryCardTags
     * const { count } = await prisma.memoryCardTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryCardTagDeleteManyArgs>(args?: SelectSubset<T, MemoryCardTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryCardTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemoryCardTags
     * const memoryCardTag = await prisma.memoryCardTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryCardTagUpdateManyArgs>(args: SelectSubset<T, MemoryCardTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemoryCardTag.
     * @param {MemoryCardTagUpsertArgs} args - Arguments to update or create a MemoryCardTag.
     * @example
     * // Update or create a MemoryCardTag
     * const memoryCardTag = await prisma.memoryCardTag.upsert({
     *   create: {
     *     // ... data to create a MemoryCardTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemoryCardTag we want to update
     *   }
     * })
     */
    upsert<T extends MemoryCardTagUpsertArgs>(args: SelectSubset<T, MemoryCardTagUpsertArgs<ExtArgs>>): Prisma__MemoryCardTagClient<$Result.GetResult<Prisma.$MemoryCardTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MemoryCardTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardTagCountArgs} args - Arguments to filter MemoryCardTags to count.
     * @example
     * // Count the number of MemoryCardTags
     * const count = await prisma.memoryCardTag.count({
     *   where: {
     *     // ... the filter for the MemoryCardTags we want to count
     *   }
     * })
    **/
    count<T extends MemoryCardTagCountArgs>(
      args?: Subset<T, MemoryCardTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryCardTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemoryCardTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemoryCardTagAggregateArgs>(args: Subset<T, MemoryCardTagAggregateArgs>): Prisma.PrismaPromise<GetMemoryCardTagAggregateType<T>>

    /**
     * Group by MemoryCardTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryCardTagGroupByArgs} args - Group by arguments.
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
      T extends MemoryCardTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryCardTagGroupByArgs['orderBy'] }
        : { orderBy?: MemoryCardTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemoryCardTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryCardTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemoryCardTag model
   */
  readonly fields: MemoryCardTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemoryCardTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryCardTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memoryCard<T extends MemoryCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCardDefaultArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MemoryCardTag model
   */ 
  interface MemoryCardTagFieldRefs {
    readonly memoryCardId: FieldRef<"MemoryCardTag", 'String'>
    readonly tagId: FieldRef<"MemoryCardTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemoryCardTag findUnique
   */
  export type MemoryCardTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCardTag to fetch.
     */
    where: MemoryCardTagWhereUniqueInput
  }

  /**
   * MemoryCardTag findUniqueOrThrow
   */
  export type MemoryCardTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCardTag to fetch.
     */
    where: MemoryCardTagWhereUniqueInput
  }

  /**
   * MemoryCardTag findFirst
   */
  export type MemoryCardTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCardTag to fetch.
     */
    where?: MemoryCardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCardTags to fetch.
     */
    orderBy?: MemoryCardTagOrderByWithRelationInput | MemoryCardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryCardTags.
     */
    cursor?: MemoryCardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCardTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryCardTags.
     */
    distinct?: MemoryCardTagScalarFieldEnum | MemoryCardTagScalarFieldEnum[]
  }

  /**
   * MemoryCardTag findFirstOrThrow
   */
  export type MemoryCardTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCardTag to fetch.
     */
    where?: MemoryCardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCardTags to fetch.
     */
    orderBy?: MemoryCardTagOrderByWithRelationInput | MemoryCardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryCardTags.
     */
    cursor?: MemoryCardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCardTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryCardTags.
     */
    distinct?: MemoryCardTagScalarFieldEnum | MemoryCardTagScalarFieldEnum[]
  }

  /**
   * MemoryCardTag findMany
   */
  export type MemoryCardTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * Filter, which MemoryCardTags to fetch.
     */
    where?: MemoryCardTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryCardTags to fetch.
     */
    orderBy?: MemoryCardTagOrderByWithRelationInput | MemoryCardTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemoryCardTags.
     */
    cursor?: MemoryCardTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryCardTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryCardTags.
     */
    skip?: number
    distinct?: MemoryCardTagScalarFieldEnum | MemoryCardTagScalarFieldEnum[]
  }

  /**
   * MemoryCardTag create
   */
  export type MemoryCardTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * The data needed to create a MemoryCardTag.
     */
    data: XOR<MemoryCardTagCreateInput, MemoryCardTagUncheckedCreateInput>
  }

  /**
   * MemoryCardTag createMany
   */
  export type MemoryCardTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemoryCardTags.
     */
    data: MemoryCardTagCreateManyInput | MemoryCardTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemoryCardTag createManyAndReturn
   */
  export type MemoryCardTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MemoryCardTags.
     */
    data: MemoryCardTagCreateManyInput | MemoryCardTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemoryCardTag update
   */
  export type MemoryCardTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * The data needed to update a MemoryCardTag.
     */
    data: XOR<MemoryCardTagUpdateInput, MemoryCardTagUncheckedUpdateInput>
    /**
     * Choose, which MemoryCardTag to update.
     */
    where: MemoryCardTagWhereUniqueInput
  }

  /**
   * MemoryCardTag updateMany
   */
  export type MemoryCardTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemoryCardTags.
     */
    data: XOR<MemoryCardTagUpdateManyMutationInput, MemoryCardTagUncheckedUpdateManyInput>
    /**
     * Filter which MemoryCardTags to update
     */
    where?: MemoryCardTagWhereInput
  }

  /**
   * MemoryCardTag upsert
   */
  export type MemoryCardTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * The filter to search for the MemoryCardTag to update in case it exists.
     */
    where: MemoryCardTagWhereUniqueInput
    /**
     * In case the MemoryCardTag found by the `where` argument doesn't exist, create a new MemoryCardTag with this data.
     */
    create: XOR<MemoryCardTagCreateInput, MemoryCardTagUncheckedCreateInput>
    /**
     * In case the MemoryCardTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoryCardTagUpdateInput, MemoryCardTagUncheckedUpdateInput>
  }

  /**
   * MemoryCardTag delete
   */
  export type MemoryCardTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
    /**
     * Filter which MemoryCardTag to delete.
     */
    where: MemoryCardTagWhereUniqueInput
  }

  /**
   * MemoryCardTag deleteMany
   */
  export type MemoryCardTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryCardTags to delete
     */
    where?: MemoryCardTagWhereInput
  }

  /**
   * MemoryCardTag without action
   */
  export type MemoryCardTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryCardTag
     */
    select?: MemoryCardTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryCardTagInclude<ExtArgs> | null
  }


  /**
   * Model MemoryAttachment
   */

  export type AggregateMemoryAttachment = {
    _count: MemoryAttachmentCountAggregateOutputType | null
    _min: MemoryAttachmentMinAggregateOutputType | null
    _max: MemoryAttachmentMaxAggregateOutputType | null
  }

  export type MemoryAttachmentMinAggregateOutputType = {
    id: string | null
    memoryCardId: string | null
    type: string | null
    url: string | null
    transcript: string | null
    createdAt: Date | null
  }

  export type MemoryAttachmentMaxAggregateOutputType = {
    id: string | null
    memoryCardId: string | null
    type: string | null
    url: string | null
    transcript: string | null
    createdAt: Date | null
  }

  export type MemoryAttachmentCountAggregateOutputType = {
    id: number
    memoryCardId: number
    type: number
    url: number
    transcript: number
    createdAt: number
    _all: number
  }


  export type MemoryAttachmentMinAggregateInputType = {
    id?: true
    memoryCardId?: true
    type?: true
    url?: true
    transcript?: true
    createdAt?: true
  }

  export type MemoryAttachmentMaxAggregateInputType = {
    id?: true
    memoryCardId?: true
    type?: true
    url?: true
    transcript?: true
    createdAt?: true
  }

  export type MemoryAttachmentCountAggregateInputType = {
    id?: true
    memoryCardId?: true
    type?: true
    url?: true
    transcript?: true
    createdAt?: true
    _all?: true
  }

  export type MemoryAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryAttachment to aggregate.
     */
    where?: MemoryAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryAttachments to fetch.
     */
    orderBy?: MemoryAttachmentOrderByWithRelationInput | MemoryAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemoryAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemoryAttachments
    **/
    _count?: true | MemoryAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemoryAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemoryAttachmentMaxAggregateInputType
  }

  export type GetMemoryAttachmentAggregateType<T extends MemoryAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMemoryAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemoryAttachment[P]>
      : GetScalarType<T[P], AggregateMemoryAttachment[P]>
  }




  export type MemoryAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemoryAttachmentWhereInput
    orderBy?: MemoryAttachmentOrderByWithAggregationInput | MemoryAttachmentOrderByWithAggregationInput[]
    by: MemoryAttachmentScalarFieldEnum[] | MemoryAttachmentScalarFieldEnum
    having?: MemoryAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemoryAttachmentCountAggregateInputType | true
    _min?: MemoryAttachmentMinAggregateInputType
    _max?: MemoryAttachmentMaxAggregateInputType
  }

  export type MemoryAttachmentGroupByOutputType = {
    id: string
    memoryCardId: string
    type: string
    url: string
    transcript: string | null
    createdAt: Date
    _count: MemoryAttachmentCountAggregateOutputType | null
    _min: MemoryAttachmentMinAggregateOutputType | null
    _max: MemoryAttachmentMaxAggregateOutputType | null
  }

  type GetMemoryAttachmentGroupByPayload<T extends MemoryAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemoryAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemoryAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemoryAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], MemoryAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type MemoryAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memoryCardId?: boolean
    type?: boolean
    url?: boolean
    transcript?: boolean
    createdAt?: boolean
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryAttachment"]>

  export type MemoryAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memoryCardId?: boolean
    type?: boolean
    url?: boolean
    transcript?: boolean
    createdAt?: boolean
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memoryAttachment"]>

  export type MemoryAttachmentSelectScalar = {
    id?: boolean
    memoryCardId?: boolean
    type?: boolean
    url?: boolean
    transcript?: boolean
    createdAt?: boolean
  }

  export type MemoryAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }
  export type MemoryAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }

  export type $MemoryAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemoryAttachment"
    objects: {
      memoryCard: Prisma.$MemoryCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memoryCardId: string
      type: string
      url: string
      transcript: string | null
      createdAt: Date
    }, ExtArgs["result"]["memoryAttachment"]>
    composites: {}
  }

  type MemoryAttachmentGetPayload<S extends boolean | null | undefined | MemoryAttachmentDefaultArgs> = $Result.GetResult<Prisma.$MemoryAttachmentPayload, S>

  type MemoryAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemoryAttachmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemoryAttachmentCountAggregateInputType | true
    }

  export interface MemoryAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemoryAttachment'], meta: { name: 'MemoryAttachment' } }
    /**
     * Find zero or one MemoryAttachment that matches the filter.
     * @param {MemoryAttachmentFindUniqueArgs} args - Arguments to find a MemoryAttachment
     * @example
     * // Get one MemoryAttachment
     * const memoryAttachment = await prisma.memoryAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemoryAttachmentFindUniqueArgs>(args: SelectSubset<T, MemoryAttachmentFindUniqueArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MemoryAttachment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MemoryAttachmentFindUniqueOrThrowArgs} args - Arguments to find a MemoryAttachment
     * @example
     * // Get one MemoryAttachment
     * const memoryAttachment = await prisma.memoryAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemoryAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MemoryAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MemoryAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAttachmentFindFirstArgs} args - Arguments to find a MemoryAttachment
     * @example
     * // Get one MemoryAttachment
     * const memoryAttachment = await prisma.memoryAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemoryAttachmentFindFirstArgs>(args?: SelectSubset<T, MemoryAttachmentFindFirstArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MemoryAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAttachmentFindFirstOrThrowArgs} args - Arguments to find a MemoryAttachment
     * @example
     * // Get one MemoryAttachment
     * const memoryAttachment = await prisma.memoryAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemoryAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MemoryAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MemoryAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemoryAttachments
     * const memoryAttachments = await prisma.memoryAttachment.findMany()
     * 
     * // Get first 10 MemoryAttachments
     * const memoryAttachments = await prisma.memoryAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memoryAttachmentWithIdOnly = await prisma.memoryAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemoryAttachmentFindManyArgs>(args?: SelectSubset<T, MemoryAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MemoryAttachment.
     * @param {MemoryAttachmentCreateArgs} args - Arguments to create a MemoryAttachment.
     * @example
     * // Create one MemoryAttachment
     * const MemoryAttachment = await prisma.memoryAttachment.create({
     *   data: {
     *     // ... data to create a MemoryAttachment
     *   }
     * })
     * 
     */
    create<T extends MemoryAttachmentCreateArgs>(args: SelectSubset<T, MemoryAttachmentCreateArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MemoryAttachments.
     * @param {MemoryAttachmentCreateManyArgs} args - Arguments to create many MemoryAttachments.
     * @example
     * // Create many MemoryAttachments
     * const memoryAttachment = await prisma.memoryAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemoryAttachmentCreateManyArgs>(args?: SelectSubset<T, MemoryAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemoryAttachments and returns the data saved in the database.
     * @param {MemoryAttachmentCreateManyAndReturnArgs} args - Arguments to create many MemoryAttachments.
     * @example
     * // Create many MemoryAttachments
     * const memoryAttachment = await prisma.memoryAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemoryAttachments and only return the `id`
     * const memoryAttachmentWithIdOnly = await prisma.memoryAttachment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemoryAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MemoryAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MemoryAttachment.
     * @param {MemoryAttachmentDeleteArgs} args - Arguments to delete one MemoryAttachment.
     * @example
     * // Delete one MemoryAttachment
     * const MemoryAttachment = await prisma.memoryAttachment.delete({
     *   where: {
     *     // ... filter to delete one MemoryAttachment
     *   }
     * })
     * 
     */
    delete<T extends MemoryAttachmentDeleteArgs>(args: SelectSubset<T, MemoryAttachmentDeleteArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MemoryAttachment.
     * @param {MemoryAttachmentUpdateArgs} args - Arguments to update one MemoryAttachment.
     * @example
     * // Update one MemoryAttachment
     * const memoryAttachment = await prisma.memoryAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemoryAttachmentUpdateArgs>(args: SelectSubset<T, MemoryAttachmentUpdateArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MemoryAttachments.
     * @param {MemoryAttachmentDeleteManyArgs} args - Arguments to filter MemoryAttachments to delete.
     * @example
     * // Delete a few MemoryAttachments
     * const { count } = await prisma.memoryAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemoryAttachmentDeleteManyArgs>(args?: SelectSubset<T, MemoryAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemoryAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemoryAttachments
     * const memoryAttachment = await prisma.memoryAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemoryAttachmentUpdateManyArgs>(args: SelectSubset<T, MemoryAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemoryAttachment.
     * @param {MemoryAttachmentUpsertArgs} args - Arguments to update or create a MemoryAttachment.
     * @example
     * // Update or create a MemoryAttachment
     * const memoryAttachment = await prisma.memoryAttachment.upsert({
     *   create: {
     *     // ... data to create a MemoryAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemoryAttachment we want to update
     *   }
     * })
     */
    upsert<T extends MemoryAttachmentUpsertArgs>(args: SelectSubset<T, MemoryAttachmentUpsertArgs<ExtArgs>>): Prisma__MemoryAttachmentClient<$Result.GetResult<Prisma.$MemoryAttachmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MemoryAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAttachmentCountArgs} args - Arguments to filter MemoryAttachments to count.
     * @example
     * // Count the number of MemoryAttachments
     * const count = await prisma.memoryAttachment.count({
     *   where: {
     *     // ... the filter for the MemoryAttachments we want to count
     *   }
     * })
    **/
    count<T extends MemoryAttachmentCountArgs>(
      args?: Subset<T, MemoryAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemoryAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemoryAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemoryAttachmentAggregateArgs>(args: Subset<T, MemoryAttachmentAggregateArgs>): Prisma.PrismaPromise<GetMemoryAttachmentAggregateType<T>>

    /**
     * Group by MemoryAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemoryAttachmentGroupByArgs} args - Group by arguments.
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
      T extends MemoryAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemoryAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: MemoryAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemoryAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemoryAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemoryAttachment model
   */
  readonly fields: MemoryAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemoryAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemoryAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memoryCard<T extends MemoryCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCardDefaultArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MemoryAttachment model
   */ 
  interface MemoryAttachmentFieldRefs {
    readonly id: FieldRef<"MemoryAttachment", 'String'>
    readonly memoryCardId: FieldRef<"MemoryAttachment", 'String'>
    readonly type: FieldRef<"MemoryAttachment", 'String'>
    readonly url: FieldRef<"MemoryAttachment", 'String'>
    readonly transcript: FieldRef<"MemoryAttachment", 'String'>
    readonly createdAt: FieldRef<"MemoryAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemoryAttachment findUnique
   */
  export type MemoryAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MemoryAttachment to fetch.
     */
    where: MemoryAttachmentWhereUniqueInput
  }

  /**
   * MemoryAttachment findUniqueOrThrow
   */
  export type MemoryAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MemoryAttachment to fetch.
     */
    where: MemoryAttachmentWhereUniqueInput
  }

  /**
   * MemoryAttachment findFirst
   */
  export type MemoryAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MemoryAttachment to fetch.
     */
    where?: MemoryAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryAttachments to fetch.
     */
    orderBy?: MemoryAttachmentOrderByWithRelationInput | MemoryAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryAttachments.
     */
    cursor?: MemoryAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryAttachments.
     */
    distinct?: MemoryAttachmentScalarFieldEnum | MemoryAttachmentScalarFieldEnum[]
  }

  /**
   * MemoryAttachment findFirstOrThrow
   */
  export type MemoryAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MemoryAttachment to fetch.
     */
    where?: MemoryAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryAttachments to fetch.
     */
    orderBy?: MemoryAttachmentOrderByWithRelationInput | MemoryAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemoryAttachments.
     */
    cursor?: MemoryAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemoryAttachments.
     */
    distinct?: MemoryAttachmentScalarFieldEnum | MemoryAttachmentScalarFieldEnum[]
  }

  /**
   * MemoryAttachment findMany
   */
  export type MemoryAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MemoryAttachments to fetch.
     */
    where?: MemoryAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemoryAttachments to fetch.
     */
    orderBy?: MemoryAttachmentOrderByWithRelationInput | MemoryAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemoryAttachments.
     */
    cursor?: MemoryAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemoryAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemoryAttachments.
     */
    skip?: number
    distinct?: MemoryAttachmentScalarFieldEnum | MemoryAttachmentScalarFieldEnum[]
  }

  /**
   * MemoryAttachment create
   */
  export type MemoryAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MemoryAttachment.
     */
    data: XOR<MemoryAttachmentCreateInput, MemoryAttachmentUncheckedCreateInput>
  }

  /**
   * MemoryAttachment createMany
   */
  export type MemoryAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemoryAttachments.
     */
    data: MemoryAttachmentCreateManyInput | MemoryAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemoryAttachment createManyAndReturn
   */
  export type MemoryAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MemoryAttachments.
     */
    data: MemoryAttachmentCreateManyInput | MemoryAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemoryAttachment update
   */
  export type MemoryAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MemoryAttachment.
     */
    data: XOR<MemoryAttachmentUpdateInput, MemoryAttachmentUncheckedUpdateInput>
    /**
     * Choose, which MemoryAttachment to update.
     */
    where: MemoryAttachmentWhereUniqueInput
  }

  /**
   * MemoryAttachment updateMany
   */
  export type MemoryAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemoryAttachments.
     */
    data: XOR<MemoryAttachmentUpdateManyMutationInput, MemoryAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which MemoryAttachments to update
     */
    where?: MemoryAttachmentWhereInput
  }

  /**
   * MemoryAttachment upsert
   */
  export type MemoryAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MemoryAttachment to update in case it exists.
     */
    where: MemoryAttachmentWhereUniqueInput
    /**
     * In case the MemoryAttachment found by the `where` argument doesn't exist, create a new MemoryAttachment with this data.
     */
    create: XOR<MemoryAttachmentCreateInput, MemoryAttachmentUncheckedCreateInput>
    /**
     * In case the MemoryAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemoryAttachmentUpdateInput, MemoryAttachmentUncheckedUpdateInput>
  }

  /**
   * MemoryAttachment delete
   */
  export type MemoryAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
    /**
     * Filter which MemoryAttachment to delete.
     */
    where: MemoryAttachmentWhereUniqueInput
  }

  /**
   * MemoryAttachment deleteMany
   */
  export type MemoryAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemoryAttachments to delete
     */
    where?: MemoryAttachmentWhereInput
  }

  /**
   * MemoryAttachment without action
   */
  export type MemoryAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemoryAttachment
     */
    select?: MemoryAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemoryAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Timeline
   */

  export type AggregateTimeline = {
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  export type TimelineMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type TimelineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type TimelineCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type TimelineMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TimelineMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TimelineCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type TimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timeline to aggregate.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timelines
    **/
    _count?: true | TimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineMaxAggregateInputType
  }

  export type GetTimelineAggregateType<T extends TimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeline[P]>
      : GetScalarType<T[P], AggregateTimeline[P]>
  }




  export type TimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineWhereInput
    orderBy?: TimelineOrderByWithAggregationInput | TimelineOrderByWithAggregationInput[]
    by: TimelineScalarFieldEnum[] | TimelineScalarFieldEnum
    having?: TimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineCountAggregateInputType | true
    _min?: TimelineMinAggregateInputType
    _max?: TimelineMaxAggregateInputType
  }

  export type TimelineGroupByOutputType = {
    id: string
    userId: string
    _count: TimelineCountAggregateOutputType | null
    _min: TimelineMinAggregateOutputType | null
    _max: TimelineMaxAggregateOutputType | null
  }

  type GetTimelineGroupByPayload<T extends TimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineGroupByOutputType[P]>
        }
      >
    >


  export type TimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    entries?: boolean | Timeline$entriesArgs<ExtArgs>
    _count?: boolean | TimelineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
  }, ExtArgs["result"]["timeline"]>

  export type TimelineSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type TimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Timeline$entriesArgs<ExtArgs>
    _count?: boolean | TimelineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timeline"
    objects: {
      entries: Prisma.$TimelineEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["timeline"]>
    composites: {}
  }

  type TimelineGetPayload<S extends boolean | null | undefined | TimelineDefaultArgs> = $Result.GetResult<Prisma.$TimelinePayload, S>

  type TimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimelineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimelineCountAggregateInputType | true
    }

  export interface TimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timeline'], meta: { name: 'Timeline' } }
    /**
     * Find zero or one Timeline that matches the filter.
     * @param {TimelineFindUniqueArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineFindUniqueArgs>(args: SelectSubset<T, TimelineFindUniqueArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timeline that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimelineFindUniqueOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineFindFirstArgs>(args?: SelectSubset<T, TimelineFindFirstArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindFirstOrThrowArgs} args - Arguments to find a Timeline
     * @example
     * // Get one Timeline
     * const timeline = await prisma.timeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timelines
     * const timelines = await prisma.timeline.findMany()
     * 
     * // Get first 10 Timelines
     * const timelines = await prisma.timeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineWithIdOnly = await prisma.timeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineFindManyArgs>(args?: SelectSubset<T, TimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timeline.
     * @param {TimelineCreateArgs} args - Arguments to create a Timeline.
     * @example
     * // Create one Timeline
     * const Timeline = await prisma.timeline.create({
     *   data: {
     *     // ... data to create a Timeline
     *   }
     * })
     * 
     */
    create<T extends TimelineCreateArgs>(args: SelectSubset<T, TimelineCreateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timelines.
     * @param {TimelineCreateManyArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineCreateManyArgs>(args?: SelectSubset<T, TimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timelines and returns the data saved in the database.
     * @param {TimelineCreateManyAndReturnArgs} args - Arguments to create many Timelines.
     * @example
     * // Create many Timelines
     * const timeline = await prisma.timeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timelines and only return the `id`
     * const timelineWithIdOnly = await prisma.timeline.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timeline.
     * @param {TimelineDeleteArgs} args - Arguments to delete one Timeline.
     * @example
     * // Delete one Timeline
     * const Timeline = await prisma.timeline.delete({
     *   where: {
     *     // ... filter to delete one Timeline
     *   }
     * })
     * 
     */
    delete<T extends TimelineDeleteArgs>(args: SelectSubset<T, TimelineDeleteArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timeline.
     * @param {TimelineUpdateArgs} args - Arguments to update one Timeline.
     * @example
     * // Update one Timeline
     * const timeline = await prisma.timeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineUpdateArgs>(args: SelectSubset<T, TimelineUpdateArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timelines.
     * @param {TimelineDeleteManyArgs} args - Arguments to filter Timelines to delete.
     * @example
     * // Delete a few Timelines
     * const { count } = await prisma.timeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineDeleteManyArgs>(args?: SelectSubset<T, TimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timelines
     * const timeline = await prisma.timeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineUpdateManyArgs>(args: SelectSubset<T, TimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timeline.
     * @param {TimelineUpsertArgs} args - Arguments to update or create a Timeline.
     * @example
     * // Update or create a Timeline
     * const timeline = await prisma.timeline.upsert({
     *   create: {
     *     // ... data to create a Timeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timeline we want to update
     *   }
     * })
     */
    upsert<T extends TimelineUpsertArgs>(args: SelectSubset<T, TimelineUpsertArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineCountArgs} args - Arguments to filter Timelines to count.
     * @example
     * // Count the number of Timelines
     * const count = await prisma.timeline.count({
     *   where: {
     *     // ... the filter for the Timelines we want to count
     *   }
     * })
    **/
    count<T extends TimelineCountArgs>(
      args?: Subset<T, TimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineAggregateArgs>(args: Subset<T, TimelineAggregateArgs>): Prisma.PrismaPromise<GetTimelineAggregateType<T>>

    /**
     * Group by Timeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineGroupByArgs} args - Group by arguments.
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
      T extends TimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineGroupByArgs['orderBy'] }
        : { orderBy?: TimelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timeline model
   */
  readonly fields: TimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends Timeline$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Timeline$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Timeline model
   */ 
  interface TimelineFieldRefs {
    readonly id: FieldRef<"Timeline", 'String'>
    readonly userId: FieldRef<"Timeline", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Timeline findUnique
   */
  export type TimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findUniqueOrThrow
   */
  export type TimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline findFirst
   */
  export type TimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findFirstOrThrow
   */
  export type TimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timeline to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timelines.
     */
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline findMany
   */
  export type TimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter, which Timelines to fetch.
     */
    where?: TimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timelines to fetch.
     */
    orderBy?: TimelineOrderByWithRelationInput | TimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timelines.
     */
    cursor?: TimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timelines.
     */
    skip?: number
    distinct?: TimelineScalarFieldEnum | TimelineScalarFieldEnum[]
  }

  /**
   * Timeline create
   */
  export type TimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Timeline.
     */
    data: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
  }

  /**
   * Timeline createMany
   */
  export type TimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timeline createManyAndReturn
   */
  export type TimelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timelines.
     */
    data: TimelineCreateManyInput | TimelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timeline update
   */
  export type TimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Timeline.
     */
    data: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
    /**
     * Choose, which Timeline to update.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline updateMany
   */
  export type TimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timelines.
     */
    data: XOR<TimelineUpdateManyMutationInput, TimelineUncheckedUpdateManyInput>
    /**
     * Filter which Timelines to update
     */
    where?: TimelineWhereInput
  }

  /**
   * Timeline upsert
   */
  export type TimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Timeline to update in case it exists.
     */
    where: TimelineWhereUniqueInput
    /**
     * In case the Timeline found by the `where` argument doesn't exist, create a new Timeline with this data.
     */
    create: XOR<TimelineCreateInput, TimelineUncheckedCreateInput>
    /**
     * In case the Timeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineUpdateInput, TimelineUncheckedUpdateInput>
  }

  /**
   * Timeline delete
   */
  export type TimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
    /**
     * Filter which Timeline to delete.
     */
    where: TimelineWhereUniqueInput
  }

  /**
   * Timeline deleteMany
   */
  export type TimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timelines to delete
     */
    where?: TimelineWhereInput
  }

  /**
   * Timeline.entries
   */
  export type Timeline$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    where?: TimelineEntryWhereInput
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    cursor?: TimelineEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * Timeline without action
   */
  export type TimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timeline
     */
    select?: TimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineInclude<ExtArgs> | null
  }


  /**
   * Model TimelineEntry
   */

  export type AggregateTimelineEntry = {
    _count: TimelineEntryCountAggregateOutputType | null
    _avg: TimelineEntryAvgAggregateOutputType | null
    _sum: TimelineEntrySumAggregateOutputType | null
    _min: TimelineEntryMinAggregateOutputType | null
    _max: TimelineEntryMaxAggregateOutputType | null
  }

  export type TimelineEntryAvgAggregateOutputType = {
    order: number | null
  }

  export type TimelineEntrySumAggregateOutputType = {
    order: number | null
  }

  export type TimelineEntryMinAggregateOutputType = {
    id: string | null
    timelineId: string | null
    memoryCardId: string | null
    order: number | null
  }

  export type TimelineEntryMaxAggregateOutputType = {
    id: string | null
    timelineId: string | null
    memoryCardId: string | null
    order: number | null
  }

  export type TimelineEntryCountAggregateOutputType = {
    id: number
    timelineId: number
    memoryCardId: number
    order: number
    _all: number
  }


  export type TimelineEntryAvgAggregateInputType = {
    order?: true
  }

  export type TimelineEntrySumAggregateInputType = {
    order?: true
  }

  export type TimelineEntryMinAggregateInputType = {
    id?: true
    timelineId?: true
    memoryCardId?: true
    order?: true
  }

  export type TimelineEntryMaxAggregateInputType = {
    id?: true
    timelineId?: true
    memoryCardId?: true
    order?: true
  }

  export type TimelineEntryCountAggregateInputType = {
    id?: true
    timelineId?: true
    memoryCardId?: true
    order?: true
    _all?: true
  }

  export type TimelineEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEntry to aggregate.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimelineEntries
    **/
    _count?: true | TimelineEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimelineEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimelineEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimelineEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimelineEntryMaxAggregateInputType
  }

  export type GetTimelineEntryAggregateType<T extends TimelineEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimelineEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimelineEntry[P]>
      : GetScalarType<T[P], AggregateTimelineEntry[P]>
  }




  export type TimelineEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimelineEntryWhereInput
    orderBy?: TimelineEntryOrderByWithAggregationInput | TimelineEntryOrderByWithAggregationInput[]
    by: TimelineEntryScalarFieldEnum[] | TimelineEntryScalarFieldEnum
    having?: TimelineEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimelineEntryCountAggregateInputType | true
    _avg?: TimelineEntryAvgAggregateInputType
    _sum?: TimelineEntrySumAggregateInputType
    _min?: TimelineEntryMinAggregateInputType
    _max?: TimelineEntryMaxAggregateInputType
  }

  export type TimelineEntryGroupByOutputType = {
    id: string
    timelineId: string
    memoryCardId: string
    order: number
    _count: TimelineEntryCountAggregateOutputType | null
    _avg: TimelineEntryAvgAggregateOutputType | null
    _sum: TimelineEntrySumAggregateOutputType | null
    _min: TimelineEntryMinAggregateOutputType | null
    _max: TimelineEntryMaxAggregateOutputType | null
  }

  type GetTimelineEntryGroupByPayload<T extends TimelineEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimelineEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimelineEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimelineEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimelineEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimelineEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timelineId?: boolean
    memoryCardId?: boolean
    order?: boolean
    timeline?: boolean | TimelineDefaultArgs<ExtArgs>
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEntry"]>

  export type TimelineEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timelineId?: boolean
    memoryCardId?: boolean
    order?: boolean
    timeline?: boolean | TimelineDefaultArgs<ExtArgs>
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timelineEntry"]>

  export type TimelineEntrySelectScalar = {
    id?: boolean
    timelineId?: boolean
    memoryCardId?: boolean
    order?: boolean
  }

  export type TimelineEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | TimelineDefaultArgs<ExtArgs>
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }
  export type TimelineEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | TimelineDefaultArgs<ExtArgs>
    memoryCard?: boolean | MemoryCardDefaultArgs<ExtArgs>
  }

  export type $TimelineEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimelineEntry"
    objects: {
      timeline: Prisma.$TimelinePayload<ExtArgs>
      memoryCard: Prisma.$MemoryCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timelineId: string
      memoryCardId: string
      order: number
    }, ExtArgs["result"]["timelineEntry"]>
    composites: {}
  }

  type TimelineEntryGetPayload<S extends boolean | null | undefined | TimelineEntryDefaultArgs> = $Result.GetResult<Prisma.$TimelineEntryPayload, S>

  type TimelineEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimelineEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimelineEntryCountAggregateInputType | true
    }

  export interface TimelineEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimelineEntry'], meta: { name: 'TimelineEntry' } }
    /**
     * Find zero or one TimelineEntry that matches the filter.
     * @param {TimelineEntryFindUniqueArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimelineEntryFindUniqueArgs>(args: SelectSubset<T, TimelineEntryFindUniqueArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimelineEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimelineEntryFindUniqueOrThrowArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimelineEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimelineEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimelineEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryFindFirstArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimelineEntryFindFirstArgs>(args?: SelectSubset<T, TimelineEntryFindFirstArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimelineEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryFindFirstOrThrowArgs} args - Arguments to find a TimelineEntry
     * @example
     * // Get one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimelineEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimelineEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimelineEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimelineEntries
     * const timelineEntries = await prisma.timelineEntry.findMany()
     * 
     * // Get first 10 TimelineEntries
     * const timelineEntries = await prisma.timelineEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timelineEntryWithIdOnly = await prisma.timelineEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimelineEntryFindManyArgs>(args?: SelectSubset<T, TimelineEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimelineEntry.
     * @param {TimelineEntryCreateArgs} args - Arguments to create a TimelineEntry.
     * @example
     * // Create one TimelineEntry
     * const TimelineEntry = await prisma.timelineEntry.create({
     *   data: {
     *     // ... data to create a TimelineEntry
     *   }
     * })
     * 
     */
    create<T extends TimelineEntryCreateArgs>(args: SelectSubset<T, TimelineEntryCreateArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimelineEntries.
     * @param {TimelineEntryCreateManyArgs} args - Arguments to create many TimelineEntries.
     * @example
     * // Create many TimelineEntries
     * const timelineEntry = await prisma.timelineEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimelineEntryCreateManyArgs>(args?: SelectSubset<T, TimelineEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimelineEntries and returns the data saved in the database.
     * @param {TimelineEntryCreateManyAndReturnArgs} args - Arguments to create many TimelineEntries.
     * @example
     * // Create many TimelineEntries
     * const timelineEntry = await prisma.timelineEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimelineEntries and only return the `id`
     * const timelineEntryWithIdOnly = await prisma.timelineEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimelineEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimelineEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TimelineEntry.
     * @param {TimelineEntryDeleteArgs} args - Arguments to delete one TimelineEntry.
     * @example
     * // Delete one TimelineEntry
     * const TimelineEntry = await prisma.timelineEntry.delete({
     *   where: {
     *     // ... filter to delete one TimelineEntry
     *   }
     * })
     * 
     */
    delete<T extends TimelineEntryDeleteArgs>(args: SelectSubset<T, TimelineEntryDeleteArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimelineEntry.
     * @param {TimelineEntryUpdateArgs} args - Arguments to update one TimelineEntry.
     * @example
     * // Update one TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimelineEntryUpdateArgs>(args: SelectSubset<T, TimelineEntryUpdateArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimelineEntries.
     * @param {TimelineEntryDeleteManyArgs} args - Arguments to filter TimelineEntries to delete.
     * @example
     * // Delete a few TimelineEntries
     * const { count } = await prisma.timelineEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimelineEntryDeleteManyArgs>(args?: SelectSubset<T, TimelineEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimelineEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimelineEntries
     * const timelineEntry = await prisma.timelineEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimelineEntryUpdateManyArgs>(args: SelectSubset<T, TimelineEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimelineEntry.
     * @param {TimelineEntryUpsertArgs} args - Arguments to update or create a TimelineEntry.
     * @example
     * // Update or create a TimelineEntry
     * const timelineEntry = await prisma.timelineEntry.upsert({
     *   create: {
     *     // ... data to create a TimelineEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimelineEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimelineEntryUpsertArgs>(args: SelectSubset<T, TimelineEntryUpsertArgs<ExtArgs>>): Prisma__TimelineEntryClient<$Result.GetResult<Prisma.$TimelineEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimelineEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryCountArgs} args - Arguments to filter TimelineEntries to count.
     * @example
     * // Count the number of TimelineEntries
     * const count = await prisma.timelineEntry.count({
     *   where: {
     *     // ... the filter for the TimelineEntries we want to count
     *   }
     * })
    **/
    count<T extends TimelineEntryCountArgs>(
      args?: Subset<T, TimelineEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimelineEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimelineEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimelineEntryAggregateArgs>(args: Subset<T, TimelineEntryAggregateArgs>): Prisma.PrismaPromise<GetTimelineEntryAggregateType<T>>

    /**
     * Group by TimelineEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimelineEntryGroupByArgs} args - Group by arguments.
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
      T extends TimelineEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimelineEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimelineEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimelineEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimelineEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimelineEntry model
   */
  readonly fields: TimelineEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimelineEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimelineEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timeline<T extends TimelineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimelineDefaultArgs<ExtArgs>>): Prisma__TimelineClient<$Result.GetResult<Prisma.$TimelinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    memoryCard<T extends MemoryCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemoryCardDefaultArgs<ExtArgs>>): Prisma__MemoryCardClient<$Result.GetResult<Prisma.$MemoryCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TimelineEntry model
   */ 
  interface TimelineEntryFieldRefs {
    readonly id: FieldRef<"TimelineEntry", 'String'>
    readonly timelineId: FieldRef<"TimelineEntry", 'String'>
    readonly memoryCardId: FieldRef<"TimelineEntry", 'String'>
    readonly order: FieldRef<"TimelineEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TimelineEntry findUnique
   */
  export type TimelineEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry findUniqueOrThrow
   */
  export type TimelineEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry findFirst
   */
  export type TimelineEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineEntries.
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineEntries.
     */
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * TimelineEntry findFirstOrThrow
   */
  export type TimelineEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntry to fetch.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimelineEntries.
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimelineEntries.
     */
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * TimelineEntry findMany
   */
  export type TimelineEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimelineEntries to fetch.
     */
    where?: TimelineEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimelineEntries to fetch.
     */
    orderBy?: TimelineEntryOrderByWithRelationInput | TimelineEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimelineEntries.
     */
    cursor?: TimelineEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimelineEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimelineEntries.
     */
    skip?: number
    distinct?: TimelineEntryScalarFieldEnum | TimelineEntryScalarFieldEnum[]
  }

  /**
   * TimelineEntry create
   */
  export type TimelineEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TimelineEntry.
     */
    data: XOR<TimelineEntryCreateInput, TimelineEntryUncheckedCreateInput>
  }

  /**
   * TimelineEntry createMany
   */
  export type TimelineEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimelineEntries.
     */
    data: TimelineEntryCreateManyInput | TimelineEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimelineEntry createManyAndReturn
   */
  export type TimelineEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TimelineEntries.
     */
    data: TimelineEntryCreateManyInput | TimelineEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimelineEntry update
   */
  export type TimelineEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TimelineEntry.
     */
    data: XOR<TimelineEntryUpdateInput, TimelineEntryUncheckedUpdateInput>
    /**
     * Choose, which TimelineEntry to update.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry updateMany
   */
  export type TimelineEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimelineEntries.
     */
    data: XOR<TimelineEntryUpdateManyMutationInput, TimelineEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimelineEntries to update
     */
    where?: TimelineEntryWhereInput
  }

  /**
   * TimelineEntry upsert
   */
  export type TimelineEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TimelineEntry to update in case it exists.
     */
    where: TimelineEntryWhereUniqueInput
    /**
     * In case the TimelineEntry found by the `where` argument doesn't exist, create a new TimelineEntry with this data.
     */
    create: XOR<TimelineEntryCreateInput, TimelineEntryUncheckedCreateInput>
    /**
     * In case the TimelineEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimelineEntryUpdateInput, TimelineEntryUncheckedUpdateInput>
  }

  /**
   * TimelineEntry delete
   */
  export type TimelineEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
    /**
     * Filter which TimelineEntry to delete.
     */
    where: TimelineEntryWhereUniqueInput
  }

  /**
   * TimelineEntry deleteMany
   */
  export type TimelineEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimelineEntries to delete
     */
    where?: TimelineEntryWhereInput
  }

  /**
   * TimelineEntry without action
   */
  export type TimelineEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimelineEntry
     */
    select?: TimelineEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimelineEntryInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entityId: string | null
    timestamp: Date | null
    metadata: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entityId: string | null
    timestamp: Date | null
    metadata: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entityId: number
    timestamp: number
    metadata: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityId?: true
    timestamp?: true
    metadata?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityId?: true
    timestamp?: true
    metadata?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityId?: true
    timestamp?: true
    metadata?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    entityId: string
    timestamp: Date
    metadata: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityId?: boolean
    timestamp?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityId?: boolean
    timestamp?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entityId?: boolean
    timestamp?: boolean
    metadata?: boolean
  }


  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      entityId: string
      timestamp: Date
      metadata: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
    readonly metadata: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const MemoryCardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    eventDate: 'eventDate',
    eventTime: 'eventTime',
    dateConfidence: 'dateConfidence',
    submittedAt: 'submittedAt',
    isSuperseded: 'isSuperseded',
    supersedesId: 'supersedesId',
    hash: 'hash',
    audioData: 'audioData'
  };

  export type MemoryCardScalarFieldEnum = (typeof MemoryCardScalarFieldEnum)[keyof typeof MemoryCardScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const MemoryCardTagScalarFieldEnum: {
    memoryCardId: 'memoryCardId',
    tagId: 'tagId'
  };

  export type MemoryCardTagScalarFieldEnum = (typeof MemoryCardTagScalarFieldEnum)[keyof typeof MemoryCardTagScalarFieldEnum]


  export const MemoryAttachmentScalarFieldEnum: {
    id: 'id',
    memoryCardId: 'memoryCardId',
    type: 'type',
    url: 'url',
    transcript: 'transcript',
    createdAt: 'createdAt'
  };

  export type MemoryAttachmentScalarFieldEnum = (typeof MemoryAttachmentScalarFieldEnum)[keyof typeof MemoryAttachmentScalarFieldEnum]


  export const TimelineScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type TimelineScalarFieldEnum = (typeof TimelineScalarFieldEnum)[keyof typeof TimelineScalarFieldEnum]


  export const TimelineEntryScalarFieldEnum: {
    id: 'id',
    timelineId: 'timelineId',
    memoryCardId: 'memoryCardId',
    order: 'order'
  };

  export type TimelineEntryScalarFieldEnum = (typeof TimelineEntryScalarFieldEnum)[keyof typeof TimelineEntryScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entityId: 'entityId',
    timestamp: 'timestamp',
    metadata: 'metadata'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memories?: MemoryCardListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memories?: MemoryCardOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memories?: MemoryCardListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type MemoryCardWhereInput = {
    AND?: MemoryCardWhereInput | MemoryCardWhereInput[]
    OR?: MemoryCardWhereInput[]
    NOT?: MemoryCardWhereInput | MemoryCardWhereInput[]
    id?: StringFilter<"MemoryCard"> | string
    userId?: StringFilter<"MemoryCard"> | string
    content?: StringFilter<"MemoryCard"> | string
    eventDate?: DateTimeNullableFilter<"MemoryCard"> | Date | string | null
    eventTime?: StringNullableFilter<"MemoryCard"> | string | null
    dateConfidence?: StringFilter<"MemoryCard"> | string
    submittedAt?: DateTimeFilter<"MemoryCard"> | Date | string
    isSuperseded?: BoolFilter<"MemoryCard"> | boolean
    supersedesId?: StringNullableFilter<"MemoryCard"> | string | null
    hash?: StringFilter<"MemoryCard"> | string
    audioData?: StringNullableFilter<"MemoryCard"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    supersedes?: XOR<MemoryCardNullableRelationFilter, MemoryCardWhereInput> | null
    supersededBy?: XOR<MemoryCardNullableRelationFilter, MemoryCardWhereInput> | null
    tags?: MemoryCardTagListRelationFilter
    attachments?: MemoryAttachmentListRelationFilter
    timelineEntry?: XOR<TimelineEntryNullableRelationFilter, TimelineEntryWhereInput> | null
  }

  export type MemoryCardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    eventDate?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    dateConfidence?: SortOrder
    submittedAt?: SortOrder
    isSuperseded?: SortOrder
    supersedesId?: SortOrderInput | SortOrder
    hash?: SortOrder
    audioData?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    supersedes?: MemoryCardOrderByWithRelationInput
    supersededBy?: MemoryCardOrderByWithRelationInput
    tags?: MemoryCardTagOrderByRelationAggregateInput
    attachments?: MemoryAttachmentOrderByRelationAggregateInput
    timelineEntry?: TimelineEntryOrderByWithRelationInput
  }

  export type MemoryCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supersedesId?: string
    AND?: MemoryCardWhereInput | MemoryCardWhereInput[]
    OR?: MemoryCardWhereInput[]
    NOT?: MemoryCardWhereInput | MemoryCardWhereInput[]
    userId?: StringFilter<"MemoryCard"> | string
    content?: StringFilter<"MemoryCard"> | string
    eventDate?: DateTimeNullableFilter<"MemoryCard"> | Date | string | null
    eventTime?: StringNullableFilter<"MemoryCard"> | string | null
    dateConfidence?: StringFilter<"MemoryCard"> | string
    submittedAt?: DateTimeFilter<"MemoryCard"> | Date | string
    isSuperseded?: BoolFilter<"MemoryCard"> | boolean
    hash?: StringFilter<"MemoryCard"> | string
    audioData?: StringNullableFilter<"MemoryCard"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    supersedes?: XOR<MemoryCardNullableRelationFilter, MemoryCardWhereInput> | null
    supersededBy?: XOR<MemoryCardNullableRelationFilter, MemoryCardWhereInput> | null
    tags?: MemoryCardTagListRelationFilter
    attachments?: MemoryAttachmentListRelationFilter
    timelineEntry?: XOR<TimelineEntryNullableRelationFilter, TimelineEntryWhereInput> | null
  }, "id" | "supersedesId">

  export type MemoryCardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    eventDate?: SortOrderInput | SortOrder
    eventTime?: SortOrderInput | SortOrder
    dateConfidence?: SortOrder
    submittedAt?: SortOrder
    isSuperseded?: SortOrder
    supersedesId?: SortOrderInput | SortOrder
    hash?: SortOrder
    audioData?: SortOrderInput | SortOrder
    _count?: MemoryCardCountOrderByAggregateInput
    _max?: MemoryCardMaxOrderByAggregateInput
    _min?: MemoryCardMinOrderByAggregateInput
  }

  export type MemoryCardScalarWhereWithAggregatesInput = {
    AND?: MemoryCardScalarWhereWithAggregatesInput | MemoryCardScalarWhereWithAggregatesInput[]
    OR?: MemoryCardScalarWhereWithAggregatesInput[]
    NOT?: MemoryCardScalarWhereWithAggregatesInput | MemoryCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemoryCard"> | string
    userId?: StringWithAggregatesFilter<"MemoryCard"> | string
    content?: StringWithAggregatesFilter<"MemoryCard"> | string
    eventDate?: DateTimeNullableWithAggregatesFilter<"MemoryCard"> | Date | string | null
    eventTime?: StringNullableWithAggregatesFilter<"MemoryCard"> | string | null
    dateConfidence?: StringWithAggregatesFilter<"MemoryCard"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"MemoryCard"> | Date | string
    isSuperseded?: BoolWithAggregatesFilter<"MemoryCard"> | boolean
    supersedesId?: StringNullableWithAggregatesFilter<"MemoryCard"> | string | null
    hash?: StringWithAggregatesFilter<"MemoryCard"> | string
    audioData?: StringNullableWithAggregatesFilter<"MemoryCard"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    type?: StringFilter<"Tag"> | string
    memories?: MemoryCardTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    memories?: MemoryCardTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    type?: StringFilter<"Tag"> | string
    memories?: MemoryCardTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    type?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type MemoryCardTagWhereInput = {
    AND?: MemoryCardTagWhereInput | MemoryCardTagWhereInput[]
    OR?: MemoryCardTagWhereInput[]
    NOT?: MemoryCardTagWhereInput | MemoryCardTagWhereInput[]
    memoryCardId?: StringFilter<"MemoryCardTag"> | string
    tagId?: StringFilter<"MemoryCardTag"> | string
    memoryCard?: XOR<MemoryCardRelationFilter, MemoryCardWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type MemoryCardTagOrderByWithRelationInput = {
    memoryCardId?: SortOrder
    tagId?: SortOrder
    memoryCard?: MemoryCardOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type MemoryCardTagWhereUniqueInput = Prisma.AtLeast<{
    memoryCardId_tagId?: MemoryCardTagMemoryCardIdTagIdCompoundUniqueInput
    AND?: MemoryCardTagWhereInput | MemoryCardTagWhereInput[]
    OR?: MemoryCardTagWhereInput[]
    NOT?: MemoryCardTagWhereInput | MemoryCardTagWhereInput[]
    memoryCardId?: StringFilter<"MemoryCardTag"> | string
    tagId?: StringFilter<"MemoryCardTag"> | string
    memoryCard?: XOR<MemoryCardRelationFilter, MemoryCardWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }, "memoryCardId_tagId">

  export type MemoryCardTagOrderByWithAggregationInput = {
    memoryCardId?: SortOrder
    tagId?: SortOrder
    _count?: MemoryCardTagCountOrderByAggregateInput
    _max?: MemoryCardTagMaxOrderByAggregateInput
    _min?: MemoryCardTagMinOrderByAggregateInput
  }

  export type MemoryCardTagScalarWhereWithAggregatesInput = {
    AND?: MemoryCardTagScalarWhereWithAggregatesInput | MemoryCardTagScalarWhereWithAggregatesInput[]
    OR?: MemoryCardTagScalarWhereWithAggregatesInput[]
    NOT?: MemoryCardTagScalarWhereWithAggregatesInput | MemoryCardTagScalarWhereWithAggregatesInput[]
    memoryCardId?: StringWithAggregatesFilter<"MemoryCardTag"> | string
    tagId?: StringWithAggregatesFilter<"MemoryCardTag"> | string
  }

  export type MemoryAttachmentWhereInput = {
    AND?: MemoryAttachmentWhereInput | MemoryAttachmentWhereInput[]
    OR?: MemoryAttachmentWhereInput[]
    NOT?: MemoryAttachmentWhereInput | MemoryAttachmentWhereInput[]
    id?: StringFilter<"MemoryAttachment"> | string
    memoryCardId?: StringFilter<"MemoryAttachment"> | string
    type?: StringFilter<"MemoryAttachment"> | string
    url?: StringFilter<"MemoryAttachment"> | string
    transcript?: StringNullableFilter<"MemoryAttachment"> | string | null
    createdAt?: DateTimeFilter<"MemoryAttachment"> | Date | string
    memoryCard?: XOR<MemoryCardRelationFilter, MemoryCardWhereInput>
  }

  export type MemoryAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    memoryCardId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    transcript?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    memoryCard?: MemoryCardOrderByWithRelationInput
  }

  export type MemoryAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemoryAttachmentWhereInput | MemoryAttachmentWhereInput[]
    OR?: MemoryAttachmentWhereInput[]
    NOT?: MemoryAttachmentWhereInput | MemoryAttachmentWhereInput[]
    memoryCardId?: StringFilter<"MemoryAttachment"> | string
    type?: StringFilter<"MemoryAttachment"> | string
    url?: StringFilter<"MemoryAttachment"> | string
    transcript?: StringNullableFilter<"MemoryAttachment"> | string | null
    createdAt?: DateTimeFilter<"MemoryAttachment"> | Date | string
    memoryCard?: XOR<MemoryCardRelationFilter, MemoryCardWhereInput>
  }, "id">

  export type MemoryAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    memoryCardId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    transcript?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MemoryAttachmentCountOrderByAggregateInput
    _max?: MemoryAttachmentMaxOrderByAggregateInput
    _min?: MemoryAttachmentMinOrderByAggregateInput
  }

  export type MemoryAttachmentScalarWhereWithAggregatesInput = {
    AND?: MemoryAttachmentScalarWhereWithAggregatesInput | MemoryAttachmentScalarWhereWithAggregatesInput[]
    OR?: MemoryAttachmentScalarWhereWithAggregatesInput[]
    NOT?: MemoryAttachmentScalarWhereWithAggregatesInput | MemoryAttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemoryAttachment"> | string
    memoryCardId?: StringWithAggregatesFilter<"MemoryAttachment"> | string
    type?: StringWithAggregatesFilter<"MemoryAttachment"> | string
    url?: StringWithAggregatesFilter<"MemoryAttachment"> | string
    transcript?: StringNullableWithAggregatesFilter<"MemoryAttachment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MemoryAttachment"> | Date | string
  }

  export type TimelineWhereInput = {
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    id?: StringFilter<"Timeline"> | string
    userId?: StringFilter<"Timeline"> | string
    entries?: TimelineEntryListRelationFilter
  }

  export type TimelineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    entries?: TimelineEntryOrderByRelationAggregateInput
  }

  export type TimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimelineWhereInput | TimelineWhereInput[]
    OR?: TimelineWhereInput[]
    NOT?: TimelineWhereInput | TimelineWhereInput[]
    userId?: StringFilter<"Timeline"> | string
    entries?: TimelineEntryListRelationFilter
  }, "id">

  export type TimelineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: TimelineCountOrderByAggregateInput
    _max?: TimelineMaxOrderByAggregateInput
    _min?: TimelineMinOrderByAggregateInput
  }

  export type TimelineScalarWhereWithAggregatesInput = {
    AND?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    OR?: TimelineScalarWhereWithAggregatesInput[]
    NOT?: TimelineScalarWhereWithAggregatesInput | TimelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timeline"> | string
    userId?: StringWithAggregatesFilter<"Timeline"> | string
  }

  export type TimelineEntryWhereInput = {
    AND?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    OR?: TimelineEntryWhereInput[]
    NOT?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    id?: StringFilter<"TimelineEntry"> | string
    timelineId?: StringFilter<"TimelineEntry"> | string
    memoryCardId?: StringFilter<"TimelineEntry"> | string
    order?: IntFilter<"TimelineEntry"> | number
    timeline?: XOR<TimelineRelationFilter, TimelineWhereInput>
    memoryCard?: XOR<MemoryCardRelationFilter, MemoryCardWhereInput>
  }

  export type TimelineEntryOrderByWithRelationInput = {
    id?: SortOrder
    timelineId?: SortOrder
    memoryCardId?: SortOrder
    order?: SortOrder
    timeline?: TimelineOrderByWithRelationInput
    memoryCard?: MemoryCardOrderByWithRelationInput
  }

  export type TimelineEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memoryCardId?: string
    AND?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    OR?: TimelineEntryWhereInput[]
    NOT?: TimelineEntryWhereInput | TimelineEntryWhereInput[]
    timelineId?: StringFilter<"TimelineEntry"> | string
    order?: IntFilter<"TimelineEntry"> | number
    timeline?: XOR<TimelineRelationFilter, TimelineWhereInput>
    memoryCard?: XOR<MemoryCardRelationFilter, MemoryCardWhereInput>
  }, "id" | "memoryCardId">

  export type TimelineEntryOrderByWithAggregationInput = {
    id?: SortOrder
    timelineId?: SortOrder
    memoryCardId?: SortOrder
    order?: SortOrder
    _count?: TimelineEntryCountOrderByAggregateInput
    _avg?: TimelineEntryAvgOrderByAggregateInput
    _max?: TimelineEntryMaxOrderByAggregateInput
    _min?: TimelineEntryMinOrderByAggregateInput
    _sum?: TimelineEntrySumOrderByAggregateInput
  }

  export type TimelineEntryScalarWhereWithAggregatesInput = {
    AND?: TimelineEntryScalarWhereWithAggregatesInput | TimelineEntryScalarWhereWithAggregatesInput[]
    OR?: TimelineEntryScalarWhereWithAggregatesInput[]
    NOT?: TimelineEntryScalarWhereWithAggregatesInput | TimelineEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimelineEntry"> | string
    timelineId?: StringWithAggregatesFilter<"TimelineEntry"> | string
    memoryCardId?: StringWithAggregatesFilter<"TimelineEntry"> | string
    order?: IntWithAggregatesFilter<"TimelineEntry"> | number
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    metadata?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    metadata?: StringNullableFilter<"AuditLog"> | string | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    metadata?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryCardCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryCardUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryCardUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryCardUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCardCreateInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    user: UserCreateNestedOneWithoutMemoriesInput
    supersedes?: MemoryCardCreateNestedOneWithoutSupersededByInput
    supersededBy?: MemoryCardCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
    supersededBy?: MemoryCardUncheckedCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagUncheckedCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentUncheckedCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryUncheckedCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    supersedes?: MemoryCardUpdateOneWithoutSupersededByNestedInput
    supersededBy?: MemoryCardUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    supersededBy?: MemoryCardUncheckedUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUncheckedUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUncheckedUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardCreateManyInput = {
    id?: string
    userId: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
  }

  export type MemoryCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemoryCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    type: string
    memories?: MemoryCardTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    memories?: MemoryCardTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    memories?: MemoryCardTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    memories?: MemoryCardTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    type: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryCardTagCreateInput = {
    memoryCard: MemoryCardCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutMemoriesInput
  }

  export type MemoryCardTagUncheckedCreateInput = {
    memoryCardId: string
    tagId: string
  }

  export type MemoryCardTagUpdateInput = {
    memoryCard?: MemoryCardUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutMemoriesNestedInput
  }

  export type MemoryCardTagUncheckedUpdateInput = {
    memoryCardId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryCardTagCreateManyInput = {
    memoryCardId: string
    tagId: string
  }

  export type MemoryCardTagUpdateManyMutationInput = {

  }

  export type MemoryCardTagUncheckedUpdateManyInput = {
    memoryCardId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryAttachmentCreateInput = {
    id?: string
    type: string
    url: string
    transcript?: string | null
    createdAt?: Date | string
    memoryCard: MemoryCardCreateNestedOneWithoutAttachmentsInput
  }

  export type MemoryAttachmentUncheckedCreateInput = {
    id?: string
    memoryCardId: string
    type: string
    url: string
    transcript?: string | null
    createdAt?: Date | string
  }

  export type MemoryAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memoryCard?: MemoryCardUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type MemoryAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryCardId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryAttachmentCreateManyInput = {
    id?: string
    memoryCardId: string
    type: string
    url: string
    transcript?: string | null
    createdAt?: Date | string
  }

  export type MemoryAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryCardId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimelineCreateInput = {
    id?: string
    userId: string
    entries?: TimelineEntryCreateNestedManyWithoutTimelineInput
  }

  export type TimelineUncheckedCreateInput = {
    id?: string
    userId: string
    entries?: TimelineEntryUncheckedCreateNestedManyWithoutTimelineInput
  }

  export type TimelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entries?: TimelineEntryUpdateManyWithoutTimelineNestedInput
  }

  export type TimelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entries?: TimelineEntryUncheckedUpdateManyWithoutTimelineNestedInput
  }

  export type TimelineCreateManyInput = {
    id?: string
    userId: string
  }

  export type TimelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimelineEntryCreateInput = {
    id?: string
    order: number
    timeline: TimelineCreateNestedOneWithoutEntriesInput
    memoryCard: MemoryCardCreateNestedOneWithoutTimelineEntryInput
  }

  export type TimelineEntryUncheckedCreateInput = {
    id?: string
    timelineId: string
    memoryCardId: string
    order: number
  }

  export type TimelineEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    timeline?: TimelineUpdateOneRequiredWithoutEntriesNestedInput
    memoryCard?: MemoryCardUpdateOneRequiredWithoutTimelineEntryNestedInput
  }

  export type TimelineEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timelineId?: StringFieldUpdateOperationsInput | string
    memoryCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineEntryCreateManyInput = {
    id?: string
    timelineId: string
    memoryCardId: string
    order: number
  }

  export type TimelineEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timelineId?: StringFieldUpdateOperationsInput | string
    memoryCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AuditLogCreateInput = {
    id?: string
    userId: string
    action: string
    entityId: string
    timestamp?: Date | string
    metadata?: string | null
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    entityId: string
    timestamp?: Date | string
    metadata?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    entityId: string
    timestamp?: Date | string
    metadata?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MemoryCardListRelationFilter = {
    every?: MemoryCardWhereInput
    some?: MemoryCardWhereInput
    none?: MemoryCardWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MemoryCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MemoryCardNullableRelationFilter = {
    is?: MemoryCardWhereInput | null
    isNot?: MemoryCardWhereInput | null
  }

  export type MemoryCardTagListRelationFilter = {
    every?: MemoryCardTagWhereInput
    some?: MemoryCardTagWhereInput
    none?: MemoryCardTagWhereInput
  }

  export type MemoryAttachmentListRelationFilter = {
    every?: MemoryAttachmentWhereInput
    some?: MemoryAttachmentWhereInput
    none?: MemoryAttachmentWhereInput
  }

  export type TimelineEntryNullableRelationFilter = {
    is?: TimelineEntryWhereInput | null
    isNot?: TimelineEntryWhereInput | null
  }

  export type MemoryCardTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemoryAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemoryCardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    dateConfidence?: SortOrder
    submittedAt?: SortOrder
    isSuperseded?: SortOrder
    supersedesId?: SortOrder
    hash?: SortOrder
    audioData?: SortOrder
  }

  export type MemoryCardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    dateConfidence?: SortOrder
    submittedAt?: SortOrder
    isSuperseded?: SortOrder
    supersedesId?: SortOrder
    hash?: SortOrder
    audioData?: SortOrder
  }

  export type MemoryCardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    dateConfidence?: SortOrder
    submittedAt?: SortOrder
    isSuperseded?: SortOrder
    supersedesId?: SortOrder
    hash?: SortOrder
    audioData?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type MemoryCardRelationFilter = {
    is?: MemoryCardWhereInput
    isNot?: MemoryCardWhereInput
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type MemoryCardTagMemoryCardIdTagIdCompoundUniqueInput = {
    memoryCardId: string
    tagId: string
  }

  export type MemoryCardTagCountOrderByAggregateInput = {
    memoryCardId?: SortOrder
    tagId?: SortOrder
  }

  export type MemoryCardTagMaxOrderByAggregateInput = {
    memoryCardId?: SortOrder
    tagId?: SortOrder
  }

  export type MemoryCardTagMinOrderByAggregateInput = {
    memoryCardId?: SortOrder
    tagId?: SortOrder
  }

  export type MemoryAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    memoryCardId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    transcript?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    memoryCardId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    transcript?: SortOrder
    createdAt?: SortOrder
  }

  export type MemoryAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    memoryCardId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    transcript?: SortOrder
    createdAt?: SortOrder
  }

  export type TimelineEntryListRelationFilter = {
    every?: TimelineEntryWhereInput
    some?: TimelineEntryWhereInput
    none?: TimelineEntryWhereInput
  }

  export type TimelineEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimelineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TimelineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TimelineRelationFilter = {
    is?: TimelineWhereInput
    isNot?: TimelineWhereInput
  }

  export type TimelineEntryCountOrderByAggregateInput = {
    id?: SortOrder
    timelineId?: SortOrder
    memoryCardId?: SortOrder
    order?: SortOrder
  }

  export type TimelineEntryAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TimelineEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    timelineId?: SortOrder
    memoryCardId?: SortOrder
    order?: SortOrder
  }

  export type TimelineEntryMinOrderByAggregateInput = {
    id?: SortOrder
    timelineId?: SortOrder
    memoryCardId?: SortOrder
    order?: SortOrder
  }

  export type TimelineEntrySumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityId?: SortOrder
    timestamp?: SortOrder
    metadata?: SortOrder
  }

  export type MemoryCardCreateNestedManyWithoutUserInput = {
    create?: XOR<MemoryCardCreateWithoutUserInput, MemoryCardUncheckedCreateWithoutUserInput> | MemoryCardCreateWithoutUserInput[] | MemoryCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCardCreateOrConnectWithoutUserInput | MemoryCardCreateOrConnectWithoutUserInput[]
    createMany?: MemoryCardCreateManyUserInputEnvelope
    connect?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type MemoryCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MemoryCardCreateWithoutUserInput, MemoryCardUncheckedCreateWithoutUserInput> | MemoryCardCreateWithoutUserInput[] | MemoryCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCardCreateOrConnectWithoutUserInput | MemoryCardCreateOrConnectWithoutUserInput[]
    createMany?: MemoryCardCreateManyUserInputEnvelope
    connect?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MemoryCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemoryCardCreateWithoutUserInput, MemoryCardUncheckedCreateWithoutUserInput> | MemoryCardCreateWithoutUserInput[] | MemoryCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCardCreateOrConnectWithoutUserInput | MemoryCardCreateOrConnectWithoutUserInput[]
    upsert?: MemoryCardUpsertWithWhereUniqueWithoutUserInput | MemoryCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemoryCardCreateManyUserInputEnvelope
    set?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    disconnect?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    delete?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    connect?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    update?: MemoryCardUpdateWithWhereUniqueWithoutUserInput | MemoryCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemoryCardUpdateManyWithWhereWithoutUserInput | MemoryCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemoryCardScalarWhereInput | MemoryCardScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type MemoryCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemoryCardCreateWithoutUserInput, MemoryCardUncheckedCreateWithoutUserInput> | MemoryCardCreateWithoutUserInput[] | MemoryCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemoryCardCreateOrConnectWithoutUserInput | MemoryCardCreateOrConnectWithoutUserInput[]
    upsert?: MemoryCardUpsertWithWhereUniqueWithoutUserInput | MemoryCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemoryCardCreateManyUserInputEnvelope
    set?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    disconnect?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    delete?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    connect?: MemoryCardWhereUniqueInput | MemoryCardWhereUniqueInput[]
    update?: MemoryCardUpdateWithWhereUniqueWithoutUserInput | MemoryCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemoryCardUpdateManyWithWhereWithoutUserInput | MemoryCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemoryCardScalarWhereInput | MemoryCardScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutMemoriesInput = {
    create?: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemoriesInput
    connect?: UserWhereUniqueInput
  }

  export type MemoryCardCreateNestedOneWithoutSupersededByInput = {
    create?: XOR<MemoryCardCreateWithoutSupersededByInput, MemoryCardUncheckedCreateWithoutSupersededByInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutSupersededByInput
    connect?: MemoryCardWhereUniqueInput
  }

  export type MemoryCardCreateNestedOneWithoutSupersedesInput = {
    create?: XOR<MemoryCardCreateWithoutSupersedesInput, MemoryCardUncheckedCreateWithoutSupersedesInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutSupersedesInput
    connect?: MemoryCardWhereUniqueInput
  }

  export type MemoryCardTagCreateNestedManyWithoutMemoryCardInput = {
    create?: XOR<MemoryCardTagCreateWithoutMemoryCardInput, MemoryCardTagUncheckedCreateWithoutMemoryCardInput> | MemoryCardTagCreateWithoutMemoryCardInput[] | MemoryCardTagUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutMemoryCardInput | MemoryCardTagCreateOrConnectWithoutMemoryCardInput[]
    createMany?: MemoryCardTagCreateManyMemoryCardInputEnvelope
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
  }

  export type MemoryAttachmentCreateNestedManyWithoutMemoryCardInput = {
    create?: XOR<MemoryAttachmentCreateWithoutMemoryCardInput, MemoryAttachmentUncheckedCreateWithoutMemoryCardInput> | MemoryAttachmentCreateWithoutMemoryCardInput[] | MemoryAttachmentUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryAttachmentCreateOrConnectWithoutMemoryCardInput | MemoryAttachmentCreateOrConnectWithoutMemoryCardInput[]
    createMany?: MemoryAttachmentCreateManyMemoryCardInputEnvelope
    connect?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
  }

  export type TimelineEntryCreateNestedOneWithoutMemoryCardInput = {
    create?: XOR<TimelineEntryCreateWithoutMemoryCardInput, TimelineEntryUncheckedCreateWithoutMemoryCardInput>
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutMemoryCardInput
    connect?: TimelineEntryWhereUniqueInput
  }

  export type MemoryCardUncheckedCreateNestedOneWithoutSupersedesInput = {
    create?: XOR<MemoryCardCreateWithoutSupersedesInput, MemoryCardUncheckedCreateWithoutSupersedesInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutSupersedesInput
    connect?: MemoryCardWhereUniqueInput
  }

  export type MemoryCardTagUncheckedCreateNestedManyWithoutMemoryCardInput = {
    create?: XOR<MemoryCardTagCreateWithoutMemoryCardInput, MemoryCardTagUncheckedCreateWithoutMemoryCardInput> | MemoryCardTagCreateWithoutMemoryCardInput[] | MemoryCardTagUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutMemoryCardInput | MemoryCardTagCreateOrConnectWithoutMemoryCardInput[]
    createMany?: MemoryCardTagCreateManyMemoryCardInputEnvelope
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
  }

  export type MemoryAttachmentUncheckedCreateNestedManyWithoutMemoryCardInput = {
    create?: XOR<MemoryAttachmentCreateWithoutMemoryCardInput, MemoryAttachmentUncheckedCreateWithoutMemoryCardInput> | MemoryAttachmentCreateWithoutMemoryCardInput[] | MemoryAttachmentUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryAttachmentCreateOrConnectWithoutMemoryCardInput | MemoryAttachmentCreateOrConnectWithoutMemoryCardInput[]
    createMany?: MemoryAttachmentCreateManyMemoryCardInputEnvelope
    connect?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
  }

  export type TimelineEntryUncheckedCreateNestedOneWithoutMemoryCardInput = {
    create?: XOR<TimelineEntryCreateWithoutMemoryCardInput, TimelineEntryUncheckedCreateWithoutMemoryCardInput>
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutMemoryCardInput
    connect?: TimelineEntryWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMemoriesNestedInput = {
    create?: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemoriesInput
    upsert?: UserUpsertWithoutMemoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemoriesInput, UserUpdateWithoutMemoriesInput>, UserUncheckedUpdateWithoutMemoriesInput>
  }

  export type MemoryCardUpdateOneWithoutSupersededByNestedInput = {
    create?: XOR<MemoryCardCreateWithoutSupersededByInput, MemoryCardUncheckedCreateWithoutSupersededByInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutSupersededByInput
    upsert?: MemoryCardUpsertWithoutSupersededByInput
    disconnect?: MemoryCardWhereInput | boolean
    delete?: MemoryCardWhereInput | boolean
    connect?: MemoryCardWhereUniqueInput
    update?: XOR<XOR<MemoryCardUpdateToOneWithWhereWithoutSupersededByInput, MemoryCardUpdateWithoutSupersededByInput>, MemoryCardUncheckedUpdateWithoutSupersededByInput>
  }

  export type MemoryCardUpdateOneWithoutSupersedesNestedInput = {
    create?: XOR<MemoryCardCreateWithoutSupersedesInput, MemoryCardUncheckedCreateWithoutSupersedesInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutSupersedesInput
    upsert?: MemoryCardUpsertWithoutSupersedesInput
    disconnect?: MemoryCardWhereInput | boolean
    delete?: MemoryCardWhereInput | boolean
    connect?: MemoryCardWhereUniqueInput
    update?: XOR<XOR<MemoryCardUpdateToOneWithWhereWithoutSupersedesInput, MemoryCardUpdateWithoutSupersedesInput>, MemoryCardUncheckedUpdateWithoutSupersedesInput>
  }

  export type MemoryCardTagUpdateManyWithoutMemoryCardNestedInput = {
    create?: XOR<MemoryCardTagCreateWithoutMemoryCardInput, MemoryCardTagUncheckedCreateWithoutMemoryCardInput> | MemoryCardTagCreateWithoutMemoryCardInput[] | MemoryCardTagUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutMemoryCardInput | MemoryCardTagCreateOrConnectWithoutMemoryCardInput[]
    upsert?: MemoryCardTagUpsertWithWhereUniqueWithoutMemoryCardInput | MemoryCardTagUpsertWithWhereUniqueWithoutMemoryCardInput[]
    createMany?: MemoryCardTagCreateManyMemoryCardInputEnvelope
    set?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    disconnect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    delete?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    update?: MemoryCardTagUpdateWithWhereUniqueWithoutMemoryCardInput | MemoryCardTagUpdateWithWhereUniqueWithoutMemoryCardInput[]
    updateMany?: MemoryCardTagUpdateManyWithWhereWithoutMemoryCardInput | MemoryCardTagUpdateManyWithWhereWithoutMemoryCardInput[]
    deleteMany?: MemoryCardTagScalarWhereInput | MemoryCardTagScalarWhereInput[]
  }

  export type MemoryAttachmentUpdateManyWithoutMemoryCardNestedInput = {
    create?: XOR<MemoryAttachmentCreateWithoutMemoryCardInput, MemoryAttachmentUncheckedCreateWithoutMemoryCardInput> | MemoryAttachmentCreateWithoutMemoryCardInput[] | MemoryAttachmentUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryAttachmentCreateOrConnectWithoutMemoryCardInput | MemoryAttachmentCreateOrConnectWithoutMemoryCardInput[]
    upsert?: MemoryAttachmentUpsertWithWhereUniqueWithoutMemoryCardInput | MemoryAttachmentUpsertWithWhereUniqueWithoutMemoryCardInput[]
    createMany?: MemoryAttachmentCreateManyMemoryCardInputEnvelope
    set?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    disconnect?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    delete?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    connect?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    update?: MemoryAttachmentUpdateWithWhereUniqueWithoutMemoryCardInput | MemoryAttachmentUpdateWithWhereUniqueWithoutMemoryCardInput[]
    updateMany?: MemoryAttachmentUpdateManyWithWhereWithoutMemoryCardInput | MemoryAttachmentUpdateManyWithWhereWithoutMemoryCardInput[]
    deleteMany?: MemoryAttachmentScalarWhereInput | MemoryAttachmentScalarWhereInput[]
  }

  export type TimelineEntryUpdateOneWithoutMemoryCardNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutMemoryCardInput, TimelineEntryUncheckedCreateWithoutMemoryCardInput>
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutMemoryCardInput
    upsert?: TimelineEntryUpsertWithoutMemoryCardInput
    disconnect?: TimelineEntryWhereInput | boolean
    delete?: TimelineEntryWhereInput | boolean
    connect?: TimelineEntryWhereUniqueInput
    update?: XOR<XOR<TimelineEntryUpdateToOneWithWhereWithoutMemoryCardInput, TimelineEntryUpdateWithoutMemoryCardInput>, TimelineEntryUncheckedUpdateWithoutMemoryCardInput>
  }

  export type MemoryCardUncheckedUpdateOneWithoutSupersedesNestedInput = {
    create?: XOR<MemoryCardCreateWithoutSupersedesInput, MemoryCardUncheckedCreateWithoutSupersedesInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutSupersedesInput
    upsert?: MemoryCardUpsertWithoutSupersedesInput
    disconnect?: MemoryCardWhereInput | boolean
    delete?: MemoryCardWhereInput | boolean
    connect?: MemoryCardWhereUniqueInput
    update?: XOR<XOR<MemoryCardUpdateToOneWithWhereWithoutSupersedesInput, MemoryCardUpdateWithoutSupersedesInput>, MemoryCardUncheckedUpdateWithoutSupersedesInput>
  }

  export type MemoryCardTagUncheckedUpdateManyWithoutMemoryCardNestedInput = {
    create?: XOR<MemoryCardTagCreateWithoutMemoryCardInput, MemoryCardTagUncheckedCreateWithoutMemoryCardInput> | MemoryCardTagCreateWithoutMemoryCardInput[] | MemoryCardTagUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutMemoryCardInput | MemoryCardTagCreateOrConnectWithoutMemoryCardInput[]
    upsert?: MemoryCardTagUpsertWithWhereUniqueWithoutMemoryCardInput | MemoryCardTagUpsertWithWhereUniqueWithoutMemoryCardInput[]
    createMany?: MemoryCardTagCreateManyMemoryCardInputEnvelope
    set?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    disconnect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    delete?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    update?: MemoryCardTagUpdateWithWhereUniqueWithoutMemoryCardInput | MemoryCardTagUpdateWithWhereUniqueWithoutMemoryCardInput[]
    updateMany?: MemoryCardTagUpdateManyWithWhereWithoutMemoryCardInput | MemoryCardTagUpdateManyWithWhereWithoutMemoryCardInput[]
    deleteMany?: MemoryCardTagScalarWhereInput | MemoryCardTagScalarWhereInput[]
  }

  export type MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardNestedInput = {
    create?: XOR<MemoryAttachmentCreateWithoutMemoryCardInput, MemoryAttachmentUncheckedCreateWithoutMemoryCardInput> | MemoryAttachmentCreateWithoutMemoryCardInput[] | MemoryAttachmentUncheckedCreateWithoutMemoryCardInput[]
    connectOrCreate?: MemoryAttachmentCreateOrConnectWithoutMemoryCardInput | MemoryAttachmentCreateOrConnectWithoutMemoryCardInput[]
    upsert?: MemoryAttachmentUpsertWithWhereUniqueWithoutMemoryCardInput | MemoryAttachmentUpsertWithWhereUniqueWithoutMemoryCardInput[]
    createMany?: MemoryAttachmentCreateManyMemoryCardInputEnvelope
    set?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    disconnect?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    delete?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    connect?: MemoryAttachmentWhereUniqueInput | MemoryAttachmentWhereUniqueInput[]
    update?: MemoryAttachmentUpdateWithWhereUniqueWithoutMemoryCardInput | MemoryAttachmentUpdateWithWhereUniqueWithoutMemoryCardInput[]
    updateMany?: MemoryAttachmentUpdateManyWithWhereWithoutMemoryCardInput | MemoryAttachmentUpdateManyWithWhereWithoutMemoryCardInput[]
    deleteMany?: MemoryAttachmentScalarWhereInput | MemoryAttachmentScalarWhereInput[]
  }

  export type TimelineEntryUncheckedUpdateOneWithoutMemoryCardNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutMemoryCardInput, TimelineEntryUncheckedCreateWithoutMemoryCardInput>
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutMemoryCardInput
    upsert?: TimelineEntryUpsertWithoutMemoryCardInput
    disconnect?: TimelineEntryWhereInput | boolean
    delete?: TimelineEntryWhereInput | boolean
    connect?: TimelineEntryWhereUniqueInput
    update?: XOR<XOR<TimelineEntryUpdateToOneWithWhereWithoutMemoryCardInput, TimelineEntryUpdateWithoutMemoryCardInput>, TimelineEntryUncheckedUpdateWithoutMemoryCardInput>
  }

  export type MemoryCardTagCreateNestedManyWithoutTagInput = {
    create?: XOR<MemoryCardTagCreateWithoutTagInput, MemoryCardTagUncheckedCreateWithoutTagInput> | MemoryCardTagCreateWithoutTagInput[] | MemoryCardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutTagInput | MemoryCardTagCreateOrConnectWithoutTagInput[]
    createMany?: MemoryCardTagCreateManyTagInputEnvelope
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
  }

  export type MemoryCardTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<MemoryCardTagCreateWithoutTagInput, MemoryCardTagUncheckedCreateWithoutTagInput> | MemoryCardTagCreateWithoutTagInput[] | MemoryCardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutTagInput | MemoryCardTagCreateOrConnectWithoutTagInput[]
    createMany?: MemoryCardTagCreateManyTagInputEnvelope
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
  }

  export type MemoryCardTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<MemoryCardTagCreateWithoutTagInput, MemoryCardTagUncheckedCreateWithoutTagInput> | MemoryCardTagCreateWithoutTagInput[] | MemoryCardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutTagInput | MemoryCardTagCreateOrConnectWithoutTagInput[]
    upsert?: MemoryCardTagUpsertWithWhereUniqueWithoutTagInput | MemoryCardTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MemoryCardTagCreateManyTagInputEnvelope
    set?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    disconnect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    delete?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    update?: MemoryCardTagUpdateWithWhereUniqueWithoutTagInput | MemoryCardTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MemoryCardTagUpdateManyWithWhereWithoutTagInput | MemoryCardTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MemoryCardTagScalarWhereInput | MemoryCardTagScalarWhereInput[]
  }

  export type MemoryCardTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<MemoryCardTagCreateWithoutTagInput, MemoryCardTagUncheckedCreateWithoutTagInput> | MemoryCardTagCreateWithoutTagInput[] | MemoryCardTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: MemoryCardTagCreateOrConnectWithoutTagInput | MemoryCardTagCreateOrConnectWithoutTagInput[]
    upsert?: MemoryCardTagUpsertWithWhereUniqueWithoutTagInput | MemoryCardTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: MemoryCardTagCreateManyTagInputEnvelope
    set?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    disconnect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    delete?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    connect?: MemoryCardTagWhereUniqueInput | MemoryCardTagWhereUniqueInput[]
    update?: MemoryCardTagUpdateWithWhereUniqueWithoutTagInput | MemoryCardTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: MemoryCardTagUpdateManyWithWhereWithoutTagInput | MemoryCardTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: MemoryCardTagScalarWhereInput | MemoryCardTagScalarWhereInput[]
  }

  export type MemoryCardCreateNestedOneWithoutTagsInput = {
    create?: XOR<MemoryCardCreateWithoutTagsInput, MemoryCardUncheckedCreateWithoutTagsInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutTagsInput
    connect?: MemoryCardWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutMemoriesInput = {
    create?: XOR<TagCreateWithoutMemoriesInput, TagUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: TagCreateOrConnectWithoutMemoriesInput
    connect?: TagWhereUniqueInput
  }

  export type MemoryCardUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<MemoryCardCreateWithoutTagsInput, MemoryCardUncheckedCreateWithoutTagsInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutTagsInput
    upsert?: MemoryCardUpsertWithoutTagsInput
    connect?: MemoryCardWhereUniqueInput
    update?: XOR<XOR<MemoryCardUpdateToOneWithWhereWithoutTagsInput, MemoryCardUpdateWithoutTagsInput>, MemoryCardUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutMemoriesNestedInput = {
    create?: XOR<TagCreateWithoutMemoriesInput, TagUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: TagCreateOrConnectWithoutMemoriesInput
    upsert?: TagUpsertWithoutMemoriesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutMemoriesInput, TagUpdateWithoutMemoriesInput>, TagUncheckedUpdateWithoutMemoriesInput>
  }

  export type MemoryCardCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<MemoryCardCreateWithoutAttachmentsInput, MemoryCardUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutAttachmentsInput
    connect?: MemoryCardWhereUniqueInput
  }

  export type MemoryCardUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<MemoryCardCreateWithoutAttachmentsInput, MemoryCardUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutAttachmentsInput
    upsert?: MemoryCardUpsertWithoutAttachmentsInput
    connect?: MemoryCardWhereUniqueInput
    update?: XOR<XOR<MemoryCardUpdateToOneWithWhereWithoutAttachmentsInput, MemoryCardUpdateWithoutAttachmentsInput>, MemoryCardUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TimelineEntryCreateNestedManyWithoutTimelineInput = {
    create?: XOR<TimelineEntryCreateWithoutTimelineInput, TimelineEntryUncheckedCreateWithoutTimelineInput> | TimelineEntryCreateWithoutTimelineInput[] | TimelineEntryUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutTimelineInput | TimelineEntryCreateOrConnectWithoutTimelineInput[]
    createMany?: TimelineEntryCreateManyTimelineInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type TimelineEntryUncheckedCreateNestedManyWithoutTimelineInput = {
    create?: XOR<TimelineEntryCreateWithoutTimelineInput, TimelineEntryUncheckedCreateWithoutTimelineInput> | TimelineEntryCreateWithoutTimelineInput[] | TimelineEntryUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutTimelineInput | TimelineEntryCreateOrConnectWithoutTimelineInput[]
    createMany?: TimelineEntryCreateManyTimelineInputEnvelope
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
  }

  export type TimelineEntryUpdateManyWithoutTimelineNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutTimelineInput, TimelineEntryUncheckedCreateWithoutTimelineInput> | TimelineEntryCreateWithoutTimelineInput[] | TimelineEntryUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutTimelineInput | TimelineEntryCreateOrConnectWithoutTimelineInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutTimelineInput | TimelineEntryUpsertWithWhereUniqueWithoutTimelineInput[]
    createMany?: TimelineEntryCreateManyTimelineInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutTimelineInput | TimelineEntryUpdateWithWhereUniqueWithoutTimelineInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutTimelineInput | TimelineEntryUpdateManyWithWhereWithoutTimelineInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type TimelineEntryUncheckedUpdateManyWithoutTimelineNestedInput = {
    create?: XOR<TimelineEntryCreateWithoutTimelineInput, TimelineEntryUncheckedCreateWithoutTimelineInput> | TimelineEntryCreateWithoutTimelineInput[] | TimelineEntryUncheckedCreateWithoutTimelineInput[]
    connectOrCreate?: TimelineEntryCreateOrConnectWithoutTimelineInput | TimelineEntryCreateOrConnectWithoutTimelineInput[]
    upsert?: TimelineEntryUpsertWithWhereUniqueWithoutTimelineInput | TimelineEntryUpsertWithWhereUniqueWithoutTimelineInput[]
    createMany?: TimelineEntryCreateManyTimelineInputEnvelope
    set?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    disconnect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    delete?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    connect?: TimelineEntryWhereUniqueInput | TimelineEntryWhereUniqueInput[]
    update?: TimelineEntryUpdateWithWhereUniqueWithoutTimelineInput | TimelineEntryUpdateWithWhereUniqueWithoutTimelineInput[]
    updateMany?: TimelineEntryUpdateManyWithWhereWithoutTimelineInput | TimelineEntryUpdateManyWithWhereWithoutTimelineInput[]
    deleteMany?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
  }

  export type TimelineCreateNestedOneWithoutEntriesInput = {
    create?: XOR<TimelineCreateWithoutEntriesInput, TimelineUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutEntriesInput
    connect?: TimelineWhereUniqueInput
  }

  export type MemoryCardCreateNestedOneWithoutTimelineEntryInput = {
    create?: XOR<MemoryCardCreateWithoutTimelineEntryInput, MemoryCardUncheckedCreateWithoutTimelineEntryInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutTimelineEntryInput
    connect?: MemoryCardWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimelineUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<TimelineCreateWithoutEntriesInput, TimelineUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: TimelineCreateOrConnectWithoutEntriesInput
    upsert?: TimelineUpsertWithoutEntriesInput
    connect?: TimelineWhereUniqueInput
    update?: XOR<XOR<TimelineUpdateToOneWithWhereWithoutEntriesInput, TimelineUpdateWithoutEntriesInput>, TimelineUncheckedUpdateWithoutEntriesInput>
  }

  export type MemoryCardUpdateOneRequiredWithoutTimelineEntryNestedInput = {
    create?: XOR<MemoryCardCreateWithoutTimelineEntryInput, MemoryCardUncheckedCreateWithoutTimelineEntryInput>
    connectOrCreate?: MemoryCardCreateOrConnectWithoutTimelineEntryInput
    upsert?: MemoryCardUpsertWithoutTimelineEntryInput
    connect?: MemoryCardWhereUniqueInput
    update?: XOR<XOR<MemoryCardUpdateToOneWithWhereWithoutTimelineEntryInput, MemoryCardUpdateWithoutTimelineEntryInput>, MemoryCardUncheckedUpdateWithoutTimelineEntryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MemoryCardCreateWithoutUserInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    supersedes?: MemoryCardCreateNestedOneWithoutSupersededByInput
    supersededBy?: MemoryCardCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
    supersededBy?: MemoryCardUncheckedCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagUncheckedCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentUncheckedCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryUncheckedCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardCreateOrConnectWithoutUserInput = {
    where: MemoryCardWhereUniqueInput
    create: XOR<MemoryCardCreateWithoutUserInput, MemoryCardUncheckedCreateWithoutUserInput>
  }

  export type MemoryCardCreateManyUserInputEnvelope = {
    data: MemoryCardCreateManyUserInput | MemoryCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MemoryCardUpsertWithWhereUniqueWithoutUserInput = {
    where: MemoryCardWhereUniqueInput
    update: XOR<MemoryCardUpdateWithoutUserInput, MemoryCardUncheckedUpdateWithoutUserInput>
    create: XOR<MemoryCardCreateWithoutUserInput, MemoryCardUncheckedCreateWithoutUserInput>
  }

  export type MemoryCardUpdateWithWhereUniqueWithoutUserInput = {
    where: MemoryCardWhereUniqueInput
    data: XOR<MemoryCardUpdateWithoutUserInput, MemoryCardUncheckedUpdateWithoutUserInput>
  }

  export type MemoryCardUpdateManyWithWhereWithoutUserInput = {
    where: MemoryCardScalarWhereInput
    data: XOR<MemoryCardUpdateManyMutationInput, MemoryCardUncheckedUpdateManyWithoutUserInput>
  }

  export type MemoryCardScalarWhereInput = {
    AND?: MemoryCardScalarWhereInput | MemoryCardScalarWhereInput[]
    OR?: MemoryCardScalarWhereInput[]
    NOT?: MemoryCardScalarWhereInput | MemoryCardScalarWhereInput[]
    id?: StringFilter<"MemoryCard"> | string
    userId?: StringFilter<"MemoryCard"> | string
    content?: StringFilter<"MemoryCard"> | string
    eventDate?: DateTimeNullableFilter<"MemoryCard"> | Date | string | null
    eventTime?: StringNullableFilter<"MemoryCard"> | string | null
    dateConfidence?: StringFilter<"MemoryCard"> | string
    submittedAt?: DateTimeFilter<"MemoryCard"> | Date | string
    isSuperseded?: BoolFilter<"MemoryCard"> | boolean
    supersedesId?: StringNullableFilter<"MemoryCard"> | string | null
    hash?: StringFilter<"MemoryCard"> | string
    audioData?: StringNullableFilter<"MemoryCard"> | string | null
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    memories?: MemoryCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memories?: MemoryCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMemoriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemoriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
  }

  export type MemoryCardCreateWithoutSupersededByInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    user: UserCreateNestedOneWithoutMemoriesInput
    supersedes?: MemoryCardCreateNestedOneWithoutSupersededByInput
    tags?: MemoryCardTagCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardUncheckedCreateWithoutSupersededByInput = {
    id?: string
    userId: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
    tags?: MemoryCardTagUncheckedCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentUncheckedCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryUncheckedCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardCreateOrConnectWithoutSupersededByInput = {
    where: MemoryCardWhereUniqueInput
    create: XOR<MemoryCardCreateWithoutSupersededByInput, MemoryCardUncheckedCreateWithoutSupersededByInput>
  }

  export type MemoryCardCreateWithoutSupersedesInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    user: UserCreateNestedOneWithoutMemoriesInput
    supersededBy?: MemoryCardCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardUncheckedCreateWithoutSupersedesInput = {
    id?: string
    userId: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    supersededBy?: MemoryCardUncheckedCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagUncheckedCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentUncheckedCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryUncheckedCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardCreateOrConnectWithoutSupersedesInput = {
    where: MemoryCardWhereUniqueInput
    create: XOR<MemoryCardCreateWithoutSupersedesInput, MemoryCardUncheckedCreateWithoutSupersedesInput>
  }

  export type MemoryCardTagCreateWithoutMemoryCardInput = {
    tag: TagCreateNestedOneWithoutMemoriesInput
  }

  export type MemoryCardTagUncheckedCreateWithoutMemoryCardInput = {
    tagId: string
  }

  export type MemoryCardTagCreateOrConnectWithoutMemoryCardInput = {
    where: MemoryCardTagWhereUniqueInput
    create: XOR<MemoryCardTagCreateWithoutMemoryCardInput, MemoryCardTagUncheckedCreateWithoutMemoryCardInput>
  }

  export type MemoryCardTagCreateManyMemoryCardInputEnvelope = {
    data: MemoryCardTagCreateManyMemoryCardInput | MemoryCardTagCreateManyMemoryCardInput[]
    skipDuplicates?: boolean
  }

  export type MemoryAttachmentCreateWithoutMemoryCardInput = {
    id?: string
    type: string
    url: string
    transcript?: string | null
    createdAt?: Date | string
  }

  export type MemoryAttachmentUncheckedCreateWithoutMemoryCardInput = {
    id?: string
    type: string
    url: string
    transcript?: string | null
    createdAt?: Date | string
  }

  export type MemoryAttachmentCreateOrConnectWithoutMemoryCardInput = {
    where: MemoryAttachmentWhereUniqueInput
    create: XOR<MemoryAttachmentCreateWithoutMemoryCardInput, MemoryAttachmentUncheckedCreateWithoutMemoryCardInput>
  }

  export type MemoryAttachmentCreateManyMemoryCardInputEnvelope = {
    data: MemoryAttachmentCreateManyMemoryCardInput | MemoryAttachmentCreateManyMemoryCardInput[]
    skipDuplicates?: boolean
  }

  export type TimelineEntryCreateWithoutMemoryCardInput = {
    id?: string
    order: number
    timeline: TimelineCreateNestedOneWithoutEntriesInput
  }

  export type TimelineEntryUncheckedCreateWithoutMemoryCardInput = {
    id?: string
    timelineId: string
    order: number
  }

  export type TimelineEntryCreateOrConnectWithoutMemoryCardInput = {
    where: TimelineEntryWhereUniqueInput
    create: XOR<TimelineEntryCreateWithoutMemoryCardInput, TimelineEntryUncheckedCreateWithoutMemoryCardInput>
  }

  export type UserUpsertWithoutMemoriesInput = {
    update: XOR<UserUpdateWithoutMemoriesInput, UserUncheckedUpdateWithoutMemoriesInput>
    create: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemoriesInput, UserUncheckedUpdateWithoutMemoriesInput>
  }

  export type UserUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MemoryCardUpsertWithoutSupersededByInput = {
    update: XOR<MemoryCardUpdateWithoutSupersededByInput, MemoryCardUncheckedUpdateWithoutSupersededByInput>
    create: XOR<MemoryCardCreateWithoutSupersededByInput, MemoryCardUncheckedCreateWithoutSupersededByInput>
    where?: MemoryCardWhereInput
  }

  export type MemoryCardUpdateToOneWithWhereWithoutSupersededByInput = {
    where?: MemoryCardWhereInput
    data: XOR<MemoryCardUpdateWithoutSupersededByInput, MemoryCardUncheckedUpdateWithoutSupersededByInput>
  }

  export type MemoryCardUpdateWithoutSupersededByInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    supersedes?: MemoryCardUpdateOneWithoutSupersededByNestedInput
    tags?: MemoryCardTagUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateWithoutSupersededByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: MemoryCardTagUncheckedUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUncheckedUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUpsertWithoutSupersedesInput = {
    update: XOR<MemoryCardUpdateWithoutSupersedesInput, MemoryCardUncheckedUpdateWithoutSupersedesInput>
    create: XOR<MemoryCardCreateWithoutSupersedesInput, MemoryCardUncheckedCreateWithoutSupersedesInput>
    where?: MemoryCardWhereInput
  }

  export type MemoryCardUpdateToOneWithWhereWithoutSupersedesInput = {
    where?: MemoryCardWhereInput
    data: XOR<MemoryCardUpdateWithoutSupersedesInput, MemoryCardUncheckedUpdateWithoutSupersedesInput>
  }

  export type MemoryCardUpdateWithoutSupersedesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    supersededBy?: MemoryCardUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateWithoutSupersedesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    supersededBy?: MemoryCardUncheckedUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUncheckedUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUncheckedUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardTagUpsertWithWhereUniqueWithoutMemoryCardInput = {
    where: MemoryCardTagWhereUniqueInput
    update: XOR<MemoryCardTagUpdateWithoutMemoryCardInput, MemoryCardTagUncheckedUpdateWithoutMemoryCardInput>
    create: XOR<MemoryCardTagCreateWithoutMemoryCardInput, MemoryCardTagUncheckedCreateWithoutMemoryCardInput>
  }

  export type MemoryCardTagUpdateWithWhereUniqueWithoutMemoryCardInput = {
    where: MemoryCardTagWhereUniqueInput
    data: XOR<MemoryCardTagUpdateWithoutMemoryCardInput, MemoryCardTagUncheckedUpdateWithoutMemoryCardInput>
  }

  export type MemoryCardTagUpdateManyWithWhereWithoutMemoryCardInput = {
    where: MemoryCardTagScalarWhereInput
    data: XOR<MemoryCardTagUpdateManyMutationInput, MemoryCardTagUncheckedUpdateManyWithoutMemoryCardInput>
  }

  export type MemoryCardTagScalarWhereInput = {
    AND?: MemoryCardTagScalarWhereInput | MemoryCardTagScalarWhereInput[]
    OR?: MemoryCardTagScalarWhereInput[]
    NOT?: MemoryCardTagScalarWhereInput | MemoryCardTagScalarWhereInput[]
    memoryCardId?: StringFilter<"MemoryCardTag"> | string
    tagId?: StringFilter<"MemoryCardTag"> | string
  }

  export type MemoryAttachmentUpsertWithWhereUniqueWithoutMemoryCardInput = {
    where: MemoryAttachmentWhereUniqueInput
    update: XOR<MemoryAttachmentUpdateWithoutMemoryCardInput, MemoryAttachmentUncheckedUpdateWithoutMemoryCardInput>
    create: XOR<MemoryAttachmentCreateWithoutMemoryCardInput, MemoryAttachmentUncheckedCreateWithoutMemoryCardInput>
  }

  export type MemoryAttachmentUpdateWithWhereUniqueWithoutMemoryCardInput = {
    where: MemoryAttachmentWhereUniqueInput
    data: XOR<MemoryAttachmentUpdateWithoutMemoryCardInput, MemoryAttachmentUncheckedUpdateWithoutMemoryCardInput>
  }

  export type MemoryAttachmentUpdateManyWithWhereWithoutMemoryCardInput = {
    where: MemoryAttachmentScalarWhereInput
    data: XOR<MemoryAttachmentUpdateManyMutationInput, MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardInput>
  }

  export type MemoryAttachmentScalarWhereInput = {
    AND?: MemoryAttachmentScalarWhereInput | MemoryAttachmentScalarWhereInput[]
    OR?: MemoryAttachmentScalarWhereInput[]
    NOT?: MemoryAttachmentScalarWhereInput | MemoryAttachmentScalarWhereInput[]
    id?: StringFilter<"MemoryAttachment"> | string
    memoryCardId?: StringFilter<"MemoryAttachment"> | string
    type?: StringFilter<"MemoryAttachment"> | string
    url?: StringFilter<"MemoryAttachment"> | string
    transcript?: StringNullableFilter<"MemoryAttachment"> | string | null
    createdAt?: DateTimeFilter<"MemoryAttachment"> | Date | string
  }

  export type TimelineEntryUpsertWithoutMemoryCardInput = {
    update: XOR<TimelineEntryUpdateWithoutMemoryCardInput, TimelineEntryUncheckedUpdateWithoutMemoryCardInput>
    create: XOR<TimelineEntryCreateWithoutMemoryCardInput, TimelineEntryUncheckedCreateWithoutMemoryCardInput>
    where?: TimelineEntryWhereInput
  }

  export type TimelineEntryUpdateToOneWithWhereWithoutMemoryCardInput = {
    where?: TimelineEntryWhereInput
    data: XOR<TimelineEntryUpdateWithoutMemoryCardInput, TimelineEntryUncheckedUpdateWithoutMemoryCardInput>
  }

  export type TimelineEntryUpdateWithoutMemoryCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    timeline?: TimelineUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type TimelineEntryUncheckedUpdateWithoutMemoryCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    timelineId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MemoryCardTagCreateWithoutTagInput = {
    memoryCard: MemoryCardCreateNestedOneWithoutTagsInput
  }

  export type MemoryCardTagUncheckedCreateWithoutTagInput = {
    memoryCardId: string
  }

  export type MemoryCardTagCreateOrConnectWithoutTagInput = {
    where: MemoryCardTagWhereUniqueInput
    create: XOR<MemoryCardTagCreateWithoutTagInput, MemoryCardTagUncheckedCreateWithoutTagInput>
  }

  export type MemoryCardTagCreateManyTagInputEnvelope = {
    data: MemoryCardTagCreateManyTagInput | MemoryCardTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type MemoryCardTagUpsertWithWhereUniqueWithoutTagInput = {
    where: MemoryCardTagWhereUniqueInput
    update: XOR<MemoryCardTagUpdateWithoutTagInput, MemoryCardTagUncheckedUpdateWithoutTagInput>
    create: XOR<MemoryCardTagCreateWithoutTagInput, MemoryCardTagUncheckedCreateWithoutTagInput>
  }

  export type MemoryCardTagUpdateWithWhereUniqueWithoutTagInput = {
    where: MemoryCardTagWhereUniqueInput
    data: XOR<MemoryCardTagUpdateWithoutTagInput, MemoryCardTagUncheckedUpdateWithoutTagInput>
  }

  export type MemoryCardTagUpdateManyWithWhereWithoutTagInput = {
    where: MemoryCardTagScalarWhereInput
    data: XOR<MemoryCardTagUpdateManyMutationInput, MemoryCardTagUncheckedUpdateManyWithoutTagInput>
  }

  export type MemoryCardCreateWithoutTagsInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    user: UserCreateNestedOneWithoutMemoriesInput
    supersedes?: MemoryCardCreateNestedOneWithoutSupersededByInput
    supersededBy?: MemoryCardCreateNestedOneWithoutSupersedesInput
    attachments?: MemoryAttachmentCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardUncheckedCreateWithoutTagsInput = {
    id?: string
    userId: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
    supersededBy?: MemoryCardUncheckedCreateNestedOneWithoutSupersedesInput
    attachments?: MemoryAttachmentUncheckedCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryUncheckedCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardCreateOrConnectWithoutTagsInput = {
    where: MemoryCardWhereUniqueInput
    create: XOR<MemoryCardCreateWithoutTagsInput, MemoryCardUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutMemoriesInput = {
    id?: string
    name: string
    type: string
  }

  export type TagUncheckedCreateWithoutMemoriesInput = {
    id?: string
    name: string
    type: string
  }

  export type TagCreateOrConnectWithoutMemoriesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutMemoriesInput, TagUncheckedCreateWithoutMemoriesInput>
  }

  export type MemoryCardUpsertWithoutTagsInput = {
    update: XOR<MemoryCardUpdateWithoutTagsInput, MemoryCardUncheckedUpdateWithoutTagsInput>
    create: XOR<MemoryCardCreateWithoutTagsInput, MemoryCardUncheckedCreateWithoutTagsInput>
    where?: MemoryCardWhereInput
  }

  export type MemoryCardUpdateToOneWithWhereWithoutTagsInput = {
    where?: MemoryCardWhereInput
    data: XOR<MemoryCardUpdateWithoutTagsInput, MemoryCardUncheckedUpdateWithoutTagsInput>
  }

  export type MemoryCardUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    supersedes?: MemoryCardUpdateOneWithoutSupersededByNestedInput
    supersededBy?: MemoryCardUpdateOneWithoutSupersedesNestedInput
    attachments?: MemoryAttachmentUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    supersededBy?: MemoryCardUncheckedUpdateOneWithoutSupersedesNestedInput
    attachments?: MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUncheckedUpdateOneWithoutMemoryCardNestedInput
  }

  export type TagUpsertWithoutMemoriesInput = {
    update: XOR<TagUpdateWithoutMemoriesInput, TagUncheckedUpdateWithoutMemoriesInput>
    create: XOR<TagCreateWithoutMemoriesInput, TagUncheckedCreateWithoutMemoriesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutMemoriesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutMemoriesInput, TagUncheckedUpdateWithoutMemoriesInput>
  }

  export type TagUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutMemoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryCardCreateWithoutAttachmentsInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    user: UserCreateNestedOneWithoutMemoriesInput
    supersedes?: MemoryCardCreateNestedOneWithoutSupersededByInput
    supersededBy?: MemoryCardCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    userId: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
    supersededBy?: MemoryCardUncheckedCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagUncheckedCreateNestedManyWithoutMemoryCardInput
    timelineEntry?: TimelineEntryUncheckedCreateNestedOneWithoutMemoryCardInput
  }

  export type MemoryCardCreateOrConnectWithoutAttachmentsInput = {
    where: MemoryCardWhereUniqueInput
    create: XOR<MemoryCardCreateWithoutAttachmentsInput, MemoryCardUncheckedCreateWithoutAttachmentsInput>
  }

  export type MemoryCardUpsertWithoutAttachmentsInput = {
    update: XOR<MemoryCardUpdateWithoutAttachmentsInput, MemoryCardUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<MemoryCardCreateWithoutAttachmentsInput, MemoryCardUncheckedCreateWithoutAttachmentsInput>
    where?: MemoryCardWhereInput
  }

  export type MemoryCardUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: MemoryCardWhereInput
    data: XOR<MemoryCardUpdateWithoutAttachmentsInput, MemoryCardUncheckedUpdateWithoutAttachmentsInput>
  }

  export type MemoryCardUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    supersedes?: MemoryCardUpdateOneWithoutSupersededByNestedInput
    supersededBy?: MemoryCardUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    supersededBy?: MemoryCardUncheckedUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUncheckedUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUncheckedUpdateOneWithoutMemoryCardNestedInput
  }

  export type TimelineEntryCreateWithoutTimelineInput = {
    id?: string
    order: number
    memoryCard: MemoryCardCreateNestedOneWithoutTimelineEntryInput
  }

  export type TimelineEntryUncheckedCreateWithoutTimelineInput = {
    id?: string
    memoryCardId: string
    order: number
  }

  export type TimelineEntryCreateOrConnectWithoutTimelineInput = {
    where: TimelineEntryWhereUniqueInput
    create: XOR<TimelineEntryCreateWithoutTimelineInput, TimelineEntryUncheckedCreateWithoutTimelineInput>
  }

  export type TimelineEntryCreateManyTimelineInputEnvelope = {
    data: TimelineEntryCreateManyTimelineInput | TimelineEntryCreateManyTimelineInput[]
    skipDuplicates?: boolean
  }

  export type TimelineEntryUpsertWithWhereUniqueWithoutTimelineInput = {
    where: TimelineEntryWhereUniqueInput
    update: XOR<TimelineEntryUpdateWithoutTimelineInput, TimelineEntryUncheckedUpdateWithoutTimelineInput>
    create: XOR<TimelineEntryCreateWithoutTimelineInput, TimelineEntryUncheckedCreateWithoutTimelineInput>
  }

  export type TimelineEntryUpdateWithWhereUniqueWithoutTimelineInput = {
    where: TimelineEntryWhereUniqueInput
    data: XOR<TimelineEntryUpdateWithoutTimelineInput, TimelineEntryUncheckedUpdateWithoutTimelineInput>
  }

  export type TimelineEntryUpdateManyWithWhereWithoutTimelineInput = {
    where: TimelineEntryScalarWhereInput
    data: XOR<TimelineEntryUpdateManyMutationInput, TimelineEntryUncheckedUpdateManyWithoutTimelineInput>
  }

  export type TimelineEntryScalarWhereInput = {
    AND?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
    OR?: TimelineEntryScalarWhereInput[]
    NOT?: TimelineEntryScalarWhereInput | TimelineEntryScalarWhereInput[]
    id?: StringFilter<"TimelineEntry"> | string
    timelineId?: StringFilter<"TimelineEntry"> | string
    memoryCardId?: StringFilter<"TimelineEntry"> | string
    order?: IntFilter<"TimelineEntry"> | number
  }

  export type TimelineCreateWithoutEntriesInput = {
    id?: string
    userId: string
  }

  export type TimelineUncheckedCreateWithoutEntriesInput = {
    id?: string
    userId: string
  }

  export type TimelineCreateOrConnectWithoutEntriesInput = {
    where: TimelineWhereUniqueInput
    create: XOR<TimelineCreateWithoutEntriesInput, TimelineUncheckedCreateWithoutEntriesInput>
  }

  export type MemoryCardCreateWithoutTimelineEntryInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    hash: string
    audioData?: string | null
    user: UserCreateNestedOneWithoutMemoriesInput
    supersedes?: MemoryCardCreateNestedOneWithoutSupersededByInput
    supersededBy?: MemoryCardCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentCreateNestedManyWithoutMemoryCardInput
  }

  export type MemoryCardUncheckedCreateWithoutTimelineEntryInput = {
    id?: string
    userId: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
    supersededBy?: MemoryCardUncheckedCreateNestedOneWithoutSupersedesInput
    tags?: MemoryCardTagUncheckedCreateNestedManyWithoutMemoryCardInput
    attachments?: MemoryAttachmentUncheckedCreateNestedManyWithoutMemoryCardInput
  }

  export type MemoryCardCreateOrConnectWithoutTimelineEntryInput = {
    where: MemoryCardWhereUniqueInput
    create: XOR<MemoryCardCreateWithoutTimelineEntryInput, MemoryCardUncheckedCreateWithoutTimelineEntryInput>
  }

  export type TimelineUpsertWithoutEntriesInput = {
    update: XOR<TimelineUpdateWithoutEntriesInput, TimelineUncheckedUpdateWithoutEntriesInput>
    create: XOR<TimelineCreateWithoutEntriesInput, TimelineUncheckedCreateWithoutEntriesInput>
    where?: TimelineWhereInput
  }

  export type TimelineUpdateToOneWithWhereWithoutEntriesInput = {
    where?: TimelineWhereInput
    data: XOR<TimelineUpdateWithoutEntriesInput, TimelineUncheckedUpdateWithoutEntriesInput>
  }

  export type TimelineUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TimelineUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryCardUpsertWithoutTimelineEntryInput = {
    update: XOR<MemoryCardUpdateWithoutTimelineEntryInput, MemoryCardUncheckedUpdateWithoutTimelineEntryInput>
    create: XOR<MemoryCardCreateWithoutTimelineEntryInput, MemoryCardUncheckedCreateWithoutTimelineEntryInput>
    where?: MemoryCardWhereInput
  }

  export type MemoryCardUpdateToOneWithWhereWithoutTimelineEntryInput = {
    where?: MemoryCardWhereInput
    data: XOR<MemoryCardUpdateWithoutTimelineEntryInput, MemoryCardUncheckedUpdateWithoutTimelineEntryInput>
  }

  export type MemoryCardUpdateWithoutTimelineEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
    supersedes?: MemoryCardUpdateOneWithoutSupersededByNestedInput
    supersededBy?: MemoryCardUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUpdateManyWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateWithoutTimelineEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    supersededBy?: MemoryCardUncheckedUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUncheckedUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardNestedInput
  }

  export type MemoryCardCreateManyUserInput = {
    id?: string
    content: string
    eventDate?: Date | string | null
    eventTime?: string | null
    dateConfidence: string
    submittedAt?: Date | string
    isSuperseded?: boolean
    supersedesId?: string | null
    hash: string
    audioData?: string | null
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MemoryCardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    supersedes?: MemoryCardUpdateOneWithoutSupersededByNestedInput
    supersededBy?: MemoryCardUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
    supersededBy?: MemoryCardUncheckedUpdateOneWithoutSupersedesNestedInput
    tags?: MemoryCardTagUncheckedUpdateManyWithoutMemoryCardNestedInput
    attachments?: MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardNestedInput
    timelineEntry?: TimelineEntryUncheckedUpdateOneWithoutMemoryCardNestedInput
  }

  export type MemoryCardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventTime?: NullableStringFieldUpdateOperationsInput | string | null
    dateConfidence?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isSuperseded?: BoolFieldUpdateOperationsInput | boolean
    supersedesId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
    audioData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCardTagCreateManyMemoryCardInput = {
    tagId: string
  }

  export type MemoryAttachmentCreateManyMemoryCardInput = {
    id?: string
    type: string
    url: string
    transcript?: string | null
    createdAt?: Date | string
  }

  export type MemoryCardTagUpdateWithoutMemoryCardInput = {
    tag?: TagUpdateOneRequiredWithoutMemoriesNestedInput
  }

  export type MemoryCardTagUncheckedUpdateWithoutMemoryCardInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryCardTagUncheckedUpdateManyWithoutMemoryCardInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryAttachmentUpdateWithoutMemoryCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryAttachmentUncheckedUpdateWithoutMemoryCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryAttachmentUncheckedUpdateManyWithoutMemoryCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemoryCardTagCreateManyTagInput = {
    memoryCardId: string
  }

  export type MemoryCardTagUpdateWithoutTagInput = {
    memoryCard?: MemoryCardUpdateOneRequiredWithoutTagsNestedInput
  }

  export type MemoryCardTagUncheckedUpdateWithoutTagInput = {
    memoryCardId?: StringFieldUpdateOperationsInput | string
  }

  export type MemoryCardTagUncheckedUpdateManyWithoutTagInput = {
    memoryCardId?: StringFieldUpdateOperationsInput | string
  }

  export type TimelineEntryCreateManyTimelineInput = {
    id?: string
    memoryCardId: string
    order: number
  }

  export type TimelineEntryUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    memoryCard?: MemoryCardUpdateOneRequiredWithoutTimelineEntryNestedInput
  }

  export type TimelineEntryUncheckedUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TimelineEntryUncheckedUpdateManyWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    memoryCardId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemoryCardCountOutputTypeDefaultArgs instead
     */
    export type MemoryCardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemoryCardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineCountOutputTypeDefaultArgs instead
     */
    export type TimelineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemoryCardDefaultArgs instead
     */
    export type MemoryCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemoryCardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemoryCardTagDefaultArgs instead
     */
    export type MemoryCardTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemoryCardTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemoryAttachmentDefaultArgs instead
     */
    export type MemoryAttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemoryAttachmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineDefaultArgs instead
     */
    export type TimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimelineEntryDefaultArgs instead
     */
    export type TimelineEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimelineEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>

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