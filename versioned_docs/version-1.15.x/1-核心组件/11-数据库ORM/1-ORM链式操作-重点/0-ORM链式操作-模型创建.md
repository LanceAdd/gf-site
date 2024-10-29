---
title: 'ORM链式操作-模型创建'
sidebar_position: 0
hide_title: true
---

## 模型创建

`Table/Model` 方法用于创建指定数据表的 `Model` 对象。

使用示例：

```  go
m := g.DB().Table("user")m := g.DB().Model("user")

```

此外，在某些场景下，我们也可以通过 `DB` 方法切换当前模型的数据库对象，例如：

```  go
m := g.DB().Model("user")
m.DB(g.DB("user-center"))

```

其效果与以下操作是一样的：

```  go
m := g.DB("user-center").Model("user")

```

## 链式安全

`链式安全` 只是模型操作的两种方式区别：一种会修改当前 `model` 对象（不安全，默认），一种不会（安全）但是模型属性修改/条件叠加需要使用赋值操作，仅此而已。

### 默认情况

在默认情况下， `gdb` 是 `非链式安全` 的，也就是说链式操作的每一个方法都将对当前操作的 `Model` 属性进行修改，因此该 `Model` 对象 **不可以重复使用**。例如，当存在多个分开查询的条件时，我们可以这么来使用 `Model` 对象：

```  go
user := g.DB().Model("user")
user.Where("status IN(?)", g.Slice{1,2,3})
if vip {
    // 查询条件自动叠加，修改当前模型对象
    user.Where("money>=?", 1000000)
} else {
    // 查询条件自动叠加，修改当前模型对象
    user.Where("money<?",  1000000)
}
//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000
// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000
r, err := user.All()
//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000
// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000
n, err := user.Count()

```

可以看到，如果是分开执行链式操作，链式的每一个操作都会修改已有的 `Model` 对象，查询条件会自动叠加，因此 `user` 对象不可重复使用，否则条件会不停叠加。并且在这种使用方式中，每次我们需要操作 `user` 用户表，都得使用 `g.DB().Table("user")` 这样的语法创建一个新的 `user` 模型对象，相对来说会比较繁琐。

默认情况下，基于性能以及GC优化考虑，模型对象为 `非链式安全`，防止产生过多的临时模型对象。![(微笑)](/markdown/1f7ee2ac67fc5de100b8fc690d7438ea.svg)

### `Clone` 方法

此外，我们也可以手动调动 `Clone` 方法克隆当前模型，创建一个新的模型来实现链式安全，由于是新的模型对象，因此并不担心会修改已有的模型对象的问题。例如：

```  go
// 定义一个用户模型单例
user := g.DB().Model("user")

```

```  go
// 克隆一个新的用户模型
m := user.Clone()
m.Where("status IN(?)", g.Slice{1,2,3})
if vip {
    m.And("money>=?", 1000000)
} else {
    m.And("money<?",  1000000)
}
//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000
// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000
r, err := m.All()
//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000
// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000
n, err := m.Count()

```

### `Safe` 方法

当然，我们可以通过 `Safe` 方法设置当前模型为 `链式安全` 的对象，后续的每一个链式操作都将返回一个新的 `Model` 对象，该 `Model` 对象可重复使用。但需要特别注意的是，模型属性的修改，或者操作条件的叠加，需要通过变量赋值的方式（ `m = m.xxx`）覆盖原有的模型对象来实现。例如：

```  go
// 定义一个用户模型单例
user := g.DB().Model("user").Safe()

```

```  go
m := user.Where("status IN(?)", g.Slice{1,2,3})
if vip {
    // 查询条件通过赋值叠加
    m = m.And("money>=?", 1000000)
} else {
    // 查询条件通过赋值叠加
    m = m.And("money<?",  1000000)
}
//  vip: SELECT * FROM user WHERE status IN(1,2,3) AND money >= 1000000
// !vip: SELECT * FROM user WHERE status IN(1,2,3) AND money < 1000000
r, err := m.All()
//  vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money >= 1000000
// !vip: SELECT COUNT(1) FROM user WHERE status IN(1,2,3) AND money < 1000000
n, err := m.Count()

```

可以看到，示例中的用户模型单例对象 `user` 可以重复使用，而不用担心被“污染”的问题。在这种链式安全的方式下，我们可以创建一个用户单例对象 `user`，并且可以重复使用到后续的各种查询中。但是存在多个查询条件时，条件的叠加需要通过模型赋值操作（ `m = m.xxx`）来实现。

使用 `Safe` 方法标记之后，每一个链式操作都将会创建一个新的临时模型对象（内部自动使用 `Clone` 实现模型克隆），从而实现链式安全。这种使用方式在模型操作中比较常见。