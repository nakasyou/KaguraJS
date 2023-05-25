[kagurajs](../README.md) / [Exports](../modules.md) / Kagura

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

core/index.d.ts:17

## Properties

### \_fpsdata

• `Private` **\_fpsdata**: `any`

#### Defined in

core/index.d.ts:16

___

### element

• **element**: `HTMLCanvasElement`

#### Defined in

core/index.d.ts:14

___

### size

• `Private` **size**: `any`

#### Defined in

core/index.d.ts:15

___

### start

• **start**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

core/index.d.ts:36

## Accessors

### fps

• `get` **fps**(): `number`

#### Returns

`number`

#### Defined in

core/index.d.ts:35

• `set` **fps**(`fps`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fps` | `number` |

#### Returns

`void`

#### Defined in

core/index.d.ts:34

___

### height

• `get` **height**(): `number`

Return canvas height

#### Returns

`number`

#### Defined in

core/index.d.ts:27

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

core/index.d.ts:19

___

### width

• `get` **width**(): `number`

Return canvas width

#### Returns

`number`

#### Defined in

core/index.d.ts:23

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

core/index.d.ts:18

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

core/index.d.ts:33
