#include<iostream>
#include<string>
using namespace std;

class node {   //node to store the data of the book
	public: 
	string booktitle;  
	string bookauthor;
	int isbn;
	string category;
	int publishyear;
	node* leftnode;
	node* rightnode;
	node(string t, string a, int i, string c, int p) // parametrerized constructor to store value of the book in the variables
	{
		booktitle = t;
		bookauthor = a;
		isbn = i;
		category = c;
		publishyear = p;
		leftnode = rightnode = nullptr;
	}
};

class library
{
private: 
	node* root;    // root node
public:
	library()   // default constructor to initialized root node when library object maked
	{
		root = nullptr;
	}
	node* insertnode(node* rootnode, node* newbooknode)
	{
		if (rootnode == nullptr)   // check if bst is not make yet make new book root and return it
		{
			return newbooknode;
		}
		if (newbooknode->booktitle < rootnode->booktitle)   // if newbook title is less than  rootnode title then recursibely add the book to the left
		{
			rootnode->leftnode = insertnode(rootnode->leftnode, newbooknode);
		}
		else if (newbooknode->booktitle > rootnode->booktitle) // if newbook title is greater than  rootnode title then recursibely add the book to the right
		{
			rootnode->rightnode = insertnode(rootnode->rightnode, newbooknode);
		}
		else
		{
			cout << "Dublicate titles . book is not added" << endl; //if title is dublicated skip this insertion
		}
		return rootnode;
	}
	node* lessthannode(node* n)   // function to find the lessest node and return that
	{
		if (n == nullptr)
		{
			return nullptr;
		}
		if (n->leftnode == nullptr)
		{
			return n;
		}
		return lessthannode(n->leftnode);
	}
	node* deletenode(node * rootnode, string title)
	{ 
		if (rootnode==nullptr)     
		{
			return nullptr;
		}
		if (title < rootnode->booktitle)    //searching node by title recursively if less than go to left node
		{
			rootnode->leftnode = deletenode(rootnode->leftnode, title);
		}
		else if (title > rootnode->booktitle)  //if greater than go to right node
		{
			rootnode->rightnode = deletenode(rootnode->rightnode, title);
		}
		else  //node is found
		{
			if (rootnode->leftnode == nullptr && rootnode->rightnode == nullptr)  //if no children
			{
				delete rootnode;
				return nullptr;
			}
			if (rootnode->leftnode == nullptr)  // one child right delete it
			{
				node* temp = rootnode->rightnode;
				delete rootnode;
				return temp;
			}
			else if (rootnode->rightnode == nullptr)   //one child left delete it
			{
				node* temp = rootnode->leftnode;
				delete rootnode;
				return temp;
			}
			node* temp = lessthannode(rootnode->rightnode);    // two childrens then  find lesser title in right subtree 
			rootnode->booktitle = temp->booktitle;               //copying the lesser title data into the deleting node
			rootnode->bookauthor = temp->bookauthor;
			rootnode->isbn = temp->isbn;
			rootnode->category = temp->category;
			rootnode->publishyear = temp->publishyear;
			rootnode->rightnode = deletenode(rootnode->rightnode, temp->booktitle);
		}
		return rootnode;
	}
	void deletebook(string t)  //function to delete a book
	{
		root = deletenode(root, t);
	}
	void addbook(string t,string a,int i,string c,int y)  // takes book details and add book to bst
	{
		node* book = new node(t, a, i, c, y);
		root = insertnode(root, book);
	}
	node* searchnode(node* n, string t)  //search node by title in the bst
	{
		if (n == nullptr) //not found
		{
			return n;
		}
		if (t == n->booktitle) //found
		{
			return n;
		}
		if (t<n->booktitle) //if title less than transverse to left subtree
		{
			return searchnode(n->leftnode, t);
		}         
		return searchnode(n->rightnode, t);   //other tranversr to right subtree until found or not

	}
	void searchbookbytitle(string title)
	{
		if (searchnode(root, title) == nullptr)  //if return nullptr not found
		{
			cout << "Book is not found " << endl;
		}
		else
		{
			displaybook(searchnode(root, title));
		}
	}
	void inorderdisplayallbooks(node *rootnode)   // inorder tranversal shows books in alphabetical order
	{
		if (rootnode == nullptr)  //base case
		{
			return;
		}
		inorderdisplayallbooks(rootnode->leftnode);
		displaybook(rootnode);
		inorderdisplayallbooks(rootnode->rightnode);
	}
	void displayallbooks()
	{
		inorderdisplayallbooks(root);
	}
	void displaybook(node * booknode)   //function to display book detail in node
	{
		cout << "Book Title = " << booknode->booktitle << endl;
		cout << "Book Author = " << booknode->bookauthor << endl;
		cout << "ISBN = " << booknode->isbn << endl;
		cout << "Category = " << booknode->category << endl;
		cout << "Year = " << booknode->publishyear << endl;
		cout << endl;
	}

};
int main()
{
	library ll;    
	ll.addbook("Atomic Habits", "James Clear", 9780735211292, "Self-Improvement", 2018);            //adding 10 books 
	ll.addbook("Awaken the Giant Within", "Tony Robbins", 9780671791544, "Self-Improvement", 1991);
	ll.addbook("Can't Hurt Me", "David Goggins", 9781544512280, "Motivation", 2018);
	ll.addbook("Deep Work", "Cal Newport", 9781455586691, "Productivity", 2016);
	ll.addbook("Grit", "Angela Duckworth", 9781501111105, "Psychology", 2016);
	ll.addbook("How to Win Friends and Influence People", "Dale Carnegie", 9780671027032, "Communication", 1936);
	ll.addbook("Make Your Bed", "Admiral William H. McRaven", 9781455570249, "Life Lessons", 2017);
	ll.addbook("Mindset", "Carol S. Dweck", 9780345472328, "Psychology", 2006);
	ll.addbook("The 7 Habits of Highly Effective People", "Stephen R. Covey", 9780743269513, "Personal Growth", 1989);
	ll.addbook("The Power of Now", "Eckhart Tolle", 9781577314806, "Spiritual Growth", 1997);
	int press=0;
	string title, author, category;  //variable for getting inpuut from the user
	int isbn, year;  
	while (true)   //while loop for switch statement
	{
		cout << endl;
		cout << "Press 1 to insert a book " << endl;
		cout << "Press 2 to delete a book by title " << endl;
		cout << "Press 3 to search for book by title" << endl;
		cout << "Press 4 to display all books inorder " << endl;
		cout << "Press 5 to exit" << endl;
		cout << "Enter the Number =";
		cin >> press;
		cout << endl << endl;
		switch (press)
		{
		case 1:
		{
			cout << "Enter the name of the book = ";    //taking input from the user
			cin.ignore();
			getline(cin, title);
			cout << "Enter the author of the book = ";
			getline(cin, author);
			cout << "Enter the ISBN of the book ";
			cin >> isbn;
			cout << "Enter the category of the book ";
			cin.ignore();
			getline(cin, category);
			cout << "Enter the year of the book ";
			cin >> year;
			cout << endl;
			ll.addbook(title, author, isbn, category, year);   //inserting book in the libarary
			break;
		} 
		case 4:   //display all books inorder aphabetically
		{
			cout << "--------------The books in the Library are = ---------------";
			cout << endl << endl;
			ll.displayallbooks();
			break;
		}
		case 2:    //delete the book by title if found
		{
			cout << "Enter the title of the book to delete = ";
			cin.ignore();
			getline(cin, title);
			ll.deletebook(title);
			break;
		}
		case 3:   //search the book by title
		{
			cout << "Enter the title to search the book = ";
			cin.ignore();
			getline(cin, title);
			ll.searchbookbytitle(title);
			break;
		}
		case 5:
		{
			return false;
		}
		default:
		{
			cout << "Invalid Number " << endl;
			break;
		}
		}
	}
	return 0;
}