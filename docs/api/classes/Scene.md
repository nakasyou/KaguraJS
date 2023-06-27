[kagurajs - v0.2.5](../README.md) / [Exports](../modules.md) / Scene

# Class: Scene

Scene class

## Table of contents

### Constructors

- [constructor](Scene.md#constructor)

### Properties

- [#pixiContainer](Scene.md##pixicontainer)
- [kaguraApp](Scene.md#kaguraapp)

### Methods

- [addChild](Scene.md#addchild)
- [frame](Scene.md#frame)
- [init](Scene.md#init)
- [steps](Scene.md#steps)

## Constructors

### constructor

• **new Scene**(`sceneConstructorOptions`, `callback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sceneConstructorOptions` | [`SceneConstructorOptions`](../interfaces/SceneConstructorOptions.md) |
| `callback` | () => `void` |

#### Defined in

[src/scene/index.ts:16](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/scene/index.ts#L16)

## Properties

### #pixiContainer

• `Private` **#pixiContainer**: `Container`<`DisplayObject`\>

#### Defined in

[src/scene/index.ts:15](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/scene/index.ts#L15)

___

### kaguraApp

• **kaguraApp**: [`Kagura`](Kagura.md)

#### Defined in

[src/scene/index.ts:14](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/scene/index.ts#L14)

## Methods

### addChild

▸ **addChild**(`object`): `void`

Child appends this scene.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`ObjectContainer`](ObjectContainer.md) | ObjectContainer Object. |

#### Returns

`void`

#### Defined in

[src/scene/index.ts:47](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/scene/index.ts#L47)

___

### frame

▸ **frame**(): `void`

#### Returns

`void`

#### Defined in

[src/scene/index.ts:35](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/scene/index.ts#L35)

___

### init

▸ **init**(): `void` \| `Promise`<`void`\>

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/scene/index.ts:31](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/scene/index.ts#L31)

___

### steps

▸ **steps**(): `Generator`<`unknown`, `any`, `unknown`\>

#### Returns

`Generator`<`unknown`, `any`, `unknown`\>

#### Defined in

[src/scene/index.ts:39](https://github.com/nakasyou/KaguraJSc/blob/863df6f/src/scene/index.ts#L39)
