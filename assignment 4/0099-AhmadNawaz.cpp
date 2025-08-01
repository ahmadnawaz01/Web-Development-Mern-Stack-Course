#include<iostream>
#include<fstream>
#include<string>
using namespace std;

class task      //task class to store informaation of very task with their name and time deadline
{
public:
	string taskname;
	int deadline;
	task()      //deafult constrcutor to initialize value
	{
		taskname = '\0';
		deadline = 0;
	}
	task(string n, int t)     //paramerized constructor 
	{
		taskname = n;
		deadline = t;
	}
};


class minheapofclass   //min heap class
{
private:
	task* tasklist;    //pointer of class task
	int capacity;
	int sizecount;
	void resizesize()   //resize function in case size of heap is full 
	{
		int newsize = capacity * 2;                       
		task* newtasklist = new task[newsize];              //dynamic new class array of doubled size
		for (int i = 0; i < capacity; i++) 
		{  
			newtasklist[i] = tasklist[i];                   //copy old classes objects to new objects
		}
		delete[]tasklist;
		tasklist = newtasklist;                               //saving the address of new object to old object
		capacity = newsize;
	}
public:
	minheapofclass(int c)    //constructor to intialized size of minheap
	{
		tasklist = new task[c];
		capacity = c;
		sizecount = 0;
	}
	void inserttask(string n, int t)    // insert task in min heap
	{
		if (sizecount == capacity)         //check if full resize it 
		{
			resizesize();
		}
		sizecount = sizecount + 1;
		int index = sizecount;                   
		tasklist[index] = task(n,t);       //add at last index of heap task
		while (index > 1)        // heapifying up  
		{
			int parent = index / 2;        
			if (tasklist[parent].deadline > tasklist[index].deadline)   //comparing with parent if child < parent then swap
			{
				swap(tasklist[parent], tasklist[index]);
				index = parent;      //save the parent index to index and then check their parent comparison
			}
			else
			{
				return;
			}
		}
	}
	task exacttask()    // return the task with earlierest deadline
	{
		if (heapisempty())       //check for heap is it empty or not
		{
			cout << "Empty min heap" << endl;
			return task();
		}
		task exe = tasklist[1];               
		tasklist[1] = tasklist[sizecount];            //save the last index task to first index
		sizecount--;
		int i = 1;
		while (i <= sizecount)      //heafify down
		{
			int smallest = i;         //let i is smallest 
			int leftchild = 2 * i;     //left child index forlmula
			int rightchild = 2 * i + 1;   //right child index
			if (leftchild <= sizecount && tasklist[smallest].deadline > tasklist[leftchild].deadline)   //compare to leftchild and check if lesser swap
			{
				smallest = leftchild;
			}
			if (rightchild <= sizecount && tasklist[smallest].deadline > tasklist[rightchild].deadline)  //compare to right child and check if lesser swap that
			{
				smallest = rightchild;
			}
			if (i != smallest)  //if i is not smallest then swap and move down
			{
				swap(tasklist[i], tasklist[smallest]);
				i = smallest;  //update i to new smallest swapped index
			}
			else 
			{
				break;  // break the loop if heap is in min form
			}
		}
		return exe;
	}
	void displaytask(task t1)  //fun to display single task
	{
		cout << "Task Name = " << t1.taskname << " , Deadline = " << t1.deadline << endl;
	}
	bool heapisempty()   //checks for min heap is it empty?
	{
		if (sizecount == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	void displayheap()    //function to display heap of tasks
	{
		cout << "-------------------Min Heap Task List ----------- ---------" << endl;
		for (int i = 1; i <= sizecount; i++)
		{
			cout << "Task Name = " << tasklist[i].taskname << " , Deadline = " << tasklist[i].deadline << endl;
		}
		cout << endl;
	}
	~minheapofclass()       //destructor
	{
		delete[]tasklist;
	}
	void heapfromfile()   //import task from file and builds minheap
	{
		ifstream fin;      
		fin.open("tasks.txt");     
		if (!fin.is_open())   //filr if not open
		{
			cout << "File is not opened" << endl;
		}
		else
		{
			while (!fin.eof())  //read till the end of the file
			{
				string task;
				int deadline=0;
				getline(fin, task,',');
				fin >> deadline;
				fin.ignore();
				inserttask(task, deadline);	     //read the task and insert into the minheap
			}
		}
		fin.close();
	}
};
int main()
{
	minheapofclass l1(30);
	l1.inserttask("Code Review",13);
	l1.inserttask("Write Report",2);
	l1.inserttask("Client Meeting",4);
	l1.inserttask("Quiz 3",10);
	l1.inserttask("Assignment",15);
	l1.inserttask("Presentation",6);
	l1.inserttask("Viva",7);
	l1.inserttask("Paper Review",12);
	l1.inserttask("Take Demo",1);


	cout << "-------------------- Exacting one by one task from minheap -----------------" << endl;
	l1.displaytask(l1.exacttask());
	l1.displaytask(l1.exacttask());
	l1.displaytask(l1.exacttask());
	l1.displaytask(l1.exacttask());
	l1.displaytask(l1.exacttask());
	l1.displaytask(l1.exacttask());
	l1.displaytask(l1.exacttask());
	l1.displaytask(l1.exacttask());
	cout << endl;



	minheapofclass l2(50);
	l2.heapfromfile();
	cout << "--------------------Build min Heap from txt file and exacting tasks one by one----------------- " << endl;
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	l2.displaytask(l2.exacttask());
	return 0;
}