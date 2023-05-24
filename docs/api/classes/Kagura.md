[kagurajs](../README.md) / [Exports](../modules.md) / Kagura

# Class: Kagura

## Table of contents

### Constructors

- [constructor](Kagura.md#constructor)

### Properties

- [element](Kagura.md#element)
- [size](Kagura.md#size)

### Accessors

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

[core/index.ts:21](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L21)

## Properties

### element

• **element**: `HTMLCanvasElement`

#### Defined in

[core/index.ts:16](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L16)

___

### size

• **size**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[core/index.ts:17](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L17)

## Accessors

### height

• `get` **height**(): `number`

Return canvas height

#### Returns

`number`

#### Defined in

[core/index.ts:54](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L54)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[core/index.ts:41](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L41)

___

### width

• `get` **width**(): `number`

Return canvas width

#### Returns

`number`

#### Defined in

[core/index.ts:48](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L48)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[core/index.ts:37](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L37)

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

[core/index.ts:62](https://github.com/nakasyou/KaguraJSc/blob/d7c72c8/src/core/index.ts#L62)
