---
title: 4 simple ways to merge dictionaries in Python
date: "2023-01-29"
tag: [python, dictionaries, beginners]
draft: false
description: "How you can merge your Python dictionnaries in one line"
---

![merge-python-dictionaries](/images/merge-python-dictionaries.png)

In Python, dictionaries are commonly used to store key-value pairs. There are several ways to merge two or more dictionaries into a single dictionary. Here are some of the common methods used for this purpose:

1. Using the `update()` method: The `update()` method can be used to merge one dictionary into another. For example:

```python
dict1 = {'a': 23, 'b': 24}
dict2 = {'c':32, 'j': 85}
dict1.update(dict2)
print(dict1)
```

The above code will give the following result

```python
{'a': 23, 'b': 24, 'c': 32, 'j': 85}
```

2. Using the `**` operator: The `**` operator can also be used to merge dictionaries in Python. Here is the syntax for using it:

```python
dict1 = {'a': 123, 'd': 562}
dict2 = {'b': 333, 'f': 232}
merged_dict = {**dict1, **dict2}
print(merged_dict)
```

The above code will give the following result

```python
{'a': 123, 'd': 562, 'b': 333, 'f': 232}
```

3. Using the `dict` constructor: We can merge two dictionaries into one using the `dict` constructor. However, this method only works if the keys of the second dictionaries are strings. If not, we will have a `TypeError`.

```python
dict1 = {'m': 1, 'l': 59}
dict2 = {'z': 3, 'c': 4}
merged_dict = dict(dict1, **dict2)
print(merged_dict)
```

The above code will give the following result

```python
 {'m': 1, 'l': 59, 'z': 3, 'c': 4}
```

4. Using `collections.ChainMap` : `ChainMap` object helps to group multiple dictionaries together to create a single, updateable dictionary. Below is an example on how you can use it:

```python
from collections import ChainMap
dict_1={'a': 15, 'b': 10}
dict_2={'c': 18,'d': 20}
merged_dict = ChainMap(dict_1, dict_2)
print(dict(merged_dict))
```

The above code will give the following result

```python
{'c': 18, 'd': 20, 'a': 15, 'b': 10}
```
