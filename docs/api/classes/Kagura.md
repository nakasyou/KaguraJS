[kagurajs - v0.0.0](../README.md) / [Exports](../modules.md) / Kagura

# Class: Kagura

## Table of contents

### Constructors

- [constructor](Kagura.md#constructor)

### Properties

- [\_fpsdata](Kagura.md#_fpsdata)
- [element](Kagura.md#element)
- [size](Kagura.md#size)
- [start](Kagura.md#start)

### Accessors

- [fps](Kagura.md#fps)
- [height](Kagura.md#height)
- [width](Kagura.md#width)

### Methods

- [setCanvasSize](Kagura.md#setcanvassize)

## Constructors

### constructor

• **new Kagura**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `KaguraInitOptions` |

#### Defined in

[core/index.ts:27](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L27)

## Properties

### \_fpsdata

• `Private` **\_fpsdata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fps` | `number` |

#### Defined in

[core/index.ts:24](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L24)

___

### element

• **element**: `HTMLCanvasElement`

#### Defined in

[core/index.ts:19](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L19)

___

### size

• `Private` **size**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[core/index.ts:20](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L20)

___

### start

• **start**: () => `void` = `start`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[core/index.ts:87](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L87)

## Accessors

### fps

• `get` **fps**(): `number`

#### Returns

`number`

#### Defined in

[core/index.ts:83](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L83)

• `set` **fps**(`fps`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fps` | `number` |

#### Returns

`void`

#### Defined in

[core/index.ts:80](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L80)

___

### height

• `get` **height**(): `number`

Return canvas height

#### Returns

`number`

#### Defined in

[core/index.ts:68](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L68)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[core/index.ts:55](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L55)

___

### width

• `get` **width**(): `number`

Return canvas width

#### Returns

`number`

#### Defined in

[core/index.ts:62](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L62)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[core/index.ts:51](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L51)

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

[core/index.ts:76](https://github.com/nakasyou/KaguraJSc/blob/0b152ae/src/core/index.ts#L76)
