const employees = [
    {    
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Complete Report",
          "taskDescription": "Prepare the quarterly financial report.",
          "taskDate": "2024-11-22",
          "category": "Finance",
          "active": true,
          "newTask": false,
          "failed": false
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review code submitted by the dev team.",
          "taskDate": "2024-11-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend the weekly project alignment meeting.",
          "taskDate": "2024-11-23",
          "category": "Meetings",
          "active": false,
          "newTask": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix Bug #123",
          "taskDescription": "Resolve the critical issue in the payment system.",
          "taskDate": "2024-11-22",
          "category": "Development",
          "active": true,
          "newTask": true,
          "failed": false
        },
        {
          "taskTitle": "Client Follow-Up",
          "taskDescription": "Send updated project plans to the client.",
          "taskDate": "2024-11-21",
          "category": "Client Relations",
          "active": false,
          "newTask": false,
          "failed": false
        },
        {
          "taskTitle": "Update Documentation",
          "taskDescription": "Revise the user manual for the latest software release.",
          "taskDate": "2024-11-24",
          "category": "Documentation",
          "active": true,
          "newTask": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "System Maintenance",
          "taskDescription": "Perform routine server checks and updates.",
          "taskDate": "2024-11-21",
          "category": "IT",
          "active": true,
          "newTask": true,
          "failed": false
        },
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for the upcoming conference.",
          "taskDate": "2024-11-23",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "failed": true
        },
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Audit office supplies and request new items as needed.",
          "taskDate": "2024-11-25",
          "category": "Operations",
          "active": true,
          "newTask": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Create Social Media Plan",
          "taskDescription": "Develop a content calendar for December.",
          "taskDate": "2024-11-22",
          "category": "Social Media",
          "active": true,
          "newTask": false,
          "failed": false
        },
        {
          "taskTitle": "Research Market Trends",
          "taskDescription": "Analyze competitor strategies for the next quarter.",
          "taskDate": "2024-11-24",
          "category": "Market Research",
          "active": false,
          "newTask": true,
          "failed": false
        },
        {
          "taskTitle": "Organize Workshop",
          "taskDescription": "Coordinate with trainers and book venue for employee training.",
          "taskDate": "2024-11-26",
          "category": "HR",
          "active": true,
          "newTask": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Launch Campaign",
          "taskDescription": "Finalize details for the Black Friday campaign.",
          "taskDate": "2024-11-21",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "failed": false
        },
        {
          "taskTitle": "Employee Survey",
          "taskDescription": "Distribute and analyze the annual employee satisfaction survey.",
          "taskDate": "2024-11-22",
          "category": "HR",
          "active": false,
          "newTask": false,
          "failed": false
        },
        {
          "taskTitle": "Backend Optimization",
          "taskDescription": "Improve database query performance for the analytics dashboard.",
          "taskDate": "2024-11-23",
          "category": "Development",
          "active": true,
          "newTask": true,
          "failed": true
        }
      ]
    }
];
const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];
  
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  
}

export const getLocalStorage = () => {
  
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin')) 
    // console.log(employees,admin)
    return{
      employees,admin
    }
    
  
}