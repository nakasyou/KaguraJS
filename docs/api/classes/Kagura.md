[kagurajs - v0.2.5](../README.md) / [Exports](../modules.md) / Kagura

# Class: Kagura

create kagura instance

## Table of contents

### Constructors

- [constructor](Kagura.md#constructor)

### Properties

- [#fpsData](Kagura.md##fpsdata)
- [#scene](Kagura.md##scene)
- [#sceneData](Kagura.md##scenedata)
- [#size](Kagura.md##size)
- [#startWaitPromises](Kagura.md##startwaitpromises)
- [element](Kagura.md#element)
- [pixiApp](Kagura.md#pixiapp)

### Accessors

- [fps](Kagura.md#fps)
- [height](Kagura.md#height)
- [width](Kagura.md#width)

### Methods

- [setCanvasSize](Kagura.md#setcanvassize)
- [setScene](Kagura.md#setscene)
- [start](Kagura.md#start)

## Constructors

### constructor

• **new Kagura**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KaguraInitOptions` |

#### Defined in

[src/core/index.ts:33](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L33)

## Properties

### #fpsData

• `Private` **#fpsData**: `Fpsdata`

#### Defined in

[src/core/index.ts:28](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L28)

___

### #scene

• `Private` **#scene**: [`Scene`](Scene.md)

#### Defined in

[src/core/index.ts:29](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L29)

___

### #sceneData

• `Private` **#sceneData**: `SceneData`

#### Defined in

[src/core/index.ts:30](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L30)

___

### #size

• `Private` **#size**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[src/core/index.ts:23](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L23)

___

### #startWaitPromises

• `Private` **#startWaitPromises**: `Promise`<`any`\>[]

#### Defined in

[src/core/index.ts:32](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L32)

___

### element

• **element**: `HTMLCanvasElement`

#### Defined in

[src/core/index.ts:22](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L22)

___

### pixiApp

• **pixiApp**: `Application`<`ICanvas`\>

#### Defined in

[src/core/index.ts:31](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L31)

## Accessors

### fps

• `get` **fps**(): `number`

#### Returns

`number`

#### Defined in

[src/core/index.ts:112](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L112)

• `set` **fps**(`fps`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fps` | `number` |

#### Returns

`void`

#### Defined in

[src/core/index.ts:108](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L108)

___

### height

• `get` **height**(): `number`

Return canvas height

#### Returns

`number`

#### Defined in

[src/core/index.ts:94](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L94)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/core/index.ts:79](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L79)

___

### width

• `get` **width**(): `number`

Return canvas width

#### Returns

`number`

#### Defined in

[src/core/index.ts:87](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L87)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[src/core/index.ts:74](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L74)

## Methods

### setCanvasSize

▸ **setCanvasSize**(`width`, `height`): `void`

Set canvas size

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | New canvas width |
| `height` | `number` | New canvas height |

#### Returns

`void`

#### Defined in

[src/core/index.ts:103](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L103)

___

### setScene

▸ **setScene**(`NewScene`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `NewScene` | typeof [`Scene`](Scene.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/index.ts:134](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L134)

___

### start

▸ **start**(): `Promise`<`void`\>

Start KaguraJS game.

**`Example`**

```ts
const kagura: Kagura = new Kagura()
// Start kagura
kagura.start()
```

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/index.ts:125](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/core/index.ts#L125)
