# C# Delegates
> In One Sentence: A way to wrap (encapsulate) a method like an object, so that it can be passed around like an object, and still can be invoked like a method.
> https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/

## Pre-defined Delegates:
---
- Action: _returns void_
    - `delegate void Action()`
    - `delegate void Action<T>(T param)`
    - `delegate void Action<T, T2>(T param1, T2 param2)`
    - or as many input params as desired, up to T16
- Func: _returns specified Type_
    - `delegate TResult Func<in T, out TResult>(T param)`
    - or `delegate TResult ****Func****<in T, in T2, out TResult>(T param1, T2 param2)`
    - or as many input params as desired, up to T16
- Predicate: _returns bool_
    - `delegate bool Predicate<in T>(T obj)`

## Custom Delegates:
---
- Example: Process Delegate
    ``` cs
    public class SomeClass 
    {
        // declare: describe the delegate that wraps around an async method
        private delegate Task<SomeProcessResult> ProcessDelegate(string a, params object[] b);

        // declare objects of this delegate
        private readonly ProcessDelegate regP;
        private readonly ProcessDelegate regNoP;
        
        // Constructor
        public SomeClass()
        {
            // implementation of the delegate object 1
            // standard implementation, follows the exact signature of method being called.
            regP = new ProcessDelegate((m, p) => { 

                // pass all params to the method being called
                return SomeProcessMethod(m, p); 

            });

            // implementation of the delegate object 2
            // another implementation: drop optional params
            regNoP = new ProcessDelegate((m, p) => { 

                // only pass the first param to the actual method being called.
                return SomeProcessMethod(m); 

            });
        }

        // The actual method being wrapped
        public async Task<SomeProcessResult> SomeProcessMethod(string detail, params object[] param)
        {
            object soapResult;
            var wcfInternetRegistration = new WcfInternetRegistration();
            soapResult = await wcfInternetRegistration.Process(detail, param);
            
            RestResponseContent restResponse;
            restResponse = new RestResponseContent() { ResultObject = soapResult };
            restResponse.EncodeResultObject();
            
            return restResponse;
        }
        
        // METHOD WHERE THE DELEGATE IS USED
        // info is mandatory
        // gid is optional
        // guid is optional
        public async Task<IHttpActionResult> ProcessController([FromUri] string info, string uen, string gid = "", string guid = "00000000-0000-0000-0000-000000000000")
        {
            // using the non-standard delegate implementation
            // delegate expects: 
            // - 1 mandatory param
            // - an array of params object,  which can be nothing
            if (string.IsNullOrEmpty(gid) || Guid.Empty == new Guid(guid))
            {
                var processResult = await regNoP(info);
                return Ok(processResult);
            }

            // using the standard delegate implementation
            var processResult = await regP(info, uen, gid);
            return Ok(processResult);
        }
    }
    ```
- Actual Implementation: 
    - Repo: repo-monolith
    - Solution: Application/Intranet/IntranetPortal/IntranetPortal.sln
    - Path: Application/EDMA.Domain/EDMA.Domain.FacadeWcf/Controllers/RegistrationController.cs

## Dive Deeper
---
- Singlecast Delegate: simple, example above
- Multicast Delegate