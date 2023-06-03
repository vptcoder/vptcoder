# Serilog
---
---
- https://github.com/serilog/serilog/wiki/Writing-Log-Events

## Source Contexts
---
Serilog, like most .NET logging frameworks, allows events to be tagged with their source, generally speaking the name of the class writing them:

``` cs
var myLog = Log.ForContext<MyClass>();
myLog.Information("Hello!");
```
The event written will include a property SourceContext with value "MyNamespace.MyClass" that can later be used to filter out noisy events, or selectively write them to particular sinks.

Not all properties attached to an event need to be represented in the message template or output format; all properties are carried in a dictionary on the underlying LogEvent object.

For more on filters and logger topology see Configuration Basics.

## Correlation
---
Just as ForContext<T>() tags log events with the class that wrote them, other overloads of ForContext() enable log events to be tagged with identifiers that later support correlation of the events written with that identifier.

``` cs
var job = GetNextJob();
var jobLog = Log.ForContext("JobId", job.Id);
jobLog.Information("Running a new job");
job.Run();
jobLog.Information("Finished");
```
Here both of the log events will carry the JobId property including the job identifier.

Tip: when logging to sinks that use a text format, such as Serilog.Sinks.Console, you can include {Properties} in the output template to print out all contextual properties not otherwise included.

