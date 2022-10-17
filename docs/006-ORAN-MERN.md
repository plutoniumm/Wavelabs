# Optimum Selection of Tech Stack and Improving Performance

We will set 3 core premises of decision making

> 1. EXTREME prejudice for performance and safety. An application can offer less features, but cannot be unsafe under any circumstances
> 2. OPTIMIZATION, We optimise not only for client but also service provider i.e in our case Wavelabs or any generic company in case of OSS
> 3. EXCELLENCE, We spare no efforts in making sure we give the fastest possible code with highest possible safety and least possible memory consumption to the client

## Requirements
- Backend
- Frontend
- Interface
- Database
- Runtime

## Changes Recommended
**Electron &rarr; Tauri:** \
Electron has been around for a very long time and is industry standard for 0 effort applications. Electron however by design is fundamentally flawed on 2 levels
1. Runtime: Electron is V8 in a C-family wrapper. This effectively means each instance of application deploys all of google chrome for EVERY SINGLE INSTANCE, this has a few disadvantages
- It has a MASSIVE memory footprint
![Tauri Memory](../assets/w3/200.png)
As can be clearly seen Tauri has 1/10th the memory consumption both physical and virtual of electron and about half the launch time required. \
<cite>Benchmark Measured Against real-world application simulator at @Fournux/tauri-vs-electron</cite>
\
\
Electron consumes massive amount of memory even in headless mode since even there it is still running a full browser just not its renderer. Tauri does not: since it is basically just a byte compiled Rust application.
- It Needs a runtime in the first place for its backend. Electron's backend is written in C-family to run Javascript code which is a garbage collected language and therefore needs a runtime. Rust is a
