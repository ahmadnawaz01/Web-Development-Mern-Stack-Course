#include<iostream>
#include<fstream>
#include<string>
using namespace std;
class semester   // Class Semetester to store each semester courses 
{
public:    //i keep this public to easily access in this case required not to make getter and setter
	int size = 7;
	string* title = new string[size];    // size is 7 to save 7 courses data for each semester
	string* code = new string[size];     //
	int* credits = new int[size];        //
	double* points = new double[size];   //
	string* grades = new string[size];   //
	double* gpa = new double;         //
	double* cgpa = new double;
	double distance;
	semester()     //default constructor to initialize all data
	{
		for (int i = 0; i < size; i++)
		{
			title[i] = '\0';
			code[i] = '\0';
			credits[i] = 0;
			points[i] = 0.0;
			grades[i] = '\0';
		}
		gpa = 0;
		cgpa = 0;
		distance = 0.0;
	}
	semester(string* t, string* c, int* cred,double *po,string *g,double *gp,double *cgp)   //parametrized constructor
	{
		title = t;
		code = c;
		credits = cred;
		points = po;
		grades = g;
		gpa = gp;
		cgpa = cgp;
		distance = 0.0;
	}
	void setpointspercourses(double *poi)  //input to save our points in data
	{
		points = poi;
		poi = nullptr;
	}
	void checkcs()   //check if course is Cs to give him more weightage
	{
		for (int i = 0; i < size; i++)
		{
			if (code[i][0] == 'C')
			{
				points[i] = points[i] * 1.7;
			}
		}
	}
	void semesterdisplay()     //Display function in case to display courses details
	{
		for (int i = 0; i < size; i++)
		{
			cout << "Course Code = " << code[i] << "         |  " << " Title = " << title[i];
			cout << "             |    " << " Credit hours = " << credits[i] << "   |  Points = " << points[i];
			cout << "   |  " << grades[i] << endl;
		}
		cout << "GPA = " << gpa << endl;
		cout << "CGPA = " << cgpa << endl << endl;
	}
	double finddifference(const semester & etc)   //diiference calculate of each semester
	{
		double dist;
		for (int i = 0; i < size; i++)
		{
				dist = etc.points[i] - points[i];
				distance = distance + dist;
				dist = 0;
		}
		return distance;
	}
	~semester()    //Deallocate all variables to free heap memory
	{
		delete[]title; 
		delete[]code;;    
		delete[] credits;
		delete[] points;
		delete[] grades;
		delete gpa;
		delete cgpa;
	}
	double coursespoints()  //calculate each courses points sum
	{
		double poin = 0;
		for (int i = 0; i < 7; i++)
		{
			poin = poin + (points[i] * credits[i]);
		}
		return poin;
	}
};
class student
{
public:
	semester s[4];
	double meanvalue;
	double studentdistance;
	student()
	{
		studentdistance = 0;
		meanvalue = 0;
	}
	void findstudentdistance(student& stu)       //Calculate distance from adding the semester individial difference in student class
	{
		s[0].checkcs();
		s[1].checkcs();
		studentdistance = (s[0].finddifference(stu.s[0])) + (s[1].finddifference(stu.s[1])); //make differnce of first two semesters
	}
	int dsaindex()   //dsa index return from courses
	{
		for (int i = 0; i < 7; i++)
		{
			if (s[3].title[i] == "Data Structures")
			{
				return i;
			}
		}
	}
	void calculatemeanvalue()   //this calculates the mean value of the two semester of each student
	{
		meanvalue = (s[0].coursespoints() + s[1].coursespoints());
	}
};
int main()
{
	double *firstsemestergrades =new double[7]{9.0,6.0,9.0,4.66,6.99,5.01,2.33};
	double *secondsemestergrades = new double[7]{8.01,6.0,12.0,6.99,6.0,8.01,12.0};
	student myself;
	myself.s[0].setpointspercourses(firstsemestergrades);         //Saving my courses data into student object first two semester for comapring and find difference
	myself.s[1].setpointspercourses(secondsemestergrades);  
	string tempreadstring;        
	double tempo;
	char temp='\0';
	student* stu = new student[100];  //initially decided to make dnamically array of objects 100 students
	int studentcount = 0;
	int coursecount = 0;
	ifstream fin;       //opens the file for reading
	fin.open("StudentsData.csv");
	if (fin.is_open())
	{
		int studentcount = 0;
		getline(fin, tempreadstring);
		getline(fin, tempreadstring);     //initially readspaces in the csv file
		getline(fin, tempreadstring);
		getline(fin, tempreadstring);
		getline(fin, tempreadstring, ',');
		while(!fin.eof())    //loop to read to the end of the file
		{
			for (int i = 0; i < 4; i++)    //loop equal to read the data of each student 
			{
				while (true)
				{
					coursecount++;
					if (tempreadstring == "Credits Attempted:")         //semester check of the student 
					{
						
						getline(fin, tempreadstring, ',');
						getline(fin, tempreadstring, ',');
						fin >> tempo;
						stu->s[coursecount].gpa=&tempo;
						fin >> temp;
						getline(fin, tempreadstring, ',');
						getline(fin, tempreadstring, ',');
						getline(fin, tempreadstring, ',');
						fin >> tempo;
						stu->s[coursecount].cgpa = &tempo;
						getline(fin, tempreadstring);
						getline(fin, tempreadstring);
						getline(fin, tempreadstring);
						getline(fin, tempreadstring);
						getline(fin, tempreadstring);
						getline(fin, tempreadstring);
						getline(fin, tempreadstring, ',');
						break;
					}
					stu->s[i].code[coursecount]=tempreadstring;
					getline(fin, tempreadstring, ',');
					stu->s[i].title[coursecount]=tempreadstring;
					fin >> stu->s[i].credits[coursecount];
					fin >> temp;
					fin >> stu->s[i].points[coursecount];
					fin >> temp;
					getline(fin, tempreadstring, ',');
					stu->s[i].grades[coursecount] = tempreadstring;
					getline(fin, tempreadstring, ',');
					getline(fin, tempreadstring);
					getline(fin, tempreadstring, ',');
				}
			}
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);             // read line of the end semester and other lines that are not needed for the reading of the other student
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring);
			getline(fin, tempreadstring, ',');
		}
		studentcount++;
	}
	else
	{
		cout << "-------------- File is not opened --------" << endl;
	}
	                                      // also calcute distance of each person by myself grades and calculate mean value
	for (int i = 0; i < 100; i++)
	{
		stu[i].findstudentdistance(myself);
		stu[i].calculatemeanvalue();
	}
	for (int j = 0; j < 100; j++)                   // Sorting the students data according to the shortest distance
	{
		for (int k = 0; k < 100 - j - 1; k++)
		{
			if (stu[k].studentdistance > stu[k + 1].studentdistance)
			{
				swap(stu[k], stu[k + 1]);
			}
		}
	}
	cout << "The Prediction about the Grade in the Data Structures = " << stu[0].s[3].grades[stu[1].dsaindex()] << endl;

	myself.calculatemeanvalue();  //calculate mean value 

	delete[]stu; 
	return 0;
}