
# 1. Start with function design
- what is this feature used for?
- what are the behaviours?
- what are the required information to each behaviour?

# 2. Then Identify the Actions
- Translate the behaviours into Actionables

# 3. Then design the Database
- Design the schema to hold the information required or produced by the actions

# 4. Then create the Models
- Create the models to give context to the DB schema at application level
- Models are used by
    - Backend
    - Frontend
> Currently repo-monolith > EDMAModels

# 5. Then create the Functions
- Functions that will carry out the Actions
> Currently repo-monolith > BussinessFacade


# 6. Then create the Frontend
- Frontend gives end-user the controls to manipulate the inputs that is provided to the Functions.
    - This manipulation code should exist primarily in the Controller
- Consists of:
    - View - The UI
    - Models - from 4, either reference directly or mirror it (in the case of different framework .NET vs Node.js)
    - Controller - Contains code that will manipulates the input and output of the Functions
        - Can run on Browser - JavaScript or some kind of FE framework
        - Can run on Server - As code behind or another layer of API