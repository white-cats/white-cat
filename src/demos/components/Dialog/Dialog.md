# Dialog 弹窗

----- DialogSize

## `size`?: 'small' | 'normal' | 'large'

尺寸

----- DialogVisible

## `visible`?: boolean = false

是否可见

----- DialogMaskClosable

## `maskClosable`?: boolean = true

是否可点击背景阴影进行关闭

----- DialogHeader

## `header`?: React.ReactNode

头部

----- DialogFooter

## `footer`?: React.ReactNode

尾部

----- DialogCancelText

## `cancelText`?: React.ReactNode

取消文本

----- DialogConfirmText

## `confirmText`?: React.ReactNode

确认文本

----- DialogGetContainer

## `getContainer`?: () => Element

获取容器函数

----- DialogOnCancel

## `onCancel`?: () => void

点击取消时的回调函数

----- DialogOnConfirm

## `onConfirm`?: () => void

点击确认时的回调函数