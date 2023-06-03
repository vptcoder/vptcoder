

## Attributes in test frameworks

| **DESCRIPTION**                                                                                      | **NUNIT**                 | **MSTEST**               | **XUNIT**                  |
|--------------------------------------------------------------------------------------------------|-----------------------|----------------------|------------------------|
| Marks a test method/individual test                                                              | [Test]                | [TestMethod]         | [Fact]                 |
| Indicates that a class has a group of unit tests                                                 | [TestFixture]         | [TestClass]          | N.A                    |
| Contains the initialization code, which is triggered before every test case                      | [SetUp]               | [TestInitialize]     | Constructor            |
| Contains the cleanup code, which is triggered after every test case                              | [TearDown]            | [TestCleanup]        | IDisposable.Dispose    |
| Contains method that is triggered once before test cases start                                   | [OneTimeSetUp]        | [ClassInitialize]    | IClassFixture<T>       |
| Contains method that is triggered once before test cases end                                     | [OneTimeTearDown]     | [ClassCleanup]       | IClassFixture<T>       |
| Contains per-collection fixture setup and teardown                                               | N.A                   | N.A                  | ICollectionFixture<T>  |
| Ignores a test case                                                                              | [Ignore(“reason”)]    | [Ignore]             | [Fact(Skip=”reason”)]  |
| Categorize test cases or classes                                                                 | [Category()]          | [TestCategory(“)]    | [Trait(“Category”, “”) |
| Identifies a method that needs to be called before executing any test in test class/test fixture | [TestFixtureSetup]    | [ClassInitialize]    | N.A                    |
| Identifies a method that needs to be called after executing any test in test class/test fixture  | [TestFixtureTearDown] | [ClassCleanUp]       | N.A                    |
| Identifies a method that needs to be called before the execution of any tests in Test Assembly   | N.A                   | [AssemblyInitialize] | N.A                    |
| Identifies a method that needs to be called after execution of tests in Test Assembly            | N.A                  | [AssemblyCleanUp]    | N.A                    |