/*****************************************************************
//
//  Function name: addRecord
//
//  DESCRIPTION:   function that can let user interface add record.
//
//  Parameters:    uaccountNum (int) : account #
//                 uname (char []) : user name
//                 uaddress (char []) : user address
//
//  Return values:  return nothing(void function)
//
****************************************************************/

void llist::addRecord (int uaccountno, char uname[], char uaddress[])
{
    #ifdef DEBUG
    cout << endl << "          starting and loading addRecord" << endl;
    cout << "          uaccountno input: " << uaccountno << endl;
    cout << "          uname input: " << uname << endl;
    cout << "          uaddress input: " << uaddress << endl;
    #endif

    int check = -1;
    record * curr  = start;
    record * temp = new record;

    temp -> accountno = uaccountno;
    strcpy(temp -> name, uname);
    strcpy(temp -> address, uaddress);
    temp -> next = NULL;

    if(curr == NULL)
    {
        start = temp;
        temp -> next = NULL;
        
    }

    while(curr != NULL && check == -1)
    {
        if(curr -> accountno > uaccountno)
        {
            if(curr -> next != NULL)
            {
                if(curr -> next -> accountno < uaccountno)
                {
                    temp -> next = curr -> next;
                    curr -> next = temp;
                    check = 0;
                }
            }
            else
            {
                curr -> next = temp;
                temp -> next = NULL;
                check = 0;
            }
        }
        else if(curr -> accountno < uaccountno)
        {
	    temp -> next = curr;
            start = temp;
            curr = temp;
            check = 0;
        }
        else if(curr -> accountno == uaccountno)
        {
            if(curr -> next != NULL)
            {
                if(curr -> next -> accountno < uaccountno)
                {
                    temp -> next = curr -> next;
                    curr -> next = temp;
                    check = 0;
                }
            }
            else
            {
                curr -> next = temp;
                temp -> next = NULL;
                check = 0;
            }
	}
        curr = curr -> next;
    }
    #ifdef DEBUG
    cout << "          end addRecord" << endl;
    #endif
}

/*****************************************************************
//
//  Function name: printAllRecords
//
//  DESCRIPTION:   function that print all records that been store
//
//  Parameters:    
//
//  Return values:  return nothing(vod function)
//
****************************************************************/

void llist::printAllRecords ()
{
    #ifdef DEBUG
    cout << endl << "          starting printAllRecords" << endl;
    #endif

    record * curr = start;

    if(start == NULL)
    {
        cout << "Error: empty list" << endl;
    }
    while(curr != NULL)
    {
        cout << "Account no: ";
        cout << curr -> accountno << endl;
        cout << "Name: ";
        cout << curr -> name << endl;
        cout << "Address: ";
        cout << curr -> address << endl;
        curr = curr -> next;
    }

    #ifdef DEBUG
    cout << endl << "          end printAllRecords" << endl;
    #endif
}

/*****************************************************************
//
//  Function name: findRecord
//
//  DESCRIPTION:   function that can find record by search account #
//
//  Parameters:    uaccountNum (int) : account #
//
//  Return values:  check : 0 : success
//                          -1 : fail
//
****************************************************************/

int llist::findRecord (int uaccountno)
{
    #ifdef DEBUG
    cout << endl << "          starting and loading findRecord" << endl;
    cout << "          uaccountno input: " << uaccountno << endl;
    #endif

    int check = -1;
    record * curr = start;
    
    while(curr != NULL)
    {
        if(curr -> accountno == uaccountno)
        {
            cout << "Account no: " << curr -> accountno << endl;
            cout << "Name: " << curr -> name << endl;
            cout << "Address: " << curr -> address << endl;
            check = 0;
        }
        
        curr = curr -> next;
    }
    
    #ifdef DEBUG
    cout << endl << "          end printAllRecords" << endl;
    #endif

    return check;
}

/*****************************************************************
//
//  Function name: deleteRecord
//
//  DESCRIPTION:   function that can delete record by given account #
//
//  Parameters:    uaccountNum (int) : account #
//
//  Return values:  check : 0 : success
//                          -1 : fail
//
****************************************************************/

int llist::deleteRecord (int uaccountno)
{
    #ifdef DEBUG
    cout << endl << "          starting and loading deleteRecord" << endl;
    cout << "          uaccountno input: " << uaccountno << endl;
    #endif

    int check = -1;
    int dupcheck= -1;
    record * curr = start;
    record * prev;
    record * del;
    record * temp;

    if(start == NULL)
    {
        check = -1;
    }
    else if(curr -> accountno == uaccountno && curr -> next != NULL)
    {
        while(dupcheck == -1 && curr -> accountno == uaccountno)
        {
            if(curr -> accountno == curr -> next -> accountno)
            {
                temp = curr -> next -> next;
                delete curr -> next;
                curr -> next = temp;
            }
            else
            {
                prev = curr;
                curr = curr -> next;
            }
            
            if(curr -> next == NULL)
            {
                dupcheck = 0;
            }
        }
    }
    else if(dupcheck == -1 && start != NULL && curr -> next != NULL)
    {
        check = -1;
        while(dupcheck == -1 && curr -> next != NULL)
        {
            while(curr -> next != NULL && curr -> accountno == uaccountno && curr -> next -> accountno == uaccountno)
            {
                if(curr -> accountno == curr -> next -> accountno)
                {
                    del = curr -> next -> next;
                    delete curr -> next;
                    curr -> next = del;
                }
                else
                {
                    curr = curr -> next;
                }
            }
            
            if(curr -> accountno != uaccountno)
            {
                prev = curr;
                curr = curr -> next;
            }
            else
            {
                dupcheck = 0;
            }
        }

        if(curr -> accountno == uaccountno && curr -> next != NULL)
        {
            del = curr;
            prev -> next = curr -> next;
            delete del;
            check = 0;
        }
        else if(curr -> accountno == uaccountno && curr -> next == NULL)
        {
            del = curr;
            prev -> next = NULL;
            delete del;
            check = 0;
        }
    }
    if(start == NULL)
    {
        check = -1;
    }
    else
    {
        if(start -> accountno == uaccountno && start -> next != NULL)
        {
            temp = start;
            start = start -> next;
            delete temp;
            check = 0;
        }
        if(start -> accountno == uaccountno && start -> next == NULL)
        {
            start = NULL;
            check = 0;
        }
    }

    #ifdef DEBUG
    cout << endl << "          end deleteRecord" << endl;
    #endif

    return check;
}
