/*****************************************************************
//
//  Function name: addRecord
//
//  DESCRIPTION:   function that can let user interface add record.
//
//  Parameters:    ustart (struct record **) : strcut record pointer?
//                 uaccountNum (int) : account #
//                 uname (char []) : user name
//                 uaddress (char []) : user address
//
//  Return values:  return nothing(void function)
//
****************************************************************/

void addRecord (struct record ** start, int uaccountno, char uname[], char uaddress[])
{
    int check = -1;
    struct record * curr  = *start;
    struct record * temp = NULL;
    temp = (struct record *)malloc(sizeof(struct record));

    temp -> accountno = uaccountno;
    strcpy(temp -> name, uname);
    strcpy(temp -> address, uaddress);
    temp -> next = NULL;
    
    if(curr == NULL)
    {
        *start = temp;
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
            *start = temp;
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
}

/*****************************************************************
//
//  Function name: printAllRecords
//
//  DESCRIPTION:   function that print all records that been store
//
//  Parameters:    start (struct record *) : struct record pointer?
//
//  Return values:  return nothing(vod function)
//
****************************************************************/

void printAllRecords (struct record * start)
{
    struct record * curr = start;
    if(start == NULL)
    {
        printf("Error: empty list\n");
    }
    while(curr != NULL)
    {
        printf("Account no: %d\n", curr -> accountno);
        printf("Name: %s", curr -> name);
        printf("Address: %s\n", curr -> address);
        curr = curr -> next;
    }
}

/*****************************************************************
//
//  Function name: findRecord
//
//  DESCRIPTION:   function that can find record by search account #
//
//  Parameters:    start (struct record *) : struct record pointer?
//                 uaccountNum (int) : account #
//
//  Return values:  0 : nothing
//
****************************************************************/

int findRecord (struct record * start, int uaccountno)
{
    int check = -1;
    struct record * curr = start;
    
    while(curr != NULL)
    {
        if(curr -> accountno == uaccountno)
        {
            printf("Account no: %d\n", curr -> accountno);
            printf("Name: %s\n", curr -> name);
            printf("Address: %s\n", curr -> address);
            check = 0;
        }
        
        curr = curr -> next;
    }
    
    if(start == NULL && check == -1)
    {
        printf("\nError: empty list\n");
        check = -1;
    }
    else if(check == -1)
    {
        printf("\nError: not found\n");
        check = -1;
    }
    return check;
}

/*****************************************************************
//
//  Function name: deleteRecord
//
//  DESCRIPTION:   function that can delete record by given account #
//
//  Parameters:    start (struct record **) : struct record pointer?
//                 uaccountNum (int) : account #
//
//  Return values:  0 : nothing
//
****************************************************************/

int deleteRecord (struct record ** start, int uaccountno)
{
    int check = -1;
    struct record * curr = *start;
    struct record * prev = NULL;
    struct record * del = NULL;

    if(*start == NULL)
    {
        check = -1;
    }

    if(curr -> accountno == uaccountno && curr -> next == NULL)
    {
        del = curr;
        *start = NULL;
        free(del);
        check = 0;
    }
    if(curr -> accountno == uaccountno)
    {
        while(curr -> accountno == uaccountno && prev == NULL && check == -1)
        {
            del = curr;
            *start = curr -> next;
            free(del);
            
            if(curr -> next -> accountno != uaccountno)
            {
                check = 0;
            }
            else
            {
                curr = curr -> next;
            }   
        }
    }
    else if(*start != NULL)
    {
        while(curr != NULL && check == -1 && curr -> next != NULL)
        {
            while(curr -> accountno == uaccountno && curr -> next -> accountno == uaccountno)
            {
                del = curr;
                prev -> next = curr -> next;
                free(del);

                if(curr -> next -> next == NULL)
                {
                    check = 2;
                }
                else
                {
                    del = curr -> next;
                    curr = curr -> next;
                }
            }
            
            if(curr -> accountno != uaccountno && curr -> next != NULL && check == -1)
            {
                prev = curr;
                curr = curr -> next;
            }
            else
            {
                check = 0;
            }

        }
        curr = *start;
        check = -1;
        while(curr != NULL && check == -1)
        { 
            if(curr -> accountno == uaccountno)
            {
                if(curr -> next != NULL)
                {
                    del = curr;
                    prev -> next = curr -> next;
                    free(del);
                    check = 0;
                }
                else
                {
                    del = curr;
                    prev -> next = NULL;
                    free(del);
                    check = 0;
                }
            }
            prev = curr;
            curr = curr -> next;
       }
       check = 0;
    }
        
    return check;
}

/*****************************************************************
//
//  Function name: writefile
//
//  DESCRIPTION:   function that can delete record by given account #
//
//  Parameters:    start (struct record **) : struct record pointer?
//                 accountNum (int) : account #
//
//  Return values:  0 : nothing
//
****************************************************************/

int writefile (struct record * start, char filename[])
{
    FILE * fptr;
    int check = -1;
    struct record * curr = start;
    fptr = fopen(filename, "w");
    
    if(start == NULL)
    {
        check = -1;
    }
    else
    {
        while(curr != NULL)
        {
            fprintf(fptr, "%d\n", curr -> accountno);
            fprintf(fptr, "%s", curr -> name);
            fprintf(fptr, "%s\n", curr -> address);
            curr = curr -> next;
        }
        check = 0;
        fclose(fptr);
    }
    return check;
}

/*****************************************************************
//
//  Function name: readfile
//
//  DESCRIPTION:   function that can delete record by given account #
//
//  Parameters:    start (struct record **) : struct record pointer?
//                 accountNum (int) : account #
//
//  Return values:  0 : nothing
//
****************************************************************/

int readfile (struct record ** start, char filename[])
{
    FILE * fptr;
    int accountno = 0;
    char name[30], address[60];
    int check = -1;
    fptr = fopen(filename, "r");
    
    if(fptr == NULL)
    {
        check = -1;
    }
    else
    {
        while(fscanf(fptr, "%d %[^\n] %[^!]", &accountno, name, address) != EOF)
        {
            fgetc(fptr);
            addRecord(start, accountno, name, address);
        }
        check = 0;
        fclose(fptr);
    }
    return check;
}
