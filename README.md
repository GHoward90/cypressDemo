# Hello and welcome!

Thanks for checking out my repository for a dojo demo example on the quote's page. The contains a script based tests and a pom structure approach. 
As this is prod I didn't interact with the 'Sign up' button. If was a legitimate test it would use the test environment or mocked response for happy and unhappy paths.  

## What's for improvements
1. Convert to fully POM structure 
2. Break up the tests in the script class more to provide better granular tests.
3. Use mock data to simulate different page states 
4. Any test data that is senstive would live in environment variables and wouldn't exist in the repo. The actual values could be then access via secrets when running the tests in the CI/CD pipeline. 
