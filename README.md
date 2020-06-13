# TEST APP EMPLOYEE BANCO


Application developed for local deploying using docker-compose

* It is required docker and docker-compose

Instructions:
1. Verify the ports 80, 6000 and 4000 are not being used by any process
2. Run on your terminal sudo docker-compose up
3. Wait for installation Angular will be able on port 8, API on port 4000 and the bd on port 6000
4. Go to your browser and search http://localhost/
5. You'll see two options, you can use both but you won't get any results on list of employees because any has been registered, so use the second option to add one
6. Choose See list of employees


Paths of API

1. GET /employee -- Get an employee | non use for now

2. GET /employee-all -- Get a list of all employees

3. POST /employee -- Create a new employee




