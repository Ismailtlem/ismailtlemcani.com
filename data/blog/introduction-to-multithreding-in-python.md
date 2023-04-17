---
title: Introduction to Multithreading in Python
date: '2023-04-10'
tags: ['python', 'multithreading', 'concurrent-mode']
draft: false
summary: 'Multithreading in Python in simple terms'
---

In this article, We'll try to understand multithreading in very simple terms

## Introductory section

Let us explain a bit more few terms before going deeper

- A program is simply a sequence of statements that have the objective to perform some task. A program is usually stored on the disk
- A process is a running instance of a program along with all the resources it needs to operate. It has its own memory space.
- A thread is a sequence of code that is executed within the scope of a process. You can have multiple threads running in a single process.

![single-thread](/static/images/single-thread.png)

## What is multithreading ?

Multithreading simply is a powerful technique that allows a program to execute multiple tasks concurrently. When a program is executed, it runs in a single thread by default. However, with multithreading, a program can create multiple threads that can execute different parts of the program simultaneously. This can improve performance by utilizing the available processing power more efficiently.

![multi-thread](/static/images/multi-thread.png)

## How to implement multithreading ?

Multithreading is implemented in Python by using the built-in library threading. First, you need to import the threading module. Then, you can create a new thread by creating an instance of the Thread class and you have to pass in a target function as an argument. Here is a simple example :

```python
import threading

def my_function():
    # code to be executed by the thread

my_thread = threading.Thread(target=my_function)

    # Once the thread is created, we can start it by calling .start() method
my_thread.start()
```

Here is a more elaborate example :

```python
import threading
import time

def calculate_factorial(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    print(f"Factorial of {n} is {result}")

numbers = [5, 10, 15, 20]

# create a thread for each number's factorial cal:culation
threads = []
for number in numbers:
    thread = threading.Thread(target=calculate_factorial, args=(number,))
    threads.append(thread)

# start all threads
for thread in threads:
    thread.start()

# wait for all threads to finish
for thread in threads:
    thread.join()

print("All factorials calculated!")
```

- **Thread class constructor arguments**
  As seen in the example above, when creating a thread instance, we usually have to specify the following arguments :

  - target : It is used to specify the function to run when the thread is started.
  - args : It is simply the argument to pass to the target function. We are in this example passing 1 as an argument.

- **Wait for a Thread to complete :** Can be done with .`join()` function

### Final notes

In conclusion, multithreading is a powerful technique that can enhance the performance of Python programs by executing multiple tasks concurrently. It allows for better resource utilization, improved performance, and enhanced user experience.
It is important to keep in mind that multithreading also comes with some potential drawbacks, such as race conditions, deadlocks, and other synchronization issues. Therefore, it is crucial to design and implement multithreaded applications with care and attention to detail.

Not all concepts are explained in this article. To get more details, the [threading library documentation](https://docs.python.org/3/library/threading.html) as well as [this article](https://realpython.com/intro-to-python-threading/) are good reads.
