
| ANNOTATION           | DESCRIPTION                                                                                                              |
|----------------------|--------------------------------------------------------------------------------------------------------------------------|
| [TestInitialize]     | Marks a method that should be called before each test method. One such method should be present before each test class.  |
| [TestCleanup]        | Marks a method that should be called after each test method. One such method should be present before each test class.   |
| [TestClass]          | Marks a class that contains tests.                                                                                       |
| [TestMethod]         | Marks the method, i.e., the actual test case in the test class.                                                          |
| [DataRow]            | Allows setting the values of the parameters of the tests. Multiple [DataRow] annotations can be present in the code.     |
| [DataTestMethod]     | It has the same functionality as the [TestMethod] attribute except that it is used when the [DataRow] attribute is used. |
| [AssemblyInitialize] | Marks the method that should be called once before the execution of any method in the assembly code.                     |
| [AssemblyCleanup]    | Marks the method that should be called once after the execution of any method in the assembly code.                      |
| [Ignore]             | Marks a test method or test class that should be considered for execution, i.e., it is ignored.                          |
| [TestCategory]       | Specify the category for the test.                                                                                       |
| [ClassInitialize]    | Methods that will be called only once before executing any of the test methods present in that class.                    |
| [ClassCleanup]       | Methods that will be called only once after executing the test methods present in that class.                            |