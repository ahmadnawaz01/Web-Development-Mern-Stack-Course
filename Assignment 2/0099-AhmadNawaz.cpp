#include<iostream>
using namespace std;
class datanode    //Node to store data ride request data id,passengername,pickup,destination,timestamp
{
public:
	int id;                        //variables to store request passenger related data
	string passengername;
	string pickuppoint;
	string destinationpoint;
	string timestamp;
	bool passpriority;           
	datanode* next;   //next pointer to store address of next node
	datanode(int id, string name, string pickup, string destination, string time, bool  passpriority = false)  // parametrized constructor to initialize values
	{
		this->id = id;
		this->passengername = name;
		this->destinationpoint = destination;
		this->pickuppoint = pickup;
		this->timestamp = time;
		this->passpriority = passpriority;
		next = nullptr;
	}
};
class riderqueue  //rider queue class of linked list
{
private:
	datanode* head;   //stores starting first node
	int numberofrequest;   //counts number of requests
	int automaticidcounter;  //automatic id generates as request is entered in queue
public:
	riderqueue() //default constructor for initialization
	{
		head = nullptr;     
		numberofrequest = 0;
		automaticidcounter = 0;
	}
	void addrequestinqueue(string name, string pickup, string destination, string time) //adds request at the end of the list
	{
		automaticidcounter++;
		datanode* newnode = new datanode(automaticidcounter, name, pickup, destination, time,false); 
		if (head == nullptr)   //if list is empty so it head is become the new request
		{
			head = newnode;
			return;
		}
		else
		{
			datanode* temp = head;  //add request at the end of the list by transverse linked list at the end
			while (temp->next != nullptr)  // while end temp = nullptr
			{
				temp = temp->next;
			}
			temp->next = newnode;
			return;
		}
	}
	void addpriorityrequest(string name, string pickup, string destination, string time) //add priorityrequest at the front of the queue list
	{
		automaticidcounter++;                       
		datanode* newnode = new datanode(automaticidcounter, name, pickup, destination, time, true);
		newnode->next = head;   //adding in the front and making it head
		head = newnode;
	}
	datanode * processrequestfromfront()  //return the request from the front in the list
	{
		if (head == nullptr)  //tells if list is empty
		{
			cout << "Riders Requests Queue List is empty" << endl;
			return nullptr;
		}
		else   //return first queue request
		{
			datanode* req = head;    
			head = head->next;
			return req;  
		}
	}
	void displayrequest(datanode* temp)  //a simple function to display node data that take node as parameter
	{
		if (temp != nullptr)
		{
			cout << "ID : " << temp->id << endl;
			cout << "Name : " << temp->passengername << endl;
			cout << "Pickup Location : " << temp->pickuppoint << endl;
			cout << "Destination Location : " << temp->destinationpoint << endl;
			cout << "Time : " << temp->timestamp << endl;
			cout << "Priority : ";
			if (temp->passpriority == true)  //check bool variable in node and show tells it is vip or ordinary
			{
				cout << "VIP Request" << endl;
			}
			else
			{
				cout << "Ordinary Request" << endl;
			}
			cout << endl;
		}
		else
		{
			return;
		}
	}
	datanode* searchbyname(string name)  //search by name in requests queue and if found return its node
	{
		if (head == nullptr)  //if list is empty
		{
			cout << "Requests list is empty" << endl;
		}
		else
		{
			bool found = false;
			datanode* temp = head;
			while (temp != nullptr)   //transverse list and matches the name and returns that node which is then displayed by display function
			{
				if (temp->passengername == name)
				{
					found = true;
					cout << "Request Found" << endl;
					return temp;
				}
				temp = temp->next;
			}
			if (found == false)    //in case no name found in request list
			{
				cout << "No Request Found of this Name " << endl;
				return nullptr;
			}
		}
	}
	void cancelrequestbyid(int id)  //cancels the request by matching the id
	{
		if (head == nullptr)  //if list is empty 
		{
			cout << "Requests Queue is empty" << endl;
			return;
		}
		if (head->id == id)  //if head matches the id so delete the head
		{
			datanode* temp = head;
			head = head->next;
			delete temp;
			cout << "Request Deleted" << endl;
			return;
		}
		else   //transverse the list and match node id and delete it
		{
			bool found = false;
			datanode* curr = head->next;
			while (curr != nullptr)
			{
				if (curr->next->id == id)       //id check condition
				{
					datanode* temp = curr->next;
					curr->next = curr->next->next;
					delete temp;
					found = true;
				}
				curr = curr->next;
			}
			if (found == false)  //if id related request not found
			{
				cout << "Request Not found of this id" << endl;
			}
			else
			{
				cout << "Request is Deleted" << endl;
			}
		}
	}
	void displayallrequestinorder()  //display function to display all request by transversing whole list request
	{
		datanode* temp = head;
		if (temp == nullptr)   //if list is empty
		{
			cout << "Riders Requests list is empty" << endl;
			return;
		}
		else
		{
			cout << "-------Passengers Request List ------- " << endl << endl;
			int i = 0;
			while (temp != nullptr)   //display all request by transversing whole request lists
			{
				cout << endl;
				cout << "ID : " << temp->id;
				cout << "      Name : " << temp->passengername << endl;
				cout << "Pickup Location : " << temp->pickuppoint;
				cout << "      Destination Location : " << temp->destinationpoint << endl;
				cout << "Time : " << temp->timestamp;
				cout << "      Priority : ";
				if (temp->passpriority == true)
				{
					cout << "VIP Request" << endl;
				}
				else
				{
					cout << "Ordinary Request" << endl;
				}
				temp = temp->next;
				i++;
			}
			return;
		}
	}
	void reversethequeue()  //revresing the current queue
	{
		datanode* prev = nullptr;
		datanode*curr = head;          //store head
		datanode* nextnode = nullptr;
		while (curr != nullptr)              //revrsing by making the curr node next points to previous
		{
			nextnode = curr->next;
			curr->next = prev;
			prev = curr;
			curr = nextnode;
		}
		head = prev;
		cout << "Queue is Reversed Successfully" << endl;
	}
};
int main()
{
	string name, pickup, destination, time;   //variables to input data from user  like to add requests
	int num = 0; //to check for switch statement
	riderqueue Q;
	Q.addrequestinqueue("Ahmad", "Airline Society", "PIA Road", "13:00");   //Adding some request manually to check functionality of the code
	Q.addrequestinqueue("Nawaz", "Model Town", "Wapda Town", "8:00");
	Q.addrequestinqueue("Ali", "Anarkali", "Kareem Market", "18:00");
	Q.addpriorityrequest("Waleed", "Iqbal Town", "UCP", "8:00");
	do   //do while loop runs al least this if condition is not true
	{
		cout << endl << endl;
		cout << "Press 1 to Add New Rider REQUEST in Queue " << endl;  //instruction commands
		cout << "Press 2 to to Add New VIP Priority Request " << endl;
		cout << "Press 3 to Process the Next Request in the Queue " << endl;
		cout << "Press 4 to Display All REQUESTS in the Queue " << endl;
		cout << "Press 5 to Search a Request by the passenger Name " << endl;
		cout << "Press 6 to Cancels Request by Id" << endl;
		cout << "Press 7 to Reverse the Entire Riders Request Queue" << endl;
		cout << "Press 8 to exit the program " << endl << endl;
		cout << "Enter the Number = ";
		cin >> num;
		switch (num)   //switch statement
		{
		case 1:
		{
			cout << endl;                 //taking inputs from user and adding ordinary request in queue
			cout << "Enter the Name of the Passenger = ";
			cin >> name;
			cout << "Enter the Pickup Location = ";
			cin >> pickup;
			cout << "Enter the Destination Location = ";
			cin >> destination;
			cout << "Enter the timestamp = ";
			cin >> time;
			Q.addrequestinqueue(name, pickup, destination, time);
			break;
		}
		case 2:                
		{
			cout << endl;               //taking inputs from user and adds vip requests in queue
			cout << "Enter the Name of the Passenger = ";
			cin >> name;
			cout << "Enter the Pickup Location = ";
			cin >> pickup;
			cout << "Enter the Destination Location = ";
			cin >> destination;
			cout << "Enter the timestamp = ";
			cin >> time;
			Q.addpriorityrequest(name, pickup, destination, time);
			break;
		}
		case 3:                                
		{   cout << endl << "Next Process Request is " << endl << endl;  //process next request in queue and return it and display function displays it
		    Q.displayrequest(Q.processrequestfromfront());   //display function takes paremeter of process returning node of next process
		    break;
		}
		case 4:            //display all request in queue in order
		{	cout << endl;
		    Q.displayallrequestinorder();
			break;
		}
		case 5:              //take names input from user and search for that request in the queue
		{
			cout <<endl<< "Enter the Name to Search in list =";
			cin >> name;
			Q.displayrequest(Q.searchbyname(name));
			break;

		}
		case 6:   //takes id and search in queue and cancels it
		{
			int id = 0;
			cout << endl << "Enter the ID = ";
			cin >> id;
			Q.cancelrequestbyid(id);
			break;
		}
		case 7:  //it reverses the queue
		{
			Q.reversethequeue();
			break;
		}
		case 8:    //to stop the do while loop by returning false condition
		{
			return false;
		}
		default:  
		{
			cout << "Invalid Number Entered" << endl;
		}
		}
	} while (true);
	return 0;
}