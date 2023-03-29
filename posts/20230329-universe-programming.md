---
title: 'Universe Programming'
date: '2023 Mar. 29'
---

The Internet liberated us from physical distance and democratized communications.

The Blockchain liberated us from trust and democratized data.

So what about democratizing execution of process next? What do you think the Internet will show us next if we try to split the workflow between servers instead of confining processing to containers?

In my opinion, decentralization of execution is the next step and an essential piece for the Internet to approach reality.

In this article, I consider "decentralized execution" and the future of the Internet it will bring.

What is Decentralized Execution

In decentralized execution, task-based workflows are not executed by a single server, but rather distributed and processed in parallel by multiple servers.

Simply put, the execution of A and B is shared among multiple servers.

Currently, whether it is an API or a smart contract, a transaction is received and processed by a single Node. Other Nodes or servers may be called asynchronously, but this is only treated as execution on the Node.

In decentralized execution, transaction is received by multiple Nodes, the workflow is divided and scheduled, and each Node processes the transactions in parallel. The partial result is also held as a state, and the node returns the result of the process.

For example, we have a function like this:

```js
async function A() {
    const b = await B()
    const c = await C()
    const d = await D()
    return b + c - d   
}
```

Here, when I call A(), call B(), C() and D() inside it.

If this is distributed execution by node a, node b, node c, and node d, node a receives A() and executes the functions B(), C(), and D() on node b, c, and d, respectively. Finally, one of the nodes or another proxy node returns the result of A().

Here, for simplicity, we have separated them by function, but a finer granularity is also acceptable. I think it is also possible to distribute by register operation unit.

What decentralized execution gives developers

First, there are several problems with centralized workflow processing.

one server can be a single point of failure because one server is responsible for all processing

heavy server load

large cost to build servers

there can be security issues with running processes under centralized management and control

Bringing a ceiling to the decentralization and scalability of the blockchain

Decentralized execution solves these and changes development experience significantly.

Infrastructure costs are significantly lower

Develop with far less code (completely changes what you write).

Build Maximum Viable applications from the start, not Minimum Viable

You can create network effects much larger than Web 3.0

You can get the same performance as Fugaku with 100 smartphones.

Bitcoin can allow users to participate in Mining with a smartphone or Raspberry-Pi with only 0.5GB memory.

Achieving this is very important under the idea of "decentralization" in the Internet.

Let’s get closer to reality

Now, the main issue is actually here.

Does This just democratize processing?

No. The potential of decentralized execution goes far beyond that. It is to bring the program closer to the laws of nature.

As you know, all current programs are simply executing something predefined.

Whether it's an API, a web application, or a smart contract, you just write the process first, deploy it to the server, and then the client executes it. How about AI? Yes it is the same way. It is just a model that has learned according to predefined learning rules and returns results.

To use a human analogy, we are simply given regular motions, such as getting up at 9:00 AM and blinking every three seconds. This is not natural.

Furthermore, a predefined process cannot do everything. There are a limited number of execution patterns, and they cannot all be covered.

Human blinking occurs under a number of irregular and uncertain conditions, such as when the eyes are dry, when there is an insect in the eye, or when the air is dry. All of these uncertain conditions are, in fact, infinitely varied. It is impossible to predefine them all. This is the limit where a program is just a program and cannot become reality.

Decentralized execution has the potential to support execution environments where tasks are not predefined, i.e., dynamic workflow coordination.

You can go right when you want to, blink when your eyes get tired, and sleep when you get sleepy. There is a possibility that computers can represent these biological or natural-like phenomena.

Decentralization is a necessary component of natural phenomena. Humans are always autonomous decentralized. Your actions are not dictated by anything. The laws of nature are found in observation, and the constitution is determined by someone else.

In fact, I do not yet know if decentralization of execution can directly describe this phenomenon, but it is certainly one factor, as we will infer from the methods we will discuss later.

How the world will change

So what will a world in which decentralized execution is implemented on the Internet bring to us?

The concept of application will change.

The freedom of applications will be unlimited, allowing for realistic communication. It will provide us more informative and unlimited experiences. An example would be this feature.

3D VR website that transitions to the back instead of bottom

Self-generated Monsters self-grown plants on the game

Metaverse space where one billion people battle simultaneously

Exchanges where prices fluctuate according to nature without liquidity

Blockchain that works without validators

What else do you think will change? Imagine and give us your ideas.

How?

So how and why is this feasible? Here are some implementation tips.

What I am thinking of is interpreting the process that Node performs in a different way. That is, not just a 1+1 kind of process, but more of a different resolution.

One is the Distributed OS, in which individual Nodes separate the kernel, which is the OS functionality, from the management components and distribute them across multiple Nodes. This enables distributed processing on a kernel-by-kernel basis.

The other is the Meta-process. A meta-process is an abstraction of a process. Meta-process is self-constructed based on workflow. The workflow is the order of execution of tasks, and the meta-process changes form based on the variables given for execution to this workflow. Here, the business logic is not predefined, but only a structure that is dynamically adjusted at runtime by process variables.

The other is the metaphors in nature. You map chemical metaphors, such as molecules, to opcodes and processes, and then design them to react. For example, there is a higher-order chemical language called HOCL(Higher Order Chemical Language). Here, integer values, types, and operators are all represented as a multiset of atoms. The program acts as a single solution, and when an atom is dropped, it simply repeats the reaction according to the reaction rules until it becomes inert. The architecture is based on a distributed operating system.

If you want to describe all phenomena more freely, I would prefer elementary particles.

The elementary particle is the smallest unit of all matter. There are only 12 particles, and the building blocks of all objects can be explained by combinations of particles without exception. For example, my headphone has 3 up-quarks + 4 electrons, etc.

Then there is the quantum to define the behavior of elementary particles. In the quantum world, all phenomena are based on uncertainty, which is reflected in the macroscopic results.

Creating from the smallest element, not the form, is the way to define the world as bottom-up as possible.

(However, how the quantum currently shapes our cells and bodies is not yet understood. It will take some time yet to get to this point.)

We believe that the key here is quantum computing. If all Nodes can be processed in a distributed manner using quantum computing, we will be closer to achieving an interactive world.

Finally

I believe the ultimate goal of the Internet is to reproduce the real world on a computer.

In other words, to create an electronic world that people can live in by programmatically representing real materials that grow autonomously according to natural laws such as air, smells, organisms, and nature.

I am absolutely sure that how to achieve decentralized execution and how to program quantum is the next step for the goal of the Internet.

I am waiting for your opinions.